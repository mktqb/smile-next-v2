"use client";

import React, { useEffect, useState } from "react";
import { Facebook, FlagUSA, Instagram, MdiClose, MdiMenu } from "./svg";
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

import Logo from "@/assets/LogoAV3.png";

interface Props {
  currentLocale: string;
  translations: {
    home: string;
    about_us: string;
    contact_us: string;
    destinations: string;
    faq: string;
    spanish: string;
    english: string;
    travelPolicy: string;
    cookies: string;
    /*language: string; */
  };
}

export default function Header({ translations, currentLocale }: Props) {
  const path = usePathname();
  const [position, setPosition] = useState(1000);
  const [visibleHeader, setVisibleHeader] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let moving = window.scrollY;
      if (moving <= 0) {
        setVisibleHeader(true);
      } else {
        setVisibleHeader(moving === 0)
      }
 
      setPosition(moving);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 z-[70] w-full duration-400",
          !visibleHeader && "-translate-y-full",
        )}
      >
        {/* Topbar */}
        {/* <div className="w-full bg-secondary-500">
          <section className="section-container item-center flex justify-between py-1 text-sm">
            <div className="flex">
              <div className="md:item-center mr-8 min-w-[130px] text-white md:grid">
                <span className="text-xs max-md:hidden">
                  {translations.contact_us}:
                </span>{" "}
                <span className="-translate-x-2 translate-y-1 text-lg max-sm:inline-block sm:hidden">
                  <FlagUSA />
                </span>
                <Link
                  className="text-nowrap font-semibold"
                  href="tel:+1(951)569-2869"
                >
                  +1 (951) 569-2869
                </Link>
              </div>
            </div>
            <div className="hidden items-center text-center text-white md:flex">
              <div className="navbar-social item-center hidden w-full lg:flex">
                <Link
                  href="https://www.facebook.com/profile.php?id=61557278186039"
                  target="_blank"
                >
                  <div className="social-container facebook">
                    <Facebook />
                  </div>
                </Link>
                <Link href="https://www.instagram.com/702shuttles">
                  <div className="social-container instagram">
                    <Instagram />
                  </div>
                </Link>
                <ChangeLocale
                  currentLocale={currentLocale}
                  path={path}
                  translations={{
                    english: translations.english,
                    spanish: translations.spanish,
                  }}
                />
              </div>
            </div>
          </section>
        </div> */}
        {/* End Topbar */}
        <div className="fixed left-0 z-[80] w-full bg-white bg-gradient-to-t from-[#022204] to-[#00d800] pb-0 pt-0">
          <section className="section-container flex items-center justify-center min-[300px]:justify-between">
            {/* Logo que se muestra en disp muy pequeños, centrado. Oculto de 300 a más */}
            <button
              className="min-[300px]:hidden"
              onClick={() => setShowMenu(true)}
            >
              <span className="sr-only">{translations.home}</span>
              <Image
                src={Logo}
                alt="bg"
                className="w-[150px] max-[350px]:w-[140px] md:w-[160px] xl:w-[250px]"
              />
            </button>

            <div className="hidden items-center gap-3 text-sm text-white md:flex lg:text-base">
              <nav className="navbar-desktop">
                {/* <Link href="/" className="text-shadow-xs">
                  {translations.home}
                  Inicio
                </Link> */}
                <Link href="/#nosotros" className="hover:text-primary-500">
                  {/* {translations.destinations} */}
                  Nosotros
                </Link>
                <Link href="/#destinos" className="hover:text-primary-500">
                  {/* {translations.about_us} */}
                  Destinos
                </Link>
                <Link href="/#terminales" className="hover:text-primary-500">
                  {/* {translations.home} */}
                  Terminales
                </Link>
              </nav>
            </div>

            {/* Logo que se muestra en disp no tan pequeños, centrado. Se muestra de 300 a más */}
            <Link href="/" className="hidden min-[300px]:block">
              <span className="sr-only">{translations.home}</span>

              <Image
                src={Logo}
                alt="bg"
                className="w-[150px] max-[350px]:w-[140px] md:w-[160px] xl:w-[300px]"
              />
            </Link>

            <button
              onClick={() => setShowMenu(true)}
              className="hidden place-items-center text-white min-[300px]:grid md:hidden"
            >
              <MdiMenu className="text-3xl" />
            </button>

            {/* Logo que se muestra en disp no tan pequeños, centrado. Se muestra de 300 a más */}
            <div className="hidden items-center gap-3 text-sm text-white md:flex lg:text-base">
              <nav className="navbar-desktop">
                <Link href="/#contacto" className="hover:text-primary-500">
                  {/* {translations.destinations} */}
                  Contáctanos
                </Link>
                <Link href="/#faq" className="hover:text-primary-500">
                  {/* {translations.about_us} */}
                  Preguntas frecuentes
                </Link>
                {/* <Link href="/#contact_us" className="text-shadow-xs">
                  {translations.contact_us}
                </Link>
                <Link href="/faq" className="text-shadow-xs">
                  {translations.faq}
                </Link> */}
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
            "navbar-mobile absolute right-0 top-0 z-[90] flex h-dvh w-full flex-col bg-black text-white duration-400 min-[380px]:w-2/3 min-[450px]:w-1/2 sm:w-1/3",
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
            className={clsx(
              "w-full",
              path === "/" && "bg-neutral-800 text-white",
            )}
            href="/"
          >
            {translations.home}
          </Link>
          <Divider className="mx-2 w-[calc(100%_-_16px)] bg-white/70" />
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
          <Divider className="mx-2 w-[calc(100%_-_16px)] bg-white/70" />
          {/* <Link
            onClick={() => setShowMenu(false)}
            className={clsx(
              "w-full",
              path === "/services" && "bg-secondary-500/5 text-secondary-500"
            )}
            href="/#services"
          >
            {translations.services}
          </Link>
          <Divider className="mx-2 w-[calc(100%_-_16px)] bg-white/70" /> */}
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
          <Divider className="mx-2 w-[calc(100%_-_16px)] bg-white/70" />
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
          <Divider className="mx-2 w-[calc(100%_-_16px)] bg-white/70" />
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
          <Divider className="mx-2 w-[calc(100%_-_16px)] bg-white/70" />
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
        </div>
      </div>
    </>
  );
}
