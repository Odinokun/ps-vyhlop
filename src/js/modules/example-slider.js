module.exports = function() {

  // begin models slider
  $('#example-sec__slider').slick({
    dots: false,
    autoplay: true,
    cssEase: 'linear',
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 481,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
  });
  // end   models slider

};