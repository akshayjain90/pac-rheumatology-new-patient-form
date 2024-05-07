/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createPatientHistory = /* GraphQL */ `mutation CreatePatientHistory(
  $input: CreatePatientHistoryInput!
  $condition: ModelPatientHistoryConditionInput
) {
  createPatientHistory(input: $input, condition: $condition) {
    id
    first_name
    last_name
    date_of_birth
    ph_briefly_describe_present_symptoms
    ph_previous_treatment_for_problem
    ph_current_medicines
    ph_allergy_to_med
    ph_allergy_to_med_list
    ph_rh_history_osteoarthritis
    ph_rh_history_gout
    ph_rh_history_juvenile_arthritis
    ph_rh_history_vasculitis
    ph_rh_history_lupus
    ph_rh_history_rheumatoid
    ph_rh_history_spondyloarthropathy
    ph_rh_history_osteoporosis
    ph_past_medical_history
    ph_past_surgery_history
    ph_smoke
    ph_drugs
    ph_alcohol
    ph_alcohol_weekly
    ph_sleep
    ph_exercise
    ph_travel
    ph_pregnant
    ph_live_births
    ph_complications
    ad_people_in_household
    ph_symptoms
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreatePatientHistoryMutationVariables,
  APITypes.CreatePatientHistoryMutation
>;
export const updatePatientHistory = /* GraphQL */ `mutation UpdatePatientHistory(
  $input: UpdatePatientHistoryInput!
  $condition: ModelPatientHistoryConditionInput
) {
  updatePatientHistory(input: $input, condition: $condition) {
    id
    first_name
    last_name
    date_of_birth
    ph_briefly_describe_present_symptoms
    ph_previous_treatment_for_problem
    ph_current_medicines
    ph_allergy_to_med
    ph_allergy_to_med_list
    ph_rh_history_osteoarthritis
    ph_rh_history_gout
    ph_rh_history_juvenile_arthritis
    ph_rh_history_vasculitis
    ph_rh_history_lupus
    ph_rh_history_rheumatoid
    ph_rh_history_spondyloarthropathy
    ph_rh_history_osteoporosis
    ph_past_medical_history
    ph_past_surgery_history
    ph_smoke
    ph_drugs
    ph_alcohol
    ph_alcohol_weekly
    ph_sleep
    ph_exercise
    ph_travel
    ph_pregnant
    ph_live_births
    ph_complications
    ad_people_in_household
    ph_symptoms
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdatePatientHistoryMutationVariables,
  APITypes.UpdatePatientHistoryMutation
>;
export const deletePatientHistory = /* GraphQL */ `mutation DeletePatientHistory(
  $input: DeletePatientHistoryInput!
  $condition: ModelPatientHistoryConditionInput
) {
  deletePatientHistory(input: $input, condition: $condition) {
    id
    first_name
    last_name
    date_of_birth
    ph_briefly_describe_present_symptoms
    ph_previous_treatment_for_problem
    ph_current_medicines
    ph_allergy_to_med
    ph_allergy_to_med_list
    ph_rh_history_osteoarthritis
    ph_rh_history_gout
    ph_rh_history_juvenile_arthritis
    ph_rh_history_vasculitis
    ph_rh_history_lupus
    ph_rh_history_rheumatoid
    ph_rh_history_spondyloarthropathy
    ph_rh_history_osteoporosis
    ph_past_medical_history
    ph_past_surgery_history
    ph_smoke
    ph_drugs
    ph_alcohol
    ph_alcohol_weekly
    ph_sleep
    ph_exercise
    ph_travel
    ph_pregnant
    ph_live_births
    ph_complications
    ad_people_in_household
    ph_symptoms
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeletePatientHistoryMutationVariables,
  APITypes.DeletePatientHistoryMutation
>;
export const createRapid3 = /* GraphQL */ `mutation CreateRapid3(
  $input: CreateRapid3Input!
  $condition: ModelRapid3ConditionInput
) {
  createRapid3(input: $input, condition: $condition) {
    id
    first_name
    last_name
    date_of_birth
    ad_dress_yourself
    ad_get_in_out_bed
    ad_lift_full_cup_mouth
    ad_walk_outdoor_flat
    ad_wash_dry_body
    ad_pick_clothing_floor
    ad_turn_faucets_on_off
    ad_get_in_out_car_bus_train_plane
    ad_walk_two_miles
    ad_recreational_activities_sports
    ad_good_night_sleep
    ad_deal_anxiety_nervous
    ad_deal_depression_blue
    ad_daily_pain_scale
    ad_how_well_doing_scale
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateRapid3MutationVariables,
  APITypes.CreateRapid3Mutation
>;
export const updateRapid3 = /* GraphQL */ `mutation UpdateRapid3(
  $input: UpdateRapid3Input!
  $condition: ModelRapid3ConditionInput
) {
  updateRapid3(input: $input, condition: $condition) {
    id
    first_name
    last_name
    date_of_birth
    ad_dress_yourself
    ad_get_in_out_bed
    ad_lift_full_cup_mouth
    ad_walk_outdoor_flat
    ad_wash_dry_body
    ad_pick_clothing_floor
    ad_turn_faucets_on_off
    ad_get_in_out_car_bus_train_plane
    ad_walk_two_miles
    ad_recreational_activities_sports
    ad_good_night_sleep
    ad_deal_anxiety_nervous
    ad_deal_depression_blue
    ad_daily_pain_scale
    ad_how_well_doing_scale
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateRapid3MutationVariables,
  APITypes.UpdateRapid3Mutation
>;
export const deleteRapid3 = /* GraphQL */ `mutation DeleteRapid3(
  $input: DeleteRapid3Input!
  $condition: ModelRapid3ConditionInput
) {
  deleteRapid3(input: $input, condition: $condition) {
    id
    first_name
    last_name
    date_of_birth
    ad_dress_yourself
    ad_get_in_out_bed
    ad_lift_full_cup_mouth
    ad_walk_outdoor_flat
    ad_wash_dry_body
    ad_pick_clothing_floor
    ad_turn_faucets_on_off
    ad_get_in_out_car_bus_train_plane
    ad_walk_two_miles
    ad_recreational_activities_sports
    ad_good_night_sleep
    ad_deal_anxiety_nervous
    ad_deal_depression_blue
    ad_daily_pain_scale
    ad_how_well_doing_scale
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteRapid3MutationVariables,
  APITypes.DeleteRapid3Mutation
>;
export const createPrivacyNotice = /* GraphQL */ `mutation CreatePrivacyNotice(
  $input: CreatePrivacyNoticeInput!
  $condition: ModelPrivacyNoticeConditionInput
) {
  createPrivacyNotice(input: $input, condition: $condition) {
    id
    full_name
    authorized_1
    relationship_1
    authorized_2
    relationship_2
    authorized_3
    relationship_3
    decline
    date
    open_payment_signature
    open_payment_date
    signature
    first_name
    last_name
    date_of_birth
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreatePrivacyNoticeMutationVariables,
  APITypes.CreatePrivacyNoticeMutation
>;
export const updatePrivacyNotice = /* GraphQL */ `mutation UpdatePrivacyNotice(
  $input: UpdatePrivacyNoticeInput!
  $condition: ModelPrivacyNoticeConditionInput
) {
  updatePrivacyNotice(input: $input, condition: $condition) {
    id
    full_name
    authorized_1
    relationship_1
    authorized_2
    relationship_2
    authorized_3
    relationship_3
    decline
    date
    open_payment_signature
    open_payment_date
    signature
    first_name
    last_name
    date_of_birth
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdatePrivacyNoticeMutationVariables,
  APITypes.UpdatePrivacyNoticeMutation
>;
export const deletePrivacyNotice = /* GraphQL */ `mutation DeletePrivacyNotice(
  $input: DeletePrivacyNoticeInput!
  $condition: ModelPrivacyNoticeConditionInput
) {
  deletePrivacyNotice(input: $input, condition: $condition) {
    id
    full_name
    authorized_1
    relationship_1
    authorized_2
    relationship_2
    authorized_3
    relationship_3
    decline
    date
    open_payment_signature
    open_payment_date
    signature
    first_name
    last_name
    date_of_birth
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeletePrivacyNoticeMutationVariables,
  APITypes.DeletePrivacyNoticeMutation
>;
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
    occupation
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
    full_time
    emergency_contact_relationship
    signature_page_1
    signature_page_1_date
    emergency_contact_phone
    insurance_primary_insured_person_dob
    race_other
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
    occupation
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
    full_time
    emergency_contact_relationship
    signature_page_1
    signature_page_1_date
    emergency_contact_phone
    insurance_primary_insured_person_dob
    race_other
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
    occupation
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
    full_time
    emergency_contact_relationship
    signature_page_1
    signature_page_1_date
    emergency_contact_phone
    insurance_primary_insured_person_dob
    race_other
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteNewPatientMutationVariables,
  APITypes.DeleteNewPatientMutation
>;
