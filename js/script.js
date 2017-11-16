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
		html = '<div class="item"> <div class="item-header"> <i class="fa fa-cutlery"></i> <h5>HOTEL Information<small>Accomodation and Dining</small></h5> <div class="editbtn" data-toggle="modal" data-id="'+idTravelInfo+'" data-target="#travelInfoModal"> <button type="button" class="btn btn-rounded btn-default"><span class="glyphicon glyphicon-edit"></span> Edit</button> </div> </div> <div class="item-info"> <div class="info"> <h5 class="prime">'+data.hotelTitle+'</h5> <p>'+data.hotelDescription+'</p> <a href="'+data.hotelWebSite+'" title="" target="_blank"><i class="fa fa-globe"></i> '+data.hotelWebSite+'</a> </div> </div> </div>';	
	} else {
		html = '<div class="item"> <div class="item-header"> <i class="fa fa-'+data.type+'"></i> <h5>'+data.type+' Information<small>Departure and Arrival</small></h5> <div class="editbtn" data-toggle="modal" data-id="'+idTravelInfo+'" data-target="#travelInfoModal"> <button type="button" class="btn btn-rounded btn-default"><span class="glyphicon glyphicon-edit"></span> Edit</button> </div> </div> <!-- end item-header --> <div class="item-info"> <div class="departure"> <h5 class="travel-departure-title">'+data.departTitle+'</h5> <h6>DEPARTURE: <strong class="travel-departure-date">'+moment(data.departDate).format("DD MMM, YYYY")+'</strong></h6> <div class="left"> <h2 class="travel-departure-time-from">'+moment(data.departDate).format("HH.mm")+'</h2> <span class="travel-departure-address-from">'+data.departAddressFrom+'</span> </div> <img class="svg arrPrime" src="images/svg/arrow-right-s.svg" alt=""> <div class="right"> <h2 class="travel-departure-time-to">'+moment(data.departDate).add(data.departDuration.days,"days").add(data.departDuration.hours , "hours").add(data.departDuration.minutes , "minutes").add(data.departDuration.seconds , "seconds").format("HH.mm")+'</h2> <span class="travel-departure-address-to">'+data.departAddressTo+'</span> </div> <div class="clear"></div> </div> <!-- end departure --> <div class="arrival"> <h5 class="travel-arrival-title">'+data.arivalTitle+'</h5> <h6>ARRIVAL: <strong class="travel-arrival-date">'+moment(data.arivalDate).format("DD MMM, YYYY")+'</strong></h6> <div class="left"> <h2 class="travel-arrival-time-from">'+moment(data.arivalDate).format("HH.mm")+'</h2> <span class="travel-arrival-address-from">'+data.arivalAddressFrom+'</span> </div> <img class="svg arrPrime" src="images/svg/arrow-right-s.svg" alt=""> <div class="right"> <h2 class="travel-arrival-time-to">'+moment(data.arivalDate).add(data.arivalDuration.days,"days").add(data.arivalDuration.hours , "hours").add(data.arivalDuration.minutes , "minutes").add(data.arivalDuration.seconds , "seconds").format("HH.mm")+'</h2> <span class="travel-arrival-address-to">'+data.arivalAddressTo+'</span> </div> <div class="clear"></div> </div> <!-- end arrival --> </div> <!-- end item-info --> </div>';
	}
	$('.owl-carousel')
  .trigger('add.owl.carousel', [$(html), $(this).find(".owl-item").size()-1])
  .trigger('refresh.owl.carousel');
}
				

