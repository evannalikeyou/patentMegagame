$("#login").click(
	function(){
		$("#shadow_all").fadeIn("slow");
		$("#pop_up").fadeIn("slow");
		h3_login.className = "h3_on";
		h3_signin.className = "h3_click";
		forms[0].id = "form_show";
		forms[1].id = "form_hide";
		document.body.onmousewheel = function(){
			return false;
		}
});
$("#signin").click(
	function(){
		$("#shadow_all").fadeIn("slow");
		$("#pop_up").fadeIn("slow");
		h3_login.className = "h3_click";
		h3_signin.className = "h3_on";
		forms[1].id = "form_show";
		forms[0].id = "form_hide";
		document.body.onmousewheel = function(){
			return false;
		}
});
$("#close").click(
	function(){
		$("#shadow_all").fadeOut("slow");
		$("#pop_up").fadeOut("slow");
		document.body.onmousewheel = function(){
			return true;
		}
})
function Event(eventname,callfunction,justfity){
	    if(document.addEventListener){
	        this.addEventListener(eventname,callfunction,justfity)
	    }else{
	        this.attachEvent("on"+eventname,callfunction)
	    }
	};
function submits(){
	var values;
	function clearValue(that_input){
		return function(){
			that_input.style.color = "#000";
			if (that_input.value == "学号/邮箱") {
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
			if (that_input.value == "确认密码") {
				values = that_input.value;
				that_input.value = "";
			}
			if (that_input.value == "密码") {
				values = that_input.value;
				that_input.value = "";
			}
			if (that_input.value == "验证码") {
				values = that_input.value;
				that_input.value = "";
			}
			if (that_input.name == "password") {
				that_input.type = "password"
			}
			if(that_input.name == "repassword") {
				that_input.type = "password"
			}
			if(that_input.name == "signin_password") {
				that_input.type = "password"
			}
		}
	}
	function fill(that_input){
		return function(){
			if (that_input.value == "学号/邮箱" || that_input.value == "密码" || that_input.value == "确认密码" || that_input.value == "验证码" || that_input.value == "") {
				that_input.value = values;
				that_input.style.color = "#dcdcdc";
				that_input.type = "text";
			};
		}
	}
	var input_all = document.getElementById("pop_up").getElementsByTagName("input");
	var inputs = new Array();
	for (var i = input_all.length - 1; i >= 0; i--) {
		if(input_all[i].type == "text"){
			inputs.push(input_all[i]);
		}
	};
	for (var i = 0; i < inputs.length; i++) {
		var a = inputs[i];
		Event.call(a,"focus",clearValue(a),false);
		Event.call(a,"blur",fill(a),false);
	};
	var h3_login = document.getElementById("h3_login");
	var h3_signin = document.getElementById("h3_signin");
	var forms = document.getElementById("pop_up").getElementsByTagName("form");
	Event.call(h3_login,"click",function(){
		h3_login.className = "h3_on";
		h3_signin.className = "h3_click";
		forms[0].id = "form_show";
		forms[1].id = "form_hide";
	},false);
	Event.call(h3_signin,"click",function(){
		h3_login.className = "h3_click";
		h3_signin.className = "h3_on";
		forms[1].id = "form_show";
		forms[0].id = "form_hide";
	},false)
}
submits();