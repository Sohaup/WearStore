'use client'
import store from '@/store/store';
import React, { createContext, useState } from 'react'
import { Provider } from 'react-redux';

const context = createContext<any>(null);

export default function MainProvider({children}:{children:React.ReactElement}) {
    const [theme , setTheme ] = useState("light");
  return (
    <context.Provider value={{theme , setTheme}}>
        <Provider store={store}>
             {children}
        </Provider>       
    </context.Provider>
  )
}
