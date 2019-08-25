$(function () {
    var isCtrl = false;
    var isLongCtrlDialog = false;
    var $console = $('#console');
    $(document).keydown(function (event) {
        isCtrl = false;
        if (event.which == 17) { // ctrl
            isCtrl = true;
        }
        switch (event.which) {
            case 37:
                alert("左");
                break;
            case 39:
                alert("右");
                break;
            case 88: // X
                if (event.ctrlKey) {
                    $console.text('Ctrl + X');
                }
                break;
            default:
                $console.text(event.which);
                break;
        }
        if (isCtrl) {
            setTimeout(function () {
                if (isCtrl && !isLongCtrlDialog) {
                    isLongCtrlDialog = true;
                    $console.text("Dialog Show !!!");
                }
            }, 1200);
        }
    }).keyup(function (event) {
        if (event.which == 17) {
            isCtrl = false;
            isLongCtrlDialog = false;
            $console.text("Dialog Hide ~~~");
        }
    });

    /*$(document).keypress(function (event) {
        console.log(event.which);
        console.log('ctrlKey: ' , event.ctrlKey);
        if(event.ctrlKey){
            alert("OwO");
        }
    });*/

});
