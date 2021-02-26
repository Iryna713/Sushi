let date = new Date();
let year = date.getFullYear();

let footer = document.querySelector('.footer__text');
let span = document.createElement('span');
span.innerText = year;
footer.append(span);

function slideEffect(page) {
  let first = document.querySelector(`.gallery__img-first`);
  let second = document.querySelector(`.gallery__img-second`);
  let third = document.querySelector(`.gallery__img-third`);

  switch(page) {
    case 'first':
      first.style.cssText = "opacity: 1;";
      second.style.cssText = "opacity: 0;";
      third.style.cssText = "opacity: 0;";
      break;
    case 'second':
      first.style.cssText = "opacity: 0;";
      second.style.cssText = "opacity: 1;";
      third.style.cssText = "opacity: 0;";
      break;
    case 'third':
      first.style.cssText = "opacity: 0;";
      second.style.cssText = "opacity: 0;";
      third.style.cssText = "opacity: 1;";
      break;
  }

  return false;
}

let activeSlide = 'first';

function next() {
  switch(activeSlide) {
    case 'first':
      slideEffect('second');
      activeSlide = 'second';
      break;
    case 'second':
      slideEffect('third');
      activeSlide = 'third';
      break;
    case 'third':
      slideEffect('first');
      activeSlide = 'first';
      break;
  }
}

function prev() {
  switch(activeSlide) {
    case 'first':
      slideEffect('third');
      activeSlide = 'third';
      break;
    case 'second':
      slideEffect('first');
      activeSlide = 'first';
      break;
    case 'third':
      slideEffect('second');
      activeSlide = 'second';
      break;
  }
}
