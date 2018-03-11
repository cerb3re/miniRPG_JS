console.log("Loaded: Map");

function drawHeight(number, container) {
    var dimX = number.length;
    var dimY = number[0].length;

    var canvas = document.createElement("canvas");
    canvas.height = dimY;
    canvas.width = dimX;

    var ctx = canvas.getContext("2d");
    var img = ctx.createImageData(canvas.width, canvas.height);
    var imgData = img.data;
    var i = 0;

    for (var y = 0; y < dimY; y++) {
        for (var x = 0; x < dimX; x++) {
            var height = Math.round(number[x][y]);

            imgData[i++] = height;
            imgData[i++] = height;
            imgData[i++] = height;
            imgData[i++] = 255;
        }
    }

    ctx.putImageData(img, 0, 0);
    container.innerHTML = "";
    container.appendChild(canvas);
}

