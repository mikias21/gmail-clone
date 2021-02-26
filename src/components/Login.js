import { useDispatch } from "react-redux";
import { useState } from "react";
// css
import "../styles/Login.css";

// redux
import { login } from "../features/userSlice";

// Material UI
import { Button } from "@material-ui/core";

// firebase
import { auth, provider } from "../firebase";

function Login() {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        dispatch(
          login({
            name: user.displayName,
            email: user.email,
            image: user.photoURL,
          })
        );
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://www.logo.wine/a/logo/Gmail/Gmail-Logo.wine.svg"
          alt=""
        />
        <Button onClick={signIn} variant="contained" color="primary">
          Login
        </Button>
      </div>
    </div>
  );
}

export default Login;
