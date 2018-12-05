var socket = io(); 
let timeForQuestion = 90;
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
    /* ,
    {
        question: "Čo vypíše nasledujúci program?",
        answers: {
            a: "2",
            b: "4",
            c: "7",
            d: "iné",
            e: "neviem"
        }
    },
    {
        question: "Čo vypíše nasledujúci program?",
        answers: {
            a: "2",
            b: "3",
            c: "6",
            d: "iné",
            e: "neviem"
        }
    },
    {
        question: "Čo vypíše nasledujúci program?",
        answers: {
            a: "100",
            b: "110",
            c: "111",
            d: "iné",
            e: "neviem"
        }
    },
    {
        question: "Čo vypíše nasledujúci program?",
        answers: {
            a: "2",
            b: "3",
            c: "4",
            d: "5",
            e: "neviem"
        }
    },
    {
        question: "Čo vypíše nasledujúci program?",
        answers: {
            a: "2",
            b: "3",
            c: "4",
            d: "5",
            e: "neviem"
        }
    },
    {
        question: "Čo vypíše nasledujúci program?",
        answers: {
            a: "3",
            b: "4",
            c: "7",
            d: "11",
            e: "neviem"
        }
    },
    {
        question: "Čo vypíše nasledujúci program?",
        answers: {
            a: "2",
            b: "3",
            c: "4",
            d: "iné",
            e: "neviem"
        }
    },
    {
        question: "Čo vypíše nasledujúci program?",
        answers: {
            a: "2",
            b: "3",
            c: "4",
            d: "iné",
            e: "neviem"
        }
    },
    {
        question: "Čo vypíše nasledujúci program?",
        answers: {
            a: "2",
            b: "3",
            c: "4",
            d: "iné",
            e: "neviem"
        }
    },
    {
        question: "Čo vypíše nasledujúci program?",
        answers: {
            a: "8",
            b: "9",
            c: "18",
            d: "iné",
            e: "neviem"
        }
    },
    {
        question: "Čo vypíše nasledujúci program?",
        answers: {
            a: "8",
            b: "9",
            c: "18",
            d: "iné",
            e: "neviem"
        }
    },
    {
        question: "Čo vypíše nasledujúci program?",
        answers: {
            a: "8",
            b: "9",
            c: "18",
            d: "iné",
            e: "neviem"
        }
    },
    {
        question: "Čo vypíše nasledujúci program?",
        answers: {
            a: "2",
            b: "4",
            c: "8",
            d: "iné",
            e: "neviem"
        }
    },
    {
        question: "Čo vypíše nasledujúci program?",
        answers: {
            a: "2",
            b: "20",
            c: "200",
            d: "iné",
            e: "neviem"
        }
    },
    {
        question: "Čo vypíše nasledujúci program?",
        answers: {
            a: "10",
            b: "20",
            c: "30",
            d: "iné",
            e: "neviem"
        }
    },
    {
        question: "Čo vypíše nasledujúci program?",
        answers: {
            a: "0",
            b: "1",
            c: "2",
            d: "iné",
            e: "neviem"
        }
    },
    {
        question: "Čo vypíše nasledujúci program?",
        answers: {
            a: "0",
            b: "1",
            c: "2",
            d: "iné",
            e: "neviem"
        }
    },
    {
        question: "Čo vypíše nasledujúci program?",
        answers: {
            a: "2",
            b: "20",
            c: "200",
            d: "iné",
            e: "neviem"
        }
    },
    {
        question: "Čo vypíše nasledujúci program?",
        answers: {
            a: "6",
            b: "9",
            c: "12",
            d: "iné",
            e: "neviem"
        }
    },
    {
        question: "Čo vypíše nasledujúci program?",
        answers: {
            a: "6",
            b: "9",
            c: "12",
            d: "iné",
            e: "neviem"
        }
    },
    {
        question: "Čo vypíše nasledujúci program?",
        answers: {
            a: "6",
            b: "9",
            c: "12",
            d: "iné",
            e: "neviem"
        }
    },
    {
        question: "Čo vypíše nasledujúci program?",
        answers: {
            a: "2",
            b: "9",
            c: "18",
            d: "iné",
            e: "neviem"
        }
    },
    {
        question: "Čo vypíše nasledujúci program?",
        answers: {
            a: "2",
            b: "9",
            c: "18",
            d: "iné",
            e: "neviem"
        }
    },
    {
        question: "Čo vypíše nasledujúci program?",
        answers: {
            a: "2",
            b: "9",
            c: "18",
            d: "iné",
            e: "neviem"
        }
    },
    {
        question: "Čo vypíše nasledujúci program?",
        answers: {
            a: "1",
            b: "2",
            c: "3",
            d: "4",
            e: "neviem"
        }
    },
    {
        question: "Čo vypíše nasledujúci program?",
        answers: {
            a: "2",
            b: "3",
            c: "4",
            d: "5",
            e: "neviem"
        }
    },
    {
        question: "Čo vypíše nasledujúci program?",
        answers: {
            a: "2",
            b: "3",
            c: "4",
            d: "5",
            e: "neviem"
        }
    },
    {
        question: "Čo vypíše nasledujúci program?",
        answers: {
            a: "0",
            b: "-1",
            c: "-2",
            d: "3",
            e: "neviem"
        }
    },
    {
        question: "Čo vypíše nasledujúci program?",
        answers: {
            a: "-1",
            b: "-2",
            c: "-5",
            d: "iné",
            e: "neviem"
        }
    },
    {
        question: "Čo vypíše nasledujúci program?",
        answers: {
            a: "-3",
            b: "-4",
            c: "-5",
            d: "iné",
            e: "neviem"
        }
    },
    {
        question: "Čo vypíše nasledujúci program?",
        answers: {
            a: "Janka",
            b: "JANKA",
            c: "janka",
            d: "iné",
            e: "neviem"
        }
    },
    {
        question: "Čo vypíše nasledujúci program?",
        answers: {
            a: "BRATISLAVA",
            b: "bratislava",
            c: "Bratislava",
            d: "iné",
            e: "neviem"
        }
    },
    {
        question: "Čo vypíše nasledujúci program?",
        answers: {
            a: "ahoj, janka!",
            b: "Ahoj, janka!",
            c: "AHOJ, JANKA!",
            d: "iné",
            e: "neviem"
        }
    },
    {
        question: "Čo vypíše nasledujúci program?",
        answers: {
            a: "va",
            b: "Eva",
            c: "E",
            d: "iné",
            e: "neviem"
        }
    },
    {
        question: "Čo vypíše nasledujúci program?",
        answers: {
            a: "osice!",
            b: "Kosice",
            c: "K",
            d: "iné",
            e: "neviem"
        }
    },
    {
        question: "Čo vypíše nasledujúci program?",
        answers: {
            a: "atusukas",
            b: "MatusLukas",
            c: "M,L",
            d: "iné",
            e: "neviem"
        }
    },
    {
        question: "Čo vypíše nasledujúci program?",
        answers: {
            a: "1 2 3 4",
            b: "1 2 3",
            c: "1 2",
            d: "iné",
            e: "neviem"
        }
    },
    {
        question: "Čo vypíše nasledujúci program?",
        answers: {
            a: "4 2 1 4 4 5",
            b: "2 1 2 5",
            c: "2 5",
            d: "iné",
            e: "neviem"
        }
    },
    {
        question: "Čo vypíše nasledujúci program?",
        answers: {
            a: "4 2 3 9 6 12",
            b: "4 2 3 6 8 12",
            c: "2 3 9 6",
            d: "iné",
            e: "neviem"
        }
    },
    {
        question: "Čo vypíše nasledujúci program?",
        answers: {
            a: "1 3 2 5",
            b: "2 1 3 5",
            c: "1 2 3 5",
            d: "iné",
            e: "neviem"
        }
    },
    {
        question: "Čo vypíše nasledujúci program?",
        answers: {
            a: "1 3 2 4 5",
            b: "1 2 3 4 5",
            c: "3 1 2 4 5",
            d: "iné",
            e: "neviem"
        }
    },
    {
        question: "Čo vypíše nasledujúci program?",
        answers: {
            a: "5 4 1 6 7 13",
            b: "1 4 5 6 7 13",
            c: "4 1 5 6 7 13",
            d: "iné",
            e: "neviem"
        }
    }*/
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
    let output = [];
    let answers = [];
    myQuestions.forEach((currentQuestion, questionNumber) => {
        
        //for (let letter in currentQuestion.answers) {
        answers.push(
        `<div class="answer-slide">
            <label class="choice-container">
                <span class="label-question">${currentQuestion.answers['a']}</span>
                <input type="radio" name="answer" value="${currentQuestion.answers['a']}">
                <span class="checkmark"></span>
            </label>
            <label class="choice-container">
                <span class="label-question">${currentQuestion.answers['b']}</span>
                <input type="radio" name="answer" value="${currentQuestion.answers['b']}">
                <span class="checkmark"></span>
            </label>
            <label class="choice-container">
                <span class="label-question">${currentQuestion.answers['c']}</span>
                <input type="radio" name="answer" value="${currentQuestion.answers['c']}">
                <span class="checkmark"></span>
            </label>
            <label class="choice-container">
                <span class="label-question">${currentQuestion.answers['d']}</span>
                <input type="radio" name="answer" value="${currentQuestion.answers['d']}">
                <span class="checkmark"></span>
            </label>
            <label class="choice-container">
                <span class="label-question">${currentQuestion.answers['e']}</span>
                <input type="radio" name="answer" value="${currentQuestion.answers['e']}">
                <span class="checkmark"></span>
            </label>
        </div>`
        );
        //}
        output.push(
			`<div id="slide${questionNumber+1}" class="slide">
				<svg class="blur" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
						
				<image  class="image-blur" filter="url(#blur-grayscale) " xlink:href="./kod${questionNumber+1}.jpg"></image>
				
				<filter id="blur-grayscale">
					<feColorMatrix in="SourceGraphic" type="saturate" values="5" result="A"></feColorMatrix>
					<feGaussianBlur in="A" stdDeviation="5" />
				</filter>
				
				<mask id="mask1">
					<circle cx="-50%" cy="-50%" r="30" fill="white" filter="url(#blur-grayscale)" />
				</mask>
				
				<image class="image-blur" xlink:href="./kod${questionNumber+1}.jpg"
					mask="url(#mask1)"></image>
				</svg>
			</div>`
        );
    });
    document.getElementById("question-answer").innerHTML = answers.join("");
    document.getElementById("code-pic").innerHTML = output.join("");
}
let currentSlide = 0;
function showExperiment(){

	const submitButton = document.getElementById("submit");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    const answerSlides = document.querySelectorAll(".answer-slide");
    
    let display = document.querySelector('#timer');
    let isLastPage = false;
    let timerInterval;

    function showSlide(n) {
        //slides[currentSlide].classList.remove("active-slide");
        //slides[n].classList.add("active-slide");

        document.getElementById(`slide${currentSlide+1}`).classList.add("active-slide");
        document.getElementById(`slide${n+1}`).classList.add("active-slide");

        answerSlides[currentSlide].classList.remove("active-slide");
        answerSlides[n].classList.add("active-slide");
        console.log(n)
        currentSlide = n;

        startTimer(timeForQuestion, display);

        if (currentSlide === slides.length - 1) {
          nextButton.style.display = "none";
          submitButton.style.display = "inline-block";
          isLastPage = true;
        } else {
          nextButton.style.display = "inline-block";
          submitButton.style.display = "none";
        }
    }

    function showNextSlide() {
        showSlide(currentSlide + 1);
    }

    showSlide(0);

    submitButton.addEventListener("click", function(event){
        event.preventDefault();
        showEndPage();
    });
    nextButton.addEventListener("click", function(event){
        event.preventDefault();
        clearInterval(timerInterval);
        showNextSlide();
    });
    function startTimer(duration, display) {
        var timer = duration, minutes, seconds;
        timerInterval = setInterval(function () {
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
                timer = duration;
                if (!isLastPage)
                    showNextSlide();
                else 
                    showEndPage();
                clearInterval(timerInterval);
            }
        }, 1000);
    }
}

function showEndPage(){
    $(".content-main").hide();
    $(".end-page").show();
}

window.onload = function (){

	var svgNS = "http://www.w3.org/2000/svg";
  
	$('.pic').mousemove(function (event) {
		event.preventDefault();
		
		var upX = (event.pageX - $('.slide').offset().left) + $('.slide').scrollLeft();
        var upY = (event.pageY - $('.slide').offset().top) + $('.slide').scrollTop();
        var mask = $('#mask1')[0];
        console.log(upX + ' ' + upY);
		
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
}; 
