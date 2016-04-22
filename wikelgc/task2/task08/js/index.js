/**
 * Created by admin on 2016/4/19.
 */
/**
 * Created by admin on 2016/4/18.
 */

//var Arrs = new Array();

var Arrs = [1,2,3];

function addEventHandler(flag){

    var tag = document.getElementById("tag").value.trim();
    tag = tag.replace(/[^0-9a-zA-Z\u4e00-\u9fa5]+/g,".");
    Arrs = tag.split(".");

    renderAqiList();
}

//
function initGetValue(){
    document.getElementById("sub").onclick = function(){addEventHandler();};
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