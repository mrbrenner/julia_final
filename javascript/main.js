	console.log("ready");

	var statePhoto = false;
	var stateVideo = false;
	var stateZines = false;
	var stateDrawings = false;
	var hovPhoto = false;
	var hovVideo = false;
	var hovZines = false;
	var hovDrawings = false;
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
		stateDrawings=false;
		$("#photo").show();
		$("#video").hide();
		$("#zines").hide();
		$("#drawings").hide();
		$(".buttonPhoto").css("color", "red");
		} else {
		console.log("hidePhoto");
		stateVideo=false;
		stateZines=false;
		stateDrawings=false;
		$("#video").hide();
		$("#photo").hide();
		$("#zines").hide();
		$("#drawings").hide();
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
		stateDrawings=false
		$("#video").show();
		$("#photo").hide();
		$("#zines").hide();
		$("#drawings").hide();
		$(".buttonVideo").css("color", "red");
		} else {
		console.log("hideVideo");
		statePhoto=false;
		stateZines=false;
		stateDrawings=false;
		$("#video").hide();
		$("#photo").hide();
		$("#zines").hide();
		$("3drawings").hide();
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
		stateDrawings=false;
		$("#zines").show();
		$("#photo").hide();
		$("#video").hide();
		$("#drawings").hide();
		$(".buttonZines").css("color", "red");
		} else {
		console.log("hideZines");
		statePhoto=false;
		stateVideo=false;
		stateDrawings=false;
		$("#video").hide();
		$("#photo").hide();
		$("#zines").hide();
		$("#drawings").hide();
		}
		
	});

// drawings menu click

	$(".buttonDrawings").click( function(){
		
		stateDrawings = !stateDrawings;
		console.log("stateDrawings");


	if (stateDrawings==true) {
		console.log("showDrawings");
		statePhoto=false;
		stateVideo=false;
		stateZines=false;
		$("#drawings").show();
		$("#zines").hide();
		$("#photo").hide();
		$("#video").hide();
		$(".buttonDrawings").css("color", "red");
		} else {
		console.log("hideDrawings");
		statePhoto=false;
		stateVideo=false;
		stateZines=false;
		$("#drawings").hide();
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

// drawings hover button
	
	$(".buttonDrawings").hover(function(){

		hovDrawings = !hovDrawings
		console.log("hovDrawings");

	if (hovDrawings==true) {
		$(".buttonDrawings").css("color", "red")
	} else {
		$(".buttonDrawings").css("color", "white")
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

