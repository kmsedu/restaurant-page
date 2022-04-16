export default (() => {
  const mainWrapper = document.createElement('header');
  const pageHeading = document.createElement('h1');
  const navigationBar = document.createElement('div');
  const navigationLinkList = document.createElement('nav');

  mainWrapper.classList.add('topbar')
  navigationBar.classList.add('navbar');
  navigationLinkList.classList.add('nav-container');

  pageHeading.textContent = "Restaurant Page";

  for (let element of ['Home', 'Menu', 'About', 'Contact']) {
    const listMember = document.createElement('li');
    const link = document.createElement('a');
    
    link.href = "#";
    link.textContent = element;

    listMember.appendChild(link);
    navigationLinkList.appendChild(listMember);
  }

  navigationBar.appendChild(navigationLinkList);
  mainWrapper.appendChild(pageHeading);
  mainWrapper.appendChild(navigationBar);

  return mainWrapper;
})();
