import { useMediaQuery } from "@mui/material";
import React from "react";
import { BooleanField, Datagrid, EmailField, List, TextField, Filter, SearchInput, ArrayField, SingleFieldList, ChipField, SimpleList } from 'react-admin';

const applicantFilter = (props) => (
  <Filter>
    <SearchInput placeholder="Search User" source="name" resettable alwaysOn />
  </Filter>
)

export const ApplicantList = () => {
  const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));

  return (
    <List filters={applicantFilter()} pagination={<></>}>
      {isSmall ? (
        <SimpleList 
          primaryText={record => record.name}
          secondaryText={record => record.profile}
        />
      ) : (
        <Datagrid rowClick = "edit">
          <TextField source = "id" />
          <TextField source="name" />
          <TextField source="lastName" />
          <EmailField source="email" />
          <TextField source="cellphone" />
          <BooleanField source="registed" label="Status" />
          <TextField source="profile" />
          <ArrayField source="Vacants" perPage={2} multiline>
            <SingleFieldList>
              <ChipField source="title" size="small" />
            </SingleFieldList>
          </ArrayField>
        </Datagrid>
      )}
    </List >
  )
};
