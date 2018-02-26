/* 
    Created on : 26 févr. 2018, 21:42:42
    Author     : Tanguy CHENIER
*/

console.log("C_Personnage: Loaded");
    
var DIRECTION = {
    "BAS": 0,
    "GAUCHE": 1,
    "DROITE": 2,
    "HAUT": 3
};

function Personnage(url, x, y, direction) {
	this.x = x; 
	this.y = y; 
	this.direction = direction;
	
	this.image = new Image();
	this.image.referenceDuPerso = this;
	this.image.onload = function() {
		if(!this.complete) 
			throw "Erreur de chargement du sprite nommé \"" + url + "\".";
		
		this.referenceDuPerso.largeur = this.width / 4;
		this.referenceDuPerso.hauteur = this.height / 4;
	};
	this.image.src = "sprites/" + url;
};

Personnage.prototype.dessinerPersonnage = function(context) {
	context.drawImage(
	this.image, 
	0, this.direction * this.hauteur, 
	this.largeur, this.hauteur, 
	(this.x * 32) - (this.largeur / 2) + 16, (this.y * 32) - this.hauteur + 24,
	this.largeur, this.hauteur
    );
};

Personnage.prototype.getCoordonneesAdjacentes = function(direction)  {
	var coord = {'x' : this.x, 'y' : this.y};
	switch(direction) {
		case DIRECTION.BAS : 
			coord.y++;
			break;
		case DIRECTION.GAUCHE : 
			coord.x--;
			break;
		case DIRECTION.DROITE : 
			coord.x++;
			break;
		case DIRECTION.HAUT : 
			coord.y--;
			break;
	}
	return coord;
};
	
Personnage.prototype.deplacer = function(direction, map) {
	this.direction = direction;
		
	var prochaineCase = this.getCoordonneesAdjacentes(direction);
	if(prochaineCase.x < 0 || prochaineCase.y < 0 || prochaineCase.x >= map.getLargeur() || prochaineCase.y >= map.getHauteur()) {
		return false;
	}
		
	this.x = prochaineCase.x;
	this.y = prochaineCase.y;
		
	return true;
};

