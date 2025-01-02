import React, {useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import {TooltipComponent} from '@syncfusion/ej2-react-popups';
import './index.js';
import {NavBar,Footer,SideBar,ThemeSettings,LineChart} from '../src/components/Charts';
import { Ecommerce , Orders, Calendar, Employees,Stacked, Pyramid,Customers,Kanban,Area,Bar,Pie,Financial,ColorPicker,ColorMapping,Editor,Line} from './pages';
import { useStateContext } from './context/ContextProvider.js';

const App = () => {
  const {activeMenu} = useStateContext();
  return (
   <div>
    <BrowserRouter>
    <div className='flex relative dark:bg-main-dark-bg'>
    <div className='fixed right-4 bottom-4 style={{z-index:"1000"}}'>
      <TooltipComponent content="Settings" position='Top'>
        <button type='button'
         className='text-3xl p-3'
        style={{ background:"blue",borderRadius:"50%"}}>
          <FiSettings/>
        </button>
      </TooltipComponent>
      {activeMenu ? (
        <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
          <SideBar/>
          </div> 
      ): (
        <div className='w-0 dark:bg-secondary-dark-bg'>
          <SideBar/> 
        </div>
      )}
      <div className={
        `dark:bg-main-bg min-h-screen w-full ${ activeMenu ? "md:ml-72 "
        : "flex-1"}`
      }>
        <div className='fixed md:static bg-main-bg dark:bg-main-dark navbar w-full'>
          <NavBar/>
        </div>
         
          </div>
          <div>
            <Routes>

              <Route path='/' element={<Ecommerce/>}/>
             <Route path='/ecommerce' element={<Ecommerce/>}/>

              <Route path='/orders' element={<Orders/>} />
              <Route path="/employees" element={<Employees/>}/>
              <Route path="/customers" element={<Customers/>}/>

            
              <Route path="/kanban" element={<Kanban/>}/>
              <Route path="/editor" element={<Editor/>}/>
              <Route path="/calendar" element={<Calendar/>}/>
              <Route path='/color-picker'element={<ColorPicker/>}/>
              
              <Route path='/line'element={<LineChart/>}/>
              <Route path='/area'element={<Area/>}/>
              <Route path='/bar'element={<Bar/>}/>
              <Route path='/pie'element={<Pie/>}/>
              <Route path='/financial'element={<Financial/>}/>
              <Route path='/color-mapping'element={<ColorMapping/>}/>
              <Route path='/pyramid'element={<Pyramid/>}/>
              <Route path='/stacked'element={<Stacked/>}/>
           </Routes>
           </div>
          </div>
    </div>
    </BrowserRouter>
   </div>
  )
}

export default App