function device_adoption(div_name,data) {
	 Highcharts.chart(div_name, {
		chart: {
			type: 'bubble',
			plotBorderWidth: 0,
			zoomType: 'xy',
			backgroundColor:'#00000000',
			style:{ fontFamily:'Roboto' } },
		legend: { enabled: false },
		tooltip: { enabled: false },
		title: { text: '' },
		subtitle: { text: '' },
		xAxis: {
			startOnTick: false,
			endOnTick: false,
			gridLineWidth: 0,
			lineColor:"#FFFFFF99",
			tickLength:5,
			title: {
				text: data.s1.device_adoption_xaxis,
				margin: 20,
				style: { color: "#FFFFFF99" } },
			labels: {
				format: '{value}%',
				style: { color: "#FFFFFF99" } } },
		yAxis: {
			startOnTick: false,
			endOnTick: false,
			gridLineWidth: 0,
			lineColor:"#FFFFFF99",
			maxPadding: 0.2,
			title: {
				text: data.s1.device_adoption_yaxis,
				margin:20,
				style: { color: "#FFFFFF99" } },
			labels: {
				format: '{value}%',
				style: { color: "#FFFFFF99" } } },
		plotOptions: { 
			series: {
				animation:{ duration: 500 },
				dataLabels: {
					enabled: true,
					format: '{point.name}',
					align: 'center',
					style: { 
						color:"#FFFFFF",
						fontSize: 12,
						fontWeight: 300,
						textOutline:'0px contrast' } } },
			bubble: {
				color: '#FFFFFF22',
				marker: {
					fillColor: '#FFFFFF22',
					states: { 
						hover: {
							fillColor: "#FF0000",
							halo: { size: 0 } } } } } },
		series: [ data.s1.device_adoption_data ] });
}