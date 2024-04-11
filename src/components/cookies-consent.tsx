"use client";

import { Link } from "@/navigation";
import React, { useState, useEffect } from "react";

interface Props {
  translations: {
    title: string;
    description: string;
    accept: string;
    disable: string;
    cookies: string;
  };
}

export default function CookieConsent({ translations }: Props) {
  const [showCookies, setShowCookies] = useState(false);

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem("has-accepted-cookies");
    setShowCookies(!hasAcceptedCookies);
  }, []);

  const setCookies = () => {
    localStorage.setItem("has-accepted-cookies", "true");
    setShowCookies(false);
  };

  return (
    <div
      className={`fixed left-0 top-0 z-[99] h-full w-full bg-opacity-50 bg-gradient-to-b from-primary-300/50 to-primary-800/50 backdrop-blur-sm duration-200 ${
        showCookies ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div
        className={`fixed bottom-0 left-0 z-[99999] flex w-full flex-col rounded-t-xl bg-white shadow-xl duration-200 ${
          showCookies ? "translate-y-0" : "translate-y-[200%]"
        }`}
      >
        <section className="section-container grid grid-cols-1 gap-4 p-4 md:grid-cols-4">
          <div className="col-span-1 md:col-span-3">
            <h1 className="text-xl font-bold text-primary-300">
              {translations.title}
            </h1>
            <span className="text-base text-black">
              {translations.description}{" "}
              <Link
                target="_blank"
                href="/cookie-policies"
                className="font-semibold text-black md:hover:text-black"
              >
                {translations.cookies}
              </Link>
              .
            </span>
          </div>
          <div className="col-span-1 md:grid md:place-items-center">
            <button
              className="rounded-full bg-gradient-to-b from-primary-300 to-primary-600 px-5 py-1 text-white"
              onClick={setCookies}
            >
              {translations.accept}
            </button>
          </div>
        </section>
        <div className="w-full bg-gradient-to-b from-primary-300 to-primary-900 p-4 text-white max-md:text-sm">
          <section className="section-container grid place-items-center">
            <span>{translations.disable}</span>
          </section>
        </div>
      </div>
    </div>
  );
}
