"use client";
import { useEffect, useState } from "react";
import { MdiChevronDown } from "./svg";

export default function ButtonToTop() {
  const [visible, setVisible] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handler = () => {
      if (window.scrollY > window.innerHeight + 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`${visible ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"} fixed bottom-10 right-5 grid place-items-center rounded-full bg-black p-1 text-white shadow-xl duration-300`}
    >
      <MdiChevronDown className="rotate-180 text-3xl" />
    </button>
  );
}
