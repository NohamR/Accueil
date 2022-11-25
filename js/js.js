/* //////////////// 3.Range slider ///////////////// */



function glissiere() {
	var entree = document.getElementById("entree");
	var texte5 = document.getElementById("texte5");
	texte5.innerHTML = entree.value


	var entree = document.getElementById("entree");
	var texte3 = document.getElementById("texte3");
	texte3.style.fontSize = entree.value/5+"px"


}

function taille() {
	var entree = document.getElementById("entree");
	var countdown10 = document.getElementById("countdown10");
	countdown10.style.fontSize = entree.value+"px"
	
	var entree = document.getElementById("entree");
	var countdown10 = document.getElementsByClassName("minuteur");
	countdown10.style.fontSize = entree.value+"px"

	var entree = document.getElementById("entree");
	var countdown10 = document.getElementById("countdown10");
	countdown10.style.fontSize = entree.value+"px"


}




// function glissiere() {
// 	var composant = document.getElementById("entree");
// 	var texte3 = document.getElementById("texte3");
// 	texte3.innerHTML = composant.value

//     // countdown10.style.fontSize = composant.value+"px"

// }