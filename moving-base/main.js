let directionX, directionY, positionX, positionY, velocidade, element

const start = () => {
	directionX = 0, directionY = 0, positionX = 0, positionY = 0, velocidade = 1
	
  element = document.querySelector('#player')
	document.addEventListener('keydown', keydownKey)
	document.addEventListener('keyup', keydownUp)
	setInterval(enterFrame, 1)
}

const keydownKey = () => {
	const pressedKey = event.keyCode
	if ( pressedKey == 37 ) {
		directionX = -1 // PARA ESQUERDA
	} else if ( pressedKey == 38 ){
		directionY = -1 // PARA CIMA
	} else if ( pressedKey == 39 ) {
		directionX = 1 // PARA DIREITA 
	} else if ( pressedKey == 40 ) {
		directionY = 1 // PARA BAIXO
	}
}

const keydownUp = () => {
	let pressedKey = event.keyCode
	if ( pressedKey == 37 ) {
		directionX = 0
	} else if ( pressedKey == 38 ) {
		directionY = 0
	} else if ( pressedKey == 39 ) {
		directionX = 0
	} else if ( pressedKey == 40 ) {
		directionY = 0
	}
}

const enterFrame = () => {
	positionX += directionX * velocidade
	positionY += directionY * velocidade
	element.style.left = positionX + 'px'
	element.style.top = positionY + 'px'
}

window.addEventListener('load', start)