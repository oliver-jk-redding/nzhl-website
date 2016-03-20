var ranImage = Math.floor(Math.random() * 9)

$("html").css("background-image", 'url(' + 'images/wallpaper-pics/wallpaper-' + ranImage + '.jpg' + ')');

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