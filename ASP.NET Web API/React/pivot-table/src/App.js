import { PivotViewComponent, FieldList, Inject } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import './App.css';

function App() {
  let dataSourceSettings = {
    url: 'https://localhost:44355/api/pivot',
    enableSorting: true,
    expandAll: false,
    columns: [{ name: 'Product' }],
    values: [{ name: 'Quantity' }, { name: 'Amount', caption: 'Sold Amount' }],
    rows: [{ name: 'Country' }, { name: 'State' }],
    formatSettings: [{ name: 'Amount', format: 'C0' }],
    filters: []
  };

  return (<PivotViewComponent id='PivotView' height={350} dataSourceSettings={dataSourceSettings} showFieldList={true}>
    <Inject services={[FieldList]}/></PivotViewComponent>);
};
export default App;
