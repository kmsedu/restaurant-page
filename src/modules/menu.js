import menuImage from '../images/menu-item-1.jpg';

const SECTION_CLASS_NAMES = [
  'menu-roll', 
  'menu-nigiri', 
  'menu-hot-dishes', 
  'menu-drinks-desserts',
]

const SECTION_NAMES = [
  'Rolls',
  'Nigiri',
  'Hot Dishes',
  'Beverages',
  'Desserts',
]

const ROLL_SECTION_MENU_OPTIONS = {
  'Tuna Roll': '$3.50',
  'Salmon Roll': '$3.50',
  'Crab Roll': '$3.50',
  'California Roll': '$3.50',
}
  
const NIGIRI_SECTION_MENU_OPTIONS = {
  'Salmon': '$3.50',
  'Maguro': '$3.50',
  'Ebi': '$3.50',
  'Unagi': '$3.50',
  'Ika': '$2.50',
  'Tako': '$2.50',
}

const HOT_DISHES_SECTION_MENU_OPTIONS = {
  'Karaage Chicken': '$9.50',
  'Karaage Chicken (Spicy)': '$9.50',
  'Okonomiyaki': '$8.50',
  'Takoyaki': '$8.50',
  'Miso Soup': '$4.00',
  'Gyoza (Pork)': '$4.50',
  'Gyoza (Vegetable)': '$4.50',
}

const DRINKS_SECTION_MENU_OPTIONS = {
  'Soft Drinks (can)': '$3.20',
  'Soft Drinks (600mL)': '$4.70',
  'Soft Drinks (1.25L)': '$6.50',
  'Juices (Freshly Squeezed)': '$8.00',
  'Iced Coffee': '$4.50',
  'Iced Tea': '$4.50',
  'Ramune (Imported)': '$6.50',
}

const DESSERT_SECTION_MENU_OPTIONS = {
  'Gelato (Chocolate)': '$5.50',
  'Gelato (Mango)': '$5.50',
  'Gelato (Green Tea)': '$5.50',
  'Green Tea Roll Cake': '$3.50',
  'Cheesecake': '$6.00',
  'Jelly': '$2.50',
  'Chocolate Mousse': '$4.50',
}

const mainWrapper = document.createElement('main');

const heading = document.createElement('h2');
heading.classList.add('menu-page-heading');
heading.innerText = "Our menu"

const description = document.createElement('p');
description.classList.add('menu-page-description');
description.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit culpa aliquam tenetur expedita at magnam?";

const menuBox = document.createElement('div');
menuBox.classList.add('menu-box');
makeSections(SECTION_CLASS_NAMES, menuBox);

const rollSection = menuBox.querySelector('#menu-roll-section');
populateSection(rollSection, 'Rolls', ROLL_SECTION_MENU_OPTIONS, true);

const nigiriSection = menuBox.querySelector('#menu-nigiri-section');
populateSection(nigiriSection, 'Nigiri', NIGIRI_SECTION_MENU_OPTIONS, true);

const hotDishesSection = menuBox.querySelector('#menu-hot-dishes-section');
populateSection(hotDishesSection, 'Hot Dishes', HOT_DISHES_SECTION_MENU_OPTIONS, true);

const drinksAndDessertsSection = menuBox.querySelector('#menu-drinks-desserts-section')

const drinksSection = document.createElement('div')
drinksSection.classList.add('drinks');
populateSection(drinksSection, 'Drinks', DRINKS_SECTION_MENU_OPTIONS, false);

const dessertsSection = document.createElement('div')
dessertsSection.classList.add('desserts');
populateSection(dessertsSection, 'Dessert', DESSERT_SECTION_MENU_OPTIONS, false);


drinksAndDessertsSection.append(...[drinksSection, dessertsSection]);
mainWrapper.append(...[heading, description, menuBox]);

export default mainWrapper;




function makePricelist(menuOptions, parentNode) {
  for (const pair of Object.entries(menuOptions)) {
    const menuOption = document.createElement('li');
    const menuOptionName = document.createElement('p');
    const menuOptionPrice = document.createElement('p');

    menuOption.classList.add('menu-option');
    menuOptionName.classList.add('menu-option-name');
    menuOptionPrice.classList.add('menu-option-price');

    menuOptionName.textContent = pair[0];
    menuOptionPrice.textContent = pair[1];

    menuOption.appendChild(menuOptionName);
    menuOption.appendChild(menuOptionPrice);

    parentNode.appendChild(menuOption);
  }
}


function makeSections(sectionClassNames, parentNode) {
  for (const className of sectionClassNames) {
    const section = document.createElement('section');
    section.classList.add('menu-section');
    section.id = `${className}-section`;

    parentNode.appendChild(section);
  }
}

function populateSection(section, heading, menuOptions, image) {
  const header = document.createElement('div');
  const headingText = document.createElement('h3');
  const headingImage = new Image();
  const body = document.createElement('div');
  const priceList = document.createElement('ul');

  makePricelist(menuOptions, priceList);

  priceList.classList.add('menu-section-pricelist');
  body.classList.add('menu-section-body');

  body.appendChild(priceList);

  header.classList.add('menu-section-header');

  headingText.textContent = heading;
  headingText.classList.add('menu-section-heading');

  header.appendChild(headingText);

  if (image) {
    headingImage.src = menuImage;
    header.appendChild(headingImage);
  }

  section.appendChild(header);
  section.appendChild(body);
}
