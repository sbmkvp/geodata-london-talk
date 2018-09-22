var properties = {
	title : "Counting real-time highstreet footfall from"+
			"<br> Wi-Fi probe requests"
}
$(document).ready(function(){

	var action = 0;
	// ========================================================================
	// Set up key events for advance and goback
	// ========================================================================
	$(this).keyup(function(e){
		if(e.keyCode == 8) {
			execute_action(action,action-1);
			if(action>0) { action-- };
		}
		if(e.keyCode == 13) {
			execute_action(action,action+1);
			action++;
		}
	});
	
	// ========================================================================
	// Start the background
	// ========================================================================
	$('body').append('<div id="background"></div>');
	particles_js('background');

	function execute_action(a,b) {
		console.log("transition from "+a+" to "+b);
		// =====================================================================
		// 0. Show the Title and Information
		// =====================================================================
		if(a == 0 && b == 1) {
			$('body').prepend('<div id="title">'+
				properties.title+
				'</div>');
			$("#title").fadeIn(1000);
		}
		if(a == 1 && b == 0) {
			$('#title').fadeOut(1000,function(){
				$('#title').remove();
			});
		}
		
		// =====================================================================
		// 1. Remove the Title and Information
		// =====================================================================
		if(a == 1 && b == 2) {
			$('#title').fadeOut(1000,function(){ $('#title').remove(); });
			$('.particles-js-canvas-el').fadeOut(1000,function(){
				$('.particles-js-canvas-el').remove();
			});
		}
		if(a == 2 && b == 1) {
			$('body').prepend('<div id="title">'+
				properties.title+
				'</div>');
			$("#title").fadeIn(1000);
			particles_js('background');
		}
	
		// =====================================================================
		// 2. Remove the Background and Show the Realtime Chart
		// =====================================================================
		if(a == 2 && b == 3) {

		}
		if(a == 3 && b == 2) {
			
		}
	}
});
