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
            getrpdata(item1, item2);
            let str = `<td rowspan=` + rl + `>${item2}</td><td>${item1}</td>`;
            for (var i = 0; i < rpdata.length; i++) {
                for (var j = 0; j < rpdata[i].length; j++) {
                    str += `<td><input type="text" value=` + rpdata[i][j] + `></td>`;
                }
            }
            tr.innerHTML = str;
            tbody.appendChild(tr);

        })
    })

}
function getrpdata(item1, item2) {
    rpdata = [];
    var localdata = getLocalStorage();
    if (localdata) {
        localdata.forEach((item, index) => {
            if (item.region == item1 && item.product == item2) {
                rpdata.push(item.sale);
            }
        })
        // console.log('加载LocalStorage数据');
        
    } else {
        sourceData.forEach((item, index) => {
            if (item.region == item1 && item.product == item2) {
                rpdata.push(item.sale);
            }
        })
        // console.log('无LocalStorage数据，加载json数据');
    }

}
