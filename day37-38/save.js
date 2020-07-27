var changedata = [];
// 全局变量，用于查询存储在localStorage中的数据
var KEY = "LOCAL_DATA";
function savedata() {
    if (!localStorage.getItem(KEY)) {
        initLocalStorage();
        // console.log('无本地数据，初始化');
    }
    else {
        // console.log('有本地数据，保存编辑的数据');
        savechange();//保存修改后数据
    }
}
//保存修改后数据
function savechange() {

    let localdata = getLocalStorage();
    localdata.forEach((item1, index1) => {
        changedata.forEach((item2, index2) => {
            if (item1.product == item2.product && item1.region == item2.region) {
                item1.sale = item2.sale;
            }
        })
    })
    let data = [];
    data = JSON.stringify(localdata);
    localStorage.setItem(KEY, data)
    changedata = [];
    // $.ajax({
    //     url: "ife31data.js",
    //     type: 'post',
    //     dataType: 'json',
    //     data: data,
    //     success: function (result) {

    //     },
    //     error: function () {

    //     }
    // });
}
//初始化本地存储
function initLocalStorage() {
    if (!getLocalStorage()) {
        let data = [];
        // data = sourceData.slice();
        // console.log(data);
        //多此一举
        data = JSON.stringify(sourceData);
        console.log(data);
        localStorage.setItem(KEY, data)
    }

}
//获得localStorage的值
function getLocalStorage() {
    return JSON.parse(localStorage.getItem(KEY))
}

function deletedata() {
    // localStorage.removeItem('myCat');
    // 移除所有
    localStorage.clear();
    // let cat = localStorage.getItem('myCat');
    console.log(localStorage);
}
function saveinput() {
    let input = document.querySelectorAll('tbody input');
    // console.log(input);

    Array.from(input).forEach((item, index) => {
        item.onclick = function () {
            var oldvalue = item.value;
            item.onblur = function (e) {
                var regExp = /^[1-9]\d*$/;
                if (!regExp.test(item.value)) {
                    item.value = oldvalue;
                    alert("请输入正整数！");
                }
                let tddata = item.parentNode.parentNode.querySelectorAll('td');
                let saledata = [];
                for (var i = 2; i < tddata.length; i++) {
                    saledata.push(tddata[i].firstElementChild.value);
                }
                var onblurdata = new changeJson(tddata[0].innerText, tddata[1].innerText, saledata);
                changedata.push(onblurdata);
                // console.log(changedata);
            }
        }
    })
}
function changeJson(product, region, sale) {
    this.product = product;
    this.region = region;
    this.sale = sale;
};
