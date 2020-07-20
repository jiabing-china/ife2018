// 获取表格，选项的dom
let region = document.getElementById('region-select').getElementsByTagName('input');
let regionall = document.getElementsByName('regionall');
let table = document.getElementById('table-wrapper');
let product = document.getElementById('product-select').getElementsByTagName('input');
// 申明
let initselect = new Set();
let initproduct = new Set();
//存入地区和商品的值
for (let i = 0; i < sourceData.length; i++) {
    initselect.add(sourceData[i].region);
    initproduct.add(sourceData[i].product);
}
// 动态生成checkbox选项
// let strselect = '';
// let i = 1;
// let strregion = '<input type="checkbox" checkbox-type="all"  name="regionall"  value="0" >' + '全部' + '</input>';
// for (let x of initselect) {
//     strregion += '<input class="region" type="checkbox" name="region"  value=' + i + '>' + x + '</input>';
//     i++;
// }
// let strproductt = '';
// let strproduct = '<input type="checkbox" checkbox-type="all" name="product"  value="0">' + '全部' + '</input>';
// for (let x of initproduct) {
//     strproduct += '<input type="checkbox" name="product"   value=' + i + '>' + x + '</input>';
//     i++;
// }
// region.innerHTML = strregion;
// product.innerHTML = strproduct;

//默认选中第一个
// resettable(gettabledate('全部', '全部'));
for (let i = 1; i < region.length; i++) {
    region[i].onchange = function () {
        //for循环遍历，获取value和text的文本；
        // console.log(getselectvaule(region));
        // checkbox的逻辑判断
        checkboxchange(region);
        resettable(gettabledate(getselectvaule(region), getselectvaule(product)));
    }
}
for (let i = 1; i < region.length; i++) {
    product[i].onchange = function () {
        //for循环遍历，获取value和text的文本；
        // console.log(getselectvaule(region));
        // checkbox的逻辑判断
        checkboxchange(product);
        resettable(gettabledate(getselectvaule(region), getselectvaule(product)));
    }
}
region[0].onchange = function () {
    if (region[0].checked) {
        for (var i = 0; i < region.length; i++) {
            region[i].checked = region[0].checked;
        }
    }
    else {
        for (var i = 0; i < region.length; i++) {
            region[i].checked = region[0].checked;
        }

    }

    resettable(gettabledate(getselectvaule(region), getselectvaule(product)));
}
product[0].onchange = function () {
    if (product[0].checked) {
        for (var i = 0; i < product.length; i++) {
            product[i].checked = product[0].checked;
        }
    }
    else {
        for (var i = 0; i < product.length; i++) {
            product[i].checked = product[0].checked;
        }

    }
    resettable(gettabledate(getselectvaule(region), getselectvaule(product)));
}
// checkbox的逻辑判断
function checkboxchange(obj) {
    var flag = true;
    for (var i = 1; i < obj.length; i++) {
        if (!obj[i].checked) {
            flag = false;
        }
    }
    obj[0].checked = flag;
}

var selectvaule = [];

