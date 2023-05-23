import React from "react";
import { BooleanField, Datagrid, EmailField, List, TextField, Filter, SearchInput } from 'react-admin';


const CompaniesFilter = (props) => (
  <Filter>
    <SearchInput placeholder="Search Company" source="business_name" resettable alwaysOn/>
  </Filter>
)

export const CompanyList = () => (
    <List filters={CompaniesFilter()}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="country" />
            <TextField source="business_name" label="Company Name"/>
            <TextField source="cuit" />
            <EmailField source="email" />
            <BooleanField source="registed" label="Status" />
            <TextField source="profile" />
        </Datagrid>
    </List>
);


export default CompanyList;
