import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";



describe('Pruebas en 09-promesas', () => {

    test('getHeroeByIdAsync debe retornar un heroe', () => {
        const id = 1;
        return 

            getHeroeByIdAsync( id )
            .then( hero  => {
                expect(hero).toEqual(
                    {
                        id: 1,
                        name: 'Batman',
                        owner: 'DC'
                    }
                );
                

                
            })
        
        
    });

    test('getHeroeByIdAsync debe obtener un error si heroe no existe', () => {
        const id = 100;
        return 

            getHeroeByIdAsync( id )
            .catch( error => {
                
                
                expect(error).toBe(`No se pudo encontrar el error ${id}`)
            })
        
        
    });
    
    
});
