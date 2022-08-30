let slider1 = document.getElementById('btn1').addEventListener('click', mini1)
function mini1() {
    document.getElementById('btn1').setAttribute('src', './img/Ellipse1.png')
    document.getElementById('btn2').setAttribute('src', '/img/Ellipse2.png')
    document.getElementById('btn3').setAttribute('src', '/img/Ellipse2.png')
    document.getElementById("slider1").style.display = "block";
    document.getElementById("slider2").style.display = "none";
    document.getElementById("slider3").style.display = "none";
}
let slider2 = document.getElementById('btn2').addEventListener('click', mini2)
function mini2() {
    document.getElementById('btn2').setAttribute('src', './img/Ellipse1.png')
    document.getElementById('btn1').setAttribute('src', '/img/Ellipse2.png')
    document.getElementById('btn3').setAttribute('src', '/img/Ellipse2.png')
    document.getElementById("slider1").style.display = "none";
    document.getElementById("slider2").style.display = "block";
    document.getElementById("slider3").style.display = "none";
}
let slider3 = document.getElementById('btn3').addEventListener('click', mini3)
function mini3() {
    document.getElementById('btn3').setAttribute('src', './img/Ellipse1.png')
    document.getElementById('btn1').setAttribute('src', '/img/Ellipse2.png')
    document.getElementById('btn2').setAttribute('src', '/img/Ellipse2.png')
    document.getElementById("slider1").style.display = "none";
    document.getElementById("slider2").style.display = "none";
    document.getElementById("slider3").style.display = "block";
}