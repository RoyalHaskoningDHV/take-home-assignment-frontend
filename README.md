# Frontend assignment

_For [Royal HaskoningDHV][]._

* [Overview][]
* [Acceptance criteria][]
* [Technical criteria][]

## Overview
[Overview]: #overview

Build an application that gets the current location, and then uses said location
to fetch and display the current weather from the [OpenWeatherMap API][].

## Acceptance criteria
[Acceptance criteria]: #acceptance-criteria

* At least the following needs to be displayed as a result:
  * The location name.
  * The current temperature.
  * A short description of the current weather (_Clear_, _Foggy_, etc).
* It should be possible to re-fetch/refresh the result.
* The application should be responsive.
* _Optional_: Three day weather forecast for current location.
* _Optional_: Daily notifications of weather in current location.

## Technical criteria
[Technical criteria]: #technical-criteria

* Framework of your choice (we use [React][]).
* Errors need to be handled properly.
* The application should be available through [Git][].
  * If to be kept private, the repository can be shared with [rhdhvolschenk][] and [twiggler][].
* Documentation on how to set up and run the application locally.
* _Optional_: Testing:
  * Unit.
  * End-to-end.
  * Linting ([Eslint][] or similar).
  * Formatting ([Prettier][] or similar).
* _Optional_: Typing ([TypeScript][], [Flow][] or similar, we use [TypeScript]).
* _Optional_: Containerization.

---

[Eslint]: https://eslint.org/
[Flow]: https://flow.org/
[Git]: https://git-scm.com/
[OpenWeatherMap API]: https://openweathermap.org/api
[Prettier]: https://prettier.io/
[React]: https://reactjs.org/
[rhdhvolschenk]: https://github.com/rhdhvolschenk
[Royal HaskoningDHV]: https://www.royalhaskoningdhv.com/
[twiggler]: https://github.com/twiggler
[TypeScript]: https://www.typescriptlang.org/
