# OpenWeather API react app

- [Overview][]
- [How To Run][]
- [ToDo][]

## Overview

[overview]: #overview

This is a simple FE react app created with CRA that calls two endpoints of [OpenWeatherMap API][] to get the current weather in a certain location and a weather forecast of the next 5 days for the same location.

There are mainly 2 different ways to get weather data; either by reading _Geolocation_ from users browser's navigator API, or by asking the user to type in a valid city name.

## How To Run

[how to run]: #how-to-run

There are 2 ways to run this app:

1. I have already deployed the latest build to github-pages under [lenaggar.github.io/react-weather-app](https://lenaggar.github.io/react-weather-app/). Please let me know if it's not working.

2. The second way is to clone the repo locally, install the dependencies, and start the app.
   And since it's a CRA app, all you need to do after cloning the repo is to run `yarn install` (that will install all the dependencies), and then once it finishes, run `yarn start`. That's it!

## ToDo

[todo]: #todo

- Add unit tests.
- Enhance micro-interactions (animations).
- Restrict user to select a city from a dropdown list containing all the possible cities.
- Currently all errors are alerted to the userin an alert box. So, handling errors in a better way UI-wise.
