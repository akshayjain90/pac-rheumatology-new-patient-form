/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreatePatientHistory = /* GraphQL */ `subscription OnCreatePatientHistory(
  $filter: ModelSubscriptionPatientHistoryFilterInput
) {
  onCreatePatientHistory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreatePatientHistorySubscriptionVariables,
  APITypes.OnCreatePatientHistorySubscription
>;
export const onUpdatePatientHistory = /* GraphQL */ `subscription OnUpdatePatientHistory(
  $filter: ModelSubscriptionPatientHistoryFilterInput
) {
  onUpdatePatientHistory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePatientHistorySubscriptionVariables,
  APITypes.OnUpdatePatientHistorySubscription
>;
export const onDeletePatientHistory = /* GraphQL */ `subscription OnDeletePatientHistory(
  $filter: ModelSubscriptionPatientHistoryFilterInput
) {
  onDeletePatientHistory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeletePatientHistorySubscriptionVariables,
  APITypes.OnDeletePatientHistorySubscription
>;
export const onCreateRapid3 = /* GraphQL */ `subscription OnCreateRapid3($filter: ModelSubscriptionRapid3FilterInput) {
  onCreateRapid3(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateRapid3SubscriptionVariables,
  APITypes.OnCreateRapid3Subscription
>;
export const onUpdateRapid3 = /* GraphQL */ `subscription OnUpdateRapid3($filter: ModelSubscriptionRapid3FilterInput) {
  onUpdateRapid3(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateRapid3SubscriptionVariables,
  APITypes.OnUpdateRapid3Subscription
>;
export const onDeleteRapid3 = /* GraphQL */ `subscription OnDeleteRapid3($filter: ModelSubscriptionRapid3FilterInput) {
  onDeleteRapid3(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteRapid3SubscriptionVariables,
  APITypes.OnDeleteRapid3Subscription
>;
export const onCreatePrivacyNotice = /* GraphQL */ `subscription OnCreatePrivacyNotice(
  $filter: ModelSubscriptionPrivacyNoticeFilterInput
) {
  onCreatePrivacyNotice(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreatePrivacyNoticeSubscriptionVariables,
  APITypes.OnCreatePrivacyNoticeSubscription
>;
export const onUpdatePrivacyNotice = /* GraphQL */ `subscription OnUpdatePrivacyNotice(
  $filter: ModelSubscriptionPrivacyNoticeFilterInput
) {
  onUpdatePrivacyNotice(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePrivacyNoticeSubscriptionVariables,
  APITypes.OnUpdatePrivacyNoticeSubscription
>;
export const onDeletePrivacyNotice = /* GraphQL */ `subscription OnDeletePrivacyNotice(
  $filter: ModelSubscriptionPrivacyNoticeFilterInput
) {
  onDeletePrivacyNotice(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeletePrivacyNoticeSubscriptionVariables,
  APITypes.OnDeletePrivacyNoticeSubscription
>;
export const onCreateNewPatient = /* GraphQL */ `subscription OnCreateNewPatient(
  $filter: ModelSubscriptionNewPatientFilterInput
) {
  onCreateNewPatient(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateNewPatientSubscriptionVariables,
  APITypes.OnCreateNewPatientSubscription
>;
export const onUpdateNewPatient = /* GraphQL */ `subscription OnUpdateNewPatient(
  $filter: ModelSubscriptionNewPatientFilterInput
) {
  onUpdateNewPatient(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateNewPatientSubscriptionVariables,
  APITypes.OnUpdateNewPatientSubscription
>;
export const onDeleteNewPatient = /* GraphQL */ `subscription OnDeleteNewPatient(
  $filter: ModelSubscriptionNewPatientFilterInput
) {
  onDeleteNewPatient(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteNewPatientSubscriptionVariables,
  APITypes.OnDeleteNewPatientSubscription
>;
