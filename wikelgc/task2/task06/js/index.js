/**
 * Created by admin on 2016/4/18.
 */

//var Arrs = new Array();

var Arrs = [1,2,3];

function addEventHandler(flag){

    number = document.getElementById("number").value.trim();
    if(!number.match(/^\d+$/)) {
        alert("必须为整数")
        return;
    }

    if(flag == 1){
        Arrs.pop();
    }else if(flag == 3){
        Arrs.shift();
    }
    if(number!=""){
        if(flag == 2){
            Arrs.push(number);
        }else if(flag == 4){
            Arrs.unshift(number);
        }
    }
    renderAqiList();
}

//
function initGetValue(){
    document.getElementById("rightOut").onclick = function(){addEventHandler(1);};
    document.getElementById("rightIn").onclick = function(){addEventHandler(2);};
    document.getElementById("leftOut").onclick = function(){addEventHandler(3);};
    document.getElementById("leftIn").onclick = function(){addEventHandler(4);};
}

//
function renderAqiList(){

    var wrap = document.getElementById("api-wrap");
    var items ="<div class='inner-wrap'>"+Arrs[0]+"</div>";
    for(var i = 1;i<Arrs.length;i++){
        items += "<div class='inner-wrap'>"+Arrs[i]+"</div>";
    }
    wrap.innerHTML=items;

    if(Arrs.length==0){
        wrap.innerHTML="";
    }
}

function init(){
    initGetValue();
    renderAqiList();
}

init();