import React from "react";
import { Datagrid, List, NumberField, TextField, Filter, SearchInput } from 'react-admin';


const CompaniesFilter = (props) => (
  <Filter>
    <SearchInput placeholder="Search Type" source="name" resettable alwaysOn/>
  </Filter>
)

export const PokemonList = (props) => (
    <List {...props} filters={CompaniesFilter()}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="image" />
            <TextField source="type" />
            <NumberField source="attack" />
        </Datagrid>
    </List>
);

export default PokemonList;
