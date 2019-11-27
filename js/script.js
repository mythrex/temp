$(document).ready(function() {
	$('.tooltipped').tooltip();

	$.getJSON('../output.json', function(data) {
		$('#img1').attr('src', data['img1']['path']);
		$('#img2').attr('src', data['img2']['path']);
		$('#similarity1').text(data['similarity_idx1']);
		$('#similarity2').text(data['similarity_idx2']);
		$('#similarity3').text(data['similarity_idx3']);

		var ctx = document.getElementById('chart1').getContext('2d');
		data1 = [
			data['img1']['0']['%'],
			data['img1']['1']['%'],
			data['img1']['2']['%'],
			data['img1']['3']['%'],
			data['img1']['4']['%']
		];
		bg1 = [];
		for (i = 0; i < 5; i++) {
			bg1.push(
				`rgba(${data['img1'][i]['color'][0]}, ${data['img1'][i]['color'][1]}, ${data['img1'][i]['color'][2]}, 0.8)`
			);
		}
		labels = bg1;
		border1 = [];
		for (i = 0; i < 5; i++) {
			border1.push(
				`rgba(${data['img1'][i]['color'][0]}, ${data['img1'][i]['color'][1]}, ${data['img1'][i]['color'][2]}, 1)`
			);
		}
		var chart1 = new Chart(ctx, {
			type: 'pie',
			data: {
				labels: labels,
				datasets: [
					{
						label: '# of Votes',
						data: data1,
						backgroundColor: bg1,
						borderColor: border1,
						borderWidth: 1
					}
				]
			},
			options: {
				scales: {
					yAxes: [
						{
							ticks: {
								beginAtZero: true
							}
						}
					]
				}
			}
		});

		var ctx2 = document.getElementById('chart2').getContext('2d');
		data2 = [
			data['img2']['0']['%'],
			data['img2']['1']['%'],
			data['img2']['2']['%'],
			data['img2']['3']['%'],
			data['img2']['4']['%']
		];
		bg2 = [];
		for (i = 0; i < 5; i++) {
			bg2.push(
				`rgba(${data['img2'][i]['color'][0]}, ${data['img2'][i]['color'][1]}, ${data['img2'][i]['color'][2]}, 0.8)`
			);
		}
		labels = bg2;
		border2 = [];
		for (i = 0; i < 5; i++) {
			border2.push(
				`rgba(${data['img2'][i]['color'][0]}, ${data['img2'][i]['color'][1]}, ${data['img2'][i]['color'][2]}, 1)`
			);
		}
		var chart2 = new Chart(ctx2, {
			type: 'pie',
			data: {
				labels: labels,
				datasets: [
					{
						label: '# of Votes',
						data: data2,
						backgroundColor: bg2,
						borderColor: border2,
						borderWidth: 1
					}
				]
			},
			options: {
				scales: {
					yAxes: [
						{
							ticks: {
								beginAtZero: true
							}
						}
					]
				}
			}
		});

		$('#mjc1-1').attr({
			style: `background: ${border1[4]}`,
			'data-tooltip': border1[4]
		});
		$('#mjc1-2').attr({
			style: `background: ${border2[4]}`,
			'data-tooltip': border2[4]
		});

		$('#mjc2-1').attr({
			style: `background: ${border1[3]}`,
			'data-tooltip': border1[3]
		});
		$('#mjc2-2').attr({
			style: `background: ${border2[3]}`,
			'data-tooltip': border2[3]
		});

		$('#mjc3-1').attr({
			style: `background: ${border1[2]}`,
			'data-tooltip': border1[2]
		});
		$('#mjc3-2').attr({
			style: `background: ${border2[2]}`,
			'data-tooltip': border2[2]
		});
	});
});
