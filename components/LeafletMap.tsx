"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LatLngExpression } from "leaflet";
import { useEffect, useState } from "react";
import axios from "axios";
import L from "leaflet";

// Fix the default marker icon issue
import markerIconShadow from "leaflet/dist/images/marker-shadow.png";

// Fix default marker icon issue
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  shadowUrl: markerIconShadow,
});

interface Coordinates {
  lat: number | null;
  lng: number | null;
}

interface LeafletMapProps {
  address: string;
}

const LeafletMap: React.FC<LeafletMapProps> = ({ address }) => {
  const [coordinates, setCoordinates] = useState<Coordinates>({
    lat: null,
    lng: null,
  });

  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        const apiKey = process.env.NEXT_PUBLIC_POSITIONSTACK_API_KEY;
        const response = await axios.get(
          `http://api.positionstack.com/v1/forward`,
          {
            params: {
              access_key: apiKey,
              query: address,
            },
          }
        );

        if (response.data && response.data.data.length > 0) {
          const { latitude, longitude } = response.data.data[0];
          setCoordinates({ lat: latitude, lng: longitude });
        } else {
          console.error("No results found");
        }
      } catch (error) {
        console.error("Error fetching coordinates:", error);
      }
    };

    if (address) {
      fetchCoordinates();
    }
  }, [address]);

  const position: LatLngExpression = [
    coordinates.lat || 51.505,
    coordinates.lng || -0.09,
  ];

  // Create custom icon using lucide-react's map-pin icon
  const customIcon = L.divIcon({
    html: `<div style="font-size:24px; color: red;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0Z"/><circle cx="12" cy="10" r="3"/></svg></div>`,
    className: "", // Custom styling if needed
    iconSize: [24, 24], // Size of the icon
  });

  return (
    <div style={{ height: "300px", width: "100%" }}>
      {coordinates.lat && coordinates.lng ? (
        <MapContainer
          center={position}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position} icon={customIcon}>
            <Popup>
              Address: {address} <br /> Coordinates: {coordinates.lat},{" "}
              {coordinates.lng}
            </Popup>
          </Marker>
        </MapContainer>
      ) : (
        <p>Loading map with location coordinates...</p>
      )}
    </div>
  );
};

export default LeafletMap;