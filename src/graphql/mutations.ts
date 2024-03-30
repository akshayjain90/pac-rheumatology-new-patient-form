/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createNewPatient = /* GraphQL */ `mutation CreateNewPatient(
  $input: CreateNewPatientInput!
  $condition: ModelNewPatientConditionInput
) {
  createNewPatient(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateNewPatientMutationVariables,
  APITypes.CreateNewPatientMutation
>;
export const updateNewPatient = /* GraphQL */ `mutation UpdateNewPatient(
  $input: UpdateNewPatientInput!
  $condition: ModelNewPatientConditionInput
) {
  updateNewPatient(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateNewPatientMutationVariables,
  APITypes.UpdateNewPatientMutation
>;
export const deleteNewPatient = /* GraphQL */ `mutation DeleteNewPatient(
  $input: DeleteNewPatientInput!
  $condition: ModelNewPatientConditionInput
) {
  deleteNewPatient(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteNewPatientMutationVariables,
  APITypes.DeleteNewPatientMutation
>;
