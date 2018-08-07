window.onload = function(){

	var inputs = document.getElementsByTagName('input');
	var btns = document.getElementsByTagName('button')
	var results = document.getElementById('results').children;
	var pattern = [];
	//验证邮箱
	pattern.push(/^([a-z0-9]+[_\-\.]?)*[a-z0-9]+@([a-z0-9]+[_\-\.]?)*[a-z0-9]+\.[a-z]{2,5}$/i);
	//验证手机
	pattern.push(/^0*1\d{10}$/);
	//验证QQ
	pattern.push(/^[1-9]\d{4,10}$/);
	//验证电话
	pattern.push(/^\d{3,4}-\d{7,8}(-\d{1,6})?$/);
	//验证身份证
	pattern.push(/^(\d{14}|\d{17})(\d|[xX])$/);
	//验证URL
	pattern.push(/https?:\/\/[a-z0-9\.\-]{1,255}\.[0-9a-z\-]{1,255}/i);
	//验证16进制颜色
	pattern.push(/#([\da-f]{3}){1,2}$/i);
	//验证浮点数
	pattern.push(/^(([1-9]\d*)|(\d+\.\d+)|0)$/);
	//验证正整数
	pattern.push(/^[1-9]\d*$/);
	//验证汉字
	pattern.push(/^([\u4E00-\u9FA5]|[\uFE30-\uFFA0])+$/gi);
	for (var i = 0; i < btns.length; i++) {
		btns[i].onclick = function(i){
			return function(){
				results[i].innerHTML = pattern[i].test(inputs[i].value);
			};
		}(i);
	}
}