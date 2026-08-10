import { useEffect, useRef, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const FRAME_COUNT = 40;
const frameUrl = (index: number) =>
  `/sequence/ezgif-frame-${String(index + 1).padStart(3, "0")}.jpg`;

/**
 * Cinematic scroll-scrubbed image sequence (the classic Apple product-page
 * technique): as the hero scrolls through the viewport, GSAP ScrollTrigger
 * maps scroll progress to a position in a 40-frame shot (wide lounge -> cigar
 * macro -> logo reveal). Consecutive frames are cross-faded on the canvas so
 * the motion reads as smooth despite the low frame count.
 */
export function HeroSequence({
  sectionRef,
  poster,
  onProgress,
}: {
  sectionRef: RefObject<HTMLElement | null>;
  poster: string;
  onProgress?: (progress: number) => void;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const readyRef = useRef(false);
  const drawnFrame = useRef(-1);
  const sizeRef = useRef({ width: 0, height: 0, dpr: 1 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = canvas?.parentElement;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function drawCover(img: HTMLImageElement, alpha: number) {
      if (!ctx) return;
      const { width, height } = sizeRef.current;
      const imgRatio = img.naturalWidth / img.naturalHeight;
      const boxRatio = width / height;
      let drawWidth = width;
      let drawHeight = height;
      if (imgRatio > boxRatio) {
        drawHeight = height;
        drawWidth = height * imgRatio;
      } else {
        drawWidth = width;
        drawHeight = width / imgRatio;
      }
      const dx = (width - drawWidth) / 2;
      const dy = (height - drawHeight) / 2;
      ctx.globalAlpha = alpha;
      ctx.drawImage(img, dx, dy, drawWidth, drawHeight);
      ctx.globalAlpha = 1;
    }

    function renderAt(progress: number) {
      if (!ctx || !readyRef.current) return;
      const { width, height } = sizeRef.current;
      const t = Math.min(1, Math.max(0, progress)) * (FRAME_COUNT - 1);
      const base = Math.floor(t);
      const frac = t - base;
      const next = Math.min(FRAME_COUNT - 1, base + 1);

      const encoded = base + frac;
      if (Math.abs(encoded - drawnFrame.current) < 0.002) return;
      drawnFrame.current = encoded;

      ctx.clearRect(0, 0, width, height);
      const baseImg = imagesRef.current[base];
      const nextImg = imagesRef.current[next];
      if (baseImg) drawCover(baseImg, 1);
      if (nextImg && frac > 0.01) drawCover(nextImg, frac);
    }

    function resize() {
      if (!canvas || !container || !ctx) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = container.getBoundingClientRect();
      sizeRef.current = { width: rect.width, height: rect.height, dpr };
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      drawnFrame.current = -1;
      renderAt(scrollTriggerRef.current?.progress ?? 0);
    }

    const scrollTriggerRef: { current: ScrollTrigger | null } = { current: null };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);
    resize();

    let cancelled = false;
    const images: HTMLImageElement[] = [];
    let loaded = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.decoding = "async";
      img.src = frameUrl(i);
      img.onload = () => {
        loaded += 1;
        if (i === 0) renderAt(0);
        if (loaded === FRAME_COUNT && !cancelled) {
          readyRef.current = true;
          renderAt(scrollTriggerRef.current?.progress ?? 0);
        }
      };
      images.push(img);
    }
    imagesRef.current = images;

    if (!sectionRef.current) {
      return () => {
        cancelled = true;
        resizeObserver.disconnect();
      };
    }

    if (reducedMotion) {
      // Skip scrubbing; just settle on a representative frame once loaded.
      const check = window.setInterval(() => {
        if (readyRef.current) {
          renderAt(0.5);
          window.clearInterval(check);
        }
      }, 150);
      return () => {
        cancelled = true;
        window.clearInterval(check);
        resizeObserver.disconnect();
      };
    }

    // Pin the whole hero in place for ~1.35 screens of scroll so the
    // sequence has room to fully play out before the page is allowed to
    // move on to the next section. The mobile layout stacks the visual and
    // copy within a single 100svh column, so the pinned clone always
    // matches the viewport height — safe to pin at every breakpoint.
    const mm = gsap.matchMedia();

    mm.add("(min-width: 0px)", () => {
      // The site header is `sticky top-0`, so it always occupies the top of
      // the viewport. Without accounting for it, the browser scrolls the
      // hero up underneath the sticky header for those first pixels before
      // ScrollTrigger's pin engages — a visible jump/crop right as the user
      // starts scrolling. Starting the pin at "top <headerHeight>" instead
      // of "top top" makes it engage immediately, with zero pre-scroll.
      const headerOffset = () =>
        document.querySelector("header")?.getBoundingClientRect().height ?? 0;

      const st = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: () => `top ${headerOffset()}`,
        end: () => `+=${window.innerHeight * 1.35}`,
        pin: sectionRef.current,
        pinSpacing: true,
        anticipatePin: 1,
        scrub: 0.65,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          renderAt(self.progress);
          onProgress?.(self.progress);
        },
      });
      scrollTriggerRef.current = st;
      return () => st.kill();
    });

    return () => {
      cancelled = true;
      mm.revert();
      resizeObserver.disconnect();
    };
  }, [sectionRef, onProgress]);

  return (
    <>
      <img
        src={poster}
        alt="Members lounge with leather seating and a glowing cigar ember"
        width={1280}
        height={720}
        loading="eager"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </>
  );
}
