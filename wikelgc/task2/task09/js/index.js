/**
 * Created by admin on 2016/4/19.
 */
/**
 * Created by admin on 2016/4/19.
 */
/**
 * Created by admin on 2016/4/18.
 */

//var Arrs = new Array();

var arrTag = ["HTML5","Javascript","CSS"],
    arrLove = ["游泳","瑜伽","摄影"];


function addEventHandler(flag){

    var tag = document.getElementById("tag").value.trim(),
        Love = document.getElementById("tag").value.trim();
    tag = tag.replace(/[\n+|\r+|\t+|\s+]/g,".");
    arrTag = tag.split(".");

    Love = Love.replace(/[\n+|\r+|\t+|\s+]/g,".");
    arrLove = Love.split(".");

    //renderAqi();
}

//

function renderAqiTag(){
    var wrapTag = document.getElementById("api-tag");
    var itemIag ="<div class='tag-wrap'>"+arrTag[0]+"</div>";
    for(var i = 1;i<arrTag.length;i++){
        itemIag += "<div class='tag-wrap'>"+arrTag[i]+"</div>";
    }
    wrapTag.innerHTML=itemIag;

    if(arrTag.length==0){
        wrapTag.innerHTML="";
    }
}

function renderAqiLove(){
    var wrap = document.getElementById("api-love");
    var items ="<div class='love-wrap'>"+arrLove[0]+"</div>";
    for(var i = 1;i<arrLove.length;i++){
        items += "<div class='love-wrap'>"+arrLove[i]+"</div>";
    }
    wrap.innerHTML=items;

    if(arrLove.length==0){
        wrap.innerHTML="";
    }
}


function renderAqi(){
    renderAqiLove();
    renderAqiTag();

}

//
function initGetValue(){
    document.getElementById("lovebtn").onclick = function(){addEventHandler();};
}


////
//function renderAqiList(){
//
//    var wrap = document.getElementById("api-wrap");
//    var items ="<div class='inner-wrap'>"+Arrs[0]+"</div>";
//    for(var i = 1;i<Arrs.length;i++){
//        items += "<div class='inner-wrap'>"+Arrs[i]+"</div>";
//    }
//    wrap.innerHTML=items;
//
//    if(Arrs.length==0){
//        wrap.innerHTML="";
//    }
//}

function init(){
    initGetValue();
    renderAqi();
}

init();