function addActivity() {
	var activityNumber = $("#activityModal .panel-default").length+1;
	var dt = new Date();
	var activityUniqueId = dt.getHours()+dt.getMinutes()+dt.getSeconds()+dt.getMilliseconds();
	var activityHtml = '<div class="panel panel-default"> <div class="panel-heading" role="tab" id="headingOne"> <div class="title"> <h4 class="panel-title"> <a role="button" data-toggle="collapse" data-parent="#accordion" href="#act'+activityUniqueId+'" aria-expanded="true" aria-controls="collapseOne"> Activity'+activityNumber+' </a> </h4> </div> <button type="button" class="delete"><span>&times;</span></button> </div> <div id="act'+activityUniqueId+'" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne"> <div class="panel-body"> <div class="form-horizontal"> <ul class="nav nav-tabs"> <li class="active"><a data-toggle="tab" href="#descriptionTab">Description</a></li> <li><a data-toggle="tab" href="#timeTab">Time</a></li> <li><a data-toggle="tab" href="#otherTab">Other</a></li> </ul> <div class="tab-content"> <div id="descriptionTab" class="tab-pane fade in active"> <div class="form-group form-group-sm"> <label class="col-sm-2 control-label" for="modal-acivity-name">Activity</label> <div class="col-sm-8"> <input class="form-control" type="text" id="modal-acivity-name" placeholder="add a title of acivity here..."/> </div> </div> <div class="form-group form-group-sm"> <label class="col-sm-2 control-label" for="modal-acivity-desc">Description</label> <div class="col-sm-8"> <textarea class="form-control" rows="3" id="modal-acivity-desc" placeholder="add a description..."></textarea> </div> </div> <div class="form-group form-group-sm"> <label class="col-sm-2 control-label" for="modal-acivity-day">Day</label> <div class="col-sm-8"> <div class="input-group"> <input type="number" id="modal-acivity-day" class="form-control" placeholder="1" value="1" pattern="\d*" min="1" max="5"> </div> </div> </div> </div> <div id="timeTab" class="tab-pane fade"> <div class="form-group form-group-sm"> <label class="col-sm-2 control-label" for="modal-acivity-duration">Duration</label> <div class="col-sm-8"> <div class="col-sm-12"> <div class="input-group"> <input type="text" class="form-control" id="modal-acivity-duration"> </div> </div> </div> </div> <div class="form-group form-group-sm"> <label class="col-sm-2 control-label" for="modal-acivity-time">Heurs :</label> <div class="col-sm-8"> <div class="col-sm-6"> <div class="input-group" id="modal-acivity-time1"> <input type="text" class="form-control" /> <span class="input-group-addon"> <span class="glyphicon glyphicon-time"></span> </span> </div> </div> <div class="col-sm-6"> <div class="input-group" id="modal-acivity-time2" > <input type="text" class="form-control"/> <span class="input-group-addon"> <span class="glyphicon glyphicon-time"></span> </span> </div> </div> </div> </div> <div class="form-group form-group-sm"> <label class="col-sm-2 control-label" for="modal-acivity-time-summer">Summer :</label> <div class="col-sm-8"> <div class="col-sm-6"> <div class="input-group" id="modal-acivity-time1-summer" > <input type="text" class="form-control" /> <span class="input-group-addon"> <span class="glyphicon glyphicon-time"></span> </span> </div> </div> <div class="col-sm-6"> <div class="input-group" id="modal-acivity-time2-summer"> <input type="text" class="form-control" /> <span class="input-group-addon"> <span class="glyphicon glyphicon-time"></span> </span> </div> </div> </div> </div> </div> <div id="otherTab" class="tab-pane fade"> <div class="form-group form-group-sm"> <label class="col-sm-2 control-label" for="modal-acivity-address">Address</label> <div class="col-sm-8"> <input class="form-control" type="text" id="modal-acivity-adress" placeholder="add adress..."/> </div> </div> <div class="form-group form-group-sm"> <label class="col-sm-2 control-label" for="modal-acivity-price">Price</label> <div class="col-sm-8"> <div class="input-group"> <input type="text" class="form-control" id="modal-acivity-price" placeholder="add your trip price ..." aria-describedby="basic-price" pattern="\d*" min="0"> <div class="input-group-addon" id="basic-price">$</div> </div> </div> </div> <div class="form-group form-group-sm"> <label class="col-sm-2 control-label" for="modal-description-age">Age</label> <div id="modal-description-age" class="btn-group col-sm-10" data-toggle="buttons"> <label class="btn btn-default btn-rounded"> <input type="radio" name="age" data-value="3" autocomplete="off"> +3 </label> <label class="btn btn-default btn-rounded"> <input type="radio" name="age" data-value="5" autocomplete="off"> +5 </label> <label class="btn btn-default btn-rounded"> <input type="radio" name="age" data-value="12" autocomplete="off"> +12 </label> <label class="btn btn-default btn-rounded"> <input type="radio" name="age" data-value="18" autocomplete="off"> +18 </label> <label class="btn btn-default btn-rounded active"> <input type="radio" name="age" data-value="All" autocomplete="off" checked> All </label> </div> </div> </div> </div> </div> </div> </div> </div>';
	$("#activityModal .panel-group").append(activityHtml);
	$(".panel-default .delete").click(function() {
		if ($("#activityModal .panel-default").length > 1) {
			$(this).parents(".panel-default").remove();
		}
	});
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
	$("#modal-travelInfo-title-depart").val("");
	$("#modal-travelInfo-date-depart input").val("");
	$("#modal-travelInfo-adress-depart-from").val("");
	$("#modal-travelInfo-adress-depart-to").val("");
	$("#modal-travelInfo-title-arival").val("");
	$("#modal-travelInfo-date-arival input").val("");
	$("#modal-travelInfo-adress-arival-from").val("");
	$("#modal-travelInfo-adress-arival-to").val("");
	$("#modal-travelInfo-title-hotel").val("");
	$("#modal-travelInfo-desc-hotel").val("");
	$("#modal-travelInfo-website-hotel").val("");
	$($("#modal-travelInfo-duration-depart").next().find(".bdp-block")[0]).find("span:first").text("0");
	$($("#modal-travelInfo-duration-depart").next().find(".bdp-block")[1]).find("span:first").text("0");
	$($("#modal-travelInfo-duration-depart").next().find(".bdp-block")[2]).find("span:first").text("0");
	$($("#modal-travelInfo-duration-depart").next().find(".bdp-block")[3]).find("span:first").text("0");
	$($("#modal-travelInfo-duration-arival").next().find(".bdp-block")[0]).find("span:first").text("0");
	$($("#modal-travelInfo-duration-arival").next().find(".bdp-block")[1]).find("span:first").text("0");
	$($("#modal-travelInfo-duration-arival").next().find(".bdp-block")[2]).find("span:first").text("0");
	$($("#modal-travelInfo-duration-arival").next().find(".bdp-block")[3]).find("span:first").text("0");
}

