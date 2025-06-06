"use client";

import { animate, stagger } from "motion";
import { splitText } from "motion-plus";
import { useEffect, useRef } from "react";

export default function SplitText() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!containerRef.current) return;

      containerRef.current.style.visibility = "visible";

      const { words } = splitText(containerRef.current.querySelector("h1")!);

      animate(
        words,
        { opacity: [0, 1], y: [10, 0] },
        {
          type: "spring",
          duration: 2,
          bounce: 0,
          delay: stagger(0.05),
        }
      );
    });
  }, []);

  return (
    <div className="text-container" ref={containerRef}>
      <h1 className="big-text">Mudasir Irshad</h1>
      <StyleSheet />
    </div>
  );
}

function StyleSheet() {
  return (
    <style>{`
      .text-container {
        width: 100%;
        padding: 3rem 1rem;
        visibility: hidden;
      }

      .big-text {
        font-size: 4rem;
        font-weight: 700;
        margin: 0;
        line-height: 1.2;
        text-align: left;
        }

      .split-word {
        display: inline-block;
        will-change: transform, opacity;
      }
    `}</style>
  );
}
