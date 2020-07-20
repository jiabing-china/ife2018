var barregion;
var barproduct;


// tbody.onclick = function (e) {
//     str = '<text x="100" y="12" font-size="12" text-anchor="middle" fill="black">画柱状图</text>';
//     bar.innerHTML = str;
//     var tbodytr = tbody.getElementsByTagName('tr');
//     for (let i = 0; i < tbodytr.length; i++) {
//         barproduct = tbodytr[0].firstChild.innerText;
//         barregion = tbodytr[0].children[1].innerText;
//         console.log(tbodytr);
//         let data = getbardata(barregion, barproduct);

//         drawdata(data);
//     }

// }

function getbardata(barregion, barproduct) {
    let data = [];
    sourceData.forEach((item, index) => {
        if (item.region == barregion && item.product == barproduct) {
            data = item.sale;
        }
    })
    return data;

}
let str = '<text x="100" y="12" font-size="12" text-anchor="middle" fill="black">画柱状图</text>';
let bar = document.getElementById('bar');
function drawdata(data) {
    for (let i = 0; i < data.length; i++) {
        str += darwbar(data[i], i, data);
    }
    drawsvgxy();
    bar.innerHTML = str;
}

function darwbar(v, i, data) {
    let max = Math.max(...data);
    let x = 10 + i * 30;
    let y = 400 - v;
    return '<rect x=' + x + ' y=' + y + ' width="10" height=' + v + ' fill="red" />'
}
function drawsvgxy() {
    str += '<line x1="0" y1="400" x2="400" y2="400" stroke="black" stroke-width="5"></line>';
    str += '<line x1="0" y1="400" x2="0" y2="0" stroke="black" stroke-width="5"></line>';
}
