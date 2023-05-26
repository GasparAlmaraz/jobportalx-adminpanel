import React from "react";
import { BooleanField, Datagrid, EmailField, List, TextField, Filter, SearchInput, ArrayField, SingleFieldList, ChipField } from 'react-admin';


const CompaniesFilter = (props) => (
  <Filter>
    <SearchInput placeholder="Search Company" source="name" resettable alwaysOn />
  </Filter>
)

export const CompanyList = () => (
  <List filters={CompaniesFilter()} pagination={<></>}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" label="Name" />
      <TextField source="country" />
      <TextField source="business_name" label="Business Name" />
      <TextField source="cuit" />
      <EmailField source="email" />
      <BooleanField source="registed" label="Status" />
      <TextField source="profile" />
      <ArrayField source="Stars" perPage={2} >
        <SingleFieldList multiline>
          <ChipField source="text" size="small"/>
        </SingleFieldList>
      </ArrayField>
    </Datagrid>
  </List>
);


export default CompanyList;
