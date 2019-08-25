$(function () {
    $btnAjax = $('#btnAjax');
    $jsonAjax = $('#jsonAjax');

    $btnAjax.off('clcik').on('click', function () {
        var postUrl = 'ajaxUrl.txt';
        var formData = {
            id: 1
        };
        $.post(postUrl, formData, function (data, status) {
            alert(data + " \n " + status);
        }).always(function () {});
    });


    $jsonAjax.off('click').on('click', function () {
        var postUrl = 'webService/OwO'
        var para = {
            id: 1 
        };
        $.post(postUrl, $.param({
            jsonString: JSON.stringify(para)
        }), function (res) {
            var jsonObj = JSON.parse(resp.data);
            console.log('res: ', res);
            console.log('jsonObj: ' , jsonObj);
        });
    });
});
