/**
 * Created by admin on 2016/4/21.
 */
//
var EventUtil = {
    addHandler:function(element,type,hander){
        if(element.addEventListener){
            addEventListener(type,hander,false)
        }else if(element.attachEvent){
            element.attachEvent("on"+type,hander);
        }else{
            element["on"+type]=hander;
        }
    },

    removeHandler:function(element,type,handler){
        if(element.removeEventListener){
            removeEventListener(type,hander,false)
        }else if(element.attachEvent){
            element.detachEvent("on"+type,hander);
        }else{
            element["on"+type]=hander;
        }
    }
}

var myForm = {
    username : "",
    password :"",
    passwords:"",
    email:"",
    phone:"",
    p:[]
}

function initGetValue(){
    myForm.p =document.getElementById("myForm").getElementsByTagName("p");
    myForm.username = document.getElementById("username");
    myForm.password = document.getElementById("password");
    myForm.passwords = document.getElementById("passwords");
    myForm.email = document.getElementById("email");
    myForm.phone = document.getElementById("phone");
}

function addEventHandler(){
    //用户名
    myForm.username.addEventListener("blur",function(){
        if(this.value.trim()==""){
            myForm.p[0].innerHTML = "<span class='error'>名称不能为空</span>";
            return;
        }

        if(!this.value.match(/^[A-Za-z\u4E00-\u9FA5]+$/)){
            myForm.p[0].innerHTML = "<span class='error'>格式必须为中英文</span>";
            return;
        }else{
            myForm.p[0].innerHTML = "<span class='true'>格式正确</span>";
        }

    },false);

    myForm.username.addEventListener("focus",function(){
        myForm.p[0].style.display="block";

    },false);


    //密码
    myForm.password.addEventListener("blur",function(){
        if(!this.value.trim().match(/^[0-9A-Za-z\u4E00-\u9FA5]{6,16}$/)){
            myForm.p[1].innerHTML = "<span class='error'>密码强度不够</span>";
            return;
        }else{
            myForm.p[1].innerHTML = "<span class='true'>密码可用</span>";
        }

    },false);

    myForm.password.addEventListener("focus",function(){
        myForm.p[1].style.display="block";

    },false);


    //确认密码
    myForm.passwords.addEventListener("blur",function(){
        if(this.value != myForm.password.value || myForm.password.value ==undefined || myForm.password.value == ""){
            myForm.p[2].innerHTML = "<span class='error'>密码错误</span>";
            return;
        }else{
            myForm.p[2].innerHTML = "<span class='true'>密码输入一致</span>";
            alert(this.value)
        }

    },false);

    myForm.passwords.addEventListener("focus",function(){
        myForm.p[2].style.display="block";

    },false);


    //邮箱
    myForm.email.addEventListener("blur",function(){
        if(!this.value.match(/^\w+@[a-z0-9]+\.[a-z]{2-4}$/)){
            myForm.p[3].innerHTML = "<span class='error'>邮箱格式错误</span>";
            return;
        }else{
            myForm.p[3].innerHTML = "<span class='true'>邮箱格式正确</span>";
        }

    },false);

    myForm.email.addEventListener("focus",function(){
        myForm.p[3].style.display="block";

    },false);

    //手机号
    myForm.phone.addEventListener("blur",function(){

        if(!this.value.match(/^1\d{12}$/)){
            myForm.p[4].innerHTML = "<span class='error'>手机格式错误</span>";
            return;
        }else{
            myForm.p[4].innerHTML = "<span class='true'>手机格式正确</span>";
        }


    },false);

    myForm.phone.addEventListener("focus",function(){
        myForm.p[4].style.display="block";

    },false);




}

function init(){
    initGetValue();
    addEventHandler()

}


init();