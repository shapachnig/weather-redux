import {useSelector} from "react-redux";

const Weather = () => {
const weatherData = useSelector(state => state.weather);
const messageData = useSelector(state => state.message);

    return (
        <div className={'infoWeath'}>

            {!messageData &&
                <>
                    <p>Location: {weatherData.country}, {weatherData.city}</p>
                    <p>Temp: {weatherData.temp}</p>
                    <p>Pressure: {weatherData.pressure}</p>
                    <p>Sunset: {weatherData.sunset.toLocaleTimeString()}</p>
                </>
            }
            {messageData}
        </div>
    )
}

export default Weather;
