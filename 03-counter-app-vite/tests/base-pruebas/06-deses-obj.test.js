import { usContext } from "../../src/base-pruebas/06-deses-obj";


describe('Prueba en 06-deses-obj', () => {

    test('usContext debe retornar un objeto', () => { 

        const clave = 'fds4a56fd';
        const edad = 35


        const obj = {
            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        }

        const getObj = usContext(clave, edad);

        expect( getObj ).toEqual( obj )
        console.log(getObj)

     })
}
);
