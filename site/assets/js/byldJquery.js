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

  // Bind to the click of all links with a #hash in the href. Modified from https://gist.github.com/flesler/3f3e1166690108abf747
  $('a[href^="#"]').click(function(e) {
    // Prevent the jump and the #hash from appearing on the address bar
    // Note: hash will automatically update after we scroll to the element because we're updating the hash on scrollspy events
    e.preventDefault();

    var href = $(e.target).attr("href");

    var targetElement = $(href);

    var avgScrollSpeed = 1.5;

    var distance = Math.abs(window.scrollY - targetElement.offset().top);

    var duration = Math.min(distance/avgScrollSpeed, 1000);

    // Scroll the window, stop any previous animation, stop on user manual scroll
    // Check https://github.com/flesler/jquery.scrollTo for more customizability
    $(window).stop(true).scrollTo(this.hash, {
      duration: duration, 
      interrupt: true
    });

  });

  // When scrollspy updates active navigation element, also update url hash
	$('[data-spy="scroll"]').on("activate.bs.scrollspy", function (e) {
    var href = $(e.target).children("a").attr("href");
    // replace url hash fragment without affecting scrolling
    history && history.replaceState(null, null, href);
  })

});
