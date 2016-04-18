/* ���ݸ�ʽ��ʾ

var aqiSourceData = {
    "����": {
        "2016-01-01": 10,
        "2016-01-02": 10,
        "2016-01-03": 10,
        "2016-01-04": 10
    }
};
*/

// �������������������ģ�����ɲ�������
function getDateStr(dat) {
    var y = dat.getFullYear();
    var m = dat.getMonth() + 1;
    m = m < 10 ? '0' + m : m;
    var d = dat.getDate();
    d = d < 10 ? '0' + d : d;
    return y + '-' + m + '-' + d;
}
function randomBuildData(seed) {
    var returnData = {};
    var dat = new Date("2016-01-01");
    var datStr = ''
    for (var i = 1; i < 92; i++) {
        datStr = getDateStr(dat);
        returnData[datStr] = Math.ceil(Math.random() * seed);
        dat.setDate(dat.getDate() + 1);
    }
    return returnData;
}

var aqiSourceData = {
    "����": randomBuildData(500),
    "�Ϻ�": randomBuildData(300),
    "����": randomBuildData(200),
    "����": randomBuildData(100),
    "�ɶ�": randomBuildData(300),
    "����": randomBuildData(500),
    "����": randomBuildData(100),
    "����": randomBuildData(100),
    "����": randomBuildData(500)
};

// ������Ⱦͼ�������
var chartData = {};

// ��¼��ǰҳ��ı�ѡ��
var pageState = {
    nowSelectCity: -1,
    nowGraTime: "day"
}

/**
 * ��Ⱦͼ��
 */
function renderChart() {

}

/**
 * �ա��ܡ��µ�radio�¼����ʱ�Ĵ�����
 */
function graTimeChange() {
    // ȷ���Ƿ�ѡ����˱仯

    // ���ö�Ӧ����

    // ����ͼ����Ⱦ����
}

/**
 * select�����仯ʱ�Ĵ�����
 */
function citySelectChange() {
    // ȷ���Ƿ�ѡ����˱仯

    // ���ö�Ӧ����

    // ����ͼ����Ⱦ����
}

/**
 * ��ʼ���ա��ܡ��µ�radio�¼��������ʱ�����ú���graTimeChange
 */
function initGraTimeForm() {
    //var time = document.getElementById("form-gra-time");
    var radio = document.getElementsByName("gra-time");
    for(var i=0;i<radio.length;i++){
        (function(m){
            addEventListener(radio[m],'click',function(){
                graTimeChange(radio[m]);
            })
        })(i);
    }

    addEventHandler(document,'mouseover',function(){
        var ele = event.target;
        ele.className+= ' show';
    });

    addEventHandler(document,'mouseout',function(){
        var ele = event.target;
        ele.className=ele.className.replace(/show/," ");
    });
}

/**
 * ��ʼ������Select����ѡ����е�ѡ��
 */
function initCitySelector() {
    // ��ȡaqiSourceData�еĳ��У�Ȼ������idΪcity-select�������б��е�ѡ��
        var select = document.getElementById("city-select");
        var cityArr = Object.getOwnPropertyNames(aqiSourceData);
        var htmlArr = cityArr.map(function (itms) {
            return "<option>"+itms"</option>"
        })
    // ��select�����¼�����ѡ����仯ʱ���ú���citySelectChange

}

/**
 * ��ʼ��ͼ����Ҫ�����ݸ�ʽ
 */
function initAqiChartData() {
    // ��ԭʼ��Դ���ݴ����ͼ����Ҫ�����ݸ�ʽ
    // ����õ����ݴ浽 chartData ��
}

/**
 * ��ʼ������
 */
function init() {
    initGraTimeForm();
    initCitySelector();
    initAqiChartData();
}

init();
/**
 * Created by admin on 2016/4/18.
 */
