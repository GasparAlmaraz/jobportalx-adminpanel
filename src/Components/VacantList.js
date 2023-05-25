import React from "react";
import { Datagrid, DateField, List, ReferenceField, TextField, Filter, SearchInput } from 'react-admin';

const CompaniesFilter = (props) => (
    <Filter>
        <SearchInput placeholder="Search Job" source="title" resettable alwaysOn />
    </Filter>
)

const JobList = () => (
    <List filters={CompaniesFilter()} pagination={<></>}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="description" />
            <DateField source="createdAt" />
            <ReferenceField source="CompanyId" reference="Company" >
                <TextField source='business_name' />
            </ReferenceField>
            <TextField source="Workday.name" />
            <TextField source="WorkMethod.name" />
            <TextField source="Seniority.name" />
        </Datagrid>
    </List>
);

export default JobList;