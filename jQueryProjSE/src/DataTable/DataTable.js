$(function () {
    $mTable = $('#mTable');

    var mTableColumns = [
        {
            title: '序號',
            width: '100px',
            render: function (data, type, row, meta) {
                return meta.row + 1;
            }
        },
        {
            title: '欄位A',
            data: 'typeA',
            render: function (data, type, row, meta) {
                let typeA = row.typeA;
                let text = '';
                if (typeA == 'typeA') {
                    text = 'typeA.1';
                } else {
                    text = 'typeA.2';
                }
                return text;
            }
        },
        {
            title: '欄位B',
            data: 'typeB',
            className: 'text-left'
        },
        {
            title: '欄位C',
            data: 'typeC',
            className: 'text-left'
        },
        {
            title: '執行<br/>動作',
            width: '100px',
            render: function (data, type, row, meta) {
                var showHtml = '';
                showHtml += '<button type="button" class="btn btn-primary" id="showBtn" >明細</button>&nbsp&nbsp';
                return showHtml;
            }
        }];

    var config = {
        searching: false,
        paging: false,
        info: false,
        ordering: false,
        data: []
    };

    TableUtil.DataTableInitByCustomConfig("#mTable", mTableColumns, config);

    var showTable = function () {
        var lstShow = [
            {
                typeA: 'typeA',
                typeB: 'typeB',
                typeC: 'typeC'
            },
            {
                typeA: 'typeA1',
                typeB: 'typeB1',
                typeC: 'typeC1'
            },
            {
                typeA: 'typeA2',
                typeB: 'typeB2',
                typeC: 'typeC3'
            }
        ];

        TableUtil.DataTableClear('#mTable');
        $mTable.DataTable().rows.add(lstShow).draw();
        $mTable.DataTable().columns.adjust().draw();
    }

    $mTable.find('tbody').on('click', '#showBtn', function (event) {
        var table = $mTable.DataTable();
        var row = table.row($(this).parents('tr')).data();
        alert('row : ' + row.typeA);
    });

    showTable();
});
