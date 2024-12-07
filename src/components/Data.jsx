import Form from "./Form.jsx";
import Weather from "./Weather.jsx";
import {useState} from "react";
import {api_key, base_url} from "../utils/constants.js";
import {useDispatch} from "react-redux";
import {set_weather} from "../actions/userAction.js";


const Data = () => {
    const [message, setMessage] = useState('Enter city name');
    const dispatch = useDispatch();

    const getWeather = city => {
        fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
            .then(result => result.json())
            .then(data => {

                dispatch(set_weather({country: data.sys.country,
                    city: data.name,
                    temp: data.main.temp,
                    pressure: data.main.pressure,
                    sunset: new Date(data.sys.sunset * 1000)} ))

                setMessage('')
            })
            .catch(e => {
                console.log(e);
                setMessage('Enter correct city name')
            })
    }

    return (
        <div>
            <Form getWeather={getWeather}/>
            <Weather message={message} />
        </div>
    );
};

export default Data;