import {legacy_createStore as createStore} from "redux";
import {weatherReducer} from "../reducers/weatherReducer.js";

const initialState = {
    weather: {
        country: 'country',
        city: 'city',
        temp: 'temp',
        pressure: 'pressure',
        sunset: new Date()
    },
    message: 'Enter city name'
 }

export const store = createStore(weatherReducer, initialState);
