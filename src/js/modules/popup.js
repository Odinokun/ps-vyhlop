module.exports = function() {

  // begin popup open
  $('#header-top__call-btn').on('click', function() {
    $('.popup-header__layer').fadeIn();
    $('#header-top__contacts').addClass('active');
  });
  // end   popup open

  // begin popup close
  $('.popup-header__layer').on('click', function() {
    $('.popup-header__layer').fadeOut();
    $('#header-top__contacts').removeClass('active');
  });
  // end   popup close

  // begin popup scroll
  // $(window).on('scroll', function() {
  //   $('.popup').css({'top': $(window).scrollTop() + 50});
  // }).scroll();
  // end   popup scroll

};