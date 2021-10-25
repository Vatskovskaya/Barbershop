$(document).ready(function(){
  $('.header__burger').click(function(event) {
    $('.header__burger,.header__navigation-list').toggleClass('active');
  })
    $('.photo-slide').slick({
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
      responsive:[
        {
          breakpoint: 480,
          settings: {
            dots: true,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
    ]
    });
    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      infinite: false ,
      asNavFor: '.item-galery'
    });
    $('.item-galery').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: false,
      arrows: false,

       centerMode: false,
      focusOnSelect: true
    });
  });