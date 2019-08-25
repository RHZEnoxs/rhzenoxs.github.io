$(function () {
    var edit = {
        lock: false
    }
    var key = {
        ctrl: false
    }
    var dialog = {
        isOperateDescDialogOpen: false
    }
    var sideNav = {
        isOpen: false
    }

    var $mEditor = $('#mEditor');

    let lastRange;
    const editor = document.querySelector('#mEditor');
    const atUserFn = (user) => {
        return '<span style="color:red;">@' + user + '</span>&nbsp; ';
    };
    const setLastRange = () => {
        const sels = window.getSelection();
        if (lastRange) {
            sels.removeAllRanges();
            sels.addRange(lastRange);
        }
    }


    var $h1Btn = $('#h1Btn');
    var $h2Btn = $('#h2Btn');
    var $h3Btn = $('#h3Btn');
    var $h4Btn = $('#h4Btn');
    var $h5Btn = $('#h5Btn');
    var $h6Btn = $('#h6Btn');
    // ---------------------
    var $pBtn = $('#pBtn');
    var $hrBtn = $('#hrBtn');
    // ---------------------

    var $lock = $('#lock');

    var $blodBtn = $('#blodBtn');
    var $console = $('#console');
    var $showBtn = $('#showBtn');
    var $clearBtn = $('#clearBtn');
    var $insertBtn = $('#insertTxt');
    var $insertImg = $('#insertImg');
    var $insertTable = $('#insertTable');
    var $insertImgWithId = $('#insertImgWithId');
    var $tabBtn = $('#tabBtn');
    var $atWrap = $('#atWrap');
    var $typeA = $('[name=typeA]');
    var $typeB = $('[name=typeB]');
    var $highlightBtn = $('#highlightBtn');
    var $checkbox = $('#checkbox');
    var $selectBtn = $('#selectBtn');
    var $stateBtn = $('#stateBtn');
    var $toMarkdownBtn = $('#toMarkdownBtn');
    var $toHtmlBtn = $('#toHtmlBtn');
    var $listBtn = $('#listBtn');

    var $operateDescDialogOpen = $('#operateDescDialogOpen');

    $operateDescDialogOpen.dialog({
        autoOpen: false,
        height: 800,
        width: 1200
    });

    const clearEditor = (editor) => {
        editor.focus();
        const sels = window.getSelection();
        let range = document.createRange();
        sels.removeAllRanges();
        range.selectNodeContents(editor);
        sels.addRange(range);
        document.execCommand('delete');
        range.collapse();
    }

    $mEditor.off('keydown').on('keydown', insertTabAtCaret);

    // ---------------------
    $h1Btn.off('click').on('click', function () {
        editor.focus();
        editUtil.exec('h1');
    });

    $h2Btn.off('click').on('click', function () {
        editor.focus();
        editUtil.exec('h2');
    });

    $h3Btn.off('click').on('click', function () {
        editor.focus();
        editUtil.exec('h3');
    });

    $h4Btn.off('click').on('click', function () {
        editor.focus();
        editUtil.exec('h4');
    });

    $h5Btn.off('click').on('click', function () {
        editor.focus();
        editUtil.exec('h5');
    });

    $h6Btn.off('click').on('click', function () {
        editor.focus();
        editUtil.exec('h6');
    });

    // ---------------------

    $pBtn.off('click').on('click', function () {
        editor.focus();
        editUtil.exec('div');
    });

    $hrBtn.off('click').on('click', function () {
        editor.focus();
        document.execCommand('insertHtml', false, '<hr><div><br></div> ');
    });


    $lock.off('change').on('change', function () {
        edit.lock = $lock.prop('checked');
        if (edit.lock) {
            $mEditor.prop('contenteditable', false);
            showCopyBtn();
        } else {
            $mEditor.prop('contenteditable', true);
            hideCopyBtn();
        }
        
    });

    $clearBtn.off('click').on('click', function () {
        clearEditor(editor);
    });

    $blodBtn.off('click').on('click', function () {
        editor.focus();
        document.execCommand('bold', false, null);
    });

    $insertBtn.off('click').on('click', function () {
        editor.focus();
        document.execCommand('insertHtml', false, "OwO / Go Go Go .");
    });

    $insertImg.off('click').on('click', function () {
        editor.focus();
        document.execCommand('insertImage', false, '../../assets/Apple.jpg');
    });

    $insertTable.off('click').on('click', function () {
        editor.focus();
        var tableText = '<table border="1">' +
            '<tr>' +
            '<td> This is my Table </td>' + '<td> OwO </td>' + '<td> Go Go Go </td>' +
            '</tr>' +
            '<tr>' +
            '<td> This is my Table </td>' + '<td> OwO </td>' + '<td> Go Go Go </td>' +
            '</tr>' +
            '<tr>' +
            '<td> This is my Table </td>' + '<td rowspan="2"> OwO </td>' + '<td> Go Go Go </td>' +
            '</tr>' +
            '<tr>' +
            '<td> This is my Table </td>' + '<td> Go Go Go </td>' +
            '</tr>' +
            '<tr>' +
            '<td colspan="3"> This is my Table </td>' +
            '</tr>' +
            '</table>';
        document.execCommand('insertHtml', false, tableText);
    });

    $insertImgWithId.off('click').on('click', function () {
        editor.focus();
        var imgHtml = '<img id="appldId" src="../../assets/Apple.jpg" alt="">';
        document.execCommand('insertHtml', false, imgHtml);
    });

    $tabBtn.off('click').on('click', function () {
        editor.focus();
        document.execCommand("Indent");
    });

    $showBtn.off('click').on('click', function () {
        var text = $mEditor.html();
        $console.text(text);
    });

    editor.oninput = () => {
        const sels = window.getSelection();
        const range = sels.getRangeAt(0);
        if (range.startOffset > 0) {
            range.setStart(range.startContainer, range.startOffset - 1);
            const lastChar = sels.toString();
            if (lastChar === '@') {
                atWrap.style.display = 'block';
            } else {
                atWrap.style.display = 'none';
            }
            range.collapse();
        } else {
            console.log("OwO / 換行");
        }
    }

    editor.onblur = () => {
        const sels = window.getSelection();
        const range = sels.getRangeAt(0);
        lastRange = range;
    }

    $typeA.off('click').on('click', function () {
        const atUser = atUserFn('TypeA');
        editor.focus();
        setLastRange();
        document.execCommand('delete');
        document.execCommand('insertHtml', false, atUser);
    });

    $typeB.off('click').on('click', function () {
        const atUser = atUserFn('TypeB');
        editor.focusatUserFn
        setLastRange();
        document.execCommand('delete');
        document.execCommand('insertHtml', false, atUser);
    });

    $highlightBtn.off('click').on('click', function () {
        var msg = window.getSelection().toString();
        console.log('selectMsg:', msg);
        var mark = '<mark class="markTip" title="mark message">' + msg + '</mark>';

        editor.focus();
        document.execCommand('insertHtml', false, mark);
        $('.markTip').tooltip();
    });

    $checkbox.off('click').on('click', function () {
        var view = '<input type="checkbox"> OwO </input>';
        editor.focus();
        document.execCommand('insertHtml', false, view);
    });

    $selectBtn.off('click').on('click', function () {
        //        const sels = window.getSelection();
        //        const range = sels.getRangeAt(0);
        //        var indexA = window.getSelection().anchorOffset;
        //        var indexB = window.getSelection().extentOffset;

        //        var msg = window.getSelection().toString();
        //        $console.html(msg + '<br>');
        //        $console.append('indexA: ' + indexA + '<br>');
        //        $console.append('indexB: ' + indexB + '<br>');
    });

    $stateBtn.off('click').on('click', function () {
        var isExist = document.queryCommandValue('formatBlock');
        $console.html('isExist : ' + isExist);
    });

    $toMarkdownBtn.off('click').on('click', function () {
        $first = $mEditor.find(':first-child');
        let len = $mEditor.children().length;
        var msg = '';
        for (var i = 0; i < len; i++) {
            tag = $first.prop("tagName");
            switch (tag) {
                case "H2":
                    tag = "## ";
                    break;
                case "H3":
                    tag = "### ";
                    break;
                case "H4":
                    tag = "#### ";
                    break;
                default:
                    tag = '';
                    break;
            }

            msg += tag + $first.text() + '\n';

            if (i < len - 1) {
                $first = $first.next();
            }
        }

        console.log(msg);
    });

    $toHtmlBtn.off('click').on('click', function () {
        var data = "## Title#H2\n";
        data += "### Title#H3\n";
        data += "#### Title#H4\n";
        data += "I've been reading books of old\n";
        data += "The legends and the myths\n";
        data += "Achilles and his gold\n";
        data += "Hercules and his gifts\n";
        data += "Spiderman's control";
        var arr = data.split('\n');
        var tag, startTag, endTag, idx, content;
        var view = '';
        $.each(arr, function (index, value) {
            idx = value.indexOf(' ');
            if (idx > -1) {
                tag = value.substr(0, idx);
                content = value.substr(idx + 1);
                switch (tag) {
                    case "##":
                        startTag = "<h2>";
                        endTag = "</h2>";
                        break;
                    case "###":
                        startTag = "<h3>";
                        endTag = "</h3>";
                        break;
                    case "####":
                        startTag = "<h4>";
                        endTag = "</h4>";
                        break;
                    default:
                        startTag = "<div>";
                        endTag = "</div>";
                        content = value;
                        break;
                }
                view += startTag + content + endTag;
            } else {
                view += value;
            }
        });
        console.log(view);
        $mEditor.html(view);
    });

    $listBtn.off('click').on('click', function () {
        editor.focus();
        document.execCommand('InsertUnorderedList', false, null);
    });


    function switchNav() {
        sideNav.isOpen = !sideNav.isOpen;
        if (sideNav.isOpen) {
            openNav();
        } else {
            closeNav();
        }
    }

    function openNav() {
        document.getElementById("sideNav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    }

    function closeNav() {
        document.getElementById("sideNav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
    }

    //: 快捷鍵事件


    $(document).keydown(function (event) {
        key.ctrl = false;
        if (event.which == 17) { // ctrl
            key.ctrl = true;
        }
        switch (event.which) {
            case 49: // 1
                if (event.altKey) {
                    switchNav();
                    return false;
                }
                break;
            default:
                $console.text(event.which);
                break;
        }
        if (key.ctrl) {
            setTimeout(function () {
                if (key.ctrl && !dialog.isOperateDescDialogOpen) {
                    $operateDescDialogOpen.dialog('open');
                    isLongCtrlDialog = true;
                }
            }, 800);
        }
    }).keyup(function (event) {
        if (event.which == 17) {
            key.ctrl = false;
            dialog.isOperateDescDialogOpen = false;
            $operateDescDialogOpen.dialog('close');
        }
    });

    function showCopyBtn() {
        var copyBtnView = '<button name= "copyBtn" class="ui-button" style="float:right;">Copy</button>';
        $('pre*').append(copyBtnView);
        $('[name=copyBtn]*').off('click').on('click', function () {
            $clipboardBuffer = $('#clipboardBuffer');
            var text = $(this).parents('pre').find('code').text();
            $clipboardBuffer.show();
            $clipboardBuffer.val(text);
            $clipboardBuffer.select();
            document.execCommand("Copy");
            $clipboardBuffer.hide();
        });
    }

    function hideCopyBtn() {
        $('[name=copyBtn]*').remove();
    }

    function insertTabAtCaret(event) {
        if (event.keyCode === 9) {
            var isListItem = document.queryCommandState('InsertUnorderedList');
            if (isListItem) {
                console.log("OwO / Tab Go");
                $tabBtn.click();
//                editor.focus();
                return false;
                //                document.execCommand('InsertUnorderedList', false, null);
            } else {
                event.preventDefault();
                var range = window.getSelection().getRangeAt(0);

                var tabNode = document.createTextNode("\u00a0\u00a0\u00a0\u00a0");
                range.insertNode(tabNode);

                range.setStartAfter(tabNode);
                range.setEndAfter(tabNode);
            }
        }
    }

    $(document).tooltip();
    
    $("input[type=checkbox]").checkboxradio({
        icon: false
    });


});
