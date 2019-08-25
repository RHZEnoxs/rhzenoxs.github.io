$(function () {
    $console = $('#console');
    $barIcon = $('#barIcon')
    $showBtn = $('#showBtn');
    $hideBtn = $('#hideBtn');
    
    $showBtn.off('click').on('click', switchNav);
    $barIcon.off('click').on('click', switchNav);
    $hideBtn.off('click').on('click',closeNav);
    
    var isOpen = false;
    function switchNav(){
        isOpen = !isOpen;
        if(isOpen){
            openNav();
        }else{
            closeNav();
        }
    }

    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    }

    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
    }
    
    // 快捷鍵
    $(document).keydown(function (event) {
        switch (event.which) {
            case 49: // 1
                if(event.altKey){
                    switchNav();
                }
                break;
            default:
                $console.text(event.which);
                break;
        }
    });
    
    
});
