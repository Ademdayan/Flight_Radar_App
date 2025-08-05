import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
  Polyline,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-rotatedmarker"; // Burada yükledik
import { useDispatch, useSelector } from "react-redux";
import L from "leaflet";
import { clearRoute } from "../redux/slices/detailSlice";
import { useEffect } from "react";
import { getFlights } from "../redux/actions";

const planeIcon = L.divIcon({
  className: "custom-icon",
  html: `<div>
    <img src="/plane-icon.png" alt="Plane Icon" style="width: 30px; height: 30px;" />
       </div>`,
  iconSize: [30, 30],
});

const Map = ({ setDetailId }) => {
  const { flights } = useSelector((state) => state.flight);
  const { route } = useSelector((store) => store.detail);
  const dispatch = useDispatch();
  useEffect(() => {
    const id = setInterval(() => {
      dispatch(getFlights());
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <MapContainer
      center={[38.922892, 35.411169]}
      zoom={6}
      scrollWheelZoom={true}
      zoomControl={false}
      className="leaflet-container"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ZoomControl position="bottomright" />

      {flights.map((flight) => (
        <Marker
          key={flight.id}
          position={[flight.lat, flight.lng]}
          icon={planeIcon}
          rotationAngle={flight.deg - 90} // Burada dönüş ekliyoruz
          rotationOrigin="center"
        >
          <Popup>
            <div className="popup">
              <span>Flight Code: {flight.code} </span>
              <button
                onClick={() => setDetailId(flight.id)}
                className=" btn-sm mt-2"
              >
                Detail
              </button>
              {route.length > 1 && (
                <button onClick={() => dispatch(clearRoute())}>
                  {" "}
                  Clear Route
                </button>
              )}
            </div>
          </Popup>
        </Marker>
      ))}
      {route && <Polyline positions={route} />}
    </MapContainer>
  );
};

export default Map;
