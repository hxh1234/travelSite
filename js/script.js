function refreshImagBackground() {
$('.image_bck').each(function(){
		var image = $(this).attr('data-image');
		var gradient = $(this).attr('data-gradient');
		var color = $(this).attr('data-color');
		var blend = $(this).attr('data-blend');
		var opacity = $(this).attr('data-opacity');
		var position = $(this).attr('data-position');
		if (image){
			$(this).css('background-image', 'url('+image+')');
		}
		if (gradient){
			$(this).css('background-image', gradient);
		}
		if (color){
			$(this).css('background-color', color);
		}
		if (blend){
			$(this).css('background-blend-mode', blend);
		}
		if (position){
			$(this).css('background-position', position);
		}
		if (opacity){
			$(this).css('opacity', opacity);
		}
	});
}

(function($) {

	"use strict"; // Start of use strict

	/* Titles Color */
	$('.intro_text, .simple_stat').each(function(){
		var color = $(this).attr('data-color');
		if (color){
			$(this).find('b').css('color', color);
		}
	});

	/* Section Background */
	refreshImagBackground()

	/* Bootstrap */
	$('[data-toggle="tooltip"]').tooltip();
	$('[data-toggle="popover"]').popover();

	/* Over */
	$('.over, .head_bck').each(function(){
		var color = $(this).attr('data-color');
		var image = $(this).attr('data-image');
		var opacity = $(this).attr('data-opacity');
		var blend = $(this).attr('data-blend');
		if (color){
			$(this).css('background-color', color);
		}
		if (image){
			$(this).css('background-image', 'url('+image+')');
		}
		if (opacity){
			$(this).css('opacity', opacity);
		}
		if (blend){
			$(this).css('mix-blend-mode', blend);
		}
	});

	if ($(window).width() > 992) {
		$('.row').each(function(){
			setEqualHeight($(this).find('.bordered_block:not(".col-md-12")'));
			setEqualHeight($(this).find('.block'));
			$(this).find('#maps').height( ($(this).find('.bordered_block:not(".col-md-12")').height()));
		});
	}

	$('.row').each(function(){
		setEqualHeight($(this).find('.bordered_block:not(".col-md-12")'));
		setEqualHeight($(this).find('.block'));
		$(this).find('#maps').height( ($(this).find('.bordered_block:not(".col-md-12")').height()));
	});


	$(window).resize(function() {

	    if ($(window).width() > 992) {
			$('.row').each(function(){
				setEqualHeight($(this).find('.bordered_block:not(".col-md-12")'));
				setEqualHeight($(this).find('.block'));
				$(this).find('#maps').height( ($(this).find('.bordered_block:not(".col-md-12")').height()));

			});

		}

		$('.row').each(function(){
			setEqualHeight($(this).find('.bordered_block:not(".col-md-12")'));
			setEqualHeight($(this).find('.block'));
			$(this).find('#maps').height( ($(this).find('.bordered_block:not(".col-md-12")').height()));
		});
		$('.mid_wrapper').each(function(){
			setEqualHeight($(this).find('.owl-item'));
		});

		if($(".intro_wrapper").length) {
			$('.intro_wrapper').data('owlCarousel').reinit();
		}
		if($(".intro_wrapper_no_auto").length) {
			$('.intro_wrapper_no_auto').data('owlCarousel').reinit();
		}

	});

	$( ".date_arrival, .date_departure" ).datepicker();


	/*Wow*/
	new WOW(
		{
	      boxClass:'wow', animateClass: 'animated', offset:0, mobile:true, live:true
	    }
		).init();

	/*Gallery Lightbox*/

	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});

	/* Lettering */
	if ($(window).width() > 992) {
		$("header .logo a b").lettering();
		$("header .logo span").each(function(){
		 	var min = 0;
		 	var max = 50;
		 	var randomNumber = Math.floor(Math.random()*(max-min+1)+min);
		 	$(this).css('transition-delay', '0.'+randomNumber+'s');
		 });
	}

	/* Anchor Scroll */
	$(window).scroll(function(){
		if ($(window).scrollTop() > 100) {
			$(".logo a").trigger('mouseenter');
			$('body').addClass('open');

		}
		else {
			$('body').removeClass('open');
			$(".logo a").trigger('mouseover');
			$('.sub_menu a').removeClass('active')
		}
	});

	/* Menu */
	$('.main_menu').on("click", function(e){
		$(this).parents('header').toggleClass('tm');
	});

	/* Top Menu Click to Section */
	$('.sub_menu').find('a').on("click", function(e){
		$('.sub_menu').find('a').removeClass('active');
		$(this).addClass('active');
		var anchor = $(this);
		if($(this).parents('header').hasClass('white_bck')){
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top-58
			}, 1000);
		}else if($(this).parents('header').hasClass('blck_bck')){
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top-58
			}, 1000);
		}else{
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top
			}, 1000);
		}
		e.preventDefault();
		$(".main_menu").trigger('click');
	});


	/*Scroll Effect*/
	$('.intro_down, .go').on("click", function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, 300);
		e.preventDefault();
	});


	/* Countdown */
	$('.countdown').each(function(){
		var year = $(this).attr('data-year');
		var month = $(this).attr('data-month');
		var day = $(this).attr('data-day');
		$(this).countdown({until: new Date(year,month-1,day)});

	});

	$("#categories .categorie_block").each(function(){
		if (!$(this).hasClass("display-none")) {
			var datavalue = $(this).find(".adds_txt h5").text();
			$("#modal-others-categories input[data-value='"+datavalue+"'").prop("checked", true);
			$("#modal-others-categories input[data-value='"+datavalue+"'").parent().addClass("active");
		}
	});


})(jQuery);


