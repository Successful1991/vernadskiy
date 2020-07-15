var dotsAmount = 0;
var elementInPage = 8;
var currentPage = 1;
var filterElements = [];
let currentDots = {first: 1, last: 3};

(function () {
    $('.js-pagination').on('click', function (e) {
        e.target.dataset.page ? checkedPage(e.target.dataset.page, e) : checkedPage($(e.target).closest('.pagination__arrow').data('page'), e);
    });
})();

function paginationInit(conf) {
    elementInPage = conf.elementInPage || 8;
    filterElements = filterElements.length === 0 ? $(conf.el) : filterElements;
    var defaults = {
        wrap: conf.wrap||'.pagination',
        clickClass : 'js-pagination',
        dots: conf.dots,
        dotsAmount: conf.dotsAmount,
        dotsLast: conf.dotsLast,
        arrow: conf.arrow,
        extremeArrow: conf.extremeArrow
    };
    dotsAmount = defaults.dotsAmount;

    if(defaults.dots) {
        $(defaults.wrap).append(createDots(defaults.dotsAmount,defaults.dotsLast ) );
    }
    if(defaults.arrow) {
        $(defaults.wrap).prepend(createArrow(['pagination__arrow--left','disabled'], "prev", 1));
        $(defaults.wrap).append(createArrow(['pagination__arrow--right'], "next", 1));
    }
    if(defaults.extremeArrow) {
        $(defaults.wrap).prepend(createArrow(['pagination__arrow--left','disabled'], "first", 2));
        $(defaults.wrap).append(createArrow(['pagination__arrow--right'], "last", 2));
    }

    checkedPage(currentPage);
}

function update(conf) {
    elementInPage = conf.elementInPage || 8;
    filterElements = filterElements.length === 0 ? $(conf.el) : filterElements;
    var defaults = {
        wrap: conf.wrap||'.pagination',
        clickClass : 'js-pagination',
        dots: true,
        dotsAmount: 3,
        dotsLast: true,
        arrow: true,
        extremeArrow: true
    };
    dotsAmount = defaults.dotsAmount;

    console.log(filterElements, conf.el);
    if(defaults.dots) {
        $(defaults.wrap).append(createDots(defaults.dotsAmount,defaults.dotsLast ) );
    }
    checkedPage(currentPage);
}

function createDots(amount) {
    var el = document.createElement('ul');
    el.className = 'dots';
    for (let i = 1; i <= amount; i++){
        el.append(createDot(i, i));
        currentDots.last = i;
    }
    return el
}

function createArrow(clas, data, type){
    let icon = '<svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<path d="M17 5L1 5M1 5L5 9M1 5L5 1" stroke="#7E8888" stroke-linecap="round"/>\n' +
        '</svg>';
    let el = document.createElement('div');
    el.className = 'pagination__arrow '+ clas.join(' ');
    el.dataset.page = data;
    type === 1 ? el.innerHTML = icon : el.innerHTML = icon + icon;
    return el
}

function createDot(index, data){
    let el = document.createElement('li');
    index !== 1 ? el.className = 'dots__element' : el.className = 'dots__element active';
    el.dataset.page = data;
    el.innerHTML = data;
    return el
}
function pagination(page) {
    // $('html,body').animate( {scrollTop: $('.js-pagination__list').offset().top}, 0 );
    $(filterElements).each(function (i, el) {
       if(i+1 > page * elementInPage - elementInPage && i+1 <= page * elementInPage) {
            $(el).show();
       } else {
           $(el).hide();
       }
    });
    window.scrollTo(0, 0);
    ressize();
}

function checkedPage(pages) {
    var page = {
        last: Math.ceil(filterElements.length/elementInPage),
        current: pages,
    };
    $('.dots__element.active').removeClass('active');
    hideDots(page);
    changePage(page);
    $('.dots__element[data-page='+ currentPage +']').addClass('active');
}

function hideDots(page) {
    $('.dots__element').map(function(i, elem){
        $(elem).show();
        if(i >= page.last) {
            $(elem).hide();
        }
    });
    if(page.last === 1){
        $('.pagination__arrow').hide();
    } else {
        $('.pagination__arrow').show();
    }
}

function changePage(page){
    if(page.current !== undefined) {
        switch (page.current){
            case "first":
                currentPage = 1;
                break;
            case "prev":
                currentPage = currentPage > 1?currentPage-1: 1;
                break;
            case "next":
                currentPage = currentPage < page.last?currentPage+1: page.last;
                break;
            case "last":
                currentPage = page.last;
                break;
            // case "more":
            //     currentPage = currentPage + 3 < page.last?currentPage+3: page.last - 3;
            //     break;
            default:
                currentPage = +page.current;
        }
    }
    changeDots(currentPage, page.last);
    pagination(currentPage);
}

function changeDots(page, last) {
    if(page > 1) {
        $('.pagination__arrow--left').removeClass('disabled');
    }
    if (page === 1){
        $('.pagination__arrow--left').addClass('disabled');
    }
    if (page === last){
        $('.pagination__arrow--right').addClass('disabled');
    }
    if (page < last){
        $('.pagination__arrow--right').removeClass('disabled');
    }
    if(last >= 3) {

        if( page < currentDots.first && page < 2 ){
            currentDots.first = 1;
            $('.dots__element').map( (i,li) => {
                li.dataset.page =  i;
                li.innerHTML =  i;
                currentDots.last = i ;
            })
        } else if( page < currentDots.first && page === 2 ){
            currentDots.first = page - 1;
            $('.dots__element').map( (i,li) => {
                li.dataset.page =  page + i - 1;
                li.innerHTML =  page + i - 1;
                currentDots.last = page + i - 1;
            })
        } else if(page > currentDots.last && page < last -1) {
            currentDots.first = page;
            $('.dots__element').map( (i,li) => {
                li.dataset.page =  page + i - 2;
                li.innerHTML =  page + i - 2;
                currentDots.last = page + i - 2;
            })
        } else if(page > currentDots.last && page < last ) {
            currentDots.first = page - 1;
            $('.dots__element').map( (i,li) => {
                li.dataset.page =  page + i - 1;
                li.innerHTML =  page + i - 1;
                currentDots.last = page + i - 1;
            })
        }
        if(page === last) {
            currentDots.first = page - 2;
            $('.dots__element').map( (i,li) => {
                li.dataset.page =  page + i - 2;
                li.innerHTML =  page + i - 2;
                currentDots.last = page + i - 2;
            })
        } else if( page === 1 ) {
            currentDots.first = 1;
            $('.dots__element').map( (i,li) => {
                li.dataset.page = page + i;
                li.innerHTML =  page + i;
                currentDots.last = page + i;
            })
        }


    }



    if(last <= 3) {
        $('.dots__element').map( (i,li) => {
            $(li).removeClass('active');
            if(i+1 === page) {$(li).addClass('active');}
        })
    }
}
