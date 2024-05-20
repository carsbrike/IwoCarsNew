"use strict";

var nextDom = document.getElementById('next');
var prevDom = document.getElementById('prev');
var carouselDom = document.querySelector('.carousel');
var listItemDom = document.querySelector('.carousel .list');
var thumbnailDom = document.querySelector('.carousel .thumbnail');

nextDom.onclick = function () {
  showSlider('next');
};

prevDom.onclick = function () {
  showSlider('prev');
};

var timeRunning = 500;
var timeAutoNext = 7500;
var runTimeOut;
var runAutoRun = setTimeout(function () {
  nextDom.click();
}, timeAutoNext);

function showSlider(type) {
  var itemSlider = document.querySelectorAll('.carousel .list .item');
  var itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');

  if (type === 'next') {
    listItemDom.appendChild(itemSlider[0]);
    thumbnailDom.appendChild(itemThumbnail[0]);
    carouselDom.classList.add('next');
  } else {
    var positionLastItem = itemSlider.length - 1;
    listItemDom.prepend(itemSlider[positionLastItem]);
    thumbnailDom.prepend(itemThumbnail[positionLastItem]);
    carouselDom.classList.add('prev');
  }

  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(function () {
    carouselDom.classList.remove('next');
    carouselDom.classList.remove('prev');
  }, timeRunning);
  clearTimeout(runAutoRun);
  runAutoRun = setTimeout(function () {
    nextDom.click();
  }, timeAutoNext);
}