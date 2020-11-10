import { BrowserRouter } from "react-router-dom";
import { useRoutes } from "./routes";
import "./App.css";
import { useAuth } from "./hooks/auth.hook";
import { AuthContext } from "./context/AuthContext";
import { Navbar } from "./Components/Navbar";

function App() {
  const { token, login, logout, userId } = useAuth();
  const isAuthenticated = !!token
  const routes = useRoutes(isAuthenticated);
  return (
    <AuthContext.Provider value = {{
      token, login, logout, userId, isAuthenticated
    }}>
      <BrowserRouter>
        {isAuthenticated && <Navbar />}
        <div className="App">{routes}</div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
