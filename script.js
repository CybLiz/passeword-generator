
// Méthode 1

const button = document.getElementById('button')
const password = document.getElementById('password')
let sizeSelector = document.getElementById('sizeSelector')

// au click sur le boutton , tu ajoute ce qu'il y a dans ma div avec l'Id password, la fonction générée password
// () =>  : fonction fléchée remplace le mot "function"
button.addEventListener('click', () => {
	password.innerHTML = generatePassword(20)
});

function generatePassword(size) {
	const c = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmopqstuvwxyz12345670§?!/<>=+-@#ù%^:.é"';
	// ```: déclare une variable "passwordgenerated" qui est null
	let passwordgenerated = ``;
	// dans la boucle for je déclare une variable (let i=0; i<size; i++ ) et je vais chercher la variable en question avec la varibale c a laquelle en met la méthode 
	// charAt en lui passant en paramétre (Math.random() *  c.length)
	for (let i = 0; i < size; i++) {
		passwordgenerated += c.charAt(Math.random() * c.length);
		// sizeSelector = generatePassword(size);

	}
	return passwordgenerated;

}


// Add a selector to define the size of the password to generate.


// méthode 2 il faut remplacer la 2éme div par un input


// const c =  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmopqstuvwxyz12345670§?!/<>=+-@#ù%^:.é"'
// const longueur = 20

// function generatePassword(event){
// 	event.preventDefault();
// 	let input= document.getElementById('password');
// 	let password ='';
// 	for(let i=0; i< longueur; i++){
// 	const indexC = Math.floor(Math.random() *  c.length);
// password += c[indexC];
// 	}
// 	// console.log(password)
// 	input.value = password
// }


// Add a selector to define the size of the password to generate.