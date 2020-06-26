
window.onload = function() {
    var can = document.getElementById('circle'),
        spanProcent = document.getElementById('procent'),
        c = can.getContext('2d');
    var posX = can.width / 2,
        posY = can.height / 2,
        fps = 1000 / 200,
        procent = 0,
        oneProcent = 360 / 100,
        result = oneProcent * 77;
    
    c.lineCap = 'round';
    arcMove();
    
    function arcMove(){
    var deegres = 0;
    var acrInterval = setInterval (function() {
    deegres += 1;
    procent = deegres / oneProcent;
    spanProcent.innerHTML = procent.toFixed();

    c.beginPath();
    c.arc(posX, posY, 30, 0, 360);
    c.fillStyle = '#444d77';
	c.fill();
	c.lineWidth = 3;
	c.strokeStyle = '#444d77';
	c.stroke();

    c.beginPath();
    c.arc( posX, posY, 30, (Math.PI/180) * 290, (Math.PI/180) * (290 + 360) );
    c.strokeStyle = '#3cb6f1';
    c.lineWidth = '5';
    c.stroke();

    c.beginPath();
    c.arc( posX, posY, 30, (Math.PI/180) * 290, (Math.PI/180) * (290 - deegres) );
    c.strokeStyle = '#444d77';
    c.lineWidth = '1';
    c.stroke();
    
    if( deegres >= result ) clearInterval(acrInterval);
    }, fps);
    
}
}