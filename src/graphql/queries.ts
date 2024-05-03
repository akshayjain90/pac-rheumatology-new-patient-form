/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getPrivacyNotice = /* GraphQL */ `query GetPrivacyNotice($id: ID!) {
  getPrivacyNotice(id: $id) {
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
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetPrivacyNoticeQueryVariables,
  APITypes.GetPrivacyNoticeQuery
>;
export const listPrivacyNotices = /* GraphQL */ `query ListPrivacyNotices(
  $filter: ModelPrivacyNoticeFilterInput
  $limit: Int
  $nextToken: String
) {
  listPrivacyNotices(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPrivacyNoticesQueryVariables,
  APITypes.ListPrivacyNoticesQuery
>;
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
    ph_briefly_describe_present_symptoms
    ph_previous_treatment_for_problem
    ph_current_medicines
    emergency_contact_phone
    ph_allergy_to_med
    ph_allergy_to_med_list
    ph_rh_history_osteoarthritis
    ph_rh_history_gout
    ph_rh_history_vasculitis
    ph_rh_history_lupus
    ph_rh_history_rheumatoid
    ph_rh_history_spondyloarthropathy
    ph_rh_history_osteoporosis
    ph_past_medical_history
    ph_past_surgery_history
    ph_smoke
    ph_alcohol
    ph_rh_history_juvenile_arthritis
    ph_sleep
    ph_exercise
    ph_travel
    ph_pregnant
    ph_live_births
    ph_complications
    ph_drugs
    ad_people_in_household
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
    ad_daily_pain_scale
    ad_how_well_doing_scale
    ph_alcohol_weekly
    ph_symptoms
    ad_deal_anxiety_nervous
    ad_deal_depression_blue
    insurance_primary_insured_person_dob
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
      ph_briefly_describe_present_symptoms
      ph_previous_treatment_for_problem
      ph_current_medicines
      emergency_contact_phone
      ph_allergy_to_med
      ph_allergy_to_med_list
      ph_rh_history_osteoarthritis
      ph_rh_history_gout
      ph_rh_history_vasculitis
      ph_rh_history_lupus
      ph_rh_history_rheumatoid
      ph_rh_history_spondyloarthropathy
      ph_rh_history_osteoporosis
      ph_past_medical_history
      ph_past_surgery_history
      ph_smoke
      ph_alcohol
      ph_rh_history_juvenile_arthritis
      ph_sleep
      ph_exercise
      ph_travel
      ph_pregnant
      ph_live_births
      ph_complications
      ph_drugs
      ad_people_in_household
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
      ad_daily_pain_scale
      ad_how_well_doing_scale
      ph_alcohol_weekly
      ph_symptoms
      ad_deal_anxiety_nervous
      ad_deal_depression_blue
      insurance_primary_insured_person_dob
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
