import React from "react";
import { Edit, SelectInput, SimpleForm, TextInput} from "react-admin";

const applicantEdit = (props) => (
    <Edit {...props}>
        <SimpleForm warnWhenUnsavedChanges>
            <TextInput disabled source="id" />
            <TextInput source="name" />
            <TextInput source="lastName" />
            <TextInput disabled source="email" />
            <SelectInput source="profile" choices={[
                { id: 'admin', name: 'admin'},
                { id: 'applicant', name: 'applicant'},
            ]}/>
            <SelectInput source="registed" choices={[
                { id: 'false', name: 'Banned', value:'false' },
                { id: 'true', name: 'Active', value:'true' }
            ]} label='Status' />
        </SimpleForm>
    </Edit>
);

export default applicantEdit;