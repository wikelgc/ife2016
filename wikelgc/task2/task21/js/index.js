/**
 * Created by admin on 2016/4/22.
 */
var content = document.getElementById("content");
var items="<ul><li class='tableLi'></li></ul>";

var getClick = document.getElementById("getClick");
var getCommand = document.getElementById("getCommand");



for(var i=1;i<100;i++){
    items+="<ul><li class='tableLi'></li></ul>";
}
content.innerHTML = items;

var li = content.getElementsByTagName("li");

var number = Math.floor(Math.random()*100);

//上下左右
var up   = "<div class='upBlue'></div><div class='downRed'></div>";
var down = "<div class='upRed'></div><div class='downBlue'></div>";
var left = "<div class='leftBlue'></div><div class='rightRed'></div>";
var right = "<div class='leftRed'></div><div class='rightBlue'></div>"

var turn = [up,right,down,left];
//默认情况下是向上的
var Items = up;
li[number].innerHTML=Items;

getClick.addEventListener("click",function(){
    initEvent();
},false);


function initEvent(){
    var command = getCommand.value.trim().toLocaleLowerCase();

    li[number].innerHTML="";
    if(command == "go"){
        if(Items == up && number/10.0>1){
            number=number -10;
        }else if(Items == down && number/10.0<9){
            number =number + 10;
        }else if(Items == left && number%10>0){
            number--;
        }else if(Items == right && number%10<9){
            number++;
        }
    }else if(command == "turn left" || command == "left"){
        Items = turn[(turn.indexOf(Items)+3)%4];
    }else if(command == "turn right" || command == "right"){
        Items = turn[(turn.indexOf(Items)+1)%4];
    }else if(command == "turn back" || command == "back"){
        Items = turn[(turn.indexOf(Items)+2)%4];
    }

    li[number].innerHTML=Items;
}
