import React from 'react';
import {GridComponents,ColumnsDirective,ColumnDirective,Page,Selection,Inject,Edit,Toolbar,Sort,Filter} from'@syncfusion/ej2-react-grids';
import {customerData,customerGrid} from '../data/dummy.js';
import { Header } from '../components';

const Customers = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
    <Header category="Page" title= "Customers"/>
    <GridComponents
    dataSource={customerData}
    allowPaging
    allowSorting
    Toolbar={['Delete']}
    editSetting={{allowDeleting:true,allowEditing:true}}
    width="auto">
      <ColumnDirective>
       {customerGrid.map((item,index)=> (
        <ColumnDirective key={index} {... item}/>
       ))}      
      </ColumnDirective>
       <Inject services={[Page,Toolbar,Selection,Toolbar,Edit,Sort,Filter]}/>
    </GridComponents>
  </div>
)
}
  


export default Customers