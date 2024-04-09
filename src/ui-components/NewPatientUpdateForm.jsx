/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextAreaField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getNewPatient } from "../graphql/queries";
import { updateNewPatient } from "../graphql/mutations";
const client = generateClient();
export default function NewPatientUpdateForm(props) {
  const {
    id: idProp,
    newPatient: newPatientModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    date: "",
    first_name: "",
    last_name: "",
    date_of_birth: "",
    gender: "",
    marital_status: "",
    ethnicity: "",
    race: "",
    primary_language: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    home_phone: "",
    work_phone: "",
    mobile_phone: "",
    email: "",
    social_security: "",
    employer: "",
    education: "",
    veteran: false,
    occupatin: "",
    full_time: false,
    preferred_pharmacy: "",
    insurance_primary_name: "",
    insurance_primary_id: "",
    insurance_primary_group: "",
    insurance_primary_address: "",
    insurance_primary_phone: "",
    insurance_primary_insured_person: "",
    insurance_primary_insured_person_relation: "",
    insurance_secondary: "",
    insurance_secondary_id: "",
    insurance_secondary_group: "",
    insurance_secondary_address: "",
    insurance_secondary_phone: "",
    primary_care_physician_name: "",
    referring_physician_name: "",
    primary_care_physician_phone: "",
    referring_physician_phone: "",
    emergency_contact_name: "",
    emergency_contact_phone: "",
    emergency_contact_relationship: "",
    signature_page_1: "",
    signature_page_1_date: "",
    ph_briefly_describe_present_symptoms: "",
    ph_previous_treatment_for_problem: "",
    ph_current_medicine_1: "",
    ph_current_medicine_2: "",
    ph_current_medicine_3: "",
    ph_current_medicine_4: "",
    ph_current_medicine_5: "",
    ph_current_medicine_6: "",
    ph_current_medicine_7: "",
    ph_current_medicine_8: "",
    ph_current_medicine_9: "",
    ph_current_medicine_10: "",
    ph_current_medicine_11: "",
    ph_current_medicine_12: "",
    ph_current_medicine_13: "",
    ph_current_medicine_14: "",
    ph_current_medicine_15: "",
    ph_allergy_to_med: false,
    ph_allergy_to_med_list: "",
    ph_rh_history_osteoarthritis: "",
    ph_rh_history_gout: "",
    ph_rh_history_juvenile_arthritis: "",
    ph_rh_history_vasculitis: "",
    ph_rh_history_lupus: "",
    ph_rh_history_rheumatoid: "",
    ph_rh_history_spondyloarthropathy: "",
    ph_rh_history_osteoporosis: "",
    ph_past_medical_history: "",
    ph_past_surgery_history: "",
    ph_smoke: "",
    ph_alcohol: "",
    ph_drugs: "",
    ph_sleep: "",
    ph_exercise: "",
    ph_travel: "",
    ph_pregnant: "",
    ph_live_births: "",
    ph_complications: "",
    ph_symptoms: "",
    ad_people_in_household: "",
    ad_who_shopping: "",
    ad_housework: "",
    ad_hardest_thing: "",
    ad_ability_stand_up_chair: "",
    ad_ability_walk_outdoors_flat: "",
    ad_ability_get_on_toilet: "",
    ad_ability_reach_5_pound: "",
    ad_ability_car_doors: "",
    ad_ability_outside_work: "",
    ad_ability_wait_in_line: "",
    ad_ability_lift_heavy: "",
    ad_ability_lift_heavier: "",
    ad_ability_climb_2_flights: "",
    ad_aids_devices_activities: "",
    ad_categories_help: "",
    ad_daily_pain_scale: "",
    ad_how_well_doing_scale: "",
    pp_ack_name: "",
    pp_ack_auth_name_1: "",
    pp_ack_auth_name_2: "",
    pp_ack_auth_name_3: "",
    pp_ack_auth_relationship_1: "",
    pp_ack_auth_relationship_2: "",
    pp_ack_auth_relationship_3: "",
    pp_ack_decline_names: "",
    pp_signature_page_4: "",
    pp_signature_page_4_date: "",
    reciept_notice_signature_page_5: "",
    reciept_notice_signature_page_5_date: "",
  };
  const [date, setDate] = React.useState(initialValues.date);
  const [first_name, setFirst_name] = React.useState(initialValues.first_name);
  const [last_name, setLast_name] = React.useState(initialValues.last_name);
  const [date_of_birth, setDate_of_birth] = React.useState(
    initialValues.date_of_birth
  );
  const [gender, setGender] = React.useState(initialValues.gender);
  const [marital_status, setMarital_status] = React.useState(
    initialValues.marital_status
  );
  const [ethnicity, setEthnicity] = React.useState(initialValues.ethnicity);
  const [race, setRace] = React.useState(initialValues.race);
  const [primary_language, setPrimary_language] = React.useState(
    initialValues.primary_language
  );
  const [address, setAddress] = React.useState(initialValues.address);
  const [city, setCity] = React.useState(initialValues.city);
  const [state, setState] = React.useState(initialValues.state);
  const [zip, setZip] = React.useState(initialValues.zip);
  const [home_phone, setHome_phone] = React.useState(initialValues.home_phone);
  const [work_phone, setWork_phone] = React.useState(initialValues.work_phone);
  const [mobile_phone, setMobile_phone] = React.useState(
    initialValues.mobile_phone
  );
  const [email, setEmail] = React.useState(initialValues.email);
  const [social_security, setSocial_security] = React.useState(
    initialValues.social_security
  );
  const [employer, setEmployer] = React.useState(initialValues.employer);
  const [education, setEducation] = React.useState(initialValues.education);
  const [veteran, setVeteran] = React.useState(initialValues.veteran);
  const [occupatin, setOccupatin] = React.useState(initialValues.occupatin);
  const [full_time, setFull_time] = React.useState(initialValues.full_time);
  const [preferred_pharmacy, setPreferred_pharmacy] = React.useState(
    initialValues.preferred_pharmacy
  );
  const [insurance_primary_name, setInsurance_primary_name] = React.useState(
    initialValues.insurance_primary_name
  );
  const [insurance_primary_id, setInsurance_primary_id] = React.useState(
    initialValues.insurance_primary_id
  );
  const [insurance_primary_group, setInsurance_primary_group] = React.useState(
    initialValues.insurance_primary_group
  );
  const [insurance_primary_address, setInsurance_primary_address] =
    React.useState(initialValues.insurance_primary_address);
  const [insurance_primary_phone, setInsurance_primary_phone] = React.useState(
    initialValues.insurance_primary_phone
  );
  const [
    insurance_primary_insured_person,
    setInsurance_primary_insured_person,
  ] = React.useState(initialValues.insurance_primary_insured_person);
  const [
    insurance_primary_insured_person_relation,
    setInsurance_primary_insured_person_relation,
  ] = React.useState(initialValues.insurance_primary_insured_person_relation);
  const [insurance_secondary, setInsurance_secondary] = React.useState(
    initialValues.insurance_secondary
  );
  const [insurance_secondary_id, setInsurance_secondary_id] = React.useState(
    initialValues.insurance_secondary_id
  );
  const [insurance_secondary_group, setInsurance_secondary_group] =
    React.useState(initialValues.insurance_secondary_group);
  const [insurance_secondary_address, setInsurance_secondary_address] =
    React.useState(initialValues.insurance_secondary_address);
  const [insurance_secondary_phone, setInsurance_secondary_phone] =
    React.useState(initialValues.insurance_secondary_phone);
  const [primary_care_physician_name, setPrimary_care_physician_name] =
    React.useState(initialValues.primary_care_physician_name);
  const [referring_physician_name, setReferring_physician_name] =
    React.useState(initialValues.referring_physician_name);
  const [primary_care_physician_phone, setPrimary_care_physician_phone] =
    React.useState(initialValues.primary_care_physician_phone);
  const [referring_physician_phone, setReferring_physician_phone] =
    React.useState(initialValues.referring_physician_phone);
  const [emergency_contact_name, setEmergency_contact_name] = React.useState(
    initialValues.emergency_contact_name
  );
  const [emergency_contact_phone, setEmergency_contact_phone] = React.useState(
    initialValues.emergency_contact_phone
  );
  const [emergency_contact_relationship, setEmergency_contact_relationship] =
    React.useState(initialValues.emergency_contact_relationship);
  const [signature_page_1, setSignature_page_1] = React.useState(
    initialValues.signature_page_1
  );
  const [signature_page_1_date, setSignature_page_1_date] = React.useState(
    initialValues.signature_page_1_date
  );
  const [
    ph_briefly_describe_present_symptoms,
    setPh_briefly_describe_present_symptoms,
  ] = React.useState(initialValues.ph_briefly_describe_present_symptoms);
  const [
    ph_previous_treatment_for_problem,
    setPh_previous_treatment_for_problem,
  ] = React.useState(initialValues.ph_previous_treatment_for_problem);
  const [ph_current_medicine_1, setPh_current_medicine_1] = React.useState(
    initialValues.ph_current_medicine_1
  );
  const [ph_current_medicine_2, setPh_current_medicine_2] = React.useState(
    initialValues.ph_current_medicine_2
  );
  const [ph_current_medicine_3, setPh_current_medicine_3] = React.useState(
    initialValues.ph_current_medicine_3
  );
  const [ph_current_medicine_4, setPh_current_medicine_4] = React.useState(
    initialValues.ph_current_medicine_4
  );
  const [ph_current_medicine_5, setPh_current_medicine_5] = React.useState(
    initialValues.ph_current_medicine_5
  );
  const [ph_current_medicine_6, setPh_current_medicine_6] = React.useState(
    initialValues.ph_current_medicine_6
  );
  const [ph_current_medicine_7, setPh_current_medicine_7] = React.useState(
    initialValues.ph_current_medicine_7
  );
  const [ph_current_medicine_8, setPh_current_medicine_8] = React.useState(
    initialValues.ph_current_medicine_8
  );
  const [ph_current_medicine_9, setPh_current_medicine_9] = React.useState(
    initialValues.ph_current_medicine_9
  );
  const [ph_current_medicine_10, setPh_current_medicine_10] = React.useState(
    initialValues.ph_current_medicine_10
  );
  const [ph_current_medicine_11, setPh_current_medicine_11] = React.useState(
    initialValues.ph_current_medicine_11
  );
  const [ph_current_medicine_12, setPh_current_medicine_12] = React.useState(
    initialValues.ph_current_medicine_12
  );
  const [ph_current_medicine_13, setPh_current_medicine_13] = React.useState(
    initialValues.ph_current_medicine_13
  );
  const [ph_current_medicine_14, setPh_current_medicine_14] = React.useState(
    initialValues.ph_current_medicine_14
  );
  const [ph_current_medicine_15, setPh_current_medicine_15] = React.useState(
    initialValues.ph_current_medicine_15
  );
  const [ph_allergy_to_med, setPh_allergy_to_med] = React.useState(
    initialValues.ph_allergy_to_med
  );
  const [ph_allergy_to_med_list, setPh_allergy_to_med_list] = React.useState(
    initialValues.ph_allergy_to_med_list
  );
  const [ph_rh_history_osteoarthritis, setPh_rh_history_osteoarthritis] =
    React.useState(initialValues.ph_rh_history_osteoarthritis);
  const [ph_rh_history_gout, setPh_rh_history_gout] = React.useState(
    initialValues.ph_rh_history_gout
  );
  const [
    ph_rh_history_juvenile_arthritis,
    setPh_rh_history_juvenile_arthritis,
  ] = React.useState(initialValues.ph_rh_history_juvenile_arthritis);
  const [ph_rh_history_vasculitis, setPh_rh_history_vasculitis] =
    React.useState(initialValues.ph_rh_history_vasculitis);
  const [ph_rh_history_lupus, setPh_rh_history_lupus] = React.useState(
    initialValues.ph_rh_history_lupus
  );
  const [ph_rh_history_rheumatoid, setPh_rh_history_rheumatoid] =
    React.useState(initialValues.ph_rh_history_rheumatoid);
  const [
    ph_rh_history_spondyloarthropathy,
    setPh_rh_history_spondyloarthropathy,
  ] = React.useState(initialValues.ph_rh_history_spondyloarthropathy);
  const [ph_rh_history_osteoporosis, setPh_rh_history_osteoporosis] =
    React.useState(initialValues.ph_rh_history_osteoporosis);
  const [ph_past_medical_history, setPh_past_medical_history] = React.useState(
    initialValues.ph_past_medical_history
  );
  const [ph_past_surgery_history, setPh_past_surgery_history] = React.useState(
    initialValues.ph_past_surgery_history
  );
  const [ph_smoke, setPh_smoke] = React.useState(initialValues.ph_smoke);
  const [ph_alcohol, setPh_alcohol] = React.useState(initialValues.ph_alcohol);
  const [ph_drugs, setPh_drugs] = React.useState(initialValues.ph_drugs);
  const [ph_sleep, setPh_sleep] = React.useState(initialValues.ph_sleep);
  const [ph_exercise, setPh_exercise] = React.useState(
    initialValues.ph_exercise
  );
  const [ph_travel, setPh_travel] = React.useState(initialValues.ph_travel);
  const [ph_pregnant, setPh_pregnant] = React.useState(
    initialValues.ph_pregnant
  );
  const [ph_live_births, setPh_live_births] = React.useState(
    initialValues.ph_live_births
  );
  const [ph_complications, setPh_complications] = React.useState(
    initialValues.ph_complications
  );
  const [ph_symptoms, setPh_symptoms] = React.useState(
    initialValues.ph_symptoms
  );
  const [ad_people_in_household, setAd_people_in_household] = React.useState(
    initialValues.ad_people_in_household
  );
  const [ad_who_shopping, setAd_who_shopping] = React.useState(
    initialValues.ad_who_shopping
  );
  const [ad_housework, setAd_housework] = React.useState(
    initialValues.ad_housework
  );
  const [ad_hardest_thing, setAd_hardest_thing] = React.useState(
    initialValues.ad_hardest_thing
  );
  const [ad_ability_stand_up_chair, setAd_ability_stand_up_chair] =
    React.useState(initialValues.ad_ability_stand_up_chair);
  const [ad_ability_walk_outdoors_flat, setAd_ability_walk_outdoors_flat] =
    React.useState(initialValues.ad_ability_walk_outdoors_flat);
  const [ad_ability_get_on_toilet, setAd_ability_get_on_toilet] =
    React.useState(initialValues.ad_ability_get_on_toilet);
  const [ad_ability_reach_5_pound, setAd_ability_reach_5_pound] =
    React.useState(initialValues.ad_ability_reach_5_pound);
  const [ad_ability_car_doors, setAd_ability_car_doors] = React.useState(
    initialValues.ad_ability_car_doors
  );
  const [ad_ability_outside_work, setAd_ability_outside_work] = React.useState(
    initialValues.ad_ability_outside_work
  );
  const [ad_ability_wait_in_line, setAd_ability_wait_in_line] = React.useState(
    initialValues.ad_ability_wait_in_line
  );
  const [ad_ability_lift_heavy, setAd_ability_lift_heavy] = React.useState(
    initialValues.ad_ability_lift_heavy
  );
  const [ad_ability_lift_heavier, setAd_ability_lift_heavier] = React.useState(
    initialValues.ad_ability_lift_heavier
  );
  const [ad_ability_climb_2_flights, setAd_ability_climb_2_flights] =
    React.useState(initialValues.ad_ability_climb_2_flights);
  const [ad_aids_devices_activities, setAd_aids_devices_activities] =
    React.useState(initialValues.ad_aids_devices_activities);
  const [ad_categories_help, setAd_categories_help] = React.useState(
    initialValues.ad_categories_help
  );
  const [ad_daily_pain_scale, setAd_daily_pain_scale] = React.useState(
    initialValues.ad_daily_pain_scale
  );
  const [ad_how_well_doing_scale, setAd_how_well_doing_scale] = React.useState(
    initialValues.ad_how_well_doing_scale
  );
  const [pp_ack_name, setPp_ack_name] = React.useState(
    initialValues.pp_ack_name
  );
  const [pp_ack_auth_name_1, setPp_ack_auth_name_1] = React.useState(
    initialValues.pp_ack_auth_name_1
  );
  const [pp_ack_auth_name_2, setPp_ack_auth_name_2] = React.useState(
    initialValues.pp_ack_auth_name_2
  );
  const [pp_ack_auth_name_3, setPp_ack_auth_name_3] = React.useState(
    initialValues.pp_ack_auth_name_3
  );
  const [pp_ack_auth_relationship_1, setPp_ack_auth_relationship_1] =
    React.useState(initialValues.pp_ack_auth_relationship_1);
  const [pp_ack_auth_relationship_2, setPp_ack_auth_relationship_2] =
    React.useState(initialValues.pp_ack_auth_relationship_2);
  const [pp_ack_auth_relationship_3, setPp_ack_auth_relationship_3] =
    React.useState(initialValues.pp_ack_auth_relationship_3);
  const [pp_ack_decline_names, setPp_ack_decline_names] = React.useState(
    initialValues.pp_ack_decline_names
  );
  const [pp_signature_page_4, setPp_signature_page_4] = React.useState(
    initialValues.pp_signature_page_4
  );
  const [pp_signature_page_4_date, setPp_signature_page_4_date] =
    React.useState(initialValues.pp_signature_page_4_date);
  const [reciept_notice_signature_page_5, setReciept_notice_signature_page_5] =
    React.useState(initialValues.reciept_notice_signature_page_5);
  const [
    reciept_notice_signature_page_5_date,
    setReciept_notice_signature_page_5_date,
  ] = React.useState(initialValues.reciept_notice_signature_page_5_date);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = newPatientRecord
      ? { ...initialValues, ...newPatientRecord }
      : initialValues;
    setDate(cleanValues.date);
    setFirst_name(cleanValues.first_name);
    setLast_name(cleanValues.last_name);
    setDate_of_birth(cleanValues.date_of_birth);
    setGender(cleanValues.gender);
    setMarital_status(cleanValues.marital_status);
    setEthnicity(cleanValues.ethnicity);
    setRace(cleanValues.race);
    setPrimary_language(cleanValues.primary_language);
    setAddress(cleanValues.address);
    setCity(cleanValues.city);
    setState(cleanValues.state);
    setZip(cleanValues.zip);
    setHome_phone(cleanValues.home_phone);
    setWork_phone(cleanValues.work_phone);
    setMobile_phone(cleanValues.mobile_phone);
    setEmail(cleanValues.email);
    setSocial_security(cleanValues.social_security);
    setEmployer(cleanValues.employer);
    setEducation(cleanValues.education);
    setVeteran(cleanValues.veteran);
    setOccupatin(cleanValues.occupatin);
    setFull_time(cleanValues.full_time);
    setPreferred_pharmacy(cleanValues.preferred_pharmacy);
    setInsurance_primary_name(cleanValues.insurance_primary_name);
    setInsurance_primary_id(cleanValues.insurance_primary_id);
    setInsurance_primary_group(cleanValues.insurance_primary_group);
    setInsurance_primary_address(cleanValues.insurance_primary_address);
    setInsurance_primary_phone(cleanValues.insurance_primary_phone);
    setInsurance_primary_insured_person(
      cleanValues.insurance_primary_insured_person
    );
    setInsurance_primary_insured_person_relation(
      cleanValues.insurance_primary_insured_person_relation
    );
    setInsurance_secondary(cleanValues.insurance_secondary);
    setInsurance_secondary_id(cleanValues.insurance_secondary_id);
    setInsurance_secondary_group(cleanValues.insurance_secondary_group);
    setInsurance_secondary_address(cleanValues.insurance_secondary_address);
    setInsurance_secondary_phone(cleanValues.insurance_secondary_phone);
    setPrimary_care_physician_name(cleanValues.primary_care_physician_name);
    setReferring_physician_name(cleanValues.referring_physician_name);
    setPrimary_care_physician_phone(cleanValues.primary_care_physician_phone);
    setReferring_physician_phone(cleanValues.referring_physician_phone);
    setEmergency_contact_name(cleanValues.emergency_contact_name);
    setEmergency_contact_phone(cleanValues.emergency_contact_phone);
    setEmergency_contact_relationship(
      cleanValues.emergency_contact_relationship
    );
    setSignature_page_1(cleanValues.signature_page_1);
    setSignature_page_1_date(cleanValues.signature_page_1_date);
    setPh_briefly_describe_present_symptoms(
      cleanValues.ph_briefly_describe_present_symptoms
    );
    setPh_previous_treatment_for_problem(
      cleanValues.ph_previous_treatment_for_problem
    );
    setPh_current_medicine_1(cleanValues.ph_current_medicine_1);
    setPh_current_medicine_2(cleanValues.ph_current_medicine_2);
    setPh_current_medicine_3(cleanValues.ph_current_medicine_3);
    setPh_current_medicine_4(cleanValues.ph_current_medicine_4);
    setPh_current_medicine_5(cleanValues.ph_current_medicine_5);
    setPh_current_medicine_6(cleanValues.ph_current_medicine_6);
    setPh_current_medicine_7(cleanValues.ph_current_medicine_7);
    setPh_current_medicine_8(cleanValues.ph_current_medicine_8);
    setPh_current_medicine_9(cleanValues.ph_current_medicine_9);
    setPh_current_medicine_10(cleanValues.ph_current_medicine_10);
    setPh_current_medicine_11(cleanValues.ph_current_medicine_11);
    setPh_current_medicine_12(cleanValues.ph_current_medicine_12);
    setPh_current_medicine_13(cleanValues.ph_current_medicine_13);
    setPh_current_medicine_14(cleanValues.ph_current_medicine_14);
    setPh_current_medicine_15(cleanValues.ph_current_medicine_15);
    setPh_allergy_to_med(cleanValues.ph_allergy_to_med);
    setPh_allergy_to_med_list(cleanValues.ph_allergy_to_med_list);
    setPh_rh_history_osteoarthritis(cleanValues.ph_rh_history_osteoarthritis);
    setPh_rh_history_gout(cleanValues.ph_rh_history_gout);
    setPh_rh_history_juvenile_arthritis(
      cleanValues.ph_rh_history_juvenile_arthritis
    );
    setPh_rh_history_vasculitis(cleanValues.ph_rh_history_vasculitis);
    setPh_rh_history_lupus(cleanValues.ph_rh_history_lupus);
    setPh_rh_history_rheumatoid(cleanValues.ph_rh_history_rheumatoid);
    setPh_rh_history_spondyloarthropathy(
      cleanValues.ph_rh_history_spondyloarthropathy
    );
    setPh_rh_history_osteoporosis(cleanValues.ph_rh_history_osteoporosis);
    setPh_past_medical_history(cleanValues.ph_past_medical_history);
    setPh_past_surgery_history(cleanValues.ph_past_surgery_history);
    setPh_smoke(cleanValues.ph_smoke);
    setPh_alcohol(cleanValues.ph_alcohol);
    setPh_drugs(cleanValues.ph_drugs);
    setPh_sleep(cleanValues.ph_sleep);
    setPh_exercise(cleanValues.ph_exercise);
    setPh_travel(cleanValues.ph_travel);
    setPh_pregnant(cleanValues.ph_pregnant);
    setPh_live_births(cleanValues.ph_live_births);
    setPh_complications(cleanValues.ph_complications);
    setPh_symptoms(
      typeof cleanValues.ph_symptoms === "string" ||
        cleanValues.ph_symptoms === null
        ? cleanValues.ph_symptoms
        : JSON.stringify(cleanValues.ph_symptoms)
    );
    setAd_people_in_household(cleanValues.ad_people_in_household);
    setAd_who_shopping(cleanValues.ad_who_shopping);
    setAd_housework(cleanValues.ad_housework);
    setAd_hardest_thing(cleanValues.ad_hardest_thing);
    setAd_ability_stand_up_chair(cleanValues.ad_ability_stand_up_chair);
    setAd_ability_walk_outdoors_flat(cleanValues.ad_ability_walk_outdoors_flat);
    setAd_ability_get_on_toilet(cleanValues.ad_ability_get_on_toilet);
    setAd_ability_reach_5_pound(cleanValues.ad_ability_reach_5_pound);
    setAd_ability_car_doors(cleanValues.ad_ability_car_doors);
    setAd_ability_outside_work(cleanValues.ad_ability_outside_work);
    setAd_ability_wait_in_line(cleanValues.ad_ability_wait_in_line);
    setAd_ability_lift_heavy(cleanValues.ad_ability_lift_heavy);
    setAd_ability_lift_heavier(cleanValues.ad_ability_lift_heavier);
    setAd_ability_climb_2_flights(cleanValues.ad_ability_climb_2_flights);
    setAd_aids_devices_activities(cleanValues.ad_aids_devices_activities);
    setAd_categories_help(cleanValues.ad_categories_help);
    setAd_daily_pain_scale(cleanValues.ad_daily_pain_scale);
    setAd_how_well_doing_scale(cleanValues.ad_how_well_doing_scale);
    setPp_ack_name(cleanValues.pp_ack_name);
    setPp_ack_auth_name_1(cleanValues.pp_ack_auth_name_1);
    setPp_ack_auth_name_2(cleanValues.pp_ack_auth_name_2);
    setPp_ack_auth_name_3(cleanValues.pp_ack_auth_name_3);
    setPp_ack_auth_relationship_1(cleanValues.pp_ack_auth_relationship_1);
    setPp_ack_auth_relationship_2(cleanValues.pp_ack_auth_relationship_2);
    setPp_ack_auth_relationship_3(cleanValues.pp_ack_auth_relationship_3);
    setPp_ack_decline_names(cleanValues.pp_ack_decline_names);
    setPp_signature_page_4(cleanValues.pp_signature_page_4);
    setPp_signature_page_4_date(cleanValues.pp_signature_page_4_date);
    setReciept_notice_signature_page_5(
      cleanValues.reciept_notice_signature_page_5
    );
    setReciept_notice_signature_page_5_date(
      cleanValues.reciept_notice_signature_page_5_date
    );
    setErrors({});
  };
  const [newPatientRecord, setNewPatientRecord] =
    React.useState(newPatientModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getNewPatient.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getNewPatient
        : newPatientModelProp;
      setNewPatientRecord(record);
    };
    queryData();
  }, [idProp, newPatientModelProp]);
  React.useEffect(resetStateValues, [newPatientRecord]);
  const validations = {
    date: [],
    first_name: [],
    last_name: [],
    date_of_birth: [],
    gender: [],
    marital_status: [],
    ethnicity: [],
    race: [],
    primary_language: [],
    address: [],
    city: [],
    state: [],
    zip: [],
    home_phone: [{ type: "Phone" }],
    work_phone: [{ type: "Phone" }],
    mobile_phone: [{ type: "Phone" }],
    email: [],
    social_security: [],
    employer: [],
    education: [],
    veteran: [],
    occupatin: [],
    full_time: [],
    preferred_pharmacy: [],
    insurance_primary_name: [],
    insurance_primary_id: [],
    insurance_primary_group: [],
    insurance_primary_address: [],
    insurance_primary_phone: [{ type: "Phone" }],
    insurance_primary_insured_person: [],
    insurance_primary_insured_person_relation: [],
    insurance_secondary: [],
    insurance_secondary_id: [],
    insurance_secondary_group: [],
    insurance_secondary_address: [],
    insurance_secondary_phone: [{ type: "Phone" }],
    primary_care_physician_name: [],
    referring_physician_name: [],
    primary_care_physician_phone: [{ type: "Phone" }],
    referring_physician_phone: [{ type: "Phone" }],
    emergency_contact_name: [],
    emergency_contact_phone: [{ type: "Phone" }],
    emergency_contact_relationship: [],
    signature_page_1: [],
    signature_page_1_date: [],
    ph_briefly_describe_present_symptoms: [],
    ph_previous_treatment_for_problem: [],
    ph_current_medicine_1: [],
    ph_current_medicine_2: [],
    ph_current_medicine_3: [],
    ph_current_medicine_4: [],
    ph_current_medicine_5: [],
    ph_current_medicine_6: [],
    ph_current_medicine_7: [],
    ph_current_medicine_8: [],
    ph_current_medicine_9: [],
    ph_current_medicine_10: [],
    ph_current_medicine_11: [],
    ph_current_medicine_12: [],
    ph_current_medicine_13: [],
    ph_current_medicine_14: [],
    ph_current_medicine_15: [],
    ph_allergy_to_med: [],
    ph_allergy_to_med_list: [],
    ph_rh_history_osteoarthritis: [],
    ph_rh_history_gout: [],
    ph_rh_history_juvenile_arthritis: [],
    ph_rh_history_vasculitis: [],
    ph_rh_history_lupus: [],
    ph_rh_history_rheumatoid: [],
    ph_rh_history_spondyloarthropathy: [],
    ph_rh_history_osteoporosis: [],
    ph_past_medical_history: [],
    ph_past_surgery_history: [],
    ph_smoke: [],
    ph_alcohol: [],
    ph_drugs: [],
    ph_sleep: [],
    ph_exercise: [],
    ph_travel: [],
    ph_pregnant: [],
    ph_live_births: [],
    ph_complications: [],
    ph_symptoms: [{ type: "JSON" }],
    ad_people_in_household: [],
    ad_who_shopping: [],
    ad_housework: [],
    ad_hardest_thing: [],
    ad_ability_stand_up_chair: [],
    ad_ability_walk_outdoors_flat: [],
    ad_ability_get_on_toilet: [],
    ad_ability_reach_5_pound: [],
    ad_ability_car_doors: [],
    ad_ability_outside_work: [],
    ad_ability_wait_in_line: [],
    ad_ability_lift_heavy: [],
    ad_ability_lift_heavier: [],
    ad_ability_climb_2_flights: [],
    ad_aids_devices_activities: [],
    ad_categories_help: [],
    ad_daily_pain_scale: [],
    ad_how_well_doing_scale: [],
    pp_ack_name: [],
    pp_ack_auth_name_1: [],
    pp_ack_auth_name_2: [],
    pp_ack_auth_name_3: [],
    pp_ack_auth_relationship_1: [],
    pp_ack_auth_relationship_2: [],
    pp_ack_auth_relationship_3: [],
    pp_ack_decline_names: [],
    pp_signature_page_4: [],
    pp_signature_page_4_date: [],
    reciept_notice_signature_page_5: [],
    reciept_notice_signature_page_5_date: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          date: date ?? null,
          first_name: first_name ?? null,
          last_name: last_name ?? null,
          date_of_birth: date_of_birth ?? null,
          gender: gender ?? null,
          marital_status: marital_status ?? null,
          ethnicity: ethnicity ?? null,
          race: race ?? null,
          primary_language: primary_language ?? null,
          address: address ?? null,
          city: city ?? null,
          state: state ?? null,
          zip: zip ?? null,
          home_phone: home_phone ?? null,
          work_phone: work_phone ?? null,
          mobile_phone: mobile_phone ?? null,
          email: email ?? null,
          social_security: social_security ?? null,
          employer: employer ?? null,
          education: education ?? null,
          veteran: veteran ?? null,
          occupatin: occupatin ?? null,
          full_time: full_time ?? null,
          preferred_pharmacy: preferred_pharmacy ?? null,
          insurance_primary_name: insurance_primary_name ?? null,
          insurance_primary_id: insurance_primary_id ?? null,
          insurance_primary_group: insurance_primary_group ?? null,
          insurance_primary_address: insurance_primary_address ?? null,
          insurance_primary_phone: insurance_primary_phone ?? null,
          insurance_primary_insured_person:
            insurance_primary_insured_person ?? null,
          insurance_primary_insured_person_relation:
            insurance_primary_insured_person_relation ?? null,
          insurance_secondary: insurance_secondary ?? null,
          insurance_secondary_id: insurance_secondary_id ?? null,
          insurance_secondary_group: insurance_secondary_group ?? null,
          insurance_secondary_address: insurance_secondary_address ?? null,
          insurance_secondary_phone: insurance_secondary_phone ?? null,
          primary_care_physician_name: primary_care_physician_name ?? null,
          referring_physician_name: referring_physician_name ?? null,
          primary_care_physician_phone: primary_care_physician_phone ?? null,
          referring_physician_phone: referring_physician_phone ?? null,
          emergency_contact_name: emergency_contact_name ?? null,
          emergency_contact_phone: emergency_contact_phone ?? null,
          emergency_contact_relationship:
            emergency_contact_relationship ?? null,
          signature_page_1: signature_page_1 ?? null,
          signature_page_1_date: signature_page_1_date ?? null,
          ph_briefly_describe_present_symptoms:
            ph_briefly_describe_present_symptoms ?? null,
          ph_previous_treatment_for_problem:
            ph_previous_treatment_for_problem ?? null,
          ph_current_medicine_1: ph_current_medicine_1 ?? null,
          ph_current_medicine_2: ph_current_medicine_2 ?? null,
          ph_current_medicine_3: ph_current_medicine_3 ?? null,
          ph_current_medicine_4: ph_current_medicine_4 ?? null,
          ph_current_medicine_5: ph_current_medicine_5 ?? null,
          ph_current_medicine_6: ph_current_medicine_6 ?? null,
          ph_current_medicine_7: ph_current_medicine_7 ?? null,
          ph_current_medicine_8: ph_current_medicine_8 ?? null,
          ph_current_medicine_9: ph_current_medicine_9 ?? null,
          ph_current_medicine_10: ph_current_medicine_10 ?? null,
          ph_current_medicine_11: ph_current_medicine_11 ?? null,
          ph_current_medicine_12: ph_current_medicine_12 ?? null,
          ph_current_medicine_13: ph_current_medicine_13 ?? null,
          ph_current_medicine_14: ph_current_medicine_14 ?? null,
          ph_current_medicine_15: ph_current_medicine_15 ?? null,
          ph_allergy_to_med: ph_allergy_to_med ?? null,
          ph_allergy_to_med_list: ph_allergy_to_med_list ?? null,
          ph_rh_history_osteoarthritis: ph_rh_history_osteoarthritis ?? null,
          ph_rh_history_gout: ph_rh_history_gout ?? null,
          ph_rh_history_juvenile_arthritis:
            ph_rh_history_juvenile_arthritis ?? null,
          ph_rh_history_vasculitis: ph_rh_history_vasculitis ?? null,
          ph_rh_history_lupus: ph_rh_history_lupus ?? null,
          ph_rh_history_rheumatoid: ph_rh_history_rheumatoid ?? null,
          ph_rh_history_spondyloarthropathy:
            ph_rh_history_spondyloarthropathy ?? null,
          ph_rh_history_osteoporosis: ph_rh_history_osteoporosis ?? null,
          ph_past_medical_history: ph_past_medical_history ?? null,
          ph_past_surgery_history: ph_past_surgery_history ?? null,
          ph_smoke: ph_smoke ?? null,
          ph_alcohol: ph_alcohol ?? null,
          ph_drugs: ph_drugs ?? null,
          ph_sleep: ph_sleep ?? null,
          ph_exercise: ph_exercise ?? null,
          ph_travel: ph_travel ?? null,
          ph_pregnant: ph_pregnant ?? null,
          ph_live_births: ph_live_births ?? null,
          ph_complications: ph_complications ?? null,
          ph_symptoms: ph_symptoms ?? null,
          ad_people_in_household: ad_people_in_household ?? null,
          ad_who_shopping: ad_who_shopping ?? null,
          ad_housework: ad_housework ?? null,
          ad_hardest_thing: ad_hardest_thing ?? null,
          ad_ability_stand_up_chair: ad_ability_stand_up_chair ?? null,
          ad_ability_walk_outdoors_flat: ad_ability_walk_outdoors_flat ?? null,
          ad_ability_get_on_toilet: ad_ability_get_on_toilet ?? null,
          ad_ability_reach_5_pound: ad_ability_reach_5_pound ?? null,
          ad_ability_car_doors: ad_ability_car_doors ?? null,
          ad_ability_outside_work: ad_ability_outside_work ?? null,
          ad_ability_wait_in_line: ad_ability_wait_in_line ?? null,
          ad_ability_lift_heavy: ad_ability_lift_heavy ?? null,
          ad_ability_lift_heavier: ad_ability_lift_heavier ?? null,
          ad_ability_climb_2_flights: ad_ability_climb_2_flights ?? null,
          ad_aids_devices_activities: ad_aids_devices_activities ?? null,
          ad_categories_help: ad_categories_help ?? null,
          ad_daily_pain_scale: ad_daily_pain_scale ?? null,
          ad_how_well_doing_scale: ad_how_well_doing_scale ?? null,
          pp_ack_name: pp_ack_name ?? null,
          pp_ack_auth_name_1: pp_ack_auth_name_1 ?? null,
          pp_ack_auth_name_2: pp_ack_auth_name_2 ?? null,
          pp_ack_auth_name_3: pp_ack_auth_name_3 ?? null,
          pp_ack_auth_relationship_1: pp_ack_auth_relationship_1 ?? null,
          pp_ack_auth_relationship_2: pp_ack_auth_relationship_2 ?? null,
          pp_ack_auth_relationship_3: pp_ack_auth_relationship_3 ?? null,
          pp_ack_decline_names: pp_ack_decline_names ?? null,
          pp_signature_page_4: pp_signature_page_4 ?? null,
          pp_signature_page_4_date: pp_signature_page_4_date ?? null,
          reciept_notice_signature_page_5:
            reciept_notice_signature_page_5 ?? null,
          reciept_notice_signature_page_5_date:
            reciept_notice_signature_page_5_date ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateNewPatient.replaceAll("__typename", ""),
            variables: {
              input: {
                id: newPatientRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "NewPatientUpdateForm")}
      {...rest}
    >
      <TextField
        label="Date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date: value,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.date ?? value;
          }
          if (errors.date?.hasError) {
            runValidationTasks("date", value);
          }
          setDate(value);
        }}
        onBlur={() => runValidationTasks("date", date)}
        errorMessage={errors.date?.errorMessage}
        hasError={errors.date?.hasError}
        {...getOverrideProps(overrides, "date")}
      ></TextField>
      <TextField
        label="First name"
        isRequired={false}
        isReadOnly={false}
        value={first_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name: value,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.first_name ?? value;
          }
          if (errors.first_name?.hasError) {
            runValidationTasks("first_name", value);
          }
          setFirst_name(value);
        }}
        onBlur={() => runValidationTasks("first_name", first_name)}
        errorMessage={errors.first_name?.errorMessage}
        hasError={errors.first_name?.hasError}
        {...getOverrideProps(overrides, "first_name")}
      ></TextField>
      <TextField
        label="Last name"
        isRequired={false}
        isReadOnly={false}
        value={last_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name: value,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.last_name ?? value;
          }
          if (errors.last_name?.hasError) {
            runValidationTasks("last_name", value);
          }
          setLast_name(value);
        }}
        onBlur={() => runValidationTasks("last_name", last_name)}
        errorMessage={errors.last_name?.errorMessage}
        hasError={errors.last_name?.hasError}
        {...getOverrideProps(overrides, "last_name")}
      ></TextField>
      <TextField
        label="Date of birth"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={date_of_birth}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth: value,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.date_of_birth ?? value;
          }
          if (errors.date_of_birth?.hasError) {
            runValidationTasks("date_of_birth", value);
          }
          setDate_of_birth(value);
        }}
        onBlur={() => runValidationTasks("date_of_birth", date_of_birth)}
        errorMessage={errors.date_of_birth?.errorMessage}
        hasError={errors.date_of_birth?.hasError}
        {...getOverrideProps(overrides, "date_of_birth")}
      ></TextField>
      <TextField
        label="Gender"
        isRequired={false}
        isReadOnly={false}
        value={gender}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender: value,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.gender ?? value;
          }
          if (errors.gender?.hasError) {
            runValidationTasks("gender", value);
          }
          setGender(value);
        }}
        onBlur={() => runValidationTasks("gender", gender)}
        errorMessage={errors.gender?.errorMessage}
        hasError={errors.gender?.hasError}
        {...getOverrideProps(overrides, "gender")}
      ></TextField>
      <TextField
        label="Marital status"
        isRequired={false}
        isReadOnly={false}
        value={marital_status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status: value,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.marital_status ?? value;
          }
          if (errors.marital_status?.hasError) {
            runValidationTasks("marital_status", value);
          }
          setMarital_status(value);
        }}
        onBlur={() => runValidationTasks("marital_status", marital_status)}
        errorMessage={errors.marital_status?.errorMessage}
        hasError={errors.marital_status?.hasError}
        {...getOverrideProps(overrides, "marital_status")}
      ></TextField>
      <TextField
        label="Ethnicity"
        isRequired={false}
        isReadOnly={false}
        value={ethnicity}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity: value,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.ethnicity ?? value;
          }
          if (errors.ethnicity?.hasError) {
            runValidationTasks("ethnicity", value);
          }
          setEthnicity(value);
        }}
        onBlur={() => runValidationTasks("ethnicity", ethnicity)}
        errorMessage={errors.ethnicity?.errorMessage}
        hasError={errors.ethnicity?.hasError}
        {...getOverrideProps(overrides, "ethnicity")}
      ></TextField>
      <TextField
        label="Race"
        isRequired={false}
        isReadOnly={false}
        value={race}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race: value,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.race ?? value;
          }
          if (errors.race?.hasError) {
            runValidationTasks("race", value);
          }
          setRace(value);
        }}
        onBlur={() => runValidationTasks("race", race)}
        errorMessage={errors.race?.errorMessage}
        hasError={errors.race?.hasError}
        {...getOverrideProps(overrides, "race")}
      ></TextField>
      <TextField
        label="Primary language"
        isRequired={false}
        isReadOnly={false}
        value={primary_language}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language: value,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.primary_language ?? value;
          }
          if (errors.primary_language?.hasError) {
            runValidationTasks("primary_language", value);
          }
          setPrimary_language(value);
        }}
        onBlur={() => runValidationTasks("primary_language", primary_language)}
        errorMessage={errors.primary_language?.errorMessage}
        hasError={errors.primary_language?.hasError}
        {...getOverrideProps(overrides, "primary_language")}
      ></TextField>
      <TextField
        label="Address"
        isRequired={false}
        isReadOnly={false}
        value={address}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address: value,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.address ?? value;
          }
          if (errors.address?.hasError) {
            runValidationTasks("address", value);
          }
          setAddress(value);
        }}
        onBlur={() => runValidationTasks("address", address)}
        errorMessage={errors.address?.errorMessage}
        hasError={errors.address?.hasError}
        {...getOverrideProps(overrides, "address")}
      ></TextField>
      <TextField
        label="City"
        isRequired={false}
        isReadOnly={false}
        value={city}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city: value,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.city ?? value;
          }
          if (errors.city?.hasError) {
            runValidationTasks("city", value);
          }
          setCity(value);
        }}
        onBlur={() => runValidationTasks("city", city)}
        errorMessage={errors.city?.errorMessage}
        hasError={errors.city?.hasError}
        {...getOverrideProps(overrides, "city")}
      ></TextField>
      <TextField
        label="State"
        isRequired={false}
        isReadOnly={false}
        value={state}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state: value,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.state ?? value;
          }
          if (errors.state?.hasError) {
            runValidationTasks("state", value);
          }
          setState(value);
        }}
        onBlur={() => runValidationTasks("state", state)}
        errorMessage={errors.state?.errorMessage}
        hasError={errors.state?.hasError}
        {...getOverrideProps(overrides, "state")}
      ></TextField>
      <TextField
        label="Zip"
        isRequired={false}
        isReadOnly={false}
        value={zip}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip: value,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.zip ?? value;
          }
          if (errors.zip?.hasError) {
            runValidationTasks("zip", value);
          }
          setZip(value);
        }}
        onBlur={() => runValidationTasks("zip", zip)}
        errorMessage={errors.zip?.errorMessage}
        hasError={errors.zip?.hasError}
        {...getOverrideProps(overrides, "zip")}
      ></TextField>
      <TextField
        label="Home phone"
        isRequired={false}
        isReadOnly={false}
        type="tel"
        value={home_phone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone: value,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.home_phone ?? value;
          }
          if (errors.home_phone?.hasError) {
            runValidationTasks("home_phone", value);
          }
          setHome_phone(value);
        }}
        onBlur={() => runValidationTasks("home_phone", home_phone)}
        errorMessage={errors.home_phone?.errorMessage}
        hasError={errors.home_phone?.hasError}
        {...getOverrideProps(overrides, "home_phone")}
      ></TextField>
      <TextField
        label="Work phone"
        isRequired={false}
        isReadOnly={false}
        type="tel"
        value={work_phone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone: value,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.work_phone ?? value;
          }
          if (errors.work_phone?.hasError) {
            runValidationTasks("work_phone", value);
          }
          setWork_phone(value);
        }}
        onBlur={() => runValidationTasks("work_phone", work_phone)}
        errorMessage={errors.work_phone?.errorMessage}
        hasError={errors.work_phone?.hasError}
        {...getOverrideProps(overrides, "work_phone")}
      ></TextField>
      <TextField
        label="Mobile phone"
        isRequired={false}
        isReadOnly={false}
        type="tel"
        value={mobile_phone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone: value,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.mobile_phone ?? value;
          }
          if (errors.mobile_phone?.hasError) {
            runValidationTasks("mobile_phone", value);
          }
          setMobile_phone(value);
        }}
        onBlur={() => runValidationTasks("mobile_phone", mobile_phone)}
        errorMessage={errors.mobile_phone?.errorMessage}
        hasError={errors.mobile_phone?.hasError}
        {...getOverrideProps(overrides, "mobile_phone")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={false}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email: value,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Social security"
        isRequired={false}
        isReadOnly={false}
        value={social_security}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security: value,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.social_security ?? value;
          }
          if (errors.social_security?.hasError) {
            runValidationTasks("social_security", value);
          }
          setSocial_security(value);
        }}
        onBlur={() => runValidationTasks("social_security", social_security)}
        errorMessage={errors.social_security?.errorMessage}
        hasError={errors.social_security?.hasError}
        {...getOverrideProps(overrides, "social_security")}
      ></TextField>
      <TextField
        label="Employer"
        isRequired={false}
        isReadOnly={false}
        value={employer}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer: value,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.employer ?? value;
          }
          if (errors.employer?.hasError) {
            runValidationTasks("employer", value);
          }
          setEmployer(value);
        }}
        onBlur={() => runValidationTasks("employer", employer)}
        errorMessage={errors.employer?.errorMessage}
        hasError={errors.employer?.hasError}
        {...getOverrideProps(overrides, "employer")}
      ></TextField>
      <TextField
        label="Education"
        isRequired={false}
        isReadOnly={false}
        value={education}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education: value,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.education ?? value;
          }
          if (errors.education?.hasError) {
            runValidationTasks("education", value);
          }
          setEducation(value);
        }}
        onBlur={() => runValidationTasks("education", education)}
        errorMessage={errors.education?.errorMessage}
        hasError={errors.education?.hasError}
        {...getOverrideProps(overrides, "education")}
      ></TextField>
      <SwitchField
        label="Veteran"
        defaultChecked={false}
        isDisabled={false}
        isChecked={veteran}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran: value,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.veteran ?? value;
          }
          if (errors.veteran?.hasError) {
            runValidationTasks("veteran", value);
          }
          setVeteran(value);
        }}
        onBlur={() => runValidationTasks("veteran", veteran)}
        errorMessage={errors.veteran?.errorMessage}
        hasError={errors.veteran?.hasError}
        {...getOverrideProps(overrides, "veteran")}
      ></SwitchField>
      <TextField
        label="Occupatin"
        isRequired={false}
        isReadOnly={false}
        value={occupatin}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin: value,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.occupatin ?? value;
          }
          if (errors.occupatin?.hasError) {
            runValidationTasks("occupatin", value);
          }
          setOccupatin(value);
        }}
        onBlur={() => runValidationTasks("occupatin", occupatin)}
        errorMessage={errors.occupatin?.errorMessage}
        hasError={errors.occupatin?.hasError}
        {...getOverrideProps(overrides, "occupatin")}
      ></TextField>
      <SwitchField
        label="Full time"
        defaultChecked={false}
        isDisabled={false}
        isChecked={full_time}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time: value,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.full_time ?? value;
          }
          if (errors.full_time?.hasError) {
            runValidationTasks("full_time", value);
          }
          setFull_time(value);
        }}
        onBlur={() => runValidationTasks("full_time", full_time)}
        errorMessage={errors.full_time?.errorMessage}
        hasError={errors.full_time?.hasError}
        {...getOverrideProps(overrides, "full_time")}
      ></SwitchField>
      <TextField
        label="Preferred pharmacy"
        isRequired={false}
        isReadOnly={false}
        value={preferred_pharmacy}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy: value,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.preferred_pharmacy ?? value;
          }
          if (errors.preferred_pharmacy?.hasError) {
            runValidationTasks("preferred_pharmacy", value);
          }
          setPreferred_pharmacy(value);
        }}
        onBlur={() =>
          runValidationTasks("preferred_pharmacy", preferred_pharmacy)
        }
        errorMessage={errors.preferred_pharmacy?.errorMessage}
        hasError={errors.preferred_pharmacy?.hasError}
        {...getOverrideProps(overrides, "preferred_pharmacy")}
      ></TextField>
      <TextField
        label="Insurance primary name"
        isRequired={false}
        isReadOnly={false}
        value={insurance_primary_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name: value,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.insurance_primary_name ?? value;
          }
          if (errors.insurance_primary_name?.hasError) {
            runValidationTasks("insurance_primary_name", value);
          }
          setInsurance_primary_name(value);
        }}
        onBlur={() =>
          runValidationTasks("insurance_primary_name", insurance_primary_name)
        }
        errorMessage={errors.insurance_primary_name?.errorMessage}
        hasError={errors.insurance_primary_name?.hasError}
        {...getOverrideProps(overrides, "insurance_primary_name")}
      ></TextField>
      <TextField
        label="Insurance primary id"
        isRequired={false}
        isReadOnly={false}
        value={insurance_primary_id}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id: value,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.insurance_primary_id ?? value;
          }
          if (errors.insurance_primary_id?.hasError) {
            runValidationTasks("insurance_primary_id", value);
          }
          setInsurance_primary_id(value);
        }}
        onBlur={() =>
          runValidationTasks("insurance_primary_id", insurance_primary_id)
        }
        errorMessage={errors.insurance_primary_id?.errorMessage}
        hasError={errors.insurance_primary_id?.hasError}
        {...getOverrideProps(overrides, "insurance_primary_id")}
      ></TextField>
      <TextField
        label="Insurance primary group"
        isRequired={false}
        isReadOnly={false}
        value={insurance_primary_group}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group: value,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.insurance_primary_group ?? value;
          }
          if (errors.insurance_primary_group?.hasError) {
            runValidationTasks("insurance_primary_group", value);
          }
          setInsurance_primary_group(value);
        }}
        onBlur={() =>
          runValidationTasks("insurance_primary_group", insurance_primary_group)
        }
        errorMessage={errors.insurance_primary_group?.errorMessage}
        hasError={errors.insurance_primary_group?.hasError}
        {...getOverrideProps(overrides, "insurance_primary_group")}
      ></TextField>
      <TextField
        label="Insurance primary address"
        isRequired={false}
        isReadOnly={false}
        value={insurance_primary_address}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address: value,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.insurance_primary_address ?? value;
          }
          if (errors.insurance_primary_address?.hasError) {
            runValidationTasks("insurance_primary_address", value);
          }
          setInsurance_primary_address(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "insurance_primary_address",
            insurance_primary_address
          )
        }
        errorMessage={errors.insurance_primary_address?.errorMessage}
        hasError={errors.insurance_primary_address?.hasError}
        {...getOverrideProps(overrides, "insurance_primary_address")}
      ></TextField>
      <TextField
        label="Insurance primary phone"
        isRequired={false}
        isReadOnly={false}
        type="tel"
        value={insurance_primary_phone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone: value,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.insurance_primary_phone ?? value;
          }
          if (errors.insurance_primary_phone?.hasError) {
            runValidationTasks("insurance_primary_phone", value);
          }
          setInsurance_primary_phone(value);
        }}
        onBlur={() =>
          runValidationTasks("insurance_primary_phone", insurance_primary_phone)
        }
        errorMessage={errors.insurance_primary_phone?.errorMessage}
        hasError={errors.insurance_primary_phone?.hasError}
        {...getOverrideProps(overrides, "insurance_primary_phone")}
      ></TextField>
      <TextField
        label="Insurance primary insured person"
        isRequired={false}
        isReadOnly={false}
        value={insurance_primary_insured_person}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person: value,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.insurance_primary_insured_person ?? value;
          }
          if (errors.insurance_primary_insured_person?.hasError) {
            runValidationTasks("insurance_primary_insured_person", value);
          }
          setInsurance_primary_insured_person(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "insurance_primary_insured_person",
            insurance_primary_insured_person
          )
        }
        errorMessage={errors.insurance_primary_insured_person?.errorMessage}
        hasError={errors.insurance_primary_insured_person?.hasError}
        {...getOverrideProps(overrides, "insurance_primary_insured_person")}
      ></TextField>
      <TextField
        label="Insurance primary insured person relation"
        isRequired={false}
        isReadOnly={false}
        value={insurance_primary_insured_person_relation}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation: value,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.insurance_primary_insured_person_relation ?? value;
          }
          if (errors.insurance_primary_insured_person_relation?.hasError) {
            runValidationTasks(
              "insurance_primary_insured_person_relation",
              value
            );
          }
          setInsurance_primary_insured_person_relation(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "insurance_primary_insured_person_relation",
            insurance_primary_insured_person_relation
          )
        }
        errorMessage={
          errors.insurance_primary_insured_person_relation?.errorMessage
        }
        hasError={errors.insurance_primary_insured_person_relation?.hasError}
        {...getOverrideProps(
          overrides,
          "insurance_primary_insured_person_relation"
        )}
      ></TextField>
      <TextField
        label="Insurance secondary"
        isRequired={false}
        isReadOnly={false}
        value={insurance_secondary}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary: value,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.insurance_secondary ?? value;
          }
          if (errors.insurance_secondary?.hasError) {
            runValidationTasks("insurance_secondary", value);
          }
          setInsurance_secondary(value);
        }}
        onBlur={() =>
          runValidationTasks("insurance_secondary", insurance_secondary)
        }
        errorMessage={errors.insurance_secondary?.errorMessage}
        hasError={errors.insurance_secondary?.hasError}
        {...getOverrideProps(overrides, "insurance_secondary")}
      ></TextField>
      <TextField
        label="Insurance secondary id"
        isRequired={false}
        isReadOnly={false}
        value={insurance_secondary_id}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id: value,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.insurance_secondary_id ?? value;
          }
          if (errors.insurance_secondary_id?.hasError) {
            runValidationTasks("insurance_secondary_id", value);
          }
          setInsurance_secondary_id(value);
        }}
        onBlur={() =>
          runValidationTasks("insurance_secondary_id", insurance_secondary_id)
        }
        errorMessage={errors.insurance_secondary_id?.errorMessage}
        hasError={errors.insurance_secondary_id?.hasError}
        {...getOverrideProps(overrides, "insurance_secondary_id")}
      ></TextField>
      <TextField
        label="Insurance secondary group"
        isRequired={false}
        isReadOnly={false}
        value={insurance_secondary_group}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group: value,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.insurance_secondary_group ?? value;
          }
          if (errors.insurance_secondary_group?.hasError) {
            runValidationTasks("insurance_secondary_group", value);
          }
          setInsurance_secondary_group(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "insurance_secondary_group",
            insurance_secondary_group
          )
        }
        errorMessage={errors.insurance_secondary_group?.errorMessage}
        hasError={errors.insurance_secondary_group?.hasError}
        {...getOverrideProps(overrides, "insurance_secondary_group")}
      ></TextField>
      <TextField
        label="Insurance secondary address"
        isRequired={false}
        isReadOnly={false}
        value={insurance_secondary_address}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address: value,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.insurance_secondary_address ?? value;
          }
          if (errors.insurance_secondary_address?.hasError) {
            runValidationTasks("insurance_secondary_address", value);
          }
          setInsurance_secondary_address(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "insurance_secondary_address",
            insurance_secondary_address
          )
        }
        errorMessage={errors.insurance_secondary_address?.errorMessage}
        hasError={errors.insurance_secondary_address?.hasError}
        {...getOverrideProps(overrides, "insurance_secondary_address")}
      ></TextField>
      <TextField
        label="Insurance secondary phone"
        isRequired={false}
        isReadOnly={false}
        type="tel"
        value={insurance_secondary_phone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone: value,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.insurance_secondary_phone ?? value;
          }
          if (errors.insurance_secondary_phone?.hasError) {
            runValidationTasks("insurance_secondary_phone", value);
          }
          setInsurance_secondary_phone(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "insurance_secondary_phone",
            insurance_secondary_phone
          )
        }
        errorMessage={errors.insurance_secondary_phone?.errorMessage}
        hasError={errors.insurance_secondary_phone?.hasError}
        {...getOverrideProps(overrides, "insurance_secondary_phone")}
      ></TextField>
      <TextField
        label="Primary care physician name"
        isRequired={false}
        isReadOnly={false}
        value={primary_care_physician_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name: value,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.primary_care_physician_name ?? value;
          }
          if (errors.primary_care_physician_name?.hasError) {
            runValidationTasks("primary_care_physician_name", value);
          }
          setPrimary_care_physician_name(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "primary_care_physician_name",
            primary_care_physician_name
          )
        }
        errorMessage={errors.primary_care_physician_name?.errorMessage}
        hasError={errors.primary_care_physician_name?.hasError}
        {...getOverrideProps(overrides, "primary_care_physician_name")}
      ></TextField>
      <TextField
        label="Referring physician name"
        isRequired={false}
        isReadOnly={false}
        value={referring_physician_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name: value,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.referring_physician_name ?? value;
          }
          if (errors.referring_physician_name?.hasError) {
            runValidationTasks("referring_physician_name", value);
          }
          setReferring_physician_name(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "referring_physician_name",
            referring_physician_name
          )
        }
        errorMessage={errors.referring_physician_name?.errorMessage}
        hasError={errors.referring_physician_name?.hasError}
        {...getOverrideProps(overrides, "referring_physician_name")}
      ></TextField>
      <TextField
        label="Primary care physician phone"
        isRequired={false}
        isReadOnly={false}
        type="tel"
        value={primary_care_physician_phone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone: value,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.primary_care_physician_phone ?? value;
          }
          if (errors.primary_care_physician_phone?.hasError) {
            runValidationTasks("primary_care_physician_phone", value);
          }
          setPrimary_care_physician_phone(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "primary_care_physician_phone",
            primary_care_physician_phone
          )
        }
        errorMessage={errors.primary_care_physician_phone?.errorMessage}
        hasError={errors.primary_care_physician_phone?.hasError}
        {...getOverrideProps(overrides, "primary_care_physician_phone")}
      ></TextField>
      <TextField
        label="Referring physician phone"
        isRequired={false}
        isReadOnly={false}
        type="tel"
        value={referring_physician_phone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone: value,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.referring_physician_phone ?? value;
          }
          if (errors.referring_physician_phone?.hasError) {
            runValidationTasks("referring_physician_phone", value);
          }
          setReferring_physician_phone(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "referring_physician_phone",
            referring_physician_phone
          )
        }
        errorMessage={errors.referring_physician_phone?.errorMessage}
        hasError={errors.referring_physician_phone?.hasError}
        {...getOverrideProps(overrides, "referring_physician_phone")}
      ></TextField>
      <TextField
        label="Emergency contact name"
        isRequired={false}
        isReadOnly={false}
        value={emergency_contact_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name: value,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.emergency_contact_name ?? value;
          }
          if (errors.emergency_contact_name?.hasError) {
            runValidationTasks("emergency_contact_name", value);
          }
          setEmergency_contact_name(value);
        }}
        onBlur={() =>
          runValidationTasks("emergency_contact_name", emergency_contact_name)
        }
        errorMessage={errors.emergency_contact_name?.errorMessage}
        hasError={errors.emergency_contact_name?.hasError}
        {...getOverrideProps(overrides, "emergency_contact_name")}
      ></TextField>
      <TextField
        label="Emergency contact phone"
        isRequired={false}
        isReadOnly={false}
        type="tel"
        value={emergency_contact_phone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone: value,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.emergency_contact_phone ?? value;
          }
          if (errors.emergency_contact_phone?.hasError) {
            runValidationTasks("emergency_contact_phone", value);
          }
          setEmergency_contact_phone(value);
        }}
        onBlur={() =>
          runValidationTasks("emergency_contact_phone", emergency_contact_phone)
        }
        errorMessage={errors.emergency_contact_phone?.errorMessage}
        hasError={errors.emergency_contact_phone?.hasError}
        {...getOverrideProps(overrides, "emergency_contact_phone")}
      ></TextField>
      <TextField
        label="Emergency contact relationship"
        isRequired={false}
        isReadOnly={false}
        value={emergency_contact_relationship}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship: value,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.emergency_contact_relationship ?? value;
          }
          if (errors.emergency_contact_relationship?.hasError) {
            runValidationTasks("emergency_contact_relationship", value);
          }
          setEmergency_contact_relationship(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "emergency_contact_relationship",
            emergency_contact_relationship
          )
        }
        errorMessage={errors.emergency_contact_relationship?.errorMessage}
        hasError={errors.emergency_contact_relationship?.hasError}
        {...getOverrideProps(overrides, "emergency_contact_relationship")}
      ></TextField>
      <TextField
        label="Signature page 1"
        isRequired={false}
        isReadOnly={false}
        value={signature_page_1}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1: value,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.signature_page_1 ?? value;
          }
          if (errors.signature_page_1?.hasError) {
            runValidationTasks("signature_page_1", value);
          }
          setSignature_page_1(value);
        }}
        onBlur={() => runValidationTasks("signature_page_1", signature_page_1)}
        errorMessage={errors.signature_page_1?.errorMessage}
        hasError={errors.signature_page_1?.hasError}
        {...getOverrideProps(overrides, "signature_page_1")}
      ></TextField>
      <TextField
        label="Signature page 1 date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={signature_page_1_date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date: value,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.signature_page_1_date ?? value;
          }
          if (errors.signature_page_1_date?.hasError) {
            runValidationTasks("signature_page_1_date", value);
          }
          setSignature_page_1_date(value);
        }}
        onBlur={() =>
          runValidationTasks("signature_page_1_date", signature_page_1_date)
        }
        errorMessage={errors.signature_page_1_date?.errorMessage}
        hasError={errors.signature_page_1_date?.hasError}
        {...getOverrideProps(overrides, "signature_page_1_date")}
      ></TextField>
      <TextField
        label="Ph briefly describe present symptoms"
        isRequired={false}
        isReadOnly={false}
        value={ph_briefly_describe_present_symptoms}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms: value,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.ph_briefly_describe_present_symptoms ?? value;
          }
          if (errors.ph_briefly_describe_present_symptoms?.hasError) {
            runValidationTasks("ph_briefly_describe_present_symptoms", value);
          }
          setPh_briefly_describe_present_symptoms(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "ph_briefly_describe_present_symptoms",
            ph_briefly_describe_present_symptoms
          )
        }
        errorMessage={errors.ph_briefly_describe_present_symptoms?.errorMessage}
        hasError={errors.ph_briefly_describe_present_symptoms?.hasError}
        {...getOverrideProps(overrides, "ph_briefly_describe_present_symptoms")}
      ></TextField>
      <TextField
        label="Ph previous treatment for problem"
        isRequired={false}
        isReadOnly={false}
        value={ph_previous_treatment_for_problem}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem: value,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.ph_previous_treatment_for_problem ?? value;
          }
          if (errors.ph_previous_treatment_for_problem?.hasError) {
            runValidationTasks("ph_previous_treatment_for_problem", value);
          }
          setPh_previous_treatment_for_problem(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "ph_previous_treatment_for_problem",
            ph_previous_treatment_for_problem
          )
        }
        errorMessage={errors.ph_previous_treatment_for_problem?.errorMessage}
        hasError={errors.ph_previous_treatment_for_problem?.hasError}
        {...getOverrideProps(overrides, "ph_previous_treatment_for_problem")}
      ></TextField>
      <TextField
        label="Ph current medicine 1"
        isRequired={false}
        isReadOnly={false}
        value={ph_current_medicine_1}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1: value,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.ph_current_medicine_1 ?? value;
          }
          if (errors.ph_current_medicine_1?.hasError) {
            runValidationTasks("ph_current_medicine_1", value);
          }
          setPh_current_medicine_1(value);
        }}
        onBlur={() =>
          runValidationTasks("ph_current_medicine_1", ph_current_medicine_1)
        }
        errorMessage={errors.ph_current_medicine_1?.errorMessage}
        hasError={errors.ph_current_medicine_1?.hasError}
        {...getOverrideProps(overrides, "ph_current_medicine_1")}
      ></TextField>
      <TextField
        label="Ph current medicine 2"
        isRequired={false}
        isReadOnly={false}
        value={ph_current_medicine_2}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2: value,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.ph_current_medicine_2 ?? value;
          }
          if (errors.ph_current_medicine_2?.hasError) {
            runValidationTasks("ph_current_medicine_2", value);
          }
          setPh_current_medicine_2(value);
        }}
        onBlur={() =>
          runValidationTasks("ph_current_medicine_2", ph_current_medicine_2)
        }
        errorMessage={errors.ph_current_medicine_2?.errorMessage}
        hasError={errors.ph_current_medicine_2?.hasError}
        {...getOverrideProps(overrides, "ph_current_medicine_2")}
      ></TextField>
      <TextField
        label="Ph current medicine 3"
        isRequired={false}
        isReadOnly={false}
        value={ph_current_medicine_3}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3: value,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.ph_current_medicine_3 ?? value;
          }
          if (errors.ph_current_medicine_3?.hasError) {
            runValidationTasks("ph_current_medicine_3", value);
          }
          setPh_current_medicine_3(value);
        }}
        onBlur={() =>
          runValidationTasks("ph_current_medicine_3", ph_current_medicine_3)
        }
        errorMessage={errors.ph_current_medicine_3?.errorMessage}
        hasError={errors.ph_current_medicine_3?.hasError}
        {...getOverrideProps(overrides, "ph_current_medicine_3")}
      ></TextField>
      <TextField
        label="Ph current medicine 4"
        isRequired={false}
        isReadOnly={false}
        value={ph_current_medicine_4}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4: value,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.ph_current_medicine_4 ?? value;
          }
          if (errors.ph_current_medicine_4?.hasError) {
            runValidationTasks("ph_current_medicine_4", value);
          }
          setPh_current_medicine_4(value);
        }}
        onBlur={() =>
          runValidationTasks("ph_current_medicine_4", ph_current_medicine_4)
        }
        errorMessage={errors.ph_current_medicine_4?.errorMessage}
        hasError={errors.ph_current_medicine_4?.hasError}
        {...getOverrideProps(overrides, "ph_current_medicine_4")}
      ></TextField>
      <TextField
        label="Ph current medicine 5"
        isRequired={false}
        isReadOnly={false}
        value={ph_current_medicine_5}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5: value,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.ph_current_medicine_5 ?? value;
          }
          if (errors.ph_current_medicine_5?.hasError) {
            runValidationTasks("ph_current_medicine_5", value);
          }
          setPh_current_medicine_5(value);
        }}
        onBlur={() =>
          runValidationTasks("ph_current_medicine_5", ph_current_medicine_5)
        }
        errorMessage={errors.ph_current_medicine_5?.errorMessage}
        hasError={errors.ph_current_medicine_5?.hasError}
        {...getOverrideProps(overrides, "ph_current_medicine_5")}
      ></TextField>
      <TextField
        label="Ph current medicine 6"
        isRequired={false}
        isReadOnly={false}
        value={ph_current_medicine_6}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6: value,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.ph_current_medicine_6 ?? value;
          }
          if (errors.ph_current_medicine_6?.hasError) {
            runValidationTasks("ph_current_medicine_6", value);
          }
          setPh_current_medicine_6(value);
        }}
        onBlur={() =>
          runValidationTasks("ph_current_medicine_6", ph_current_medicine_6)
        }
        errorMessage={errors.ph_current_medicine_6?.errorMessage}
        hasError={errors.ph_current_medicine_6?.hasError}
        {...getOverrideProps(overrides, "ph_current_medicine_6")}
      ></TextField>
      <TextField
        label="Ph current medicine 7"
        isRequired={false}
        isReadOnly={false}
        value={ph_current_medicine_7}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7: value,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.ph_current_medicine_7 ?? value;
          }
          if (errors.ph_current_medicine_7?.hasError) {
            runValidationTasks("ph_current_medicine_7", value);
          }
          setPh_current_medicine_7(value);
        }}
        onBlur={() =>
          runValidationTasks("ph_current_medicine_7", ph_current_medicine_7)
        }
        errorMessage={errors.ph_current_medicine_7?.errorMessage}
        hasError={errors.ph_current_medicine_7?.hasError}
        {...getOverrideProps(overrides, "ph_current_medicine_7")}
      ></TextField>
      <TextField
        label="Ph current medicine 8"
        isRequired={false}
        isReadOnly={false}
        value={ph_current_medicine_8}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8: value,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.ph_current_medicine_8 ?? value;
          }
          if (errors.ph_current_medicine_8?.hasError) {
            runValidationTasks("ph_current_medicine_8", value);
          }
          setPh_current_medicine_8(value);
        }}
        onBlur={() =>
          runValidationTasks("ph_current_medicine_8", ph_current_medicine_8)
        }
        errorMessage={errors.ph_current_medicine_8?.errorMessage}
        hasError={errors.ph_current_medicine_8?.hasError}
        {...getOverrideProps(overrides, "ph_current_medicine_8")}
      ></TextField>
      <TextField
        label="Ph current medicine 9"
        isRequired={false}
        isReadOnly={false}
        value={ph_current_medicine_9}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9: value,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.ph_current_medicine_9 ?? value;
          }
          if (errors.ph_current_medicine_9?.hasError) {
            runValidationTasks("ph_current_medicine_9", value);
          }
          setPh_current_medicine_9(value);
        }}
        onBlur={() =>
          runValidationTasks("ph_current_medicine_9", ph_current_medicine_9)
        }
        errorMessage={errors.ph_current_medicine_9?.errorMessage}
        hasError={errors.ph_current_medicine_9?.hasError}
        {...getOverrideProps(overrides, "ph_current_medicine_9")}
      ></TextField>
      <TextField
        label="Ph current medicine 10"
        isRequired={false}
        isReadOnly={false}
        value={ph_current_medicine_10}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10: value,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.ph_current_medicine_10 ?? value;
          }
          if (errors.ph_current_medicine_10?.hasError) {
            runValidationTasks("ph_current_medicine_10", value);
          }
          setPh_current_medicine_10(value);
        }}
        onBlur={() =>
          runValidationTasks("ph_current_medicine_10", ph_current_medicine_10)
        }
        errorMessage={errors.ph_current_medicine_10?.errorMessage}
        hasError={errors.ph_current_medicine_10?.hasError}
        {...getOverrideProps(overrides, "ph_current_medicine_10")}
      ></TextField>
      <TextField
        label="Ph current medicine 11"
        isRequired={false}
        isReadOnly={false}
        value={ph_current_medicine_11}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11: value,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.ph_current_medicine_11 ?? value;
          }
          if (errors.ph_current_medicine_11?.hasError) {
            runValidationTasks("ph_current_medicine_11", value);
          }
          setPh_current_medicine_11(value);
        }}
        onBlur={() =>
          runValidationTasks("ph_current_medicine_11", ph_current_medicine_11)
        }
        errorMessage={errors.ph_current_medicine_11?.errorMessage}
        hasError={errors.ph_current_medicine_11?.hasError}
        {...getOverrideProps(overrides, "ph_current_medicine_11")}
      ></TextField>
      <TextField
        label="Ph current medicine 12"
        isRequired={false}
        isReadOnly={false}
        value={ph_current_medicine_12}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12: value,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.ph_current_medicine_12 ?? value;
          }
          if (errors.ph_current_medicine_12?.hasError) {
            runValidationTasks("ph_current_medicine_12", value);
          }
          setPh_current_medicine_12(value);
        }}
        onBlur={() =>
          runValidationTasks("ph_current_medicine_12", ph_current_medicine_12)
        }
        errorMessage={errors.ph_current_medicine_12?.errorMessage}
        hasError={errors.ph_current_medicine_12?.hasError}
        {...getOverrideProps(overrides, "ph_current_medicine_12")}
      ></TextField>
      <TextField
        label="Ph current medicine 13"
        isRequired={false}
        isReadOnly={false}
        value={ph_current_medicine_13}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13: value,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.ph_current_medicine_13 ?? value;
          }
          if (errors.ph_current_medicine_13?.hasError) {
            runValidationTasks("ph_current_medicine_13", value);
          }
          setPh_current_medicine_13(value);
        }}
        onBlur={() =>
          runValidationTasks("ph_current_medicine_13", ph_current_medicine_13)
        }
        errorMessage={errors.ph_current_medicine_13?.errorMessage}
        hasError={errors.ph_current_medicine_13?.hasError}
        {...getOverrideProps(overrides, "ph_current_medicine_13")}
      ></TextField>
      <TextField
        label="Ph current medicine 14"
        isRequired={false}
        isReadOnly={false}
        value={ph_current_medicine_14}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14: value,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.ph_current_medicine_14 ?? value;
          }
          if (errors.ph_current_medicine_14?.hasError) {
            runValidationTasks("ph_current_medicine_14", value);
          }
          setPh_current_medicine_14(value);
        }}
        onBlur={() =>
          runValidationTasks("ph_current_medicine_14", ph_current_medicine_14)
        }
        errorMessage={errors.ph_current_medicine_14?.errorMessage}
        hasError={errors.ph_current_medicine_14?.hasError}
        {...getOverrideProps(overrides, "ph_current_medicine_14")}
      ></TextField>
      <TextField
        label="Ph current medicine 15"
        isRequired={false}
        isReadOnly={false}
        value={ph_current_medicine_15}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15: value,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.ph_current_medicine_15 ?? value;
          }
          if (errors.ph_current_medicine_15?.hasError) {
            runValidationTasks("ph_current_medicine_15", value);
          }
          setPh_current_medicine_15(value);
        }}
        onBlur={() =>
          runValidationTasks("ph_current_medicine_15", ph_current_medicine_15)
        }
        errorMessage={errors.ph_current_medicine_15?.errorMessage}
        hasError={errors.ph_current_medicine_15?.hasError}
        {...getOverrideProps(overrides, "ph_current_medicine_15")}
      ></TextField>
      <SwitchField
        label="Ph allergy to med"
        defaultChecked={false}
        isDisabled={false}
        isChecked={ph_allergy_to_med}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med: value,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.ph_allergy_to_med ?? value;
          }
          if (errors.ph_allergy_to_med?.hasError) {
            runValidationTasks("ph_allergy_to_med", value);
          }
          setPh_allergy_to_med(value);
        }}
        onBlur={() =>
          runValidationTasks("ph_allergy_to_med", ph_allergy_to_med)
        }
        errorMessage={errors.ph_allergy_to_med?.errorMessage}
        hasError={errors.ph_allergy_to_med?.hasError}
        {...getOverrideProps(overrides, "ph_allergy_to_med")}
      ></SwitchField>
      <TextField
        label="Ph allergy to med list"
        isRequired={false}
        isReadOnly={false}
        value={ph_allergy_to_med_list}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list: value,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.ph_allergy_to_med_list ?? value;
          }
          if (errors.ph_allergy_to_med_list?.hasError) {
            runValidationTasks("ph_allergy_to_med_list", value);
          }
          setPh_allergy_to_med_list(value);
        }}
        onBlur={() =>
          runValidationTasks("ph_allergy_to_med_list", ph_allergy_to_med_list)
        }
        errorMessage={errors.ph_allergy_to_med_list?.errorMessage}
        hasError={errors.ph_allergy_to_med_list?.hasError}
        {...getOverrideProps(overrides, "ph_allergy_to_med_list")}
      ></TextField>
      <TextField
        label="Ph rh history osteoarthritis"
        isRequired={false}
        isReadOnly={false}
        value={ph_rh_history_osteoarthritis}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis: value,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.ph_rh_history_osteoarthritis ?? value;
          }
          if (errors.ph_rh_history_osteoarthritis?.hasError) {
            runValidationTasks("ph_rh_history_osteoarthritis", value);
          }
          setPh_rh_history_osteoarthritis(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "ph_rh_history_osteoarthritis",
            ph_rh_history_osteoarthritis
          )
        }
        errorMessage={errors.ph_rh_history_osteoarthritis?.errorMessage}
        hasError={errors.ph_rh_history_osteoarthritis?.hasError}
        {...getOverrideProps(overrides, "ph_rh_history_osteoarthritis")}
      ></TextField>
      <TextField
        label="Ph rh history gout"
        isRequired={false}
        isReadOnly={false}
        value={ph_rh_history_gout}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout: value,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.ph_rh_history_gout ?? value;
          }
          if (errors.ph_rh_history_gout?.hasError) {
            runValidationTasks("ph_rh_history_gout", value);
          }
          setPh_rh_history_gout(value);
        }}
        onBlur={() =>
          runValidationTasks("ph_rh_history_gout", ph_rh_history_gout)
        }
        errorMessage={errors.ph_rh_history_gout?.errorMessage}
        hasError={errors.ph_rh_history_gout?.hasError}
        {...getOverrideProps(overrides, "ph_rh_history_gout")}
      ></TextField>
      <TextField
        label="Ph rh history juvenile arthritis"
        isRequired={false}
        isReadOnly={false}
        value={ph_rh_history_juvenile_arthritis}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis: value,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.ph_rh_history_juvenile_arthritis ?? value;
          }
          if (errors.ph_rh_history_juvenile_arthritis?.hasError) {
            runValidationTasks("ph_rh_history_juvenile_arthritis", value);
          }
          setPh_rh_history_juvenile_arthritis(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "ph_rh_history_juvenile_arthritis",
            ph_rh_history_juvenile_arthritis
          )
        }
        errorMessage={errors.ph_rh_history_juvenile_arthritis?.errorMessage}
        hasError={errors.ph_rh_history_juvenile_arthritis?.hasError}
        {...getOverrideProps(overrides, "ph_rh_history_juvenile_arthritis")}
      ></TextField>
      <TextField
        label="Ph rh history vasculitis"
        isRequired={false}
        isReadOnly={false}
        value={ph_rh_history_vasculitis}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis: value,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.ph_rh_history_vasculitis ?? value;
          }
          if (errors.ph_rh_history_vasculitis?.hasError) {
            runValidationTasks("ph_rh_history_vasculitis", value);
          }
          setPh_rh_history_vasculitis(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "ph_rh_history_vasculitis",
            ph_rh_history_vasculitis
          )
        }
        errorMessage={errors.ph_rh_history_vasculitis?.errorMessage}
        hasError={errors.ph_rh_history_vasculitis?.hasError}
        {...getOverrideProps(overrides, "ph_rh_history_vasculitis")}
      ></TextField>
      <TextField
        label="Ph rh history lupus"
        isRequired={false}
        isReadOnly={false}
        value={ph_rh_history_lupus}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus: value,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.ph_rh_history_lupus ?? value;
          }
          if (errors.ph_rh_history_lupus?.hasError) {
            runValidationTasks("ph_rh_history_lupus", value);
          }
          setPh_rh_history_lupus(value);
        }}
        onBlur={() =>
          runValidationTasks("ph_rh_history_lupus", ph_rh_history_lupus)
        }
        errorMessage={errors.ph_rh_history_lupus?.errorMessage}
        hasError={errors.ph_rh_history_lupus?.hasError}
        {...getOverrideProps(overrides, "ph_rh_history_lupus")}
      ></TextField>
      <TextField
        label="Ph rh history rheumatoid"
        isRequired={false}
        isReadOnly={false}
        value={ph_rh_history_rheumatoid}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid: value,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.ph_rh_history_rheumatoid ?? value;
          }
          if (errors.ph_rh_history_rheumatoid?.hasError) {
            runValidationTasks("ph_rh_history_rheumatoid", value);
          }
          setPh_rh_history_rheumatoid(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "ph_rh_history_rheumatoid",
            ph_rh_history_rheumatoid
          )
        }
        errorMessage={errors.ph_rh_history_rheumatoid?.errorMessage}
        hasError={errors.ph_rh_history_rheumatoid?.hasError}
        {...getOverrideProps(overrides, "ph_rh_history_rheumatoid")}
      ></TextField>
      <TextField
        label="Ph rh history spondyloarthropathy"
        isRequired={false}
        isReadOnly={false}
        value={ph_rh_history_spondyloarthropathy}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy: value,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.ph_rh_history_spondyloarthropathy ?? value;
          }
          if (errors.ph_rh_history_spondyloarthropathy?.hasError) {
            runValidationTasks("ph_rh_history_spondyloarthropathy", value);
          }
          setPh_rh_history_spondyloarthropathy(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "ph_rh_history_spondyloarthropathy",
            ph_rh_history_spondyloarthropathy
          )
        }
        errorMessage={errors.ph_rh_history_spondyloarthropathy?.errorMessage}
        hasError={errors.ph_rh_history_spondyloarthropathy?.hasError}
        {...getOverrideProps(overrides, "ph_rh_history_spondyloarthropathy")}
      ></TextField>
      <TextField
        label="Ph rh history osteoporosis"
        isRequired={false}
        isReadOnly={false}
        value={ph_rh_history_osteoporosis}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis: value,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.ph_rh_history_osteoporosis ?? value;
          }
          if (errors.ph_rh_history_osteoporosis?.hasError) {
            runValidationTasks("ph_rh_history_osteoporosis", value);
          }
          setPh_rh_history_osteoporosis(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "ph_rh_history_osteoporosis",
            ph_rh_history_osteoporosis
          )
        }
        errorMessage={errors.ph_rh_history_osteoporosis?.errorMessage}
        hasError={errors.ph_rh_history_osteoporosis?.hasError}
        {...getOverrideProps(overrides, "ph_rh_history_osteoporosis")}
      ></TextField>
      <TextField
        label="Ph past medical history"
        isRequired={false}
        isReadOnly={false}
        value={ph_past_medical_history}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history: value,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.ph_past_medical_history ?? value;
          }
          if (errors.ph_past_medical_history?.hasError) {
            runValidationTasks("ph_past_medical_history", value);
          }
          setPh_past_medical_history(value);
        }}
        onBlur={() =>
          runValidationTasks("ph_past_medical_history", ph_past_medical_history)
        }
        errorMessage={errors.ph_past_medical_history?.errorMessage}
        hasError={errors.ph_past_medical_history?.hasError}
        {...getOverrideProps(overrides, "ph_past_medical_history")}
      ></TextField>
      <TextField
        label="Ph past surgery history"
        isRequired={false}
        isReadOnly={false}
        value={ph_past_surgery_history}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history: value,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.ph_past_surgery_history ?? value;
          }
          if (errors.ph_past_surgery_history?.hasError) {
            runValidationTasks("ph_past_surgery_history", value);
          }
          setPh_past_surgery_history(value);
        }}
        onBlur={() =>
          runValidationTasks("ph_past_surgery_history", ph_past_surgery_history)
        }
        errorMessage={errors.ph_past_surgery_history?.errorMessage}
        hasError={errors.ph_past_surgery_history?.hasError}
        {...getOverrideProps(overrides, "ph_past_surgery_history")}
      ></TextField>
      <TextField
        label="Ph smoke"
        isRequired={false}
        isReadOnly={false}
        value={ph_smoke}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke: value,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.ph_smoke ?? value;
          }
          if (errors.ph_smoke?.hasError) {
            runValidationTasks("ph_smoke", value);
          }
          setPh_smoke(value);
        }}
        onBlur={() => runValidationTasks("ph_smoke", ph_smoke)}
        errorMessage={errors.ph_smoke?.errorMessage}
        hasError={errors.ph_smoke?.hasError}
        {...getOverrideProps(overrides, "ph_smoke")}
      ></TextField>
      <TextField
        label="Ph alcohol"
        isRequired={false}
        isReadOnly={false}
        value={ph_alcohol}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol: value,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.ph_alcohol ?? value;
          }
          if (errors.ph_alcohol?.hasError) {
            runValidationTasks("ph_alcohol", value);
          }
          setPh_alcohol(value);
        }}
        onBlur={() => runValidationTasks("ph_alcohol", ph_alcohol)}
        errorMessage={errors.ph_alcohol?.errorMessage}
        hasError={errors.ph_alcohol?.hasError}
        {...getOverrideProps(overrides, "ph_alcohol")}
      ></TextField>
      <TextField
        label="Ph drugs"
        isRequired={false}
        isReadOnly={false}
        value={ph_drugs}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs: value,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.ph_drugs ?? value;
          }
          if (errors.ph_drugs?.hasError) {
            runValidationTasks("ph_drugs", value);
          }
          setPh_drugs(value);
        }}
        onBlur={() => runValidationTasks("ph_drugs", ph_drugs)}
        errorMessage={errors.ph_drugs?.errorMessage}
        hasError={errors.ph_drugs?.hasError}
        {...getOverrideProps(overrides, "ph_drugs")}
      ></TextField>
      <TextField
        label="Ph sleep"
        isRequired={false}
        isReadOnly={false}
        value={ph_sleep}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep: value,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.ph_sleep ?? value;
          }
          if (errors.ph_sleep?.hasError) {
            runValidationTasks("ph_sleep", value);
          }
          setPh_sleep(value);
        }}
        onBlur={() => runValidationTasks("ph_sleep", ph_sleep)}
        errorMessage={errors.ph_sleep?.errorMessage}
        hasError={errors.ph_sleep?.hasError}
        {...getOverrideProps(overrides, "ph_sleep")}
      ></TextField>
      <TextField
        label="Ph exercise"
        isRequired={false}
        isReadOnly={false}
        value={ph_exercise}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise: value,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.ph_exercise ?? value;
          }
          if (errors.ph_exercise?.hasError) {
            runValidationTasks("ph_exercise", value);
          }
          setPh_exercise(value);
        }}
        onBlur={() => runValidationTasks("ph_exercise", ph_exercise)}
        errorMessage={errors.ph_exercise?.errorMessage}
        hasError={errors.ph_exercise?.hasError}
        {...getOverrideProps(overrides, "ph_exercise")}
      ></TextField>
      <TextField
        label="Ph travel"
        isRequired={false}
        isReadOnly={false}
        value={ph_travel}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel: value,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.ph_travel ?? value;
          }
          if (errors.ph_travel?.hasError) {
            runValidationTasks("ph_travel", value);
          }
          setPh_travel(value);
        }}
        onBlur={() => runValidationTasks("ph_travel", ph_travel)}
        errorMessage={errors.ph_travel?.errorMessage}
        hasError={errors.ph_travel?.hasError}
        {...getOverrideProps(overrides, "ph_travel")}
      ></TextField>
      <TextField
        label="Ph pregnant"
        isRequired={false}
        isReadOnly={false}
        value={ph_pregnant}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant: value,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.ph_pregnant ?? value;
          }
          if (errors.ph_pregnant?.hasError) {
            runValidationTasks("ph_pregnant", value);
          }
          setPh_pregnant(value);
        }}
        onBlur={() => runValidationTasks("ph_pregnant", ph_pregnant)}
        errorMessage={errors.ph_pregnant?.errorMessage}
        hasError={errors.ph_pregnant?.hasError}
        {...getOverrideProps(overrides, "ph_pregnant")}
      ></TextField>
      <TextField
        label="Ph live births"
        isRequired={false}
        isReadOnly={false}
        value={ph_live_births}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births: value,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.ph_live_births ?? value;
          }
          if (errors.ph_live_births?.hasError) {
            runValidationTasks("ph_live_births", value);
          }
          setPh_live_births(value);
        }}
        onBlur={() => runValidationTasks("ph_live_births", ph_live_births)}
        errorMessage={errors.ph_live_births?.errorMessage}
        hasError={errors.ph_live_births?.hasError}
        {...getOverrideProps(overrides, "ph_live_births")}
      ></TextField>
      <TextField
        label="Ph complications"
        isRequired={false}
        isReadOnly={false}
        value={ph_complications}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications: value,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.ph_complications ?? value;
          }
          if (errors.ph_complications?.hasError) {
            runValidationTasks("ph_complications", value);
          }
          setPh_complications(value);
        }}
        onBlur={() => runValidationTasks("ph_complications", ph_complications)}
        errorMessage={errors.ph_complications?.errorMessage}
        hasError={errors.ph_complications?.hasError}
        {...getOverrideProps(overrides, "ph_complications")}
      ></TextField>
      <TextAreaField
        label="Ph symptoms"
        isRequired={false}
        isReadOnly={false}
        value={ph_symptoms}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms: value,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.ph_symptoms ?? value;
          }
          if (errors.ph_symptoms?.hasError) {
            runValidationTasks("ph_symptoms", value);
          }
          setPh_symptoms(value);
        }}
        onBlur={() => runValidationTasks("ph_symptoms", ph_symptoms)}
        errorMessage={errors.ph_symptoms?.errorMessage}
        hasError={errors.ph_symptoms?.hasError}
        {...getOverrideProps(overrides, "ph_symptoms")}
      ></TextAreaField>
      <TextField
        label="Ad people in household"
        isRequired={false}
        isReadOnly={false}
        value={ad_people_in_household}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household: value,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.ad_people_in_household ?? value;
          }
          if (errors.ad_people_in_household?.hasError) {
            runValidationTasks("ad_people_in_household", value);
          }
          setAd_people_in_household(value);
        }}
        onBlur={() =>
          runValidationTasks("ad_people_in_household", ad_people_in_household)
        }
        errorMessage={errors.ad_people_in_household?.errorMessage}
        hasError={errors.ad_people_in_household?.hasError}
        {...getOverrideProps(overrides, "ad_people_in_household")}
      ></TextField>
      <TextField
        label="Ad who shopping"
        isRequired={false}
        isReadOnly={false}
        value={ad_who_shopping}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping: value,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.ad_who_shopping ?? value;
          }
          if (errors.ad_who_shopping?.hasError) {
            runValidationTasks("ad_who_shopping", value);
          }
          setAd_who_shopping(value);
        }}
        onBlur={() => runValidationTasks("ad_who_shopping", ad_who_shopping)}
        errorMessage={errors.ad_who_shopping?.errorMessage}
        hasError={errors.ad_who_shopping?.hasError}
        {...getOverrideProps(overrides, "ad_who_shopping")}
      ></TextField>
      <TextField
        label="Ad housework"
        isRequired={false}
        isReadOnly={false}
        value={ad_housework}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework: value,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.ad_housework ?? value;
          }
          if (errors.ad_housework?.hasError) {
            runValidationTasks("ad_housework", value);
          }
          setAd_housework(value);
        }}
        onBlur={() => runValidationTasks("ad_housework", ad_housework)}
        errorMessage={errors.ad_housework?.errorMessage}
        hasError={errors.ad_housework?.hasError}
        {...getOverrideProps(overrides, "ad_housework")}
      ></TextField>
      <TextField
        label="Ad hardest thing"
        isRequired={false}
        isReadOnly={false}
        value={ad_hardest_thing}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing: value,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.ad_hardest_thing ?? value;
          }
          if (errors.ad_hardest_thing?.hasError) {
            runValidationTasks("ad_hardest_thing", value);
          }
          setAd_hardest_thing(value);
        }}
        onBlur={() => runValidationTasks("ad_hardest_thing", ad_hardest_thing)}
        errorMessage={errors.ad_hardest_thing?.errorMessage}
        hasError={errors.ad_hardest_thing?.hasError}
        {...getOverrideProps(overrides, "ad_hardest_thing")}
      ></TextField>
      <TextField
        label="Ad ability stand up chair"
        isRequired={false}
        isReadOnly={false}
        value={ad_ability_stand_up_chair}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair: value,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.ad_ability_stand_up_chair ?? value;
          }
          if (errors.ad_ability_stand_up_chair?.hasError) {
            runValidationTasks("ad_ability_stand_up_chair", value);
          }
          setAd_ability_stand_up_chair(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "ad_ability_stand_up_chair",
            ad_ability_stand_up_chair
          )
        }
        errorMessage={errors.ad_ability_stand_up_chair?.errorMessage}
        hasError={errors.ad_ability_stand_up_chair?.hasError}
        {...getOverrideProps(overrides, "ad_ability_stand_up_chair")}
      ></TextField>
      <TextField
        label="Ad ability walk outdoors flat"
        isRequired={false}
        isReadOnly={false}
        value={ad_ability_walk_outdoors_flat}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat: value,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.ad_ability_walk_outdoors_flat ?? value;
          }
          if (errors.ad_ability_walk_outdoors_flat?.hasError) {
            runValidationTasks("ad_ability_walk_outdoors_flat", value);
          }
          setAd_ability_walk_outdoors_flat(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "ad_ability_walk_outdoors_flat",
            ad_ability_walk_outdoors_flat
          )
        }
        errorMessage={errors.ad_ability_walk_outdoors_flat?.errorMessage}
        hasError={errors.ad_ability_walk_outdoors_flat?.hasError}
        {...getOverrideProps(overrides, "ad_ability_walk_outdoors_flat")}
      ></TextField>
      <TextField
        label="Ad ability get on toilet"
        isRequired={false}
        isReadOnly={false}
        value={ad_ability_get_on_toilet}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet: value,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.ad_ability_get_on_toilet ?? value;
          }
          if (errors.ad_ability_get_on_toilet?.hasError) {
            runValidationTasks("ad_ability_get_on_toilet", value);
          }
          setAd_ability_get_on_toilet(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "ad_ability_get_on_toilet",
            ad_ability_get_on_toilet
          )
        }
        errorMessage={errors.ad_ability_get_on_toilet?.errorMessage}
        hasError={errors.ad_ability_get_on_toilet?.hasError}
        {...getOverrideProps(overrides, "ad_ability_get_on_toilet")}
      ></TextField>
      <TextField
        label="Ad ability reach 5 pound"
        isRequired={false}
        isReadOnly={false}
        value={ad_ability_reach_5_pound}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound: value,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.ad_ability_reach_5_pound ?? value;
          }
          if (errors.ad_ability_reach_5_pound?.hasError) {
            runValidationTasks("ad_ability_reach_5_pound", value);
          }
          setAd_ability_reach_5_pound(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "ad_ability_reach_5_pound",
            ad_ability_reach_5_pound
          )
        }
        errorMessage={errors.ad_ability_reach_5_pound?.errorMessage}
        hasError={errors.ad_ability_reach_5_pound?.hasError}
        {...getOverrideProps(overrides, "ad_ability_reach_5_pound")}
      ></TextField>
      <TextField
        label="Ad ability car doors"
        isRequired={false}
        isReadOnly={false}
        value={ad_ability_car_doors}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors: value,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.ad_ability_car_doors ?? value;
          }
          if (errors.ad_ability_car_doors?.hasError) {
            runValidationTasks("ad_ability_car_doors", value);
          }
          setAd_ability_car_doors(value);
        }}
        onBlur={() =>
          runValidationTasks("ad_ability_car_doors", ad_ability_car_doors)
        }
        errorMessage={errors.ad_ability_car_doors?.errorMessage}
        hasError={errors.ad_ability_car_doors?.hasError}
        {...getOverrideProps(overrides, "ad_ability_car_doors")}
      ></TextField>
      <TextField
        label="Ad ability outside work"
        isRequired={false}
        isReadOnly={false}
        value={ad_ability_outside_work}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work: value,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.ad_ability_outside_work ?? value;
          }
          if (errors.ad_ability_outside_work?.hasError) {
            runValidationTasks("ad_ability_outside_work", value);
          }
          setAd_ability_outside_work(value);
        }}
        onBlur={() =>
          runValidationTasks("ad_ability_outside_work", ad_ability_outside_work)
        }
        errorMessage={errors.ad_ability_outside_work?.errorMessage}
        hasError={errors.ad_ability_outside_work?.hasError}
        {...getOverrideProps(overrides, "ad_ability_outside_work")}
      ></TextField>
      <TextField
        label="Ad ability wait in line"
        isRequired={false}
        isReadOnly={false}
        value={ad_ability_wait_in_line}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line: value,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.ad_ability_wait_in_line ?? value;
          }
          if (errors.ad_ability_wait_in_line?.hasError) {
            runValidationTasks("ad_ability_wait_in_line", value);
          }
          setAd_ability_wait_in_line(value);
        }}
        onBlur={() =>
          runValidationTasks("ad_ability_wait_in_line", ad_ability_wait_in_line)
        }
        errorMessage={errors.ad_ability_wait_in_line?.errorMessage}
        hasError={errors.ad_ability_wait_in_line?.hasError}
        {...getOverrideProps(overrides, "ad_ability_wait_in_line")}
      ></TextField>
      <TextField
        label="Ad ability lift heavy"
        isRequired={false}
        isReadOnly={false}
        value={ad_ability_lift_heavy}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy: value,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.ad_ability_lift_heavy ?? value;
          }
          if (errors.ad_ability_lift_heavy?.hasError) {
            runValidationTasks("ad_ability_lift_heavy", value);
          }
          setAd_ability_lift_heavy(value);
        }}
        onBlur={() =>
          runValidationTasks("ad_ability_lift_heavy", ad_ability_lift_heavy)
        }
        errorMessage={errors.ad_ability_lift_heavy?.errorMessage}
        hasError={errors.ad_ability_lift_heavy?.hasError}
        {...getOverrideProps(overrides, "ad_ability_lift_heavy")}
      ></TextField>
      <TextField
        label="Ad ability lift heavier"
        isRequired={false}
        isReadOnly={false}
        value={ad_ability_lift_heavier}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier: value,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.ad_ability_lift_heavier ?? value;
          }
          if (errors.ad_ability_lift_heavier?.hasError) {
            runValidationTasks("ad_ability_lift_heavier", value);
          }
          setAd_ability_lift_heavier(value);
        }}
        onBlur={() =>
          runValidationTasks("ad_ability_lift_heavier", ad_ability_lift_heavier)
        }
        errorMessage={errors.ad_ability_lift_heavier?.errorMessage}
        hasError={errors.ad_ability_lift_heavier?.hasError}
        {...getOverrideProps(overrides, "ad_ability_lift_heavier")}
      ></TextField>
      <TextField
        label="Ad ability climb 2 flights"
        isRequired={false}
        isReadOnly={false}
        value={ad_ability_climb_2_flights}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights: value,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.ad_ability_climb_2_flights ?? value;
          }
          if (errors.ad_ability_climb_2_flights?.hasError) {
            runValidationTasks("ad_ability_climb_2_flights", value);
          }
          setAd_ability_climb_2_flights(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "ad_ability_climb_2_flights",
            ad_ability_climb_2_flights
          )
        }
        errorMessage={errors.ad_ability_climb_2_flights?.errorMessage}
        hasError={errors.ad_ability_climb_2_flights?.hasError}
        {...getOverrideProps(overrides, "ad_ability_climb_2_flights")}
      ></TextField>
      <TextField
        label="Ad aids devices activities"
        isRequired={false}
        isReadOnly={false}
        value={ad_aids_devices_activities}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities: value,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.ad_aids_devices_activities ?? value;
          }
          if (errors.ad_aids_devices_activities?.hasError) {
            runValidationTasks("ad_aids_devices_activities", value);
          }
          setAd_aids_devices_activities(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "ad_aids_devices_activities",
            ad_aids_devices_activities
          )
        }
        errorMessage={errors.ad_aids_devices_activities?.errorMessage}
        hasError={errors.ad_aids_devices_activities?.hasError}
        {...getOverrideProps(overrides, "ad_aids_devices_activities")}
      ></TextField>
      <TextField
        label="Ad categories help"
        isRequired={false}
        isReadOnly={false}
        value={ad_categories_help}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help: value,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.ad_categories_help ?? value;
          }
          if (errors.ad_categories_help?.hasError) {
            runValidationTasks("ad_categories_help", value);
          }
          setAd_categories_help(value);
        }}
        onBlur={() =>
          runValidationTasks("ad_categories_help", ad_categories_help)
        }
        errorMessage={errors.ad_categories_help?.errorMessage}
        hasError={errors.ad_categories_help?.hasError}
        {...getOverrideProps(overrides, "ad_categories_help")}
      ></TextField>
      <TextField
        label="Ad daily pain scale"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={ad_daily_pain_scale}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale: value,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.ad_daily_pain_scale ?? value;
          }
          if (errors.ad_daily_pain_scale?.hasError) {
            runValidationTasks("ad_daily_pain_scale", value);
          }
          setAd_daily_pain_scale(value);
        }}
        onBlur={() =>
          runValidationTasks("ad_daily_pain_scale", ad_daily_pain_scale)
        }
        errorMessage={errors.ad_daily_pain_scale?.errorMessage}
        hasError={errors.ad_daily_pain_scale?.hasError}
        {...getOverrideProps(overrides, "ad_daily_pain_scale")}
      ></TextField>
      <TextField
        label="Ad how well doing scale"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={ad_how_well_doing_scale}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale: value,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.ad_how_well_doing_scale ?? value;
          }
          if (errors.ad_how_well_doing_scale?.hasError) {
            runValidationTasks("ad_how_well_doing_scale", value);
          }
          setAd_how_well_doing_scale(value);
        }}
        onBlur={() =>
          runValidationTasks("ad_how_well_doing_scale", ad_how_well_doing_scale)
        }
        errorMessage={errors.ad_how_well_doing_scale?.errorMessage}
        hasError={errors.ad_how_well_doing_scale?.hasError}
        {...getOverrideProps(overrides, "ad_how_well_doing_scale")}
      ></TextField>
      <TextField
        label="Pp ack name"
        isRequired={false}
        isReadOnly={false}
        value={pp_ack_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name: value,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.pp_ack_name ?? value;
          }
          if (errors.pp_ack_name?.hasError) {
            runValidationTasks("pp_ack_name", value);
          }
          setPp_ack_name(value);
        }}
        onBlur={() => runValidationTasks("pp_ack_name", pp_ack_name)}
        errorMessage={errors.pp_ack_name?.errorMessage}
        hasError={errors.pp_ack_name?.hasError}
        {...getOverrideProps(overrides, "pp_ack_name")}
      ></TextField>
      <TextField
        label="Pp ack auth name 1"
        isRequired={false}
        isReadOnly={false}
        value={pp_ack_auth_name_1}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1: value,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.pp_ack_auth_name_1 ?? value;
          }
          if (errors.pp_ack_auth_name_1?.hasError) {
            runValidationTasks("pp_ack_auth_name_1", value);
          }
          setPp_ack_auth_name_1(value);
        }}
        onBlur={() =>
          runValidationTasks("pp_ack_auth_name_1", pp_ack_auth_name_1)
        }
        errorMessage={errors.pp_ack_auth_name_1?.errorMessage}
        hasError={errors.pp_ack_auth_name_1?.hasError}
        {...getOverrideProps(overrides, "pp_ack_auth_name_1")}
      ></TextField>
      <TextField
        label="Pp ack auth name 2"
        isRequired={false}
        isReadOnly={false}
        value={pp_ack_auth_name_2}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2: value,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.pp_ack_auth_name_2 ?? value;
          }
          if (errors.pp_ack_auth_name_2?.hasError) {
            runValidationTasks("pp_ack_auth_name_2", value);
          }
          setPp_ack_auth_name_2(value);
        }}
        onBlur={() =>
          runValidationTasks("pp_ack_auth_name_2", pp_ack_auth_name_2)
        }
        errorMessage={errors.pp_ack_auth_name_2?.errorMessage}
        hasError={errors.pp_ack_auth_name_2?.hasError}
        {...getOverrideProps(overrides, "pp_ack_auth_name_2")}
      ></TextField>
      <TextField
        label="Pp ack auth name 3"
        isRequired={false}
        isReadOnly={false}
        value={pp_ack_auth_name_3}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3: value,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.pp_ack_auth_name_3 ?? value;
          }
          if (errors.pp_ack_auth_name_3?.hasError) {
            runValidationTasks("pp_ack_auth_name_3", value);
          }
          setPp_ack_auth_name_3(value);
        }}
        onBlur={() =>
          runValidationTasks("pp_ack_auth_name_3", pp_ack_auth_name_3)
        }
        errorMessage={errors.pp_ack_auth_name_3?.errorMessage}
        hasError={errors.pp_ack_auth_name_3?.hasError}
        {...getOverrideProps(overrides, "pp_ack_auth_name_3")}
      ></TextField>
      <TextField
        label="Pp ack auth relationship 1"
        isRequired={false}
        isReadOnly={false}
        value={pp_ack_auth_relationship_1}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1: value,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.pp_ack_auth_relationship_1 ?? value;
          }
          if (errors.pp_ack_auth_relationship_1?.hasError) {
            runValidationTasks("pp_ack_auth_relationship_1", value);
          }
          setPp_ack_auth_relationship_1(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "pp_ack_auth_relationship_1",
            pp_ack_auth_relationship_1
          )
        }
        errorMessage={errors.pp_ack_auth_relationship_1?.errorMessage}
        hasError={errors.pp_ack_auth_relationship_1?.hasError}
        {...getOverrideProps(overrides, "pp_ack_auth_relationship_1")}
      ></TextField>
      <TextField
        label="Pp ack auth relationship 2"
        isRequired={false}
        isReadOnly={false}
        value={pp_ack_auth_relationship_2}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2: value,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.pp_ack_auth_relationship_2 ?? value;
          }
          if (errors.pp_ack_auth_relationship_2?.hasError) {
            runValidationTasks("pp_ack_auth_relationship_2", value);
          }
          setPp_ack_auth_relationship_2(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "pp_ack_auth_relationship_2",
            pp_ack_auth_relationship_2
          )
        }
        errorMessage={errors.pp_ack_auth_relationship_2?.errorMessage}
        hasError={errors.pp_ack_auth_relationship_2?.hasError}
        {...getOverrideProps(overrides, "pp_ack_auth_relationship_2")}
      ></TextField>
      <TextField
        label="Pp ack auth relationship 3"
        isRequired={false}
        isReadOnly={false}
        value={pp_ack_auth_relationship_3}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3: value,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.pp_ack_auth_relationship_3 ?? value;
          }
          if (errors.pp_ack_auth_relationship_3?.hasError) {
            runValidationTasks("pp_ack_auth_relationship_3", value);
          }
          setPp_ack_auth_relationship_3(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "pp_ack_auth_relationship_3",
            pp_ack_auth_relationship_3
          )
        }
        errorMessage={errors.pp_ack_auth_relationship_3?.errorMessage}
        hasError={errors.pp_ack_auth_relationship_3?.hasError}
        {...getOverrideProps(overrides, "pp_ack_auth_relationship_3")}
      ></TextField>
      <TextField
        label="Pp ack decline names"
        isRequired={false}
        isReadOnly={false}
        value={pp_ack_decline_names}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names: value,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.pp_ack_decline_names ?? value;
          }
          if (errors.pp_ack_decline_names?.hasError) {
            runValidationTasks("pp_ack_decline_names", value);
          }
          setPp_ack_decline_names(value);
        }}
        onBlur={() =>
          runValidationTasks("pp_ack_decline_names", pp_ack_decline_names)
        }
        errorMessage={errors.pp_ack_decline_names?.errorMessage}
        hasError={errors.pp_ack_decline_names?.hasError}
        {...getOverrideProps(overrides, "pp_ack_decline_names")}
      ></TextField>
      <TextField
        label="Pp signature page 4"
        isRequired={false}
        isReadOnly={false}
        value={pp_signature_page_4}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4: value,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.pp_signature_page_4 ?? value;
          }
          if (errors.pp_signature_page_4?.hasError) {
            runValidationTasks("pp_signature_page_4", value);
          }
          setPp_signature_page_4(value);
        }}
        onBlur={() =>
          runValidationTasks("pp_signature_page_4", pp_signature_page_4)
        }
        errorMessage={errors.pp_signature_page_4?.errorMessage}
        hasError={errors.pp_signature_page_4?.hasError}
        {...getOverrideProps(overrides, "pp_signature_page_4")}
      ></TextField>
      <TextField
        label="Pp signature page 4 date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={pp_signature_page_4_date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date: value,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.pp_signature_page_4_date ?? value;
          }
          if (errors.pp_signature_page_4_date?.hasError) {
            runValidationTasks("pp_signature_page_4_date", value);
          }
          setPp_signature_page_4_date(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "pp_signature_page_4_date",
            pp_signature_page_4_date
          )
        }
        errorMessage={errors.pp_signature_page_4_date?.errorMessage}
        hasError={errors.pp_signature_page_4_date?.hasError}
        {...getOverrideProps(overrides, "pp_signature_page_4_date")}
      ></TextField>
      <TextField
        label="Reciept notice signature page 5"
        isRequired={false}
        isReadOnly={false}
        value={reciept_notice_signature_page_5}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5: value,
              reciept_notice_signature_page_5_date,
            };
            const result = onChange(modelFields);
            value = result?.reciept_notice_signature_page_5 ?? value;
          }
          if (errors.reciept_notice_signature_page_5?.hasError) {
            runValidationTasks("reciept_notice_signature_page_5", value);
          }
          setReciept_notice_signature_page_5(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "reciept_notice_signature_page_5",
            reciept_notice_signature_page_5
          )
        }
        errorMessage={errors.reciept_notice_signature_page_5?.errorMessage}
        hasError={errors.reciept_notice_signature_page_5?.hasError}
        {...getOverrideProps(overrides, "reciept_notice_signature_page_5")}
      ></TextField>
      <TextField
        label="Reciept notice signature page 5 date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={reciept_notice_signature_page_5_date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              first_name,
              last_name,
              date_of_birth,
              gender,
              marital_status,
              ethnicity,
              race,
              primary_language,
              address,
              city,
              state,
              zip,
              home_phone,
              work_phone,
              mobile_phone,
              email,
              social_security,
              employer,
              education,
              veteran,
              occupatin,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              referring_physician_name,
              primary_care_physician_phone,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicine_1,
              ph_current_medicine_2,
              ph_current_medicine_3,
              ph_current_medicine_4,
              ph_current_medicine_5,
              ph_current_medicine_6,
              ph_current_medicine_7,
              ph_current_medicine_8,
              ph_current_medicine_9,
              ph_current_medicine_10,
              ph_current_medicine_11,
              ph_current_medicine_12,
              ph_current_medicine_13,
              ph_current_medicine_14,
              ph_current_medicine_15,
              ph_allergy_to_med,
              ph_allergy_to_med_list,
              ph_rh_history_osteoarthritis,
              ph_rh_history_gout,
              ph_rh_history_juvenile_arthritis,
              ph_rh_history_vasculitis,
              ph_rh_history_lupus,
              ph_rh_history_rheumatoid,
              ph_rh_history_spondyloarthropathy,
              ph_rh_history_osteoporosis,
              ph_past_medical_history,
              ph_past_surgery_history,
              ph_smoke,
              ph_alcohol,
              ph_drugs,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ph_symptoms,
              ad_people_in_household,
              ad_who_shopping,
              ad_housework,
              ad_hardest_thing,
              ad_ability_stand_up_chair,
              ad_ability_walk_outdoors_flat,
              ad_ability_get_on_toilet,
              ad_ability_reach_5_pound,
              ad_ability_car_doors,
              ad_ability_outside_work,
              ad_ability_wait_in_line,
              ad_ability_lift_heavy,
              ad_ability_lift_heavier,
              ad_ability_climb_2_flights,
              ad_aids_devices_activities,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              pp_ack_name,
              pp_ack_auth_name_1,
              pp_ack_auth_name_2,
              pp_ack_auth_name_3,
              pp_ack_auth_relationship_1,
              pp_ack_auth_relationship_2,
              pp_ack_auth_relationship_3,
              pp_ack_decline_names,
              pp_signature_page_4,
              pp_signature_page_4_date,
              reciept_notice_signature_page_5,
              reciept_notice_signature_page_5_date: value,
            };
            const result = onChange(modelFields);
            value = result?.reciept_notice_signature_page_5_date ?? value;
          }
          if (errors.reciept_notice_signature_page_5_date?.hasError) {
            runValidationTasks("reciept_notice_signature_page_5_date", value);
          }
          setReciept_notice_signature_page_5_date(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "reciept_notice_signature_page_5_date",
            reciept_notice_signature_page_5_date
          )
        }
        errorMessage={errors.reciept_notice_signature_page_5_date?.errorMessage}
        hasError={errors.reciept_notice_signature_page_5_date?.hasError}
        {...getOverrideProps(overrides, "reciept_notice_signature_page_5_date")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || newPatientModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || newPatientModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
