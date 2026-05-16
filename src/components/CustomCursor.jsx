"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    let hover = false;
    const cursor = cursorRef.current;
    if (!cursor) return;

    const mousePos = { x: 0, y: 0 };
    const cursorPos = { x: 0, y: 0 };
    const interactiveSelector = "a, button, input, textarea, select, label[for], [role='button'], [role='link'], [onclick]";

    const handleMouseMove = (e) => {
      mousePos.x = e.clientX;
      mousePos.y = e.clientY;
    };

    document.addEventListener("mousemove", handleMouseMove);

    const handlePointerOver = (event) => {
      const target = event.target;
      const interactiveElement = target?.closest?.(interactiveSelector);

      if (interactiveElement) {
        cursor.classList.add("cursor-disable");
      }
    };

    const handlePointerOut = (event) => {
      const target = event.target;
      const interactiveElement = target?.closest?.(interactiveSelector);
      const nextTarget = event.relatedTarget;

      if (interactiveElement && !interactiveElement.contains(nextTarget)) {
        cursor.classList.remove("cursor-disable");
      }
    };

    document.addEventListener("pointerover", handlePointerOver);
    document.addEventListener("pointerout", handlePointerOut);

    const animationLoop = () => {
      if (!hover) {
        const delay = 2;
        cursorPos.x += (mousePos.x - cursorPos.x) / delay;
        cursorPos.y += (mousePos.y - cursorPos.y) / delay;
        cursor.style.left = cursorPos.x - 25 + "px";
        cursor.style.top = cursorPos.y - 25 + "px";
      }
      requestAnimationFrame(animationLoop);
    };

    const frameId = requestAnimationFrame(animationLoop);

    document.querySelectorAll("[data-cursor]").forEach((element) => {
      element.addEventListener("mouseover", (e) => {
        const target = e.currentTarget;
        const rect = target.getBoundingClientRect();

        if (element.dataset.cursor === "icons") {
          cursor.classList.add("cursor-icons");
          cursor.style.left = rect.left - 25 + "px";
          cursor.style.top = rect.top - 25 + "px";
          cursor.style.setProperty("--cursorH", `${rect.height}px`);
          hover = true;
        }
      });

      element.addEventListener("mouseout", () => {
        cursor.classList.remove("cursor-icons");
        hover = false;
      });
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("pointerover", handlePointerOver);
      document.removeEventListener("pointerout", handlePointerOut);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return <div className="cursor-main" ref={cursorRef} />;
}

