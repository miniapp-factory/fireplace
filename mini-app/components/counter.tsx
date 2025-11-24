"use client";

import { useEffect, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState<number | null>(null);
  const [lastClick, setLastClick] = useState<number>(0);

  // Fetch current count on mount and every second
  useEffect(() => {
    const fetchCount = async () => {
      try {
        const res = await fetch("/api/count");
        const data = await res.json();
        setCount(data.count);
      } catch (e) {
        console.error(e);
      }
    };

    fetchCount();
    const interval = setInterval(fetchCount, 1000);
    return () => clearInterval(interval);
  }, []);

  const increment = async () => {
    const now = Date.now();
    if (now - lastClick < 1000) return; // enforce 1 second cooldown
    setLastClick(now);
    try {
      const res = await fetch("/api/count/increment", { method: "POST" });
      const data = await res.json();
      setCount(data.count);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="flex flex-col items-center gap-2 mt-4">
      <span className="text-xl">Current Count: {count !== null ? count : "…"} </span>
      <button
        onClick={increment}
        className="px-4 py-2 rounded bg-primary text-primary-foreground hover:bg-primary/80 disabled:opacity-50"
        disabled={count === null}
      >
        Increment
      </button>
    </div>
  );
}
