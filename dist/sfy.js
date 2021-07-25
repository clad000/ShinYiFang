$(function () {
  // nav_slide-------------------------------------
  window.addEventListener('scroll', function () {
    // alert('hahaha');
    let headerScroll = document.querySelector('nav');
    let navH1 = document.querySelector('h1 a');
    let openScroll = document.querySelector('.open');
    let closeScroll = document.querySelector('.close');

    headerScroll.classList.toggle('sticky', window.scrollY > 0);
    navH1.classList.toggle('sticky2', window.scrollY > 0);
    openScroll.classList.toggle('sticky2', window.scrollY > 0);
    closeScroll.classList.toggle('sticky2', window.scrollY > 0);
  });

  // nav_slide_rwd-------------------------------------
  let openBtn = document.querySelector('.open');
  let closeBtn = document.querySelector('.close');
  let navSlide = document.querySelector('.nav_list');
  let navH1 = document.querySelector('nav h1 a');

  openBtn.addEventListener('click', function () {
    // alert('open');
    openBtn.classList.add('hidden');
    closeBtn.classList.remove('hidden');
    navSlide.classList.add('banner_slide');
    navH1.classList.add('navH1_color');
  });

  closeBtn.addEventListener('click', function () {
    // alert('close');
    openBtn.classList.remove('hidden');
    closeBtn.classList.add('hidden');
    navSlide.classList.remove('banner_slide');
    navH1.classList.remove('navH1_color');
  });

  // 計時器--------------------------------------------
  let counter = 1;
  let counter2 = 1;
  function banner_slide() {
    document.querySelector('#banner_radio' + counter).checked = true;
    if (counter < 3) {
      counter++;
    } else {
      counter = 1;
    }
  }
  function hope_slide() {
    document.querySelector('#hope_radio' + counter2).checked = true;
    if (counter2 < 3) {
      counter2++;
    } else {
      counter2 = 1;
    }
  }

  setInterval(() => {
    banner_slide();
  }, 5000);
});
