(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
var fs = require('fs')
// var loadJS = require('./nzhl.js')

function getBackgroundImage() {
	var backgroundImages = fs.readdirSync('C:/Users/oredd/Workspace/nzhl-website/images/wallpaper-pics')
	var backgroundImagesObject = {}
	for(var i = 0; i<backgroundImages.length; i++)
		backgroundImagesObject[i] = backgroundImages[i]
	return backgroundImagesObject[ranImage]
}

wallpaperPics = { '0': '10422250_10207644351085804_8783071134074746854_n.jpg',
  '1': '10649473_10207644352005827_2179721886457220488_n.jpg',
  '2': '12038360_10207644360486039_7062306193792106080_n.jpg',
  '3': '12112502_10207644351925825_190359839674743921_n.jpg',
  '4': '12143227_10207644361406062_1725884756835848298_n.jpg',
  '5': '12143234_10207644349845773_5975792325185005013_n.jpg',
  '6': '12417769_10207644355205907_5409998385258524699_n.jpg',
  '7': '12439482_10207644356045928_4418348363593176327_n.jpg',
  '8': '12472751_10207644364326135_5090510495054228368_n.jpg',
  '9': '12472770_10207644364286134_3141729030615947861_n.jpg',
  '10': '12512731_10207644349405762_4729494475600996939_n.jpg',
  '11': '12523887_10207644364126130_8272858834710637778_n.jpg',
  '12': '12523964_10207644362366086_7132950655661129627_n.jpg',
  '13': '12523966_10207644355445913_4110288445893755204_n.jpg',
  '14': '12524163_10207644351445813_8646149087577818795_n.jpg',
  '15': '12524408_10207644358765996_6582381349617297005_n.jpg',
  '16': '12670688_10207644350845798_7988102425058073609_n.jpg',
  '17': '12670688_10207644360406037_4490083850259042453_n.jpg',
  '18': '12794606_10207644356965951_7158679894847600431_n.jpg',
  '19': '12794606_10207644361286059_5930090118010212354_n.jpg',
  '20': '12799408_10207644359246008_3033338435824177364_n.jpg',
  '21': '12801534_10207644359806022_5254089869084812990_n.jpg',
  '22': '12809694_10207644359886024_8739015468505056673_n.jpg',
  '23': '12920464_10207644354885899_646087372201547716_n.jpg',
  '24': '12923198_10207644358005977_8698003628806196091_n.jpg',
  '25': '12924329_10207644359206007_1601009306953294934_n.jpg',
  '26': '12928174_10207644350285784_7453908082602388900_n.jpg',
  '27': '12928217_10207644363646118_8631558873615368071_n.jpg',
  '28': '12928220_10207644361366061_1862647890561470756_n.jpg',
  '29': '12931131_10207644352445838_4148418730320940059_n.jpg',
  '30': '12932923_10207644349325760_1023494612466740837_n.jpg',
  '31': '12936697_10207644352245833_3237297496358242565_n.jpg',
  '32': '12936719_10207644354525890_7407461833067214434_n.jpg',
  '33': '12938276_10207644351805822_877930490347948393_n.jpg',
  '34': '12938362_10207644351325810_4513899066634332052_n.jpg',
  '35': '1915817_10207644352645843_2206565210839925219_n.jpg',
  '36': '1929819_10207644355845923_1035603623441659470_n.jpg',
  '37': '940962_10207644362086079_8572474166995696000_n.jpg',
  '38': '941058_10207644349365761_4929024033362220883_n.jpg',
  '39': 'wallpaper-1.jpg',
  '40': 'wallpaper-2.jpg',
  '41': 'wallpaper-3.jpg',
  '42': 'wallpaper-4.jpg',
  '43': 'wallpaper-5.jpg',
  '44': 'wallpaper-6.jpg',
  '45': 'wallpaper-7.jpg' }

function getRandomImage() {
	var ranImage = Math.floor(Math.random() * 46)
	return wallpaperPics[ranImage]
}

module.exports = getRandomImage

},{"fs":1}],3:[function(require,module,exports){
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

},{"./index.js":2}]},{},[3]);
