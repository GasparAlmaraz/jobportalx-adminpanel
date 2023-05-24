import React from "react";
import { BooleanField, Datagrid, EmailField, List, TextField, Filter, SearchInput } from 'react-admin';

const applicantFilter = (props) => (
  <Filter>
    <SearchInput placeholder="Search User" source="name" resettable alwaysOn />
  </Filter>
)

export const ApplicantList = () => (
  <List filters={applicantFilter()}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="lastName" />
      <EmailField source="email" />
      <TextField source="cellphone" />
      <BooleanField source="registed" label="Status" />
      <TextField source="profile" />
    </Datagrid>
  </List>
);
