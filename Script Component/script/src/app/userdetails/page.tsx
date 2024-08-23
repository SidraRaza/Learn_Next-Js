"use client";  // Ensure this runs on the client-side only

import { useEffect } from "react";

export default function UserDetailsPage() {
  useEffect(() => {
    // Ensure this runs only on the client side
    if (typeof window !== "undefined" && navigator.geolocation) {
      const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      };

      function success(pos: GeolocationPosition) {
        const crd = pos.coords;
        console.log("Your current position is:");
        console.log(`Latitude: ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);
      }

      function error(err: GeolocationPositionError) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      }

      navigator.geolocation.getCurrentPosition(success, error, options);
    }
  }, []);  // Empty dependency array to run once on mount

  return (
    <div>
      <h1 className="text-3xl font-bold text-red-500 text-center py-20">
        Get User getLocation
      </h1>
    </div>
  );
}
