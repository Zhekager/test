import '../sass/main.scss';
import menutemplate from '../templates/menu.hbs';
import menuJson from '../menu.json';


const menuMarcup = createCardsMarcup(menuJson);

function createCardsMarcup(menuJson) {
    return menuJson.map(menutemplate).join('');
};

const menuRef = document.querySelector('.js-menu');
menuRef.insertAdjacentHTML('beforeend', menuMarcup);