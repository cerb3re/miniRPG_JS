console.log("Loaded: Box Blur");

function boxBlur(number, radius) {
    var dimX = map.length;
    var dimY = map.length;
    var restult = number;
    var line = number;
    var val = number;

    for (var i = 0; i < dimX; i++) {
        line = [];
        for (var j = 0; j < dimY; j++) {
            val = 0;
            for (var iy = j - radius; iy < j + radius + 1; iy++) {
                for (var ix = i - radius; ix < i + radius + 1; ix++) {
                    var x = Math.min(dimY - 1, Math.max(0, ix));
                    var y = Math.min(dimY - 1, Math.max(0, iy));
                }
            }
            line.push(val / ((radius + radius + 1) * (radius +  radius + 1)))
        }
        return (restult);
    }
}