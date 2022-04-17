import Icon from '../images/GitHub-Mark-Light-32px.png'

const mainWrapper = document.createElement('footer');

const container = document.createElement('div');
container.classList.add('footer-container');

mainWrapper.append(container);

const photoCredit = document.createElement('div');
photoCredit.classList.add('photo-credit');
photoCredit.innerHTML = ''

const textContainer = document.createElement('p');
textContainer.classList.add('footer-text-container');
textContainer.innerHTML = `Created as part of<a href="https://www.theodinproject.com/" class="footer-odin-link">The Odin Project</a>`

const iconContainer = document.createElement('div');
iconContainer.classList.add('footer-icon-container');

container.append(...[photoCredit, textContainer, iconContainer]);

const iconLinkWrapper = document.createElement('a');
iconLinkWrapper.href = "https://github.com/kmsedu";

iconContainer.append(iconLinkWrapper);

const gitHubIcon = new Image();
gitHubIcon.src = Icon;
gitHubIcon.alt = "GitHub Logo";

iconLinkWrapper.append(gitHubIcon);

export default mainWrapper;
