//注意，baseUrl如果是相对地址，是从html的页面位置开始计算的，不是main.js的位置
require.config({

    //根目录
    //1、若baseUrl为空，指定了data-main：data-main指定的入口文件所在的目录；
    //2、若baseUrl为空，没有指定data-main：当前html文件所在的目录；
    //3、若baseUrl不为空，且是一个相对地址：这个相对地址根据html所在的目录进行计算。
    baseUrl: './js',

    //若为相对地址，则根据baseUrl进行计算
    paths: {
        'jquery': '../../../../../common/vendor/jquery/dist/jquery',
    }
});

require(['jquery', 'demos/others/requirejs/simple/js/math'], function($, math) {

    var firstNumInput = $('#first-num');
    var secondNumInput = $('#second-num');
    var resultInput = $('#result');
    $('#sum-btn').click(function() {
        var firstNum = parseInt(firstNumInput.val());
        var secondNum = parseInt(secondNumInput.val());
        var sum = math.add(firstNum, secondNum);
        resultInput.val(sum);
    });
});

