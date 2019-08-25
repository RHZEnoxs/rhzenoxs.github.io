$(function () {

    $dialog = $('#dialog');
    $dialogSetting = $('#dialogSetting');
    $dialogSetSize = $('#dialogSetSize');

    $dialogBtn = $('#dialogBtn');
    $dialogSettingBtn = $('#dialogSettingBtn');
    $dialogSetSizeBtn = $('#dialogSetSizeBtn');

    $dialogSetting.dialog({
        autoOpen: false,
        show: "blind",
        hide: {
            effect: "explode",
            duration: 1000
        },
        modal: true, // 鎖定，無法互動
        buttons: {
            "Ok": function () {
                $(this).dialog("close");
            },
            "Cancel": function () {
                $(this).dialog("close");
            }
        }
    });

    $dialogSetSize.dialog({
        autoOpen: false,
        height: 800,
        width: 1200
    });


    $dialogBtn.off('click').on('click', function () {
        $dialog.dialog();
    });

    $dialogSettingBtn.off('click').on('click', function () {
        $dialogSetting.dialog('open');
    });

    $dialogSetSizeBtn.off('click').on('click', function () {
        $dialogSetSize.dialog('open');
    });

})
