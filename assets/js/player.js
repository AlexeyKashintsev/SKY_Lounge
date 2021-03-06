/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
window.onload = function(){
    //wimpyButton.play('assets/sound/1.mp3');
    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };
    var mp3;
    
    soundManager.defaultOptions.onpause = function (){
        $('#playbutton').attr('src', 'assets/css/play.png');
    };
    soundManager.defaultOptions.onresume = function (){
        $('#playbutton').attr('src', 'assets/css/pause.png');
    };
    soundManager.defaultOptions.onplay = function (){
        $('#playbutton').attr('src', 'assets/css/pause.png');
    };
    
    mp3 = soundManager.createSound({
        url: 'assets/sound/1.mp3',
        autoPlay: false,
	//ignoreMobileRestrictions: true,
        pan: -75,
        volume: 50,
        onfinish: function(){
            mp3.play();
        }
    });
    
    $('#pb-contr').click(function(){
        if(!mp3.paused){
            mp3.pause();
        } else {
            mp3.play();
        }
    });
    
    if(isMobile.any()){
        mp3.play();
        mp3.pause();
    } else {
        mp3.play();
    }
    
}