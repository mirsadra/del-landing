"use client";

import { useState, useEffect } from "react";

const backgrounds = [
  "/background1.jpg",
  "/background2.jpg",
  "/background3.jpg",
  "/background4.jpg",
  "/background5.jpg",
];

export default function Home() {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 30000); // Change background every 30 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="h-screen w-screen flex flex-col justify-center items-center text-white"
      style={{
        backgroundImage: `url(${backgrounds[currentBg]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <header className="absolute top-4 left-4 flex gap-4">
        <h1 className="text-2xl font-bold">Zara Home</h1>
        <nav className="flex gap-4">
          <a href="https://example.com/editorial" className="hover:underline">
            Editorials
          </a>
          <a href="https://example.com/christmas" className="hover:underline">
            Christmas
          </a>
          <a href="https://example.com/dining" className="hover:underline">
            Dining
          </a>
          <a href="https://example.com/new-in" className="hover:underline">
            New In
          </a>
        </nav>
      </header>
      <main>
        <h2 className="text-4xl font-bold">A Little Magical Christmas</h2>
      </main>
    </div>
  );
}
