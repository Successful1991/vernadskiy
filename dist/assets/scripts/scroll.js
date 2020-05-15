class Smooth {
  constructor({element = window, strength=20, acceleration = 1.1,deceleration = 0.95, ignore = ''}={}) {
    this.self = this;
    this.element = element;
    this.running = false;
    this.ignore = ignore;
    this.currentSlide = 0;
    this.elementsSlide = $('.js-wb');
    this.element.addEventListener('wheel', this.scrollHandler.bind(this));
    this.element.addEventListener('mousewheel', this.scrollHandler.bind(this));
    this.element.addEventListener('touchstart', e => this.mouse = e.changedTouches[0].clientY);
    this.element.addEventListener('touchmove', this.scrollHandler.bind(this));
    this.scroll = this.scroll.bind(this);
    this.mouse = 0;

    this.elementsSlide[0].classList.add('wb-show');
    document.addEventListener('mousedown',function (e) {
      function clickedOnScrollbar(mouseX) {
        if(document.documentElement.clientWidth <= mouseX){return true}
        return false;
      }
      if( clickedOnScrollbar(e.clientX) ) this.running = false;
    }.bind(this));

    window.addEventListener('DOMContentLoaded', disableScroll);
  };

  scrollHandler(e) {
    var scroll = true;
    if( this.ignore && $(e.path).closest(this.ignore).length !== 0 || window.isKeyDown()) {
      scroll = false;
    }
    if (!this.running && scroll) {
      console.log('touchstart', e.type);
      $('.footer').removeClass('active');
      let mouseY;
      if(e.changedTouches && e.changedTouches[0].clientY) mouseY = e.changedTouches[0].clientY;
        $('.js-info').html( `${mouseY} - ${this.mouse}`);

      if( this.currentSlide > 0 && (e.deltaY < 0 || mouseY > this.mouse + 15 )) {
        this.running = 1;
        this.mouse = mouseY;
        this.scroll(this.currentSlide-1, 'up');
      } else if( this.currentSlide < this.elementsSlide.length - 1 && (e.deltaY > 0 || mouseY < this.mouse - 15) ) {
          if(this.currentSlide === this.elementsSlide.length - 2) {
            $('.footer').addClass('active');
          }
        this.running = 1;
        this.mouse = mouseY;
        this.scroll(this.currentSlide+1, 'down');
      } else {
        this.running = false;
      }
      // this.currentDistance = e.deltaY;
      // this.scroll();
    }
  }

  scroll(slide, cl) {
    if(slide === 0){
      $('.header').addClass('no-scroll');
    } else {
      $('.header').removeClass('no-scroll');
    }
    this.elementsSlide[slide].classList.add('wb-show');

    if(cl === 'up'){
      this.elementsSlide[this.currentSlide].classList.remove('wb-animate');
      this.elementsSlide[this.currentSlide].classList.add('wb-animate-end');
    } else if (cl === 'down'){
      this.elementsSlide[this.currentSlide].classList.remove('wb-animate-end');
      this.elementsSlide[slide].classList.add('wb-animate');
    }
    setTimeout(e => {
      this.running = false;
      this.elementsSlide[this.currentSlide].classList.remove('wb-show','wb-animate','wb-animate-end');
      this.currentSlide = slide;
    },2000)
  }

  key(){
    var keyDown = false;
    window.isKeyDown = function(){return keyDown;};
    var addEvent = function(type, handler){
      window.document.addEventListener(type, function(){
        event = (event) ? event : window.event;
        var keyCode=(event.charCode) ? event.charCode : event.keyCode;
        if(keyCode === 18 || keyCode === 17) {
          keyDown= handler;
        }
      }, false)
    };
    addEvent('keydown',true);
    addEvent('keyup',false);
  }
};

var keys = {37: 1, 38: 1, 39: 1, 40: 1};
var body = new Smooth({ignore:'.map4'});
body.key();

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
    e.preventDefault();
  e.returnValue = false;
};

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
};

function disableScroll() {
  if (window.addEventListener) // older FF
    window.addEventListener('DOMMouseScroll', preventDefault, false);
  document.addEventListener('wheel', preventDefault, {passive: false}); // Disable scrolling in Chrome
  document.addEventListener('touchmove', preventDefault, {passive: false});
  window.onwheel = preventDefault; // modern standard
  window.isScrollEnabled = false; // modern standard
  window.scrollEnabled = false; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
};

function enableScroll() {
  if (window.removeEventListener)
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
  document.removeEventListener('wheel', preventDefault, {passive: false}); // Enable scrolling in Chrome
  window.onmousewheel = document.onmousewheel = null;
  window.onwheel = null;
  window.ontouchmove = null;
  document.onkeydown = null;
};






// <a href="#" onclick="this.innerHTML=isKeyDown()?('кнопка нажата: '+isKeyDown()):'кнопка не нажата';return false;">кнопка не нажата</a>

