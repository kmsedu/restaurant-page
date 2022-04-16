export default (() => {
  const mainWrapper = document.createElement('main');
  const heroHeading = document.createElement('h2');
  const heroText = document.createElement('p');
  const menuButton = document.createElement('a');

  heroHeading.classList.add('hero-heading');
  heroText.classList.add('hero-text');
  menuButton.classList.add('hero-menu-button');

  heroHeading.textContent = "We love SUSHI";
  heroText.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda voluptate maxime esse cupiditate, fugit possimus quis obcaecati fuga repudiandae magni aperiam quia incidunt. Aliquid sit officiis ullam repudiandae qui vitae!";
  menuButton.textContent = "See the menu";

  heroText.appendChild(menuButton);

  mainWrapper.appendChild(heroHeading);
  mainWrapper.appendChild(heroText);

  return mainWrapper;
})();