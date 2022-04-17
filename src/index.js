import './styles/reset.css'
import './styles/normalize.css'
import './styles/style.css'
import header from './modules/header.js'
import home from './modules/home.js'
import menu from './modules/menu.js'
import contact from './modules/contact.js'
import about from './modules/about.js'
import footer from './modules/footer.js'

const switchTab = link => {
  const contentWindow = document.querySelector('#content');
  contentWindow.children[1].remove();
  contentWindow.insertBefore(link, contentWindow.lastElementChild);
}

const pageLoad = () => {
  const contentWindow = document.querySelector('#content');

  contentWindow.appendChild(header);
  contentWindow.appendChild(home);
  contentWindow.appendChild(footer);

  const homeLink = document.querySelector('.nav-container :nth-child(1) a');
  const menuLink = document.querySelector('.nav-container :nth-child(2) a');
  const aboutLink = document.querySelector('.nav-container :nth-child(3) a');
  const contactLink = document.querySelector('.nav-container :nth-child(4) a');
  const heroMenuButton = document.querySelector('.hero-menu-button')
  
  homeLink.addEventListener('click', () => switchTab(home));
  menuLink.addEventListener('click', () => switchTab(menu));
  aboutLink.addEventListener('click', () => switchTab(about));
  contactLink.addEventListener('click', () => switchTab(contact));
  heroMenuButton.addEventListener('click', () => switchTab(menu));
  }


pageLoad();

console.log("Webpack is running.");