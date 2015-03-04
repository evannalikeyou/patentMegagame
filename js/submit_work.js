//发布表白字数
window.onload = function(){
	function GetId(name){
		return document.getElementById(name);
	};
	var wordsize;
	var maxlength = 500;
	if(document.addEventListener){
		GetId("text").addEventListener("click", function(){
			getwordsize()
		}, false);
	}else{
		GetId("text").attachEvent("onclick",function(){
			getwordsize()
		});
	}
	
	function getwordsize(){
		wordsize = GetId("text").value.length;
		setTimeout(function(){
			getwordsize();
			setwordsize();
		}, 100);
	};
	function setwordsize(){
		var maxText = GetId("text").getAttribute("maxlength");
		if(wordsize >= maxlength){ 
			GetId("text").value = GetId("text").value.substring(0,maxlength); 
		}
		GetId("wordsize").innerHTML = wordsize;
	};
}