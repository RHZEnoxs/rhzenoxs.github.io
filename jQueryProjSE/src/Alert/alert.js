$(function () {
    $btnAlert = $('#btnAlert');
    $btnConfirm = $('#btnConfirm');
    $btnAlert.off('clcik').on('click', function () {
        alert('OwO');
    });
    $btnConfirm.off('click').on('click', function () {
        if (confirm("OwO / Yes or No")) {
            alert("Yes")
        } else {
            alert("No")
        }
    })
});
