//事件绑定兼容
function addEventHandler(ele, event, hanlder) {
    if (ele.addEventListener) {
        ele.addEventListener(event, hanlder, false);
    } else if (ele.attachEvent) {
        ele.attachEvent("on"+event, hanlder);
    } else  {
        ele["on" + event] = hanlder;
    }
}

var tagInput = document.getElementById('tag_input');

window.onload = function () {
//事件绑定
	addEventHandler(tagInput,'keyup',showTag);

}



function showTag() {

	alert("a");	
}

