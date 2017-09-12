module.exports = function() {

  // begin scroll 2 ancor desctop menu
  //header
  $(function() {
    $('a.menu__order[href*=\\#]').on("click", function(e){
      e.preventDefault();
      var anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top - 150 + 'px'
      }, 1000);
    });
    return false;
  });
  //footer
  $(function() {
    $('a.contacts-sec__banner-order[href*=\\#]').on("click", function(e){
      e.preventDefault();
      var anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top - 150 + 'px'
      }, 1000);
    });
    return false;
  });
  // end scroll 2 ancor desctop menu

};