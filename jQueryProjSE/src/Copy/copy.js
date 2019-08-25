$(function () {
    var $copyBtn = $('#copyBtn');
    var $codeDiv = $('#codeDiv');
    var $copyInput = $("#copyInput");

    $copyBtn.off('click').on('click', function () {
        var textData = $codeDiv.text();
        
        $copyInput.show();
        $copyInput.val(textData);
        $copyInput.select();
        
        document.execCommand("Copy");
        
        $copyInput.hide();
    });

});
