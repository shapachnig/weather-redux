import {useSelector} from "react-redux";

const Weather = ({message}) => {
const weatherData = useSelector(state => state.weather);

    return (
        <div className={'infoWeath'}>
            {!message &&
                <>
                    <p>Location: {weatherData.country}, {weatherData.city}</p>
                    <p>Temp: {weatherData.temp}</p>
                    <p>Pressure: {weatherData.pressure}</p>
                    <p>Sunset: {weatherData.sunset.toLocaleTimeString()}</p>
                </>
            }
            {message}
        </div>
    )
}

export default Weather;
//