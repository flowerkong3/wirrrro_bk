// *Header : Scroll Moving Header
const header = document.querySelector('.header');
const delta = 30;
let lastScrollTop = 0;

// *Accordion
const accordionItem = document.querySelectorAll(".accordion-item");
const accordionBtn = document.querySelectorAll(".accordion__btn");
const accordionCon = document.querySelectorAll(".accordion__con"); 

for(var i=0; i < accordionItem.length; i++){
	accordionItem[i].addEventListener("click",function(){
		this.classList.toggle("active");
	})
}

// *Header
document.addEventListener("scroll", function () {
	scrollHeader();
});

function scrollHeader(){
	let scrollY = window.scrollY;
	if (scrollY > lastScrollTop + delta) {
		header.classList.add('active');
		// header.classList.remove('on');
		// nav.style.display = "none";
		// nav.classList.remove('on');
		
	} else if (scrollY < lastScrollTop) {
		header.classList.remove('active');
		// header.classList.remove('on');
		// nav.classList.add('on');
		// nav.style.display = "block";
		// nav.style.display = "block";
		
	}
	lastScrollTop = scrollY;
}

// *Slick-Slide
$('.drag-slide').slick({
	slide: 'li',   //슬라이드 되어야 할 태그
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});



// *Lottei Animation
var lottieAnim = lottie.loadAnimation({
	container: document.getElementById("lottie-type01"), // the dom element that will contain the animation
	renderer: 'svg',
	loop: 2, //animation 이 한번 재생되고 사라지도록 하려면, (loop 는 false이고)
	autoplay: true,
	// path: 'https://assets7.lottiefiles.com/packages/lf20_tcozqiwz.json', // json 경로
	// path: 'https://assets4.lottiefiles.com/packages/lf20_oolltm56.json', // json 경로
	// path: 'https://assets5.lottiefiles.com/packages/lf20_kEK6zMf9S6.json', // json 경로
	// path: 'https://assets5.lottiefiles.com/packages/lf20_bdsvor0n.json', // json 경로
	path: 'A.json', // json 경로
});



var lottieAnim = lottie.loadAnimation({
	container: document.getElementById("lottie-type02"), // the dom element that will contain the animation
	renderer: 'svg',
	loop: true, //animation 이 한번 재생되고 사라지도록 하려면, (loop 는 false이고)
	autoplay: true,
	path: 'B.json', // json 경로
});


// 좋아요 하트
var lottieAnim = lottie.loadAnimation({
	container: document.getElementById("lottie-like"), // the dom element that will contain the animation
	renderer: 'svg',
	loop: true, //animation 이 한번 재생되고 사라지도록 하려면, (loop 는 false이고)
	autoplay: true,
	path: 'https://assets7.lottiefiles.com/packages/lf20_tcozqiwz.json', // json 경로
	
});

// 버튼클릭 - 이벤트발생



function likeStart(){
	lottieAnim.stop();
	lottieAnim.play();

	// 별도로 넣어서 제어함.
	var lottieLike = document.getElementById("lottie-like");
	lottieLike.style.display = "block";
}



// lottieAnim.onComplete = function() {
//     lottieAnim.destroy();
// }



// * Scroll Text Fade Ani
const sec01 = document.querySelector(".sec01");
const sec01Top = document.querySelector(".sec01").offsetTop;
const sec02 = document.querySelector(".sec02");
const sec02Top = document.querySelector(".sec02").offsetTop;
const sec03 = document.querySelector(".sec03");
const sec03Top = document.querySelector(".sec03").offsetTop;
const sec04 = document.querySelector(".sec04");
const sec04Top = document.querySelector(".sec04").offsetTop;
const sec05 = document.querySelector(".sec05");
const sec05Top = document.querySelector(".sec05").offsetTop;



let scrollTop = 0;
window.onload = function(){
	sec01.classList.add("txtAni");
	sec01.classList.add("rotateAni");
}
window.addEventListener("scroll",function(){
	scrollTop = window.scrollY;

	if(scrollTop > sec02Top/2) {
		sec02.classList.add("txtAni");
		sec02.classList.add("rotateAni");
	}else {
		sec02.classList.remove("txtAni");
		sec02.classList.remove("rotateAni");
	};
	if(scrollTop > sec03Top/2) {
		sec03.classList.add("txtAni");
	}else {
		sec03.classList.remove("txtAni");
	};
	if(scrollTop > sec04Top/1.2) {
		sec04.classList.add("txtAni");
	}else {
		sec04.classList.remove("txtAni");
	};
	if(scrollTop > sec05Top/1.2) {
		sec05.classList.add("txtAni");
	}else {
		sec05.classList.remove("txtAni");
	};
	console.log(scrollTop);
	console.log(sec04Top);
})



	// * Count Event
	// Photo | Like Heart Plus 
	var count1 = 0;
	var count2 = 0;
	var count3 = 0;
	var count4 = 0;
	$('#countBtn1').click(function(){
		count1 = count1 + 1;
		document.querySelector("#num1").innerText = count1;
	})
	$('#countBtn2').click(function(){
		count2 = count2 + 1;
		document.querySelector("#num2").innerText = count2;
	})
	$('#countBtn3').click(function(){
		count3 = count3 + 1;
		document.querySelector("#num3").innerText = count3;
	})
	$('#countBtn4').click(function(){
		count4 = count4 + 1;
		document.querySelector("#num4").innerText = count4;
	})
	// * Photo | 좋아요 누르면 하트 컬러 변경
	$('.like button').click(function(){
		var $this = $('.heart');
		$($this).addClass('on');
	})

	// * Photo | Like Heart Event
	$('.like i').click(function(){
		$(this).toggleClass('on');
	})

	// *모바일 메뉴 
	function toggleMenu(){
		// const header = document.querySelector(".header");
		const toggleMenu = document.querySelector(".toggle-menu").classList.toggle("on");
		header.classList.toggle("on");
		nav.classList.add("on");
		const body = document.querySelector(".body").classList.toggle("on");
	}




	// *패럴렉스
	window.onload = function () {
		parallax();
	}

	function parallax() {
		let x = 0;
		let y = 0;
		let mY = 0;
		let mX = 0;
		let speed = 0.009;
		let moveLight;

		moveLight = document.getElementsByClassName("moveLight")[0];
		moveParticle = document.getElementsByClassName("moveParticle")[0];

		//마우스가 움직이면 mouseFunc(함수명이름짓기)이벤트가 일어난다.
		window.addEventListener("mousemove", mouseFunc, false);

		function mouseFunc(e) {

			x = (e.clientX - window.innerWidth / 1);
			y = (e.clientY - window.innerHeight / 1);

		}
		loop();

		function loop() {
			mX += (x - mX) * speed;
			mY += (y - mY) * speed;

			moveLight.style.transform = `translate(${mX/1}px,${mY/1}px)`;
			moveParticle.style.transform = `translate(${-mX/10}px,${-mY/10}px)`;

			window.requestAnimationFrame(loop);
		}
	}
	