"use client";

import { useEffect, useState } from "react";

export default function CursorDot() {
  const [position, setPosition] = useState({ x: -20, y: -20 });

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => setPosition({ x: event.clientX, y: event.clientY });
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return <span className="cursor-dot" style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }} aria-hidden="true" />;
}