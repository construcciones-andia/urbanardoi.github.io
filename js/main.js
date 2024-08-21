var closeModal = function () {
  document.getElementById('modal').classList.remove('is-active');
  document.getElementById('video').src = '';
}

var openModal = function (video) {
  document.getElementById('modal').classList.add('is-active');
  document.getElementById('video').src = "https://www.youtube.com/embed/"+ video;
}