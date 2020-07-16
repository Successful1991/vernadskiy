// import $ from 'jquery'
// import slick from 'slick-carousel'

function init() {
    // sliders init start

    // $('.js-mouse-scroll').on('click',function (e) {
    //     //     e.preventDefault();
    //     //     $("html").animate({scrollTop: $('.main-first-screen').height()}, 600)
    //     // });

    $('.js-documentation__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        // autoplay: true,
        autoplaySpeed: 2000,
        // arrows: true,
        prevArrow: '<div class="documentation__arrow documentation__arrow-left"><svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path fill-rule="evenodd" clip-rule="evenodd" d="M21 11.7291C16.4177 11.7291 11.8353 11.7291 7.25298 11.7291C8.8043 13.2804 10.3556 14.8317 11.9069 16.3831C11.1432 17.1706 10.3556 17.9344 9.59189 18.6981C6.72792 15.8341 3.86396 12.9702 1 10.1062C3.86396 7.21838 6.72793 4.35442 9.59189 1.49045C10.3556 2.25418 11.1432 3.04177 11.9069 3.80549C10.3556 5.3568 8.8043 6.90811 7.25298 8.45943C11.8353 8.45943 16.4177 8.45943 21 8.45943C21 9.55728 21 10.6551 21 11.7291Z" stroke="#323131"/>\n' +
            '</svg>',
        nextArrow: '<div class="documentation__arrow documentation__arrow-right"><svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path fill-rule="evenodd" clip-rule="evenodd" d="M21 11.7291C16.4177 11.7291 11.8353 11.7291 7.25298 11.7291C8.8043 13.2804 10.3556 14.8317 11.9069 16.3831C11.1432 17.1706 10.3556 17.9344 9.59189 18.6981C6.72792 15.8341 3.86396 12.9702 1 10.1062C3.86396 7.21838 6.72793 4.35442 9.59189 1.49045C10.3556 2.25418 11.1432 3.04177 11.9069 3.80549C10.3556 5.3568 8.8043 6.90811 7.25298 8.45943C11.8353 8.45943 16.4177 8.45943 21 8.45943C21 9.55728 21 10.6551 21 11.7291Z" stroke="#323131"/>\n' +
            '</svg>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
        ]
    });
    $('.js-single-news__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 2000,
        // arrows: true,
        prevArrow: '<div class="single-news__arrow single-news__arrow-left"><svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path fill-rule="evenodd" clip-rule="evenodd" d="M21 11.7291C16.4177 11.7291 11.8353 11.7291 7.25298 11.7291C8.8043 13.2804 10.3556 14.8317 11.9069 16.3831C11.1432 17.1706 10.3556 17.9344 9.59189 18.6981C6.72792 15.8341 3.86396 12.9702 1 10.1062C3.86396 7.21838 6.72793 4.35442 9.59189 1.49045C10.3556 2.25418 11.1432 3.04177 11.9069 3.80549C10.3556 5.3568 8.8043 6.90811 7.25298 8.45943C11.8353 8.45943 16.4177 8.45943 21 8.45943C21 9.55728 21 10.6551 21 11.7291Z" stroke="#323131"/>\n' +
            '</svg>',
        nextArrow: '<div class="single-news__arrow single-news__arrow-right"><svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path fill-rule="evenodd" clip-rule="evenodd" d="M21 11.7291C16.4177 11.7291 11.8353 11.7291 7.25298 11.7291C8.8043 13.2804 10.3556 14.8317 11.9069 16.3831C11.1432 17.1706 10.3556 17.9344 9.59189 18.6981C6.72792 15.8341 3.86396 12.9702 1 10.1062C3.86396 7.21838 6.72793 4.35442 9.59189 1.49045C10.3556 2.25418 11.1432 3.04177 11.9069 3.80549C10.3556 5.3568 8.8043 6.90811 7.25298 8.45943C11.8353 8.45943 16.4177 8.45943 21 8.45943C21 9.55728 21 10.6551 21 11.7291Z" stroke="#323131"/>\n' +
            '</svg>',
    });
    $('.js-webcam__slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 2000,
        // arrows: true,
        prevArrow: '<div class="webcam__arrow webcam__arrow-left"><svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path fill-rule="evenodd" clip-rule="evenodd" d="M21 11.7291C16.4177 11.7291 11.8353 11.7291 7.25298 11.7291C8.8043 13.2804 10.3556 14.8317 11.9069 16.3831C11.1432 17.1706 10.3556 17.9344 9.59189 18.6981C6.72792 15.8341 3.86396 12.9702 1 10.1062C3.86396 7.21838 6.72793 4.35442 9.59189 1.49045C10.3556 2.25418 11.1432 3.04177 11.9069 3.80549C10.3556 5.3568 8.8043 6.90811 7.25298 8.45943C11.8353 8.45943 16.4177 8.45943 21 8.45943C21 9.55728 21 10.6551 21 11.7291Z" stroke="#323131"/>\n' +
            '</svg>',
        nextArrow: '<div class="webcam__arrow webcam__arrow-right"><svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path fill-rule="evenodd" clip-rule="evenodd" d="M21 11.7291C16.4177 11.7291 11.8353 11.7291 7.25298 11.7291C8.8043 13.2804 10.3556 14.8317 11.9069 16.3831C11.1432 17.1706 10.3556 17.9344 9.59189 18.6981C6.72792 15.8341 3.86396 12.9702 1 10.1062C3.86396 7.21838 6.72793 4.35442 9.59189 1.49045C10.3556 2.25418 11.1432 3.04177 11.9069 3.80549C10.3556 5.3568 8.8043 6.90811 7.25298 8.45943C11.8353 8.45943 16.4177 8.45943 21 8.45943C21 9.55728 21 10.6551 21 11.7291Z" stroke="#323131"/>\n' +
            '</svg>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
        ]
    });
    $('.js-gallery__slider').on('init', function (event, slick, currentSlide, nextSlide) {
        console.log('init');
        console.log(slick);
        $('.js-gallery__amount-slide-all').html( slick.slideCount);
        $('.js-gallery__amount-slide-current').html(slick.currentSlide+1);
    });
    $('.js-gallery__slider').slick({
        slidesToShow: 1,
        // slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        variableWidth: true,
        prevArrow: '<div class="gallery__arrow gallery__arrow-left"><svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path fill-rule="evenodd" clip-rule="evenodd" d="M21 11.7291C16.4177 11.7291 11.8353 11.7291 7.25298 11.7291C8.8043 13.2804 10.3556 14.8317 11.9069 16.3831C11.1432 17.1706 10.3556 17.9344 9.59189 18.6981C6.72792 15.8341 3.86396 12.9702 1 10.1062C3.86396 7.21838 6.72793 4.35442 9.59189 1.49045C10.3556 2.25418 11.1432 3.04177 11.9069 3.80549C10.3556 5.3568 8.8043 6.90811 7.25298 8.45943C11.8353 8.45943 16.4177 8.45943 21 8.45943C21 9.55728 21 10.6551 21 11.7291Z" stroke="#323131"/>\n' +
            '</svg>',
        nextArrow: '<div class="gallery__arrow gallery__arrow-right"><svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path fill-rule="evenodd" clip-rule="evenodd" d="M21 11.7291C16.4177 11.7291 11.8353 11.7291 7.25298 11.7291C8.8043 13.2804 10.3556 14.8317 11.9069 16.3831C11.1432 17.1706 10.3556 17.9344 9.59189 18.6981C6.72792 15.8341 3.86396 12.9702 1 10.1062C3.86396 7.21838 6.72793 4.35442 9.59189 1.49045C10.3556 2.25418 11.1432 3.04177 11.9069 3.80549C10.3556 5.3568 8.8043 6.90811 7.25298 8.45943C11.8353 8.45943 16.4177 8.45943 21 8.45943C21 9.55728 21 10.6551 21 11.7291Z" stroke="#323131"/>\n' +
            '</svg>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
        ]
    });

    $('.js-gallery__slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
        $('.js-gallery__amount-slide-current').html(currentSlide + 1);
    });

    // $('body').on('click','.js-call',function () {
    //   $('.js-call__popup').css({'transform':'scale(1, 1)'});
    // });


    // $('.js-form__close').on('click',function () {
    //   $('.js-call__popup').css({'transform':'scale(0.5,0)'});
    // });
    //
    // $('.js-video__popup-close').on('click',function () {
    //     $('.js-video__popup').removeClass('active');
    // });
    // setTimeout(function () {
    //     // $('.wb-1').addClass('active');
    //     $('.preloader').css('display','none');
    // },0);
    $('.js-burger').on('click', e => {
        $('.js-menu').addClass('menu-active');
    });
    $('.js-close').on('click', e => {
        $('.js-menu').removeClass('menu-active');
    })
}



