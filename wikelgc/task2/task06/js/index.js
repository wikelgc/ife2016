/**
 * Created by admin on 2016/4/18.
 */

//var Arrs = new Array();

var Arrs = [1,2,3];

function addEventHandler(flag,number){

    if(flag == 1){
        Arrs.pop();//�ҳ�
    }else if(flag == 3){
        Arrs.shift();//���
    }

    //alert(number);
    if(number!=""){
        if(flag == 2){
            Arrs.push(number);//�ҽ�
        }else if(flag == 4){
            Arrs.unshift(number);//���
        }
    }
    renderAqiList();

}

//��ʼ��
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

//��Ⱦ����
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