import { Route, Routes } from 'react-router-dom'

import { MainPage } from "./pages/MainPage";
import { Login } from "./pages/Login";
import MyTracks from "./pages/MyTracks";
import NotFound from "./pages/NotFound";
import Compilation from "./pages/Compilation";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import Registration from "./pages/Registration";

export const AppRoutes = ({loaded, error, setdisplayed, setError, setLoaded }) => {
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
          element={
            <MainPage
              loaded={loaded}
              error={error}
              setdisplayed={setdisplayed}
              setLoaded={setLoaded}
              setError={setError}
            />
          }
        />
        <Route
          path="/favourites"
          element={
            < MyTracks                                    
              loaded={loaded}
              error={error}
              setdisplayed={setdisplayed}
              setError={setError}
              setLoaded={setLoaded}
            />
          }
        />
          <Route path="/category/:id" element={<Compilation loaded={loaded}
              error={error}
              setdisplayed={setdisplayed}
              setLoaded={setLoaded}
              setError={setError}/>} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  };
    
    
    
    
    
    
    