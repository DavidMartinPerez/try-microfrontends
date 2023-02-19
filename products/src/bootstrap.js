import faker from 'faker';

console.log('Products Load!')

const mount = (el)  => {

    //inicializamos el estado de productos que vamos a tener
    const products = [];

    // Generamos los productos aleatoriamente con la librería faker
    for(let i = 0; i < 10; i++) {
        const name = faker.commerce.productName();
        products.push(name);
    }

    //Renderizamos la lista de productos
    el.innerHTML = `
        ${products.map( (name) => `<li>${name}</li>` )?.toString()?.replaceAll(',', '')}
    `;


}

// Situación 1
// Corremos la aplicación en desarrollo aislada
// Usamos el html local de la aplicacion
// Cuando sabemos que existe el elemento para añadirlo
// Se renderiza inmediatamente
if( process.env.NODE_ENV === 'development' ) {

    const el = document.querySelector('#productsList');

    if(el) {
        mount(el)
    }

}

//Situación 2
// Correr en produción o desarrollo
// No conocemos si existe el elemento donde se quiere renderizar
// No queremos que se renderice inmediatamente
// Exportamos el render para que el container sea el que se encarga de renderizarlo
export { mount };
