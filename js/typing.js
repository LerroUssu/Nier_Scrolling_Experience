document.addEventListener('DOMContentLoaded', function() {

var typed = new Typed('#typed', {
    strings: ['<div class="centrestp"><h1>NIER\nAUTOMATA</h1></div><h4 style="position: absolute; top: 55%; left: 50%; text-align:center; transform: translate(-50%,-50%);">^1000Welcome <mark>Unit 9M</mark>.</h4>',
    '<div class="centrestp"><h1>NIER\nAUTOMATA</h1></div><h4 style="position: absolute; top: 55%; left: 50%; transform: translate(-50%,-50%);">^600To proceed, click on the <strong>box</strong> then scroll to continue the experiment^500.^500.^500.</h4><button id="finally" style="position: absolute; top: 60%; left: 50.5%; text-align:center; transform: translate(-50%,-50%);" class="full" onclick="playAudio()" type="button">Initiate the program.</button></button>'],
    typeSpeed: 35,
    backSpeed: 20,
    startDelay: 1000,
    loop: false,
    showCursor: false,
    smartBackspace: true,
    onComplete: (self) => {

    document.getElementById("finally").style.display = "block";}

    });
});