$('#exampleModal').on('show.bs.modal', function (event) {
	var button = $(event.relatedTarget) // Button that triggered the modal
	var recipient = button.data('whatever') // Extract info from data-* attributes
	// If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
	// Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
	var modal = $(this)
	modal.find('.modal-title').text('New message to ' + recipient)
	modal.find('.modal-body input').val(recipient)
})

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

$("#addNewActivity").click(function() {
	addActivity();
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
        minDate: Date.now()
    });

    $('#modal-acivity-duration').durationPicker();
    $('[id^=modal-travelInfo-duration]').durationPicker();
});


/*
@Request
place
city
slogan

@Response
{
    "content": {},
    "status": "ok",
    "message": ["message1","message2","message3"]
}
*/
var edit_trip_intro_url = "edit/trip/introduction"; //POST

/*
@Request
type
departDate
departDuration
departAddress
arivalDate
arivalDuration
arivalAddress
hotelTitle
hotelDescription
hotelWebSite

@Response
{
    "content": {},
    "status": "ok",
    "message": ["message1","message2","message3"]
}
*/
var edit_trip_travelInfo_url = "https://api.ipify.org?format=json";//"edit/trip/travelInfo"; //POST


/*
@Request
file

@Response
{
    "content": {
		"fileUrl": "filepath"
    },
    "status": "ok",
    "message": ["message1","message2","message3"]
}
*/
var edit_trip_intro_image_url = "edit/trip/introduction/image"; //POST


/*
@Request
description
date
duration
price
age

@Response
{
    "content": {},
    "status": "ok",
    "message": ["message1","message2","message3"]
}
*/
var edit_trip_desc_url = "edit/trip/description"; //POST


/*
@Request
files[] 

@Response
{
    "content": {
		"files":[{"url": "img/img1.png","size": 1523},
		  		 {"url": "img/img2.png","size": 5523},
		  		 {"url": "img/img3.png","size": 3523}]
    },
    "status": "ok",
    "message": ["message1","message2","message3"]
}
*/
var edit_trip_gallery_url = "edit/trip/galleries" ;//POST


/*
@Request
latitude
longitude
address

@Response
{
    "content": {},
    "status": "ok",
    "message": ["message1","message2","message3"]
}
*/
var edit_trip_maps_url = "edit/trip/maps"; //POST


/*
@Request
fileName

@Response
{
    "content": {},
    "status": "ok",
    "message": ["message1","message2","message3"]
}
*/
var delete_image_url = "delete/image"; // DELETE

/*
@Request
categories[] 
text

@Response
{
    "content": {},
    "status": "ok",
    "message": ["message1","message2","message3"]
}
*/
var edit_trip_others_url = "edit/trip/others"; //POST

//DropZone

Dropzone.autoDiscover = false;

var myIntroDropzone = new Dropzone("#intro-awesome-dropzone", {
	url: edit_trip_intro_image_url,                        
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
				$("#intro .into_back").attr("data-image",response.content.fileUrl);
				refreshImagBackground();
				$('#introModal').modal('hide');
			} else {
				alertMessage($("#introModal .modal-body"),response.messages);
			}
		});
		this.on("error", function(file, response) {
			//alertMessage($("#introModal .modal-body"),response.messages);
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
			} else {
				alertMessage($("#introModal .modal-body"),response.messages);
			}
		}
	});   
	
});

