type getGeoLocationData =
  | {
      data: GeolocationPosition;
      successful: true;
    }
  | {
      data: null;
      successful: false;
    };

export const getGeoLocation =
  (function getGeoLocationWithCache(): () => Promise<getGeoLocationData> {
    const geoLocationData: GeolocationPosition | null = null;

    return async function getGeoLocation(): Promise<getGeoLocationData> {
      if (!!geoLocationData) {
        return geoLocationData;
      }

      try {
        const data = await new Promise<GeolocationPosition>((resolve) => {
          window.navigator.geolocation.getCurrentPosition((data) => {
            resolve(data);
          });
        });

        return { data, successful: true };
      } catch (error) {
        alert(
          "We couldn't get your geolocation data from the browser navigator. Either allow location access from the browser or you can also search by City name"
        );

        return { data: null, successful: false };
      }
    };
  })();
