
let scroll = 0, scrollOld = 0

let scrollInside = (min, max) => scroll >= min && scroll <= max
let scrollOutside = (min, max) => scroll < min || scroll > max
let scrollOldInside = (min, max) => scrollOld >= min && scrollOld <= max
let scrollOldOutside = (min, max) => scrollOld < min || scrollOld > max
let scrollEnter = (min, max) => scrollInside(min, max) && scrollOldOutside(min, max)
let scrollExit = (min, max) => scrollOutside(min, max) && scrollOldInside(min, max)

// let splitToSpan = (element) => {
//
// 	let text = element.innerHTML
// 	let spans = [...text].map(char => `<span>${char}</span>`)
// 	element.innerHTML = spans.join('')
//
// }

let update = () => {

	scrollOld = scroll
	scroll = (
		document.querySelector('html').scrollTop ||
		document.querySelector('body').scrollTop
	) / window.innerHeight

	// document.querySelector('header div.scroll span').innerHTML = scroll.toFixed(2)

	updateHeader()
	updateSection1()
	updateSection2()
	updateSection3()
	updateSection4()

}

let initHeader = () => {

	let date = new Date()

	let week = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi']
	let day = week[date.getDay()]

	let months = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre']
	let month = months[date.getMonth()]

	document.querySelector('header div.info p').innerHTML =
		`${day} ${date.getDate()} ${month}`

}

initHeader()

let updateHeader = () => {

	if (scrollInside(3, 4)) {

		document.querySelector('header').className = 's4'

	} else if (scrollInside(2, 3)) {

		document.querySelector('header').className = 's3'

	} else if (scrollInside(1, 2)) {

		document.querySelector('header').className = 's2'

	} else {

		document.querySelector('header').className = 's1'

	}

}

let updateSection2 = () => {

	if (scrollEnter(1, 2)) {
		document.querySelector('header div.scroll h2').innerHTML = "Game of the Year"
		document.getElementById("video").style.display = "block";
	}

	if (scrollEnter(0.8, 1.4)) {

		TweenMax.fromTo('section#s2 img', 1,
			{ scale:0.2, opacity:0 },
			{ scale:1.0, opacity:1, ease: Back.easeOut.config(1, 0.3) })

	}

	if (scrollExit(0.8, 1.4)) {

		TweenMax.to('section#s2 img', 0.25,
			{ scale:0.95, opacity:0 })

	}

}

let updateSection3 = () => {

	if (scrollEnter(2, 2.999)) {
		document.querySelector('header div.scroll h2').innerHTML = "2B"
	}

	if (scrollEnter(1.5, 2.4)) {
		TweenMax.fromTo('section#s3 img', 0.7,
			{ scale:0.7, opacity:0 },
			{ scale:1.0, opacity:1, ease: Back.easeOut.config(1, 0.8) })

	}

	if(scrollEnter(1.65,2.25))
	{
		TweenMax.fromTo('section#s3 #textbox', 0.8,
		{ opacity:0 },
		{ opacity:1, ease: Linear.easeNone })
	}

	if (scrollExit(1.5, 2.4)) {

		TweenMax.to('section#s3 img', 0.25,
			{ scale:0.9, opacity:0 })
	}

	if (scrollExit(1.6, 2.25)) {

		TweenMax.to('section#s3 #textbox', 0.30,
			{ opacity:0 })


	}


}


let updateSection4 = () => {

	if (scrollEnter(3, 4)) {
		document.querySelector('header div.scroll h2').innerHTML = "9S"
	}

	if (scrollEnter(2.4, 4)) {
		TweenMax.fromTo('section#s4 img', 0.7,
			{ scale:0.7, opacity:0 },
			{ scale:1.0, opacity:1, ease: Back.easeOut.config(1, 0.8) })

	}

	if(scrollEnter(2.55,4))
	{
		TweenMax.fromTo('section#s4 #textbox2', 0.8,
		{ opacity:0 },
		{ opacity:1, ease: Linear.easeNone })
	}

	if (scrollExit(2.4, 4)) {

		TweenMax.to('section#s4 img', 0.25,
			{ scale:0.9, opacity:0 })
	}

	if (scrollExit(2.55, 4)) {

		TweenMax.to('section#s4 #textbox4', 0.30,
			{ opacity:0 })


	}


}






// SECTION 4 Dessin Canvas assez simple jvoulais faire autre chose mais pas assez de temps car je maitrise pas vraiment

