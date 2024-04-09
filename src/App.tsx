import './App.css'
import {
  NewPatientCreateForm,
  Page2PatientHistory
 } from './ui-components';
 import { NewPatient } from './API';


function Heading() {
  return <h1>PACIFIC RHEUMATOLOGY ASSOCIATES MEDICAL GROUP</h1>;
}


function ParagraphWithNewlines() {
  const text = [
    '2100 WEBSTER STREET, SUITE 112, SAN FRANCISCO, CA 94115',
    'Neal S. Birnbaum, M.D., FACP, MACR',
    'Pedro J. Ruiz, M.D., PhD',
    'Molly D. Magnano, M.D.',
    'Ishita Aggarwal, M.D. ',
    'PHONE:(415)923-3060 FAX:(415)749-0841'
  ];

  return (
    <p>
      {text.map((line, index) => (
        <div key={index}>
          {line}
          <br />
        </div>
      ))}
    </p>
  );
}



const patient: NewPatient = {__typename:"NewPatient", id: "dfsfds", createdAt : "dsvsf", updatedAt: "sdfkl"};

function App() {
  return (
    <>
      <Heading />
      <ParagraphWithNewlines />
      <NewPatientCreateForm 
      />
      <Page2PatientHistory
        newPatient={patient}
      />
    </>
  )
}

export default App
