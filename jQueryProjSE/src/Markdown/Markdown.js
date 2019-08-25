$(function () {
    var $show = $('#show');
    var $convertBtn = $('#convertBtn');
    var $convertBtn2 = $('#convertBtn2');
    
    var converter = new showdown.Converter();
    converter.setOption('tables', true); // 開啟表格功能
    converter.setOption('tasklists', true); // 開啟 checkbox 功能
    
    var text = '# hello, markdown!';
    var html = converter.makeHtml(text);
    $show.html(html);
    $convertBtn.off('click').on('click', function () {
        var postUrl = '../../assets/MarkdownSE.md';
        $.post(postUrl, function (data, status) {
            var html = converter.makeHtml(data);
            $show.html(html);
        }).always(function () {});
    });
    $convertBtn2.off('click').on('click', function () {
        var input =
            '# H1 標題 \n' +
            '## H2 標題 \n' +
            '### H3 標題 \n' +
            '#### H4 標題 \n' +
            '##### H5 標題 \n' +
            '###### H6 標題 \n' +
            '*斜體* \n\n' +
            '**粗體** \n' +
            '- [ ] checkbox 1 \n' +
            '- [x] checkbox 2 \n\n' +
            '[Makee.io Blog](../../assets/Apple.jpg) \n\n' +
            '![Makee.io logo] (../../assets/Apple.jpg) \n\n' +
            '| 表格 1 | 表格 2 |\n' +
            '|======= |=======|\n' +
            '| 表格 3 | 表格 4 |\n' +
            '| 表格 5 | 表格 6 |\n';
        var html = converter.makeHtml(input);
        $show.html(html);
    });

});
