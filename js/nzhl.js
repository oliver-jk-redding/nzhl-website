drawCarousel();
drawMenu();

function drawCarousel() {
  var imgWrapper = document.querySelector(".carousel.wrapper");
  var imgNum = Math.floor((Math.random() * 9));
  imgWrapper.innerHTML = "<img src=\"images/carousel-pics/carousel-" + imgNum + ".jpg\" alt=\"NZHL Hobby\" width=\"\" class=\"carousel\">";
}

function drawMenu() {
  document.querySelector('.navs').innerHTML = 
    "<li><a id=\"home-link\" href=\"index.html\">Home</a></li>" +
    "<li><a id=\"news-link\" href=\"news.html\">News</a></li>" +
    "<li><a id=\"about-link\" href=\"about.html\">About</a></li>" +
    "<li><a id=\"contact-link\" href=\"#\">Contact</a></li>" +
    "<li><a id=\"hobby-link\" href=\"hobby.html\">Hobby</a></li>" +
    "<li><a id=\"gallery-link\" href=\"gallery.html\">Gallery</a></li>" +
    "<li><a id=\"store-link\" href=\"store.html\">Store</a></li>" +
    // "<i href=\"https://www.facebook.com/groups/826723854039078/\" class=\'icon-facebook\'></i>";
    // "<i class=\'icon-facebook\'><a href=\"https://www.facebook.com/groups/826723854039078/\"></a></i>";
    "<a class=\'icon-facebook\' href=\"https://www.facebook.com/groups/826723854039078/\" target=\"_blank\"></a>";
  switch (document.querySelector('title').text) {
    case "NZHL Home":
      document.getElementById('home-link').className="navs landed";
      break;
    case "NZHL About":
      document.getElementById('about-link').className="navs landed";
      break;
    case "NZHL News":
      document.getElementById('news-link').className="navs landed";
      break;
    case "NZHL Contact":
      document.getElementById('contact-link').className="navs landed";
      break;
    case "NZHL Hobby":
      document.getElementById('hobby-link').className="navs landed";
      break;
    case "NZHL Gallery":
      document.getElementById('gallery-link').className="navs landed";
      break; 
    case "NZHL Store":
      document.getElementById('store-link').className="navs landed";
      break;  
}}

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});

var lastScrollTop = 0;
$(window).scroll(function(event) {
  var st = $(this).scrollTop();
  carouselHeight = $('#top').height();
  if (st < carouselHeight && st > lastScrollTop) {
    lastScrollTop = st;    
    goToByScroll('feature-start')
    $(window).off( "scroll" );
  }
});

function goToByScroll(id){
  $('html,body').animate({
    scrollTop: $("#"+id).offset().top
  },
  'fast');    
}