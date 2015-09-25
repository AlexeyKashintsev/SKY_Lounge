/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
window.onload = function(){
    wimpyButton.play('assets/sound/1.mp3');
    $('#pb-contr').click(function(){
        if(wimpyButton.playing){
            play = false;
            $('#playbutton').attr('src', 'assets/css/play.png');
            wimpyButton.pause();
        } else {
            play = true;
            $('#playbutton').attr('src', 'assets/css/pause.png');
            wimpyButton.play('assets/sound/1.mp3');
        }
    })
}