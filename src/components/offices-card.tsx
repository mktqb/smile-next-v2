"use client";
import React, { useState } from "react";

// Asume que la estructura de datos de las oficinas se mantiene igual.
import { Office, offices } from "@/utils/model";
import { CallOutline, LocationOnOutline, ArrowDown, CloseCircle } from "./svg";
import GoogleMaps from "@/components/google-maps";

export default function OfficesComponent({ locale }: { locale: string }) {
  const [selectedOffice, setSelectedOffice] = useState<Office>(offices[0]);

  return (
    <>
      <section className="section-container mt-4 flex w-full flex-col items-center bg-white max-md:px-0 md:mt-4">
        <div className="flex w-full flex-col gap-1 md:my-8 md:flex-row md:gap-4">
          {/* Inicio: Seccion donde se muestran las oficinas */}
          <div className="flex w-11/12 flex-grow flex-col max-md:mx-auto md:w-6/12 lg:w-5/12 2xl:w-4/12">
            {offices.map((office) => (
              <button
                key={office.id}
                className={`mb-5 flex-grow space-y-2 rounded-3xl px-5 pb-6 pt-6 text-left text-sm font-medium shadow-lg last:mb-0 focus:outline-none md:px-6 ${selectedOffice === office ? " bg-[#fa9500] text-white" : "bg-white text-gray-800"}`}
                onClick={() => setSelectedOffice(office)}
              >
                <h4 className="mb-4 text-lg font-semibold">
                  {office.name[locale as "en" | "es"]}
                </h4>
                <div className="flex items-start gap-1">
                  <LocationOnOutline
                    className={`text-lg ${
                      selectedOffice === office
                        ? "text-white"
                        : "text-primary-500"
                    }`}
                  />
                  <p className="w-full text-sm">{office.address}</p>
                </div>
                <a
                  href={office.phonelink1}
                  className="flex w-fit items-start gap-1"
                >
                  <CallOutline
                    className={`text-lg ${
                      selectedOffice === office
                        ? "text-white"
                        : "text-primary-500"
                    }`}
                  />
                  <p>{office.phone1}</p>
                </a>
              </button>
            ))}
          </div>
          {/* Fin: Seccion donde se muestran las oficinas */}
          {/* Inicio: Seccion donde se muestran los mapas */}
          <div className="flex w-full flex-grow bg-primary-300 max-md:mt-4 max-md:aspect-[8/9] sm:rounded-3xl sm:p-4 md:w-6/12 lg:w-7/12 2xl:w-8/12">
            <div className="relative h-full w-full">
              <div className="h-full w-full overflow-hidden sm:rounded-2xl">
                <GoogleMaps
                  lat={selectedOffice.lat}
                  lng={selectedOffice.lng}
                  zoom={17}
                />
              </div>
            </div>
          </div>
          {/* Fin: Seccion donde se muestran los mapas */}
        </div>
      </section>
    </>
  );
}
