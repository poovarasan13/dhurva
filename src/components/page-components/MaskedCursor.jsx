import { useEffect, useState } from "react";

function MaskedCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [tail, setTail] = useState([]);

  useEffect(() => {
    const moveCursor = (e) => {
      const x = e.clientX || (e.touches && e.touches[0]?.clientX);
      const y = e.clientY || (e.touches && e.touches[0]?.clientY);
      if (x !== undefined && y !== undefined) {
        setPosition({ x, y });
        setTail((prevTail) => [...prevTail, { x, y, time: Date.now() }]);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("touchmove", moveCursor, { passive: false });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("touchmove", moveCursor);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTail(
        (prevTail) => prevTail.filter((dot) => Date.now() - dot.time < 800) // Keeps more bubbles in the trail
      );
    }, 20); // Faster update for a denser effect

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Comet trail with more bubbles */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
        {tail.map((dot, index) => (
          <div
            key={index}
            className="absolute rounded-full bg-sky-400 opacity-90"
            style={{
              left: `${dot.x - 2}px`,
              top: `${dot.y - 2}px`,
              width: `${6 - index * 0.2}px`, // Smaller bubbles
              height: `${6 - index * 0.2}px`,
              transform: `scale(${Math.max(1 - index *0.01, 0)})`,
              pointerEvents: "none",
              boxShadow: `0 0 ${index * 10}px rgba(0, 255, 255, 0.9)`, // Stronger glow
            }}
          />
        ))}
      </div>

      {/* Smaller Cursor */}
      <div
        className="fixed top-0 left-0 w-8 h-8 bg-[#FE7600] rounded-full pointer-events-none"
        style={{
          left: position.x - 8 + "px",
          top: position.y - 8 + "px",
          transform: "translate(-50%, -50%)",
          mixBlendMode: "difference",
          boxShadow:
            "0 0 25px rgba(254, 118, 0, 1), 0 0 50px rgba(254, 118, 0, 0.6)", // More intense glow
        }}
      ></div>
    </>
  );
}

export default MaskedCursor;
