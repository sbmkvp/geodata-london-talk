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
	sensor_range: [100,150,200,250,300,370,440],
	map_stats: "1511",
	map_scotland:'translate(-2996.6728896835943,-1410.7406786457543) scale(6.233316637283958)',
	map_london:'translate(-19538.07549323157,-18140.757895294242) scale(25.634236082867787)',
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
	$('body').prepend('<div id="section" style="display:none;"'+'</div>');
	$('body').prepend('<svg id="section_svg" style="display:none;"'+'</svg>');
	$('body').prepend('<div id="map_stats" style="display:none;">'+
		'<span id="loc_sum">'+properties.map_stats+'</span>'+
		'<span style="font-size:20px;font-weight:100"><br>Locations</span>'+
		'</div>');
	$('body').prepend('<svg id="map_svg" style="display:none;"'+'</svg>');
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
		if(a == 14 && b == 13) { 
			$('#wifi_method').fadeIn(300);
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
			$('#wifi_method_con').fadeOut(300); }

		// Summary and recap ---------------------------------------------------
		if(a == 14 && b == 15) {
			$('#mobile').fadeOut(300);
			$('#mobile_router_text').fadeOut(300);
			$('#wifi_method_con').fadeOut(300,function(){
				if($('.particles-js-canvas-el').length == 0) {
					particles_js('background'); }
				$('#research_question').fadeIn(300); });
		}
		if(a == 15 && b == 14) {
			$('.particles-js-canvas-el').remove();
			$('#research_question').fadeOut(300,function(){ 
				$('#mobile').fadeIn(300);
				$('#mobile_router_text').fadeIn(300);
				$('#wifi_method_con').fadeIn(300); });
		}

		// Introduction to Smart Street Sensors --------------------------------
		if(a == 15 && b == 16) {
			$('#research_question').fadeOut(300, function() {
				$(this).html('Smart Street Sensor Project')
					.fadeIn(300); });
		}
		if(a == 16 && b == 15) {
			$('#research_question').fadeOut(300, function() {
				$(this).html(properties.research_question)
					.fadeIn(300); });
		}

		// Introduction to Smart Street Sensors --------------------------------
		if(a == 16 && b == 17) {
			$('.particles-js-canvas-el').remove();
			$('#research_question').fadeOut(300,function(){
				$('#section').fadeIn(300);
				$('#section_svg').fadeIn(500); });
		}
		if(a == 17 && b == 16) {
			$('#section').fadeOut(300,function(){
				if($('.particles-js-canvas-el').length == 0) {
					particles_js('background'); }
				$('#research_question').fadeIn(300);
				$('#section, #section_svg').fadeOut(300); });
		}

		// Introduction to Smart Street Sensors --------------------------------
		if(a == 17 && b == 18) {
			d3.select('#section_svg')
				.selectAll()
				.data(properties.sensor_range)
				.enter()
				.append('circle')
				.attr('class','sensor_range')
				.attr('cx', 252)
				.attr('cy', 510)
				.attr('r',0)
				.style('opacity', 0.03 )
				.style('fill','#88F')
				.transition().duration(500)
				.attr('r',function(d){return(d)}); }
		if(a == 18 && b == 17) {
			d3.selectAll('.sensor_range')
				.transition().duration(500)
				.attr('r',0)
				.remove(); }

		// Introduction to Smart Street Sensors --------------------------------
		if(a == 18 && b == 19) {
			d3.select('#section_svg')
			.selectAll()
			.data([{x:402,y:482},{x:465,y:484},{x:570,y:470}])
			.enter().append('circle')
			.attr('class','footfall_range')
			.attr('cx',function(d){return(d.x)})
			.attr('cy',function(d){return(d.y)})
			.attr('r',0)
			.style('fill','#0F0')
			.transition().duration(300)
			.attr('r',15)
			.style('opacity',0.2);
		}
		if(a == 19 && b == 18) {
			d3.selectAll('.footfall_range')
				.transition().duration(300)
				.attr('r',0)
				.remove();
		}

		// Introduction to Smart Street Sensors --------------------------------
		if(a == 19 && b == 20) {
			d3.select('#section_svg')
			.selectAll()
			.data([{x:702,y:485},{x:790,y:460}])
			.enter().append('circle')
			.attr('class','noise_range')
			.attr('cx',function(d){return(d.x)})
			.attr('cy',function(d){return(d.y)})
			.attr('r',0)
			.style('opacity',0.25).style('fill','#E67E22')
			.transition().duration(300)
			.attr('r',20);
		}
		if(a == 20 && b == 19) {
			d3.selectAll('.noise_range')
				.transition().duration(300)
				.attr('r',0)
				.remove();
		}

		// Introduction to Smart Street Sensors --------------------------------
		if(a == 20 && b == 21) {
			d3.select('#section_svg')
			.selectAll()
			.data([{x:185,y:460},{x:145,y:470},{x:135,y:325},{x:225,y:320}])
			.enter().append('circle')
			.attr('class','dweller_range')
			.attr('cx',function(d){return(d.x)})
			.attr('cy',function(d){return(d.y)})
			.attr('r',0)
			.style('opacity',0.25).style('fill','#E67E22')
			.transition().duration(300)
			.attr('r',15);
		}
		if(a == 21 && b == 20) {
			d3.selectAll('.dweller_range')
				.transition().duration(300)
				.attr('r',0)
				.remove();
		}

		// Introduction to Smart Street Sensors --------------------------------
		if(a == 21 && b == 22) {
			d3.select('#section_svg')
			.selectAll()
			.data([{x:165,y:315,h:22,w:30},{x:112,y:380,h:78,w:132}])
			.enter().append('rect')
			.attr('class','installed_range')
			.attr('x',function(d){return(d.x)})
			.attr('y',function(d){return(d.y)})
			.attr('height',0)
			.attr('width',0)
			.attr('stroke',2)
			.attr('stroke-color','#fff')
			.style('opacity',0.20).style('fill','#E67E22')
			.transition().duration(300)
			.attr('height',function(d){return(d.h)})
			.attr('width',function(d){return(d.w)});
		}
		if(a == 22 && b == 21) {
			d3.selectAll('.installed_range')
				.transition().duration(300)
				.style('opacity',0)
				.remove();
		}

		// Introduction to Smart Street Sensors --------------------------------
		if(a == 22 && b == 23) {
			$('#section, #section_svg').fadeOut(300);
			$('#wifi_method').hide();
			var map_svg = d3.select("#map_svg").call(d3.behavior.zoom()
				.on("zoom", function () {
					map_svg.attr("transform", "translate(" + d3.event.translate + ")" + " scale(" + d3.event.scale + ")");
					// map_svg.selectAll('.place-label')
					// 	.style("font-size",7/d3.event.scale);
					// map_svg.selectAll('.subunit-label')
					// 	.style("font-size",10/d3.event.scale);
					update_location_count();

				})).append('g')
			var width = $('#map_svg').width();
			var height = $('#map_svg').height();
			projection = d3.geo.albers()
				.center([1, 54])
				.rotate([4.4, 0])
				.parallels([50, 60])
				.scale(5000)
				.translate([width / 2, height / 2]);
			path = d3.geo.path().projection(projection);
			d3.json("data/uk.json", function(error, uk) {
				if (error) { return console.error(error); }
				var subunits = topojson.feature(uk, uk.objects.subunits);
				map_svg.selectAll(".subunit")
					.data(subunits.features)
					.enter().append("path")
					.attr("d", path)
					.style('opacity',0.25)
					.style('fill','#666')
					.on('mouseover',
						function(d){ d3.select(this).style('fill','#888888') })
					.on('mouseout',
						function(d){ d3.select(this).style('fill', '#666666') })
				map_svg.append("path")
					.datum(topojson.mesh(uk, uk.objects.subunits, function(a, b) { return a !== b; }))
					.attr("d", path)
					.attr("class", "subunit-boundary");
				d3.csv("data/locations.csv", function(data) {
					$('#map_svg').fadeIn(200,function(){
					map_svg.selectAll(".catchment_marker")
						.data(data).enter().append("circle")
						.attr("cx", function(d) { return projection([d.lon,d.lat])[0]; })
						.attr("cy", function(d) { return projection([d.lon,d.lat])[1]; })
						.attr("r",0).style("opacity",1).style("fill", "#770000")
						.style("pointer-events","none")
						.transition().duration(300).attr('r',2)
					map_svg.selectAll(".inner_marker")
						.data(data).enter().append("circle")
						.attr("cx", function(d) { return projection([d.lon,d.lat])[0]; })
						.attr("cy", function(d) { return projection([d.lon,d.lat])[1]; })
						.attr("r",0).style("opacity",1).style("fill", "#990000")
						.attr("class","inner_marker")
						.style("pointer-events","none")
						.transition().duration(300).attr('r',1.5)
					map_svg.selectAll(".middle_marker")
						.data(data).enter().append("circle")
						.attr("cx", function(d) { return projection([d.lon,d.lat])[0]; })
						.attr("cy", function(d) { return projection([d.lon,d.lat])[1]; })
						.attr("r", 0).style("opacity", 1).style("fill", "#bb0000")
						.style("pointer-events","none")
						.transition().duration(300).attr('r',0.8)
					map_svg.selectAll(".outer_marker")
						.data(data).enter().append("circle")
						.attr("cx", function(d) { return projection([d.lon,d.lat])[0]; })
						.attr("cy", function(d) { return projection([d.lon,d.lat])[1]; })
						.attr("r", 0).style("opacity", 1).style("fill", "#ff1111")
						.style("pointer-events","none")
						.transition().duration(300).attr('r',0.05)
					map_svg.selectAll(".place-label")
						.data(topojson.feature(uk, uk.objects.places).features)
						.enter().append("text")
						.attr("class", "place-label")
						.attr("transform", function(d) { return "translate(" + projection(d.geometry.coordinates) + ")"; })
						.attr("dy", ".01em")
						.style("pointer-events","none")
						.text(function(d) { return d.properties.name; });
					map_svg.selectAll(".place-label")
						.attr("x", function(d) { return d.geometry.coordinates[0] > -1 ? 6 : -6; })
						.style("pointer-events","none")
						.style("text-anchor", function(d) { return d.geometry.coordinates[0] > -1 ? "start" : "end"; });
					map_svg.selectAll(".subunit-label")
						.data(topojson.feature(uk, uk.objects.subunits).features)
						.enter().append("text")
						.attr("class", function(d) { return "subunit-label " + d.id; })
						.attr("transform", function(d) { return "translate(" + path.centroid(d) + ")"; })
						.attr("dy", ".35em")
						.style("pointer-events","none")
						.text(function(d) { return d.properties.name; }); 
					});
				});
			});
			$('#map_stats').show();
		}
		if(a == 23 && b == 22) {
			$('#map_svg').fadeOut(300,function(){
				$(this).empty();
				$('#section, #section_svg').fadeIn(300);
				$('#wifi_method').show();
			});
			$('#map_stats').fadeOut(300);
		}

		// 
		if(a == 23 && b == 24) {
			d3.select("#map_svg > g")
				.transition().duration(1000)
				.attr('transform',properties.map_london)
				.each('end',function(d){
					update_location_count()
				});
		}
		if(a == 24 && b == 23) {
			d3.select("#map_svg > g")
				.transition().duration(1000)
				.attr('transform','')
				.each('end',function(d){
					update_location_count()
				});
		}

		// 
		if(a == 24 && b == 25) {
			d3.select("#map_svg > g")
				.transition().duration(1000)
				.attr('transform',properties.map_scotland)
				.each('end',function(d){
					update_location_count()
				});
		}
		if(a == 25 && b == 24) {
			d3.select("#map_svg > g")
				.transition().duration(1000)
				.attr('transform',properties.map_london)
				.each('end',function(d){
					update_location_count()
				});
		}

		// 
		if(a == 25 && b == 26) {
			d3.select("#map_svg > g")
				.transition().duration(1000)
				.attr('transform','')
				.each('end',function(d){
					update_location_count()
				});
		}
		if(a == 26 && b == 25) {
			d3.select("#map_svg > g")
				.transition().duration(1000)
				.attr('transform',properties.map_scotland)
				.each('end',function(d){
					update_location_count()
				});
		}
	}
});


$.fn.isInViewport = function() {
	  var tr = d3.transform(d3.select('#map_svg > g').attr('transform')).translate
	  var sc = d3.transform(d3.select('#map_svg > g').attr('transform')).scale
	  var h = $('#map_svg').height()/sc[0]
	  var w = $('#map_svg').width()/sc[1]
	  var x = $(this).attr('cx');
	  var y = $(this).attr('cy');
	  var l = -(tr[0]/sc[0])
	  var r = l+w
	  var t = -(tr[1]/sc[1]);
	  var b = t+h;
	  return  x > l && x < r && y > t && y < b;
};

function update_location_count () {
	$.when($('.inner_marker').each(function(){
		if($(this).isInViewport()){
			$(this).attr("vis","visible")
		}else{
			$(this).attr("vis","hidden")
		}
	})).done(function(){
		$('#loc_sum').text(parseInt($('.inner_marker[vis="visible"]').length));
	});
}
