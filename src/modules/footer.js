import Icon from '../images/GitHub-Mark-Light-32px.png'

export default (() => {
  const mainWrapper = document.createElement('footer');
  const container = document.createElement('div');
  const emptyDiv = document.createElement('div');
  const textContainer = document.createElement('p');
  const iconContainer = document.createElement('div');
  const iconLinkWrapper = document.createElement('a');
  const gitHubIcon = new Image();

  container.classList.add('footer-container');
  emptyDiv.classList.add('empty');
  textContainer.classList.add('footer-text-container');
  iconContainer.classList.add('footer-icon-container');

  textContainer.innerText = "Footer Text";

  gitHubIcon.src = Icon;
  gitHubIcon.alt = "GitHub Logo";

  iconLinkWrapper.appendChild(gitHubIcon);
  iconContainer.appendChild(iconLinkWrapper);

  container.appendChild(emptyDiv);
  container.appendChild(textContainer);
  container.appendChild(iconContainer);

  mainWrapper.appendChild(container);

  return mainWrapper;
})();