let styles = document.createElement('style');
styles.type = 'text/css';
styles.rel = 'stylesheet';
document.body.appendChild(styles);
function svg(big, small) {
    let classes = ``;
    let list = $('.js-svg-bg-animate');
    list.each(function (i,el) {
        let svg = $(this);
        let height = svg.parent().height();
        let width = svg.parent().width();
        svg.attr("viewBox", `0 0 ${width} ${height}`);
        let top = svg.find('.svg-top');
        top[0].y1.baseVal.value = big;
        top[0].x1.baseVal.value = 0;
        top[0].y2.baseVal.value = big;
        top[0].x2.baseVal.value =  width;

        let bottom = svg.find('.svg-bottom');
        bottom[0].y1.baseVal.value = height - big;
        bottom[0].x1.baseVal.value = width;
        bottom[0].y2.baseVal.value = height - big;
        bottom[0].x2.baseVal.value = 0;

        let right = svg.find('.svg-right');
        right[0].y1.baseVal.value = height;
        right[0].y2.baseVal.value = 0;
        right[0].x1.baseVal.value =  width - big;
        right[0].x2.baseVal.value = width - big;

        let left = svg.find('.svg-left');
        left[0].y1.baseVal.value = 0;
        left[0].y2.baseVal.value = height;
        left[0].x1.baseVal.value = big;
        left[0].x2.baseVal.value = big;

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
        line1[0].x.baseVal.value = small;
        line1[0].y.baseVal.value = height - big;

        let line2 = svg.find('.svg-line-2');
        line2[0].x.baseVal.value = big + 1;
        line2[0].y.baseVal.value = height - big;

        let line3 = svg.find('.svg-line-3');
        line3[0].x.baseVal.value = width - big - small;
        line3[0].y.baseVal.value = big;

        let line4 = svg.find('.svg-line-4');
        line4[0].x.baseVal.value = width - big;
        line4[0].y.baseVal.value = big;

        let line5 = svg.find('.svg-line-5');
        line5[0].x.baseVal.value = width - big;
        line5[0].y.baseVal.value = height - big;

        let line6 = svg.find('.svg-line-6');
        line6[0].x.baseVal.value = width - big;
        line6[0].y.baseVal.value = height - big - small;

        let line7 = svg.find('.svg-line-7');
        line7[0].x.baseVal.value =  big + 1;
        line7[0].y.baseVal.value =  small;

        let line8 = svg.find('.svg-line-8');
        line8[0].x.baseVal.value =  big + 1;
        line8[0].y.baseVal.value =  small + small;

        classes = `
        .wb-animate-end .svg-long{stroke-dashoffset: ${ width }!important;}
        .svg-long{stroke-dasharray: ${ width };stroke-dashoffset: ${ width };}
        .wb-animate-end .svg-short{stroke-dashoffset: ${ height }!important;}
        .svg-short{stroke-dasharray: ${ height };stroke-dashoffset: ${ height };}`;
    });
    styles.innerHTML = classes;
}

const offset = {
    desctop : {
        big: 95,
        small: 48
    },
    tablet: {
        big: 64,
        small: 34
    },
    mobile: {
        big: 40,
        small: 25
    }
};
document.addEventListener('DOMContentLoaded',function () {
    const width = window.innerWidth;
    if(width > 1023){
        svg(offset['desctop'].big,offset['desctop'].small );
    } else if(width > 767){
        svg(offset['tablet'].big,offset['tablet'].small );
    } else {
        svg(offset['mobile'].big,offset['mobile'].small );
    }

});

window.addEventListener('resize', function () {
    const width = window.innerWidth;
    if(width > 1023){
        svg(offset['desctop'].big,offset['desctop'].small );
    } else if(width > 767){
        svg(offset['tablet'].big,offset['tablet'].small );
    } else {
        svg(offset['mobile'].big,offset['mobile'].small );
    }
});