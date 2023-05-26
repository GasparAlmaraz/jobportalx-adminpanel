import React from "react";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import {ApplicantList} from "./Components/ApplicantList";
import applicantEdit from "./Components/ApplicantEdit";
import CompanyList from "./Components/CompaniesList";
import companyEdit from "./Components/CompaniesEdit";
import JobList from "./Components/VacantList";
import vacantEdit from "./Components/VacantEdit";


//Developer
const dataProvider = jsonServerProvider('http://localhost:3001');
//Main
//const dataProvider = jsonServerProvider('https://proyecto-final-production-9e7e.up.railway.app');

function App() {

  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="applicant" list={ApplicantList} edit={applicantEdit} />
      <Resource name="company" list={CompanyList} edit={companyEdit}/>
      <Resource name="job" list={JobList} edit={vacantEdit}/>
    </Admin>
  );
}

export default App;
