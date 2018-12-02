var socket = io(); 

const myQuestions = [
    {
        question: "Čo vypíše nasledujúci program?",
        answers: {
            a: "40",
            b: "50",
            c: "90",
            d: "iné",
            e: "neviem"
        }
	},
    {
        question: "Čo vypíše nasledujúci program?",
        answers: {
            a: "60",
            b: "80",
            c: "140",
            d: "iné",
            e: "neviem"
        }
    },
    {
        question: "Čo vypíše nasledujúci program?",
        answers: {
            a: "40",
            b: "146",
            c: "150",
            d: "iné",
            e: "neviem"
        }
    }
  ];

socket.on('connect', function () { 
    let data = 'connected'
    socket.emit('mainInput', data);
});

function startExperiment(){
    console.log('experiment odstartovany');
    $(".start-page").hide();
    $(".content-main").show();
    buildQuestions();
    showExperiment();
}

function buildQuestions() {
    const output = [];

    myQuestions.forEach((currentQuestion, questionNumber) => {
        let answers = [];
        for (let letter in currentQuestion.answers) {
          answers.push(
            /*`<label>
               <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
			 </label>`*/
			 
			`<label class="choice-container">
				<span class="label-question">${currentQuestion.answers[letter]}</span>
				<input type="radio" name="answer" value="${currentQuestion.answers[letter]}">
				<span class="checkmark"></span>
			</label>`
          );
        }
        output.push(
            /*
            `<div class="slide">
                <div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join("")} </div>
            </div>`
            */
			`
			<div class="slide">
				<svg class="blur" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
						
				<image  class="image-blur" filter="url(#blur-grayscale) " xlink:href="./kod${questionNumber+1}.png"></image>
				
				<filter id="blur-grayscale">
					<feColorMatrix in="SourceGraphic" type="saturate" values="5" result="A"></feColorMatrix>
					<feGaussianBlur in="A" stdDeviation="5" />
				</filter>
				
				<mask id="mask1">
					<circle cx="-50%" cy="-50%" r="30" fill="white" filter="url(#blur-grayscale)" />
				</mask>
				
				<image class="image-blur" xlink:href="./kod1.png"
					mask="url(#mask1)"></image>
				</svg>
			</div>
            `
        );
    });
    
    document.getElementById("code-pic").innerHTML = output.join("");
    console.log(output);
}
let currentSlide = 0;
function showExperiment(){

	const submitButton = document.getElementById("submit");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    

    function showSlide(n) {
        slides[currentSlide].classList.remove("active-slide");
        slides[n].classList.add("active-slide");
        currentSlide = n;
        console.log(slides.length);
        if (currentSlide === slides.length - 1) {
          nextButton.style.display = "none";
          submitButton.style.display = "inline-block";
        } else {
          nextButton.style.display = "inline-block";
          submitButton.style.display = "none";
        }
    }

    function showNextSlide() {
        console.log('next slide biatch');
        showSlide(currentSlide + 1);
    }

    showSlide(0);

    submitButton.addEventListener("click", function(event){
        event.preventDefault();
        showEndPage();
    });
    nextButton.addEventListener("click", function(event){
        event.preventDefault();
        showNextSlide();
    });
    
}

function showEndPage(){
    $(".content-main").hide();
    $(".end-page").show();
}

window.onload = function (){

	var svgNS = "http://www.w3.org/2000/svg";
  
	$('.pic').mousemove(function (event) {
		event.preventDefault();
		
		var upX = (event.pageX - $('.blur').offset().left);
		var upY = (event.pageY - $('.blur').offset().top) ;
		var mask = $('#mask1')[0];
		
		var circle = document.createElementNS(svgNS,"circle");
		circle.setAttribute("cx", upX);
		circle.setAttribute("cy", upY);
		circle.setAttribute("r", "20");
		circle.setAttribute("fill", "white");
		
		circle.setAttribute("border", "10px solid red");
		circle.setAttribute("filter", "url(#blur-grayscale)");
		
		mask.appendChild(circle);
		
		setTimeout(function(){ 
			circle.style.opacity = '0';
			setTimeout(function(){ 
				mask.removeChild(circle);
			}, 300);
		}, 300);
	});

	
	let display = document.querySelector('#timer');
	startTimer(90, display);
}; 

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;
		
        if (--timer < 30) {
			
			$("#timer").addClass('timer-red');
		}
		if (timer < 1){
			display.textContent = "KONIEC";
		}
    }, 1000);
}
