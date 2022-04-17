import mapImage from '../images/map.png'

const OPENING_HOURS = {
  Monday: '10:00am - 6:00pm',
  Tuesday: '10:00am - 6:00pm',
  Wednesday: '10:00am - 6:00pm',
  Thursday: '10:00am - 6:00pm',
  Friday: '10:00am - 10:00pm',
  Saturday: '10:00am - 10:00pm',
  Sunday: '10:00am - 6:00pm',
}

const mainWrapper = document.createElement('main')
mainWrapper.classList.add('contact-wrapper')

const container = document.createElement('div')
container.classList.add('contact-box');

const infoSection = document.createElement('section');
infoSection.classList.add('contact-info');

const infoHeading = document.createElement('h2')
infoHeading.textContent = 'Opening Hours';

const openingHoursContainer = document.createElement('div');
openingHoursContainer.classList.add('contact-hours');

const openingHoursList = document.createElement('ul')

for (const pair of Object.entries(OPENING_HOURS)) {
  const listMember = document.createElement('li')

  const openingDay = document.createElement('p')
  openingDay.textContent = pair[0];

  const openingHours = document.createElement('p');
  openingHours.textContent = pair[1];

  listMember.append(...[openingDay, openingHours]);
  openingHoursList.append(listMember);
}

openingHoursContainer.append(openingHoursList);

const details = document.createElement('div')
details.classList.add('contact-details');

const detailsHeading = document.createElement('h2')
detailsHeading.textContent = 'Get in touch';

const phoneNumber = document.createElement('p');
phoneNumber.classList.add('contact-phone-number');
phoneNumber.textContent = '3 1430 0320';

const emailAdress = document.createElement('p');
emailAdress.classList.add('contact-email');
emailAdress.textContent = 'neo@sushi.com';

details.append(...[detailsHeading, phoneNumber, emailAdress]);

infoSection.append(infoHeading, openingHoursContainer, details);

const locationSection = document.createElement('section');
locationSection.classList.add('contact-location-info');

const addressContainer = document.createElement('div');
addressContainer.classList.add('contact-adress');

const addressHeading = document.createElement('h2');
addressHeading.classList.add('contact-address-heading');
addressHeading.textContent = 'Find us';

const address = document.createElement('address');
address.textContent = "275 Real Street, Brooklyn NY 11238"

addressContainer.append(...[addressHeading, address]);

const mapContainer = document.createElement('div');
mapContainer.classList.add('contact-map');

const map = new Image();
map.src = mapImage;

mapContainer.append(map);
locationSection.append(addressContainer, mapContainer);
container.append(...[infoSection, locationSection]);
mainWrapper.append(container);

export default mainWrapper;