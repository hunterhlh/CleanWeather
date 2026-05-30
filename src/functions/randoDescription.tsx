export default function (weatherData: any) {
  const weatherID = weatherData?.weather[0]?.id;
  console.log("weather condition:", weatherID);
  console.log(
    "full weather data:",
    JSON.stringify(weatherData?.weather, null, 2),
  );

  let weatherDescription: any = "";
  let opt1: any = "";
  let opt2: any = "";
  let opt3: any = "";
  let opt4: any = "";
  let opt5: any = "";

  if (weatherID === 200) {
    opt1 =
      "There's thunder and lightning outside right now, take your umbrella.";
    opt2 = "It's raining with an active storm right now, stay covered.";
    opt3 = "Lightning is in the area right now, try to stay indoors.";
    opt4 =
      "A storm with light rain is happening right now, grab your umbrella.";
    opt5 = "Thunder is active right now, not a great time to be outside.";
  } else if (weatherID === 201) {
    opt1 =
      "There's a thunderstorm with rain happening right now, take your umbrella.";
    opt2 = "Thunder and rain are both active right now, stay covered.";
    opt3 = "It's storming with steady rain right now, grab your umbrella.";
    opt4 = "Rain and lightning are hitting right now, stay indoors if you can.";
    opt5 = "Active thunderstorm with rain right now, take cover.";
  } else if (weatherID === 202) {
    opt1 = "Heavy rain and lightning are both active right now, stay inside.";
    opt2 = "It's a serious storm with heavy rain right now, avoid going out.";
    opt3 = "Thunder and heavy rain are hitting right now, stay indoors.";
    opt4 = "Dangerous storm conditions with heavy rain right now, stay inside.";
    opt5 = "It's pouring with lightning right now, avoid going outside.";
  } else if (weatherID === 210) {
    opt1 =
      "There's a light thunderstorm happening right now, keep an umbrella handy.";
    opt2 = "Thunder is active right now with light storm conditions.";
    opt3 = "A mild storm is occurring right now, worth staying covered.";
    opt4 = "Light storm activity right now, keep an eye on conditions.";
    opt5 = "Thunder is rumbling right now, nothing severe but stay aware.";
  } else if (weatherID === 211) {
    opt1 = "There's a full thunderstorm happening right now, take cover.";
    opt2 = "Thunder and lightning are active right now, stay sheltered.";
    opt3 = "It's storming outside right now, stay indoors if possible.";
    opt4 = "Active thunderstorm right now, not a good time to be outside.";
    opt5 = "Storm is happening right now, take cover and stay aware.";
  } else if (weatherID === 212) {
    opt1 = "A heavy thunderstorm is happening right now, stay indoors.";
    opt2 = "Severe storm conditions right now, avoid going outside.";
    opt3 = "It's a rough storm right now, stay away from windows.";
    opt4 = "Heavy thunder and lightning are active right now, stay inside.";
    opt5 = "Dangerous storm happening right now, take shelter immediately.";
  } else if (weatherID === 221) {
    opt1 =
      "A scattered thunderstorm is active right now, conditions are unpredictable.";
    opt2 = "Irregular storm activity right now, stay alert.";
    opt3 = "Patchy storm conditions right now, don't let any breaks fool you.";
    opt4 = "Storm is moving through in bursts right now, stay covered.";
    opt5 =
      "Ragged storm activity right now, stay aware of changing conditions.";
  } else if (weatherID === 230) {
    opt1 =
      "Thunder and light drizzle are both active right now, grab an umbrella.";
    opt2 = "It's drizzling with an active storm right now, stay covered.";
    opt3 =
      "Light drizzle and lightning happening right now, take shelter if you can.";
    opt4 = "Storm with light drizzle right now, worth staying indoors.";
    opt5 = "Active storm and drizzle right now, grab something waterproof.";
  } else if (weatherID === 231) {
    opt1 = "Drizzle and thunder are both active right now, take your umbrella.";
    opt2 = "It's a drizzly storm right now, stay covered.";
    opt3 = "Active storm with drizzle happening right now, grab a rain jacket.";
    opt4 =
      "Thunder and drizzle are combining right now, stay indoors if possible.";
    opt5 = "Drizzly storm conditions right now, take cover.";
  } else if (weatherID === 232) {
    opt1 =
      "Heavy drizzle and thunder are both active right now, take full rain gear.";
    opt2 = "It's a wet and stormy situation right now, stay inside if you can.";
    opt3 = "Active storm with heavy drizzle right now, grab a solid umbrella.";
    opt4 = "Thunder and thick drizzle hitting right now, stay covered.";
    opt5 = "Stormy and very damp right now, take shelter if possible.";
  } else if (weatherID === 300) {
    opt1 = "Light drizzle is falling right now, grab an umbrella.";
    opt2 = "It's drizzling lightly right now, a jacket will help.";
    opt3 = "Fine mist coming down right now, worth staying covered.";
    opt4 = "Light drizzle active right now, nothing heavy but you'll feel it.";
    opt5 = "It's a drizzly one right now, grab something to stay dry.";
  } else if (weatherID === 301) {
    opt1 = "It's drizzling outside right now, take your umbrella.";
    opt2 = "Steady drizzle falling right now, grab a waterproof layer.";
    opt3 = "Drizzle is coming down right now, stay covered.";
    opt4 = "Active drizzle right now, you'll get damp without cover.";
    opt5 = "It's drizzling right now, a jacket or umbrella will do.";
  } else if (weatherID === 302) {
    opt1 = "Heavy drizzle falling right now, treat it like rain.";
    opt2 =
      "It's coming down hard for drizzle right now, take a proper umbrella.";
    opt3 = "Thick drizzle outside right now, a hood won't cut it.";
    opt4 = "Heavy drizzle active right now, grab rain gear.";
    opt5 = "Serious drizzle right now, you'll get wet without an umbrella.";
  } else if (weatherID === 310) {
    opt1 = "Light drizzle and rain are mixing right now, take an umbrella.";
    opt2 = "It's lightly raining with drizzle right now, stay covered.";
    opt3 = "Drizzle and light rain falling right now, grab a jacket.";
    opt4 = "Mixed drizzle and rain right now, worth staying covered.";
    opt5 = "Light wet conditions outside right now, grab something waterproof.";
  } else if (weatherID === 311) {
    opt1 = "Drizzle and rain are both falling right now, take your umbrella.";
    opt2 = "It's a wet mix outside right now, grab rain gear.";
    opt3 = "Rain and drizzle combining right now, stay covered.";
    opt4 = "Drizzly rain active right now, grab an umbrella.";
    opt5 = "Damp conditions outside right now with rain in the mix.";
  } else if (weatherID === 312) {
    opt1 =
      "Heavy drizzle and rain are both falling right now, full rain gear is worth it.";
    opt2 = "It's seriously wet outside right now, don't underestimate it.";
    opt3 = "Thick drizzle with real rain right now, take a proper umbrella.";
    opt4 = "Heavy wet conditions right now, waterproof layers are a must.";
    opt5 =
      "It's coming down hard right now, you'll get soaked without rain gear.";
  } else if (weatherID === 313) {
    opt1 = "Showers and drizzle are mixing right now, keep an umbrella handy.";
    opt2 = "It's raining in bursts with drizzle right now, stay covered.";
    opt3 =
      "Rain showers and drizzle active right now, grab something waterproof.";
    opt4 = "Wet conditions right now with showers and drizzle mixing.";
    opt5 =
      "Drizzle with shower activity right now, an umbrella is worth having.";
  } else if (weatherID === 314) {
    opt1 =
      "Heavy showers and drizzle are both hitting right now, grab full rain gear.";
    opt2 = "It's really wet outside right now, a proper umbrella is a must.";
    opt3 = "Intense showers with drizzle right now, dress for it.";
    opt4 =
      "Heavy rain showers active right now, don't go out without waterproof gear.";
    opt5 = "Serious wet conditions outside right now, take cover if you can.";
  } else if (weatherID === 321) {
    opt1 = "Drizzle showers are falling right now, grab a light umbrella.";
    opt2 = "It's showering lightly right now, grab something to stay dry.";
    opt3 = "Light shower drizzle active right now, a jacket will help.";
    opt4 = "Drizzly showers outside right now, worth staying covered.";
    opt5 = "Mild wet conditions right now, a compact umbrella is all you need.";
  } else if (weatherID === 500) {
    opt1 = "Light rain is falling right now, grab your umbrella.";
    opt2 = "It's raining lightly outside right now, a jacket will help.";
    opt3 = "Steady light rain right now, worth having an umbrella on you.";
    opt4 = "Rain is coming down lightly right now, stay covered.";
    opt5 = "Light rain active right now, you'll feel it without cover.";
  } else if (weatherID === 501) {
    opt1 = "Moderate rain is falling right now, take your umbrella.";
    opt2 = "It's raining steadily right now, grab a proper umbrella.";
    opt3 = "Decent rain coming down right now, stay covered.";
    opt4 = "Rain is picking up right now, make sure you have your umbrella.";
    opt5 = "Steady moderate rain right now, you'll get wet without cover.";
  } else if (weatherID === 502) {
    opt1 = "Heavy rain is falling right now, take full rain gear.";
    opt2 = "It's really coming down out there right now, be careful.";
    opt3 =
      "Intense rain active right now, an umbrella and jacket are both worth it.";
    opt4 = "Heavy rain hitting right now, consider waiting it out if you can.";
    opt5 = "Serious rain outside right now, roads are getting wet.";
  } else if (weatherID === 503) {
    opt1 =
      "Very heavy rain is falling right now, avoid going outside if possible.";
    opt2 = "It's pouring right now, stay inside if you can.";
    opt3 = "Intense rainfall right now, road conditions may be poor.";
    opt4 =
      "Very heavy rain active right now, full waterproof gear if you must go out.";
    opt5 = "It's coming down hard right now, check for weather alerts.";
  } else if (weatherID === 504) {
    opt1 = "Extreme rain is happening right now, stay indoors.";
    opt2 = "It's dangerously wet outside right now, avoid travel.";
    opt3 =
      "Severe rain event happening right now, check local emergency alerts.";
    opt4 = "Extreme rainfall active right now, do not go outside.";
    opt5 = "It's an extreme rain situation right now, stay safe inside.";
  } else if (weatherID === 511) {
    opt1 = "Freezing rain is falling right now, surfaces are getting icy.";
    opt2 = "It's freezing rain outside right now, avoid driving if possible.";
    opt3 = "Ice is forming on surfaces right now, watch your step.";
    opt4 = "Freezing rain active right now, roads and sidewalks are slick.";
    opt5 = "Dangerous freezing rain right now, take extreme caution outside.";
  } else if (weatherID === 520) {
    opt1 =
      "Light rain showers are passing through right now, keep an umbrella handy.";
    opt2 = "It's showering lightly right now, a light jacket will do.";
    opt3 =
      "Light showers falling right now, worth having something to stay dry.";
    opt4 = "Brief light showers right now, a compact umbrella is all you need.";
    opt5 = "Shower activity right now but nothing heavy.";
  } else if (weatherID === 521) {
    opt1 = "Rain showers are active right now, take your umbrella.";
    opt2 = "It's showering outside right now, grab something waterproof.";
    opt3 = "Showers coming down right now, stay covered.";
    opt4 = "Active shower rain right now, a jacket and umbrella will do.";
    opt5 = "Rain showers hitting right now, stay covered.";
  } else if (weatherID === 522) {
    opt1 = "Heavy rain showers are active right now, take full rain gear.";
    opt2 = "It's showering hard right now, an umbrella alone may not cut it.";
    opt3 = "Intense showers right now, waterproof layers are worth it.";
    opt4 = "Heavy shower activity right now, it's a wet one out there.";
    opt5 = "Strong rain showers hitting right now, drive carefully.";
  } else if (weatherID === 531) {
    opt1 =
      "Scattered showers are moving through right now, conditions are changing fast.";
    opt2 = "Irregular shower activity right now, keep an umbrella close.";
    opt3 = "Rain is coming and going in bursts right now, stay prepared.";
    opt4 = "Patchy showers right now, don't let a dry moment fool you.";
    opt5 =
      "Inconsistent shower rain right now, worth having an umbrella on you.";
  } else if (weatherID === 600) {
    opt1 = "Light snow is falling right now, watch for slippery surfaces.";
    opt2 = "It's snowing lightly outside right now, bundle up.";
    opt3 = "Snow is coming down right now, take it slow out there.";
    opt4 = "Light snow active right now, sidewalks may be getting slick.";
    opt5 = "A light snow is falling right now, dress warm.";
  } else if (weatherID === 601) {
    opt1 = "Snow is falling right now, roads may be getting slick.";
    opt2 = "It's snowing outside right now, drive carefully.";
    opt3 = "Active snowfall right now, watch for icy patches.";
    opt4 = "Snow coming down right now, take it slow.";
    opt5 = "Steady snow right now, roads are getting slippery.";
  } else if (weatherID === 602) {
    opt1 = "Heavy snow is falling right now, roads are getting bad.";
    opt2 = "It's really coming down right now, avoid driving if possible.";
    opt3 = "Significant snowfall right now, visibility is reduced.";
    opt4 = "Heavy snow active right now, roads are getting dangerous.";
    opt5 = "Serious snow happening right now, stay inside if you can.";
  } else if (weatherID === 611) {
    opt1 = "Sleet is falling right now, surfaces are getting slippery fast.";
    opt2 = "It's sleeting outside right now, roads are getting icy.";
    opt3 = "Active sleet right now, ice is forming on surfaces.";
    opt4 = "Sleet coming down right now, avoid driving if you can.";
    opt5 = "Sleet is hitting right now, watch your step.";
  } else if (weatherID === 612) {
    opt1 = "Light sleet showers right now, surfaces may be getting icy.";
    opt2 = "It's lightly sleeting right now, take it slow.";
    opt3 = "Sleet activity right now, watch for slick spots.";
    opt4 = "Shower sleet falling right now, be cautious outside.";
    opt5 = "Mild sleet right now, roads and sidewalks may be slippery.";
  } else if (weatherID === 613) {
    opt1 = "Sleet showers are active right now, roads are getting slippery.";
    opt2 = "It's sleeting in bursts right now, drive carefully.";
    opt3 = "Active shower sleet right now, ice is forming fast.";
    opt4 = "Sleet is coming down right now, take caution on all surfaces.";
    opt5 = "Shower sleet hitting right now, avoid unnecessary travel.";
  } else if (weatherID === 615) {
    opt1 = "Rain and snow are mixing right now, roads may be getting slushy.";
    opt2 = "It's a light wintry mix outside right now, take it slow.";
    opt3 = "Light rain and snow falling right now, watch for slick spots.";
    opt4 = "Mixed winter conditions right now, slippery surfaces are possible.";
    opt5 = "Rain snow mix active right now, dress warm and stay dry.";
  } else if (weatherID === 616) {
    opt1 =
      "Rain and snow are falling together right now, roads are getting slushy.";
    opt2 = "It's a wintry mix outside right now, drive carefully.";
    opt3 =
      "Active rain and snow mix right now, slippery conditions are likely.";
    opt4 = "Wet winter mix right now, watch for icy patches.";
    opt5 = "Rain and snow combining right now, take it slow out there.";
  } else if (weatherID === 620) {
    opt1 = "Light snow showers are falling right now, watch for slick spots.";
    opt2 = "It's snowing lightly in showers right now, bundle up.";
    opt3 = "Shower snow active right now, roads may be getting slippery.";
    opt4 = "Light snow falling in bursts right now, take it slow.";
    opt5 = "Brief snow showers right now, dress warm.";
  } else if (weatherID === 621) {
    opt1 = "Snow showers are active right now, roads may be getting slick.";
    opt2 = "It's snowing in showers right now, watch for icy patches.";
    opt3 = "Shower snow falling right now, take it slow.";
    opt4 = "Active snow showers right now, roads are getting slippery.";
    opt5 = "Snow is coming down in bursts right now, be careful out there.";
  } else if (weatherID === 622) {
    opt1 =
      "Heavy snow showers are active right now, roads are getting dangerous.";
    opt2 = "It's snowing hard in bursts right now, avoid driving if possible.";
    opt3 = "Intense snow showers right now, visibility is reduced.";
    opt4 = "Heavy shower snow active right now, roads are getting bad.";
    opt5 = "Significant snow falling right now, stay inside if you can.";
  } else if (weatherID === 701) {
    opt1 = "Mist is in the air right now, visibility is reduced.";
    opt2 = "It's misty outside right now, take it slow if you're driving.";
    opt3 = "Low visibility from mist right now, headlights on.";
    opt4 = "Misty conditions right now, be cautious on the road.";
    opt5 = "It's a misty one right now, allow extra time if you're driving.";
  } else if (weatherID === 711) {
    opt1 = "Smoke is in the air right now, limit time outdoors.";
    opt2 = "Air quality is reduced right now due to smoke.";
    opt3 = "Smoky conditions outside right now, keep windows closed.";
    opt4 =
      "Active smoke in the area right now, sensitive groups should stay indoors.";
    opt5 = "It's smoky out there right now, a mask is worth wearing.";
  } else if (weatherID === 721) {
    opt1 = "Hazy conditions right now, visibility is reduced on the road.";
    opt2 = "It's a hazy one outside right now, turn your headlights on.";
    opt3 = "Haze is limiting visibility right now, take it slow.";
    opt4 = "Low visibility from haze right now, be alert while driving.";
    opt5 = "Haziness in the air right now, conditions on the road are reduced.";
  } else if (weatherID === 731) {
    opt1 = "Dust whirls are active right now, stay inside if you can.";
    opt2 = "Blowing sand and dust right now, protect your eyes outside.";
    opt3 = "Dusty and windy conditions right now, keep windows closed.";
    opt4 = "Sand and dust swirling right now, visibility is reduced.";
    opt5 = "Active dust whirls right now, avoid being outside.";
  } else if (weatherID === 741) {
    opt1 = "Fog is thick right now, take it very slow while driving.";
    opt2 = "Dense fog outside right now, turn on your fog lights.";
    opt3 = "Visibility is very low right now due to fog.";
    opt4 = "Heavy fog active right now, be extremely cautious on the road.";
    opt5 =
      "It's a foggy one right now, slow down and increase your following distance.";
  } else if (weatherID === 751) {
    opt1 = "Sand is blowing right now, protect your eyes and face outside.";
    opt2 = "Blowing sand active right now, keep windows and doors closed.";
    opt3 = "Sand in the air right now, limit outdoor exposure.";
    opt4 = "Windy and sandy right now, visibility is reduced.";
    opt5 = "It's blowing sand out there right now, stay inside if you can.";
  } else if (weatherID === 761) {
    opt1 = "Dusty conditions right now, keep windows closed.";
    opt2 = "Blowing dust active right now, protect your eyes outside.";
    opt3 = "Dust in the air right now, air quality is affected.";
    opt4 = "Visibility is reduced from dust right now, drive carefully.";
    opt5 =
      "It's dusty out there right now, sensitive groups should stay inside.";
  } else if (weatherID === 762) {
    opt1 =
      "Volcanic ash is falling right now, stay indoors and keep windows closed.";
    opt2 = "Ash fall is happening right now, avoid being outside.";
    opt3 =
      "Active volcanic ash right now, cover your nose and mouth if you must go out.";
    opt4 =
      "Ash is falling right now, check local emergency alerts immediately.";
    opt5 =
      "Dangerous ash conditions right now, follow all local authority guidance.";
  } else if (weatherID === 771) {
    opt1 = "Squalls are hitting right now, strong wind gusts are happening.";
    opt2 =
      "Active squall conditions right now, secure any loose outdoor items.";
    opt3 = "Sudden strong winds right now, be careful if you're outside.";
    opt4 = "Squall activity right now, stay away from trees and power lines.";
    opt5 = "It's gusty and rough out there right now, take extra caution.";
  } else if (weatherID === 781) {
    opt1 = "Tornado activity in the area right now, take shelter immediately.";
    opt2 =
      "A tornado is occurring right now, get to your lowest floor away from windows.";
    opt3 = "Tornado conditions are present right now, do not go outside.";
    opt4 = "Seek shelter immediately, tornado activity is happening right now.";
    opt5 =
      "Get underground or to an interior room right now, tornado conditions are active.";
  } else if (weatherID === 800) {
    opt1 = "Skies are completely clear right now, great conditions outside.";
    opt2 = "It's a beautiful clear day right now.";
    opt3 = "Sun is out and skies are clear right now.";
    opt4 = "No weather concerns right now.";
    opt5 = "Clear and calm outside right now.";
  } else if (weatherID === 801) {
    opt1 = "Just a few clouds in the sky right now, great conditions outside.";
    opt2 = "Mostly sunny with a few clouds right now.";
    opt3 = "It's a nice one right now with only a few clouds passing by.";
    opt4 = "Partly sunny right now, great conditions outside.";
    opt5 = "Light cloud cover right now but a great day out there.";
  } else if (weatherID === 802) {
    opt1 = "Scattered clouds overhead right now, still a decent day outside.";
    opt2 = "Some clouds moving through right now, nothing concerning.";
    opt3 = "It's partly cloudy out there right now.";
    opt4 = "Clouds are scattered across the sky right now.";
    opt5 = "A mix of sun and clouds right now.";
  } else if (weatherID === 803) {
    opt1 = "Mostly cloudy outside right now with some breaks of sun.";
    opt2 =
      "Heavy cloud cover right now with occasional sunshine breaking through.";
    opt3 = "It's a gray one right now with patchy cloud cover.";
    opt4 =
      "Broken clouds overhead right now, sun is peeking through occasionally.";
    opt5 = "Cloudy conditions right now but dry and calm.";
  } else if (weatherID === 804) {
    opt1 = "Fully overcast right now, gray skies but dry.";
    opt2 = "Thick cloud cover right now, no sunshine but no rain either.";
    opt3 = "It's completely cloudy outside right now.";
    opt4 = "Heavy overcast skies right now, feels cooler than it looks.";
    opt5 = "Overcast conditions right now, gray and calm out there.";
  }

  return { weatherDescription };
}
