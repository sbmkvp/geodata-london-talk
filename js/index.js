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
		'Almost everyone is broadcasting their presence'+
		'<br>all the time through Wi-Fi probe requests',
	wifi_method_data: {
		first : 'I am Bala\'s iPhone.<br>Is there any one I can connect to?',
		second : 'I am router from eudrom.<br>You can connect to this network!',
		third : 'Cool! Here is my<br>User id and password...',
		fourth : 'Got it. Looks alright!<br>Lets switch to secret mode...',
		fifth : 'gBfzkjFHo4uHlbfON8hU6Lva<br>5HfPe/sG5hR1VPH/KCgOBMx',
		sixth: 'UjuTZZd9V5fQgqR26jeNhlFQ<br>iy24VaN3edu8EzwiWk82EuvJ', },
	research_question: "Can we measure footfall in retail areas"+
		"<br>just by capturing these probe requests?",
}

$(document).ready(function(){

	action = 14;
	
	// Set up key events for advance and goback ================================
	$(this).keyup(function(e){
		if(e.keyCode == 8 || e.keyCode == 37) {
			execute_action(action,action-1);
			if(action>0) { action-- }; }
		if(e.keyCode == 13 || e.keyCode == 39) {
			execute_action(action,action+1);
			action++; } });
	$(this).dblclick(function(e){
		execute_action(action,action+1);
		action++; });

	// Create all the objects ==================================================
	$('body').append('<div id="background"></div>');
	$('body').prepend(
		'<div id="title" style="display:none">'+properties.title+'<br>'+
		'<div id="author"><br>'+properties.author+'</div>'+
		'<div id="logos"></div>'+
		'</div>');
	$('body').prepend('<div id="sections" style="display:none"></div>');
	for(i in properties.sections) {
		$('#sections').append('<div class="section" style="display:none;">'
			+properties.sections[i]+'</div>'); }
	$('body').prepend('<div id="device_adoption" style="display:none"></div>');
	$('body').prepend('<div id="device_adoption_con" style="display:none">'+
		properties.device_adoption_comment+'</div>');
	$('body').append('<div id="wifi_method">'+
		'<div id="mobile"></div>'+
		'<div id="router"></div>'+
		'<div id="mobile_router_text"></div>'+
		'</div>');
	$('body').prepend('<div id="wifi_method_con" style="display:none">'+
		properties.wifi_method_comment+
		'</div>');
	$('body').prepend('<div id="research_question"'+
		'style="display:none; line-height:1.6;">'+
		properties.research_question+'</div>');
	particles_js('background');
	
	// Setting up the sequences ================================================
	function execute_action(a,b) {
		console.log(a+'..'+b);
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
						properties.device_adoption_source +
						'</div>'); }); }); }
		if(a == 3 && b == 2) {
			$('#device_adoption').fadeOut(300, function(){
				$('#device_adoption').empty();
				particles_js('background');	
				$('#sections, .section').fadeIn(300); }); }
	
		// Comment for device adoption statistics ------------------------------
		if(a == 3 && b == 4) { $('#device_adoption_con').fadeIn(300); }
		if(a == 4 && b == 3) { $('#device_adoption_con').fadeOut(300); }
		
		// Remove the statistics and add Wi-Fi explaination  -------------------
		if(a == 4 && b == 5) {
			$('#device_adoption_con').fadeOut(300);
			$('#device_adoption').fadeOut(300, function(){
				$('#device_adoption').empty();
				$('#wifi_method').fadeIn(300);
			}); }
		if(a == 5 && b == 4) {
			$('#wifi_method').fadeOut(300);
			$('#device_adoption').fadeIn(300, function(){
				device_adoption("device_adoption",properties);
				$('#device_adoption').append(
					'<div id="source">source: '+
					properties.device_adoption_source +
					'</div>');
				$('#device_adoption_con').fadeIn(300); }); }

		// Device sending probe request ----------------------------------------
		if(a == 5 && b == 6) { 
			$('#mobile_router_text')
				.html(properties.wifi_method_data.first)
				.css({"left":"40%","text-align":"left"})
				.fadeIn(300) 
				.css({"background-position": "-100% 0"})
		}
		if(a == 6 && b == 5) { 
			$('#mobile_router_text')
				.fadeOut(300,function(){ $(this).text(''); })
				.css({"background-position": "0 -100%"}); 
		}

		// Device receiving probe response -------------------------------------
		if(a == 6 && b == 7) { 
			$('#mobile_router_text')
				.fadeOut(300, function() { $(this).text(''); })
				.css({"background-position": "0 -100%"})
				.promise()
				.done(function(){
					$(this).html(properties.wifi_method_data.second)
					.css({"left":"55%","text-align":"right"})
					.fadeIn(300)
					.css({"background-position": "+100% 0"}); 
				});
		}
		if(a == 7 && b == 6) {
			$('#mobile_router_text')
				.fadeOut(300,function(){ $(this).text(''); })
				.css({"background-position": "0 -100%"})
				.promise()
				.done(function(){
					$(this).html(properties.wifi_method_data.first)
						.css({"left":"40%","text-align":"left"})
						.fadeIn(300) 
						.css({"background-position": "-100% 0"})
				});
		}
	
		// Device receiving probe response -------------------------------------
		if(a == 7 && b == 8) { 
			$('#mobile_router_text')
				.fadeOut(300, function() { $(this).text(''); })
				.css({"background-position": "0 +100%"})
				.promise()
				.done(function(){
					$(this).html(properties.wifi_method_data.third)
					.css({"left":"40%","text-align":"left"})
					.fadeIn(300)
					.css({"background-position": "-100% 0"}); 
				});
		}
		if(a == 8 && b == 7) {
			$('#mobile_router_text')
				.fadeOut(300,function(){ $(this).text(''); })
				.css({"background-position": "0 -100%"})
				.promise()
				.done(function(){
					$(this).html(properties.wifi_method_data.second)
					.css({"left":"55%","text-align":"right"})
					.fadeIn(300)
					.css({"background-position": "+100% 0"}); 
				});
		}

		// Device receiving probe response -------------------------------------
		if(a == 8 && b == 9) { 
			$('#mobile_router_text')
				.fadeOut(300, function() { $(this).text(''); })
				.css({"background-position": "0 -100%"})
				.promise()
				.done(function(){
					$(this).html(properties.wifi_method_data.fourth)
						.css({"left":"55%","text-align":"right"})
						.fadeIn(300)
						.css({"background-position": "+100% 0"}); 
				});
		}
		if(a == 9 && b == 8) {
			$('#mobile_router_text')
				.fadeOut(300,function(){ $(this).text(''); })
				.css({"background-position": "0 -100%"})
				.promise()
				.done(function(){
					$(this).html(properties.wifi_method_data.third)
					.css({"left":"40%","text-align":"left"})
					.fadeIn(300)
					.css({"background-position": "-100% 0"}); 
				});
		}
	
		// Device receiving probe response -------------------------------------
		if(a == 9 && b == 10) { 
			$('#mobile_router_text')
				.fadeOut(300, function() { $(this).text(''); })
				.css({"background-position": "0 +100%"})
				.promise()
				.done(function(){
					$(this).html(properties.wifi_method_data.fifth)
						.css({"left":"40%","text-align":"left"})
						.fadeIn(300)
						.css({"background-position": "-100% 0"}); 
				});
		}
		if(a == 10 && b == 9) {
			$('#mobile_router_text')
				.fadeOut(300,function(){ $(this).text(''); })
				.css({"background-position": "0 -100%"})
				.promise()
				.done(function(){
					$(this).html(properties.wifi_method_data.fourth)
						.css({"left":"55%","text-align":"right"})
						.fadeIn(300)
						.css({"background-position": "+100% 0"}); 
				});
		}

		// Device receiving probe response -------------------------------------
		if(a == 10 && b == 11) { 
			$('#mobile_router_text')
				.fadeOut(300, function() { $(this).text(''); })
				.css({"background-position": "0 -100%"})
				.promise()
				.done(function(){
					$(this).html(properties.wifi_method_data.sixth)
						.css({"left":"55%","text-align":"right"})
						.fadeIn(300)
						.css({"background-position": "+100% 0"}); 
				});
		}
		if(a == 11 && b == 10) {
			$('#mobile_router_text')
				.fadeOut(300,function(){ $(this).text(''); })
				.css({"background-position": "0 -100%"})
				.promise()
				.done(function(){
					$(this).html(properties.wifi_method_data.fifth)
						.css({"left":"40%","text-align":"left"})
						.fadeIn(300)
						.css({"background-position": "-100% 0"}); 
				});
		}

		// Device receiving probe response -------------------------------------
		if(a == 11 && b == 12) { 
			$('#mobile_router_text')
				.fadeOut(300, function() { $(this).text(''); })
				.css({"background-position": "0 +100%"})
				.promise()
				.done(function(){
					$(this).html(properties.wifi_method_data.first)
						.css({"left":"40%","text-align":"left"})
						.css({"background-image":"linear-gradient(to right, #ffffff00 50%, #ff000022 50%)"})
						.fadeIn(300)
						.css({"background-position": "-100% 0"}); 
				});
		}
		if(a == 12 && b == 11) {
			$('#mobile_router_text')
				.fadeOut(300,function(){ $(this).text(''); })
				.css({"background-position": "0 -100%"})
				.promise()
				.done(function(){
					$(this).css({"background-image":"linear-gradient(to right, #ffffff00 50%, #ffffff22 50%)"})
						.html(properties.wifi_method_data.sixth)
						.css({"left":"55%","text-align":"right"})
						.fadeIn(300)
						.css({"background-position": "+100% 0"}); 
				});
		}

		// Device receiving probe response -------------------------------------
		if(a == 12 && b == 13) {
			$('#router').fadeOut(300);
			setTimeout(function(){
				$('#mobile_router_text')
					.fadeOut(300) 
					.css({"background-position": "0 -100%"})
					.promise()
					.done(function(){
						$(this)
							.fadeIn(300)
							.css({"background-position": "-100% 0"});
					});
			},600);
			blink = setInterval(function(){
				$('#mobile_router_text')
					.fadeOut(300) 
					.css({"background-position": "0 -100%"})
					.promise()
					.done(function(){
						$(this)
							.fadeIn(300)
							.css({"background-position": "-100% 0"}); });
			},2000);
		}
		if(a == 13 && b == 12) {
			$('#router').fadeIn(300);
			if(typeof blink != "undefined") { clearInterval(blink); }
		}

		// Wi-Fi method test ---------------------------------------------------
		if(a == 13 && b == 14) {
			$('#wifi_method_con').fadeIn(300);
			if(typeof blink != "undefined") { clearInterval(blink); }
		}
		if(a == 14 && b == 13) { $('#wifi_method_con').fadeOut(300); }

		// Summary and recap ---------------------------------------------------
		if(a == 14 && b == 15) {
			$('.particles-js-canvas-el').remove();
			$('#mobile').fadeOut(300);
			$('#mobile_router_text').fadeOut(300);
			$('#wifi_method_con').fadeOut(300,function(){
				$('#research_question').fadeIn(300); });
		}
		if(a == 15 && b == 14) {
			$('#research_question').fadeOut(300,function(){ 
				$('#mobile').fadeIn(300);
				$('#mobile_router_text').fadeIn(300);
				$('#wifi_method_con').fadeIn(300); });
		}
	}
});
