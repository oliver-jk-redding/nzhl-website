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