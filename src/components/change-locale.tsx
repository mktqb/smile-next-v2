"use client";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import path from "path";
import { Link } from "@/navigation";
import { Language, FlagUSA, FlagMexico } from "./svg";

interface Props {
  currentLocale: string;
  path: string;
  translations: {
    language: string;
    spanish: string;
    english: string;
  };
}

export default function ChangeLocale({
  currentLocale,
  path,
  translations,
}: Props) {
  return (
    <Dropdown placement="bottom">
      <DropdownTrigger>
        <div className="flex cursor-pointer items-center gap-1">
          <Language className="text-xl" /> {translations.language}:
          <span className="uppercase">{currentLocale}</span>
        </div>
      </DropdownTrigger>
      <DropdownMenu variant="flat" aria-label="lang">
        <DropdownItem>
          <Link href={path} locale="en" className="flex items-center gap-4">
            <FlagUSA className="text-lg xl:text-xl" />
            <span className="text-black">{translations.english}</span>
          </Link>
        </DropdownItem>
        <DropdownItem>
          <Link href={path} locale="es" className="flex items-center gap-4">
            <FlagMexico className="text-lg xl:text-xl" />
            <span className="text-black">{translations.spanish}</span>
          </Link>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
