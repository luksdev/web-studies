window.addEventListener( 'load' , () => {
  const html = document.querySelector( 'html' )
  const checkbox = document.querySelector( 'input[name="theme"]' )

  const getStyle = ( element , style ) => {
    return window.getComputedStyle( element ).getPropertyValue( style )
  }

  const initialColors = {
    bg: getStyle( html , '--bg' ),
    bgPanel: getStyle( html , '--bg-panel' ),
    colorHeadings: getStyle( html , '--color-headings' ),
    colorText: getStyle( html , '--color-text' )
  }

  const darkMode = {
    bg: '#333333',
    bgPanel: '#434343',
    colorHeadings: '#3664FF',
    colorText: '#B5B5B5'
  }

  const trasnformKey = key => {
    return `--${key.replace( /([A-Z])/g , '-$1' ).toLowerCase()}`
  }

  const changeColors = colors => {
    Object.keys( colors ).map( key => {
      return html.style.setProperty( trasnformKey( key ) , colors[key] )
    } )
  }

  checkbox.addEventListener( 'change' , ( { target } ) => {
    target.checked ? changeColors( darkMode ) : changeColors( initialColors )
  } )

  // Gravar no localStorage
  const isExistLocalStorage = ( key ) => { 
    return localStorage.getItem( key ) != null
  }

  const createOrEditLocalStorage = ( key , value ) => { 
    return localStorage.setItem( key , JSON.stringify( value ) )
  }

  const getValeuLocalStorage = ( key ) => { 
    return JSON.parse( localStorage.getItem( key ) )
  }

  checkbox.addEventListener( 'change' , ( { target } ) => {
    if ( target.checked ) {
      changeColors( darkMode ) 
      createOrEditLocalStorage( 'modo' , 'darkMode' )
    } else {
      changeColors( initialColors )
      createOrEditLocalStorage( 'modo' , 'initialColors' )
    }
  } )

  if ( !isExistLocalStorage( 'modo' ) ) {
    createOrEditLocalStorage( 'modo' , 'initialColors' )
  }

  if ( getValeuLocalStorage( 'modo' ) === 'initialColors' ) {
    checkbox.removeAttribute( 'checked' )
    changeColors( initialColors )
  } else {
    checkbox.setAttribute( 'checked' , '' )
    changeColors( darkMode )
  }
} )