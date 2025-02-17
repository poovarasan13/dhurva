import { useEffect, useState } from "react";

function MaskedCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [tail, setTail] = useState([]);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setTail((prevTail) => [
        ...prevTail,
        { x: e.clientX, y: e.clientY, time: Date.now() },
      ]);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTail((prevTail) =>
        prevTail.filter((dot) => Date.now() - dot.time < 500)
      );
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* The comet trail with more sparks */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
        {tail.map((dot, index) => (
          <div
            key={index}
            className="absolute rounded-full bg-sky-400 opacity-80"
            style={{
              left: `${dot.x - 4}px`,
              top: `${dot.y - 4}px`,
              width: `${10 - index * 0.2}px`, // Larger trail size
              height: `${10 - index * 0.2}px`, // Larger trail size
              transform: `scale(${Math.max(1 - index * 0.1, 0)})`,
              pointerEvents: "none",
              boxShadow: `0 0 ${index * 8}px rgba(0, 255, 255, 0.8)`,
            }}
          />
        ))}
      </div>

    
      <div
        className="fixed top-0 left-0 w-8 h-8 bg-[#FE7600] rounded-full pointer-events-none"
        style={{
          left: position.x - 16 + "px",
          top: position.y - 16 + "px",
          transform: "translate(-50%, -50%)",
          mixBlendMode: "difference",
          boxShadow: "0 0 20px rgba(254, 118, 0, 0.8)",
        }}
      ></div>
    </>
  );
}

export default MaskedCursor;
