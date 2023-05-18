import React from "react";
import { List, Datagrid, TextField, EmailField, BooleanField } from "react-admin";

function UsersList(props) {

  

  return (
    <List {...props}>
        <Datagrid>
            <TextField source="id"/>
            <TextField source="name"/>
            <TextField source="Last Name"/>
            <EmailField source="Email"/>
            <BooleanField source="registered" label="Status"/>
            
        </Datagrid>
    </List>
  );
}

export default UsersList;
