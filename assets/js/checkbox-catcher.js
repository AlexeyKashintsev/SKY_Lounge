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
	
	//$("#oferta").click(function(){
	$("#btnSend").parent().mouseover(function(){
		btn = $("#btnSend");
		var mas = $("input:text");
		var flag = false;
		mas.each(function (txtfield){
			if (txtfield.value == '')
				flag = true;
		});
		if (($("#oferta")[0].checked == true)&&($("input:radio:checked").length>4)&&(flag == false)){
			btn[0].disabled = false;
		} else{
			btn[0].disabled = true;
		};
	});
});