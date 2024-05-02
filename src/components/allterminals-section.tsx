"use client";
import React, { useState } from "react";
import Image from "next/image";

// Asume que la estructura de datos de las oficinas se mantiene igual.
import { Office, offices, Terminal, terminals } from "@/utils/model";
import { LocationOnOutline, ArrowDown, CloseCircle, ClockCircle } from "./svg";
import GoogleMaps from "@/components/google-maps";
import Link from "next/link";

export default function AllTerminals({ locale }: { locale: string }) {
  const [selectedTerminal, setSelectedTerminal] = useState<Terminal>(
    terminals[0],
  );

  return (
    <>
      <section className="section-container mt-4 flex w-full flex-col items-center bg-primary-100 max-md:px-0 md:mt-4">
        <div className="flex w-full flex-col gap-1 md:my-8 md:flex-row md:gap-4 xl:gap-5">
          {/* Inicio: Seccion donde se muestran las Terminales Desktop */}
          <div className="flex w-11/12 flex-grow flex-col rounded-3xl border-5 border-[#21D840] max-md:mx-auto md:w-6/12 lg:w-5/12 2xl:w-[40%]">
            {terminals.map((office) => (
              <button
                key={office.id}
                className={`mb-0 flex-grow space-y-1 px-5 pb-5 pt-5 text-left text-sm font-medium first:rounded-t-2xl last:rounded-b-2xl focus:outline-none md:px-5 ${selectedTerminal === office ? " bg-[#21D840] text-white" : "bg-white text-gray-800"}`}
                onClick={() => setSelectedTerminal(office)}
              >
                <h4
                  className={`mb-3 text-lg font-semibold ${
                    selectedTerminal === office
                      ? "text-white"
                      : "text-[#407002]"
                  }`}
                >
                  {office.name}
                </h4>
                <div className="flex items-start gap-1">
                  <LocationOnOutline
                    className={`text-lg ${
                      selectedTerminal === office
                        ? "text-white"
                        : "text-[#DA089F]"
                    }`}
                  />
                  <p
                    className={`w-full text-sm  ${
                      selectedTerminal === office
                        ? "text-white"
                        : "text-[#407002]"
                    }`}
                  >
                    {office.address}
                  </p>
                </div>
              </button>
            ))}
          </div>
          {/* Fin: Seccion donde se muestran las Terminales Desktop */}
          {/* Inicio: Seccion donde se muestran los mapas */}
          <div className="flex w-full flex-grow max-md:mt-4 max-md:aspect-[8/9] sm:rounded-3xl md:w-6/12 lg:w-7/12 2xl:w-[60%]">
            <div className="relative h-full w-full">
              <div className="hidden w-full bg-primary-100 pb-2 md:block">
                <div className="w-full rounded-2xl bg-white px-6 pb-3 pt-4">
                  <div className="flex justify-between gap-1">
                    <div className="flex flex-col">
                      <div className="flex items-start gap-1">
                        <LocationOnOutline className="text-lg text-primary-500" />
                        <p className="w-full text-sm text-black">
                          Referencia: {selectedTerminal.ref1}
                        </p>
                      </div>
                      <div className="flex items-start gap-1">
                        <ClockCircle className="pl-[1px] pt-[3px] text-[1.17rem] leading-[1.85rem] text-primary-500" />
                        <p className="w-full text-sm text-black">
                          Acceso: {selectedTerminal.ref2}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-6">
                      <div className="bg-red grid aspect-square h-fit w-fit">
                        <Link
                          target="_blank"
                          className="text-3xl text-primary-500"
                          // href={`${selectedTerminal.url}`}
                          href="#"
                        >
                          <LocationOnOutline />
                        </Link>
                        <span className="text-center text-xs">Google Maps</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-full w-full overflow-hidden sm:rounded-2xl">
                <Image
                  src={selectedTerminal.url}
                  alt="image"
                  className="h-auto w-full rounded-2xl object-cover object-center"
                />
                {/* <Link
                  className="text-3xl text-primary-500"
                  href={`${selectedTerminal.url}`}
                >
                  {selectedTerminal.url}
                </Link> */}
              </div>
            </div>
          </div>
          {/* Fin: Seccion donde se muestran los mapas */}
        </div>
      </section>
    </>
  );
}
