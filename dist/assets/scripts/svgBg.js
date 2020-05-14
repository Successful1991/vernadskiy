function svg() {
    let svg = $('.wb-2__bg svg');
    // svg.attr("height", `${window.innerHeight}`);
    // svg.attr("width", `${window.innerWidth}`);
    svg.attr("viewBox", `0 0 ${window.innerWidth} ${window.innerHeight}`);

    let top = svg.find('.top');
    top[0].y1.baseVal.value = 95;
    top[0].y2.baseVal.value = 95;
    top[0].x1.baseVal.value =  window.innerWidth;
    top[0].x2.baseVal.value = 0;

    let bottom = svg.find('.bottom');
    bottom[0].y1.baseVal.value = window.innerHeight - 95;
    bottom[0].y2.baseVal.value = window.innerHeight - 95;
    bottom[0].x1.baseVal.value =  window.innerWidth;
    bottom[0].x2.baseVal.value = 0;

    let right = svg.find('.right');
    right[0].y1.baseVal.value = 0;
    right[0].y2.baseVal.value = window.innerHeight;
    right[0].x1.baseVal.value =  window.innerWidth - 95;
    right[0].x2.baseVal.value = window.innerWidth - 95;

    let left = svg.find('.left');
    left[0].y1.baseVal.value = 0;
    left[0].y2.baseVal.value = window.innerHeight;
    left[0].x1.baseVal.value = 95;
    left[0].x2.baseVal.value = 95;

    let circle1 = svg.find('.circle1');
    circle1[0].cx.baseVal.value = window.innerWidth/4;
    circle1[0].cy.baseVal.value = window.innerHeight/2;
    circle1[0].r.baseVal.value = window.innerWidth/4;

    let circle2 = svg.find('.circle2');
    circle2[0].cx.baseVal.value = window.innerWidth/4;
    circle2[0].cy.baseVal.value = window.innerHeight/2;
    circle2[0].r.baseVal.value = window.innerWidth/4-15;

    let line1 = svg.find('.line-1');
    line1[0].x.baseVal.value = 48;
    line1[0].y.baseVal.value = window.innerHeight - 95;

    let line2 = svg.find('.line-2');
    line2[0].x.baseVal.value = 96;
    line2[0].y.baseVal.value = window.innerHeight - 95;

    let line3 = svg.find('.line-3');
    line3[0].x.baseVal.value = window.innerWidth - 95 - 48;
    line3[0].y.baseVal.value = 95;

    let line4 = svg.find('.line-4');
    line4[0].x.baseVal.value = window.innerWidth - 95;
    line4[0].y.baseVal.value = 95;

    let line5 = svg.find('.line-5');
    line5[0].x.baseVal.value = window.innerWidth - 95;
    line5[0].y.baseVal.value = window.innerHeight - 95;

    let line6 = svg.find('.line-6');
    line6[0].x.baseVal.value = window.innerWidth - 95;
    line6[0].y.baseVal.value = window.innerHeight - 95 - 48;

    let line7 = svg.find('.line-7');
    line7[0].x.baseVal.value =  96;
    line7[0].y.baseVal.value =  48;

    let line8 = svg.find('.line-8');
    line8[0].x.baseVal.value =  96;
    line8[0].y.baseVal.value =  48 + 48;

    console.log(circle2);
}


document.addEventListener('DOMContentLoaded',function () {
    svg();
});

window.addEventListener('resize', function () {
    svg();
});