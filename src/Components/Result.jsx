import React from 'react'

export default function Result({ weatherData, historyData , historySearch }) {

    const historyItems = historyData.map(
        (item, index) => {
            return <li onClick={() => historySearch(item)} className='text-xl cursor-pointer' key={index}>{item}</li>
        }
    )
    return (
        <div className="container rounded-4 shadow-lg mt-4 p-2 col-sm-6">
          <div className="row">
            <div className="col-3 border-end ">
              <h4 style={{fontFamily: 'serif'}} className="text-center fs-6 fw-bold">History</h4>
              <ul style={{listStyle: 'none'}} className="list-group text-center list-group-flush">
                {historyItems}
              </ul>
            </div>
            <div className="col-9">
              {weatherData.length !== 0 ? (
                <>
                  <h2 className="text-center display-4 mb-4">{weatherData.name}</h2>
                  <div className="text-center my-4">
                    <div className="fs-4">Max Temp: {weatherData.main.temp_max}°C</div>
                    <div className="fs-4">Min Temp: {weatherData.main.temp_min}°C</div>
                  </div>
                  <div className="text-center my-4">
                    <img
                      src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
                      alt=""
                      className="weather-icon"
                    />
                    <div className="fs-4">{weatherData.weather[0].main}</div>
                  </div>
                </>
              ) : (
                <h3 style={{fontFamily: '', fontSize: '30px'}} className="text-center py-3 display-5">Please enter the city name</h3>
              )}
            </div>
          </div>
        </div>
      );
      
      
}
