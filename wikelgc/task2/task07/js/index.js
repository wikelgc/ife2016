/**
 * Created by admin on 2016/4/18.
 */

//var Arrs = new Array();

var Arrs = [1,2,3];
var time = true;

function addEventHandler(flag,number){

    if(flag == 1){
        Arrs.pop();//右出
    }else if(flag == 3){
        Arrs.shift();//左出
    }

    //alert(number);
    if(number!=""){
        if(flag == 2){
            Arrs.push(number);//右进
        }else if(flag == 4){
            Arrs.unshift(number);//左进
        }
    }
    renderAqiList();

}

//初始化
function initGetValue(){
    var number;
    document.getElementById("rightOut").onclick = function(){
        number = document.getElementById("number").value.trim();
        addEventHandler(1,number);
    };
    document.getElementById("rightIn").onclick = function(){
        number = document.getElementById("number").value.trim();
        addEventHandler(2,number);
    };
    document.getElementById("leftOut").onclick = function(){
        number = document.getElementById("number").value.trim();
        addEventHandler(3,number);
    };
    document.getElementById("leftIn").onclick = function(){
        number = document.getElementById("number").value.trim();
        addEventHandler(4,number);
    };
}

//渲染队列
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


    var showWrap = document.getElementById("show-wrap");
    var showitems ="<div class='show'   style='height: "+Arrs[0]*4+"px;left:"+0+"px'></div>";
    for(var i = 1;i<Arrs.length;i++){
        showitems += "<div class='show'  style='height: "+(Arrs[i]*4)+"px;left:"+(i*20)+"px'></div>";
    }
    showWrap.innerHTML=showitems;

    if(Arrs.length==0){
        showWrap.innerHTML="";
    }

}

function randomnumber(){
    var random = document.getElementById("random");

    random.onclick = function() {
        Arrs=[];
        for (var i = 0; i < 40; i++) {
            Arrs.push((Math.floor(Math.random()*100 + 1)) % 100);
        }
        renderAqiList();
    }
}


function sortData(){
    var sort = document.getElementById("sort");
    sort.onclick=function(){
        //setTimeout(incrementi(0),10);
        for(var i=0;i<Arrs.length;i++){
            for(var j=0;j<Arrs.length;j++){
                if(Arrs[i]>Arrs[j]){
                    var a = Arrs[i];
                    Arrs[i]=Arrs[j];
                    Arrs[j]=a;
                    renderAqiList();
                }
            }
        }
    };

}

function init(){
    initGetValue();
    renderAqiList();
    sortData()
    randomnumber();
}

init();/**
 * Created by admin on 2016/4/18.
 */
