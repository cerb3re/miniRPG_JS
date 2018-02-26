/* 
    Created on : 24 févr. 2018, 23:01:11
    Author     : Tanguy CHENIER
*/

console.log("C_Rpg: Loaded");
//var ts = new Tileset("tileTest.png");
var map = new Map("premiere");
    map.addPersonnage(new Personnage("firstChar.png", 14, 8, DIRECTION.GAUCHE));
//    map.addPersonnage(new Personnage("firstChar.png", 7, 14, DIRECTION.GAUCHE));
var joueur = new Personnage("firstChar.png", 7, 14, DIRECTION.BAS);
map.addPersonnage(joueur);


window.onload = function() {
    var canvas = document.getElementById("rpgCanvas");
    var ctx = canvas.getContext('2d');

//    ts.dessinerTile(1, ctx, 10, 10);
//    ts.dessinerTile(5, ctx, 50, 10);
//    ts.dessinerTile(6, ctx, 90, 10);
//    ts.dessinerTile(7, ctx, 10, 10);
    
    canvas.width = map.getLargeur() * 32;
    canvas.height = map.getHauteur() * 32;
    
//    map.dessinerMap(ctx);
    setInterval(function() {
	map.dessinerMap(ctx);
    }, 40);

    window.onkeydown = function(event) {
	var e = event || window.event;
        var key = e.which || e.keyCode;
        console.log("Actual key: " + key);
        
        switch(key) {
	case 38 : case 122 : case 119 : case 90 : case 87 : 
		joueur.deplacer(DIRECTION.HAUT, map);
		break;
	case 40 : case 115 : case 83 : // Flèche bas, s, S
		joueur.deplacer(DIRECTION.BAS, map);
		break;
	case 37 : case 113 : case 97 : case 81 : case 65 : 
		joueur.deplacer(DIRECTION.GAUCHE, map);
		break;
	case 39 : case 100 : case 68 : // Flèche droite, d, D
		joueur.deplacer(DIRECTION.DROITE, map);
		break;
	default : 
		return true;
}

    };
};