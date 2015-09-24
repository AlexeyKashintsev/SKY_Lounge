ymaps.ready(function () {
    var myMap = new ymaps.Map('YMapsID', {
        center: [55.746519, 37.534820],
        zoom: 14,
        // Обратите внимание, что в API 2.1 по умолчанию карта создается с элементами управления.
        // Если вам не нужно их добавлять на карту, в ее параметрах передайте пустой массив в поле controls.
        controls: []
    });

    var myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        balloonContentBody: [
            '<address>',
            '<strong>SKY Lounge Club</strong>',
            '<br/>',
            'Адрес: Плёс',
            '<br/>',
            'Подробнее: <a href="#"</a>',
            '</address>'
        ].join('')
    }, {
        preset: 'islands#redDotIcon'
    });

    myMap.geoObjects.add(myPlacemark);
});

//METRIKA
(function (d, w, c) { (w[c] = w[c] || []).push(function() { try { w.yaCounter25485329 = new Ya.Metrika({id:25485329, trackLinks:true}); } catch(e) { } }); var n = d.getElementsByTagName("script")[0], s = d.createElement("script"), f = function () { n.parentNode.insertBefore(s, n); }; s.type = "text/javascript"; s.async = true; s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js"; if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); } })(document, window, "yandex_metrika_callbacks");