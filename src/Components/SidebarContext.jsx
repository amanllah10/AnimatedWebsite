import React, { createContext, useState } from 'react'
export const sideContext = createContext()
const SidebarContext = ({ children }) => {


    const [isSidebarOpen,setIsSidebarOpen] = useState(false)
    const showLeft = ()=>{
        setIsSidebarOpen((prev)=> !prev)
    } 
    return (
        <sideContext.Provider value={{isSidebarOpen,setIsSidebarOpen,showLeft}}>
            {children}
        </sideContext.Provider>
    )
}

export default SidebarContext
