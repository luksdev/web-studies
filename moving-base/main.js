window.addEventListener( 'load' , start ) // Só vai chamar a função 'start' quando todos os elementos do window estiverem carregado (load) 

let directionX // Direção x
let directionY // Direção y
let positionX  // Posicionalmento x (salto em pixels)
let positionY  // Posicionalmento y (salto em pixels)
let velocidade // Velocidade   
let element    // Vai guardar o nosso elemento nesse caso a div  

function start () { // Esta função vai inicializar as variáveis globais
	directionX = 0
	directionY = 0
	positionX = 0
	positionY = 0
	velocidade = 1
	element = document.getElementById( 'player' )
	document.addEventListener( 'keydown', teclaDown )
	document.addEventListener( 'keyup', teclaUp )
	setInterval( enterFrame , 1 )
}

function teclaDown () { // Esta função vai capturar a tecla presionada e vai verificar qual tecla foi presionada
	let teclaPresionada = event.keyCode; // Captura de tecla
	if ( teclaPresionada == 37 ) { // verificação de tecla
		directionX = -1 // PARA ESQUERDA
	} else if ( teclaPresionada == 38 ){
		directionY = -1 // PARA CIMA
	} else if ( teclaPresionada == 39 ) {
		directionX = 1 // PARA DIREITA 
	} else if ( teclaPresionada == 40 ) {
		directionY = 1 // PARA BAIXO
	}
}

function teclaUp () { // Esta função vai capturar a tecla que foi liberada e vai verificar qual tecla foi liberada
	let teclaPresionada = event.keyCode; // Captura de tecla
	if ( teclaPresionada == 37 ) { // verificação de tecla
		directionX = 0
	} else if ( teclaPresionada == 38 ) {
		directionY = 0
	} else if ( teclaPresionada == 39 ) {
		directionX = 0
	} else if ( teclaPresionada == 40 ) {
		directionY = 0
	}
}

function enterFrame () { // Esta função vai calcular quantos pixels serão saltados e para qual direção 
	positionX += directionX * velocidade // left 
	positionY += directionY * velocidade // top 
	element.style.left = positionX + 'px'
	element.style.top = positionY + 'px'
}

/*

O algoritmo vai pegar o valor da variável velocidade e vai multiplicar com as variavel directionX e directionY para saber se ele deve ir para cima ou para baixo e quantos pixels ele deve saltar obtendo então o valor da posição x e y (positionX, positionY) ou seja, a variável velocidade vai guardar a quantidade de pixels a ser saltado e as variáveis directionX e directionY a direção obtendo o left e o top

- 37 = Tecla direcional seta esquerda
- 38 = Tecla direcional seta para cima
- 39 = Tecla direcional seta direita
- 40 = Tecla direcional seta para baixo

*/