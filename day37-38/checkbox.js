var regioninput = document.getElementById('region-select').getElementsByTagName('input');
var productinput = document.getElementById('product-select').getElementsByTagName('input');

var regioncontent = [];
var productcontent = [];

regioninput[0].onclick = function () {
    for (var i = 1; i < regioninput.length; i++) {
        regioninput[i].checked = regioninput[0].checked;
    }
}
productinput[0].onclick = function () {
    for (var i = 1; i < productinput.length; i++) {
        productinput[i].checked = productinput[0].checked;
    }
}
inputchange(regioninput);
inputchange(productinput);
function inputchange(inputdom) {
    for (var i = 0; i < inputdom.length; i++) {
        inputdom[i].onchange = function () {
            if (inputdom[inputdom.length - 1].name == 'region') {
                regioncontent = [];
            }
            if (inputdom[inputdom.length - 1].name == 'product') {
                productcontent = [];
            }
            //全选和部分选中
            var flag = true;
            for (var i = 1; i < inputdom.length; i++) {
                if (!inputdom[i].checked) {
                    flag = false;
                }
                if (inputdom[i].checked && inputdom[i].name == 'region') {
                    regioncontent.push(inputdom[i].nextSibling.nodeValue);
                }
                if (inputdom[i].checked && inputdom[i].name == 'product') {
                    productcontent.push(inputdom[i].nextSibling.nodeValue);
                }             
            }
            getrp();
            inputdom[0].checked = flag;
            saveinput();//监听tbody下的input
        }
    }
}





