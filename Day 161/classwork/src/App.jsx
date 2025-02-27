import { useState } from 'react'
import Login from './components/Login'
import SignUp from './components/Signup'
import MainPage from "./components/MainPage";

function App() {
    const [page, setPage] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [userData, setUserData] = useState(null);

    const isLoginHandle = (user) => {
      setIsLogin(true);
      setUserData(user)
    }

    
  
  return (
    <div>
      {!isLogin && (
        <button onClick={() => setPage(!page)}>
          {page ? "Login In" : "Sign Up"}
        </button>
      )}
      {!isLogin ? (
        page ? (
          <SignUp />
        ) : (
          <Login loginSucces={isLoginHandle} />
        )
      ) : (
        <MainPage user={userData} />
      )}
    </div>
  );
}

export default App