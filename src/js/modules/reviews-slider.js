module.exports = function() {

  // begin Review slider
  $('#review-sec__slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    cssEase: 'linear',
      responsive: [
        {
          breakpoint: 481,
          settings: {
            arrows: false,
          }
        }
      ]
  });
  // end   Review slider

};