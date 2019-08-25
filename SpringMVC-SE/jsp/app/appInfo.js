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

    $queryAppInfoByPositionBtn.off('click').on('click', function () {
        var postUrl = '../../ajax/appInfo/queryAppInfoByPosition.json';
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
        });
    });

    $queryAppInfoByIdBtn.off('click').on('click' , function(){
        var postUrl = 'appInfo/queryAppInfoById';
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
        });
    });

    $queryAppInfoByNameBtn.off('click').on('click' , function(){
        var postUrl = 'appInfo/queryAppInfoByName';
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
        });
    });

    $queryAppInfoByIdAndNameBtn.off('click').on('click' , function(){
        var postUrl = 'appInfo/queryAppInfoByIdAndName';
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
        });
    });

    $queryAppInfoByMultiPostionBtn.off('click').on('click' , function(){
        var postUrl = 'appInfo/queryAppInfoByMultiPostion';

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
        });
    });

    $queryAppInfoByMultiNameBtn.off('click').on('click' , function(){
        var postUrl = 'appInfo/queryAppInfoByMultiName';

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
        });
    });

    $queryAppInfoByMultiIdBtn.off('click').on('click' , function(){
        var postUrl = 'appInfo/queryAppInfoByMultiId';
        var lstId = [1,2,3];
        var formData = JSON.stringify(lstId);

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
        $.ajax({
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
        });
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