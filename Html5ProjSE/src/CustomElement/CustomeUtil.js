var CustomUtil = customUtil = {
    highlightInit: function (config) {
        $("highlight").each(function (i, obj) {
            let view = '<span class="highlightme">' + $(obj).text() + '</span>';
            $(obj).replaceWith(view);
        });

    }
}
