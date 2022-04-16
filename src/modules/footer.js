import Icon from '../images/GitHub-Mark-Light-32px.png'

const mainWrapper = document.createElement('footer');

const container = document.createElement('div');
container.classList.add('footer-container');

mainWrapper.append(container);

const emptyDiv = document.createElement('div');
emptyDiv.classList.add('empty');

const textContainer = document.createElement('p');
textContainer.classList.add('footer-text-container');
textContainer.innerText = "Footer Text";

const iconContainer = document.createElement('div');
iconContainer.classList.add('footer-icon-container');

container.append(...[emptyDiv, textContainer, iconContainer]);

const iconLinkWrapper = document.createElement('a');

iconContainer.append(iconLinkWrapper);

const gitHubIcon = new Image();
gitHubIcon.src = Icon;
gitHubIcon.alt = "GitHub Logo";

iconLinkWrapper.append(gitHubIcon);

export default mainWrapper;
