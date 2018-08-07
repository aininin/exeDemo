window.onload = function(){
	var imgs = document.getElementById('clock').getElementsByTagName('img');
	var now = new Date();
	var prevtime = plusZero( now.getHours() ) + plusZero( now.getMinutes() ) + plusZero( now.getSeconds() );
	console.log(prevtime)
	var nexttime = "";
	var arr = [];
	var timer = null;
	//改变时分秒数字的图片
	for( var i=0; i<imgs.length; i++ ){
		imgs[i].src = "./images/" + prevtime.charAt(i) +".png";
	}
	//每1秒钟变换一次
	setInterval(function(){
		var date = new Date();
		nexttime =  plusZero(date.getHours()) + plusZero(date.getMinutes()) + plusZero(date.getSeconds());
		changeTime( prevtime,nexttime );
		prevtime = nexttime;
	},1000);
	//比较两次时间数字，不同的数字进行重设
	function changeTime( str1, str2 ){
		arr = [];//每次清空数组里面的数据
		for( var i =0; i<str1.length; i++ ){
			if( str1.charAt(i) != str2.charAt(i) ){
				arr.push(i);
			}
		}
		for( var i=0; i<arr.length; i++ ){
			imgs[arr[i]].src = "./images/" + nexttime.charAt( arr[i] ) + ".png"
		}
	}
	//补0操作，保证数字一直为六位数
	function plusZero( num ){
		if( num<10 ){
			return num = "0" + num;
		}else{
			return num = num + "";
		}
	}
}