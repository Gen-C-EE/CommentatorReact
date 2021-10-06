// src/auth/auth0-provider-with-history.js

import React from "react";
import { useHistory } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const Auth0ProviderWithHistory = ({ children }) => {
  const domain = "dev-gda-1n7b.us.auth0.com";
  const clientId = "BLaKucUXZYD4kFntep51nN3gLBjJxH2M";

  const history = useHistory();

  //const onRedirectCallback = (appState) => {
  //  history.push(appState?.returnTo || window.location.pathname);
  //};

  const onRedirectCallback = appState => { history.push( appState && appState.targetUrl ? appState.targetUrl : window.location.href = "http://localhost:3000/video" ); history.go(0)}; 

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;