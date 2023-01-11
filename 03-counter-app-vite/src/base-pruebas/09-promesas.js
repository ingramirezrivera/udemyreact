

export const getHeroeByIdAsync = ( id ) => {

    return new Promise( (resolve, reject) => {

        setTimeout( () =>  {
            // Tarea
            // importen el 
            const p1 = getHeroeByIdAsync( id );
            if ( p1 ) {
                resolve( p1 );
            } else {
                reject( 'No se pudo encontrar el héroe' + id );
                
            }
        }, 100 )
    
    });


}

