/* 
    Created on : 25 févr. 2018, 11:11:02
    Author     : Tanguy CHENIER
*/

function Map(nom) {
    var xhr = getXMLHttpRequest();
    
    xhr.open("GET", './maps/' + nom + '.json', false);
    xhr.send(null);
    if(xhr.readyState !== 4 || (xhr.status !== 200 && xhr.status !== 0))
        throw new Error("the map named: \"" + nom + "\ cannot be loaded with the HttpCode: " + xhr.status);
    var mapJsonData = xhr.responseText;
    var mapData = JSON.parse(mapJsonData);
    
    this.tileset = new Tileset(mapData.tileset);
    this.terrain = mapData.terrain;
    this.personnages = new Array();

};

Map.prototype.addPersonnage = function(perso) {
	this.personnages.push(perso);
};

Map.prototype.getHauteur = function() {
	return this.terrain.length;
};

Map.prototype.getLargeur = function() {
	return this.terrain[0].length;
};

Map.prototype.dessinerMap = function(context) {
	for(var i = 0, l = this.terrain.length ; i < l ; i++) {
		var ligne = this.terrain[i];
		var y = i * 32;
		for(var j = 0, k = ligne.length ; j < k ; j++) {
			this.tileset.dessinerTile(ligne[j], context, j * 32, y);
		}
	}
        for(var i = 0, l = this.personnages.length ; i < l ; i++) {
            this.personnages[i].dessinerPersonnage(context);
        }
};


