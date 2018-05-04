console.log("hello");

//Break chain animation
function breakChain(){
	var chain = document.getElementById("chain");
	chain.innerHTML = "&#xf0c1;";

	setTimeout(function(){
		chain.innerHTML = "&#xf127;";
	}, 1000);
}

//Call animation
breakChain();

//Animate every 2 seconds
setInterval(breakChain, 2000);


//Battery charged animation
function chargeBattery(){
	var battery = document.getElementById("battery");
	battery.innerHTML = "&#xf244;";
	setTimeout(function(){
		battery.innerHTML = "&#xf243;";
	}, 1000);
	setTimeout(function(){
		battery.innerHTML = "&#xf242;";
	}, 2000);
	setTimeout(function(){
		battery.innerHTML = "&#xf241;";
	}, 3000);
	setTimeout(function(){
		battery.innerHTML = "&#xf240;";
	}, 4000);
}

//Run every animation 5s
setInterval(chargeBattery, 5000);

//Run animation
chargeBattery();



function hourglassFull(){
	var hourglass = document.getElementById("hourglass");
	hourglass.innerHTML = "&#xf251";
	setTimeout(function(){
		hourglass.innerHTML = "&#xf252;";
	}, 1000);
	setTimeout(function(){
		hourglass.innerHTML = "&#xf253;";
	}, 2000);
}

//Run every 3 seconds
setTimeout(hourglassFull, 3000);

//Run animation
hourglassFull();




















