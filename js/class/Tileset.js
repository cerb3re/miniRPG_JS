/* 
    Created on : 24 févr. 2018, 22:13:12
    Author     : Tanguy CHENIER
*/

// use to print a tile
function Tileset(url) {
    this.image = new Image();
    this.image.src = "tilesets/" + url;
    this.image.referenceDuTileset = this;
    this.image.onload = function () {
      if(!this.complete) {
          throw new Error("Error while loading " + url + " !");
      }
      this.referenceDuTileset.largeur = this.width / 32;
    };
    
    Tileset.prototype.dessinerTile = function(numero, context, xDestination, yDestination) {
        var xSourceEnTiles = numero % this.largeur;
        if (xSourceEnTiles === 0) xSourceEnTiles = this.largeur;
        
        var ySourceEnTiles = Math.ceil(numero / this.largeur);
        var xSource = (xSourceEnTiles - 1) * 32;
        var ySource = (ySourceEnTiles - 1) * 32;
        context.drawImage(this.image, xSource, ySource, 32, 32, xDestination, yDestination, 32, 32);
    };
};
