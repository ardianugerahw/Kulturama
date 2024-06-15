import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/skip-link.css';
import '../styles/responsive.css';
import data from '../public/data/data.json';
import './components/kulturama-list';
import './components/kulturama-item';
import './components/Whatsapp';
import App from './views/app';

const kulturamaList = document.querySelector('kulturama-list');
kulturamaList.setKulturamaList(data.kulturamas);

// const menu = document.querySelector('.header__hamburger');
// const drawer = document.querySelector('.nav');
// const mainElement = document.querySelector('main');

// const header = document.querySelector('.header');

// menu.addEventListener('click', (event) => {
//   drawer.classList.toggle('open');
//   event.stopPropagation();
// });

// mainElement.addEventListener('click', (event) => {
//   drawer.classList.remove('open');
//   event.stopPropagation();
// });

// header.addEventListener('click', () => {
//   drawer.classList.remove('open');
// });

const app = new App({
  button: document.querySelector('.header__hamburger'),
  drawer: document.querySelector('.nav'),
  content: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