function initMap() {
  var contentTranslate = [{
    ru: "<p class='content'>Украина, c. Гатне, ул. Свободы 1</p>",
    ua: "<p class='content'>Україна, c. Гатне, вул. Свободи, 1</p>"
  }];
  var languageDetector = () => {
    if (window.location.pathname.match(/\/ru\//)) {
      return 'ru';
    } else {
      return 'ua';
    }
  };
  var uluru = {
    lat: 50.360000,
    lng: 30.409135
  };
  var map = new google.maps.Map(document.getElementById('js-contact__map'), {
    zoom: 13,
    center: uluru,
    streetViewControl: false,
    // disableDefaultUI: true,
  });


  var content = contentTranslate[0][languageDetector()];
  // var content = "<p class='content'>Украина, г. Киев, ул. Ильинская 12</p>";
  var infowindow = new google.maps.InfoWindow({
    content: '',
    maxWidth: 500
  });

  var styleMap = [{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"on"},{"saturation":-100},{"lightness":20}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"visibility":"simplified"},{"saturation":-60},{"lightness":10}]},{"featureType":"landscape.natural","elementType":"all","stylers":[{"visibility":"on"},{"saturation":-60},{"lightness":60},{"color":"#e9e7e4"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"},{"saturation":-100},{"lightness":60}]},{"featureType":"poi","elementType":"labels.text","stylers":[{"color":"#802728"},{"visibility":"on"}]},{"featureType":"poi.park","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#d5e09d"}]},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"poi.park","elementType":"labels.text","stylers":[{"visibility":"on"},{"color":"#6f9543"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"color":"#6f9543"}]},{"featureType":"poi.park","elementType":"labels.text.stroke","stylers":[{"visibility":"off"},{"color":"#ff0000"}]},{"featureType":"poi.park","elementType":"labels.icon","stylers":[{"visibility":"simplified"}]},{"featureType":"road","elementType":"all","stylers":[{"visibility":"on"},{"saturation":-100},{"lightness":40}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"weight":"1.00"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"weight":"2.21"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"invert_lightness":true},{"visibility":"off"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"labels.text","stylers":[{"color":"#a7a9ac"},{"visibility":"on"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"visibility":"on"}]},{"featureType":"road.highway","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#fffefe"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#d9d7d6"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"},{"saturation":-100},{"lightness":60}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"saturation":-10},{"lightness":30}]},{"featureType":"water","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#7db3ba"},{"visibility":"on"}]},{"featureType":"water","elementType":"geometry.stroke","stylers":[{"weight":"8.21"},{"visibility":"off"}]},{"featureType":"water","elementType":"labels.text","stylers":[{"visibility":"simplified"},{"color":"#f4f3f3"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"lightness":"73"},{"saturation":"0"},{"gamma":"1"},{"color":"#cdf2f7"},{"visibility":"on"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#7db3ba"},{"weight":"3.49"},{"lightness":"0"},{"gamma":"1"}]}];
  map.setOptions({
    styles: styleMap
  });

  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(uluru.lat, uluru.lng),
    map: map,
    icon: new google.maps.MarkerImage('./assets/images/icon/map__marker.svg',
      new google.maps.Size(90, 116),
      new google.maps.Point(0, 0))
  });

  google.maps.event.addListener(marker, 'click', (function (marker, content) {
    return function () {
      infowindow.setContent(content); // установка нужного контента в всплывайку
      infowindow.open(map, marker); // открытие нужного окна
      map.panTo(this.getPosition()); // установка центра карты в координатах кликнутой иконки
    }
  })(marker, content));


  var newlong = marker.getPosition().lng() + (-0.00283 * Math.pow(2, (17 - map.getZoom())));
  var newLat = marker.getPosition().lat() + (0.00013 * Math.pow(2, (17 - map.getZoom())));
  google.maps.event.addListener(map, "zoom_changed", function () {
    newlong = marker.getPosition().lng() + (-0.00283 * Math.pow(2, (17 - map.getZoom())));
    newLat = marker.getPosition().lat() + (0.00013 * Math.pow(2, (17 - map.getZoom())));
  });
}

function tabs(e) {
    const type = $(e.target).data('tab-button');
    const el = $(`.js-apart__tab--content [data-tab-id =${type}]` );
    if(el.length > 0) {
        $('.tabs--active').removeClass('tabs--active');
        $(e.target).addClass('tabs--active');
        $(el[0]).addClass('tabs--active');
    }
}

document.addEventListener('DOMContentLoaded',function () {
    init();
});



