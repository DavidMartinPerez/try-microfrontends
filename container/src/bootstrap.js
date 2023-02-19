import { mount as mountProducts } from 'products/ProductsIndex';
import { mount as mountCart } from 'cart/CartShow';

console.log('Container load');

mountProducts( document.querySelector('#appProductsList') );
mountCart( document.querySelector('#appCartShow') );