/**
 * Created by admin on 2016/4/19.
 */


var city = ["武汉","深圳","北京"];
var schools = [{
        school: ["华中科技大学", "武汉大学", "武汉科技大学", "武汉理工大学", "华中师范大学", "华中农业大学"]
},
    {
        school: ["深圳大学", "南方科技大学"]
},
    {
        school:["北京大学","清华大学","北京邮电大学","北京师范大学","北京航空大学","北京理工大学"]
}];



function initGetValue(){
    var form = document.getElementById("myForm");
    var checkFields = form.elements["check"];
    var school = document.getElementById("school");
    var work = document.getElementById("work");
    var selLocation = document.getElementById("selLocation");
    var selschool = document.getElementById("selschool");



    //单选按钮的事件监听
    checkFields[0].addEventListener("change",function(){
        school.style.display="block";
        work.style.display="none";

        var items = "<option>"+city[0]+"</option>";
        for(var i=1;i<city.length;i++){
            items += "<option>"+city[i]+"</option>";
        }
        selLocation.innerHTML = items;
    },false);

    //下拉框的事件监听
    selLocation.addEventListener("change",function(){
        items = "<option>"+schools[selLocation.selectedIndex].school[0]+"</option>";
        for(var i=1;i<schools[selLocation.selectedIndex].school.length;i++){
            items += "<option>"+schools[selLocation.selectedIndex].school[i]+"</option>";
        }
        selschool.innerHTML = items;
    });

    checkFields[1].addEventListener("change",function(){
        school.style.display="none";
        work.style.display="block";
    },false);
}


function init(){
    initGetValue();
}

init()