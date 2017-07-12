jQuery(document).ready(function($) {

	$("#transferCheck").click(function(){
		var ferry = $("#ferryCheck");
		
		if ($("#transferCheck").prop('checked')){
			ferry[0].checked = true;			
		}
		else{
			ferry[0].checked = false;
		}		
    });
	
	$("#oferta", "input:checkbox").click(function(){
		btn = $("#btnSend");
		if ($("#oferta")[0].checked == false){
			btn[0].disabled = true;
		} else{
			btn[0].disabled = false;
		};
	});
});