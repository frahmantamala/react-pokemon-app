import { ApolloProvider } from "@apollo/react-hooks";
import React from "react";
import { PokemonContainer } from "./containers/PokemonContainer";
import { Client } from "./graphql/Client";
import './App.css';

function App() {

  return (
    <ApolloProvider client={Client}>
      <main>
        <PokemonContainer />
      </main>
    </ApolloProvider>
  );
}

export default App;
