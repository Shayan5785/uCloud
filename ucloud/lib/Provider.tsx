'use client'
import React, { ReactNode, useState } from 'react'
import { Directory } from './context'

const Provider = ({children} : { children: ReactNode}) => {
    const [dir, setDir] = useState('/')

    return (
        <Directory.Provider value={{ dir, setDir }}>
            {children}
        </Directory.Provider>
    )
}

export default Provider