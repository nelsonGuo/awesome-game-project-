//pou-up window show up
function openPopup(){
	$("#modal-open-button").prop("disabled", true);
	$("#popup-content").fadeIn();
	$("#overlay-bg").fadeIn();
	clearInterval(timer);
	resizePopup();
}
//pop-up window close (use for next week)
function closePopup(){
	$("#modal-open-button").prop("disabled", false);
	$("#popup-content").fadeOut();
	$("#overlay-bg").fadeOut();
}
//resize for different window
function resizePopup(){
	var $popupContent = $("#popup-content");
	var top = $(window).height() / 2 - $popupContent.outerHeight() / 2; //vertical
	var left = ($(window).width() - $popupContent.outerWidth()) / 2; //horizontal
	$popupContent.css({'top' : top, 'left' : left});
}