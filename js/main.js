import { pagination } from './helpers.js';
import { confetti } from './confetti.js';

let page_active = null;

document.querySelector('.introduction_start').addEventListener('click', () => {
  document.querySelector('.pagination').style.display = 'flex';
  document.querySelector('body').style.backgroundImage =
    'url(/resources/images/template3.jpg)';
  pagination('page_0', 'page_1');
  page_active = 1;
});

document.getElementById('next').addEventListener('click', () => {
  pagination(`page_${page_active}`, `page_${page_active + 1}`);
  ++page_active;

  if (page_active === 5) {
    confetti.start();
    document.getElementById('next').style.display = 'none';
  }
});

document.getElementById('back').addEventListener('click', () => {
  const btn = page_active === 1 ? false : true;
  pagination(`page_${page_active}`, `page_${page_active - 1}`, btn);
  --page_active;

  if (confetti.isRunning) {
    confetti.stop();
    document.getElementById('next').style.display = 'block';
  }
});
