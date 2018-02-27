/* 
    Created on : 24 févr. 2018, 23:01:11
    Author     : Tanguy CHENIER
*/

//var ts = new Tileset("tileTest.png");
var map = new Map("premiere");
//    map.addPersonnage(new Personnage("firstChar.png", 7, 14, DIRECTION.GAUCHE));
var joueur = new Personnage("firstChar.png", 7, 14, DIRECTION.HAUT);
var PNJ = new Personnage("firstChar.png", 14, 7, DIRECTION.GAUCHE);
    map.addPersonnage(PNJ);
    map.addPersonnage(joueur);


window.onload = function() {
    var canvas = document.getElementById("rpgCanvas");
    var ctx = canvas.getContext('2d');
    
    canvas.width = map.getLargeur() * 32;
    canvas.height = map.getHauteur() * 32;
    
    setInterval(function() {
	map.dessinerMap(ctx);  
        PNJ.deplacer(DIRECTION.GAUCHE, map);
    }, 31);
    
       // if (PNJ.getCoordonneesAdjacentes()['x'] > 1) 
 
    window.onkeydown = function(event) {
	var e = event || window.event;
        var key = e.which || e.keyCode;

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