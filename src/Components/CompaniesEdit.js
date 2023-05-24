import React from "react";
import { Edit, SelectInput, SimpleForm, TextInput } from "react-admin";

const companyEdit = (props) => (
    <Edit {...props}>
        <SimpleForm warnWhenUnsavedChanges>
            <TextInput disabled source="id" />
            <TextInput source="name" />
            <TextInput source="country" />
            <TextInput source="business_name" />
            <TextInput source="cuit" />
            <TextInput disabled source="email" />
            <SelectInput source="registed" choices={[
                { id: 'false', name: 'Banned', value: 'false' },
                { id: 'true', name: 'Active', value: 'true' }
            ]} label='Status' />
            <SelectInput source="profile" choices={[
                { id: 'Admin', name: 'Admin Company' },
                { id: 'Company', name: 'Company' },
            ]} />
        </SimpleForm>
    </Edit>
);

export default companyEdit;