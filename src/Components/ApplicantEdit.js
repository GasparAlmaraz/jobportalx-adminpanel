import React from "react";
import { Edit, SelectInput, SimpleForm, TextInput, ArrayInput, SimpleFormIterator} from "react-admin";

const applicantEdit = (props) => (
    <Edit {...props}>
        <SimpleForm warnWhenUnsavedChanges>
            <TextInput disabled source="id" fullWidth multiline/>
            <TextInput source="name" />
            <TextInput source="lastName" />
            <TextInput disabled source="email" fullWidth multiline/>
            <SelectInput source="profile" choices={[
                { id: 'Admin', name: 'Admin'},
                { id: 'Applicant', name: 'Applicant'},
            ]}/>
            <SelectInput source="registed" choices={[
                { id: 'false', name: 'Banned', value:'false' },
                { id: 'true', name: 'Active', value:'true' }
            ]} label='Status' />
            <ArrayInput source="Vacants">
                <SimpleFormIterator inline>
                    <TextInput disabled source="title" fullWidth multiline/>
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Edit>
);

export default applicantEdit;