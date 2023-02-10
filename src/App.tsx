import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Admin, Login, RecoveryPassword, SignUp, Stocks } from 'views'

const App = () => {
    return (
        <div>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/recovery' element={<RecoveryPassword />} />
                <Route path='/' element={<Admin />}>
                    <Route path='stocks' element={<Stocks />} />
                    <Route path='stock/:id' element={<Stocks />} />
                </Route>
            </Routes>
        </div>
    )
}

export default App
