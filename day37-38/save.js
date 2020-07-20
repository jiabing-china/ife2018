// 全局变量，用于查询存储在localStorage中的数据
var KEY = "LOCAL_DATA";
function savedata() {
    if (!localStorage.getItem(KEY)) {
        initLocalStorage();
        console.log('无本地数据，初始化');      
    }
    else{
        
        console.log('有本地数据，保存编辑的数据');
    }


}
//初始化本地存储
function initLocalStorage() {
    if (!getLocalStorage()) {
        let data = [];
        data = sourceData.slice();
        data = JSON.stringify(data);
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
