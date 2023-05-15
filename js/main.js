const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

menu.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    hamburger.classList.remove('active');
    menu.classList.remove('active');
  }
});

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
});

// const links = document.querySelectorAll('.menu a');

// for (const link of links) {
//   link.addEventListener('click', (e) => {
//     e.preventDefault();
//     const targetId = link.getAttribute('href');
//     document.querySelector(targetId).scrollIntoView({
//       behavior: 'smooth'
//     });
//   });
// }

















function rotateSpan() {
  const spanElement = document.getElementById("span-element");
  spanElement.classList.toggle("rotated");
}

function rotateSpan2() {
  const spanElement = document.getElementById("span-element2");
  spanElement.classList.toggle("rotated");
}

function rotateSpan3() {
  const spanElement = document.getElementById("span-element3");
  spanElement.classList.toggle("rotated");
}

function rotateSpan4() {
  const spanElement = document.getElementById("span-element4");
  spanElement.classList.toggle("rotated");
}

function rotateSpan5() {
  const spanElement = document.getElementById("span-element5");
  spanElement.classList.toggle("rotated");
}

function rotateSpan6() {
  const spanElement = document.getElementById("span-element6");
  spanElement.classList.toggle("rotated");
}

function rotateSpan7() {
  const spanElement = document.getElementById("span-element7");
  spanElement.classList.toggle("rotated");
}

function rotateSpan8() {
  const spanElement = document.getElementById("span-element8");
  spanElement.classList.toggle("rotated");
}

function rotateSpan9() {
  const spanElement = document.getElementById("span-element9");
  spanElement.classList.toggle("rotated");
}

function rotateSpan10() {
  const spanElement = document.getElementById("span-element10");
  spanElement.classList.toggle("rotated");
}



