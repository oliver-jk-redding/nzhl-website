/*setPageWrapperHeight()

function setPageWrapperHeight() {
  var pageWrapper = document.querySelector(".upper-page.wrapper");
  var heroHeight = document.querySelector(".carousel").clientHeight;  
  pageWrapper.style.height = heroHeight + "px";
}
window.addEventListener("resize", setPageWrapperHeight);*/

var imgWrapper = document.querySelector(".hero-carousel");
var imgNum = Math.floor((Math.random() * 9));
imgWrapper.innerHTML = "<img src=\"images/carousel-pics/carousel-" + imgNum + ".jpg\" alt=\"NZHL Hobby\" width=\"\" class=\"carousel\">";