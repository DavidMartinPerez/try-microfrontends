import faker from 'faker';

const mount = (el) => {

    const cartText = `<div>Tienes ${faker.random.number()} articulos en tu carrito</div>`;

    el.innerHTML = cartText;
}


// Situación 1
// Corremos la aplicación en desarrollo aislada
// Usamos el html local de la aplicacion
// Cuando sabemos que existe el elemento para añadirlo
// Se renderiza inmediatamente
if( process.env.NODE_ENV === 'development' ) {

    const el = document.querySelector('#cartShow');

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
