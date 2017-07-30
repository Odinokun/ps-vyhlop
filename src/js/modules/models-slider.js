module.exports = function() {

  // begin models slider
  $('#models-sec__slider').slick({
    dots: false,
    arrows: false,
    autoplay: true,
    cssEase: 'linear',
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
          }
        }
      ]
  });
  // end   models slider

};