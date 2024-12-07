export const SET_WEATHER = 'SET_WEATHER'

export const set_weather = ({country, city, temp, pressure, sunset}) => ({
    type: SET_WEATHER,
    payload: {country, city, temp, pressure, sunset}
})
