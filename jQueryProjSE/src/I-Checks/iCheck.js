$(function () {
    $console = $('#console');
    $isCheck = $('#isCheck');
    $btnChange = $('#btnChange');

    $isCheck.off('ifChanged').on('ifChanged', function (event) {
        let isChecked = $(this).iCheck('update')[0].checked;
        $console.text('OwO / ifChanged: ' + isChecked);
    });

    $btnChange.off('click').on('click', function (event) {
        //        $('*#isCheck').attr('disabled', true);
        let isCheck = $isCheck.iCheck('update')[0].checked;
        if (isCheck) {
            $isCheck.iCheck('uncheck');
        } else {

            $isCheck.iCheck('check');
        }

    });

    $('.i-checks').iCheck({
        checkboxClass: 'icheckbox_square-green',
        radioClass: 'iradio_square-green'
    });

});