$(window).load(function(){

	/*Masonry*/
	$('.masonry').masonry({
		itemSelector: '.masonry-item',
	});

	if ($(window).width() > 992) {
		/* Autoheight Init */
		$('.mid_wrapper').each(function(){
			setEqualHeight($(this).find('.owl-item'));
		});
	}
	$('.mid_wrapper').each(function(){
		setEqualHeight($(this).find('.owl-item'));
	});

});


 /*Boxes AutoHeight*/
function setEqualHeight(columns)
{
	var tallestcolumn = 0;
	columns.each(
		function()
		{
			$(this).css('height','auto');
			var currentHeight = $(this).height();
			if(currentHeight > tallestcolumn)
				{
				tallestcolumn = currentHeight;
				}
		}
	);
columns.height(tallestcolumn);
}

function resizeInput() {
    $(this).attr('size', $(this).val().length);
}

$(".maps-section a").hover(function() {
  $(' .maps-section input[type="text"]')
    // event handler
    .keyup(resizeInput)
    // resize on page load
    .each(resizeInput);
});



//Maps

function updateControls(addressComponents) {
    $('.maps-street1').text(addressComponents.addressLine1);
    $('.maps-city').text(addressComponents.city);
    $('.maps-state').text(addressComponents.stateOrProvince);
    $('.maps-zip').text(addressComponents.postalCode);
    $('.maps-country').text(addressComponents.country);
}

//datepicker

$(function () {
    $('#modal-description-date').datetimepicker({
        viewMode: 'years',
        format: 'DD-MM-YYYY',
        minDate: Date.now()
    });
});


var edit_trip_intro_url = "https://api.ipify.org?format=json"; //POST
var edit_trip_desc_url = "https://api.ipify.org?format=json"; //POST
var edit_trip_gallery_url = "https://api.ipify.org?format=json" ;//POST
var edit_trip_maps_url = "https://api.ipify.org?format=json"; //POST
var delete_image_url = "https://api.ipify.org?format=json"; // DELETE
var edit_trip_others_url = "https://api.ipify.org?format=json"; //POST

//DropZone

Dropzone.autoDiscover = false;

var myIntroDropzone = new Dropzone("#intro-awesome-dropzone", {
	url: edit_trip_intro_url,                        
    autoProcessQueue: false,
    paramName: "file", // The name that will be used to transfer the file
    addRemoveLinks: true,
    dictCancelUpload: "Cancel upload",
    dictRemoveFile: "Remove",
    dictCancelUploadConfirmation: "Confirme canceltion",
    maxFilesize: 10, // MB
    parallelUploads: 5,
    uploadMultiple: false,
    acceptedFiles: "image/*",
    maxFiles: 1,
    thumbnailWidth: 200,
    thumbnailHeight: 200,
    init : function () {
        this.on("maxfilesexceeded", function(file) {
            this.removeAllFiles();
            this.addFile(file);
        });

        this.on("sending", function(file, xhr, formData) { 
			console.log("seeeeeeending");
		});
		this.on("success", function(file, response) { 
			if(response.status == "ok") {
				$("#intro .into_back").attr("data-image",response.fileUrl);
				refreshImagBackground();
			}
		});
    }
});

