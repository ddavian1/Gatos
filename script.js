document.getElementById('loadCatImage').addEventListener('click', async function() {
    const catImagesContainer = document.getElementById('catImages');

    // Elimina la imagen anterior si existe
    catImagesContainer.innerHTML = '';

    try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search');
        const data = await response.json();

        if (data && data.length > 0) {
            const catImageUrl = data[0].url;

            const img = document.createElement('img');
            img.src = catImageUrl;
            img.alt = 'Imagen de un gato';

            catImagesContainer.appendChild(img);
        } else {
            console.error('No se encontraron imágenes.');
        }
    } catch (error) {
        console.error('Error al obtener la imagen de gato:', error);
    }
});
