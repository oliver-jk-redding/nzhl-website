drawCarousel();
drawMenu();

function drawCarousel() {
  var imgWrapper = document.querySelector(".wallpaper.wrapper");
  var imgNum = Math.floor((Math.random() * 9));
  imgWrapper.innerHTML = "<img src=\"images/wallpaper-pics/wallpaper-" + imgNum + ".jpg\" alt=\"NZHL Hobby\" width=\"\" class=\"wallpaper\">";
}

function drawMenu() {
  document.querySelector('.navs').innerHTML = 
    "<li id=\"home-link\"><a href=\"index.html\">Home</a></li>" +    
    "<li id=\"about-link\"><a href=\"about.html\">About</a></li>" +   
    "<li id=\"community-link\"><a href=\"community.html\">Community</a></li>" +   
    "<li id=\"hobby-link\"><a href=\"hobby.html\">Hobby</a></li>" +    
    "<li id=\"store-link\"><a href=\"store.html\">Store</a></li>" +    
    "<li id=\"fb\"><a href=\"https://www.facebook.com/groups/826723854039078/\" target=\"_blank\">facebook</a></li>" +    
    "";
    // <a class=\'icon-facebook\' href=\"https://www.facebook.com/groups/826723854039078/\" target=\"_blank\"></a>
  switch (document.querySelector('title').text) {
    case "NZHL Home":
      document.getElementById('home-link').className="navs selected";
      break;
    case "NZHL About":
      document.getElementById('about-link').className="navs selected";
      break;  
    case "NZHL Community":
      document.getElementById('community-link').className="navs selected";
      break;       
    case "NZHL Hobby":
      document.getElementById('hobby-link').className="navs selected";
      break;    
    case "NZHL Store":
      document.getElementById('store-link').className="navs selected";
      break;  
}}

$(function() {
  $('a[href*="#l"]:not([href="#"])').click(function() {
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
  carouselHeight = $('#l-top').height();
  if (st < carouselHeight && st > lastScrollTop) {
    lastScrollTop = st;    
    goToByScroll('l-feature-start')
    $(window).off( "scroll" );
  }
});

function goToByScroll(id){
  $('html,body').animate({
    scrollTop: $("#"+id).offset().top
  },
  'fast');    
}