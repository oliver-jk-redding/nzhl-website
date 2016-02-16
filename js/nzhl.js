setPageWrapperHeight();

function setPageWrapperHeight() {
  var pageWrapper = document.querySelector(".page.wrapper");
  var heroHeight = document.querySelector(".hero.wrapper").clientHeight;  
  pageWrapper.style.height = heroHeight + "px";
}

window.addEventListener("resize", setPageWrapperHeight);