function getselectvaule(obj) {

    //如果是div的话，就需要获取div下的所有的input的dom
    var count = 0;
    selectvaule = [];
    for (var i = 0; i < obj.length; i++) {
        if (obj[i].checked && obj[i].nextSibling.nodeValue != '全部') {
            selectvaule[count] = {
                value: obj[i].value,
                text: obj[i].nextSibling.nodeValue,
            }
            count++;
        }
    }
    // console.log(selectvaule);
    return selectvaule;
    // var index = obj.selectedIndex; // 选中索引
    // return  obj.options[index].value; //  选中值  
    // return obj.options[index].text; //选中文本         
}
// 根据select选项获取数据
var ps = new Set();
function gettabledate(r, p) {
    ps = [];
    for (let i = 0; i < r.length; i++) {
        for (let j = 0; j < p.length; j++) {
            ps.push(getsourceData(r[i].text, p[j].text));
        }

    }
    return ps;
}
function getsourceData(sr, sp) {

    for (let i = 0; i < sourceData.length; i++) {
        // if (sr == '全部' && sp == '全部') {
        //     return ([sourceData[i].product, sourceData[i].region, sourceData[i].sale]);
        // }
        // if (sourceData[i].region == sr && sp == '全部') {
        //     return ([sourceData[i].product, sourceData[i].region, sourceData[i].sale]);
        // }
        // if (sr == '全部' && sourceData[i].product == sp) {
        //     return([sourceData[i].product, sourceData[i].region, sourceData[i].sale]);
        // }
        if (sourceData[i].region == sr && sourceData[i].product == sp) {
            return ([sourceData[i].product, sourceData[i].region, sourceData[i].sale]);
        }

    }

}
// 计算checkedbox选中了几个
function getrpcount(obj) {
    let count = 0;
    for (var i = 0; i < obj.length; i++) {
        if (obj[i].checked) {
            count++;
        }
    }
    return count;
}

function resettable(ps) {
    var pall = [];
    var rall = [];
    var sall = [];
    //获取数组内部排序
    ps = ps.sort(function (a, b) {
        if (a[0] < b[0]) {
            return -1;
        }
        if (a[0] > b[0]) {
            return 1;
        }
        return 0;
    })
    // 当商品选择了一个，地区选择了多个的时候，商品作为第一列，地区作为第二列，并且把商品这一列的单元格做一个合并，只保留一个商品名称

    let tablethbody = '';
    for (let i = 0; i < ps.length; i++) {
        tablethbody += '<tr>';
        //拼接商品
        tablethbody += gettbproduct(ps, i);
        //拼接地区
        tablethbody += '<td>';
        tablethbody += ps[i][1];
        tablethbody += '</td>';
        //拼接月销量
        for (let j = 0; j < ps[i][2].length; j++) {
            tablethbody += '<td>';
            tablethbody += ps[i][2][j];
            tablethbody += '</td>';
        }
        tablethbody += '</tr>';
    }

    let tablethead = '<table>' + contactthead() + tablethbody + '</table>';
    table.innerHTML = tablethead;
}

function contactthead() {
    // 输出表头：商品、地区、1月、2月、…… 12月
    let tablethead = '<tr>';
    tablethead += '<th>' + '商品' + '</th>';
    tablethead += '<th>' + '地区' + '</th>';
    tablethead += '<th>' + '1月' + '</th>';
    tablethead += '<th>' + '2月' + '</th>';
    tablethead += '<th>' + '3月' + '</th>';
    tablethead += '<th>' + '4月' + '</th>';
    tablethead += '<th>' + '5月' + '</th>';
    tablethead += '<th>' + '6月' + '</th>';
    tablethead += '<th>' + '7月' + '</th>';
    tablethead += '<th>' + '8月' + '</th>';
    tablethead += '<th>' + '9月' + '</th>';
    tablethead += '<th>' + '10月' + '</th>';
    tablethead += '<th>' + '11月' + '</th>';
    tablethead += '<th>' + '12月' + '</th>';
    tablethead += '</tr>';
    return tablethead;
}
function gettbproduct(ps, i) {
    let tbproduct = '';
    if (getrpcount(product) == 1 && getrpcount(region) > 1) {
        if (i > 0) {
            tbproduct = ''
            return tbproduct;
        }
        tbproduct = '<td rowspan =' + ps.length + '>' + ps[i][0] + '</td>';
        return tbproduct;
    }
    // if (getrpcount(product) > 1 && getrpcount(region) > 1) {
    //     console.log(i);
        
     
    // }
    tbproduct = '<td>' + ps[i][0] + '</td>';

    return tbproduct;

}

table.onmouseenter = function(){
    str = '';
    arr  = ps[0][2];
    for (let i = 0; i < arr.length; i++) {
        str += darwbar(arr[i], i);
    }
    drawsvgxy();
    bar.innerHTML = str;
}

