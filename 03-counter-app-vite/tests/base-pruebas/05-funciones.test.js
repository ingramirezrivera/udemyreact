import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => {
    test('get user debe retornar un objeto', () => { 


        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect( testUser ).toEqual( user )
    })

    test('getUsuarioActiovo debe retornar el usuario como objeto', () => {

        const name = 'Pablo213';

        const activeUser = {
            uid: 'ABC567',
            username: name
        };

        const getActiveUser = getUsuarioActivo(name);

        console.log(getActiveUser);

        expect( getActiveUser ).toEqual( activeUser );

    })
});
