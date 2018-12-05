var socket = io(); 
let timeForQuestion = 90;
let codeActions = [];           // ***** NAJDOLEZITEJSIA PREMENNA S VYZBIERANYMI DATAMI *****
let actCode = {};                       
let moves = [];
let currentSlide = 0;

// zoznam odpovedi na vsetkych 45 otazok
// aktualne zakomentovany, okrem prvych troch, pretoze mam 3 png kody 
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

// pripojenie na server
socket.on('connect', function () { 
    let data = 'connected'
    socket.emit('mainInput', data);
});

// inicializacia experimentu
function startExperiment(){
    console.log('***** EXPERIMENT ODSTARTOVANY *****');
    $(".start-page").hide();
    $(".content-main").show();
    localStorage.removeItem("codeCount");
    buildQuestions();
    showExperiment();
}

// inicializacia otazok a odpovedi
function buildQuestions() {
    let output = [];
    let answers = [];

    // prejdenie vsetkych odpovedi, pre kazdu odpoved vytvorenie 
    // zoznamu odpovedi (answers) a zahmleneho kodu (output)
    myQuestions.forEach((currentQuestion, questionNumber) => {
        answers.push(
        `<div id="answer-slide${questionNumber+1}" class="answer-slide">
            <label class="choice-container">
                <span class="label-question">${currentQuestion.answers['a']}</span>
                <input type="radio" name="answer" value="a">
                <span class="checkmark"></span>
            </label>
            <label class="choice-container">
                <span class="label-question">${currentQuestion.answers['b']}</span>
                <input type="radio" name="answer" value="b">
                <span class="checkmark"></span>
            </label>
            <label class="choice-container">
                <span class="label-question">${currentQuestion.answers['c']}</span>
                <input type="radio" name="answer" value="c">
                <span class="checkmark"></span>
            </label>
            <label class="choice-container">
                <span class="label-question">${currentQuestion.answers['d']}</span>
                <input type="radio" name="answer" value="d">
                <span class="checkmark"></span>
            </label>
            <label class="choice-container">
                <span class="label-question">${currentQuestion.answers['e']}</span>
                <input type="radio" name="answer" value="e">
                <span class="checkmark"></span>
            </label>
        </div>`
        );
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

    // vypis elementov na obrazovku
    document.getElementById("question-answer").innerHTML = answers.join("");
    document.getElementById("code-pic").innerHTML = output.join("");
}

// funkcia pre postupne zobrazovanie kodov a odpovedi
function showExperiment(){
	const submitButton = document.getElementById("submit");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    const answerSlides = document.querySelectorAll(".answer-slide");
    
    let display = document.querySelector('#timer');
    let isLastPage = false;
    let timerInterval;

    // funkcia pre zobrazenie jedneho slajdu s kodom a odpovedami 
    function showSlide(n) {
        codeCounter();  // inkrementacia aktualneho poradia kodu v localStorage
        
        // zobrazenie elementu s kodom
        document.getElementById(`slide${currentSlide+1}`).classList.remove("active-slide");
        document.getElementById(`slide${n+1}`).classList.add("active-slide");

        // zobrazenie elementu s odpovedami
        answerSlides[currentSlide].classList.remove("active-slide");
        answerSlides[n].classList.add("active-slide");
        currentSlide = n;

        // zobrazenie casovaca pre kazdy slajd
        startTimer(timeForQuestion, display);

        // zobrazenie tlacidiel 'Dalej' a 'Koniec'
        if (currentSlide === slides.length - 1) {
          nextButton.style.display = "none";
          submitButton.style.display = "inline-block";
          isLastPage = true;
        } else {
          nextButton.style.display = "inline-block";
          submitButton.style.display = "none";
        }
    }

    // funkcia pre zobrazenie dalsieho slajdu
    function showNextSlide() {
        showSlide(currentSlide + 1);
    }

    // pociatocne zobrazenie PRVEHO slajdu s kodom
    showSlide(0);

    // ziskanie pouzivatelom vybranej odpovede ( format 'a'/'b'/.../'n\a' )
    $('input[name="answer"]').change((event)=>{
        var selectedAnswer = $("input:checked").attr('value')
        actCode.selectedAnswer = selectedAnswer;
    });

    // event listener na preklik na poslednu stranku
    submitButton.addEventListener("click", function(event){
        event.preventDefault();
        showEndPage();
    });

    // event listener na preklik na dalsi slajd
    nextButton.addEventListener("click", function(event){
        event.preventDefault();
        clearInterval(timerInterval);           // obnovenie casovaca
        writeActualCode(event);                 // zapis do premennej so vsetkymi informaciami
        showNextSlide();
    });

    // funkcia zobrazujuca casovac, taktiez posuva dalsi slajd ak vyprsi cas
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

// funkcia na zobrazenie poslednej stranky
function showEndPage(){
    $(".content-main").hide();
    $(".end-page").show();
    localStorage.removeItem("codeCount");       // reset pocitadla v localStorage             
    
    console.log('XXXXX EXPERIMENT UKONCENY XXXXX');
}

// funkcia na pridanie vsetkych potrebnych dat do objektu 
function writeActualCode(event) {
    actCode.codeNumber = localStorage.codeCount;
    actCode.selectedAnswer = actCode.selectedAnswer != null ? actCode.selectedAnswer : 'n/a';
    actCode.timestamp = event.timeStamp;
    actCode.moves = moves;                      // vsetky pohyby mysi - { timestamp, x, y }

    codeActions.push(actCode);
    //console.log(codeActions);
    actCode = {};
    actCode.selectedAnswer = null;
    moves = [];
}

// pocitadlo aktualneho kodu v localStorage
function codeCounter() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.codeCount) {
            localStorage.codeCount = Number(localStorage.codeCount)+1;
        } else {
            localStorage.codeCount = 1;
        }
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
}

// onload funkcia zbierajuca pohyby mysi a ich timestampy
window.onload = function (){
	var svgNS = "http://www.w3.org/2000/svg";
    var startTime = null;
    
	$('.pic').mousemove(function (event) {
        event.preventDefault();

        startTime = event.timeStamp;
        
        var actSlide = $(`#slide${localStorage.codeCount}`);
		var upX = (event.pageX - actSlide.offset().left) + actSlide.scrollLeft();
        var upY = (event.pageY - actSlide.offset().top) + actSlide.scrollTop();
        
        // pridanie info o pohybe do pola pohybov, ktore sa neskor prida do codeActions
        moves.push({"timestamp" : startTime, "mouseX" : upX, "mouseY" : upY});

        // maska cez blur filter podla pohybov mysi
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
}; 
