import './styles/reset.css'
import './styles/normalize.css'
import './styles/style.css'
import header from './modules/header.js'
// import home from './modules/home.js'
import menu from './modules/menu.js'
import footer from './modules/footer.js'

const pageLoad = () => {
  const contentWindow = document.querySelector('#content');

  contentWindow.appendChild(header);
  contentWindow.appendChild(menu);
  contentWindow.appendChild(footer);
}

pageLoad();

console.log("Webpack is running.");