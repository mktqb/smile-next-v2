"use client";

import { Link, usePathname } from "@/navigation";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Logo from "@/assets/logo.png";
import {
  Facebook,
  FlagMexico,
  FlagUSA,
  Instagram,
  Bgbrmd,
  PoweredByQuatrobus,
} from "./svg";

interface Props {
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
const Footer = ({ translations }: Props) => {
  
  const path = usePathname();
  return (
    <footer className="flex w-full flex-col bg-primary-600 duration-300 relative">
    <Bgbrmd className="absolute right-0 bottom-0" />
      <div className="footer-curve"></div>
      <section className="section-container my-8 grid w-full grid-cols-1 gap-1 bg-transparent duration-300 sm:grid-cols-2 md:grid-cols-12 md:gap-4">
        <div className="col-span-full grid gap-4 text-gray-50 md:col-span-4">
          <Image
                  src={Logo}
                  alt="bg"
                  className="max-[350px]:w-[140px] w-[150px] md:w-[250px]"
                />
          <p className="mt-4 text-sm md:w-10/12">{translations.text}</p>
          <div className="navbar-social flex w-full">
            <Link
              href="https://www.facebook.com/profile.php?id=61557278186039"
              target="_blank"
            >
              <div className="social-container facebook bg-gray-900">
                <Facebook />
              </div>
            </Link>
          </div>
        </div>
        {/* Nav bar */}
        <div className="mt-8 grid grid-cols-12 gap-5 md:col-span-8">
          <div className="col-span-7 text-gray-50 md:col-span-4">
            <h3 className="mb-3 font-semibold">{translations.home}</h3>
            <ul className="navbar-footer grid gap-1">
              <li>
                <Link href="/">{translations.home}</Link>
              </li>
              <li>
                <Link href="/faq">{translations.faq}</Link>
              </li>
              <li>
                <Link href="/cookie-policies">{translations.cookiePolicy}</Link>
              </li>
              <li>
                <Link href="/travel-policies">
                  {translations.travelPolicy}
                </Link>
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
                  <a>Inland Empire</a>
                </li>
                <li>
                  <a>San Diego, CA</a>
                </li>
                <li>
                  <a>Tijuana, MX</a>
                </li>
              </ul>
            </div>
            <div className="col-span-1 text-gray-50 md:col-span-1">
              <h3 className="mb-3 font-semibold">{translations.language}</h3>
              <ul className="navbar-footer grid gap-1">
                <li>
                  <FlagUSA className="inline-flex text-lg" />
                  <Link className="inline-flex pl-2" href={path} locale="en">
                    {translations.english}
                  </Link>
                </li>
                <li>
                  <FlagMexico className="inline-flex text-lg" />
                  <Link className="inline-flex pl-2" href={path} locale="es">
                    {translations.spanish}
                  </Link>
                </li>
              </ul>
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
