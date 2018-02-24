/* 
    Created on : 24 févr. 2018, 23:01:11
    Author     : Tanguy CHENIER
*/

console.log("C_Rpg: Loaded");
var ts = new Tileset("tileTest.png");

window.onload = function() {
    var canvas = document.getElementById("rpgCanvas");
    var ctx = canvas.getContext('2d');

    ts.dessinerTile(1, ctx, 10, 10);
    ts.dessinerTile(5, ctx, 50, 10);
    ts.dessinerTile(6, ctx, 90, 10);
    ts.dessinerTile(7, ctx, 10, 10);
};