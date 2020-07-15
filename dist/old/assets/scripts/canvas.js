

function animateCanvas() {
    let circle = window.innerHeight/2;
    let height = window.innerHeight;
    let width = window.innerWidth;
    let ctx = $('.canvas')[0].getContext('2d');
    ctx.canvas.width = window.innerWidth;
    // ctx.canvas.width = 1361;
    ctx.canvas.height = window.innerHeight;
    // ctx.canvas.height = 700;
    ctx.strokeStyle = "#FFA500";
    // let img = new Image();   // Создает новый элемент изображения
    // img.src = '/assets/images/main/img1.jpg';
    // img.onload = function() {
    //     ctx.drawImage(this, -100, 0,1225, 730);
    // };

    // let pointPath = 'M95.5 1100L1100 -400';
    // let point = new Path2D(pointPath);
    // let pointPath2 = 'M1264.5 -400L1264.5 1100';
    // let point2 = new Path2D(pointPath2);
    // let pointPath3 = 'M-400 96.5L1900 96.5';
    // let point3 = new Path2D(pointPath3);
    // let pointPath4 = 'M0 95.5L1100 95.5';
    // let point4 = new Path2D(pointPath4);

    // point.fillStyle = "#FFA500";
    // point2.fillStyle = "#FFA500";
    // point3.fillStyle = "#FFA500";
    // point4.fillStyle = "#FFA500";
    ctx.beginPath();
    // point.addPath(point2);
    // point.addPath(point3);
    // point.addPath(point4);
    ctx.moveTo(95.5, height);
    ctx.lineTo(95.5, 0);

    ctx.moveTo(width - 96.5, 0);
    ctx.lineTo(width - 96.5, height);

    ctx.moveTo(0, 96.5);
    ctx.lineTo(width, 96.5);

    ctx.moveTo(width, height - 96.5);
    ctx.lineTo(0, height - 96.5);

    ctx.moveTo(circle*2, circle);
    ctx.arc(circle, circle, circle, 0, 2 * Math.PI , true);

    ctx.moveTo(circle*2-15, circle);
    ctx.arc(circle, circle, circle-15, 0, 2 * Math.PI , true);


    ctx.stroke();

    setTimeout(function () {
        ctx.clearRect(700, 350, 132, 132);
        ctx.clearRect(700, 350, 132, 132);
    },1000)
}
// document.addEventListener('DOMContentLoaded',function () {
//     animateCanvas();
// });
// window.addEventListener('resize', function () {
//     animateCanvas();
// });