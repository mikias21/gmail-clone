import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//css
import "./App.css";

// components
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import EmailList from "./components/EmailList";
import Mail from "./components/Mail";
import SendMail from "./components/SendMail";
import Login from "./components/Login";

// redux
import { selectSendMessageIsOpen } from "./features/mailSlice";
import { selectUser } from "./features/userSlice";

// firebase
import { auth } from "./firebase";

// redux
import { login } from "./features/userSlice";

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  //persistent login
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          login({
            name: user.displayName,
            email: user.email,
            image: user.photoURL,
          })
        );
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        {user ? (
          <>
            <Header />
            <div className="app__body">
              <Sidebar />
              <Switch>
                <Route path="/mail">
                  <Mail />
                </Route>
                <Route path="/">
                  <EmailList />
                </Route>
              </Switch>
            </div>
          </>
        ) : (
          <Login />
        )}
        {sendMessageIsOpen && <SendMail />}
      </div>
    </Router>
  );
}

export default App;
