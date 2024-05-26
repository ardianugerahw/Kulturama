import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/skip-link.css';
import '../styles/responsive.css';

const menu = document.querySelector('.header__hamburger');
const drawer = document.querySelector('.nav');
const mainElement = document.querySelector('main');

const header = document.querySelector('.header');

menu.addEventListener('click', function (event) {
	drawer.classList.toggle('open');
	event.stopPropagation();
});

mainElement.addEventListener('click', function (event) {
	drawer.classList.remove('open');
	event.stopPropagation();
});

header.addEventListener('click', function () {
	drawer.classList.remove('open');
});
