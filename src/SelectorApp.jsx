import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { AuthStyle } from "AuthStyle";
import App from "App";
// Custom Chakra theme

function SelectorApp() {
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);

  useEffect(() => {
    console.log("AUTHSTATUS", authStatus);
  }, [authStatus]);

  return (
    <>
      {authStatus === "configuring" && "Loading..."}
      {authStatus !== "authenticated" ? <AuthStyle /> : <App />}
    </>
  );
}

export default SelectorApp;
