const pagination = (page_visible, page_hidden, btn = true) => {
  document.getElementById(page_visible).style.display = 'none';
  document.getElementById(page_hidden).style.display = 'block';

  const buttons = document.querySelector('.pagination');
  if (btn) {
    buttons.style.display = 'flex';
  } else {
    document.querySelector('body').style.background =
      'url(/resources/images/wallpaper.jpg)';
    buttons.style.display = 'none';
  }

  window.scrollTo(0, 0);
};

export { pagination };
