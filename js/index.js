// Overall Presentation information
var properties = {
	title :
		"Counting real-time highstreet footfall from <br>"+
		"Wi-Fi probe requests",
	author: "Balamurugan Soundararaj",
	sections: [
		"Wi-Fi as a data source",
		"Privacy of Users",
		"Possible Solutions",
		"Example Applications" ],
	s1: {
		device_adoption_comment:
			'Almost everyone carries a'+
			'<br>Wifi enabled device',
		device_adoption_xaxis:"Market penetration (UK 2018)",
		device_adoption_yaxis:"Growth since last year",
		device_adoption_source:"delloite",
		device_adoption_data: { data: [
			{ y: +03, x: 88, z: 88, name: 'Smartphone'},
			{ y: +01, x: 79, z: 79, name: 'Laptop'},
			{ y: -07, x: 44, z: 44, name: 'Desktop'},
			{ y: +01, x: 39, z: 39, name: 'Large<br>tablet'},
			{ y: -11, x: 35, z: 35, name: 'Small<br>tablet'},
			{ y: -09, x: 27, z: 27, name: 'eReader'},
			{ y: -13, x: 18, z: 18, name: 'Gaming<br>device'},
			{ y: +17, x: 18, z: 18, name: 'Fitness<br>band'},
			{ y: -17, x: 15, z: 15, name: 'Mobile<br>phone' },
			{ y: +25, x: 08, z: 08, name: 'Smart<br>watch' },
			{ y: -21, x: 05, z: 05, name: 'VR' } ] } ,
		wifi_method_comment:
			'Almost everyone is broadcasting their'+
			'<br>prescence through Wi-Fi probe requests',
		wifi_method_data: { }
	}
}

$(document).ready(function(){

	var action = 0;
	
	// Set up key events for advance and goback ================================
	$(this).keyup(function(e){
		if(e.keyCode == 8 || e.keyCode == 37) {
			execute_action(action,action-1);
			if(action>0) { action-- }; }
		if(e.keyCode == 13 || e.keyCode == 39) {
			execute_action(action,action+1);
			action++; } });
	
	// Create all the objects ==================================================
	$('body').append('<div id="background"></div>');
	$('body').prepend(
		'<div id="title" style="display:none">'+properties.title+'<br>'+
		'<div id="author"><br>'+properties.author+'</div>'+'</div>');
	$('body').prepend(
		'<div id="sections" style="display:none"></div>');
	for(i in properties.sections) {
		$('#sections').append(
			'<div class="section" style="display:none;">'
			+properties.sections[i]+'</div>'); }
	$('body').prepend(
		'<div id="device_adoption" style="display:none"></div>');
	$('body').prepend(
		'<div id="device_adoption_con" style="display:none">'+
		properties.s1.device_adoption_comment+
		'</div>');
	particles_js('background');
	
	// Setting up the sequences ================================================
	function execute_action(a,b) {

		// Show the Title and Information --------------------------------------
		if(a == 0 && b == 1) { $("#title").fadeIn(300); }
		if(a == 1 && b == 0) { $('#title').fadeOut(300); }
		
		// Remove the Title, background and shows outline ----------------------
		if(a == 1 && b == 2) {
			$('#title').fadeOut(300, function() {
				$('#sections, .section').fadeIn(300); }); }
		if(a == 2 && b == 1) {
			$('#sections, .section').fadeOut(300, function(){
				$("#title").fadeIn(300); }); }
	
		// Remove ouline and show device adoption statistics -------------------
		if(a == 2 && b == 3) {
			$('#sections, .section').fadeOut(300);
			$('.particles-js-canvas-el').fadeOut(300, function(){
				$('.particles-js-canvas-el').remove();
				$('#device_adoption').fadeIn(300, function(){
					device_adoption("device_adoption",properties);
					$('#device_adoption').append(
						'<div id="source">source: '+
						properties.s1.device_adoption_source +
						'</div>'); }); }); }
		if(a == 3 && b == 2) {
			$('#device_adoption').fadeOut(300, function(){
				$('#device_adoption').empty();
				particles_js('background');	
				$('#sections, .section').fadeIn(300); }); }
	
		// Conclusion for device adoption statistics ---------------------------
		if(a == 3 && b == 4) { $('#device_adoption_con').fadeIn(300); }
		if(a == 4 && b == 3) { $('#device_adoption_con').fadeOut(300); }

	}

});
