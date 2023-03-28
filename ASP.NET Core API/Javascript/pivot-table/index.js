var pivotObj = new ej.pivotview.PivotView({
	dataSourceSettings: {
		url: 'https://localhost:44393/pivot',
		expandAll: false,
		enableSorting: true,
		columns: [{ name: 'Product' }],
		values: [{ name: 'Quantity' }, { name: 'Amount', caption: 'Sold Amount' }],
		rows: [{ name: 'Country' }, { name: 'State' }],
		formatSettings: [{ name: 'Amount', format: 'C0' }],
		filters: []
	},
	showFieldList: true,
	width: '100%'
});
pivotObj.appendTo('#PivotView');