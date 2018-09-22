// Overall Presentation information
var properties = {
	title : "Counting real-time highstreet footfall from <br> Wi-Fi probe requests",
	author: "Balamurugan Soundararaj",
	sections: ["Wi-Fi as a data source",
		"Privacy of Users",
		"Possible Solutions",
		"Example Applications"]
}

$(document).ready(function(){

	var action = 0;
	// ========================================================================
	// Set up key events for advance and goback
	// ========================================================================
	$(this).keyup(function(e){
		if(e.keyCode == 8) { execute_action(action,action-1); if(action>0) { action-- }; }
		if(e.keyCode == 13) { execute_action(action,action+1); action++; }
	});
	
	// ========================================================================
	// Create all the objects
	// ========================================================================
	$('body').append('<div id="background"></div>');
	$('body').prepend('<div id="title" style="display:none">'+
		properties.title+'<br>'+
		'<div id="author"><br>'+properties.author+'</div>'+
		'</div>');
	$('body').prepend('<div id="sections" style="display:none"></div>');
	for(i in properties.sections) {
		$('#sections').append('<div class="section"'+
			'style="display:none;">'
			+properties.sections[i]+
			'</div>');
	}
	$('body').prepend('<div id="device_adoption" style="display:none"></div>');
	particles_js('background');

	function execute_action(a,b) {
		console.log("transition from "+a+" to "+b);
		// =====================================================================
		// 0. Show the Title and Information
		// =====================================================================
		if(a == 0 && b == 1) {
			$("#title").fadeIn(300);
		}
		if(a == 1 && b == 0) {
			$('#title').fadeOut(300);
		}
		
		// =====================================================================
		// 1. Remove the Title, background and shows outline
		// =====================================================================
		if(a == 1 && b == 2) {
			$('#title').fadeOut(300,function(){
				$('#sections, .section').fadeIn(300);
			});
		}
		if(a == 2 && b == 1) {
			$('#sections, .section').fadeOut(300,function(){
				$("#title").fadeIn(300);
			});
		}
	
		// =====================================================================
		// 2. Remove ouline and show Smartphone Statistics
		// =====================================================================
		if(a == 2 && b == 3) {
			$('#sections, .section').fadeOut(300);
			$('.particles-js-canvas-el').fadeOut(300,function(){
				$('.particles-js-canvas-el').remove();
				$('#device_adoption').fadeIn(300,function(){
					create_chart("device_adoption");
					$('#device_adoption').append('<div id="source">source: delloite</div>');
				});
			});
		}
		if(a == 3 && b == 2) {
			$('#device_adoption').fadeOut(300,function(){
				$('#device_adoption').empty();
				particles_js('background');	
				$('#sections, .section').fadeIn(300);
			});
		}
	}

	function create_chart(id) {
		 var chart = Highcharts.chart(id, {
			chart: { type: 'bubble', plotBorderWidth: 0, zoomType: 'xy', backgroundColor:'#00000000',
				style:{fontFamily:'Roboto'}
			},
			legend: { enabled: false }, tooltip: { enabled: false }, title: { text: '' }, subtitle: { text: '' },
			xAxis: { startOnTick: false, endOnTick: false, gridLineWidth: 0,
				title: { text: 'Market penetration 2018',style:{color:"#FFFFFF99"},margin:20 },
				labels: { format: '{value}%',style:{color:"#FFFFFF99"}},
				lineColor:"#FFFFFF99",tickLength:5 },
			yAxis: {
				startOnTick: false, endOnTick: false, gridLineWidth: 0,
				title: { text: 'Growth since 2017' ,style:{color:"#FFFFFF99"},margin:20},
				labels: { format: '{value}%' ,style:{color:"#FFFFFF99"}}, maxPadding: 0.2,
				lineColor:"#FFFFFF99" },
			plotOptions: { 
				series: {
					dataLabels: { enabled: true, format: '{point.name}',align : 'center',
						style:{ color:"#FFFFFF", fontSize: 12, fontWeight: 300,textOutline:'0px contrast'} },
					animation:{duration:500} },
				bubble:{color: '#FFFFFF22',marker: {fillColor: '#FFFFFF22',states:{ hover:{ fillColor:"#FF0000",halo:{size:0}}}}},
			},
			series: [{ data: [
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
				{ y: -21, x: 05, z: 05, name: 'VR' } ]
			}]
		});
		return(chart)
	}
});
