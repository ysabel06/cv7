// querySelectorAll permet de recupérer "l'adresse" de tous les éléments grâce au selecteur css
// cela me permet de récupérer une liste d'éléments sur lesquels je peux travailler
var rond = document.querySelectorAll(".rond");

// boucle qui parcours l'ntégralité de ma liste d'éléments
for (var i = 0; i < rond.length; i++) {
	// pour chaque éléments j'écoute l'évenement click 
	// pour un survol (non pris en compte sur écran tactile) : 
	// rond[i].onmouseover = function(){
	rond[i].onclick = function(){
		// je récuèpre l'ide de ma div
		var idDeMaDiv = this.id;
		//si ma div ne possède pas la class active
		if(!this.classList.contains("active")){
			// pour tous les éléments de type rond
			for (var j = 0; j < rond.length; j++) {
				// j'enlève la class active
				rond[j].classList.remove("active");
				// je récupère l'id
				var idTmp = rond[j].id;
				// et j'efface les block texte
				document.getElementById("texte_"+idTmp).style.display = "none";
				// solution alternative aux 2 dernières lignes :
				// document.getElementById("texte_"+rond[j].id).style.display = "none";
			}
			// ensuite je rajoute la classe active sur l'élement clické
			this.classList.add("active");
			// et j'affiche le block div correspondant grace à l'id de ma div
			document.getElementById("texte_"+idDeMaDiv).style.display = "block";
		} else {
			// si je reclick sur l'élément active j'enlève la class active
			this.classList.remove("active");
			// et j'efface le block texte correspondant
			document.getElementById("texte_"+idDeMaDiv).style.display = "none";
		}
	}
}