import {legacy_createStore as createStore} from "redux";
import {weatherReducer} from "../reducers/weatherReducer.js";

const initialState = {
    weather: {
        country: 'Monster',
        city: 'Monster',
        temp: 'monster',
        pressure: 'Monster',
        sunset: 'Monster'
    }
    // stats: {
    //     followers: 0,
    //     following: 0
    // }
}

export const store = createStore(weatherReducer, initialState);
