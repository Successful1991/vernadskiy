let styles = document.createElement('style');
styles.type = 'text/css';
styles.rel = 'stylesheet';
document.body.appendChild(styles);
function svg() {
    let classes = ``;
    let list = $('.js-svg-bg-animate');
    list.each(function (i,el) {
        let svg = $(this);
        let height = svg.parent().height();
        let width = svg.parent().width();
        svg.attr("viewBox", `0 0 ${width} ${height}`);
        let top = svg.find('.svg-top');
        top[0].y1.baseVal.value = 95;
        top[0].x1.baseVal.value = 0;
        top[0].y2.baseVal.value = 95;
        top[0].x2.baseVal.value =  width;

        let bottom = svg.find('.svg-bottom');
        bottom[0].y1.baseVal.value = height - 95;
        bottom[0].x1.baseVal.value = width;
        bottom[0].y2.baseVal.value = height - 95;
        bottom[0].x2.baseVal.value = 0;

        let right = svg.find('.svg-right');
        right[0].y1.baseVal.value = height;
        right[0].y2.baseVal.value = 0;
        right[0].x1.baseVal.value =  width - 95;
        right[0].x2.baseVal.value = width - 95;

        let left = svg.find('.svg-left');
        left[0].y1.baseVal.value = 0;
        left[0].y2.baseVal.value = height;
        left[0].x1.baseVal.value = 95;
        left[0].x2.baseVal.value = 95;

        let circle1 = svg.find('.svg-circle1');
        circle1[0].cx.baseVal.value = width/4;
        circle1[0].cy.baseVal.value = height/2;
        circle1[0].r.baseVal.value = width/4;

        let circle2 = svg.find('.svg-circle2');
        circle2[0].cx.baseVal.value = width/4;
        circle2[0].cy.baseVal.value = height/2;
        circle2[0].r.baseVal.value = width/4-15;
        // circle2[0].style.strokeDashoffset = (width / 4 - 15) * (Math.PI*2);
        // circle2[0].style.strokeDasharray = (width / 4 - 15) * (Math.PI*2);

        let line1 = svg.find('.svg-line-1');
        line1[0].x.baseVal.value = 48;
        line1[0].y.baseVal.value = height - 95;

        let line2 = svg.find('.svg-line-2');
        line2[0].x.baseVal.value = 96;
        line2[0].y.baseVal.value = height - 95;

        let line3 = svg.find('.svg-line-3');
        line3[0].x.baseVal.value = width - 95 - 48;
        line3[0].y.baseVal.value = 95;

        let line4 = svg.find('.svg-line-4');
        line4[0].x.baseVal.value = width - 95;
        line4[0].y.baseVal.value = 95;

        let line5 = svg.find('.svg-line-5');
        line5[0].x.baseVal.value = width - 95;
        line5[0].y.baseVal.value = height - 95;

        let line6 = svg.find('.svg-line-6');
        line6[0].x.baseVal.value = width - 95;
        line6[0].y.baseVal.value = height - 95 - 48;

        let line7 = svg.find('.svg-line-7');
        line7[0].x.baseVal.value =  96;
        line7[0].y.baseVal.value =  48;

        let line8 = svg.find('.svg-line-8');
        line8[0].x.baseVal.value =  96;
        line8[0].y.baseVal.value =  48 + 48;

        classes = `
        .wb-animate-end .svg-long{stroke-dashoffset: ${ width }!important;}
        .svg-long{stroke-dasharray: ${ width };stroke-dashoffset: ${ width };}
        .wb-animate-end .svg-short{stroke-dashoffset: ${ height }!important;}
        .svg-short{stroke-dasharray: ${ height };stroke-dashoffset: ${ height };}`;
    });
    styles.innerHTML = classes;
}


document.addEventListener('DOMContentLoaded',function () {
    svg();
});

window.addEventListener('resize', function () {
    svg();
});