$('#travelInfoModal .save').click(function(){
	var dataToSend={"type" :$("#modal-travelInfo-type input[name='type']:checked").data().value,
					"departTitle" : $("#modal-travelInfo-title-depart").val(),
					"departDate" : $("#modal-travelInfo-date-depart input").val(),
					"departDuration" :getDurationString($("#modal-travelInfo-duration-depart")) ,
					"departAddressFrom" : $("#modal-travelInfo-adress-depart-from").val(),
					"departAddressTo" : $("#modal-travelInfo-adress-depart-to").val(),
					"arivalTitle" : $("#modal-travelInfo-title-arival").val(),
					"arivalDate" : $("#modal-travelInfo-date-arival input").val(),
					"arivalDuration" :getDurationString($("#modal-travelInfo-duration-arival")) ,
					"arivalAddressFrom" : $("#modal-travelInfo-adress-arival-from").val(),
					"arivalAddressTo" : $("#modal-travelInfo-adress-arival-to").val(),
					"hotelTitle" : $("#modal-travelInfo-title-hotel").val(),
					"hotelDescription" : $("#modal-travelInfo-desc-hotel").val(),
					"hotelWebSite" : $("#modal-travelInfo-website-hotel").val()};    

    $.ajax({
		type: 'GET',
		url: edit_trip_travelInfo_url,
		data: dataToSend,
		success : function(response, statut){ 
			if(response.ip == "196.75.139.242") {
				var data={"type" :$("#modal-travelInfo-type input[name='type']:checked").data().value,
					"departTitle" : $("#modal-travelInfo-title-depart").val(),
					"departDate" : $("#modal-travelInfo-date-depart input").val(),
					"departDuration" :getDuration($("#modal-travelInfo-duration-depart")) ,
					"departAddressFrom" : $("#modal-travelInfo-adress-depart-from").val(),
					"departAddressTo" : $("#modal-travelInfo-adress-depart-to").val(),
					"arivalTitle" : $("#modal-travelInfo-title-arival").val(),
					"arivalDate" : $("#modal-travelInfo-date-arival input").val(),
					"arivalDuration" :getDuration($("#modal-travelInfo-duration-arival")) ,
					"arivalAddressFrom" : $("#modal-travelInfo-adress-arival-from").val(),
					"arivalAddressTo" : $("#modal-travelInfo-adress-arival-to").val(),
					"hotelTitle" : $("#modal-travelInfo-title-hotel").val(),
					"hotelDescription" : $("#modal-travelInfo-desc-hotel").val(),
					"hotelWebSite" : $("#modal-travelInfo-website-hotel").val()};   
				addToCarousel(data);
				$('#travelInfoModal').modal('hide');
				resetpopinTravelInfo();
			} else {
				alertMessage($("#introModal .modal-body"),response.messages);
			}
		}
	});   
	
});

Dropzone.autoDiscover = false;
var myGalleryDropzone = new Dropzone("#gallery-awesome-dropzone", {
    url: edit_trip_gallery_url,                        
    autoProcessQueue: false,
    paramName: "files", // The name that will be used to transfer the file
    addRemoveLinks: true,
    dictCancelUpload: "Cancel upload",
    dictRemoveFile: "Remove",
    dictCancelUploadConfirmation: "Confirme canceltion",
    maxFilesize: 10, // MB
    parallelUploads: 10,
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
				$('#galleryModal').modal('hide');
			} else {
				alertMessage($("#galleryModal .modal-body"),response.messages);
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
					} else {
						alertMessage($("#galleryModal .modal-body"),response.messages);
					}
				}
			});
		});
		thisDropzone.on("error", function(file, response) {
			//alertMessage($("#galleryModal .modal-body"),response.messages);
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
					"price" : $("#modal-description-price").val(),
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
				$("#welcome .description-price").text($("#modal-description-price").val());
				$("#welcome .description-age").text($("#modal-description-age input[name='age']:checked").data().value);
				$('#descriptionModal').modal('hide');
			} else {
				alertMessage($("#descriptionModal .modal-body"),response.messages);
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
			if(response.status == "ok") {
				$(".maps-section .maps").attr("data-latitude",$("#modal-maps-latitude").val());
				$(".maps-section .maps").attr("data-latitude",$("#modal-maps-longitude").val());
				$(".maps-section .us3-address").val($("#modal-maps-address").val());
				$('#maps').locationpicker({
				    location: {
				        latitude: $(".maps-section .maps").data("latitude"),
						longitude: $(".maps-section .maps").data("longitude")
				    },
				    radius: 0
				});
				$('#mapsModal').modal('hide');
			}else {
				alertMessage($("#mapsModal .modal-body"),response.messages)
			}
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
				$('#othersModal').modal('hide');
			} else {
				alertMessage($("#othersModal .modal-body"),response.messages)
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