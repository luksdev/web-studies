window.addEventListener( 'load' , start )

function start () {
  const buttonPoeira = document.querySelector( '#poeira' )
  const buttonRestaurar = document.querySelector( '#restaurar' )
  const imagens = document.querySelector( '.imagens' )

  buttonPoeira.addEventListener( 'click', () => {
    imagens.classList.add( 'efeito' )
  } )

  buttonRestaurar.addEventListener( 'click', () => {
    location.reload()
  } )
}