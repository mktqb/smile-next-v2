"use client";

import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { SvgSpinnersPulseRingsMultiple } from "./svg";

type Props = {
  lat: number;
  lng: number;
  zoom: number;
  link?: string;
};

const containerStyle = {
  width: "100%",
  height: "100%",
};

export default function GoogleMaps({ lat, lng, zoom }: Props) {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyAxpjmAs0jpQD6Ccfakj1v31Qu6DBr0ZYs"
      loadingElement={<Loading />}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{ lat, lng }}
        zoom={zoom}
        options={{ mapTypeControl: false }}
      >
        <Marker position={{ lat, lng }} />
      </GoogleMap>
    </LoadScript>
  );
}

function Loading() {
  return (
    <div className="grid h-full w-full place-items-center">
      <SvgSpinnersPulseRingsMultiple className="text-7xl text-slate-500" />
    </div>
  );
}
