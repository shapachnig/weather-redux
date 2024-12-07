export const SET_WEATHER = 'SET_WEATHER'
export const SET_MESSAGE = 'SET_MESSAGE'

export const set_weather = ({country, city, temp, pressure, sunset}) => ({
    type: SET_WEATHER,
    payload: {country, city, temp, pressure, sunset}
})

export const set_message = message => ({
    type: SET_MESSAGE,
    payload: message
})