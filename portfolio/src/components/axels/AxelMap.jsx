import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { divIcon } from "leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { axelsData } from "../../data/axels";
import { useI18n } from "../../i18n/I18nProvider";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const customIcon = divIcon({
  className: "",
  html: `
    <div class="w-3 h-3 bg-electric rounded-full shadow-lg shadow-electric/50"></div>
  `,
});

const localizePlace = (value, map) => map?.[value] || value;

const AxelMap = () => {
  const { t } = useI18n();

  return (
    <div className="h-[500px] w-full overflow-hidden rounded-2xl border border-white/10 shadow-xl">
      <MapContainer
        center={[48.0, 2.0]}
        zoom={4}
        scrollWheelZoom
        className="h-full w-full"
      >
        <TileLayer
          attribution="&copy; OpenStreetMap"
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />

        {axelsData.map((axel) => (
          <Marker key={axel.id} position={axel.coords} icon={customIcon}>
            <Popup>
              <div className="flex flex-col gap-1 text-black">
                <h3 className="text-base font-semibold">{axel.place}</h3>

                <p className="text-xs opacity-70">
                  {localizePlace(axel.city, t("axels.cities"))},{" "}
                  {localizePlace(axel.country, t("axels.countries"))}
                </p>

                <video src={axel.video} controls className="mt-2 w-[220px] rounded-lg" />
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default AxelMap;
