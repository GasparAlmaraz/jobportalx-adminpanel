import React from "react";
import { Datagrid, DateField, List, ReferenceField, TextField, Filter, SearchInput, FunctionField, BooleanField } from 'react-admin';
import { truncateDescription } from "./utils/truncateText";

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
            <FunctionField
                source="description"
                label="Descripción"
                render={(record) => (
                    <span>{truncateDescription(record.description, 40)}</span>
                )}
            />
            <DateField source="createdAt" />
            <ReferenceField source="CompanyId" reference="Company" >
                <TextField source='business_name' />
            </ReferenceField>
            <BooleanField source="status" />
            <TextField source="Workday.name" />
            <TextField source="WorkMethod.name" />
            <TextField source="Seniority.name" />
        </Datagrid>
    </List>
);

export default JobList;