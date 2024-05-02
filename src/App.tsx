import './App.css'
import {
  NewPatientCreateForm,
  PrivacyNoticeCreateForm
} from './ui-components';
import { useState } from 'react';

type PrivacyNoticeMessageProps = {
  name: string;
};

type EmailSentMessageProps = {
  email: string;
}

function Heading() {
  return <h1 className="centered">PACIFIC RHEUMATOLOGY ASSOCIATES</h1>;
}

function ParagraphWithNewlines() {
  const text = [
    '2100 WEBSTER STREET, SUITE 112, SAN FRANCISCO, CA 94115',
    'Neal S. Birnbaum, M.D., FACP, MACR',
    'Pedro J. Ruiz, M.D., PhD',
    'Molly D. Magnano, M.D.',
    'Ishita Aggarwal, M.D. RhMSUS',
    'PHONE:(415)923-3060 FAX:(415)749-0841'
  ];

  return (
    <p>
      {text.map((line, index) => (
        <div className="centered" key={index}>
          {line}
          <br />
        </div>
      ))}
    </p>
  );
}

function PrivacyNoticeHeader() {
  const text = [
    'RECEIPT OF NOTICE OF PRIVACY PRACTICES WRITTEN ACKNOWLEDGEMENT FORM',
  ];
  return (
    <p><b>
      {text.map((line, index) => (
        <div key={index}>
          {line}
          <br />
        </div>
      ))}
    </b></p>
  );
}
function PrivacyNoticeMessage(props:PrivacyNoticeMessageProps) {
  const text = [
    'I, ' + props.name + ' , acknowledge that I have received the "Notice of Privacy Practices" From Pacific Rheumatology Associates Medical Group. I understand that my record at the office will only be released in accordance to HIPAA Guidelines and California State Law.',
    'My record will be released upon my written authorization. I also authorize the following person(s) to receive my medical information over the telephone from your office and make appointments on my behalf as my Representative:'
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

function EmailSentMessage(props:EmailSentMessageProps) {
  return <h4 className="centered">Responses have been sent to the clinic and a copy has been sent to "{props.email}" for your records.</h4>;
}


function LastPageHeading() {
  return <div> <br/> <br/><br/> <h2 className="centered">NOTICE OF PRIVACY PRACTICES</h2></div>;
}


function LastPage() {
  const text = ['\
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
  \n \
  \n \
  \n \
  \n \
  '];
  return ( 
    <div className="display-linebreak"> 
       {text} 
    </div>
 );
}

function App() {
  var [name, setName] = useState("")
  var [email, setEmail] = useState("")
  var [insurancePrimaryInsuredPerson, setInsurancePrimaryInsuredPerson] = useState<string|undefined>("");
  var [allergy, setAllergy] = useState<boolean|undefined>(false);
  var [privacyName, setPrivacyName] = useState<string|undefined>("");
  var [step, setStep] = useState(1)


  return (
    <>
      <Heading />
      <ParagraphWithNewlines />
      {step == 1 && <NewPatientCreateForm 
        overrides={{
          ad_daily_pain_scale: {
            max : 10,
            step : 0.5,
          },
          ad_how_well_doing_scale: {
            max : 10,
            step : 0.5,
          }
        }}
        onSubmit={(fields) => {
          setName(fields["first_name"] + " " + fields["last_name"]);
          if(fields["email"] != undefined){
            setEmail(fields["email"]);
          }
          setStep(2);
          return fields;
        }}
        onChange={(fields) => {
          setInsurancePrimaryInsuredPerson(fields["insurance_primary_insured_person"])
          setAllergy(fields["ph_allergy_to_med"])
          return fields;
        }}
        onValidate={{
          insurance_primary_insured_person_relation: (value, validationResponse) => {
            if (insurancePrimaryInsuredPerson && insurancePrimaryInsuredPerson.length > 0 && (value == undefined || value.length == 0)) {
              return {
                hasError: true,
                errorMessage: 'Relation to insured person is required'
              };
            }
            return validationResponse;
          },
          insurance_primary_insured_person_dob: (value, validationResponse) => {
            if (insurancePrimaryInsuredPerson && insurancePrimaryInsuredPerson.length > 0 && (value == undefined || value.length == 0)) {
              return {
                hasError: true,
                errorMessage: 'Date of Birth of insured person is required'
              };
            }
            return validationResponse;
          },
          ph_allergy_to_med_list: (value, validationResponse) => {
            if (allergy && (value == undefined || value.length == 0)) {
              return {
                hasError: true,
                errorMessage: 'Medicine list is required if you have allery to meds'
              };
            }
            return validationResponse;
          }
        }}
      /> 
      }
      {step == 2 &&
        <LastPageHeading />
      }
      {step == 2 &&
        <LastPage />
      }
      {step == 2 &&
        <PrivacyNoticeHeader /> 
      }
      {step == 2 &&
        <PrivacyNoticeMessage 
        name = {name}
        />
      }
      {step == 2 &&
        <PrivacyNoticeCreateForm 
          onChange={(fields) => {
            setPrivacyName(fields["authorized_1"])
            return fields;
          }}
          onSuccess={() => {
            setStep(3)
          }}
          onValidate={{
            decline: (value, validationResponse) => {
              if ((!privacyName || privacyName=="") && (value == undefined || value == false)) {
                return {
                  hasError: true,
                  errorMessage: 'You must choose to decline if you are not authorizing anyone'
                };
              }
              return validationResponse;
            },
          }}
        />
      }
      {step == 3 &&
        <EmailSentMessage 
          email={email}
        />
      }
    </>
  )
}

export default App
