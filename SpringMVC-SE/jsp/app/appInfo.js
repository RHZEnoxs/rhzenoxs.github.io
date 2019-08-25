$(function () {
    var $console = $('#console');
    var $queryAppInfoByPositionBtn = $('#queryAppInfoByPositionBtn');
    var $queryAppInfoByIdBtn = $('#queryAppInfoByIdBtn');
    var $queryAppInfoByNameBtn = $('#queryAppInfoByNameBtn');
    var $queryAppInfoByIdAndNameBtn = $('#queryAppInfoByIdAndNameBtn');
    var $queryAppInfoByMultiPostionBtn = $('#queryAppInfoByMultiPostionBtn');
    var $queryAppInfoByMultiNameBtn = $('#queryAppInfoByMultiNameBtn');
    var $queryAppInfoByMultiIdBtn = $('#queryAppInfoByMultiIdBtn');
    var $queryAppInfoByAppInfoObjectBtn = $('#queryAppInfoByAppInfoObjectBtn');
    
    var appInfoData = [
        {
         appId : '1',
         appName : 'JavaProjSE-v1.0.3',
         appVersion : '1.0.3',
         appDate : '2019/07/24',
         appAuthor : 'Enoxs',
         appRemark : 'Java Project Simple Example - Version 1.0.3'
        },
        {
         appId : '2',
         appName : 'JUnitSE',
         appVersion : '1.0.2',
         appDate : 'not init',
         appAuthor : 'Enoxs',
         appRemark : 'Java Unit Test Simple Example'
        },
        {
         appId : '3',
         appName : 'SpringMVC-SE',
         appVersion : '1.0.2',
         appDate : '2019/07/31',
         appAuthor : 'Enoxs',
         appRemark : 'Java Web Application Spring MVC 框架 - Simple Example 未整合持久化框架（MyBatis）'
        }
        
    ];

    $queryAppInfoByPositionBtn.off('click').on('click', function () {
        /*var postUrl = 'appInfo/queryAppInfoByPosition';
        var formData = {
            position: 0
        };
        $.post(postUrl, formData, function (data, status) {
            var response = JSON.parse(decodeURIComponent(data));
            if (response.status == 'success') {
                var appInfo = response.list;
                showAppInfoDetailAtConsole(appInfo);
            } else {
                alert(response.desc);
            }
        }).always(function () {
        });*/
        var appInfo = appInfoData[0];
        showAppInfoDetailAtConsole(appInfo);
    });

    $queryAppInfoByIdBtn.off('click').on('click' , function(){
        /*var postUrl = 'appInfo/queryAppInfoById';
        var formData = {
            id: 2
        };
        $.post(postUrl, formData, function (data, status) {
            var response = JSON.parse(decodeURIComponent(data));
            if (response.status == 'success') {
                var appInfo = response.list;
                showAppInfoDetailAtConsole(appInfo);
            } else {
                alert(response.desc);
            }
        }).always(function () {
        });*/
        var appInfo = appInfoData[1];
        showAppInfoDetailAtConsole(appInfo);
    });

    $queryAppInfoByNameBtn.off('click').on('click' , function(){
        /*var postUrl = 'appInfo/queryAppInfoByName';
        var formData = {
            name: 'SpringMVC'
        };
        $.post(postUrl, formData, function (data, status) {
            var response = JSON.parse(decodeURIComponent(data));
            if (response.status == 'success') {
                var appInfo = response.list;
                showAppInfoDetailAtConsole(appInfo);
            } else {
                alert(response.desc);
            }
        }).always(function () {
        });*/
        var appInfo = appInfoData[2];
        showAppInfoDetailAtConsole(appInfo);
    });

    $queryAppInfoByIdAndNameBtn.off('click').on('click' , function(){
        /*var postUrl = 'appInfo/queryAppInfoByIdAndName';
        var formData = {
            id : 1,
            name: 'JavaProjSE-v1.0.3'
        };
        $.post(postUrl, formData, function (data, status) {
            var response = JSON.parse(decodeURIComponent(data));
            if (response.status == 'success') {
                var appInfo = response.list;
                showAppInfoDetailAtConsole(appInfo);
            } else {
                alert(response.desc);
            }
        }).always(function () {
        });*/
        var appInfo = appInfoData[0];
        showAppInfoDetailAtConsole(appInfo);
    });

    $queryAppInfoByMultiPostionBtn.off('click').on('click' , function(){
        /*var postUrl = 'appInfo/queryAppInfoByMultiPostion';

        var positions = [ 0 , 2];
        var formData = {
            positions : positions
        };

        $.post(postUrl, formData, function (data, status) {
            var response = JSON.parse(decodeURIComponent(data));
            if (response.status == 'success') {
                var lstAppInfo = response.list;
                showMultiAppInfoDetailAtConsole(lstAppInfo);
            } else {
                alert(response.desc);
            }
        }).always(function () {
        });*/
        var lstAppInfo = new Array();
        lstAppInfo.push(appInfoData[0]);
        lstAppInfo.push(appInfoData[2]);
        showMultiAppInfoDetailAtConsole(lstAppInfo);
    });

    $queryAppInfoByMultiNameBtn.off('click').on('click' , function(){
        /*var postUrl = 'appInfo/queryAppInfoByMultiName';

        var names = new Array();
        names.push("JavaProjSE-v1.0.3");
        names.push("JUnitSE");

        var formData = {
            names : names
        };

        $.post(postUrl, formData, function (data, status) {
            var response = JSON.parse(decodeURIComponent(data));
            if (response.status == 'success') {
                var lstAppInfo = response.list;
                showMultiAppInfoDetailAtConsole(lstAppInfo);
            } else {
                alert(response.desc);
            }
        }).always(function () {
        });*/
        var lstAppInfo = new Array();
        lstAppInfo.push(appInfoData[0]);
        lstAppInfo.push(appInfoData[1]);
        showMultiAppInfoDetailAtConsole(lstAppInfo);
    });

    $queryAppInfoByMultiIdBtn.off('click').on('click' , function(){
        var postUrl = 'appInfo/queryAppInfoByMultiId';
        var lstId = [1,2,3];
        var formData = JSON.stringify(lstId);
        $console.text("In development");
        /*$.post(postUrl, formData, function (data, status) {
            var response = JSON.parse(decodeURIComponent(data));
            if (response.status == 'success') {
                var lstAppInfo = response.list;
                showMultiAppInfoDetailAtConsole(lstAppInfo);
            } else {
                alert(response.desc);
            }
        }).always(function () {
        });*/
        /*$.ajax({
            type: "POST",
            url: postUrl,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: formData,
            success: function(response) {
                console.log(response);
            },
            error: function(resp) {
                alert(resp)
            }
        });*/
        
    });
    
    $queryAppInfoByAppInfoObjectBtn.off('click').on('click' , function(){
        $console.text("In development");
    });


    function showAppInfoDetailAtConsole(appInfo){
        $console.text("");
        setTimeout(function () {
            $console.text("AppInfo");
            $console.append("<br><br>");
            $console.append("id : " + appInfo.appId + "<br>");
            $console.append("name : " + appInfo.appName + "<br>");
            $console.append("version : " + appInfo.appVersion + "<br>");
            $console.append("date : " + appInfo.appDate + "<br>");
            $console.append("auther : " + appInfo.appAuthor + "<br>");
            $console.append("remark : " + appInfo.appRemark + "<br>");
        },150);
    }

    function showMultiAppInfoDetailAtConsole(lstAppInfo){
        $console.text("");
        setTimeout(function () {
            $console.text("AppInfos");

            $.each(lstAppInfo,function (index,value) {
                $console.append("<br><br>");
                $console.append("id : " + value.appId + "<br>");
                $console.append("name : " + value.appName + "<br>");
                $console.append("version : " + value.appVersion + "<br>");
                $console.append("date : " + value.appDate + "<br>");
                $console.append("auther : " + value.appAuthor + "<br>");
                $console.append("remark : " + value.appRemark + "<br>");
                $console.append("<hr>");
            });
        },150);
    }

});