$(document).ready(function(){
	$("#what-is-byld").waypoint(function(){
		$('#what-is-byld').addClass('animated fadeIn');
	});
	$("#htjCont").waypoint(function(){
		$('#htj').addClass('animated fadeIn');
	});
	$("#competitions").waypoint(function(){
		$('#comp').addClass('animated fadeIn');
	});

	$("#events").waypoint(function(){
		$('#events li').addClass('animated fadeIn');
	});
	$("#projects").waypoint(function(){
		$('#projects ul').addClass('animated fadeIn');
	});
	
});
