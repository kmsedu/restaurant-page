const mainWrapper = document.createElement('header');
mainWrapper.classList.add('topbar')

const pageHeading = document.createElement('h1');
pageHeading.innerHTML = 'neo <span class="green">sushi!';

const navigationBar = document.createElement('div');
navigationBar.classList.add('navbar');

mainWrapper.append(...[pageHeading, navigationBar]);

const navigationLinkList = document.createElement('nav');
navigationLinkList.classList.add('nav-container');
for (let element of ['Home', 'Menu', 'About', 'Contact']) {
  const listMember = document.createElement('li');
  const link = document.createElement('a');

  link.href = "#";
  link.textContent = element;

  listMember.append(link);
  navigationLinkList.append(listMember);
}

navigationBar.append(navigationLinkList);

export default mainWrapper;
