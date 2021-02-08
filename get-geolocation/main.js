const start = () => {
  navigator.geolocation ? 
  getLocation() : 
  console.log('A localização geográfica não é suportada por este navegador')
}

const getLocation = () => {
  navigator.geolocation
  .getCurrentPosition(renderMap , showError, { 
    enableHighAccuracy: true, maximumAge: 1000, timeout: 60000 
  })
}

const createMap = (latitude , longitude) => {
  let map = L.map('mapid').setView([latitude , longitude ], 18)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)
  L.marker([latitude , longitude]).addTo(map)
}

const renderMap = position => {
  const latitude = position.coords.latitude
  const longitude = position.coords.longitude

  createMap(latitude, longitude)

  console.log( `Latitude Atual: ${latitude}` )
  console.log( `Longitude Atual: ${longitude}` )
}

const showError = error => { 
  switch (error.code) {
    case error.PERMISSION_DENIED:
    console.log('Usuário negou a solicitação de geolocalização.')
    break

    case error.POSITION_UNAVAILABLE:
    console.log('As informações de localização estão indisponíveis.')
    break

    case error.TIMEOUT:
    console.log('O pedido para obter a localização do usuário expirou.')
    break

    case error.UNKNOWN_ERROR:
    console.log('Ocorreu um erro desconhecido.')
    break
  }
}

window.addEventListener('load', start)