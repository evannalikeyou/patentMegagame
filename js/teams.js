
window.onload=function(){
	function GetId(name){
		return document.getElementById(name);
	};
	function Event(eventname,callfunction,justfity){
	    if(document.addEventListener){
	        this.addEventListener(eventname,callfunction,justfity)
	    }else{
	        this.attachEvent("on"+eventname,callfunction)
	    }
	};
	$("#add_member").click(function(){
		var tables = $(".hide");
		tables[0].className = "show";
		alert(123);
	});
	$("#delete_mem1").click(function(){
		$("#delete_1").className = "hide";
		var mem_input = getElementById("delete_1").getElementsByTagName("input")
		for (var i = mem_input.length - 1; i >= 0; i--) {
			mem_input[i].value = "";
		};
	});
	$("#delete_mem2").click(function(){
		$("#delete_2").className = "hide";
		var mem_input = getElementById("delete_2").getElementsByTagName("input")
		for (var i = mem_input.length - 1; i >= 0; i--) {
			mem_input[i].value = "";
		};
	});
	$("#delete_mem3").click(function(){
		$("#delete_3").className = "hide";
		var mem_input = getElementById("delete_3").getElementsByTagName("input")
		for (var i = mem_input.length - 1; i >= 0; i--) {
			mem_input[i].value = "";
		};
	});
	// Event.call(GetId("add_member"),"click",function(){
	// 	var tables = document.getElementsByClassName("hide");
	// 	tables[0].className = "show";
	// },false)
	// Event.call(GetId("delete_mem1"),"click",function(){
	// 	GetId("delete_1").className = "hide";
	// 	var mem_input = GetId("delete_1").getElementsByTagName("input")
	// 	for (var i = mem_input.length - 1; i >= 0; i--) {
	// 		mem_input[i].value = "";
	// 	};
	// },false);
	// Event.call(GetId("delete_mem2"),"click",function(){
	// 	GetId("delete_2").className = "hide";
	// 	var mem_input = GetId("delete_2").getElementsByTagName("input")
	// 	for (var i = mem_input.length - 1; i >= 0; i--) {
	// 		mem_input[i].value = "";
	// 	};
	// },false);
	// Event.call(GetId("delete_mem3"),"click",function(){
	// 	GetId("delete_3").className = "hide";
	// 	var mem_input = GetId("delete_3").getElementsByTagName("input")
	// 	for (var i = mem_input.length - 1; i >= 0; i--) {
	// 		mem_input[i].value = "";
	// 	};
	// },false);
	var values;
	function clearValue(that_input){
		return function(){
			that_input.style.color = "#000";
			if (that_input.value == "电话") {
				values = that_input.value;
				that_input.value = "";
			}
			if (that_input.value == "姓名") {
				values = that_input.value;
				that_input.value = "";
			}
			if (that_input.value == "学号") {
				values = that_input.value;
				that_input.value = "";
			}
			if (that_input.value == "QQ") {
				values = that_input.value;
				that_input.value = "";
			}
			if (that_input.value == "邮箱") {
				values = that_input.value;
				that_input.value = "";
			}
			if (that_input.value == "辅导员姓名") {
				values = that_input.value;
				that_input.value = "";
			}
			if (that_input.value == "导师姓名") {
				values = that_input.value;
				that_input.value = "";
			}
		}
	}
	function fill(that_input){
		return function(){
			if (that_input.value == "姓名" || that_input.value == "电话" || that_input.value == "学号" || that_input.value == "验证码" || that_input.value == "") {
				that_input.value = values;
				that_input.style.color = "#dcdcdc";
				that_input.type = "text";
			};
		}
	}
	var inputs = document.getElementsByTagName("input");
	var input_text = new Array();
	for (var i = inputs.length - 1; i >= 0; i--) {
		if (inputs[i].type == "text") {
			input_text.push(inputs[i]);
		};
	};
	for (var i = 0; i < input_text.length; i++) {
		var a = input_text[i];
		Event.call(a,"focus",clearValue(a),false);
		Event.call(a,"blur",fill(a),false);
	};
}