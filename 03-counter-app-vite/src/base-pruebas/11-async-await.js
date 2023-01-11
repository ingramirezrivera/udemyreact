

export const getImagen = async() => {

    try {

        const apiKey = '1opqNBTv0d6oRm8z7BpG8GmLRcUNnBIR';
        const resp   = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        document.body.append( img );

    } catch (error) {
        // manejo del error
        return 'No se encontro la imagen'
    }
    
    
    
}

 getImagen();



