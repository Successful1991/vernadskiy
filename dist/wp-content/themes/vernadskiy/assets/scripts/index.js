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
    });

     $("#form-tel").mask("(999)999-9999");

    $('.js-form__submit').on('click',function(e) {
        e.preventDefault();
        ajax_form(e,"POST","/wp-admin/admin-ajax.php");
    });

    $('.js-construction').on('click' , '.construction__element', function (e) {
        let current = this.dataset.num - 1;
        $.ajax({
            url:'/wp-admin/admin-ajax.php',
            method: 'POST',
            data: {action:'construction',id:$(this).data('id')},
            success: function (response) {
                $('.construction__popup').html('').append(response);
                $('.construction__popup a').magnificPopup({
                    type: 'image',
                    gallery:{
                        enabled:true
                    },
                }).magnificPopup('open',current);
            }
        })
    })
}


function ajax_form(e,methods,url) {
    event.preventDefault();
    var form = $(e.target).closest("form");
    var str = form.serialize();
    str += '&action=app';
    var errors = false; // по умолчанию ошибок в форме нет
    $(form).find('.js__form__input ').each(function() {
        errors = validateForm(this);
    });
    $(".js__form__input").on("mouseup",delMessageErrorForm);

    if (!errors) {
        $.ajax({
            method: methods,
            url: url,
            data: str,
            beforeSend: function() {
                $('.form__loader').addClass('active');
                $(form).find('button > span').text('Отправка...') // замена текста в кнопке при отправке
            },
            error: function() {
                $('.form__loader').removeClass('active');
                $(form).find('button > span').text('Ошибка отправки!'); // замена текста в кнопке при отправке в случае
            }
        })
            .done(function(data) {
                var data = JSON.parse(data);
                // success();
                successSendMesage();
                if (data.result) {
                    //$(e).find('.result-text').removeClass('error');
                    $(form)[0].reset();
                } else {
                    //$(e).find('.result-text').addClass('error');
                }
                if (data.message) {
                    $(form).find('.js-result-text').fadeIn();
                    $(form).find('.js-result-text').html(data.message);
                    setTimeout(function() {
                        // $('.form__loader').removeClass('active');
                        $(e).find('.js-result-text').fadeOut();
                    },2000)
                }
            });
    } else {
        $('.form__loader').removeClass('active');
    }
}

function validateForm(self) {
    let elem = $(self);
    var regular = new RegExp('^[a-zA-Zа-яА-Я\'][a-zA-Zа-яА-Я-\' ]+[a-zA-Zа-яА-Я\']?$');
    var regularTel = new RegExp(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})?([ .-]?)([0-9]{2})?([ .-]?)([0-9]{2})/);
    console.log(elem.val());
    console.log(regularTel.test(elem.val()));
    if ((elem.attr('type') === 'tel' && (elem.val().length < 6 || !regularTel.test(elem.val()) ) )  ||
        (elem.attr('type') !== 'tel' && $.trim(elem.val()).length < 2) ||
        (elem.attr('type') !== 'tel' && !regular.test(elem.val()))) {
        var errorMessage = $(self).data("errormessage"); // добавляем в input сообщение об ошибке из dataAttr и class
        //console.log( errorMessage);
        elem.next().text(errorMessage);
        elem.addClass('js-no-valid');
        return true
    }
    return false
}

function delMessageErrorForm() {
    var defaultMessage = $(this).next().data("defaultmessage"); // при клике на input убираем сообщение и class
    $(this).next().text('');
    $(this).removeClass('js-no-valid');
}

function successSendMesage() {
    $('.send__success').addClass('.active');
    setTimeout(function() {
        $('.popup-wrap').removeClass('active');
        $('.send__success').removeClass('.active');
    },2000);
}

