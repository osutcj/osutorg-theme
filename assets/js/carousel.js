const statesMap = {
  1: 'img1cls',
  2: 'img2cls',
  3: 'img3cls',
  4: 'img4cls',
  5: 'img5cls',
};

let currentStates = [1, 2, 3, 4, 5]; // states for position class
let imagesUrls = [
  'images/im1osut.webp',
  'images/im2osut.webp',
  'images/im3osut.webp',
  'images/im4osut.webp',
  'images/im5osut.webp',
]; // states for image class
let shift = 0; // shift for the images

let images = [];

export function initializeImages() {
  images = [
    document.getElementById('img1'),
    document.getElementById('img2'),
    document.getElementById('img3'),
    document.getElementById('img4'),
    document.getElementById('img5'),
  ];
  applyBubbles()

}

export function switchStateBubble(index) {
  // sets the current state to the state corresponding to bubble index
  function calcPos1Nr(){
    let iter = index;
    let nr = 3;
    while(iter != 1){
      iter-=1;
      nr-=1;
      if(nr == 0){
        nr = 5;
      }
    }
    return nr;
  }
  let iter =  calcPos1Nr();

  for(let i = 0; i < currentStates.length; i++){
    currentStates[i] = iter;
    iter+=1;
    if(iter == 6){
      iter = 1;
    }
  }
  applyStates();
  applyBubbles()
}

export function applyStates() {
  // apply the state for the images classes
  images.forEach((img, index) => {
    img.classList.remove('img1cls', 'img2cls', 'img3cls', 'img4cls', 'img5cls');
    img.classList.add(statesMap[currentStates[index]]);
  });
  // applyImages();
}

export function applyBubbles() {
  // apply the state for the bubbles classes
  let bubbles = [
    document.getElementById('bubble1'),
    document.getElementById('bubble2'),
    document.getElementById('bubble3'),
    document.getElementById('bubble4'),
    document.getElementById('bubble5'),
  ];

  bubbles.forEach((bubble, index) => {
      bubble.classList.remove('activebubble');
  })
  bubbles[currentStates.indexOf(3)].classList.add('activebubble');
  // remove active bubble from all other bubbles
}

function applyStateDecorator(func) {
  return function () {
    func();
    applyStates();
    applyBubbles();
  };
}

export const iterateStatesLeft = applyStateDecorator(() => {
  let newStates = [];
  currentStates.forEach((state, index) => {
    if (state === 1) {
      newStates[index] = 5;
    } else {
      newStates[index] = state - 1;
    }
  });
  currentStates = newStates;
});

export const iterateStatesRight = applyStateDecorator(() => {
  let newStates = [];
  currentStates.forEach((state, index) => {
    if (state === 5) {
      newStates[index] = 1;
    } else {
      newStates[index] = state + 1;
    }
  });
  currentStates = newStates;
});

export const applyImages = () => {
  // applies images to the background of the divs
  if (shift === imagesUrls.length) {
    shift = 0;
  }
  let idx = shift;
  images.forEach((img, index) => {
    img.style.backgroundImage = `url(${imagesUrls[idx]})`;
    idx++;
    if (idx === imagesUrls.length) {
      idx = 0;
    }
  });
};
