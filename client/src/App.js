import React from 'react'
import './App.css';
import client from './config/gql_config'
import { ApolloProvider } from '@apollo/client';
import Student from './components/Student'


function App() {
  return (
    <ApolloProvider client={client}>
      <Student />
    </ApolloProvider>
  );
}

export default App;
