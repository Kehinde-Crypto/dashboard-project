import React from 'react';
import {GridComponent,ColumnsDirective,ColumnDirective,Resize,Sort,ContextMenu,Filter,Page,ExcelExport,PdfExport,Edit,Inject} from '@syncfusion/ej2-react-girds';
import {orderData,ContextMenuItems,orderGrid} from  '../data/dummy.js';
import {Header} from '../components';


const Orders = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Page" title= "Orders"/>
      <GridComponent
      id='gridcomp'
      dataSource={orderData}
      allowPaging
      allowSorting>
        <ColumnDirective>
         {orderGrid.map((item,index)=> (
          <ColumnDirective key={index} {... item}/>
         ))}      
        </ColumnDirective>
         <Inject services={[Resize,Sort,ContextMenu,Filter,Page,ExcelExport,Edit,PdfExport]}/>
      </GridComponent>
    </div>
  )
}

export default Orders