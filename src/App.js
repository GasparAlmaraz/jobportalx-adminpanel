import React from "react";
import { Admin, Resource, ListGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import UsersList from "./Components/UsersList";


const dataProvider = jsonServerProvider('https://pi-pokemon-back-production-c25c.up.railway.app');

function App() {



  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="Pokemons" list={ListGuesser} />
    </Admin>
  );
}

export default App;
