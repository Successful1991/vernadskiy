class Smooth {
  constructor({element = window, strength=20, acceleration = 1.1,deceleration = 0.95, ignore = ''}={}) {
    this.self = this;
    this.element = element;
    // this.distance = strength;
    // this.acceleration = acceleration;
    // this.deceleration = deceleration;
    this.running = false;
    this.ignore = ignore;
    this.currentSlide = 0;
    this.elementsSlide = $('.js-wb');
    this.element.addEventListener('wheel', this.scrollHandler.bind(this));
    this.element.addEventListener('mousewheel', this.scrollHandler.bind(this));
    this.scroll = this.scroll.bind(this);

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
      console.log('dsd', e.deltaY);
      if(e.deltaY < 0 && this.currentSlide > 0) {
        this.running = false;
        this.scroll(this.currentSlide-1, 'up');
      } else if(e.deltaY > 0 && this.currentSlide < this.elementsSlide.length - 1) {
        this.running = 1;
        this.scroll(this.currentSlide+1, 'down');
      }
      // this.currentDistance = e.deltaY;
      // this.scroll();
    }
  }

  scroll(slide, cl) {
    console.log('dsd', slide);
    // this.elementsSlide[slide].classList.add(cl);
    this.elementsSlide[slide].classList.add('wb-active');

    if(cl === 'up'){
      this.elementsSlide[this.currentSlide].classList.add('wb-active-end');
      setTimeout(e => {
        this.elementsSlide[slide].classList.add('wb-active');
      },3000)


    } else if (cl === 'down'){
      this.elementsSlide[slide].classList.add('wb-active');

    }
    setTimeout(e => {
      this.running = false;
      this.elementsSlide[this.currentSlide].classList.remove('wb-active');
      this.elementsSlide[this.currentSlide].classList.remove('wb-active-end');
      this.currentSlide = slide;
    },2000)
    // if (this.running) {
    //   Math.abs(this.currentDistance) >= Math.abs(this.distance) ? this.isDistanceAsc = false : 1;
    //   this.top += this.currentDistance;
    //   this.element.scrollTo(0, this.top);
    //
    //   this.currentDistance *= this.isDistanceAsc === true ? this.acceleration : this.deceleration;
    //   ((Math.abs(this.currentDistance) < 0.1 ) && this.isDistanceAsc === false) ||
    //   this.top > ( $(document).height() - document.documentElement.clientHeight) ||
    //   this.top <= 0 ? this.running = false : 1;
    //
    //   requestAnimationFrame(this.scroll);
    // }
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
  window.onwheel = preventDefault; // modern standard
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

