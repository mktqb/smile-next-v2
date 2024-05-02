"use client";

import { Link, usePathname } from "@/navigation";
import React from "react";
import Image from "next/image";
/* import LogoAVSmile from "@/assets/LogoAVSmile.png"; */
import LogoSmileBus from "@/assets/Logo-SmileBus.png";

import ChangeLocale from "./change-locale";
import {
  PoweredByQuatrobus,
} from "./svg";

interface Props {
  currentLocale: string;
  translations: {
    text: string;
    home: string;
    about_us: string;
    destinations: string;
    contact_us: string;
    faq: string;
    travelPolicy: string;
    cookiePolicy: string;
    language: string;
    spanish: string;
    english: string;
    copyright: string;
  };
}
const Footer = ({ translations, currentLocale }: Props) => {
  const path = usePathname();
  return (
    <footer className="relative flex w-full flex-col bg-gradient-to-t from-[#00d800] to-[#21D840] duration-300">
      <div className="footer-curve -translate-y-[1px]"></div>
      <section className="section-container my-8 grid w-full grid-cols-1 gap-1 bg-transparent duration-300 sm:grid-cols-2 md:grid-cols-12 md:gap-4">
        <div className="col-span-full grid gap-4 text-gray-50 md:col-span-6">
          <Image
            src={LogoSmileBus}
            alt="Logo AV Express | Smile Bus"
            className="w-full max-[350px]:w-[140px] sm:w-[170px] md:w-[280px] xl:w-[400px] 2xl:w-[470px]"
          />
          <p className="mt-4 text-sm md:w-10/12">{translations.text}</p>
          {/* <div className="navbar-social flex w-full">
            <Link
              href="https://www.facebook.com/profile.php?id=61557278186039"
              target="_blank"
            >
              <div className="social-container facebook bg-gray-900">
                <Facebook />
              </div>
            </Link>
          </div> */}
        </div>
        {/* Nav bar */}
        <div className="mt-8 grid grid-cols-12 gap-5 md:col-span-6">
          <div className="col-span-7 text-gray-50 md:col-span-4">
            <h3 className="mb-3 font-semibold">Menú</h3>
            <ul className="navbar-footer grid gap-1">
              <li>
                <Link href="/">{translations.home}</Link>
              </li>
              <li>
                <Link href="/#aboutUs">{translations.about_us}</Link>
              </li>
              <li>
                <Link href="/#terminal">Terminales</Link>
              </li>
              <li>
                <Link href="/faq">{translations.faq}</Link>
              </li>
              <li>
                <Link href="/#contacto">{translations.contact_us}</Link>
              </li>
              <li className="md:hidden">
                <Link href="/travel-policies">{translations.travelPolicy}</Link>
              </li>
              <li className="md:hidden">
                <Link href="/cookie-policies">{translations.cookiePolicy}</Link>
              </li>
            </ul>
          </div>
          <div className="col-span-5 grid grid-cols-1 gap-4 md:col-span-8 md:grid-cols-2">
            <div className="col-span-1 text-gray-50 md:col-span-1">
              <h3 className="mb-3 font-semibold">
                {translations.destinations}
              </h3>
              <ul className="navbar-footer grid gap-1">
                <li>
                  <a>CDMX</a>
                </li>
                <li>
                  <a>Veracruz</a>
                </li>
                <li>
                  <a>Puebla</a>
                </li>
                <li>
                  <a>Xalapa</a>
                </li>
              </ul>
            </div>
            <div className="col-span-1 text-gray-50 md:col-span-1">
              <h3 className="mb-3 font-semibold max-md:hidden">Legal</h3>
              <ul className="navbar-footer mb-6 grid gap-1 max-md:hidden">
                <li>
                  <Link href="/travel-policies">
                    {translations.travelPolicy}
                  </Link>
                </li>
                <li>
                  <Link href="/cookie-policies">
                    {translations.cookiePolicy}
                  </Link>
                </li>
              </ul>
              <ChangeLocale
                currentLocale={currentLocale}
                path={path}
                translations={{
                  language: translations.language,
                  english: translations.english,
                  spanish: translations.spanish,
                }}
              />
            </div>
          </div>
        </div>
        {/* Fin Nav bar */}
      </section>
      <div className="col-span-full grid place-items-center gap-4 bg-transparent pb-4 pt-7 text-white">
        <PoweredByQuatrobus className="inline-flex text-xs" />
        <span className="text-center text-xs">{translations.copyright}</span>
      </div>
    </footer>
  );
};

export default Footer;
