var pivotObj = new ej.pivotview.PivotView({
	dataSourceSettings: {
		url: 'https://localhost:44300/pivot',
        enableSorting: true,
        expandAll: false,
        columns: [{ name: 'Product' }],
        values: [{ name: 'Quantity', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'State' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: []
	},
	showFieldList: true,
	width: '100%'
});
pivotObj.appendTo('#PivotView');