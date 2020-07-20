// let arr = [120, 100, 140, 160, 180, 185, 190, 210, 230, 245, 255, 270];
var arr = []; 
let str = '<text x="100" y="12" font-size="12" text-anchor="middle" fill="black">画柱状图</text>';
function drawsvgxy() {
    let svgwidth = "300";
    let svgheight = "300";
    let svgx = "300";
    let svgy = "300";
    let width = "10";
    let height = "100";
    str += '<line x1="0" y1="300" x2="300" y2="300" stroke="black" stroke-width="5"></line>';
    str += '<line x1="0" y1="300" x2="0" y2="0" stroke="black" stroke-width="5"></line>';
}

function darwbar(v, i) {
    let max = Math.max(...arr);
    let x = 10 + i * 20;
    let y = max - v + (300 - 270);
    return '<rect x=' + x + ' y=' + y + ' width="10" height=' + v + ' fill="red" />'
}
let bar = document.getElementById('bar');

// str += '<rect x="10" y="180" width="10" height="120" fill="red" />';

for (let i = 0; i < arr.length; i++) {
    str += darwbar(arr[i], i);
}
drawsvgxy();
bar.innerHTML = str;