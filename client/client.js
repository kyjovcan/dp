var socket = io(); 
socket.on('connect', function () { 
    let data = 'connected'
    socket.emit('mainInput', data);
});

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
	startTimer(32, display);
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
			console.log("cervena");
		}
		if (timer < 1){
			display.textContent = "KONIEC";
			console.log("koniec");
		}
    }, 1000);
}
