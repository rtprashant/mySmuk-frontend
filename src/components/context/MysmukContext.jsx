import React, { createContext, useState } from 'react'

export const context = createContext()

function MysmukContext({ children }) {
    // const [nameClick, setNameClick] = useState(false)
    const [progress , setProgress] = useState({})

    return (
        <context.Provider value={{ progress , setProgress  }}>
            {children}
        </context.Provider>
    )
}

export default MysmukContext
