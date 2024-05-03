"use client";

import React, { useEffect, useState } from "react";
import { FlagMexico, FlagUSA, LogoSmileBus, MdiClose, MdiMenu, Mancha } from "./svg";
import { usePathname, Link } from "@/navigation";
import Image from "next/image";

import clsx from "clsx";
import { Divider } from "@nextui-org/divider";
import ChangeLocale from "./change-locale";
/* import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import LanguageSwitch from "./language-switch"; */
import Logo from "@/assets/logo.png";
/* import LogoM from "@/assets/LogoAVM.png"; */

interface Props {
  currentLocale: string;
  translations: {
    home: string;
    about_us: string;
    destinations: string;
    terminal: string;
    contact_us: string;

    faq: string;
    privacy: string;
    spanish: string;
    english: string;
    travelPolicy: string;
    cookies: string;
    language: string;
  };
}

export default function Header({ translations, currentLocale }: Props) {
  const path = usePathname();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <header className="fixed top-0 z-[70] w-full duration-400">
        <div className="relative w-full bg-[#21D840]">
          <Mancha className="absolute -right-5 top-0 z-10 text-[10rem] text-[#DA089F]" />
          <section className="section-container relative z-20 flex items-center justify-between py-3">
            {/* Logo que se muestra en disp muy pequeños, centrado. Oculto de 300 a más */}
            <button className="" onClick={() => setShowMenu(true)}>
              <span className="sr-only">{translations.home}</span>
              <LogoSmileBus className="my-2 w-[150px] duration-300 hover:-rotate-6 hover:scale-110 max-[350px]:w-[140px] md:w-[160px] xl:w-[180px]" />
            </button>
            <button
              onClick={() => setShowMenu(true)}
              className="place-items-center text-white min-[300px]:grid md:hidden"
            >
              <MdiMenu className="text-3xl" />
            </button>

            {/* Logo que se muestra en disp no tan pequeños, centrado. Se muestra de 300 a más */}
            <div className="hidden items-center gap-3 text-sm text-white md:flex lg:text-base">
              <nav className="navbar-desktop">
                <Link
                  href="/#aboutUs"
                  className="hidden hover:text-primary-500"
                >
                  {translations.about_us}
                </Link>
                <Link href="/#destinations">{translations.destinations}</Link>
                <Link href="/#terminal">{translations.terminal}</Link>
                <Link href="/#contacto" className="max-lg:hidden">
                  {translations.contact_us}
                </Link>
                <Link href="/faq" className="max-lg:hidden">
                  {translations.faq}
                </Link>
                <Link href="/">{translations.privacy}</Link>
              </nav>
            </div>
          </section>
        </div>
      </header>

      <div
        className={clsx(
          "fixed right-0 top-0 z-[95] h-full w-full lg:hidden",
          !showMenu && "pointer-events-none",
        )}
      >
        <button
          className={clsx(
            "/* */ z-0 h-full w-full bg-black duration-300",
            showMenu && "opacity-25 backdrop-blur-md",
            !showMenu && "opacity-0 backdrop-blur-none",
          )}
          onClick={() => setShowMenu(false)}
        />
        <div
          className={clsx(
            "navbar-mobile absolute right-0 top-0 z-[90] flex h-dvh w-full flex-col bg-white text-black duration-400 min-[380px]:w-2/3 min-[450px]:w-1/2 sm:w-1/3",
            !showMenu && "translate-x-full",
          )}
        >
          <div className="px-2">
            <div className="flex w-full items-center justify-between px-3 pt-10">
              <h2 className="font-bold">Menu</h2>
              <button onClick={() => setShowMenu(false)}>
                <MdiClose className="text-2xl" />
              </button>
            </div>
            <Divider className="mt-3 bg-white/70" />
          </div>
          <Link
            onClick={() => setShowMenu(false)}
            className={clsx("w-full", path === "/" && "bg-white text-black")}
            href="/"
          >
            {translations.home}
          </Link>
          <Divider className="mx-2 w-[calc(100%_-_16px)] bg-primary-300" />
          <Link
            onClick={() => setShowMenu(false)}
            className={clsx(
              "w-full",
              path === "/#about-us" && "bg-neutral-800 text-white",
            )}
            href="/#aboutUs"
          >
            {translations.about_us}
          </Link>
          <Divider className="mx-2 w-[calc(100%_-_16px)] bg-primary-300" />
          <Link
            onClick={() => setShowMenu(false)}
            className={clsx(
              "w-full",
              path === "/services" && "bg-neutral-800 text-white",
            )}
            href="/#destinations"
          >
            {translations.destinations}
          </Link>
          <Divider className="mx-2 w-[calc(100%_-_16px)] bg-primary-300" />
          <Link
            onClick={() => setShowMenu(false)}
            className={clsx(
              "w-full",
              path === "/services" && "bg-neutral-800 text-white",
            )}
            href="/#terminal"
          >
            {translations.terminal}
          </Link>
          <Divider className="mx-2 w-[calc(100%_-_16px)] bg-primary-300" />
          <Link
            onClick={() => setShowMenu(false)}
            className={clsx(
              "w-full",
              path === "/#contact-us" && "bg-neutral-800 text-white",
            )}
            href="/#contact_us"
          >
            {translations.contact_us}
          </Link>
          <Divider className="mx-2 w-[calc(100%_-_16px)] bg-primary-300" />
          <Link
            onClick={() => setShowMenu(false)}
            className={clsx(
              "w-full",
              path === "/faq" && "bg-neutral-800 text-white",
            )}
            href="/faq"
          >
            {translations.faq}
          </Link>
          <Divider className="mx-2 w-[calc(100%_-_16px)] bg-primary-300" />
          <Link
            onClick={() => setShowMenu(false)}
            className={clsx(
              "w-full",
              path === "/travel-policies" && "bg-neutral-800 text-white",
            )}
            href="/travel-policies"
          >
            {translations.travelPolicy}
          </Link>
          <Divider className="mx-2 w-[calc(100%_-_16px)] bg-primary-300" />
          <Link
            onClick={() => setShowMenu(false)}
            className={clsx(
              "w-full",
              path === "/cookie-policies" && "bg-neutral-800 text-white",
            )}
            href="/cookie-policies"
          >
            {translations.cookies}
          </Link>
          <Divider className="mx-2 w-[calc(100%_-_16px)] bg-primary-300" />
          <div className="flex items-center justify-between px-5 py-3">
            <span className="pb-1">{translations.language}</span>
            <div className="flex items-center gap-3">
              <Link href={path} locale="en" className="flex">
                <FlagUSA className="text-lg" />
                <span className="pb-1 pl-1">EN</span>
              </Link>
              <Link href={path} locale="es" className="flex">
                <FlagMexico className="text-lg" />
                <span className="pb-1 pl-1">ES</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
