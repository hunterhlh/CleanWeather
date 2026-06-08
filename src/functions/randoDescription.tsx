export default function (weatherData: any) {
  const weatherCode = weatherData?.current_weathercode;
  console.log("weather condition:", weatherCode);
  console.log("full weather data:", JSON.stringify(weatherData, null, 2));

  let opt1: any = "";
  let opt2: any = "";
  let opt3: any = "";
  let opt4: any = "";
  let opt5: any = "";

  if (weatherCode === 0) {
    // Clear sky
    opt1 = "Skies are completely clear right now, great conditions outside.";
    opt2 = "It's a beautiful clear day right now.";
    opt3 = "Sun is out and skies are clear right now.";
    opt4 = "No weather concerns right now.";
    opt5 = "Clear and calm outside right now.";
  } else if (weatherCode === 1) {
    // Mainly clear
    opt1 = "Just a few clouds in the sky right now, great conditions outside.";
    opt2 = "Mostly sunny with a few clouds right now.";
    opt3 = "It's a nice one right now with only a few clouds passing by.";
    opt4 = "Partly sunny right now, great conditions outside.";
    opt5 = "Light cloud cover right now but a great day out there.";
  } else if (weatherCode === 2) {
    // Partly cloudy
    opt1 = "Scattered clouds overhead right now, still a decent day outside.";
    opt2 = "Some clouds moving through right now, nothing concerning.";
    opt3 = "It's partly cloudy out there right now.";
    opt4 = "Clouds are scattered across the sky right now.";
    opt5 = "A mix of sun and clouds right now.";
  } else if (weatherCode === 3) {
    // Overcast
    opt1 = "Fully overcast right now, gray skies but dry.";
    opt2 = "Thick cloud cover right now, no sunshine but no rain either.";
    opt3 = "It's completely cloudy outside right now.";
    opt4 = "Heavy overcast skies right now, feels cooler than it looks.";
    opt5 = "Overcast conditions right now, gray and calm out there.";
  } else if (weatherCode === 45) {
    // Fog
    opt1 = "Fog is thick right now, take it very slow while driving.";
    opt2 = "Dense fog outside right now, turn on your fog lights.";
    opt3 = "Visibility is very low right now due to fog.";
    opt4 = "Heavy fog active right now, be extremely cautious on the road.";
    opt5 =
      "It's a foggy one right now, slow down and increase your following distance.";
  } else if (weatherCode === 48) {
    // Depositing rime fog
    opt1 =
      "Freezing fog is forming ice right now, surfaces are getting slippery.";
    opt2 =
      "Rime fog is active right now, ice may be forming on roads and walkways.";
    opt3 =
      "Freezing fog conditions right now, take extreme caution on all surfaces.";
    opt4 =
      "Icy fog outside right now, roads and sidewalks are getting dangerous.";
    opt5 =
      "Dangerous rime fog right now, watch every step and drive very slowly.";
  } else if (weatherCode === 51) {
    // Light drizzle
    opt1 = "Light drizzle is falling right now, grab an umbrella.";
    opt2 = "It's drizzling lightly right now, a jacket will help.";
    opt3 = "Fine mist coming down right now, worth staying covered.";
    opt4 = "Light drizzle active right now, nothing heavy but you'll feel it.";
    opt5 = "It's a drizzly one right now, grab something to stay dry.";
  } else if (weatherCode === 53) {
    // Moderate drizzle
    opt1 = "It's drizzling outside right now, take your umbrella.";
    opt2 = "Steady drizzle falling right now, grab a waterproof layer.";
    opt3 = "Drizzle is coming down right now, stay covered.";
    opt4 = "Active drizzle right now, you'll get damp without cover.";
    opt5 = "It's drizzling right now, a jacket or umbrella will do.";
  } else if (weatherCode === 55) {
    // Dense drizzle
    opt1 = "Heavy drizzle falling right now, treat it like rain.";
    opt2 =
      "It's coming down hard for drizzle right now, take a proper umbrella.";
    opt3 = "Thick drizzle outside right now, a hood won't cut it.";
    opt4 = "Heavy drizzle active right now, grab rain gear.";
    opt5 = "Serious drizzle right now, you'll get wet without an umbrella.";
  } else if (weatherCode === 56) {
    // Light freezing drizzle
    opt1 =
      "Freezing drizzle is falling lightly right now, surfaces may be getting icy.";
    opt2 = "Light freezing drizzle right now, watch your step on walkways.";
    opt3 =
      "Icy drizzle active right now, roads and sidewalks are getting slick.";
    opt4 =
      "Freezing drizzle coming down right now, take caution while driving.";
    opt5 =
      "It's lightly freezing out there right now, watch for slippery spots.";
  } else if (weatherCode === 57) {
    // Dense freezing drizzle
    opt1 =
      "Heavy freezing drizzle right now, ice is forming fast on all surfaces.";
    opt2 =
      "Dense freezing drizzle active right now, avoid driving if possible.";
    opt3 =
      "Serious icing conditions right now from freezing drizzle, take shelter.";
    opt4 =
      "Freezing drizzle is coming down hard right now, roads are getting dangerous.";
    opt5 = "Dangerous freezing drizzle right now, stay inside if you can.";
  } else if (weatherCode === 61) {
    // Slight rain
    opt1 = "Light rain is falling right now, grab your umbrella.";
    opt2 = "It's raining lightly outside right now, a jacket will help.";
    opt3 = "Steady light rain right now, worth having an umbrella on you.";
    opt4 = "Rain is coming down lightly right now, stay covered.";
    opt5 = "Light rain active right now, you'll feel it without cover.";
  } else if (weatherCode === 63) {
    // Moderate rain
    opt1 = "Moderate rain is falling right now, take your umbrella.";
    opt2 = "It's raining steadily right now, grab a proper umbrella.";
    opt3 = "Decent rain coming down right now, stay covered.";
    opt4 = "Rain is picking up right now, make sure you have your umbrella.";
    opt5 = "Steady moderate rain right now, you'll get wet without cover.";
  } else if (weatherCode === 65) {
    // Heavy rain
    opt1 = "Heavy rain is falling right now, take full rain gear.";
    opt2 = "It's really coming down out there right now, be careful.";
    opt3 =
      "Intense rain active right now, an umbrella and jacket are both worth it.";
    opt4 = "Heavy rain hitting right now, consider waiting it out if you can.";
    opt5 = "Serious rain outside right now, roads are getting wet.";
  } else if (weatherCode === 66) {
    // Light freezing rain
    opt1 = "Freezing rain is falling right now, surfaces are getting icy.";
    opt2 = "It's freezing rain outside right now, avoid driving if possible.";
    opt3 = "Ice is forming on surfaces right now, watch your step.";
    opt4 = "Freezing rain active right now, roads and sidewalks are slick.";
    opt5 = "Dangerous freezing rain right now, take extreme caution outside.";
  } else if (weatherCode === 67) {
    // Heavy freezing rain
    opt1 =
      "Heavy freezing rain is falling right now, do not go outside unless necessary.";
    opt2 = "Serious icing event right now, roads are extremely dangerous.";
    opt3 =
      "Heavy freezing rain active right now, surfaces are becoming treacherous.";
    opt4 = "Thick ice forming on everything right now, avoid all travel.";
    opt5 =
      "Dangerous heavy freezing rain right now, stay inside and off the roads.";
  } else if (weatherCode === 71) {
    // Slight snowfall
    opt1 = "Light snow is falling right now, watch for slippery surfaces.";
    opt2 = "It's snowing lightly outside right now, bundle up.";
    opt3 = "Snow is coming down right now, take it slow out there.";
    opt4 = "Light snow active right now, sidewalks may be getting slick.";
    opt5 = "A light snow is falling right now, dress warm.";
  } else if (weatherCode === 73) {
    // Moderate snowfall
    opt1 = "Snow is falling right now, roads may be getting slick.";
    opt2 = "It's snowing outside right now, drive carefully.";
    opt3 = "Active snowfall right now, watch for icy patches.";
    opt4 = "Snow coming down right now, take it slow.";
    opt5 = "Steady snow right now, roads are getting slippery.";
  } else if (weatherCode === 75) {
    // Heavy snowfall
    opt1 = "Heavy snow is falling right now, roads are getting bad.";
    opt2 = "It's really coming down right now, avoid driving if possible.";
    opt3 = "Significant snowfall right now, visibility is reduced.";
    opt4 = "Heavy snow active right now, roads are getting dangerous.";
    opt5 = "Serious snow happening right now, stay inside if you can.";
  } else if (weatherCode === 77) {
    // Snow grains
    opt1 =
      "Snow grains are falling right now, surfaces may be getting slippery.";
    opt2 =
      "Granular snow is coming down right now, watch your footing outside.";
    opt3 =
      "Snow grains active right now, roads and sidewalks may be getting slick.";
    opt4 = "It's pelting small snow grains right now, take it slow out there.";
    opt5 =
      "Grainy snow falling right now, bundle up and watch for slick spots.";
  } else if (weatherCode === 80) {
    // Slight rain showers
    opt1 =
      "Light rain showers are passing through right now, keep an umbrella handy.";
    opt2 = "It's showering lightly right now, a light jacket will do.";
    opt3 =
      "Light showers falling right now, worth having something to stay dry.";
    opt4 = "Brief light showers right now, a compact umbrella is all you need.";
    opt5 = "Shower activity right now but nothing heavy.";
  } else if (weatherCode === 81) {
    // Moderate rain showers
    opt1 = "Rain showers are active right now, take your umbrella.";
    opt2 = "It's showering outside right now, grab something waterproof.";
    opt3 = "Showers coming down right now, stay covered.";
    opt4 = "Active shower rain right now, a jacket and umbrella will do.";
    opt5 = "Rain showers hitting right now, stay covered.";
  } else if (weatherCode === 82) {
    // Violent rain showers
    opt1 =
      "Violent rain showers are hitting right now, take cover immediately.";
    opt2 =
      "Intense burst showers right now, do not go outside without full rain gear.";
    opt3 = "Heavy and sudden showers right now, roads may be flooding.";
    opt4 =
      "Violent downpour happening right now, stay sheltered until it passes.";
    opt5 = "Extreme shower rain active right now, avoid travel if possible.";
  } else if (weatherCode === 85) {
    // Slight snow showers
    opt1 = "Light snow showers are falling right now, watch for slick spots.";
    opt2 = "It's snowing lightly in showers right now, bundle up.";
    opt3 = "Shower snow active right now, roads may be getting slippery.";
    opt4 = "Light snow falling in bursts right now, take it slow.";
    opt5 = "Brief snow showers right now, dress warm.";
  } else if (weatherCode === 86) {
    // Heavy snow showers
    opt1 =
      "Heavy snow showers are active right now, roads are getting dangerous.";
    opt2 = "It's snowing hard in bursts right now, avoid driving if possible.";
    opt3 = "Intense snow showers right now, visibility is reduced.";
    opt4 = "Heavy shower snow active right now, roads are getting bad.";
    opt5 = "Significant snow falling right now, stay inside if you can.";
  } else if (weatherCode === 95) {
    // Thunderstorm: slight or moderate
    opt1 = "There's a thunderstorm happening right now, take cover.";
    opt2 = "Thunder and lightning are active right now, stay sheltered.";
    opt3 = "It's storming outside right now, stay indoors if possible.";
    opt4 = "Active thunderstorm right now, not a good time to be outside.";
    opt5 = "Storm is happening right now, take cover and stay aware.";
  } else if (weatherCode === 96) {
    // Thunderstorm with slight hail
    opt1 = "A thunderstorm with hail is active right now, stay indoors.";
    opt2 =
      "Thunder, lightning, and hail are all happening right now, take shelter.";
    opt3 = "Hail and storm activity right now, keep away from windows.";
    opt4 =
      "Active hailstorm right now, bring in anything outside that could be damaged.";
    opt5 =
      "It's hailing with a thunderstorm right now, stay inside and away from windows.";
  } else if (weatherCode === 99) {
    // Thunderstorm with heavy hail
    opt1 =
      "A severe thunderstorm with heavy hail is happening right now, do not go outside.";
    opt2 =
      "Large hail and lightning are both active right now, take shelter immediately.";
    opt3 =
      "Dangerous hailstorm right now, stay away from windows and vehicles if possible.";
    opt4 =
      "Heavy hail and thunder pounding right now, seek interior shelter now.";
    opt5 =
      "Severe storm with heavy hail active right now, this is a dangerous situation.";
  }

  const options = [opt1, opt2, opt3, opt4, opt5];
  const randomIndex = Math.floor(Math.random() * options.length);
  return { weatherDescription: options[randomIndex] };
}
