// keyboard type
window.addEventListener( 'keydown', playNote )

// get all keys
const keys = document.querySelectorAll( '.key' )

keys.forEach( key => {
  key.addEventListener( 'click', playNote )
  key.addEventListener( 'transitionend', removePlayingClass )
} )

function playNote (event) {
  let audioKeyCode = getKeyCode(event)

  const key = document.querySelector( `.key[data-key="${audioKeyCode}"]` )

  const cantFoundAnyKey = !key

  if ( cantFoundAnyKey ) {
    return 
  }
  
  playAudio(audioKeyCode)
  addPlayingClass(key)
}

function getKeyCode (event) {
  let keyCode

  const iskeyBoard = event.type === 'keydown'
  if (iskeyBoard) {
    keyCode = event.keyCode
  } else {
    keyCode = event.target.dataset.key
  }

  return keyCode
}

function playAudio (audioKeyCode) {
  const audio = document.querySelector( `audio[data-key="${audioKeyCode}"]` )
  audio.currentTime = 0  
  audio.play()
}

function addPlayingClass (key) {
  key.classList.add( 'playing' )
}

function removePlayingClass (event) {
  event.target.classList.remove( 'playing' )
}