$('#introModal .save').click(function(){
	var dataToSend={"place" :$("#modal-intro-place").val(),
					"city" : $("#modal-intro-city").val(),
					"slogan" : $("#modal-intro-slogan").val()} ;       
    $.ajax({
		type: 'POST',
		url: edit_trip_intro_url,
		data: dataToSend,
		success : function(response, statut){ 
			if(response.status == "ok") {
				$("#intro .intro-place").text($("#modal-intro-place").val());
				$("#intro .intro-city b").text($("#modal-intro-city").val());
				$("#intro .intro-slogan").text($("#modal-intro-slogan").val());
				$("#welcome .description-place").text($("#modal-intro-place").val());
				myIntroDropzone.processQueue();
			}
		}
	});   
	
});

Dropzone.autoDiscover = false;
var myGalleryDropzone = new Dropzone("#gallery-awesome-dropzone", {
    url: edit_trip_gallery_url,                        
    autoProcessQueue: false,
    paramName: "file", // The name that will be used to transfer the file
    addRemoveLinks: true,
    dictCancelUpload: "Cancel upload",
    dictRemoveFile: "Remove",
    dictCancelUploadConfirmation: "Confirme canceltion",
    maxFilesize: 10, // MB
    parallelUploads: 5,
    uploadMultiple: true,
    acceptedFiles: "image/*",
    init : function () {
        thisDropzone = this;
        $(".gallery .popup-gallery a").each(function( index ) {
            var mokFile= {name : $( this ).attr('href'),size : $( this ).data('size')};
            thisDropzone.options.addedfile.call(thisDropzone,mokFile);
            thisDropzone.files.push(mokFile);
            thisDropzone.options.thumbnail.call(thisDropzone,mokFile,$( this ).attr('href'));

        });
        thisDropzone.on("success", function(file, response) { 
			if(response.status == "ok") {
				response.content.files.forEach(function(element, index, array) {
					if(($("#maps-gallery .popup-gallery a").first().attr('href') == "images/blank_gallery_image.png") && index == 0){
						$("#maps-gallery .popup-gallery a img").first().attr("src",element.url);
						$("#maps-gallery .popup-gallery a").first().attr("href",element.url);
						$("#maps-gallery .popup-gallery a").first().attr("data-size",element.size);
					}else {
						$("#maps-gallery .popup-gallery").append("<a href="+element.url+" data-size="+element.size+"></a>");
					}
					
				});
			}
		});

        thisDropzone.on("removedfile", function(file) {
			var dataId={"fileName" : file.name};
			$.ajax({
				type: 'GET',
				url: delete_image_url,
				data: dataId,
				success : function(response, statut){ 
					if(response.status == "ok") {
						if($("#maps-gallery .popup-gallery a").first().attr('href') == file.name) {
							if($("#maps-gallery .popup-gallery a").size() > 1){
								var lastHref = $("#maps-gallery .popup-gallery a").last().attr('href');
								$("#maps-gallery .popup-gallery a").last().remove();
								$("#maps-gallery .popup-gallery a img").first().attr("src",lastHref);
								$("#maps-gallery .popup-gallery a").first().attr("href",lastHref);
							}else {
								$("#maps-gallery .popup-gallery a img").first().attr("src","images/blank_gallery_image.png");
								$("#maps-gallery .popup-gallery a").first().attr("href","images/blank_gallery_image.png");
							}
							
						}else {
							$("#maps-gallery .popup-gallery a[href='"+file.name+"']").remove();
						}
					}
				}
			});
		});
    }
});

$('#galleryModal .save').click(function(){           
    myGalleryDropzone.processQueue();
});

$('#descriptionModal .save').click(function(){ 
	var dataToSend={"description" : $("#modal-description-desc").val(),
					"date" : $("#modal-description-date input").val(),
					"duration" : $("#modal-description-duration").val(),
					"age" : $("#modal-description-age input[name='age']:checked").data().value} ;       
    $.ajax({
		type: 'POST',
		url: edit_trip_desc_url,
		data: dataToSend,
		success : function(response, statut){ 
			if(response.status == "ok") {
				var tripeDate = $("#modal-description-date input").val();
				var tripeDateparts = tripeDate.split('-');
				var $welcomeCountdown = $("#welcome .countdown");
				$welcomeCountdown.attr("data-day",tripeDateparts[0]);
				$welcomeCountdown.attr("data-month",tripeDateparts[1]);
				$welcomeCountdown.attr("data-year",tripeDateparts[2]);
				var year = tripeDateparts[2];
				var month = tripeDateparts[1];
				var day = tripeDateparts[0];

				$('.countdown').countdown('destroy');
				$('.countdown').countdown({until: new Date(year,month-1,day)});

				$("#welcome .description-desc").text($("#modal-description-desc").val());
				$("#welcome .description-date").text(tripeDate)
				$("#welcome .description-duration").text($("#modal-description-duration").val());
				$("#welcome .description-age").text($("#modal-description-age input[name='age']:checked").data().value);
			}
		}
	});
});

