//Global var
var global_travelInfoId;

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
			$(this).find('.semi-height').height( ($(this).find('.bordered_block:not(".col-md-12")').height())/2);
		});
	}

	$('.row').each(function(){
		setEqualHeight($(this).find('.bordered_block:not(".col-md-12")'));
		setEqualHeight($(this).find('.block'));
		$(this).find('#maps').height( ($(this).find('.bordered_block:not(".col-md-12")').height()));
		$(this).find('.semi-height').height( ($(this).find('.bordered_block:not(".col-md-12")').height())/2);
	});


	$(window).resize(function() {

	    if ($(window).width() > 992) {
			$('.row').each(function(){
				setEqualHeight($(this).find('.bordered_block:not(".col-md-12")'));
				setEqualHeight($(this).find('.block'));
				$(this).find('#maps').height( ($(this).find('.bordered_block:not(".col-md-12")').height()));
				$(this).find('.semi-height').height( ($(this).find('.bordered_block:not(".col-md-12")').height())/2);
			});

		}

		$('.row').each(function(){
			setEqualHeight($(this).find('.bordered_block:not(".col-md-12")'));
			setEqualHeight($(this).find('.block'));
			$(this).find('#maps').height( ($(this).find('.bordered_block:not(".col-md-12")').height()));
			$(this).find('.semi-height').height( ($(this).find('.bordered_block:not(".col-md-12")').height())/2);
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

	$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    autoWidth:false,
    nav:false,
    items:3,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

$('#modal-travelInfo-type input[type=radio][name=type]').change(function() {
    if ($(this).data('value') == 'building') {
        $("#type2").show();
		$("#type1").hide();
    }
    else {
	    $("#type1").show();
		$("#type2").hide();
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

function alertMessage(selector,messages) {
	var messageHTML ="";
	messages.forEach(function(messgae, index, array) {
		messageHTML = messageHTML + '<li>'+messgae+'</li>'
	});
	var alertMessage = '<div class="alert alert-danger alert-dismissible fade in" role="alert">' +
						'<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>' +
						'<p><ul>'+messageHTML+'</ul></p>' +
						'</div>';
	$(selector).prepend(alertMessage);
}

function addToCarousel(data) {
	var html = '';
	var idTravelInfo = $(".owl-carousel").find(".owl-item").size()-1;
	if(data.type == 'building'){
		html = '<div class="item"> <div class="item-header" data-type="'+data.type+'"> <i class="fa fa-cutlery"></i> <h5>HOTEL Information<small>Accomodation and Dining</small></h5> <div class="editbtn" data-toggle="modal" data-id="'+idTravelInfo+'" data-target="#travelInfoModal"> <button type="button" class="btn btn-rounded btn-default"><span class="glyphicon glyphicon-edit"></span> Edit</button> </div> </div> <div class="item-info"> <div class="info"> <h5 class="prime travel-hotel-title">'+data.hotelTitle+'</h5> <p class="travel-hotel-desc">'+data.hotelDescription+'</p> <a href="'+data.hotelWebSite+'" class="travel-hotel-site" title="" target="_blank"><i class="fa fa-globe"></i> '+data.hotelWebSite+'</a> </div> </div> </div>';	
	} else {
		html = '<div class="item"> <div class="item-header" data-type="'+data.type+'"> <i class="fa fa-'+data.type+'"></i> <h5>'+data.type+' Information<small>Departure and Arrival</small></h5> <div class="editbtn" data-toggle="modal" data-id="'+idTravelInfo+'" data-target="#travelInfoModal"> <button type="button" class="btn btn-rounded btn-default"><span class="glyphicon glyphicon-edit"></span> Edit</button> </div> </div> <!-- end item-header --> <div class="item-info"> <div class="departure"> <h5 class="travel-departure-title">'+data.departTitle+'</h5> <h6>DEPARTURE: <strong class="travel-departure-date">'+moment(data.departDate,"DD-MM-YYYY HH:mm").format("DD MMM, YYYY")+'</strong></h6> <div class="left"> <h2 class="travel-departure-time-from">'+moment(data.departDate,"DD-MM-YYYY HH:mm").format("HH.mm")+'</h2> <span class="travel-departure-address-from">'+data.departAddressFrom+'</span> </div> <img class="svg arrPrime" src="images/svg/arrow-right-s.svg" alt=""> <div class="right"> <h2 class="travel-departure-time-to">'+moment(data.departDate,"DD-MM-YYYY HH:mm").add(data.departDuration.days,"days").add(data.departDuration.hours , "hours").add(data.departDuration.minutes , "minutes").add(data.departDuration.seconds , "seconds").format("HH.mm")+'</h2> <span class="travel-departure-address-to">'+data.departAddressTo+'</span> </div> <div class="clear"></div> </div> <!-- end departure --> <div class="arrival"> <h5 class="travel-arrival-title">'+data.arivalTitle+'</h5> <h6>ARRIVAL: <strong class="travel-arrival-date">'+moment(data.arivalDate,"DD-MM-YYYY HH:mm").format("DD MMM, YYYY")+'</strong></h6> <div class="left"> <h2 class="travel-arrival-time-from">'+moment(data.arivalDate,"DD-MM-YYYY HH:mm").format("HH.mm")+'</h2> <span class="travel-arrival-address-from">'+data.arivalAddressFrom+'</span> </div> <img class="svg arrPrime" src="images/svg/arrow-right-s.svg" alt=""> <div class="right"> <h2 class="travel-arrival-time-to">'+moment(data.arivalDate,"DD-MM-YYYY HH:mm").add(data.arivalDuration.days,"days").add(data.arivalDuration.hours , "hours").add(data.arivalDuration.minutes , "minutes").add(data.arivalDuration.seconds , "seconds").format("HH.mm")+'</h2> <span class="travel-arrival-address-to">'+data.arivalAddressTo+'</span> </div> <div class="clear"></div> </div> <!-- end arrival --> </div> <!-- end item-info --> </div>';
	}
	$('.owl-carousel').trigger('add.owl.carousel', [$(html), $(this).find(".owl-item").size()-1]).trigger('refresh.owl.carousel');
}

function editTravelInfoCarousel(data) {
	var html = '';
	var idTravelInfo = global_travelInfoId;
	$(".owl-carousel").trigger('remove.owl.carousel', [idTravelInfo]).trigger('refresh.owl.carousel');
	if(data.type == 'building'){
		html = '<div class="item"> <div class="item-header" data-type="'+data.type+'"> <i class="fa fa-cutlery"></i> <h5>HOTEL Information<small>Accomodation and Dining</small></h5> <div class="editbtn" data-toggle="modal" data-id="'+idTravelInfo+'" data-target="#travelInfoModal"> <button type="button" class="btn btn-rounded btn-default"><span class="glyphicon glyphicon-edit"></span> Edit</button> </div> </div> <div class="item-info"> <div class="info"> <h5 class="prime travel-hotel-title">'+data.hotelTitle+'</h5> <p class="travel-hotel-desc">'+data.hotelDescription+'</p> <a href="'+data.hotelWebSite+'" class="travel-hotel-site" title="" target="_blank"><i class="fa fa-globe"></i> '+data.hotelWebSite+'</a> </div> </div> </div>';	
	} else {
		html = '<div class="item"> <div class="item-header" data-type="'+data.type+'"> <i class="fa fa-'+data.type+'"></i> <h5>'+data.type+' Information<small>Departure and Arrival</small></h5> <div class="editbtn" data-toggle="modal" data-id="'+idTravelInfo+'" data-target="#travelInfoModal"> <button type="button" class="btn btn-rounded btn-default"><span class="glyphicon glyphicon-edit"></span> Edit</button> </div> </div> <!-- end item-header --> <div class="item-info"> <div class="departure"> <h5 class="travel-departure-title">'+data.departTitle+'</h5> <h6>DEPARTURE: <strong class="travel-departure-date">'+moment(data.departDate,"DD-MM-YYYY HH:mm").format("DD MMM, YYYY")+'</strong></h6> <div class="left"> <h2 class="travel-departure-time-from">'+moment(data.departDate,"DD-MM-YYYY HH:mm").format("HH.mm")+'</h2> <span class="travel-departure-address-from">'+data.departAddressFrom+'</span> </div> <img class="svg arrPrime" src="images/svg/arrow-right-s.svg" alt=""> <div class="right"> <h2 class="travel-departure-time-to">'+moment(data.departDate,"DD-MM-YYYY HH:mm").add(data.departDuration.days,"days").add(data.departDuration.hours , "hours").add(data.departDuration.minutes , "minutes").add(data.departDuration.seconds , "seconds").format("HH.mm")+'</h2> <span class="travel-departure-address-to">'+data.departAddressTo+'</span> </div> <div class="clear"></div> </div> <!-- end departure --> <div class="arrival"> <h5 class="travel-arrival-title">'+data.arivalTitle+'</h5> <h6>ARRIVAL: <strong class="travel-arrival-date">'+moment(data.arivalDate,"DD-MM-YYYY HH:mm").format("DD MMM, YYYY")+'</strong></h6> <div class="left"> <h2 class="travel-arrival-time-from">'+moment(data.arivalDate,"DD-MM-YYYY HH:mm").format("HH.mm")+'</h2> <span class="travel-arrival-address-from">'+data.arivalAddressFrom+'</span> </div> <img class="svg arrPrime" src="images/svg/arrow-right-s.svg" alt=""> <div class="right"> <h2 class="travel-arrival-time-to">'+moment(data.arivalDate,"DD-MM-YYYY HH:mm").add(data.arivalDuration.days,"days").add(data.arivalDuration.hours , "hours").add(data.arivalDuration.minutes , "minutes").add(data.arivalDuration.seconds , "seconds").format("HH.mm")+'</h2> <span class="travel-arrival-address-to">'+data.arivalAddressTo+'</span> </div> <div class="clear"></div> </div> <!-- end arrival --> </div> <!-- end item-info --> </div>';
	}
	$('.owl-carousel').trigger('add.owl.carousel', [$(html), idTravelInfo]).trigger('refresh.owl.carousel');
}
				

function getDuration(selector) {
	var duration={"days" :$($(selector).next().find(".bdp-block")[0]).find("span:first").text(),
					"hours" :$($(selector).next().find(".bdp-block")[1]).find("span:first").text(),
					"minutes" :$($(selector).next().find(".bdp-block")[2]).find("span:first").text(),
					"seconds" : $($(selector).next().find(".bdp-block")[3]).find("span:first").text()};
	return duration;
}

function getDurationString(selector) {
	var durationString="";
	var days = $($(selector).next().find(".bdp-block")[0]).find("span:first").text();
	var hours = $($(selector).next().find(".bdp-block")[1]).find("span:first").text();
	var minutes = $($(selector).next().find(".bdp-block")[2]).find("span:first").text();
	var seconds = $($(selector).next().find(".bdp-block")[3]).find("span:first").text();
	if(days != 0){
		durationString = durationString + days+"D"+" ";
	}
	if(hours != 0){
		durationString = durationString + hours+"H"+" ";
	}
	if(minutes != 0){
		durationString = durationString + minutes+"MIN"+" ";
	}
	if(seconds != 0){
		durationString = durationString + seconds+"S"+" ";
	}

	return durationString;
}

function resetpopinTravelInfo() {
	$('#travelInfoModal').find('.modal-body input').val("");
	$('#travelInfoModal').find('.modal-body textarea').val("");
	$($("#modal-travelInfo-duration-depart").next().find(".bdp-block")[0]).find("span:first").text("0");
	$($("#modal-travelInfo-duration-depart").next().find(".bdp-block")[1]).find("span:first").text("0");
	$($("#modal-travelInfo-duration-depart").next().find(".bdp-block")[2]).find("span:first").text("0");
	$($("#modal-travelInfo-duration-depart").next().find(".bdp-block")[3]).find("span:first").text("0");
	$($("#modal-travelInfo-duration-arival").next().find(".bdp-block")[0]).find("span:first").text("0");
	$($("#modal-travelInfo-duration-arival").next().find(".bdp-block")[1]).find("span:first").text("0");
	$($("#modal-travelInfo-duration-arival").next().find(".bdp-block")[2]).find("span:first").text("0");
	$($("#modal-travelInfo-duration-arival").next().find(".bdp-block")[3]).find("span:first").text("0");
}


function fillPopinTravelInfo(curentItem) {

	var typeHeader = curentItem.find(".item-header").attr("data-type");
	if(typeHeader==undefined){
		console.log("uknown typeHeader");
		return 0;
	}
	if(typeHeader == 'building') {
		$("#modal-travelInfo-type input[type='radio']").prop("checked", false);
		$("#modal-travelInfo-type input[type='radio'] ").parent().removeClass("active");
		$("#modal-travelInfo-type input[data-value = 'building']").prop("checked", true);
		$("#modal-travelInfo-type input[data-value = 'building'] ").parent().addClass("active");
		$("#modal-travelInfo-title-hotel").val(curentItem.find(".travel-hotel-title").text());
		$("#modal-travelInfo-desc-hotel").val(curentItem.find(".travel-hotel-desc").text());
		$("#modal-travelInfo-website-hotel").val(curentItem.find(".travel-hotel-site").text());
		$("#type2").show();
		$("#type1").hide();
	}
	else{
		$("#modal-travelInfo-type input[type='radio']").prop("checked", false);
		$("#modal-travelInfo-type input[type='radio'] ").parent().removeClass("active");
		$("#modal-travelInfo-type input[data-value = '"+typeHeader+"']").prop("checked", true);
		$("#modal-travelInfo-type input[data-value = '"+typeHeader+"'] ").parent().addClass("active");

		$("#modal-travelInfo-title-depart").val(curentItem.find(".travel-departure-title").text());
		$("#modal-travelInfo-date-depart input").val(moment(curentItem.find(".travel-departure-date").text() +" "+curentItem.find(".travel-departure-time-from").text(), "DD MMM, YYYY HH.mm").format("DD-MM-YYYY HH:mm"));
		$("#modal-travelInfo-adress-depart-from").val(curentItem.find(".travel-departure-address-from").text());
		$("#modal-travelInfo-adress-depart-to").val(curentItem.find(".travel-departure-address-to").text());

		$("#modal-travelInfo-title-arival").val(curentItem.find(".travel-arrival-title").text());
		$("#modal-travelInfo-date-arival input").val(moment(curentItem.find(".travel-arrival-date").text() +" "+curentItem.find(".travel-arrival-time-from").text(), "DD MMM, YYYY HH.mm").format("DD-MM-YYYY HH:mm"));
		$("#modal-travelInfo-adress-arival-from").val(curentItem.find(".travel-arrival-address-from").text());
		$("#modal-travelInfo-adress-arival-to").val(curentItem.find(".travel-arrival-address-to").text());

		var arrivalMomentFrom= moment(curentItem.find(".travel-arrival-date").text() +" "+curentItem.find(".travel-arrival-time-from").text(), "DD MMM, YYYY HH.mm");
		var arrivalMomentTo =moment(curentItem.find(".travel-arrival-date").text() +" "+curentItem.find(".travel-arrival-time-to").text(), "DD MMM, YYYY HH.mm");
		var arrivalDiffmoment = arrivalMomentTo.diff(arrivalMomentFrom);
		if(arrivalDiffmoment<0){
			arrivalMomentTo.add(1,"days");
			arrivalDiffmoment = arrivalMomentTo.diff(arrivalMomentFrom);
		}

		var dmoment = moment.duration(arrivalDiffmoment, 'milliseconds');
		var hours = Math.floor(dmoment.asHours());
		var mins = Math.floor(dmoment.asMinutes()) - hours * 60;

		$($("#modal-travelInfo-duration-arival").next().find(".bdp-block")[1]).find("span:first").text(hours);
		$($("#modal-travelInfo-duration-arival").next().find(".bdp-block")[2]).find("span:first").text(mins);

		var departureMomentFrom= moment(curentItem.find(".travel-departure-date").text() +" "+curentItem.find(".travel-departure-time-from").text(), "DD MMM, YYYY HH.mm");
		var departureMomentTo =moment(curentItem.find(".travel-departure-date").text() +" "+curentItem.find(".travel-departure-time-to").text(), "DD MMM, YYYY HH.mm");
		var departureDiffmoment = departureMomentTo.diff(departureMomentFrom);
		if(departureDiffmoment<0){
			departureMomentTo.add(1,"days");
			departureDiffmoment = departureMomentTo.diff(departureMomentFrom);
		}

		var dmoment = moment.duration(departureDiffmoment, 'milliseconds');
		var hours = Math.floor(dmoment.asHours());
		var mins = Math.floor(dmoment.asMinutes()) - hours * 60;

		$($("#modal-travelInfo-duration-depart").next().find(".bdp-block")[1]).find("span:first").text(hours);
		$($("#modal-travelInfo-duration-depart").next().find(".bdp-block")[2]).find("span:first").text(mins);
		$("#type1").show();
		$("#type2").hide();
	}
	
	
}

$('#travelInfoModal').on('show.bs.modal', function (event) {
	var button = $(event.relatedTarget);
	var id = button.data('id');
	var curentItem = $(".owl-carousel [data-id='"+id+"']").parent().parent();
	global_travelInfoId = id;
	fillPopinTravelInfo(curentItem);
});

$('#travelInfoModal').on('hidden.bs.modal', function (event) {
	$(".owl-carousel .item-header .editbtn").each(function( index ) {
	    $(this).attr('data-id',index);
	});
	resetpopinTravelInfo();
});

$( "body" ).mousemove(function( event ) {
  $(".owl-carousel .item-header .editbtn").each(function( index ) {
	    $(this).attr('data-id',index);
	});
});



$('#modal-acivity-name').bind('input', function() {
	var title = $(this).parents(".panel-default").find(".panel-heading .title a");
    $(title).text($(this).val());
    if( $(title).text().trim() == "") {
    	 $(title).text("Activity");
    }
});

$(".panel-default .delete").click(function() {
	if ($("#activityModal .panel-default").length > 1) {
		$(this).parents(".panel-default").remove();
	}
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
	$('[id^=modal-acivity-time]').datetimepicker({
		format: 'LT'
	});
	$('[id^=modal-travelInfo-date]').datetimepicker({
        viewMode: 'years',
        format: 'DD-MM-YYYY hh:mm',
        minDate: Date.now()
    });

    $('#modal-acivity-duration').durationPicker();
    $('[id^=modal-travelInfo-duration]').durationPicker({ showDays: false,  totalMax: 86399000 /* 1 day */ });
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
