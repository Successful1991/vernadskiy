
function animatePosSvgImage(e, an) {
    let y = e.pageY;
    let x = e.pageX;
    let index = e.target.dataset.index;
    let resY = (an[index].imageH / an[index].wrapH) * 0.4 * ( y - an[index].wrapY) * -1 * an[index].svgH / an[index].wrapH;
    let resX = (an[index].imageW / an[index].wrapW) * 0.4 * (x - an[index].wrapX) * -1 * an[index].svgW / an[index].wrapW;
    an[index].image[0].setAttribute("x", resX);
    an[index].image[0].setAttribute("y", resY );
}
function resetPosSvgImage(e, an){
    let image = $(e.target).siblings('svg').find('image');
    let index = image[0].dataset.index;
    image[0].style.transition = 'x 0.35s cubic-bezier(.52,.27,.35,.97), y 0.3s cubic-bezier(.52,.27,.35,.97)';
    an[index].image[0].setAttribute("x", an[index].position.x);
    an[index].image[0].setAttribute("y", an[index].position.y );
    setTimeout(function () {
        image[0].style.transition = null;
    },400)
}

document.addEventListener('DOMContentLoaded',function () {
    let fishka = document.querySelectorAll('.js-wb__fishka-event');
    let animates = {};
    if(fishka.length > 0){
        fishka.forEach(function (el) {
            animates[ el.dataset.index] = {};
            animates[ el.dataset.index].wrap = $(el);
            animates[ el.dataset.index].wrapX = animates[ el.dataset.index].wrap.offset().left;
            animates[ el.dataset.index].wrapY = animates[ el.dataset.index].wrap.offset().top;
            animates[ el.dataset.index].wrapH = animates[ el.dataset.index].wrap.height();
            animates[ el.dataset.index].wrapW = animates[ el.dataset.index].wrap.width();

            animates[ el.dataset.index].svg = animates[ el.dataset.index].wrap.siblings('svg');
            animates[ el.dataset.index].svgH = animates[ el.dataset.index].svg.height();
            animates[ el.dataset.index].svgW = animates[ el.dataset.index].svg.width();

            animates[ el.dataset.index].image = animates[ el.dataset.index].svg.find('image');
            animates[ el.dataset.index].imageH = animates[ el.dataset.index].image.height() ;
            animates[ el.dataset.index].imageW = animates[ el.dataset.index].image.width();
            animates[ el.dataset.index].position = {
                x: animates[ el.dataset.index].image[0].x.baseVal.value,
                y: animates[ el.dataset.index].image[0].y.baseVal.value
            };
            el.addEventListener('mousemove', e => animatePosSvgImage(e,animates));
            el.addEventListener('mouseout', e => resetPosSvgImage(e,animates));
        });
    }

});