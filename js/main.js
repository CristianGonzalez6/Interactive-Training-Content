import { pagination, modal } from './helpers.js'

let page_active = null;

document.querySelector('.introduction_start')
  .addEventListener('click', () => {
    document.querySelector('.pagination').style.display = 'flex';
    document.querySelector('body').style.backgroundImage = "url(/resources/images/template3.jpg)"
    pagination('page_0', 'page_1');
    page_active = 1;
  });

document.getElementById('back')
  .addEventListener('click', () => {
    page_active = pagination(`page_${page_active}`, `page_${(page_active -1)}`, false)
  });