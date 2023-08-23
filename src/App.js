
import { GlobalStyle } from "./components/style";
import { AppRoutes } from "./Routers";
import { useEffect, useState,createContext, useContext } from "react";
import { getTracks } from "./api";
import { useDispatch } from "react-redux";
import { setCurrentAlbum } from "./functionsReducer/createSlice/currentAlbum";


export const UserContext = createContext("");

export const useUserContext = () => {
  const user = useContext(UserContext);
  return user;
};
function App() {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const dispatch = useDispatch();
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
    getTracks()
      .then((tracks) => {
        dispatch(setCurrentAlbum(tracks));
        setLoaded(true);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [dispatch]);

  return (
    <div className="App">
      <GlobalStyle  />
      <UserContext.Provider value={{ user: user, setUser }}>
        <AppRoutes    
          loaded={loaded}
          error={error}
          setUser={setUser}
        />
      </UserContext.Provider>
      <GlobalStyle  />
    </div>
  );
}

export default App;
