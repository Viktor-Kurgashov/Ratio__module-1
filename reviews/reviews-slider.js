// через , не задаеются переменные (это плохой "тон") каждой переменой let, а в данном случае const!
// btnLeft, btnRight - не применяются в коде
let stack = document.getElementsByClassName('reviews-list')[0],
  btnLeft = document.getElementsByClassName('reviews-controls__button')[0],
  btnRight = document.getElementsByClassName('reviews-controls__button')[1];



function moveRight() {
  if (window.matchMedia('(max-width: 640px)').matches) {
    if (!stack.style.marginLeft) stack.style.marginLeft = '-108%'
    else if (stack.style.marginLeft === '-108%') stack.style.marginLeft = '-216%';
  }
  if (window.matchMedia('(max-width: 960px)').matches && (!stack.style.marginLeft)) stack.style.marginLeft = '-52%';
}

function moveLeft() {
  if (window.matchMedia('(max-width: 640px)').matches) {
    if (stack.style.marginLeft === '-108%') stack.style.marginLeft = '';
    else if (stack.style.marginLeft === '-216%') stack.style.marginLeft = '-108%';
  }
  if (window.matchMedia('(max-width: 960px)').matches && (stack.style.marginLeft === '-52%')) stack.style.marginLeft = '';
}

function reset() { stack.style.marginLeft = ''; }

window.addEventListener('resize', () => reset());
