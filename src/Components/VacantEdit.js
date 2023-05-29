import { RichTextInput } from "ra-input-rich-text";
import React from "react";
import { Edit, SelectInput, SimpleForm, TextInput, ReferenceField, DateInput } from "react-admin";

const vacantEdit = (props) => (
    <Edit {...props}>
        <SimpleForm warnWhenUnsavedChanges>
            <TextInput disabled source="id" />

            <TextInput source="title" fullWidth multiline />
            <RichTextInput source="description" fullWidth multiline />
            <DateInput source="createdAt" />
            <ReferenceField source="CompanyId" reference="Company" >
                <TextInput source='business_name' />
            </ReferenceField>
            <SelectInput disabled source="Workday.name" choices={[
                { id: 'fullTime', name: 'Full Time', value: 'fullTime' },
                { id: 'partTime', name: 'Part Time', value: 'partTime' },
                { id: 'hourlyWork', name: 'Por Hora', value: 'hourlyWork' },
            ]} />
            <SelectInput disabled source="WorkMethod.name" choices={[
                { id: 'prescencial', name: 'Prescencial', value: 'Prescencial' },
                { id: 'remote', name: 'Remoto', value: 'Remoto' },
                { id: 'hibrid', name: 'Hibrido', value: 'Hibrido' },
            ]} />
            <SelectInput disabled source="Seniority.name" choices={[
                { id: 'senior', name: 'Senior', value: 'Senior' },
                { id: 'semisenior', name: 'Semi-Senior', value: 'SemiSenior' },
                { id: 'junior', name: 'Junior', value: 'Junior' },
                { id: 'trainee', name: 'Trainee', value: 'Trainee' },
            ]} />
        </SimpleForm>
    </Edit>
);

export default vacantEdit;