import { getImagen } from "../../base/11-async-await";

describe('Priebas con async-awaitTesting api requests', ()=>{

    test('debe retornar el url de la imagen', async () => {
      
        const url = await getImagen()
        console.log(url);

        expect( url.includes('http://') ).toBe(false)
    });
    
})