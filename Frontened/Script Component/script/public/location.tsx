"use client";  // Ensure this is client-side only

import React, { useEffect } from "react";
console.log(GeolocationPosition); 


const Location: React.FC = () => {
  useEffect(() => {
    const x = document.getElementById("demo");

    function getLocation(): void {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        if (x) {
          x.innerHTML = "Geolocation is not supported by this browser.";
        }
      }
    }

    function showPosition(position: GeolocationPosition): void {
      console.log(position);
    }

    getLocation();
  }, []);

  return <div id="demo"></div>;
};

export default Location;