$('#mapsModal .save').click(function(){ 
	var dataToSend={"latitude" : $("#modal-maps-latitude").val(),
					"longitude" : $("#modal-maps-longitude").val(),
					"address" : $("#modal-maps-address").val()
					};       
    $.ajax({
		type: 'POST',
		url: edit_trip_maps_url,
		data: dataToSend,
		success : function(response, statut){ 
				$(".maps-section .maps").attr("data-latitude",$("#modal-maps-latitude").val());
				$(".maps-section .maps").attr("data-latitude",$("#modal-maps-longitude").val());
				$(".maps-section .us3-address").val($("#modal-maps-address").val());
				$('#maps').locationpicker();
		}
	});
});

$('#othersModal .save').click(function(){ 
	var notCheckedCat = [];
	var dataToSend = { 'categories' : [] , "text" : $("#modal-othres-desc").val()};
	$("#modal-others-categories input:checked").each(function() {
	  dataToSend['categories'].push($(this).data().value);
	});


	$.ajax({
		type: 'POST',
		url: edit_trip_others_url,
		data: dataToSend,
		success : function(response, statut){ 
			if(response.status == "ok") {
				$("#others .others-desc").text($("#modal-othres-desc").val());
				$("#modal-others-categories input").each(function() {
					if($(this).is(":checked")) {
						$("#categories .categorie_block:contains('"+$(this).data().value+"')").removeClass("display-none");
					} else {
						$("#categories .categorie_block:contains('"+$(this).data().value+"')").addClass("display-none");
					}
				});
			}
		}
	});
});



var customStyles = [{
    "elementType": "geometry",
    "stylers": [{"hue": "#ff4400"}, {"saturation": -68}, {"lightness": -4}, {"gamma": 0.72}]
}, {"featureType": "road", "elementType": "labels.icon"}, {
    "featureType": "landscape.man_made",
    "elementType": "geometry",
    "stylers": [{"hue": "#0077ff"}, {"gamma": 3.1}]
}, {
    "featureType": "water",
    "stylers": [{"hue": "#00ccff"}, {"gamma": 0.44}, {"saturation": -33}]
}, {
    "featureType": "poi.park",
    "stylers": [{"hue": "#44ff00"}, {"saturation": -23}]
}, {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [{"hue": "#007fff"}, {"gamma": 0.77}, {"saturation": 65}, {"lightness": 99}]
}, {
    "featureType": "water",
    "elementType": "labels.text.stroke",
    "stylers": [{"gamma": 0.11}, {"weight": 5.6}, {"saturation": 99}, {"hue": "#0091ff"}, {"lightness": -86}]
}, {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [{"lightness": -48}, {"hue": "#ff5e00"}, {"gamma": 1.2}, {"saturation": -23}]
}, {
    "featureType": "transit",
    "elementType": "labels.text.stroke",
    "stylers": [{"saturation": -64}, {"hue": "#ff9100"}, {"lightness": 16}, {"gamma": 0.47}, {"weight": 2.7}]
}];

$('#maps').locationpicker({
    location: {
        latitude: $(".maps-section .maps").data("latitude"),
		longitude: $(".maps-section .maps").data("longitude")
    },
    radius: 0,
    styles: customStyles,
    inputBinding: {
        latitudeInput: $('.us3-lat'),
        longitudeInput: $('.us3-lon'),
        locationNameInput: $('.us3-address')
    },
    enableAutocomplete: true,
    markerIcon: 'images/marker.png',
    onchanged: function (currentLocation, radius, isMarkerDropped) {
	    var addressComponents = $(this).locationpicker('map').location.addressComponents;
	    updateControls(addressComponents);
    },
    oninitialized: function(component) {
        var addressComponents = $(component).locationpicker('map').location.addressComponents;
        updateControls(addressComponents);
    }

});

/* Edit */

$('#editMaps').locationpicker({
	location: {
		latitude: $(".maps-section .maps").data("latitude"),
		longitude: $(".maps-section .maps").data("longitude")
	},
	radius: 0,
	styles: customStyles,
	inputBinding: {
		latitudeInput: $('#modal-maps-latitude'),
		longitudeInput: $('#modal-maps-longitude'),
		locationNameInput: $('#modal-maps-address')
	},
	enableAutocomplete: true,
	markerIcon: 'images/marker.png'
});

$('#mapsModal').on('shown.bs.modal', function () {
	$('#editMaps').locationpicker('autosize');
});