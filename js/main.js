/*Variables globales*/
var energisante = $('section#recettes div:first-child button.badge:nth-of-type(1)')
var desalterante = $('section#recettes div:first-child button.badge:nth-of-type(2)')
var selectionner = $('section#recettes div div article div p')






/*API Google Map*/

function initMap() {
// Create a map object and specify the DOM element for display.
var map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: 50.6476347, lng: 3.1369403},
  zoom: 8
});
}

/*Sélection*/
$(function() {
	/*Disponible vs. Indisponible*/
	energisante.on('click', function() {
		selectionner.text('Non disponible')
	})

	desalterante.on('click', function() {
		selectionner.text('Sélectionner')
	})


	
});


















