

var socket = io(); 
socket.on('connect', function () { 
    data = 'connected'
    socket.emit('mainInput', data);
});

window.onload = function (){
    
    var div = document.getElementById('code-list');

    var svgNS = "http://www.w3.org/2000/svg";

	$('.pic').mousemove(function (event) {
	    event.preventDefault();
	    //var upX = event.clientX;
	    //var upY = event.clientY;
	    var upX = (event.pageX - $('#code-list').offset().left);
		var upY = (event.pageY - $('#code-list').offset().top) ;

	    var mask = $('#mask1')[0];
	    
	    var circle = document.createElementNS(svgNS,"circle");
	    circle.setAttribute("cx", upX);
	    circle.setAttribute("cy", upY);
	    circle.setAttribute("r", "20");
	    circle.setAttribute("fill", "white");
	    circle.setAttribute("filter", "url(#filter2)");
	    
	    mask.appendChild(circle);
	    
	    setTimeout(function(){ 
	        circle.style.opacity = '0';
	        setTimeout(function(){ 
	            mask.removeChild(circle);
	        }, 300);
	    }, 300);
	});

}