/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
window.onload = function(){
    //wimpyButton.play('assets/sound/1.mp3');
    var mp3;
    mp3 = soundManager.createSound({
        url: 'assets/sound/1.mp3',
        autoPlay: true,
	ignoreMobileRestrictions: true,
        pan: -75,
        volume: 50,
        onfinish: function(){
            mp3.play();
        }
    });
    $('#pb-contr').click(function(){
        if(!mp3.paused){
            play = false;
            $('#playbutton').attr('src', 'assets/css/play.png');
            mp3.pause();
        } else {
            play = true;
            $('#playbutton').attr('src', 'assets/css/pause.png');
            mp3.play();
        }
    });
    setTimeout(function(){
        var oneCklick = true;
        //alert(mp3.playState);
        //if(!mp3.playState){
            $('body').click(function(){
                if(oneCklick){
                    mp3.pause();
                    mp3.play();
                    oneCklick = false;
                }
            });
        //}
    }, 0);
}