// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');
console.log(header)
window.onscroll = function() {
    const top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}
// collapse navbar after click on small devices
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')

navLinks.forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
})

let number = document.getElementById("number");
let counter = 0;
setInterval(() => {
	if (counter == 75) {
		clearIntreval();
	}
	else{
counter += 1;
number.innerHTML = counter +  "%";
    }
}, 30);

let number1 = document.getElementById("numberOne");
let counter1 = 0;
setInterval(() => {
	if (counter1 == 60) {
		clearIntreval();
	}
	else{
counter1 += 1;
number1.innerHTML = counter1 +  "%";
    }
}, 30);

let number2 = document.getElementById("numberTwo");
let counter2 = 0;
setInterval(() => {
	if (counter2 == 55) {
		clearIntreval();
	}
	else{
counter2 += 1;
number2.innerHTML = counter2 +  "%";
    }
}, 30);

let number3 = document.getElementById("numberThree");
let counter3 = 0;
setInterval(() => {
	if (counter3 == 80) {
		clearIntreval();
	}
	else{
counter3 += 1;
number3.innerHTML = counter3 +  "%";
    }
}, 30);

let number4 = document.getElementById("numberFour");
let counter4 = 0;
setInterval(() => {
	if (counter4 == 90) {
		clearIntreval();
	}
	else{
counter4 += 1;
number4.innerHTML = counter4 +  "%";
    }
}, 30);

let number5 = document.getElementById("numberFive");
let counter5 = 0;
setInterval(() => {
	if (counter5 == 60) {
		clearIntreval();
	}
	else{
counter5 += 1;
number5.innerHTML = counter +  "%";
    }
}, 30);
