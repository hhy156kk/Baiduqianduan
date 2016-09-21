




window.onload = function(){
	var preOrderButton = document.getElementById("preOrderButton");
	var inOrderButton = document.getElementById("inOrderButton");
	var postOrderButton = document.getElementById("postOrderButton");

	var rootNode = document.querySelector(".root");
	var divList = [];

	preOrderButton.addEventListener("click",function(event){
		reset();
		preOrder(rootNode);
		changeColor();
	},false);

	inOrderButton.addEventListener("click",function(event){
		reset();
		inOrder(rootNode);
		changeColor();
	},false);

	postOrderButton.addEventListener("click",function(event){
		reset();
		postOrder(rootNode);
		changeColor();
	},false);


	function preOrder(node){
		if(node){
			divList.push(node);
			preOrder(node.firstElementChild);
			preOrder(node.lastElementChild);
		}
	}

	function inOrder(node){
		if(node){
			inOrder(node.firstElementChild);
			divList.push(node);
			inOrder(node.lastElementChild);
		}
	}

	function postOrder(node){
		if(node){
			postOrder(node.firstElementChild);
			postOrder(node.lastElementChild);
			divList.push(node);
		}
	}

	function changeColor(){

		var i = 0;
		divList[0].style.backgroundColor = "blue";
		timer = setInterval(function(){
			if(i < divList.length){	
				i++;
				divList[i-1].style.backgroundColor = "#fff"
				divList[i].style.backgroundColor = "blue";	
			}else{
				clearInterval(timer);
				divList[divList.length-1].style.backgroundColor = "#fff";
			}

		},500);
	}

	function reset(){
		divList = [];
		var divs = document.getElementsByTagName("div");
		for(var i=0;i<divs.length;i++){
			divs[i].style.background = "#fff";
		}	
	}
	
}