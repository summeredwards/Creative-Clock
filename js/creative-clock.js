function clock(){

	var today;
	today = new Date();

	var year;
	year = today.getFullYear();

	var month;
	month = today.getMonth();

	var monthWord;
	monthWord = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

	var date;
	date = today.getDate();

	var day;
	day = today.getDay();

	var dayWord;
	dayWord = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

	var hour;
	hour = today.getHours();

	var minute;
	minute = today.getMinutes();

	var second;
	second = today.getSeconds();

	//calendar
	document.getElementById("year").innerHTML = year;
	document.getElementById("month").innerHTML = monthWord[month];
	document.getElementById("date").innerHTML = date;
	document.getElementById("day").innerHTML = dayWord[day];

	if(hour >= 12){
		document.getElementById("meridiem").innerHTML = "pm";
	}
	else{
		if(hour == 0){
			hour = 12;
		}
		document.getElementById("meridiem").innerHTML = "am";
	}

	if(hour > 12){
		hour = hour - 12;
	}

	if(minute < 10){
		minute = "0" + minute;
	}

	if(second < 10){
		second = "0" + second;	
	}

	document.getElementById("hour").innerHTML = hour;
	document.getElementById("minute").innerHTML = minute;
	document.getElementById("second").innerHTML = second;

	// hours
	var fries;
	fries = [
			"img/hr0-0.png",
			"img/hr1-1.png",
			"img/hr2-2.png",
			"img/hr3-3.png",
			"img/hr4-4.png",
			"img/hr5-5.png",
			"img/hr6-6.png",
			"img/hr7-7.png",
			"img/hr8-8.png",
			"img/hr9-9.png",
			"img/hr10-10.png",
			"img/hr11-11.png",
			"img/hr12-12.png"
	]

	if(hour == 1){
	document.getElementById("fries").innerHTML = "<img src='" + fries[1] + "' alt='Fries'>";
	}
	if(hour == 2){
	document.getElementById("fries").innerHTML = "<img src='" + fries[2] + "' alt='Fries'>";
	}
	if(hour == 3){
	document.getElementById("fries").innerHTML = "<img src='" + fries[3] + "' alt='Fries'>";
	}
	if(hour == 4){
	document.getElementById("fries").innerHTML = "<img src='" + fries[4] + "' alt='Fries'>";
	}
	if(hour == 5){
	document.getElementById("fries").innerHTML = "<img src='" + fries[5] + "' alt='Fries'>";
	}
	if(hour == 6){
	document.getElementById("fries").innerHTML = "<img src='" + fries[6] + "' alt='Fries'>";
	}
	if(hour == 7){
	document.getElementById("fries").innerHTML = "<img src='" + fries[7] + "' alt='Fries'>";
	}
	if(hour == 8){
	document.getElementById("fries").innerHTML = "<img src='" + fries[8] + "' alt='Fries'>";
	}
	if(hour == 9){
	document.getElementById("fries").innerHTML = "<img src='" + fries[9] + "' alt='Fries'>";
	}
	if(hour == 10){
	document.getElementById("fries").innerHTML = "<img src='" + fries[10] + "' alt='Fries'>";
	}
	if(hour == 11){
	document.getElementById("fries").innerHTML = "<img src='" + fries[11] + "' alt='Fries'>";
	}
	if(hour == 12){
	document.getElementById("fries").innerHTML = "<img src='" + fries[12] + "' alt='Fries'>";
	}

	// minutes
	var drink = [
				"img/0-0.png",
				"img/5-5.png",
				"img/10-10.png",
				"img/15-15.png",
				"img/20-20.png",
				"img/25-25.png",
				"img/30-30.png",
				"img/35-35.png",
				"img/40-40.png",
				"img/45-45.png",
				"img/50-50.png",
				"img/55-55.png",
				"img/60-60.png"
	]

	if(minute >= 0 && minute <= 4){
	document.getElementById("drink").innerHTML = "<img src='" + drink[0] + "' alt='Fries'>";
	}
	if(minute >= 5 && minute <= 9){
	document.getElementById("drink").innerHTML = "<img src='" + drink[1] + "' alt='Fries'>";
	}
	if(minute >= 10 && minute <= 14){
	document.getElementById("drink").innerHTML = "<img src='" + drink[2] + "' alt='Fries'>";
	}
	if(minute >= 15 && minute <= 19){
	document.getElementById("drink").innerHTML = "<img src='" + drink[3] + "' alt='Fries'>";
	}
	if(minute >= 20 && minute <= 24){
	document.getElementById("drink").innerHTML = "<img src='" + drink[4] + "' alt='Fries'>";
	}
	if(minute >= 25 && minute <= 29){
	document.getElementById("drink").innerHTML = "<img src='" + drink[5] + "' alt='Fries'>";
	}
	if(minute >= 30 && minute <= 34){
	document.getElementById("drink").innerHTML = "<img src='" + drink[6] + "' alt='Fries'>";
	}
	if(minute >= 35 && minute <= 39){
	document.getElementById("drink").innerHTML = "<img src='" + drink[7] + "' alt='Fries'>";
	}
	if(minute >= 40 && minute <= 44){
	document.getElementById("drink").innerHTML = "<img src='" + drink[8] + "' alt='Fries'>";
	}
	if(minute >= 45 && minute <= 49){
	document.getElementById("drink").innerHTML = "<img src='" + drink[9] + "' alt='Fries'>";
	}
	if(minute >= 50 && minute <= 54){
	document.getElementById("drink").innerHTML = "<img src='" + drink[10] + "' alt='Fries'>";
	}
	if(minute >= 55 && minute <= 58){
	document.getElementById("drink").innerHTML = "<img src='" + drink[11] + "' alt='Fries'>";
	}
	if(minute >= 59 && minute <= 60){
	document.getElementById("drink").innerHTML = "<img src='" + drink[12] + "' alt='Fries'>";
	}

	// seconds
	// purple to white 
	var Colors;
	Colors = Math.round(second * 1.745) + 152;

	document.body.style.backgroundColor = "rgb(" + Colors + "," + Colors + ",255)";
}


clock();
setInterval(clock, 10);


