console.log("Loaded: myMap");

var myMap = Array(128);

for (var x = 0; x < 218; x++) {
    myMap[x] = Array(128);

    for (var y = 0; y < 128; y++) {
        myMap[x][y] = Math.round(255 * Math.random());
    }
}

var init = document.getElementById("testCanvas");
drawHeight(myMap, init);
boxBlur(myMap, init);