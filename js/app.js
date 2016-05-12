$(document).foundation();


//animacja przewijania
$(function() {
  // dodaj ta klase smooth scroll do anchorow ktore maja sie przewijac
  $('.smoothScroll').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 75
        }, 1000); // speed of scroll
        return false;
      }
    }
  });
});

//toggle menu
$(".toggle-menu").on("click", function(){
  $("#menu").toggleClass("is-open");
});
