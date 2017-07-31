module.exports = function() {

  // begin page-header parallax
  $(window).scroll(function(){
    $('.parallax').css('background-position','center calc(50% + '+($(window).scrollTop()*0.4)+'px');
  });
  // end page-header parallax

};