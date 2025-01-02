import React,{Children, createContext , useContext,useState} from "react";

const StateContext = createContext();

const initialState = {
  chat:false,
  cart:false,
  userProfile:false,
  Notification:false,
}
export const ContextProvider = ({Children}) =>{
  const [activeMenu,setActiveMenu] = useState(true);
  const [isClicked,setIsClicked] = useState(initialState);
  const handleClick = (clicked) =>{
    setIsClicked({...initialState,[clicked]:true});
   
  }
  const [screenSize,setScreenSize] = useState(undefined);
  return (
    <StateContext.Provider
    value={{activeMenu,
   setActiveMenu,
   isClicked,
   setIsClicked,
   handleClick,
   setScreenSize
    }}

    >{Children}</StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext);
