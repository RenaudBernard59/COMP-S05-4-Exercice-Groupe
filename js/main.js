/*Variables globales*/
var energisante = $('section#recettes div:first-child button.badge:nth-of-type(1)')
var desalterante = $('section#recettes div:first-child button.badge:nth-of-type(2)')
var selectionner = $('section#recettes div div article div p')
var btnarticle1 = $('section#recettes div div article:nth-of-type(1) div p')
var btnarticle2 = $('section#recettes div div article:nth-of-type(2) div p')
var btnarticle3 = $('section#recettes div div article:nth-of-type(3) div p')
var article1 = $('section#recettes div div article:nth-of-type(1)')
var article2 = $('section#recettes div div article:nth-of-type(2)')
var article3 = $('section#recettes div div article:nth-of-type(3)')
var section3 = $('section:nth-of-type(3) div div')


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
	});

	desalterante.on('click', function() {
		selectionner.text('Sélectionner')
	});

	//if selectionner.text('Sélectionner') == 'Sélectionner' {
			btnarticle1.on('click', function() { 
				article1.appendTo(section3)
			});
			btnarticle2.on('click', function() { 
				article2.appendTo(section3)
			});
			btnarticle3.on('click', function() { 
				article3.appendTo(section3)
			});

	//}
	
});


















