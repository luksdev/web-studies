window.addEventListener( 'load' , start )

function start () {
	const button = document.querySelector( '#calcular' )
	button.addEventListener( 'click' , calculateEquation )
}

function calculateEquation () {
  const resultado = document.querySelector( '#resultado' )
	
  const coefficientA = document.querySelector( '#coefficientA' ).value
	const coefficientB = document.querySelector( '#coefficientB' ).value
	const coefficientC = document.querySelector( '#coefficientC' ).value	

	const delta = Math.pow( coefficientB, 2 ) - ( 4 * coefficientA * coefficientC )

	resultado.innerHTML = 'Δ = (b²) - (4ac) <br><br>'
	resultado.innerHTML += 'Δ = (' + coefficientB + '²)' + ' - ( 4 x ' + coefficientA + ' x ' + coefficientC + ') <br>'
	resultado.innerHTML += 'Δ = (' + Math.pow(coefficientB,2) + ')' + ' - (' + (4*coefficientA*coefficientC) + ') <br>'
	resultado.innerHTML += 'Δ = ' + delta + '<br><br>'

	if ( delta >= 0 ) {
		const x1 = ( (- ( coefficientB ) + Math.sqrt( delta ) ) / ( 2 * coefficientA ) ).toFixed(2)
		const x2 = ( ( - (coefficientB ) - Math.sqrt( delta ) ) / ( 2 * coefficientA ) ).toFixed(2)
		resultado.innerHTML += 'X = -b ± √Δ / 2a <br><br>'
		resultado.innerHTML += 'X = ' + ' -(' + coefficientB + ') ± ' + '(√' + delta + ') / 2 x ' + coefficientA + '<br>'
		resultado.innerHTML += 'X1 =  ' + ' -(' + coefficientB + ') + ' + '(√' + delta + ') / ' + (2*coefficientA) + ' = ' + x1 + '<br>'
		resultado.innerHTML += 'X2 =  ' + ' -(' + coefficientB + ') - ' + '(√' + delta + ') / ' + (2*coefficientA) + ' = ' + x2
	}else{
		resultado.innerHTML += '<br>' + 'Delta sem raizes REAIS!'
	}
}