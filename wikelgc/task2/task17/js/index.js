/**
 * Created by admin on 2016/4/18.
 */


function initGetValue(){
    document.getElementById("check").addEventListener('click',function(){
        var name = document.getElementById("name").value.trim(),
            message = document.getElementById("nameErrMessage"),
            len = name.length;

        if(!len){
            message.innerHTML = "<span class='red'>姓名不能为空</span>";
            return ;
        }


        if(!name.match(/^[A-Za-z\u4E00-\u9FA5]+$/)){
            message.innerHTML = "<span class='red'>格式必须为中英文</span>";
            return;
        }

        len = name.replace(/[\u4E00-\u9FA5]/g,"aa").length;

        if(len>=4 && len<16){
            message.innerHTML = "<span class='green'>格式正确</span>";
        }else if(len<4){
            message.innerHTML = "<span class='red'>字符太短</span>";
            return;
        }else if(len>16){
            message.innerHTML = "<span class='red'>字符太长</span>";
            return;
        }
    })
}

function init(){
    initGetValue();
    //renderApi();
}

init();