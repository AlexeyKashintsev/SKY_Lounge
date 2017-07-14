$('document').ready(function($) {
    
	$("#transferCheck").click(function(){
		var ferry = $("#ferryCheck");
		
		if ($("#transferCheck").prop('checked')){
			ferry[0].checked = true;			
		}
		else{
			ferry[0].checked = false;
		}		
    })
	
	//$("#oferta").click(function(){
	$("#btnSend").parent().mouseover(function(){
		btn = $("#btnSend");
		/*var mas = $("input:text");
		var flag = false;
		mas.each(function (txtfield){
			if (txtfield.value == '')
				flag = true;
		});
		if (($("#oferta")[0].checked == true)&&($("input:radio:checked").length>4)&&(flag == false)){*/
        if ($('#oferta')[0].checked == true){
			btn[0].disabled = false;
		} else{
			btn[0].disabled = true;
		};
	})
    
    $("#userform").submit(function(evt){ 
      call(); 
        evt.preventDefault();
    });
    
    function call() {
 	  var msg   = $('#userform').serialize();
        $.ajax({
          type: 'POST',
          url: 'userform.php',
          data: msg,
          success: function(data) {
            $('#order-id').html(data);
          },
          error:  function(xhr, str){
              alert('Возникла ошибка: ' + xhr.responseCode);
          }
        });
    }

/*
$('#btnSend').submit(function() {
    current_item = this;
    $('.section:visible').fadeOut( section_hide_time, function() {
        $('a', '.mainmenu').removeClass( 'active' );
        var new_section = $( $(current_item).attr('href') );
        new_section.fadeIn( section_show_time );
    } );
    })
*/
    
    
    $("#paidform").submit(function(evt){ 
        checkpay(); 
        evt.preventDefault();
    });
    
    function checkpay() {
 	  var msg   = $('#paidform').serialize();
        $.ajax({
          type: 'POST',
          url: 'paid.php',
          url: 'paid.php',
          data: msg,
          success: function(data) {
            $('#paidcheck').html(data);
          },
          error:  function(xhr, str){
              alert('Возникла ошибка: ' + xhr.responseCode);
          }
        });
    }
})