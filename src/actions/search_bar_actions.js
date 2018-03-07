
export const FETCH_WEATHER = 'FETCH_WEATHER';


export const fetchWeather = (city) => {
                            
    console.log('request', request);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}
    