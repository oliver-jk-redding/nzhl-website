var getRandomImage = require('./index.js')

$("html").css("background-image", 'url(' + 'images/wallpaper-pics/' + getRandomImage() + ')');

var eventBoxes = document.querySelectorAll('.event-box')
var eventButtons = document.querySelectorAll('.event-box button')

for(var i = 0; i<eventBoxes.length; i++) {
  eventBoxes[i].addEventListener('mousemove', focusButtons, false)
  eventBoxes[i].addEventListener('mouseleave', blurButtons, false)
}

function focusButtons(el) {
  eventButtons[el.target.id].focus()
}
function blurButtons(el) {
  eventButtons[el.target.id].blur()
}
