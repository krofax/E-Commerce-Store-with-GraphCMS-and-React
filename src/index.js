import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";
import * as serviceWorker from "./serviceWorker";

const client = new ApolloClient({
  uri: "https://api-euwest.graphcms.com/v1/ck7jao72644uj01ek89yh5gqt/master",
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <ApolloHooksProvider client={client}>
      <App />
   </ApolloHooksProvider>
  </ApolloProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
