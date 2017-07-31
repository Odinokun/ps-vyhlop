module.exports = function() {

  // begin mobile menu open/close
  $('#burger label').on('click', function() {
    $('.menu__nav').toggleClass('active');
  });
  // end mobile menu open/close

};