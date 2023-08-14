import { Route, Routes, useNavigate } from 'react-router-dom'

import { MainPage } from "./pages/MainPage";
import { Login } from "./pages/Login";
import MyTracks from "./pages/MyTracks";
import NotFound from "./pages/NotFound";
import Compilation from "./pages/Compilation";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import Registration from "./pages/Registration";

import { getCookie } from './helpers/helpers'
import React, { useState } from 'react'


export const AppRoutes = ({ tracks, loaded, error }) => {
  const [isAllowed, setIsAllowed] = useState(Boolean(getCookie('token')))

  const navigate = useNavigate()

  React.useEffect(() => {
      setIsAllowed(getCookie('token'))
  }, [navigate])

  return (
    
    <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/registration" element={<Registration />} />
    
    <Route path="/" element={<MainPage tracks={tracks} loaded={loaded} error={error} />} />
    
        <Route element={<ProtectedRoute isAllowed={isAllowed} />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/favourites" element={<MyTracks />}/>
        <Route path="/category/:id" element={<Compilation />}/>
    </Route>
    <Route path="*" element={<NotFound />} />
</Routes>
)
}

export default AppRoutes
    
    
    
    
    
    
    