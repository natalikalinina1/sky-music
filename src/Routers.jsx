import { Route, Routes } from 'react-router-dom'

import { MainPage } from "./pages/MainPage";
import { Login } from "./pages/Login";
import MyTracks from "./pages/MyTracks";
import NotFound from "./pages/NotFound";
import Compilation from "./pages/Compilation";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import Registration from "./pages/Registration";

export const AppRoutes = ({ tracks, loaded, error }) => {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route
          element={
           
            <ProtectedRoute isAllowed={Boolean(localStorage.getItem("user"))} />
          }
        >
          <Route
            path="/"
            element={<MainPage tracks={tracks} loaded={loaded} error={error} />}
          />
          <Route path="/favourites" element={<MyTracks/>} />
          <Route path="/category/:id" element={<Compilation />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  };
    
    
    
    
    
    
    