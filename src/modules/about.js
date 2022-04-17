const mainWrapper = document.createElement('main');
mainWrapper.classList.add('about-wrapper')

const heading = document.createElement('h2');
heading.classList.add('about-page-heading');
heading.textContent = "Only the best";

const text = document.createElement('p');
text.classList.add('about-page-text');

const textSection1Heading = document.createElement('h2')
textSection1Heading.textContent = "Lorem, ipsum.";
const textSection1 = document.createElement('p');
textSection1.textContent = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde commodi rem similique nulla quidem non, earum sapiente recusandae. Deserunt, hic?";

const textSection2Heading = document.createElement('h2')
textSection2Heading.textContent = "Lorem, ipsum.";
const textSection2 = document.createElement('p');
textSection2.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis libero delectus distinctio, sit soluta ipsum cumque dolorem veniam consequuntur molestiae, placeat nihil? Facilis nobis iure necessitatibus explicabo blanditiis dolorem dolore.";

const textSection3Heading = document.createElement('h2')
textSection3Heading.textContent = "Lorem, ipsum.";
const textSection3 = document.createElement('p');
textSection3.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi rem odit culpa repellendus, porro illum?";

text.append(...[
  textSection1Heading,
  textSection1,
  textSection2Heading,
  textSection2,
  textSection3Heading,
  textSection3,
]);

const awards = document.createElement('div');
awards.classList.add('about-page-awards');

for (let i = 0; i < 3; i++) {
  const award = document.createElement('div');
  award.classList.add('award');
  award.innerHTML = '<span class="material-icons">star</span>';

  awards.append(award);
}

mainWrapper.append(...[heading, text, awards]);

export default mainWrapper;