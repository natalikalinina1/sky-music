import React, { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import MainPage from './pages/Main'
import NotFound from './pages/NotFound'
import Login from './pages/Login'
import Registration from './pages/Registration'
import MyTracks from './pages/MyTracks'
import Compilation from './pages/Сompilation'
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute'
import { getCookie } from './helpers/helpers'
function Routers() {
    const [isAllowed, setIsAllowed] = useState(Boolean(getCookie('token')))

    const navigate = useNavigate()

    React.useEffect(() => {
        setIsAllowed(getCookie('token'))
    }, [navigate])
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route element={<ProtectedRoute isAllowed={isAllowed} />}>
                <Route path="/" element={<MainPage />} />
                <Route path="/my-tracks" element={<MyTracks/>} />
                <Route path="/collections/:id" element={<Compilation />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default Routers