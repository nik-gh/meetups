/*jshint esversion: 6 */
var express = require('express'),
router = express.Router();

router.get('/',function(req,res) {
	var data = req.app.get('appData');
	var pagePhotos = [];
	var pageSpeakers = data.speakers;

	data.speakers.forEach(function(item) {
		pagePhotos = pagePhotos.concat(item.artwork);
	});

   res.render('index', {
   	pageTitle: 'Home',
   	artwork: pagePhotos,
   	speakers: pageSpeakers,
   	pageID: 'home'
   });
});

module.exports = router;