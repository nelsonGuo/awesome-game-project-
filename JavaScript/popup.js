
function openPopup(){
	$("#modal-open-button").prop("disabled", true);
	$("#popup-content").fadeIn();
	$("#overlay-bg").fadeIn();
	clearInterval(timer);
	updatePopup();
}
function closePopup(){
	$("#modal-open-button").prop("disabled", false);
	$("#popup-content").fadeOut();
	$("#overlay-bg").fadeOut();
}
function updatePopup(){
	var $popupContent = $("#popup-content");
	// http://api.jquery.com/height/
	// http://api.jquery.com/outerheight/
	//var top = $(window).height() / 2 - $popupContent.outerHeight() / 2; // Center vertical
	var top = "300px"; // Fixed offset
	// http://api.jquery.com/width/
	//  http://api.jquery.com/outerWidth/
	var left = ($(window).width() - $popupContent.outerWidth()) / 2; // Center horizontal
	$popupContent.css({
		'top' : top,
		'left' : left
	});
}