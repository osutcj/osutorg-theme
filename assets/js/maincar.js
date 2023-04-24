import {
  initializeImages,
  iterateStatesRight,
  iterateStatesLeft, switchStateBubble,
} from './carousel.js';

function setCarousel() {
  // set carousel
  let root = document.getElementById('app');
  initializeImages();
  let button = document.getElementById('buttonRight');
  button.addEventListener('click', function () {
    iterateStatesRight();
  });
  button = document.getElementById('buttonLeft');
  button.addEventListener('click', function () {
    iterateStatesLeft();
  });

  button = document.getElementById('bubble1');
  button.addEventListener('click', function () {
    switchStateBubble(1);
  });
  button = document.getElementById('bubble2');
  button.addEventListener('click', function () {
    switchStateBubble(2);
  })
  button = document.getElementById('bubble3');
  button.addEventListener('click', function () {
    switchStateBubble(3);
  })
  button = document.getElementById('bubble4');
  button.addEventListener('click', function () {
    switchStateBubble(4);
  });
  button = document.getElementById('bubble5');
  button.addEventListener('click', function () {
    switchStateBubble(5);
  });

}

setCarousel();
