
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
id

@Response
{
    "content": {},
    "status": "ok",
    "message": ["message1","message2","message3"]
}
*/
var delete_trip_travelInfo_url = "delete/trip/travelInfo"; //DELETE



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
var edit_trip_travelInfo_url = "edit/trip/travelInfo"; //POST


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


$('#travelInfoModal .remove').click(function(){
	var dataToSend={"id" : global_travelInfoId} ;       
    $.ajax({
		type: 'GET',
		url: delete_trip_travelInfo_url,
		data: dataToSend,
		success : function(response, statut){ 
			if(response.status == "ok") {
				$(".owl-carousel").trigger('remove.owl.carousel', [global_travelInfoId]).trigger('refresh.owl.carousel');
				$('#travelInfoModal ').modal('hide');
			} else {
				alertMessage($("#travelInfoModal .modal-body"),response.messages);
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
			if(response.status == "ok") {
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
				if(global_travelInfoId ==undefined){
					addToCarousel(data);
				} else {
					editTravelInfoCarousel(data);
				}
				
				$('#travelInfoModal').modal('hide');
				resetpopinTravelInfo();
			} else {
				alertMessage($("#travelInfoModal .modal-body"),response.messages);
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