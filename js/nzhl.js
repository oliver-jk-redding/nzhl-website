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
    "<li><a id=\"store-link\" href=\"store.html\">Store</a></li>";
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

$.scrollify({
    section : "section",
    sectionName : "section-name",
    easing: "easeOutExpo",
    scrollSpeed: 1100,
    offset : 0,
    scrollbars: true,
    standardScrollElements: "",
    before:function() {},
    after:function() {},
    afterResize:function() {},
    afterRender:function() {}
  });