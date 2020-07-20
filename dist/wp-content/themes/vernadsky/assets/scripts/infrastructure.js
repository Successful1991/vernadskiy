
function initMap() {
	const jsonArrData = [
        {
            "name_ua": "Гатне",
            "name_en": "Gatne",
            "name_ru": "Гатне",
            "cor": "50.361421,30.410558",
            "categorie": "main"
        },
        {
            "name_ua": "Метро «Теремки»",
            "name_en": "",
            "name_ru": "Метро «Теремки»",
            "cor": "50.366276,30.453141",
            "categorie": "metro"
        },
        {
            "name_ua": "Метро «Іподром»",
            "name_en": "",
            "name_ru": "Метро «Теремки»",
            "cor": "50.375826, 30.468233",
            "categorie": "metro"
        },
        {
            "name_ua": "Метро «Виставковий центр»",
            "name_en": "",
            "name_ru": "Метро «Выставочный центр»",
            "cor": "50.381759, 30.477670",
            "categorie": "metro"
        },
        {
            "name_ua": "Міжнародний аеропорт «Київ», Жуляни",
            "name_en": "",
            "name_ru": "Международный аэропорт «Киев», Жуляны",
            "cor": "50.413421, 30.445179",
            "categorie": "aero"
        },
        {
            "name_ua": "Дитячий садок «УМКА»",
            "name_en": "",
            "name_ru": "Детский сад «УМКА»",
            "cor": "50.355377, 30.402021",
            "categorie": "child"
        },
        {
            "name_ua": "Дитячий садок «Дзвіночок»",
            "name_en": "",
            "name_ru": "Детский сад «Дзвиночок»",
            "cor": "50.359479, 30.374404",
            "categorie": "child"
        },
        {
            "name_ua": "Дитячий садок «Рудий будиночок»",
            "name_en": "",
            "name_ru": "Детский сад «Рудий будиночок»",
            "cor": "50.359256, 30.435147",
            "categorie": "child"
        },
        {
            "name_ua": "Дитячий садок «Барвінок»",
            "name_en": "",
            "name_ru": "Детский сад «Барвинок»",
            "cor": "50.373911, 30.372129",
            "categorie": "child"
        },
        {
            "name_ua": "Дитячий садок 4-CHILD",
            "name_en": "",
            "name_ru": "Детский сад 4-CHILD",
            "cor": "50.369776, 30.382724",
            "categorie": "child"
        },
        {
            "name_ua": "Школа Квінта",
            "name_en": "",
            "name_ru": "Школа Квинта",
            "cor": "50.351043, 30.417860",
            "categorie": "school"
        },
        {
            "name_ua": "Крюківщинська школа №1",
            "name_en": "",
            "name_ru": "Крюковщинская школа №1",
            "cor": "50.374913, 30.369930",
            "categorie": "school"
        },
        {
            "name_ua": "Школа №132",
            "name_en": "",
            "name_ru": "Школа №132",
            "cor": "50.366458, 30.448781",
            "categorie": "school"
        },
        {
            "name_ua": "Вишневська школа №1",
            "name_en": "",
            "name_ru": "Вишневская школа №1",
            "cor": "50.381248, 30.374261",
            "categorie": "school"
        },
        {
            "name_ua": "Школа №269",
            "name_en": "",
            "name_ru": "Школа №269",
            "cor": "50.365751, 30.458136",
            "categorie": "school"
        },
        {
            "name_ua": "Школа №286",
            "name_en": "",
            "name_ru": "Школа №286",
            "cor": "50.364475, 30.459762",
            "categorie": "school"
        },
        {
            "name_ua": "Укрпошта 08160",
            "name_en": "",
            "name_ru": "Укрпочта 08160",
            "cor": "50.357198, 30.406656",
            "categorie": "np"
        },
        {
            "name_ua": "Укрпошта 08136",
            "name_en": "",
            "name_ru": "Укрпочта 08136",
            "cor": "50.372546, 30.371576",
            "categorie": "np"
        },
        {
            "name_ua": "Нова пошта №1, Крюковщина",
            "name_en": "",
            "name_ru": "Новая почта №1, Крюковщина",
            "cor": "50.372871, 30.371940",
            "categorie": "np"
        },
        {
            "name_ua": "Відділення ПриватБанк",
            "name_en": "",
            "name_ru": "Отделение ПриватБанк",
            "cor": "50.371602, 30.370211",
            "categorie": "bank"
        },
        {
            "name_ua": "Відділення Ощадбанк",
            "name_en": "",
            "name_ru": "Отделение Ощадбанк",
            "cor": "50.342844, 30.423089",
            "categorie": "bank"
        },
        {
            "name_ua": "Банкомати",
            "name_en": "",
            "name_ru": "Банкоматы",
            "cor": "50.352889, 30.433337",
            "categorie": "bank"
        },
        {
            "name_ua": "Відділення Ощадбанк",
            "name_en": "",
            "name_ru": "Отделение Ощадбанк",
            "cor": "50.366216, 30.453656",
            "categorie": "bank"
        },
        {
            "name_ua": "ТЦ Магелан",
            "name_en": "",
            "name_ru": "ТЦ Магелан",
            "cor": "50.368040, 30.458377",
            "categorie": "supermarket"
        },
        {
            "name_ua": "ТРЦ Республика",
            "name_en": "",
            "name_ru": "ТРЦ Республика",
            "cor": "50.373792, 30.446936",
            "categorie": "supermarket"
        },
        {
            "name_ua": "ТРЦ ParkSmall",
            "name_en": "",
            "name_ru": "ТРЦ ParkSmall",
            "cor": "50.385796, 30.390419",
            "categorie": "supermarket"
        },
        {
            "name_ua": "ТРЦ НЕБО",
            "name_en": "",
            "name_ru": "ТРЦ НЕБО",
            "cor": "50.373831, 30.374623",
            "categorie": "supermarket"
        },
        {
            "name_ua": "Гіпермаркет МегаМаркет",
            "name_en": "",
            "name_ru": "Гипермаркет МегаМаркет",
            "cor": "50.348250, 30.420752",
            "categorie": "supermarket"
        },
        {
            "name_ua": "Супермаркет АТБ",
            "name_en": "",
            "name_ru": "Супермаркет АТБ",
            "cor": "50.353980, 30.432989",
            "categorie": "supermarket"
        },
        {
            "name_ua": "Супермаркет Novus",
            "name_en": "",
            "name_ru": "Супермаркет Novus",
            "cor": "50.380937, 30.382133",
            "categorie": "supermarket"
        },
        {
            "name_ua": "Супермаркет Ашан",
            "name_en": "",
            "name_ru": "Супермаркет Ашан",
            "cor": "50.368151, 30.457642",
            "categorie": "supermarket"
        },
        {
            "name_ua": "Магазин Продукти",
            "name_en": "",
            "name_ru": "Магазин Продукты",
            "cor": "50.360657, 30.411964",
            "categorie": "supermarket"
        },
        {
            "name_ua": "Магазин ЛотОк",
            "name_en": "",
            "name_ru": "Магазин ЛотОк",
            "cor": "50.355523, 30.405634",
            "categorie": "supermarket"
        },
        {
            "name_ua": "Продуктовий ринок Столичний",
            "name_en": "",
            "name_ru": "Продуктовый рынок Столичный",
            "cor": "50.382963, 30.431270",
            "categorie": "market"
        },
        {
            "name_ua": "Одеський ринок",
            "name_en": "",
            "name_ru": "Одесский рынок",
            "cor": "50.364398, 30.446533",
            "categorie": "market"
        },
        {
            "name_ua": "Нова лінія",
            "name_en": "",
            "name_ru": "Новая линия",
            "cor": "50.352785, 30.434348",
            "categorie": "builderMarket"
        },
        {
            "name_ua": "Епіцентр",
            "name_en": "",
            "name_ru": "Эпицентр",
            "cor": "50.376984, 30.444950",
            "categorie": "builderMarket"
        },
        {
            "name_ua": "Домосвіт",
            "name_en": "",
            "name_ru": "Домосвит",
            "cor": "50.370802, 30.378508",
            "categorie": "builderMarket"
        },
        {
            "name_ua": "Sport Life",
            "name_en": "Sport Life",
            "name_ru": "Sport Life",
            "cor": "50.353910, 30.432094",
            "categorie": "sport"
        },
        {
            "name_ua": "Euro Gym",
            "name_en": "Euro Gym",
            "name_ru": "Euro Gym",
            "cor": "50.377360, 30.379528",
            "categorie": "sport"
        },
        {
            "name_ua": "Конно-спортивний клуб",
            "name_en": "",
            "name_ru": "Конно-спортивный клуб",
            "cor": "50.377591, 30.458646",
            "categorie": "sport"
        },
        {
            "name_ua": "Дитяча амбулаторія",
            "name_en": "",
            "name_ru": "Детская амбулатория",
            "cor": "50.373075, 30.360497",
            "categorie": "hospital"
        },
        {
            "name_ua": "Поліклініка для дорослих",
            "name_en": "",
            "name_ru": "Поликлиника для взрослых",
            "cor": "50.391938, 30.381071",
            "categorie": "hospital"
        },
        {
            "name_ua": "Медичний центр Ami Clinic",
            "name_en": "",
            "name_ru": "Медицинский центр Ami Clinic",
            "cor": "50.378468, 30.378889",
            "categorie": "hospital"
        },
        {
            "name_ua": "Вишневська міська лікарня",
            "name_en": "",
            "name_ru": "Вишневская городская больница",
            "cor": "50.394472, 30.379601",
            "categorie": "hospital"
        },
        {
            "name_ua": "Пункт екстреної медичної допомоги",
            "name_en": "",
            "name_ru": "Пункт экстренной медицинской помощи",
            "cor": "50.343034, 30.421791",
            "categorie": "hospital"
        },
        {
            "name_ua": "Стоматологія \"Дент Лідер\"",
            "name_en": "",
            "name_ru": "Стоматология «Дент Лидер»",
            "cor": "50.358750, 30.396539",
            "categorie": "hospital"
        },
        {
            "name_ua": "Парк «Феофанія»",
            "name_en": "",
            "name_ru": "Парк «Феофания»",
            "cor": "50.340505, 30.487971",
            "categorie": "park"
        },
        {
            "name_ua": "ВДНГ",
            "name_en": "",
            "name_ru": "ВДНХ",
            "cor": "50.376986, 30.483168",
            "categorie": "park"
        },
        {
            "name_ua": "Ландшафтний парк «Камелія»",
            "name_en": "",
            "name_ru": "Ландшафтный парк «Камелия»",
            "cor": "50.386540, 30.391597",
            "categorie": "park"
        },
        {
            "name_ua": "Ресторанно-готельний комплекс «Золотий дуб»",
            "name_en": "",
            "name_ru": "Ресторанно-отельный комплекс «Золотой дуб»",
            "cor": "50.370128, 30.387954",
            "categorie": "cafe"
        },
        {
            "name_ua": "Ресторанно-готельний комплекс «Фортеця Гетьмана»",
            "name_en": "",
            "name_ru": "Ресторанно-отельный комплекс «Фортеця Гетьмана»",
            "cor": "50.355721, 30.434519",
            "categorie": "cafe"
        },
        {
            "name_ua": "Ресторан «Дід Мадрід»",
            "name_en": "",
            "name_ru": "Ресторан «Дід Мадрід»",
            "cor": "50.374162, 30.375256",
            "categorie": "cafe"
        },
        {
            "name_ua": "Кафе Trattoria",
            "name_en": "",
            "name_ru": "Кафе Trattoria",
            "cor": "50.347818, 30.421216",
            "categorie": "cafe"
        },
        {
            "name_ua": "Готельно-ресторанний комплекс Terra Nova",
            "name_en": "",
            "name_ru": "Отельно-ресторанный комплекс Terra Nova",
            "cor": "50.354045, 30.431954",
            "categorie": "cafe"
        },
        {
            "name_ua": "Кафе MustardBlue",
            "name_en": "",
            "name_ru": "Кафе MustardBlue",
            "cor": "50.361078, 30.412103",
            "categorie": "cafe"
        },
];
	// Создаём пустые масивы в которых будет храниться дальшейшая информация о маркерах

	var gmarkers1 = [];
	var markers1 = [];

		// настройка для смены языка проверяет адресную строку и в зависимости от выбраного языка подставляет нужный массив с данными
		var uri = window.location.href;
		var searchIndexRu = uri.search('/ru/');
		var searchIndexEn = uri.search('/en/');

	for (const key in jsonArrData) {
		if (jsonArrData.hasOwnProperty(key)) {
			const element = jsonArrData[key];
			markers1.push(addMapMark(element, 0))
		}
	}

	function addMapMark(obj, i) {
		const categorie = obj.categorie;
		let pos;
		let lan;
		let leg;
		//console.log(obj.name,obj.cor);
		if (obj.cor !== undefined) {
			pos = obj.cor.split(',');
			lan = pos[0];
			leg = pos[1];
		} else {
			pos = null;
			lan = null;
			leg = null;
		}
		let pathIcon;
		// let dirs = '/dist/assets/images/';
		let dirs = '/wp-content/themes/vernadsky/assets/images/';

		switch (categorie) {
			case 'child':
				pathIcon = dirs+'infrastructure/icon/point-child.svg';
				break;
			case 'school':
				pathIcon = dirs+'infrastructure/icon/point-school.svg';
				break;
			case 'supermarket':
				pathIcon = dirs+'infrastructure/icon/point-supermarket.svg';
				break;
			case 'hospital':
				pathIcon = dirs+'infrastructure/icon/point-hospital.svg';
				break;
			case 'metro':
				pathIcon = dirs+'infrastructure/icon/point-metro.svg';
				break;
			case 'cafe':
				pathIcon = dirs+'infrastructure/icon/point-cafe.svg';
				break;
			case 'sport':
				pathIcon = dirs+'infrastructure/icon/point-sport.svg';
				break;
			case 'park':
				pathIcon = dirs+'infrastructure/icon/point-park.svg';
				break;
			case 'np':
				pathIcon = dirs+'infrastructure/icon/point-np.svg';
				break;
			case 'bank':
				pathIcon = dirs+'infrastructure/icon/point-bank.svg';
				break;
			case 'trc':
				pathIcon = dirs+'infrastructure/icon/point-trc.svg';
				break;
			case 'main':
				pathIcon = dirs+'infrastructure/icon/point-jk.svg';
				break;
		
			default:
				pathIcon = dirs+'infrastructure/icon/point.svg';
				break;
		}
		const nameUA = obj.name_ua;
		const nameEN = obj.name_en;
		const nameRU = obj.name_ru;
		if (searchIndexRu > -1) {

			return [i, '', lan, leg, categorie, pathIcon, nameRU]
		} else if (searchIndexEn > -1) {
			
			return [i, '', lan, leg, categorie, pathIcon, nameEN]
		} else {
		
			return [i, '', lan, leg, categorie, pathIcon, nameUA]
		}
	}
	var infowindow = new google.maps.InfoWindow({
		content: '',
		maxWidth: 200
	});

	// Фильтрация, функция принимает в параметр  категорию из дата атрибута и сравнивает, используя метод гугл API setMap скрывает и показывает 
	filterMarkers = function (category) {
		for (i = 0; i < markers1.length; i++) {
			marker = gmarkers1[i];
			if (marker.category == category || category == 'main' || marker.category  == 'main') {
				marker.setMap(map);
				// marker.setAnimation(google.maps.Animation.DROP);
			} else {
				marker.setMap(null)
			}
		}
	};

	// функция вешает обработчик клика на все элементы списка и вызывает функцию filterMarkers передавая в нее значение дата атрибута
	var markItems = document.querySelectorAll('.js-mark-item');

	for (var i = 0; i < markItems.length; i++) {
		markItems[i].addEventListener('click', function () {
			markItems.forEach(function (item, i) {
				if (item.classList.contains('mark-map--active')) {
					item.classList.remove('mark-map--active');
				}
			});

			this.classList.add('mark-map--active');
			var category = this.dataset.category;
			filterMarkers(category);
		});
	}

	// Функция добавления маркеров, берёт значение из масива вносит их в переменные и используя метод гугл API new google.maps.Marker клепает маркера
	function addMarker(marker) {

		var category = marker[4];
		var title = marker[1];
		var pos = new google.maps.LatLng(marker[2], marker[3]);
		var content = "<p class='content'>" + marker[6] + "</p>";
		var markerIcon = {
			url: marker[5]
		};
		marker1 = new google.maps.Marker({
			title: title,
			position: pos,
			category: category,
			map: map,
			icon: markerIcon,
			// animation: google.maps.Animation.DROP,
		});
		gmarkers1.push(marker1);
		// Marker click listener
		google.maps.event.addListener(marker1, 'click', (function (marker1, content) {
			return function () {
				infowindow.setContent(content); // установка нужного контента в всплывайку
				infowindow.open(map, marker1); // открытие нужного окна
				map.panTo(this.getPosition()); // установка центра карты в координатах кликнутой иконки
			}
		})(marker1, content));
	}

var styleMap = [
    {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "saturation": -100
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "saturation": -60
            },
            {
                "lightness": 10
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "saturation": -60
            },
            {
                "lightness": 60
            },
            {
                "color": "#e9e7e4"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "saturation": -100
            },
            {
                "lightness": 60
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [
            {
                "color": "#802728"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#d5e09d"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#6f9543"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#6f9543"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "color": "#ff0000"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "saturation": -100
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "weight": "1.00"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#ffffff"
            },
            {
                "weight": "2.21"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "invert_lightness": true
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text",
        "stylers": [
            {
                "color": "#a7a9ac"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#fffefe"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#d9d7d6"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "saturation": -100
            },
            {
                "lightness": 60
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "saturation": -10
            },
            {
                "lightness": 30
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#7db3ba"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "weight": "8.21"
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "color": "#f4f3f3"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "lightness": "73"
            },
            {
                "saturation": "0"
            },
            {
                "gamma": "1"
            },
            {
                "color": "#cdf2f7"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#7db3ba"
            },
            {
                "weight": "3.49"
            },
            {
                "lightness": "0"
            },
            {
                "gamma": "1"
            }
        ]
    }
];

	// init карты все очевидно 
	var map = new google.maps.Map(document.getElementById('map'), {
		center: {
			lat: 50.361568,
			lng: 30.410603
		},
		zoom: 15,
		disableDefaultUI: true,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	});

	map.setOptions({
		styles: styleMap
	});
	for (i = 0; i < markers1.length; i++) {
		addMarker(markers1[i]);
	}

};