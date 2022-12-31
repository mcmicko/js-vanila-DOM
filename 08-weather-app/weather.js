import axios from "axios";

export function getWeather(lat, lon, timezone) {
  return axios.get(
    "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m",
    {
      params: {
        latitide: lat,
        longitude: lon,
        timezone,
      },
    }
  );
}
