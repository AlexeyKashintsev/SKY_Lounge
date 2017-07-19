jQuery(document).ready(function($) {
    var numOfPeople = 1;
    var price;
    checkPrice();
    
    $(".priceCheck").click(function() {
        checkPrice();   
     });
    
    function checkPrice() {
        if (price) price.remove();
        var sum = +1000;
            if ($('#transferCheck')[0].checked == true) sum += +($('#transferCheck')[0].value);
            if ($('#ferryCheck')[0].checked == true) sum += +($('#ferryCheck')[0].value);
        sum = sum * +($("#selectPeople").val());
        $('#pricetotal')[0].value = sum;
        price = $('<b/>', {
          id : 'totalPrice',
          name : 'totalPrice'
          }).html(sum+' Рублей').appendTo($('#containerPrice'));
    }
    
    $("#selectPeople").change(function(){
        checkPrice();
        var curNum = $("#selectPeople").val();
        if (numOfPeople < curNum ){
            for (var i = +numOfPeople + 1; i<=curNum; i++){
                addDynamicExtraField(i);
            }
        }
        else if (numOfPeople > curNum){
            for (var i = numOfPeople; i > curNum; i--){
                $(".DynamicExtraField"+i).remove();
            }
        }
        numOfPeople = curNum;
    })
        
    function addDynamicExtraField(participant) {
        var div = $('<div/>', {
            'class' : 'DynamicExtraField' + participant
        }).appendTo($('#customerBlock'));
        
        $('<h3/>').html('Участник ' + participant).appendTo(div);
        
        $('<p/>').html("Имя: ").appendTo(div);
        $('<input/>', {
            id : 'name'+participant,
            name : 'name'+participant,
            type : 'text'
        }).appendTo(div);
        
        $('<p/>').html("Фамилия: ").appendTo(div);
        
        $('<input/>', {
            id : 'surname'+participant,
            name : 'surname'+participant,
            type : 'text'
        }).appendTo(div);
    }
})