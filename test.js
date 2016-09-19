var body = document.querySelector("body");
var myDiv = document.querySelector("#myDiv");

var i,len,child = element.firstChild;
while(child != element.lastChild){
	if(child.nodeType == 1){
		processChild(child);
	}
	child = child.nextSibling;
}

var stringValue = "dsdsdsdwewewd";
var positions = new Array();
var pos = stringValue.indexOf("e");

while(pos > -1){
	positions.push(pos);
	pos.stringValue.indexOf("e",pos+1);
}

var btn = document.getElementById("myBtn");
btn.addEventListener("click",function(){
	alert(this.id);
},false);

var btn = document.getElementById("myBtn");
btn.attachEvent("onclick",function(){
	alert("clicked!");
})

var btn = document.getElementById("myBtn");
btn.attachEvent("onclick",function(){
	alert(this == window);
})

var EventUtil = {
	addHandler:function(element,type,handler){
		if(element.addEventListener){
			element.addEventListener(type,handler,false);
		}else if(element.attachEvent){
			element.attachEvent("on"+type,handler);
		}else{
			element["on"+type] = handler;
		}
	}

	getEvent:function(event){
		return event ? event : window;
	}

	getTarget:function(event){
		return event.target || event.srcElement;
	}

	preventDefault:function(event){
		if(event.preventDefault){
			event.preventDefault();
		}else{
			event.returnValue = false;
		}
	}

	removeHandler:function(element,type,handler){
		if(element.removeEventListener){
			element.removeEventListener(type,handler,false);
		}else if(element.attachEvent){
			element.attachEvent("on"+type,handler);
		}else{
			element["on"+type] = null;
		}
	}

	stopPropagation:function(event){
		if(event.stopPropagation){
			event.stopPropagation();
		}else{
			event.cancelBubble = true;
		}
	}
}

var btn = document.getElementById("myBtn");
var handler = function(){
	alert("clicked");
}

EventUtil.addHandler(btn,"click",handler);
EventUtil.removeHandler(btn,"click",handler);

var btn = document.getElementById("myBtn");
btn.onclick = function(event){
	alert(event.type);
};

btn.addEventListener("click",function(event){
	alert(event.type);
},false);

var btn = document.getElementById("myBtn");
btn.onclick = function(event){
	alert(event.currentTarget === this);
	alert(event.target === this);
}

document.body.onclick = function(event){
	alert(event.currentTarget == document.body);
	alert(this == document.body);
	alert(event.target === document.getElementById("myBtn"));
}

var btn = document.getElementById("myBtn");
btn.onclick = function(){
	var event = window.event;
	alert(event.type);
}         

var btn = document.getElementById("myBtn");
btn.onclick = function(){
	alert(window.event.srcElement == this);
}

btn.attachEvent("onclick",function(event){
	alert(event.srcElement == this);
})

var btn = document.getElementById("myBtn");
btn.onclick = function(event){
	alert("click");
	event = EventUtil.getEvent(event);
	EventUtil.stopPropagation(event);
}

document.body.onclick = function(event){
	alert("Body clicked");
}
