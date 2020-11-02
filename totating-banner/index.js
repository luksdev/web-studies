const images = document.querySelectorAll( '#slider img' )
const max = images.length
let currtentImageIndex = 0

window.addEventListener( 'load' , start )

function start() {

  setInterval( () => {
    nextImage()
  }, 1500 )
  
}

function nextImage() {

  images[currtentImageIndex].classList.remove( 'selected' )

  currtentImageIndex++

  if ( currtentImageIndex >= max ) {
    currtentImageIndex = 0
  }

  images[currtentImageIndex].classList.add( 'selected' )
}