//
//
// var cn;
// var c;
// var a;
//
// const m = {
// 		x: innerWidth / 2,
// 		y: innerHeight / 2
// };
//
//
// //changement de plan, je n'en ai plus besoin mais au cas ou
//
// window.onmousemove = function(e) {
//       m.x = e.clientX;
//       m.y = e.clientY;
// }
//
// //rand couleur rouge et cie
//  function gc() {
// 		 var s = "0123456789";
// 		 var c = "#";
// 		for (var i = 0; i < 1; i++) {
// 				c += s[Math.ceil(Math.random() * 15)]
// 		 }
//
// 		 c += "a010a";
// 	 return c
//  }
// //rand couleur white et cie
//  function gcwhite() {
// 		 var s = "0123456789ABCDEF";
// 		 var c = "#"
// 		 var temp = "";
// 		for (var i = 0; i < 2; i++) {
// 				temp += s[Math.ceil(Math.random() * 15)]
// 		 }
//
// 		 c += temp + temp + temp;
// 	 return c
//  }
//
// //dessiner on load
// window.onload = function myfunction() {
// 		cn = document.getElementById('cw');
// 		c = cn.getContext('2d');
//
// 			a = new ob(innerWidth / 2,innerHeight / 2,"white");
//
// 		resize();
// 		draw();
// }
//
// window.onresize = function() {
// 		resize();
// 		draw();
// }
//
// function resize() {
// 		cn.height = innerHeight;
// 		cn.width = innerWidth;
// }
//
// function ob(x, y, cc) {
// 		this.x = x;
// 		this.y = y;
//
// 		this.dr = function() {
// 				const ls = {
// 						x: this.x ,
// 						y: this.y ,
// 				};
// 				//
// 				// this.x = m.x - 6 ;
// 				// this.y = m.y - 6 ;
//
// 				for (j=-40;j<40;j++)
// 				{
// 						for (i=-70;i<70;i++)
// 						{ roundedRect(c, ls.x+1+i*15, ls.y+5+j*15, 10, 10, 3) }
// 				}
//
// 		}
// }
//
// function draw() {
// 		c.fillStyle = "#000000";
// 		c.fillRect(0, 0, cn.width, cn.height);
// 		a.dr();
//
// 			if (scroll >= 3)
// 			{
// 						music.volume=0;
// 						audio.volume=0.5;
// 						// audio.play();
// 						setInterval(function(e)
// 						{
// 							c.fillStyle = "#000000";
// 							c.fillRect(0, 0, cn.width, cn.height);
// 							a.dr();
// 						},300);
// 			}
// 			// c.clearRect(ls.x, ls.y, 20, 20);
// }
//
// function roundedRect(ctx, x, y, width, height, radius) {
// 	var chance = 0;
//
// 	ctx.fillStyle = gc();
// 	if (y > 6*innerHeight/10)
// 	{
// 		chance= Math.floor((Math.random() * y) + 1);
// 		if (chance > innerHeight/2)
// 		ctx.fillStyle = gcwhite();
// 	}
//
// 	ctx.beginPath();
// 	ctx.moveTo(x, y + radius);
// 	ctx.lineTo(x, y + height - radius);
// 	ctx.arcTo(x, y + height, x + radius, y + height, radius);
// 	ctx.lineTo(x + width - radius, y + height);
// 	ctx.arcTo(x + width, y + height, x + width, y + height-radius, radius);
// 	ctx.lineTo(x + width, y + radius);
// 	ctx.arcTo(x + width, y, x + width - radius, y, radius);
// 	ctx.lineTo(x + radius, y);
// 	ctx.arcTo(x, y, x, y + radius, radius);
// 	ctx.fill();
// }


var buttonClick = new Audio(src="assets/core_78.ogg");
var music = new Audio(src="assets/NierAutomata-WeightoftheWorld_Instrumental.mp3");
var audio = new Audio(src="assets/core_31.ogg");

function playAudio()
{
		buttonClick.volume=0.5;
		buttonClick.play();
		music.volume=0.1;
		setTimeout(function(){music.play();},300);

		setTimeout(function(){document.getElementById("reste").style.display = "block";},300);
		document.getElementById("finally").disabled = true;
}



// // SECTION 1 ANIM
// // compliqué...
//
// kit.SVG.viewBoxFitWidth('section#s1 svg', 1920, 1080, .5)
//
// for (let p of document.querySelectorAll('section#s1 h1 p')) {
//
//     splitToSpan(p)
//
// }
//
// let section1Spans = document.querySelectorAll('section#s1 h1 span')
//
// for (let span of section1Spans) {
//
// 	span.setAttribute('speed', kit.Random.float(1, 4).toFixed(3))
//
// }

let updateSection1 = () => {

	TweenMax.set('section#s1 svg circle#c1', { y:-1000 * scroll })
	TweenMax.set('section#s1 svg circle#c2', { y:-3400 * scroll })
	TweenMax.set('section#s1 svg circle#c3', { y:-1800 * scroll })
	TweenMax.set('section#s1 svg circle#c4', { y:-1500 * scroll })
	TweenMax.set('section#s1 svg rect#r1', { y:-5000 * scroll, rotation:720 * 3 * scroll, transformOrigin:'center' })

	// for(let span of section1Spans) {
	//
	// 	let speed = span.getAttribute('speed')
	// 	span.style.color = kit.Color.mix('black', '#dcd8c0', speed * scroll * 5)
	// 	span.style.transform = `translateX(${(-speed * 200 * scroll).toFixed(1)}px)`
	//
	// }

}









document.querySelector('body').onscroll = update
update()
