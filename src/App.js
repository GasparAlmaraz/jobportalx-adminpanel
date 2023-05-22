import React from "react";
import { Admin, Resource, ListGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import ApplicantList from "./Components/ApplicantList";
import applicantEdit from "./Components/ApplicantEdit";



const dataProvider = jsonServerProvider('http://localhost:3001');

function App() {

  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="applicant" list={ApplicantList} edit={applicantEdit} />
      {/* <Resource name="company" list={CompaniesList} /> */}
    </Admin>
  );
}

export default App;
