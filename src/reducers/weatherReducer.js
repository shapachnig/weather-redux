import {SET_WEATHER} from "../actions/userAction.js";

export const weatherReducer = (state = {}, action) => {
    switch (action.type) {
        case SET_WEATHER:
            return {...state, weather: {country: action.payload.country,
                                        city: action.payload.city,
                                        temp: action.payload.temp,
                                        pressure: action.payload.pressure,
                                        sunset: action.payload.sunset}};
              default:
            return state;
    }
}

