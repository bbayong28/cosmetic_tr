import React, { useEffect } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Header from './pages/Header'
import Detail from './pages/Detail'

const App = () => {
    useEffect(() => {
        fetch(process.env.PUBLIC_URL + '/data.json').then(res =>  res.json()).then(res => console.log(res))
    },[])
    return (
    <div>
          <Header />
          <Routes>
              <Route path='/list/:num' element={<Detail />} />
          </Routes>
    </div>
  )
}

export default App