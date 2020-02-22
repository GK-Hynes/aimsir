import React from "react"
import styled from "styled-components"

const WeatherTile = styled.div`
  background: #edf2f7;
  width: 250px;
  padding: 1rem;
  margin-bottom: 1rem;
`

export default function CurrentWeather({ weather }) {
  return (
    <WeatherTile>
      <h3>{weather.name}</h3>
      <img
        src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
        alt={weather.weather[0].main}
      />
      <h3>{`${Math.round(weather.main.temp)}°C`}</h3>
      <p>{`${weather.weather[0].main} ${Math.round(
        weather.main.temp_max
      )} / ${Math.round(weather.main.temp_min)}°C`}</p>
      <span>
        Wind {weather.wind.speed}
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="icon-location-pin"
            style={{
              width: "2rem",
              transform: `rotate(${weather.wind.deg}deg)`,
            }}
          >
            <g>
              <path
                class="secondary"
                fill="#A0AEC0"
                d="M12 1v6a3 3 0 0 0 0 6v9.31a1 1 0 0 1-.7-.29l-5.66-5.66A9 9 0 0 1 12 1z"
              />
              <path
                class="primary"
                fill="#A0AEC0"
                d="M12 1a9 9 0 0 1 6.36 15.36l-5.65 5.66a1 1 0 0 1-.71.3V13a3 3 0 0 0 0-6V1z"
              />
            </g>
          </svg>
        </span>
      </span>
    </WeatherTile>
  )
}
