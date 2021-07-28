function funcsutl(){
	let bill = document.getElementById('bill');
	let choose = document.getElementById('idchoose');
	let people = document.getElementById('idpeople');
	let total;
		total = (bill.value * choose.value)/people.value
		document.getElementById('idsutl').innerHTML=total
	};