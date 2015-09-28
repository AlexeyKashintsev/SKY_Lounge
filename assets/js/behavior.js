/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 
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
"Только новые горизонты,<br>которые предстоит достичь"];*/
var story = [
'Самый высокий клуб в Европе',
'Первый ночной клуб в Москва-Сити',
'Лучший вид на Москву и Москва-Реку',
'Уникальный светодизайн',
'Самые взрывоопасные DJ',
'Лучшее место для Selfie',
'Cамое респектабельное место среди звезд, бизнесменов и политиков.'
]
var h_story = document.getElementById('h_story');
function storyTeller(str, doNotFade) {
	function setText() {
		if (str) {h_story.innerHTML = str;}
		$('#h_story').fadeIn( 1000 );
	}
	if (!doNotFade) {
		$('#h_story').fadeOut( 1000, function() { 
			setText();
		} );
	} else 
		setText();
}

var aImgNum = 1;
var imgNum = 8;
var curStr = 0;
var delay = 30;
var ready = false;
var allLoaded = false;
function setBackground(doNotChange) {
	if (!story[curStr])
		curStr = 0;
	if (!doNotChange) storyTeller(story[curStr]);
	curStr++;
    if (!doNotChange) {
        var oldBg = document.getElementById("background-" + aImgNum);
        aImgNum++;
        aImgNum = aImgNum > imgNum ? 1 : aImgNum;
        var curBg = document.getElementById("background-" + aImgNum);
        $(oldBg).addClass('div-hidden');
        $(curBg).removeClass('div-hidden');
    }
	if (aImgNum === imgNum)
		allLoaded = true;
	if (!allLoaded) {
		var nextBgNum = (aImgNum < imgNum ? aImgNum + 1 : 1);
		nextBg = document.getElementById("background-" + nextBgNum);
		nextBg.setAttribute("style", "background:#505D6E url(assets/images/background/" + nextBgNum + ".jpg) no-repeat fixed center center / cover;")
	}
};
setBackground(true);
var timerId = window.setInterval(
    setBackground, 10000);

$('#get-invite').click(function() {
    $('#first-invite').slideUp(100, function() {
        $('#guest-reg').slideDown(400);
    });
});

$('#submit').click(function() {
     $('#guest-reg').addClass('validated');
 });

function changeSize() {
	$('.guest-welcome').attr('style', 'max-height: ' + window.innerHeight * 0.7 + 'px');
}
changeSize();
window.onresize = changeSize;

(function () {
    function ready() {
        P.cacheBust = true;
        P.require(['Starter'], function(){
            var st = new Starter();
            st.execute();
        }, function(e){
            P.Logger.severe(e);
            console.log('An error occured while require(\'starter\'). Error: ' + e)
        });
    }
    if(!this.P) {
        this.P = {};
        P.ready = ready;
    } else {
        ready();
    }
})();