import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";


describe('Prueba en  08-imp-exp', () => {

    test('getHeroById debe retornar un heroe por id', () => { 

        const id = 1;
        const hero = getHeroeById( id );

        expect( hero ).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        });

    });
    test('getHeroById debe retornanr undefined si no existe', () => {

        const id = 100;
        const hero = getHeroeById(id);

        expect( hero ).toEqual(undefined)
        expect( hero ).toBeFalsy()

    })

    test('getHeroesByOwner debe retornar un arreglo con los 3 heroes de DC', () => { 
    
        const owner = 'DC';

        const filteredArray = [
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
          ]

        const hero = getHeroesByOwner(owner);

        

        expect( hero ).toHaveLength( 3 );
        expect( hero ).toEqual( hero.filter((hero) => hero.owner === owner) );
        
    })

    test('getHeroesByOwner debe retornar un arreglo con los 2 heroes de Marvel', () => { 
    
        const owner = 'Marvel';

        const filteredArray = [
            { id: 2, name: 'Spiderman', owner: 'Marvel' },
            { id: 5, name: 'Wolverine', owner: 'Marvel' }
          ]

        const hero = getHeroesByOwner(owner);

        console.log(hero);

        expect( hero.length ).toBe( 2 );
        expect( hero ).toEqual( filteredArray );
        
    })
});
