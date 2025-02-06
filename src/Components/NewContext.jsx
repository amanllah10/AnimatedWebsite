import axios from 'axios'
import React, { createContext, useState } from 'react'
export const secondContext = createContext()

const NewContext = ({ children }) => {
    const username = 'aman'
    const [items,setItems] = useState([])

    const contextFunc = async ()=>{
        const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=100')
        setItems(response)
    }
    return (
        <secondContext.Provider value = {{items,setItems}}>
            {children}
        </secondContext.Provider>
    )
}

export default NewContext
