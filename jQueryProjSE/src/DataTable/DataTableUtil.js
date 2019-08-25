var TableUtil = tableUtil = {
	// DataTable 初始化設定
	DataTableInit:function(tagId, columns){
		util.DataTableInitByCustomConfig(tagId, columns, null);
	},
	// 清除DataTable的資料
	DataTableClear:function(tagId){
		$(tagId).DataTable().clear().draw();
	},
	DataTableInitByCustomConfig:function(tagId, columns, config){
		// 語言配置
		var language = { 
			"info" 			: " _START_ ~ _END_ , Total: _TOTAL_",
			"infoEmpty" 	: " 0 ~ 0 , Total: 0 ",
			"sZeroRecords" 	: 'Empty',
			"paginate" 		: {
				"first" 		: "first",
				"previous" 		: "previous",
				"next" 			: "next",
				"last" 			: "last"
			},
		};
		var settings = {
			sPaginationType : "full_numbers",
			scrollX 	: false,
			processing 	: true,
			bStateSave 	: true,
			bFilter 	: false,               
			bLengthChange: false,
			lengthMenu 	: [ [ 10, 20, 30 ], [ 10, 20, 30 ] ],
			language 	: language,
			columns		: columns,
			searching	: false,
			dom         : 'Bfrtip'
		};
		if (config != null) {
			$.extend(settings, config)
			if (config.language) {
				$.extend(language, config.language);
				$.extend(settings.language, language);
			}
		}
		return $(tagId).DataTable(settings);
	}
}