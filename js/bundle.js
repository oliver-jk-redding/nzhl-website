(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
var fs = require('fs')

function getBackgroundImage() {
	var backgroundImages = fs.readdirSync('C:/Users/oredd/Workspace/nzhl-website/images/wallpaper-pics/')
	var backgroundImagesObject = {}
	for(var i = 0; i<backgroundImages.length; i++)
		backgroundImagesObject[i] = backgroundImages[i]
	var ranImage = Math.floor(Math.random() * 46)
	console.log(backgroundImagesObject[ranImage])
}

module.exports = getBackgroundImage
},{"fs":1}],3:[function(require,module,exports){
var getBackgroundImage = require('./index.js')

$("html").css("background-image", 'url(' + 'images/wallpaper-pics/' + getBackgroundImage() + ')');

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
},{"./index.js":2}]},{},[3]);
