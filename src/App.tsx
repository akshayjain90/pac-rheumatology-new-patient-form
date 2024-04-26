import './App.css'
import {
  NewPatientCreateForm
} from './ui-components';

function Heading() {
  return <h1>PACIFIC RHEUMATOLOGY ASSOCIATES MEDICAL GROUP</h1>;
}


function LastPage() {
  const text = ['\
  \n \
  \n \
  \n \
  NOTICE OF PRIVACY PRACTICES \n \
  \n \
  This notice describes how medical information about you may be used and disclosed and how you can get access to this information. Please review it carefully. \n \
  \n \
  The Health Insurance Portability & Accountability Act (HIPAA) requires all health care records and other individually identifiable health information used or disclosed to us in any form, whether electronically, on paper, or orally, to be kept confidential. This federal law gives you, the patient, significant new rights to understand and control how your health information is used. HIPAA provides penalties for covered entities that misuse personal health information. As required by law, we have prepared this explanation of how we are required to maintain the privacy of your health information and how we may use and disclose your health information. \n \
  \n \
  Without specific written authorization, we are permitted to use and disclose your health care records for the purposes of treatment, payment, and health care operations. \n \
  \n \
  -Treatment means providing, coordination, or managing health care and related services by one or more health care providers. For example, we may need to share information with other health care providers or specialists involved in the continuation of your care. \n \
  -Payment means such activities as obtaining reimbursement for services, confirming coverage, billing or collection activities, and utilization review. For example we may disclose treatment information when billing a medical plan for your medical services. \n \
  -Health Care Operations include the business aspects of running our practice. For example, patient information may be used for training purposes, or quality assessment. \n \
  \n \
  Unless you request otherwise, we may use or disclose health information to a family member, friend, personal representative, or other individual to the extent necessary to help with your health care or with payment for your health care. In the event of an emergency or your incapacity, we will use our professional judgment in disclosing only the protected health information necessary to facilitate needed care. In addition, we may use your confidential information to remind you of appointments by sending reminder postcards and/or leaving messages at home and/or work. Your protected health information may also be used by our office to recommend treatment alternatives or to provide you with information about health-related benefits and services that may be of interest to you. In addition, we may disclose your health information for public health oversight activities, judicial or administrative proceedings, in response to a subpoena or court order, to military authorities of Armed Forces personnel, to federal officials for lawful intelligence, counterintelligence, and other national activities, to correctional institutions or law enforcement officials, and/or to report suspected abuse, neglect, or domestic violence. Any other uses and disclosures will be made only with your written authorization. You may revoke such authorization in writing and we are required to honor and abide by that written request, except to the extent that we have already taken actions relying on your authorization. \n \
  \n \
  You have certain rights in regards to your protected health information, which you may exercise by presenting a written request to our Privacy Officer at the practice address listed below: \n \
  \n \
  -The right to request restrictions on certain uses and disclosures of protected health information, including those related to disclosures to family members, other relatives, close personal friends, or any other person identified by you. We are, however, not required to agree to a requested restriction. If we do agree to a restriction, we must abide by it unless you agree in writing to remove it. \n \
  -The right to request to receive confidential communications of protected health information from us by alternative means or at alternative locations. -The right to access, inspect, and copy your protected health information, with limited exceptions. A reasonable fee may be assessed. -The right to request an amendment to your protected health information. We may deny your request in certain situations. \n \
  -The right to receive an accounting of disclosures of protected health information made outside of treatment, payment, or health care operations....or based on your previous authorization. \n \
  -The right to obtain a paper copy of this notice from us upon request, event if you have agreed to receive the notice electronically. \n \
  \n \
  We are required by law to maintain the privacy of your protected health information and to provide you with notice of our legal duties and privacy practices with respect to protected health information. \n \
  \n \
  This notice is revised as of February 2005, and we are required to abide by the terms of the Notice of Privacy Practices currently in effect. We reserve the right to change the terms of our Notice of Privacy Practices and to make the new notice provisions effective for all protected health information that we maintain. Revisions to our Notice of Privacy Practices will be posted on the effective date and you may request a written copy of the Revised Notice from this office. \n \
  \n \
  You have the right to file a formal, written complaint with us at the address below, or with the Department of Health & Human Services, Office of Civil Rights, in the event you feel your privacy rights have been violated. We will not retaliate against you for filing a complaint. \n \
  \n \
  \n \
  For more information about our Privacy Practices, please contact: \n \
  \n \
  Privacy Officer: Neal S. Birnbaum, M.D. \n \
  Pacific Rheumatology Associates Medical Group 2100 Webster St., Suite 112 \n \
  San Francisco, CA 94115 \n \
  415-923-3060 \n \
  \n \
  \n \
  For more information about HIPAA or to file a complaint: \n \
  \n \
  The U.S. Dept. of Health & Human Services Office of Civil Rights \n \
  200 Independence Ave, S.W. \n \
  Washington, D.C. 20201 \n \
  877-696-6775 (toll-free) \n \
  '];
  return ( 
    <div className="display-linebreak"> 
       {text} 
    </div>
 );
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
      <NewPatientCreateForm 
        overrides={{
          ad_daily_pain_scale: {
            max : 10,
            step : 0.5
          }
        }}
    
      />
    </>
  )
}

export default App
