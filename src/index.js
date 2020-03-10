import React from 'react';
    import ReactDOM from 'react-dom';
    import './index.css';
    import App from './App';
    import { ApolloProvider } from "react-apollo";
    import ApolloClient from "apollo-boost";
    import * as serviceWorker from './serviceWorker';
    
    const client = new ApolloClient({
      // uri: "https://api-euwest.graphcms.com/v1/ck7j7p7kp41f401ek8zkw1ub3/master"
      
      uri: "https://api-euwest.graphcms.com/v1/ck7jao72644uj01ek89yh5gqt/master"
    });
    
    ReactDOM.render(
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>,
      document.getElementById('root')
    );
    
    serviceWorker.unregister();