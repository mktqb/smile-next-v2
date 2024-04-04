"use client";
import { useState } from "react";

interface Props {
  transaltions: {
    text: string;
  };
}

export default function ButtonToScript({ transaltions }: Props) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <button onClick={scrollToTop} className="inverse-button">
      {transaltions.text}
    </button>
  );
}
