var tablewrapper = document.getElementById('table-wrapper');

var tbody = document.querySelector('tbody');
var tbodytr;
var rpdata = [];
function getrp() {
    tbody.innerHTML = '';
    productcontent.forEach((item2, index2) => {
        regioncontent.forEach((item1, index1) => {

            var tr = document.createElement('tr');
            var rl = regioncontent.length;
            rl = 1;
            // if (index1 == 0) {
                getrpdata(item1, item2);
                let str = `<td rowspan=` + rl + `>${item2}</td><td>${item1}</td>`;
                for (var i = 0; i < rpdata.length; i++) {
                    for (var j = 0; j < rpdata[i].length; j++) {
                        str += `<td>` + rpdata[i][j] + `</td>`;
                    }
                }
                tr.innerHTML = str;
                tbody.appendChild(tr);
            // }
            // if (index1 > 0) {
            //     getrpdata(item1, item2);
            //     let str = `<td>${item1}</td>`;
            //     for (var i = 0; i < rpdata.length; i++) {
            //         for (var j = 0; j < rpdata[i].length; j++) {
            //             str += `<td>` + rpdata[i][j] + `</td>`;
            //         }
            //     }
            //     tr.innerHTML = str;
            //     tbody.appendChild(tr);
            // }
        })
    })

    tbodytr = tbody.getElementsByTagName('tr');
    for (let i = 0; i < tbodytr.length; i++) {
        tbodytr[i].onclick = function () {
            str = '<text x="100" y="12" font-size="12" text-anchor="middle" fill="black">画柱状图</text>';
            bar.innerHTML = str;

            barproduct = tbodytr[i].firstChild.innerText;
            barregion = tbodytr[i].children[1].innerText;

            console.log(tbodytr[i]);
            console.log(barproduct,barregion);
            let data = getbardata(barregion, barproduct);
            drawdata(data);
        }
    }
}
function getrpdata(item1, item2) {
    rpdata = [];
    sourceData.forEach((item, index) => {
        if (item.region == item1 && item.product == item2) {
            rpdata.push(item.sale);
        }
    })
}
function buildtable() {

}