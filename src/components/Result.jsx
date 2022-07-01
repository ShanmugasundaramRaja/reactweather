const Result = ({ weather }) => {
    return (
      <>
        <div className="icon">
          <img
            src={`http://openweathermap.org/img/wn/${weather.current.weather[0].icon}@2x.png`}
            alt="weather-icon"
          />
        </div>
        <h5>{weather.current.weather[0].description}</h5>
        <div className="detail d-flex ml-5">
          <h1>{Math.round(weather.current.dew_point / 33.8)}°</h1>
          <p className="mt-3 ml-2">
            Feels like {Math.round(weather.current.feels_like / 33.8)}°
          </p>
        </div>
      </>
    )
  }
  
  export default Result