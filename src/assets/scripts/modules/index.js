// import $ from 'jquery'
// import slick from 'slick-carousel'

function init() {
    // sliders init start

    $('.js-mouse-scroll').on('click',function (e) {
        e.preventDefault();
        $("html").animate({scrollTop: $('.main-first-screen').height()}, 600)
    });

    $('body').on('click','.js-call',function () {
      $('.js-call__popup').css({'transform':'scale(1, 1)'});
    });


    $('.js-form__close').on('click',function () {
      $('.js-call__popup').css({'transform':'scale(0.5,0)'});
    });

    $('.js-video__popup-close').on('click',function () {
        $('.js-video__popup').removeClass('active');
    });
    setTimeout(function () {
        // $('.wb-1').addClass('active');
        $('.preloader').css('display','none');
    },0);
    // animateCanvas();
}

function animateCanvas() {
    let ctx = $('.wb-2__fishka__canvas')[0].getContext('2d');
    ctx.canvas.width = 388;
    ctx.canvas.height = 352;
    let img = new Image();   // Создает новый элемент изображения
    img.src = '/assets/images/main/img1.jpg';
    img.onload = function() {
        ctx.drawImage(this, -100, 0,1225, 730);
    };

    let threePath = 'M387.875 204.446H304.164C304.164 204.446 328.231 176.194 340.264 162.068  C346.543 154.743 353.344 147.941 359.099 140.094C362.238 135.908 364.854 130.676 363.808 125.444C362.762 120.736 359.623 118.12 357.007 116.027C353.344 113.411 349.159 112.364 344.973 112.364C332.94 112.364 322.999 122.305 322.999 134.338H304.687C304.687 123.875 308.873 113.411 316.198 106.086C324.045 98.7615 333.986 94.5759 344.45 94.5759C352.298 94.5759 360.669 97.1919 366.947 101.377C374.272 106.609 379.504 113.934 381.073 121.782C382.643 129.63 381.597 137.478 377.411 144.802C373.226 152.65 366.947 158.929 361.192 165.73L342.357 187.704H387.875V204.446Z';
    let twoPath = 'M279.574 143.747  C286.375 150.549 290.038 159.966 290.038 169.384C290.038 178.801 286.375 188.219 279.574 195.02C272.772 201.822 263.355 205.484 253.938 205.484C244.52 205.484 235.103 201.822 228.301 195.02C221.5 188.219 217.837 179.324 217.837 169.384V168.337H233.533V169.384C233.533 180.894 242.951 189.788 253.938 189.788C264.925 189.788 274.342 180.371 274.342 169.384C274.342 158.397 264.925 148.979 253.938 148.979C250.275 148.979 246.613 150.026 243.474 151.595L233.533 143.224L259.169 111.309H217.314V95.6137H292.131L260.739 134.33C268.064 135.376 274.342 139.039 279.574 143.747Z';
    let sleshPath = 'M66.112 0.924075 L209.467 286.587 L176.505 351.986 L0.713074 0.924075H66.112Z';
    let pointPath = 'M317.244 45.1903L291.084 0.718964H342.88L317.244 45.1903Z';
    let two = new Path2D(twoPath);

    let three = new Path2D(threePath);

    let slesh = new Path2D(sleshPath);

    let point = new Path2D(pointPath);

    two.addPath(three);
    two.addPath(slesh);
    two.addPath(point);
    ctx.clip(two);
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

