// components/VerticalBars.tsx
import { useEffect, useState } from "react";

const VerticalBars: React.FC = () => {
  const [bars, setBars] = useState<number[]>([]);
  const [barCount, setBarCount] = useState<number>(0);

  useEffect(() => {
    // Calculate bar count based on window width after the component mounts
    const calculateBarCount = () => {
      const newBarCount = Math.floor(window.innerWidth / 12);
      setBarCount(newBarCount);
    };

    calculateBarCount(); // Initial calculation
    window.addEventListener("resize", calculateBarCount); // Recalculate on window resize

    return () => {
      window.removeEventListener("resize", calculateBarCount);
    };
  }, []);

  useEffect(() => {
    // Initialize bars with random heights
    setBars(Array.from({ length: barCount }, () => Math.random() * 100));

    const interval = setInterval(() => {
      // Update bars with random heights every 200ms
      setBars(Array.from({ length: barCount }, () => Math.random() * 300));
    }, 700);

    return () => clearInterval(interval);
  }, [barCount]);

  return (
    <div className="absolute left-0 w-full flex items-center justify-between my-auto">
      {bars.map((height, idx) => (
        <div
          key={idx}
          className="bg-white rounded-md w-[4px] md:w-[5px]"
          style={{
            height: `${height}px`, // Dynamic height
            transition: "height 0.7s ease", // Smooth height transition
          }}
        />
      ))}
    </div>
  );
};

export default VerticalBars;
