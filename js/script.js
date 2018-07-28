function MyFirstApp(name, age){
	alert('Привет, меня зовут ' + name + ' И это моя первая программа!');

	function showskills() {
		let skills = ['html', 'css', 'photoshop'];

		for(let i = 0; i < skills.length; i++){
			// Я владею html <br>
			document.write('Я владею: ' + skills[i] + '<br>');
		}
	}

	function checkAge() {
		if (age >= 18) {
			alert('Welcome!');
		} else {
			alert('Сюда нельзя');
		}
	}


	function calcPow(num) {
		let powText = Math.pow(num,2);
		console.log(powText);
		alert(powText);
	}
	showskills();
	checkAge();
	calcPow(14);
}

MyFirstApp('Andrey', '18');


