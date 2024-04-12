import './App.css'
import {
  NewPatientCreateForm
} from './ui-components';

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


function App() {

  return (
    <>
      <Heading />
      <ParagraphWithNewlines />
      <NewPatientCreateForm />
    </>
  )
}

export default App