// function initMap() {
//   var contentTranslate = [{
//     ru: "<p class='content'>Украина, c. Гатне, ул. Свободы 1</p>",
//     ua: "<p class='content'>Україна, c. Гатне, вул. Свободи, 1</p>"
//   }];
//   var languageDetector = () => {
//     if (window.location.pathname.match(/\/ru\//)) {
//       return 'ru';
//     } else {
//       return 'ua';
//     }
//   };
//   var uluru = {
//     lat: 50.360000,
//     lng: 30.409135
//   };
//   var map = new google.maps.Map(document.getElementById('js-contact__map'), {
//     zoom: 13,
//     center: uluru,
//     streetViewControl: false,
//     // disableDefaultUI: true,
//   });
//
//
//   var content = contentTranslate[0][languageDetector()];
//   // var content = "<p class='content'>Украина, г. Киев, ул. Ильинская 12</p>";
//   var infowindow = new google.maps.InfoWindow({
//     content: '',
//     maxWidth: 500
//   });
//
//   var styleMap = [{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"on"},{"saturation":-100},{"lightness":20}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"visibility":"simplified"},{"saturation":-60},{"lightness":10}]},{"featureType":"landscape.natural","elementType":"all","stylers":[{"visibility":"on"},{"saturation":-60},{"lightness":60},{"color":"#e9e7e4"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"},{"saturation":-100},{"lightness":60}]},{"featureType":"poi","elementType":"labels.text","stylers":[{"color":"#802728"},{"visibility":"on"}]},{"featureType":"poi.park","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#d5e09d"}]},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"poi.park","elementType":"labels.text","stylers":[{"visibility":"on"},{"color":"#6f9543"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"color":"#6f9543"}]},{"featureType":"poi.park","elementType":"labels.text.stroke","stylers":[{"visibility":"off"},{"color":"#ff0000"}]},{"featureType":"poi.park","elementType":"labels.icon","stylers":[{"visibility":"simplified"}]},{"featureType":"road","elementType":"all","stylers":[{"visibility":"on"},{"saturation":-100},{"lightness":40}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"weight":"1.00"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"weight":"2.21"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"invert_lightness":true},{"visibility":"off"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"labels.text","stylers":[{"color":"#a7a9ac"},{"visibility":"on"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"visibility":"on"}]},{"featureType":"road.highway","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#fffefe"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#d9d7d6"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"},{"saturation":-100},{"lightness":60}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"saturation":-10},{"lightness":30}]},{"featureType":"water","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#7db3ba"},{"visibility":"on"}]},{"featureType":"water","elementType":"geometry.stroke","stylers":[{"weight":"8.21"},{"visibility":"off"}]},{"featureType":"water","elementType":"labels.text","stylers":[{"visibility":"simplified"},{"color":"#f4f3f3"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"lightness":"73"},{"saturation":"0"},{"gamma":"1"},{"color":"#cdf2f7"},{"visibility":"on"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#7db3ba"},{"weight":"3.49"},{"lightness":"0"},{"gamma":"1"}]}];
//   map.setOptions({
//     styles: styleMap
//   });
//
//   var marker = new google.maps.Marker({
//     position: new google.maps.LatLng(uluru.lat, uluru.lng),
//     map: map,
//     icon: new google.maps.MarkerImage('./assets/images/icon/map__marker.svg',
//       new google.maps.Size(90, 116),
//       new google.maps.Point(0, 0))
//   });
//
//   google.maps.event.addListener(marker, 'click', (function (marker, content) {
//     return function () {
//       infowindow.setContent(content); // установка нужного контента в всплывайку
//       infowindow.open(map, marker); // открытие нужного окна
//       map.panTo(this.getPosition()); // установка центра карты в координатах кликнутой иконки
//     }
//   })(marker, content));
//
//
//   var newlong = marker.getPosition().lng() + (-0.00283 * Math.pow(2, (17 - map.getZoom())));
//   var newLat = marker.getPosition().lat() + (0.00013 * Math.pow(2, (17 - map.getZoom())));
//   google.maps.event.addListener(map, "zoom_changed", function () {
//     newlong = marker.getPosition().lng() + (-0.00283 * Math.pow(2, (17 - map.getZoom())));
//     newLat = marker.getPosition().lat() + (0.00013 * Math.pow(2, (17 - map.getZoom())));
//   });
// }


document.addEventListener('DOMContentLoaded',function () {
    init();
});



