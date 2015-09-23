        ymaps.ready(function () {
            var myMap = new ymaps.Map('YMapsID', {
                center: [57.466127, 41.484469],
                zoom: 12,
                // Обратите внимание, что в API 2.1 по умолчанию карта создается с элементами управления.
                // Если вам не нужно их добавлять на карту, в ее параметрах передайте пустой массив в поле controls.
                controls: []
            });
        
            var myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                balloonContentBody: [
                    '<address>',
                    '<strong>Party Ples</strong>',
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