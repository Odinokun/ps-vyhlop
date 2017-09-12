module.exports = function() {

  // begin search
  $('.header__search').on('click', function() {
    $('.header__search-field').addClass('active');
  });
  $('.header__search-form-close').on('click', function() {
    $('.header__search-field').removeClass('active');
  });
  // end search

};