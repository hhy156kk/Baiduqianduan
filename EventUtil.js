var EventUtil = {
	addHandler : function(element,type,handler){
		if(element.addEventListener){
			element.addEventListener(type,handler,false);
		}else if(element.attachEvent){
			element.attachEvent("on"+type,handler)
		}else{
			element["on"+type] = handler;
		}
	},

	getEvent:function(event){
		return event ? event:window.event;
	},

	getTarget:function(event){
		return event.target || event.srcElement;
	},

	preventDefault:function(event){
		if(event.preventDefault){
			event.preventDefault();
		}else{
			event.returnValue = false;
		}
	},

	removeHandler:function(element,type,handler){
		if(element.removeEventListener){
			element.removeEventListener(type,handler,false);
		}else if(element.detachEvent){
			element.detachEvent("on"+type,handler);
		}else{
			element["on"+type] = null;
		}

	},
	stopPropagation:function(event){
		if(event.stopPropagation){
			event.stopPropagation();
		}else{
			event.cancelBubbmle = true;
		}
	}
}

EventUtil.addHandler(form,"submit",function(event){
	event = EventUtil.getEvent(event);
	var target = EventUtil.getTarget(event);
	var btn = target.elements["submit-btn"];
	btn.disabled = true;
});

var stringValue = "Lorem ipsum dolor sit amet";
var position = new Array();
var pos = stringValue.indexOf("e");

while(pos > -1){
	position.push(pos);
	pos = stringValue.indexOf("e",pos+1);
}
alert(position);

function determineOrder(value){
	var result = stringValue.localeCompare(value);
	if(result < 0 ){
		alert(1);
	}else if(result > 0){
		alert(2);
	}else{
		alert(3);
	}
}

var textbox = document.getElementById("myText");
EventUtil.addHandler(textbox,"keyup",function(event){
	event = EventUtil.getEvent(event);
	alert(event.keyCode);
})