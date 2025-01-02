import React from 'react';
import {GridComponent,ColumnsDirective,ColumnDirective,Page,Search,Inject,Toolbar} from '@syncfusion/ej2-react-girds';
import {employeesData,employeesGrid} from  '../data/dummy.js';
import {Header} from '../components';


const Employees = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Page" title= "Employees"/>
      <GridComponent
      dataSource={employeesData}
      allowPaging
      allowSorting
      Toolbar={['Search']}
      width="auto">
        <ColumnDirective>
         {employeesGrid.map((item,index)=> (
          <ColumnDirective key={index} {... item}/>
         ))}      
        </ColumnDirective>
         <Inject services={[Page,Search,Toolbar]}/>
      </GridComponent>
    </div>
  )
}

export default Employees