$(document).ready(function(){
  $('.header__burger').click(function(event) {
    $('.header__burger,.header__navigation-list').toggleClass('active');
  })
    $('.photo-slide').slick({
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1
    });
  });