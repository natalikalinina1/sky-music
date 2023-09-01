
import { GlobalStyle } from "./components/style";
import { AppRoutes } from "./Routers";
import { useEffect, useState,createContext, useContext } from "react";
import Bar from "./components/Audio/Audio";


export const UserContext = createContext("");

export const useUserContext = () => {
  const user = useContext(UserContext);
  return user;
};
function App() {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [displayed, setdisplayed] = useState(false);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  return (
    <div className="App">
      <GlobalStyle  />
      <UserContext.Provider value={{ user: user, setUser }}>
        <>
        <AppRoutes    
          loaded={loaded}
          error={error}
          setUser={setUser}
          setError={setError}
          setLoaded={setLoaded}
            setdisplayed={setdisplayed}
        />
        <Bar loaded={loaded} displayed={displayed} />
        </>
      </UserContext.Provider>
      <GlobalStyle  />
    </div>
  );
}

export default App;
