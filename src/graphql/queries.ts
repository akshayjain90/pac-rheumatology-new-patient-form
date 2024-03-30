/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getNewPatient = /* GraphQL */ `query GetNewPatient($id: ID!) {
  getNewPatient(id: $id) {
    id
    date
    first_name
    last_name
    date_of_birth
    gender
    marital_status
    ethnicity
    race
    primary_language
    address
    city
    state
    zip
    home_phone
    work_phone
    mobile_phone
    email
    social_security
    employer
    education
    veteran
    occupatin
    full_time
    preferred_pharmacy
    insurance_primary_name
    insurance_primary_id
    insurance_primary_group
    insurance_primary_address
    insurance_primary_phone
    insurance_primary_insured_person
    insurance_primary_insured_person_relation
    insurance_secondary
    insurance_secondary_id
    insurance_secondary_group
    insurance_secondary_address
    insurance_secondary_phone
    primary_care_physician_name
    referring_physician_name
    primary_care_physician_phone
    referring_physician_phone
    emergency_contact_name
    emergency_contact_phone
    emergency_contact_relationship
    signature_page_1
    signature_page_1_date
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetNewPatientQueryVariables,
  APITypes.GetNewPatientQuery
>;
export const listNewPatients = /* GraphQL */ `query ListNewPatients(
  $filter: ModelNewPatientFilterInput
  $limit: Int
  $nextToken: String
) {
  listNewPatients(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      date
      first_name
      last_name
      date_of_birth
      gender
      marital_status
      ethnicity
      race
      primary_language
      address
      city
      state
      zip
      home_phone
      work_phone
      mobile_phone
      email
      social_security
      employer
      education
      veteran
      occupatin
      full_time
      preferred_pharmacy
      insurance_primary_name
      insurance_primary_id
      insurance_primary_group
      insurance_primary_address
      insurance_primary_phone
      insurance_primary_insured_person
      insurance_primary_insured_person_relation
      insurance_secondary
      insurance_secondary_id
      insurance_secondary_group
      insurance_secondary_address
      insurance_secondary_phone
      primary_care_physician_name
      referring_physician_name
      primary_care_physician_phone
      referring_physician_phone
      emergency_contact_name
      emergency_contact_phone
      emergency_contact_relationship
      signature_page_1
      signature_page_1_date
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListNewPatientsQueryVariables,
  APITypes.ListNewPatientsQuery
>;
