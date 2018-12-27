import * as weather from "fitbit-weather/companion";
import { geolocation } from "geolocation";
geolocation.getCurrentPosition(function (position) {
    console.log(position.coords.latitude + ", " + position.coords.longitude);
})

weather.setup({
    provider: weather.Providers.openweathermap,
    apiKey: "ad72baee8e450cb81661aa6fe56857e5"
});