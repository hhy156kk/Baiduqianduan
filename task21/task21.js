var queue = {
	list:[],
	interest:[],

	pushInterest:function(value){
		if(this.interest.indexOf(value) != -1){
			return;
		}

		this.interest.push(value);
		if(this.interest.length > 10){
			this.interest.shift();
		}
	},
	paintInterest:function(){
		var interestContainer = document.getElementById("interestContainer");
		interestContainer.innerHTML = "";
		var str = "";
		this.interest.forEach(function(e){
			str += "<div>" + e + "</div>";
		});
		interestContainer.innerHTML = str;
	},

	pushIn:function(value){
		this.list.forEach(function(e){
			if(value == e){
				return;
			}
		});

		this.list.push(value);
		if(this.list.length > 10){
			this.list.shift();
		}
	},

	paint:function(){
		var tagcontainer = document.getElementById("tagcontainer");
		tagcontainer.innerHTML = "";
		var str = ""
		this.list.forEach(function(e){
			str += "<div>" + e + "</div>";
		});

		tagcontainer.innerHTML = str;
	}
}

window.onload = function(){
	var taginput = document.getElementById("taginput");
	taginput.addEventListener("keypress",function(event){
		if(event.keyCode == 13){
			var value = taginput.value.split(/[^0-9A-Za-z\u4E00-\u9FA5]+/).filter(function(e){
				return e.trim();
			}).forEach(function(e){
				queue.pushIn(e);
			});

			queue.paint();

			event.preventDefault();
		}
	},false);

	var interestbutton = document.getElementById("interestbutton");
	var interestarea = document.getElementById("interestarea");
	interestbutton.addEventListener("click",function(event){
		var interest = interestarea.value.split(/[^0-9A-Za-z\u4E00-\u9FA5]+/).filter(function(e){
			return e.trim();
		}).forEach(function(e){
			queue.pushInterest(e);
		});

		queue.paintInterest();
	},false);
};

	

