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
