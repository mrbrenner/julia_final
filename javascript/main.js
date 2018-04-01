	console.log("ready");

	var statePhoto = false;
	var stateVideo = false;
	var stateZines = false;
	var hovPhoto = false;
	var hovVideo = false;
	var hovZines = false;
	var stateMenu = false;

// dropdown menu on click

// photo menu click
	$(".buttonPhoto").click( function(){
		
		statePhoto = !statePhoto;
		console.log("statePhoto");


	if (statePhoto==true) {
		console.log("showPhoto");
		stateVideo=false;
		stateZines=false;
		$("#photo").show();
		$("#video").hide();
		$("#zines").hide();
		$(".buttonPhoto").css("color", "red");
		} else {
		console.log("hidePhoto");
		stateVideo=false;
		stateZines=false;
		$("#video").hide();
		$("#photo").hide();
		$("#zines").hide();
		}

		
	});

// vid menu click

	$(".buttonVideo").click( function(){
		
		stateVideo = !stateVideo;
		console.log("stateVideo");


	if (stateVideo==true) {
		console.log("showVideo");
		statePhoto=false;
		stateZines=false;
		$("#video").show();
		$("#photo").hide();
		$("#zines").hide();
		$(".buttonVideo").css("color", "red");
		} else {
		console.log("hideVideo");
		statePhoto=false;
		stateZines=false;
		$("#video").hide();
		$("#photo").hide();
		$("#zines").hide();
		}
		
	});

// zines menu click
	
	$(".buttonZines").click( function(){
		
		stateZines = !stateZines;
		console.log("stateZines");


	if (stateZines==true) {
		console.log("showZines");
		statePhoto=false;
		stateVideo=false;
		$("#zines").show();
		$("#photo").hide();
		$("#video").hide();
		$(".buttonZines").css("color", "red");
		} else {
		console.log("hideZines");
		statePhoto=false;
		stateVideo=false;
		$("#video").hide();
		$("#photo").hide();
		$("#zines").hide();
		}
		
	});



// photo hover button

	$(".buttonPhoto").hover(function(){

		hovPhoto = !hovPhoto
		console.log("hovPhoto");

	if (hovPhoto==true) {
		$(".buttonPhoto").css("color", "red");
	} else {
		$(".buttonPhoto").css("color", "white");
	}

	});

// video hover button

	$(".buttonVideo").hover(function(){

		hovVideo = !hovVideo
		console.log("hovVideo");

	if (hovVideo==true) {
		$(".buttonVideo").css("color", "red");
	} else {
		$(".buttonVideo").css("color", "white");
	}

	});

// zines hover button
	
	$(".buttonZines").hover(function(){

		hovZines = !hovZines
		console.log("hovVideo");

	if (hovZines==true) {
		$(".buttonZines").css("color", "red")
	} else {
		$(".buttonZines").css("color", "white")
	}
	
	})


// mobile menu click


	$(".menu-icon").click( function(){

		stateMenu = !stateMenu
		console.log("stateMenu");

	if (stateMenu ==true) {
		console.log("showMenu");
		$(".menu").css("display", "block")
	} else {
		console.log("hideMenu")
		$(".menu").css("display", "none")
	}
	
	});


// mobile header dissapear (???????)

// Hide Header on on scroll down

// var didScroll;
// var ScrollTop = 0;
// var navbarHeight = $('header').outerHeight();

// $(window).scroll(function(event){
//     didScroll = true;
// });

// setInterval(function() {
//     if (didScroll) {
//         hasScrolled();
//         didScroll = false;
//     }
// }, 25);

// function hasScrolled() {
//     var st = $(this).scrollTop();

//     // If they scrolled down and are past the navbar, add class .nav-up.
//     // This is necessary so you never see what is "behind" the navbar.
//     if (st > ScrollTop){
//        $('header').removeClass('nav-down').addClass('nav-up');
//        $('#frontPic img').css( 'margin-top', '5%');

//     } else {
//       $('header').removeClass('nav-up').addClass('nav-down');
//       $('#frontPic img').css( 'margin-top', '23%');
//     }
 	
//     scrollTop = scrollTop
// }
