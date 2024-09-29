const API_KEY = '6626fc399196b07a9dcff842d625671f'

const elIconWather = document.getElementById('icon-wather')
const elTemperature = document.getElementById('temperature')
const elLocal = document.getElementById('local')
const elHumidity = document.getElementById('humidity')
const elSpeedWind = document.getElementById('speed-wind')
const elCard = document.querySelector('.card')

function getData(local) {
  const route = `https://api.openweathermap.org/data/2.5/weather?q=${local}&lang=pt_br&units=metric&appid=${API_KEY}`
  return fetch(route).then(response => response.json())
}

function handleSubmit(event) {
  event.preventDefault()

  const value = document.querySelector('[name="local"]').value

  getData(value).then(data = {
    console.log(data)
    elTemperature.innerHTML = Math.floor(data.main.temp) + '°C'
    elLocal.innerHTML = data.name
    elHumidity.innerHTML = data.main.humidity + '%'
    elSpeedWind.innerHTML = data.wind.speed + ' Km/h '

    const icon = data.wather[0].main.toLocaleLowerCase()
    const src = `../assets/icons/${icon}.png`
    elIconWather.setAttribute('src', src)
  })
}

document.querySelector('form').addEventListener('submit', handleSubmit)
