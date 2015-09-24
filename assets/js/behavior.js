/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var aImgNum = 1;
var curStr = 0;
var delay = 30;
var ready = false;
function setBackground(doNotChange) {
    if (!doNotChange) {
        var oldBg = document.getElementById("background-" + aImgNum);
        aImgNum++;
        aImgNum = aImgNum > 7 ? 1 : aImgNum;
        var curBg = document.getElementById("background-" + aImgNum);
        $(oldBg).addClass('div-hidden');
        $(curBg).removeClass('div-hidden');
    }
    var nextBgNum = (aImgNum < 7 ? aImgNum + 1 : 1);
    nextBg = document.getElementById("background-" + nextBgNum);
    nextBg.setAttribute("style", "background:#505D6E url(assets/images/background/" + nextBgNum + ".jpg) no-repeat fixed center center / cover;")
};
setBackground(true);
var timerId = window.setInterval(
    setBackground, 10000);
/*	var story = ["Суета серых будней",
"Границы обыденной реальности",
"Когда новый день похож на все остальные...",
"Но приходит час, когда ты смотришь на все по другому",
"Когда привычные границы открывают новые горизонты",
"Когда счастье врывается в твою душу и пронизывает каждую клеточку",
"Каждый атом твоей сущности",
"Когда ты один на один с этим миром,<br>И этот мир есть ты",
"Каждый из нас знает что так и есть,<br>И по другому не может быть",
"Все просто",
"Нет никаких границ",
"Только новые горизонты,<br>которые предстоит достичь"];
	var h_story = document.getElementById('h_story');
	function storyTeller(str) {
		$('#h_story').fadeOut( 1000, function() { 
			h_story.innerHTML = str;
			htmlBody = document.getElementsByTagName("html")[0];
      htmlBody.setAttribute("style", "background:#505D6E url(assets/images/background/" + aImgNum + ".jpg) no-repeat center center fixed;")
			$('#h_story').fadeIn( 1000 );
		} );
	    }
	storyTeller(story[curStr]);
	curStr++;
	function eventFire(el, etype){
		if (el.fireEvent) {
		  el.fireEvent('on' + etype);
		} else {
		  var evObj = document.createEvent('Events');
		  evObj.initEvent(etype, true, false);
		  el.dispatchEvent(evObj);
		}
	      }    */

$('#get-invite').click(function() {
    $('#get-invite').slideUp(100, function() {
        $('#guest-reg').slideDown(400);
    });
});

$('#submit').click(function() {
     $('#guest-reg').addClass('validated');
 });

$('#guest-reg').submit(function() {
    $('#guest-reg').slideUp(100, function() {
        $('#res-ok').slideDown(200);
    });
});