var username = document.getElementById('username');
var phone = document.getElementById('phone');
var password = document.getElementById('password');
var getCode = document.getElementById('getCode');
var code = document.getElementById('code');
var zhuce = document.getElementById('zhuce');
var zhu1 = document.getElementById('zhu1');
var zhu3 = document.getElementById('zhu3');
var zhu4 = document.getElementById('zhu4');
var err1 = document.getElementById('err1');
var err2 = document.getElementById('err2');
var err3 = document.getElementById('err3');
var err4 = document.getElementById('err4');
var err5 = document.getElementById('err5');
var err6 = document.getElementById('err6');



// 用户名
username.onmouseover = function(){
    zhu1.style.display = 'block';
}
username.onmouseout = function(){
    zhu1.style.display = 'none';
}
username.onblur = function(){
    if(username.value == ""){
        err1.style.display = 'block';
        err4.style.display = 'none';
    }
    else{
        err1.style.display = 'none';
        var num = Num(username.value);
        if(num>14){
            err4.style.display = 'block';
        }
        else{
            err4.style.display = 'none';
        }
    }
    if(username.value != "" && phone.value != "" && password.value != "" && err4.style.display != "block" && err5.style.display!="block" &&  err6.style.display != "block"){
        getCode.disabled = false;
    }
    else{
        getCode.disabled = true;
    }
    if(username.value != "" && phone.value != "" && password.value != "" && code.value != "" && err4.style.display != "block" && err5.style.display!="block" &&  err6.style.display != "block"){
        zhuce.disabled = false;
        zhuce.style.backgroundColor = 'bule';
    }
    else{
        zhuce.disabled = true;
        zhuce.style.backgroundColor = '#bdcefc';
    }
}





//电话号码
phone.onmouseover = function(){
    if(err1.style.display == 'block' || err4.style.display == 'block'){
        t2.style.display = 'none';
    }
    else{
        t2.style.display = 'block';
    }   
}
phone.onmouseout = function(){
    t2.style.display = 'none';
}
phone.onblur = function(){
    if(phone.value == ""){
        err2.style.display = 'block';
        err5.style.display = 'none';
    }
    else{
        if(!isPhone(phone.value)){
            err5.style.display = 'block';
            err2.style.display = 'none';
        }
        else{
            err5.style.display = 'none';
            err2.style.display = 'none';
        }
    }    
    if(username.value != "" && phone.value != "" && password.value != "" && err4.style.display != "block" && err5.style.display!="block" &&  err6.style.display != "block"){
        getCode.disabled = false;
    }
    else{
        getCode.disabled = true;
    }    
    if(username.value != "" && phone.value != "" && password.value != "" && code.value != "" && err4.style.display != "block" && err5.style.display!="block" &&  err6.style.display != "block"){
        zhuce.disabled = false;
        zhuce.style.backgroundColor = 'blue';
    }
    else{    
        zhuce.style.backgroundColor = '#bdcefc';
    }
}



//密码
password.onmouseover = function(){
    if(err2.style.display == 'block' || err5.style.display == 'block'){
        zhu3.style.display = 'none';
    }
    else{
        zhu3.style.display = 'block'
    }
}
password.onmouseout = function(){
    zhu3.style.display = 'none';
}

password.onblur = function(){
    if(password.value == ""){
        err3.style.display = 'block';
        err6.style.display = 'none';
    }
    else{
        if(isPassword(password.value)){
            err6.style.display = 'none';
        }
        else{
            err6.style.display = 'block';
            err3.style.display = 'none';
        }
    }   
    if(username.value != "" && phone.value != "" && password.value != "" && err4.style.display != "block" && err5.style.display!="block" &&  err6.style.display != "block"){
        getCode.disabled = false;      
    }
    else{        
        getCode.disabled = true;
    }   
    if(username.value != "" && phone.value != "" && password.value != "" && code.value != "" && err4.style.display != "block" && err5.style.display!="block" &&  err6.style.display != "block"){
        zhuce.disabled = false;       
        zhuce.style.backgroundColor = 'blue';       
    }
    else{   
        zhuce.disabled = true;
        zhuce.style.backgroundColor = '#bdcefc';       
    }
}



//验证码
code.onmouseover = function(){
    if(err3.style.display == 'block' || err6.style.display == 'block' || err6.style.display == 'block'){
        zhu4.style.display = 'none';
    }
    else{
        zhu4.style.display = 'block'
    }
}
code.onmouseout = function(){
    zhu4.style.display = 'none';
}
code.onblur = function(){     
    if(username.value != "" && phone.value != "" && password.value != "" && code.value != "" && err4.style.display != "block" && err5.style.display!="block" &&  err6.style.display != "block"){
        zhuce.disabled = false;      
        zhuce.style.backgroundColor = 'bule';      
    }
    else{   
        zhuce.disabled = true;
        zhuce.style.backgroundColor = '#bdcefc';
        
    }
}



//得到验证码
getCode.onclick = function(){
    getCode.disabled = true;
    var i = 10;
    var temp = setInterval(function(){
        i--;
        console.log(i);
        getCode.value = "已发送"+"("+i+")";
        if(i <= 0){
            clearInterval(temp);
        }
    },1000)
}
if(username.value != "" && phone.value != "" && password.value != "" && err4.style.display != "block" && err5.style.display!="block" &&  err6.style.display != "block"){
    getCode.disabled = false;   
}
else{  
    getCode.disabled = true;
}
if(username.value != "" && phone.value != "" && password.value != "" && code.value != "" && err4.style.display != "block" && err5.style.display!="block" &&  err6.style.display != "block"){
    zhuce.disabled = false;   
    zhuce.style.backgroundColor = '#blue';  
}
else{
    zhuce.disabled = true;
    zhuce.style.backgroundColor = '#bdcefc';  
}




//函数
function isPhone(str){
    var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
    if(!myreg.test(str)){
        return false;
    }
    else{
        return true;
    }
}
function isPassword(str){
    var myreg=/(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{8,14}$/;
    if(!myreg.test(str)){
        return false;
    }
    else{
        return true
    }
}
function Num(str){
    var num = 0;
    for(var i = 0;i < str.length;i++){
        if(str.charCodeAt(i)>=0&&str.charCodeAt(i)<128){
            num++;
        }
        else{
            num+=2;
        }
    }
    return num;
}


