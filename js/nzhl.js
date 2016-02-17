drawCarousel();
drawMenu();

function drawCarousel() {
  var imgWrapper = document.querySelector(".carousel.wrapper");
  var imgNum = Math.floor((Math.random() * 9));
  imgWrapper.innerHTML = "<img src=\"images/carousel-pics/carousel-" + imgNum + ".jpg\" alt=\"NZHL Hobby\" width=\"\" class=\"carousel\">";
}

function drawMenu() {
  document.getElementById('navs').innerHTML = 
    "<li><a id=\"home-link\" href=\"index.html\">Home</a></li>" +
    "<li><a id=\"news-link\" href=\"news.html\">News</a></li>" +
    "<li><a id=\"about-link\" href=\"about.html\">About</a></li>" +
    "<li><a id=\"contact-link\" href=\"#\">Contact</a></li>" +
    "<li><a id=\"hobby-link\" href=\"hobby.html\">Hobby</a></li>" +
    "<li><a id=\"gallery-link\" href=\"gallery.html\">Gallery</a></li>" +
    "<li><a id=\"store-link\" href=\"store.html\">Store</a></li>";
  switch (document.querySelector('title').text) {
    case "NZHL Home":
      document.getElementById('home-link').className="navbar landed";
      break;
    case "NZHL About":
      document.getElementById('about-link').className="navbar landed";
      break;
    case "NZHL News":
      document.getElementById('news-link').className="navbar landed";
      break;
    case "NZHL Contact":
      document.getElementById('contact-link').className="navbar landed";
      break;
    case "NZHL Hobby":
      document.getElementById('hobby-link').className="navbar landed";
      break;
    case "NZHL Gallery":
      document.getElementById('gallery-link').className="navbar landed";
      break; 
    case "NZHL Store":
      document.getElementById('store-link').className="navbar landed";
      break;  
}}

/*var arrowScroll = document.querySelector(".arrow.wrapper");
function hoverArrow() {  
  arrowScroll.innerHTML = "<img src=\"images/down-arrow-fill.png\" class=\"arrow\">";
}
function deHoverArrow() {  
  arrowScroll.innerHTML = "<img src=\"images/down-arrow-fill2.png\" class=\"arrow\">";
}
document.querySelector('.arrow').addEventListener('mouseover', hoverArrow);
document.querySelector('.arrow').addEventListener('mouseout', deHoverArrow);*/
