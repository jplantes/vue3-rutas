const isAuthenticatedGuard = async ( to, from, next ) => {

  return new Promise( () => {

    const random = Math.random() * 100
 
     if ( random > 50 ) {
       console.log('Autenticado - canAccess')
       next()
     } else {
       console.log('No Autenticado - canAccess')
       next({ name: 'pokemon-home'})
     }

  })

}

export default isAuthenticatedGuard