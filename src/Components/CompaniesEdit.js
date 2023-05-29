import React from "react";
import { Edit, SelectInput, SimpleForm, TextInput, ArrayInput, SimpleFormIterator } from "react-admin";

const companyEdit = (props) => (
    <Edit {...props}>
        <SimpleForm warnWhenUnsavedChanges>
            <TextInput disabled source="id" />
            <TextInput source="name" label='Company Name' />
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
            <ArrayInput source="Stars">
                <SimpleFormIterator inline addButton={<></>} reOrderButtons={<></>}>
                    <TextInput disabled source="stars" label="Estrellas" />
                    <TextInput disabled source="text" label="Comentario" fullWidth multiline/>
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Edit>
);

export default companyEdit;