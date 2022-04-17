const mainWrapper = document.createElement('main');
mainWrapper.classList.add('home-wrapper');

const heroHeading = document.createElement('h2');
heroHeading.classList.add('hero-heading');
heroHeading.innerHTML = "We love <span class='altfont'>sushi!</span>";

const heroText = document.createElement('p');
heroText.classList.add('hero-text');
heroText.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda voluptate maxime esse cupiditate, fugit possimus quis obcaecati fuga repudiandae magni aperiam quia incidunt. Aliquid sit officiis ullam repudiandae qui vitae!";

const menuButton = document.createElement('a');
menuButton.classList.add('hero-menu-button');
menuButton.textContent = "See the menu";

heroText.append(menuButton);

mainWrapper.append(...[heroHeading, heroText]);

export default mainWrapper;
