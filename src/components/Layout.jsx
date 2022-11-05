import React from 'react'
import MyNav from './Tab/Tab'
import {BrowserRouter} from 'react-router-dom';

export default function Layout({children}) {
  return (
    <BrowserRouter>
   
    <MyNav/>
    <>
    {children}
    </>
    
    
    </BrowserRouter>
    )
}
