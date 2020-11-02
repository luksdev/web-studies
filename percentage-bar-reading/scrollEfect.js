window.addEventListener( 'load' , () => {
  
 // Container com conteúdo de leitura 
 const postWrap = document.querySelector( '#content-main' )
 
 // Barra
 const bar = document.createElement( 'div' )

 // Style da barra
 bar.style.height = '4px'
 bar.style.backgroundColor = '#6633cc'
 bar.style.position = 'fixed'
 bar.style.top = '0'
 bar.style.left = '0'
 bar.style.zIndex = '9999'
 bar.style.transition = '0.2s'

 // Adicionar a barra no container 
 document.body.append( bar ) 

 // Lógica
 document.addEventListener( 'scroll' , () => {
  const textHeight = postWrap.offsetHeight
  const pagePositionY = window.pageYOffset
  const updatedBar = pagePositionY * 100 / textHeight
  
  bar.style.width = updatedBar + '%'
 } )
} )
