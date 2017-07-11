jQuery(document).ready(function($) {
	
	$("#ferryCheck").attr("checked", false);

	// Switch section
	$("a", '.mainmenu').click(function() 
	{
		if( ! $(this).hasClass('active') ) { 
			current_item = this;
			// close all visible divs with the class of .section
			$('.section:visible').fadeOut( section_hide_time, function() { 
				$('a', '.mainmenu').removeClass( 'active' );  
				$(current_item).addClass( 'active' );
				var new_section = $( $(current_item).attr('href') );
				new_section.fadeIn( section_show_time );
			} );
		}
		return false;
	});

	$("#transferCheck").click(function(){
		var ferry = $("#ferryCheck");
		
		if ($("#transferCheck").prop('checked')){
			ferry[0].checked = true;			
		}
		else{
			ferry[0].checked = false;
		}
		
    });
});