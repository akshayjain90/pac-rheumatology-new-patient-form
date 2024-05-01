/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Autocomplete,
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Heading,
  Icon,
  ScrollView,
  SelectField,
  SliderField,
  SwitchField,
  Text,
  TextAreaField,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createNewPatient } from "../graphql/mutations";
const client = generateClient();
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function NewPatientCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const { tokens } = useTheme();
  const initialValues = {
    date: "",
    last_name: "",
    first_name: "",
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
    occupation: "",
    full_time: false,
    preferred_pharmacy: "",
    insurance_primary_name: "",
    insurance_primary_id: "",
    insurance_primary_group: "",
    insurance_primary_address: "",
    insurance_primary_phone: "",
    insurance_primary_insured_person: "",
    insurance_primary_insured_person_relation: "",
    insurance_primary_insured_person_dob: "",
    insurance_secondary: "",
    insurance_secondary_id: "",
    insurance_secondary_group: "",
    insurance_secondary_address: "",
    insurance_secondary_phone: "",
    primary_care_physician_name: "",
    primary_care_physician_phone: "",
    referring_physician_name: "",
    referring_physician_phone: "",
    emergency_contact_name: "",
    emergency_contact_phone: "",
    emergency_contact_relationship: "",
    signature_page_1: "",
    signature_page_1_date: "",
    ph_briefly_describe_present_symptoms: "",
    ph_previous_treatment_for_problem: "",
    ph_current_medicines: "",
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
    ph_drugs: "",
    ph_alcohol: "",
    ph_alcohol_weekly: "",
    ph_sleep: "",
    ph_exercise: "",
    ph_travel: "",
    ph_pregnant: "",
    ph_live_births: "",
    ph_complications: "",
    ad_people_in_household: "",
    ph_symptoms: [],
    ad_dress_yourself: "",
    ad_get_in_out_bed: "",
    ad_lift_full_cup_mouth: "",
    ad_walk_outdoor_flat: "",
    ad_wash_dry_body: "",
    ad_pick_clothing_floor: "",
    ad_turn_faucets_on_off: "",
    ad_get_in_out_car_bus_train_plane: "",
    ad_walk_two_miles: "",
    ad_recreational_activities_sports: "",
    ad_good_night_sleep: "",
    ad_deal_anxiety_nervous: "",
    ad_deal_depression_blue: "",
    ad_daily_pain_scale: 0,
    ad_how_well_doing_scale: 0,
  };
  const [date, setDate] = React.useState(initialValues.date);
  const [last_name, setLast_name] = React.useState(initialValues.last_name);
  const [first_name, setFirst_name] = React.useState(initialValues.first_name);
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
  const [occupation, setOccupation] = React.useState(initialValues.occupation);
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
  const [
    insurance_primary_insured_person_dob,
    setInsurance_primary_insured_person_dob,
  ] = React.useState(initialValues.insurance_primary_insured_person_dob);
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
  const [primary_care_physician_phone, setPrimary_care_physician_phone] =
    React.useState(initialValues.primary_care_physician_phone);
  const [referring_physician_name, setReferring_physician_name] =
    React.useState(initialValues.referring_physician_name);
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
  const [ph_current_medicines, setPh_current_medicines] = React.useState(
    initialValues.ph_current_medicines
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
  const [ph_drugs, setPh_drugs] = React.useState(initialValues.ph_drugs);
  const [ph_alcohol, setPh_alcohol] = React.useState(initialValues.ph_alcohol);
  const [ph_alcohol_weekly, setPh_alcohol_weekly] = React.useState(
    initialValues.ph_alcohol_weekly
  );
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
  const [ad_people_in_household, setAd_people_in_household] = React.useState(
    initialValues.ad_people_in_household
  );
  const [ph_symptoms, setPh_symptoms] = React.useState(
    initialValues.ph_symptoms
  );
  const [ad_dress_yourself, setAd_dress_yourself] = React.useState(
    initialValues.ad_dress_yourself
  );
  const [ad_get_in_out_bed, setAd_get_in_out_bed] = React.useState(
    initialValues.ad_get_in_out_bed
  );
  const [ad_lift_full_cup_mouth, setAd_lift_full_cup_mouth] = React.useState(
    initialValues.ad_lift_full_cup_mouth
  );
  const [ad_walk_outdoor_flat, setAd_walk_outdoor_flat] = React.useState(
    initialValues.ad_walk_outdoor_flat
  );
  const [ad_wash_dry_body, setAd_wash_dry_body] = React.useState(
    initialValues.ad_wash_dry_body
  );
  const [ad_pick_clothing_floor, setAd_pick_clothing_floor] = React.useState(
    initialValues.ad_pick_clothing_floor
  );
  const [ad_turn_faucets_on_off, setAd_turn_faucets_on_off] = React.useState(
    initialValues.ad_turn_faucets_on_off
  );
  const [
    ad_get_in_out_car_bus_train_plane,
    setAd_get_in_out_car_bus_train_plane,
  ] = React.useState(initialValues.ad_get_in_out_car_bus_train_plane);
  const [ad_walk_two_miles, setAd_walk_two_miles] = React.useState(
    initialValues.ad_walk_two_miles
  );
  const [
    ad_recreational_activities_sports,
    setAd_recreational_activities_sports,
  ] = React.useState(initialValues.ad_recreational_activities_sports);
  const [ad_good_night_sleep, setAd_good_night_sleep] = React.useState(
    initialValues.ad_good_night_sleep
  );
  const [ad_deal_anxiety_nervous, setAd_deal_anxiety_nervous] = React.useState(
    initialValues.ad_deal_anxiety_nervous
  );
  const [ad_deal_depression_blue, setAd_deal_depression_blue] = React.useState(
    initialValues.ad_deal_depression_blue
  );
  const [ad_daily_pain_scale, setAd_daily_pain_scale] = React.useState(
    initialValues.ad_daily_pain_scale
  );
  const [ad_how_well_doing_scale, setAd_how_well_doing_scale] = React.useState(
    initialValues.ad_how_well_doing_scale
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setDate(initialValues.date);
    setLast_name(initialValues.last_name);
    setFirst_name(initialValues.first_name);
    setDate_of_birth(initialValues.date_of_birth);
    setGender(initialValues.gender);
    setMarital_status(initialValues.marital_status);
    setEthnicity(initialValues.ethnicity);
    setRace(initialValues.race);
    setPrimary_language(initialValues.primary_language);
    setAddress(initialValues.address);
    setCity(initialValues.city);
    setState(initialValues.state);
    setZip(initialValues.zip);
    setHome_phone(initialValues.home_phone);
    setWork_phone(initialValues.work_phone);
    setMobile_phone(initialValues.mobile_phone);
    setEmail(initialValues.email);
    setSocial_security(initialValues.social_security);
    setEmployer(initialValues.employer);
    setEducation(initialValues.education);
    setVeteran(initialValues.veteran);
    setOccupation(initialValues.occupation);
    setFull_time(initialValues.full_time);
    setPreferred_pharmacy(initialValues.preferred_pharmacy);
    setInsurance_primary_name(initialValues.insurance_primary_name);
    setInsurance_primary_id(initialValues.insurance_primary_id);
    setInsurance_primary_group(initialValues.insurance_primary_group);
    setInsurance_primary_address(initialValues.insurance_primary_address);
    setInsurance_primary_phone(initialValues.insurance_primary_phone);
    setInsurance_primary_insured_person(
      initialValues.insurance_primary_insured_person
    );
    setInsurance_primary_insured_person_relation(
      initialValues.insurance_primary_insured_person_relation
    );
    setInsurance_primary_insured_person_dob(
      initialValues.insurance_primary_insured_person_dob
    );
    setInsurance_secondary(initialValues.insurance_secondary);
    setInsurance_secondary_id(initialValues.insurance_secondary_id);
    setInsurance_secondary_group(initialValues.insurance_secondary_group);
    setInsurance_secondary_address(initialValues.insurance_secondary_address);
    setInsurance_secondary_phone(initialValues.insurance_secondary_phone);
    setPrimary_care_physician_name(initialValues.primary_care_physician_name);
    setPrimary_care_physician_phone(initialValues.primary_care_physician_phone);
    setReferring_physician_name(initialValues.referring_physician_name);
    setReferring_physician_phone(initialValues.referring_physician_phone);
    setEmergency_contact_name(initialValues.emergency_contact_name);
    setEmergency_contact_phone(initialValues.emergency_contact_phone);
    setEmergency_contact_relationship(
      initialValues.emergency_contact_relationship
    );
    setSignature_page_1(initialValues.signature_page_1);
    setSignature_page_1_date(initialValues.signature_page_1_date);
    setPh_briefly_describe_present_symptoms(
      initialValues.ph_briefly_describe_present_symptoms
    );
    setPh_previous_treatment_for_problem(
      initialValues.ph_previous_treatment_for_problem
    );
    setPh_current_medicines(initialValues.ph_current_medicines);
    setPh_allergy_to_med(initialValues.ph_allergy_to_med);
    setPh_allergy_to_med_list(initialValues.ph_allergy_to_med_list);
    setPh_rh_history_osteoarthritis(initialValues.ph_rh_history_osteoarthritis);
    setPh_rh_history_gout(initialValues.ph_rh_history_gout);
    setPh_rh_history_juvenile_arthritis(
      initialValues.ph_rh_history_juvenile_arthritis
    );
    setPh_rh_history_vasculitis(initialValues.ph_rh_history_vasculitis);
    setPh_rh_history_lupus(initialValues.ph_rh_history_lupus);
    setPh_rh_history_rheumatoid(initialValues.ph_rh_history_rheumatoid);
    setPh_rh_history_spondyloarthropathy(
      initialValues.ph_rh_history_spondyloarthropathy
    );
    setPh_rh_history_osteoporosis(initialValues.ph_rh_history_osteoporosis);
    setPh_past_medical_history(initialValues.ph_past_medical_history);
    setPh_past_surgery_history(initialValues.ph_past_surgery_history);
    setPh_smoke(initialValues.ph_smoke);
    setPh_drugs(initialValues.ph_drugs);
    setPh_alcohol(initialValues.ph_alcohol);
    setPh_alcohol_weekly(initialValues.ph_alcohol_weekly);
    setPh_sleep(initialValues.ph_sleep);
    setPh_exercise(initialValues.ph_exercise);
    setPh_travel(initialValues.ph_travel);
    setPh_pregnant(initialValues.ph_pregnant);
    setPh_live_births(initialValues.ph_live_births);
    setPh_complications(initialValues.ph_complications);
    setAd_people_in_household(initialValues.ad_people_in_household);
    setPh_symptoms(initialValues.ph_symptoms);
    setCurrentPh_symptomsValue(undefined);
    setAd_dress_yourself(initialValues.ad_dress_yourself);
    setAd_get_in_out_bed(initialValues.ad_get_in_out_bed);
    setAd_lift_full_cup_mouth(initialValues.ad_lift_full_cup_mouth);
    setAd_walk_outdoor_flat(initialValues.ad_walk_outdoor_flat);
    setAd_wash_dry_body(initialValues.ad_wash_dry_body);
    setAd_pick_clothing_floor(initialValues.ad_pick_clothing_floor);
    setAd_turn_faucets_on_off(initialValues.ad_turn_faucets_on_off);
    setAd_get_in_out_car_bus_train_plane(
      initialValues.ad_get_in_out_car_bus_train_plane
    );
    setAd_walk_two_miles(initialValues.ad_walk_two_miles);
    setAd_recreational_activities_sports(
      initialValues.ad_recreational_activities_sports
    );
    setAd_good_night_sleep(initialValues.ad_good_night_sleep);
    setAd_deal_anxiety_nervous(initialValues.ad_deal_anxiety_nervous);
    setAd_deal_depression_blue(initialValues.ad_deal_depression_blue);
    setAd_daily_pain_scale(initialValues.ad_daily_pain_scale);
    setAd_how_well_doing_scale(initialValues.ad_how_well_doing_scale);
    setErrors({});
  };
  const [currentPh_symptomsValue, setCurrentPh_symptomsValue] =
    React.useState(undefined);
  const ph_symptomsRef = React.createRef();
  const validations = {
    date: [{ type: "Required" }],
    last_name: [{ type: "Required" }],
    first_name: [{ type: "Required" }],
    date_of_birth: [{ type: "Required" }],
    gender: [{ type: "Required" }],
    marital_status: [{ type: "Required" }],
    ethnicity: [],
    race: [],
    primary_language: [],
    address: [{ type: "Required" }],
    city: [{ type: "Required" }],
    state: [{ type: "Required" }],
    zip: [{ type: "Required" }],
    home_phone: [{ type: "Required" }, { type: "Phone" }],
    work_phone: [{ type: "Phone" }],
    mobile_phone: [{ type: "Phone" }],
    email: [{ type: "Required" }],
    social_security: [],
    employer: [],
    education: [{ type: "Required" }],
    veteran: [{ type: "Required" }],
    occupation: [{ type: "Required" }],
    full_time: [],
    preferred_pharmacy: [],
    insurance_primary_name: [{ type: "Required" }],
    insurance_primary_id: [{ type: "Required" }],
    insurance_primary_group: [{ type: "Required" }],
    insurance_primary_address: [],
    insurance_primary_phone: [{ type: "Phone" }],
    insurance_primary_insured_person: [],
    insurance_primary_insured_person_relation: [],
    insurance_primary_insured_person_dob: [],
    insurance_secondary: [],
    insurance_secondary_id: [],
    insurance_secondary_group: [],
    insurance_secondary_address: [],
    insurance_secondary_phone: [{ type: "Phone" }],
    primary_care_physician_name: [],
    primary_care_physician_phone: [{ type: "Phone" }],
    referring_physician_name: [{ type: "Required" }],
    referring_physician_phone: [{ type: "Phone" }],
    emergency_contact_name: [{ type: "Required" }],
    emergency_contact_phone: [{ type: "Required" }, { type: "Phone" }],
    emergency_contact_relationship: [{ type: "Required" }],
    signature_page_1: [{ type: "Required" }],
    signature_page_1_date: [{ type: "Required" }],
    ph_briefly_describe_present_symptoms: [{ type: "Required" }],
    ph_previous_treatment_for_problem: [],
    ph_current_medicines: [{ type: "Required" }],
    ph_allergy_to_med: [{ type: "Required" }],
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
    ph_smoke: [{ type: "Required" }],
    ph_drugs: [{ type: "Required" }],
    ph_alcohol: [{ type: "Required" }],
    ph_alcohol_weekly: [],
    ph_sleep: [],
    ph_exercise: [],
    ph_travel: [],
    ph_pregnant: [],
    ph_live_births: [],
    ph_complications: [],
    ad_people_in_household: [],
    ph_symptoms: [{ type: "Required" }],
    ad_dress_yourself: [{ type: "Required" }],
    ad_get_in_out_bed: [{ type: "Required" }],
    ad_lift_full_cup_mouth: [{ type: "Required" }],
    ad_walk_outdoor_flat: [{ type: "Required" }],
    ad_wash_dry_body: [{ type: "Required" }],
    ad_pick_clothing_floor: [{ type: "Required" }],
    ad_turn_faucets_on_off: [{ type: "Required" }],
    ad_get_in_out_car_bus_train_plane: [{ type: "Required" }],
    ad_walk_two_miles: [{ type: "Required" }],
    ad_recreational_activities_sports: [{ type: "Required" }],
    ad_good_night_sleep: [{ type: "Required" }],
    ad_deal_anxiety_nervous: [{ type: "Required" }],
    ad_deal_depression_blue: [{ type: "Required" }],
    ad_daily_pain_scale: [{ type: "Required" }],
    ad_how_well_doing_scale: [{ type: "Required" }],
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
  React.useEffect(() => {}, []);
  return (
    <Grid
      as="form"
      rowGap={tokens.space.large.value}
      columnGap={tokens.space.medium.value}
      padding={tokens.space.large.value}
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          date,
          last_name,
          first_name,
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
          occupation,
          full_time,
          preferred_pharmacy,
          insurance_primary_name,
          insurance_primary_id,
          insurance_primary_group,
          insurance_primary_address,
          insurance_primary_phone,
          insurance_primary_insured_person,
          insurance_primary_insured_person_relation,
          insurance_primary_insured_person_dob,
          insurance_secondary,
          insurance_secondary_id,
          insurance_secondary_group,
          insurance_secondary_address,
          insurance_secondary_phone,
          primary_care_physician_name,
          primary_care_physician_phone,
          referring_physician_name,
          referring_physician_phone,
          emergency_contact_name,
          emergency_contact_phone,
          emergency_contact_relationship,
          signature_page_1,
          signature_page_1_date,
          ph_briefly_describe_present_symptoms,
          ph_previous_treatment_for_problem,
          ph_current_medicines,
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
          ph_drugs,
          ph_alcohol,
          ph_alcohol_weekly,
          ph_sleep,
          ph_exercise,
          ph_travel,
          ph_pregnant,
          ph_live_births,
          ph_complications,
          ad_people_in_household,
          ph_symptoms,
          ad_dress_yourself,
          ad_get_in_out_bed,
          ad_lift_full_cup_mouth,
          ad_walk_outdoor_flat,
          ad_wash_dry_body,
          ad_pick_clothing_floor,
          ad_turn_faucets_on_off,
          ad_get_in_out_car_bus_train_plane,
          ad_walk_two_miles,
          ad_recreational_activities_sports,
          ad_good_night_sleep,
          ad_deal_anxiety_nervous,
          ad_deal_depression_blue,
          ad_daily_pain_scale,
          ad_how_well_doing_scale,
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
            query: createNewPatient.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "NewPatientCreateForm")}
      {...rest}
    >
      <Heading
        level={4}
        children="Personal Information"
        {...getOverrideProps(overrides, "SectionalElement0")}
      ></Heading>
      <TextField
        label="Today's Date"
        isRequired={true}
        isReadOnly={false}
        type="date"
        value={date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date: value,
              last_name,
              first_name,
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
              occupation,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_primary_insured_person_dob,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              primary_care_physician_phone,
              referring_physician_name,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicines,
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
              ph_drugs,
              ph_alcohol,
              ph_alcohol_weekly,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ad_people_in_household,
              ph_symptoms,
              ad_dress_yourself,
              ad_get_in_out_bed,
              ad_lift_full_cup_mouth,
              ad_walk_outdoor_flat,
              ad_wash_dry_body,
              ad_pick_clothing_floor,
              ad_turn_faucets_on_off,
              ad_get_in_out_car_bus_train_plane,
              ad_walk_two_miles,
              ad_recreational_activities_sports,
              ad_good_night_sleep,
              ad_deal_anxiety_nervous,
              ad_deal_depression_blue,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
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
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(3, auto)"
        {...getOverrideProps(overrides, "RowGrid2")}
      >
        <TextField
          label="Last name *"
          isRequired={true}
          isReadOnly={false}
          value={last_name}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                date,
                last_name: value,
                first_name,
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
                occupation,
                full_time,
                preferred_pharmacy,
                insurance_primary_name,
                insurance_primary_id,
                insurance_primary_group,
                insurance_primary_address,
                insurance_primary_phone,
                insurance_primary_insured_person,
                insurance_primary_insured_person_relation,
                insurance_primary_insured_person_dob,
                insurance_secondary,
                insurance_secondary_id,
                insurance_secondary_group,
                insurance_secondary_address,
                insurance_secondary_phone,
                primary_care_physician_name,
                primary_care_physician_phone,
                referring_physician_name,
                referring_physician_phone,
                emergency_contact_name,
                emergency_contact_phone,
                emergency_contact_relationship,
                signature_page_1,
                signature_page_1_date,
                ph_briefly_describe_present_symptoms,
                ph_previous_treatment_for_problem,
                ph_current_medicines,
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
                ph_drugs,
                ph_alcohol,
                ph_alcohol_weekly,
                ph_sleep,
                ph_exercise,
                ph_travel,
                ph_pregnant,
                ph_live_births,
                ph_complications,
                ad_people_in_household,
                ph_symptoms,
                ad_dress_yourself,
                ad_get_in_out_bed,
                ad_lift_full_cup_mouth,
                ad_walk_outdoor_flat,
                ad_wash_dry_body,
                ad_pick_clothing_floor,
                ad_turn_faucets_on_off,
                ad_get_in_out_car_bus_train_plane,
                ad_walk_two_miles,
                ad_recreational_activities_sports,
                ad_good_night_sleep,
                ad_deal_anxiety_nervous,
                ad_deal_depression_blue,
                ad_daily_pain_scale,
                ad_how_well_doing_scale,
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
          label="First name *"
          isRequired={true}
          isReadOnly={false}
          value={first_name}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                date,
                last_name,
                first_name: value,
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
                occupation,
                full_time,
                preferred_pharmacy,
                insurance_primary_name,
                insurance_primary_id,
                insurance_primary_group,
                insurance_primary_address,
                insurance_primary_phone,
                insurance_primary_insured_person,
                insurance_primary_insured_person_relation,
                insurance_primary_insured_person_dob,
                insurance_secondary,
                insurance_secondary_id,
                insurance_secondary_group,
                insurance_secondary_address,
                insurance_secondary_phone,
                primary_care_physician_name,
                primary_care_physician_phone,
                referring_physician_name,
                referring_physician_phone,
                emergency_contact_name,
                emergency_contact_phone,
                emergency_contact_relationship,
                signature_page_1,
                signature_page_1_date,
                ph_briefly_describe_present_symptoms,
                ph_previous_treatment_for_problem,
                ph_current_medicines,
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
                ph_drugs,
                ph_alcohol,
                ph_alcohol_weekly,
                ph_sleep,
                ph_exercise,
                ph_travel,
                ph_pregnant,
                ph_live_births,
                ph_complications,
                ad_people_in_household,
                ph_symptoms,
                ad_dress_yourself,
                ad_get_in_out_bed,
                ad_lift_full_cup_mouth,
                ad_walk_outdoor_flat,
                ad_wash_dry_body,
                ad_pick_clothing_floor,
                ad_turn_faucets_on_off,
                ad_get_in_out_car_bus_train_plane,
                ad_walk_two_miles,
                ad_recreational_activities_sports,
                ad_good_night_sleep,
                ad_deal_anxiety_nervous,
                ad_deal_depression_blue,
                ad_daily_pain_scale,
                ad_how_well_doing_scale,
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
          label="Date of birth *"
          isRequired={true}
          isReadOnly={false}
          type="date"
          value={date_of_birth}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                date,
                last_name,
                first_name,
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
                occupation,
                full_time,
                preferred_pharmacy,
                insurance_primary_name,
                insurance_primary_id,
                insurance_primary_group,
                insurance_primary_address,
                insurance_primary_phone,
                insurance_primary_insured_person,
                insurance_primary_insured_person_relation,
                insurance_primary_insured_person_dob,
                insurance_secondary,
                insurance_secondary_id,
                insurance_secondary_group,
                insurance_secondary_address,
                insurance_secondary_phone,
                primary_care_physician_name,
                primary_care_physician_phone,
                referring_physician_name,
                referring_physician_phone,
                emergency_contact_name,
                emergency_contact_phone,
                emergency_contact_relationship,
                signature_page_1,
                signature_page_1_date,
                ph_briefly_describe_present_symptoms,
                ph_previous_treatment_for_problem,
                ph_current_medicines,
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
                ph_drugs,
                ph_alcohol,
                ph_alcohol_weekly,
                ph_sleep,
                ph_exercise,
                ph_travel,
                ph_pregnant,
                ph_live_births,
                ph_complications,
                ad_people_in_household,
                ph_symptoms,
                ad_dress_yourself,
                ad_get_in_out_bed,
                ad_lift_full_cup_mouth,
                ad_walk_outdoor_flat,
                ad_wash_dry_body,
                ad_pick_clothing_floor,
                ad_turn_faucets_on_off,
                ad_get_in_out_car_bus_train_plane,
                ad_walk_two_miles,
                ad_recreational_activities_sports,
                ad_good_night_sleep,
                ad_deal_anxiety_nervous,
                ad_deal_depression_blue,
                ad_daily_pain_scale,
                ad_how_well_doing_scale,
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
      </Grid>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid3")}
      >
        <TextField
          label="Gender *"
          isRequired={true}
          isReadOnly={false}
          value={gender}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                date,
                last_name,
                first_name,
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
                occupation,
                full_time,
                preferred_pharmacy,
                insurance_primary_name,
                insurance_primary_id,
                insurance_primary_group,
                insurance_primary_address,
                insurance_primary_phone,
                insurance_primary_insured_person,
                insurance_primary_insured_person_relation,
                insurance_primary_insured_person_dob,
                insurance_secondary,
                insurance_secondary_id,
                insurance_secondary_group,
                insurance_secondary_address,
                insurance_secondary_phone,
                primary_care_physician_name,
                primary_care_physician_phone,
                referring_physician_name,
                referring_physician_phone,
                emergency_contact_name,
                emergency_contact_phone,
                emergency_contact_relationship,
                signature_page_1,
                signature_page_1_date,
                ph_briefly_describe_present_symptoms,
                ph_previous_treatment_for_problem,
                ph_current_medicines,
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
                ph_drugs,
                ph_alcohol,
                ph_alcohol_weekly,
                ph_sleep,
                ph_exercise,
                ph_travel,
                ph_pregnant,
                ph_live_births,
                ph_complications,
                ad_people_in_household,
                ph_symptoms,
                ad_dress_yourself,
                ad_get_in_out_bed,
                ad_lift_full_cup_mouth,
                ad_walk_outdoor_flat,
                ad_wash_dry_body,
                ad_pick_clothing_floor,
                ad_turn_faucets_on_off,
                ad_get_in_out_car_bus_train_plane,
                ad_walk_two_miles,
                ad_recreational_activities_sports,
                ad_good_night_sleep,
                ad_deal_anxiety_nervous,
                ad_deal_depression_blue,
                ad_daily_pain_scale,
                ad_how_well_doing_scale,
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
        <SelectField
          label="Marital status *"
          placeholder="Please select an option"
          isDisabled={false}
          value={marital_status}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                date,
                last_name,
                first_name,
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
                occupation,
                full_time,
                preferred_pharmacy,
                insurance_primary_name,
                insurance_primary_id,
                insurance_primary_group,
                insurance_primary_address,
                insurance_primary_phone,
                insurance_primary_insured_person,
                insurance_primary_insured_person_relation,
                insurance_primary_insured_person_dob,
                insurance_secondary,
                insurance_secondary_id,
                insurance_secondary_group,
                insurance_secondary_address,
                insurance_secondary_phone,
                primary_care_physician_name,
                primary_care_physician_phone,
                referring_physician_name,
                referring_physician_phone,
                emergency_contact_name,
                emergency_contact_phone,
                emergency_contact_relationship,
                signature_page_1,
                signature_page_1_date,
                ph_briefly_describe_present_symptoms,
                ph_previous_treatment_for_problem,
                ph_current_medicines,
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
                ph_drugs,
                ph_alcohol,
                ph_alcohol_weekly,
                ph_sleep,
                ph_exercise,
                ph_travel,
                ph_pregnant,
                ph_live_births,
                ph_complications,
                ad_people_in_household,
                ph_symptoms,
                ad_dress_yourself,
                ad_get_in_out_bed,
                ad_lift_full_cup_mouth,
                ad_walk_outdoor_flat,
                ad_wash_dry_body,
                ad_pick_clothing_floor,
                ad_turn_faucets_on_off,
                ad_get_in_out_car_bus_train_plane,
                ad_walk_two_miles,
                ad_recreational_activities_sports,
                ad_good_night_sleep,
                ad_deal_anxiety_nervous,
                ad_deal_depression_blue,
                ad_daily_pain_scale,
                ad_how_well_doing_scale,
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
        >
          <option
            children="Single"
            value="Single"
            {...getOverrideProps(overrides, "marital_statusoption0")}
          ></option>
          <option
            children="Married"
            value="Married"
            {...getOverrideProps(overrides, "marital_statusoption1")}
          ></option>
          <option
            children="Widowed"
            value="Widowed"
            {...getOverrideProps(overrides, "marital_statusoption2")}
          ></option>
          <option
            children="Divorced"
            value="Divorced"
            {...getOverrideProps(overrides, "marital_statusoption3")}
          ></option>
        </SelectField>
      </Grid>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(3, auto)"
        {...getOverrideProps(overrides, "RowGrid4")}
      >
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
                last_name,
                first_name,
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
                occupation,
                full_time,
                preferred_pharmacy,
                insurance_primary_name,
                insurance_primary_id,
                insurance_primary_group,
                insurance_primary_address,
                insurance_primary_phone,
                insurance_primary_insured_person,
                insurance_primary_insured_person_relation,
                insurance_primary_insured_person_dob,
                insurance_secondary,
                insurance_secondary_id,
                insurance_secondary_group,
                insurance_secondary_address,
                insurance_secondary_phone,
                primary_care_physician_name,
                primary_care_physician_phone,
                referring_physician_name,
                referring_physician_phone,
                emergency_contact_name,
                emergency_contact_phone,
                emergency_contact_relationship,
                signature_page_1,
                signature_page_1_date,
                ph_briefly_describe_present_symptoms,
                ph_previous_treatment_for_problem,
                ph_current_medicines,
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
                ph_drugs,
                ph_alcohol,
                ph_alcohol_weekly,
                ph_sleep,
                ph_exercise,
                ph_travel,
                ph_pregnant,
                ph_live_births,
                ph_complications,
                ad_people_in_household,
                ph_symptoms,
                ad_dress_yourself,
                ad_get_in_out_bed,
                ad_lift_full_cup_mouth,
                ad_walk_outdoor_flat,
                ad_wash_dry_body,
                ad_pick_clothing_floor,
                ad_turn_faucets_on_off,
                ad_get_in_out_car_bus_train_plane,
                ad_walk_two_miles,
                ad_recreational_activities_sports,
                ad_good_night_sleep,
                ad_deal_anxiety_nervous,
                ad_deal_depression_blue,
                ad_daily_pain_scale,
                ad_how_well_doing_scale,
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
                last_name,
                first_name,
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
                occupation,
                full_time,
                preferred_pharmacy,
                insurance_primary_name,
                insurance_primary_id,
                insurance_primary_group,
                insurance_primary_address,
                insurance_primary_phone,
                insurance_primary_insured_person,
                insurance_primary_insured_person_relation,
                insurance_primary_insured_person_dob,
                insurance_secondary,
                insurance_secondary_id,
                insurance_secondary_group,
                insurance_secondary_address,
                insurance_secondary_phone,
                primary_care_physician_name,
                primary_care_physician_phone,
                referring_physician_name,
                referring_physician_phone,
                emergency_contact_name,
                emergency_contact_phone,
                emergency_contact_relationship,
                signature_page_1,
                signature_page_1_date,
                ph_briefly_describe_present_symptoms,
                ph_previous_treatment_for_problem,
                ph_current_medicines,
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
                ph_drugs,
                ph_alcohol,
                ph_alcohol_weekly,
                ph_sleep,
                ph_exercise,
                ph_travel,
                ph_pregnant,
                ph_live_births,
                ph_complications,
                ad_people_in_household,
                ph_symptoms,
                ad_dress_yourself,
                ad_get_in_out_bed,
                ad_lift_full_cup_mouth,
                ad_walk_outdoor_flat,
                ad_wash_dry_body,
                ad_pick_clothing_floor,
                ad_turn_faucets_on_off,
                ad_get_in_out_car_bus_train_plane,
                ad_walk_two_miles,
                ad_recreational_activities_sports,
                ad_good_night_sleep,
                ad_deal_anxiety_nervous,
                ad_deal_depression_blue,
                ad_daily_pain_scale,
                ad_how_well_doing_scale,
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
                last_name,
                first_name,
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
                occupation,
                full_time,
                preferred_pharmacy,
                insurance_primary_name,
                insurance_primary_id,
                insurance_primary_group,
                insurance_primary_address,
                insurance_primary_phone,
                insurance_primary_insured_person,
                insurance_primary_insured_person_relation,
                insurance_primary_insured_person_dob,
                insurance_secondary,
                insurance_secondary_id,
                insurance_secondary_group,
                insurance_secondary_address,
                insurance_secondary_phone,
                primary_care_physician_name,
                primary_care_physician_phone,
                referring_physician_name,
                referring_physician_phone,
                emergency_contact_name,
                emergency_contact_phone,
                emergency_contact_relationship,
                signature_page_1,
                signature_page_1_date,
                ph_briefly_describe_present_symptoms,
                ph_previous_treatment_for_problem,
                ph_current_medicines,
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
                ph_drugs,
                ph_alcohol,
                ph_alcohol_weekly,
                ph_sleep,
                ph_exercise,
                ph_travel,
                ph_pregnant,
                ph_live_births,
                ph_complications,
                ad_people_in_household,
                ph_symptoms,
                ad_dress_yourself,
                ad_get_in_out_bed,
                ad_lift_full_cup_mouth,
                ad_walk_outdoor_flat,
                ad_wash_dry_body,
                ad_pick_clothing_floor,
                ad_turn_faucets_on_off,
                ad_get_in_out_car_bus_train_plane,
                ad_walk_two_miles,
                ad_recreational_activities_sports,
                ad_good_night_sleep,
                ad_deal_anxiety_nervous,
                ad_deal_depression_blue,
                ad_daily_pain_scale,
                ad_how_well_doing_scale,
              };
              const result = onChange(modelFields);
              value = result?.primary_language ?? value;
            }
            if (errors.primary_language?.hasError) {
              runValidationTasks("primary_language", value);
            }
            setPrimary_language(value);
          }}
          onBlur={() =>
            runValidationTasks("primary_language", primary_language)
          }
          errorMessage={errors.primary_language?.errorMessage}
          hasError={errors.primary_language?.hasError}
          {...getOverrideProps(overrides, "primary_language")}
        ></TextField>
      </Grid>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid5")}
      >
        <TextField
          label="Address *"
          isRequired={true}
          isReadOnly={false}
          value={address}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                date,
                last_name,
                first_name,
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
                occupation,
                full_time,
                preferred_pharmacy,
                insurance_primary_name,
                insurance_primary_id,
                insurance_primary_group,
                insurance_primary_address,
                insurance_primary_phone,
                insurance_primary_insured_person,
                insurance_primary_insured_person_relation,
                insurance_primary_insured_person_dob,
                insurance_secondary,
                insurance_secondary_id,
                insurance_secondary_group,
                insurance_secondary_address,
                insurance_secondary_phone,
                primary_care_physician_name,
                primary_care_physician_phone,
                referring_physician_name,
                referring_physician_phone,
                emergency_contact_name,
                emergency_contact_phone,
                emergency_contact_relationship,
                signature_page_1,
                signature_page_1_date,
                ph_briefly_describe_present_symptoms,
                ph_previous_treatment_for_problem,
                ph_current_medicines,
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
                ph_drugs,
                ph_alcohol,
                ph_alcohol_weekly,
                ph_sleep,
                ph_exercise,
                ph_travel,
                ph_pregnant,
                ph_live_births,
                ph_complications,
                ad_people_in_household,
                ph_symptoms,
                ad_dress_yourself,
                ad_get_in_out_bed,
                ad_lift_full_cup_mouth,
                ad_walk_outdoor_flat,
                ad_wash_dry_body,
                ad_pick_clothing_floor,
                ad_turn_faucets_on_off,
                ad_get_in_out_car_bus_train_plane,
                ad_walk_two_miles,
                ad_recreational_activities_sports,
                ad_good_night_sleep,
                ad_deal_anxiety_nervous,
                ad_deal_depression_blue,
                ad_daily_pain_scale,
                ad_how_well_doing_scale,
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
          label="City *"
          isRequired={true}
          isReadOnly={false}
          value={city}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                date,
                last_name,
                first_name,
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
                occupation,
                full_time,
                preferred_pharmacy,
                insurance_primary_name,
                insurance_primary_id,
                insurance_primary_group,
                insurance_primary_address,
                insurance_primary_phone,
                insurance_primary_insured_person,
                insurance_primary_insured_person_relation,
                insurance_primary_insured_person_dob,
                insurance_secondary,
                insurance_secondary_id,
                insurance_secondary_group,
                insurance_secondary_address,
                insurance_secondary_phone,
                primary_care_physician_name,
                primary_care_physician_phone,
                referring_physician_name,
                referring_physician_phone,
                emergency_contact_name,
                emergency_contact_phone,
                emergency_contact_relationship,
                signature_page_1,
                signature_page_1_date,
                ph_briefly_describe_present_symptoms,
                ph_previous_treatment_for_problem,
                ph_current_medicines,
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
                ph_drugs,
                ph_alcohol,
                ph_alcohol_weekly,
                ph_sleep,
                ph_exercise,
                ph_travel,
                ph_pregnant,
                ph_live_births,
                ph_complications,
                ad_people_in_household,
                ph_symptoms,
                ad_dress_yourself,
                ad_get_in_out_bed,
                ad_lift_full_cup_mouth,
                ad_walk_outdoor_flat,
                ad_wash_dry_body,
                ad_pick_clothing_floor,
                ad_turn_faucets_on_off,
                ad_get_in_out_car_bus_train_plane,
                ad_walk_two_miles,
                ad_recreational_activities_sports,
                ad_good_night_sleep,
                ad_deal_anxiety_nervous,
                ad_deal_depression_blue,
                ad_daily_pain_scale,
                ad_how_well_doing_scale,
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
      </Grid>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid6")}
      >
        <TextField
          label="State *"
          isRequired={true}
          isReadOnly={false}
          value={state}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                date,
                last_name,
                first_name,
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
                occupation,
                full_time,
                preferred_pharmacy,
                insurance_primary_name,
                insurance_primary_id,
                insurance_primary_group,
                insurance_primary_address,
                insurance_primary_phone,
                insurance_primary_insured_person,
                insurance_primary_insured_person_relation,
                insurance_primary_insured_person_dob,
                insurance_secondary,
                insurance_secondary_id,
                insurance_secondary_group,
                insurance_secondary_address,
                insurance_secondary_phone,
                primary_care_physician_name,
                primary_care_physician_phone,
                referring_physician_name,
                referring_physician_phone,
                emergency_contact_name,
                emergency_contact_phone,
                emergency_contact_relationship,
                signature_page_1,
                signature_page_1_date,
                ph_briefly_describe_present_symptoms,
                ph_previous_treatment_for_problem,
                ph_current_medicines,
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
                ph_drugs,
                ph_alcohol,
                ph_alcohol_weekly,
                ph_sleep,
                ph_exercise,
                ph_travel,
                ph_pregnant,
                ph_live_births,
                ph_complications,
                ad_people_in_household,
                ph_symptoms,
                ad_dress_yourself,
                ad_get_in_out_bed,
                ad_lift_full_cup_mouth,
                ad_walk_outdoor_flat,
                ad_wash_dry_body,
                ad_pick_clothing_floor,
                ad_turn_faucets_on_off,
                ad_get_in_out_car_bus_train_plane,
                ad_walk_two_miles,
                ad_recreational_activities_sports,
                ad_good_night_sleep,
                ad_deal_anxiety_nervous,
                ad_deal_depression_blue,
                ad_daily_pain_scale,
                ad_how_well_doing_scale,
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
          label="Zip *"
          isRequired={true}
          isReadOnly={false}
          value={zip}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                date,
                last_name,
                first_name,
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
                occupation,
                full_time,
                preferred_pharmacy,
                insurance_primary_name,
                insurance_primary_id,
                insurance_primary_group,
                insurance_primary_address,
                insurance_primary_phone,
                insurance_primary_insured_person,
                insurance_primary_insured_person_relation,
                insurance_primary_insured_person_dob,
                insurance_secondary,
                insurance_secondary_id,
                insurance_secondary_group,
                insurance_secondary_address,
                insurance_secondary_phone,
                primary_care_physician_name,
                primary_care_physician_phone,
                referring_physician_name,
                referring_physician_phone,
                emergency_contact_name,
                emergency_contact_phone,
                emergency_contact_relationship,
                signature_page_1,
                signature_page_1_date,
                ph_briefly_describe_present_symptoms,
                ph_previous_treatment_for_problem,
                ph_current_medicines,
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
                ph_drugs,
                ph_alcohol,
                ph_alcohol_weekly,
                ph_sleep,
                ph_exercise,
                ph_travel,
                ph_pregnant,
                ph_live_births,
                ph_complications,
                ad_people_in_household,
                ph_symptoms,
                ad_dress_yourself,
                ad_get_in_out_bed,
                ad_lift_full_cup_mouth,
                ad_walk_outdoor_flat,
                ad_wash_dry_body,
                ad_pick_clothing_floor,
                ad_turn_faucets_on_off,
                ad_get_in_out_car_bus_train_plane,
                ad_walk_two_miles,
                ad_recreational_activities_sports,
                ad_good_night_sleep,
                ad_deal_anxiety_nervous,
                ad_deal_depression_blue,
                ad_daily_pain_scale,
                ad_how_well_doing_scale,
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
      </Grid>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(3, auto)"
        {...getOverrideProps(overrides, "RowGrid7")}
      >
        <TextField
          label="Home phone *"
          isRequired={true}
          isReadOnly={false}
          type="tel"
          value={home_phone}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                date,
                last_name,
                first_name,
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
                occupation,
                full_time,
                preferred_pharmacy,
                insurance_primary_name,
                insurance_primary_id,
                insurance_primary_group,
                insurance_primary_address,
                insurance_primary_phone,
                insurance_primary_insured_person,
                insurance_primary_insured_person_relation,
                insurance_primary_insured_person_dob,
                insurance_secondary,
                insurance_secondary_id,
                insurance_secondary_group,
                insurance_secondary_address,
                insurance_secondary_phone,
                primary_care_physician_name,
                primary_care_physician_phone,
                referring_physician_name,
                referring_physician_phone,
                emergency_contact_name,
                emergency_contact_phone,
                emergency_contact_relationship,
                signature_page_1,
                signature_page_1_date,
                ph_briefly_describe_present_symptoms,
                ph_previous_treatment_for_problem,
                ph_current_medicines,
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
                ph_drugs,
                ph_alcohol,
                ph_alcohol_weekly,
                ph_sleep,
                ph_exercise,
                ph_travel,
                ph_pregnant,
                ph_live_births,
                ph_complications,
                ad_people_in_household,
                ph_symptoms,
                ad_dress_yourself,
                ad_get_in_out_bed,
                ad_lift_full_cup_mouth,
                ad_walk_outdoor_flat,
                ad_wash_dry_body,
                ad_pick_clothing_floor,
                ad_turn_faucets_on_off,
                ad_get_in_out_car_bus_train_plane,
                ad_walk_two_miles,
                ad_recreational_activities_sports,
                ad_good_night_sleep,
                ad_deal_anxiety_nervous,
                ad_deal_depression_blue,
                ad_daily_pain_scale,
                ad_how_well_doing_scale,
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
                last_name,
                first_name,
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
                occupation,
                full_time,
                preferred_pharmacy,
                insurance_primary_name,
                insurance_primary_id,
                insurance_primary_group,
                insurance_primary_address,
                insurance_primary_phone,
                insurance_primary_insured_person,
                insurance_primary_insured_person_relation,
                insurance_primary_insured_person_dob,
                insurance_secondary,
                insurance_secondary_id,
                insurance_secondary_group,
                insurance_secondary_address,
                insurance_secondary_phone,
                primary_care_physician_name,
                primary_care_physician_phone,
                referring_physician_name,
                referring_physician_phone,
                emergency_contact_name,
                emergency_contact_phone,
                emergency_contact_relationship,
                signature_page_1,
                signature_page_1_date,
                ph_briefly_describe_present_symptoms,
                ph_previous_treatment_for_problem,
                ph_current_medicines,
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
                ph_drugs,
                ph_alcohol,
                ph_alcohol_weekly,
                ph_sleep,
                ph_exercise,
                ph_travel,
                ph_pregnant,
                ph_live_births,
                ph_complications,
                ad_people_in_household,
                ph_symptoms,
                ad_dress_yourself,
                ad_get_in_out_bed,
                ad_lift_full_cup_mouth,
                ad_walk_outdoor_flat,
                ad_wash_dry_body,
                ad_pick_clothing_floor,
                ad_turn_faucets_on_off,
                ad_get_in_out_car_bus_train_plane,
                ad_walk_two_miles,
                ad_recreational_activities_sports,
                ad_good_night_sleep,
                ad_deal_anxiety_nervous,
                ad_deal_depression_blue,
                ad_daily_pain_scale,
                ad_how_well_doing_scale,
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
                last_name,
                first_name,
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
                occupation,
                full_time,
                preferred_pharmacy,
                insurance_primary_name,
                insurance_primary_id,
                insurance_primary_group,
                insurance_primary_address,
                insurance_primary_phone,
                insurance_primary_insured_person,
                insurance_primary_insured_person_relation,
                insurance_primary_insured_person_dob,
                insurance_secondary,
                insurance_secondary_id,
                insurance_secondary_group,
                insurance_secondary_address,
                insurance_secondary_phone,
                primary_care_physician_name,
                primary_care_physician_phone,
                referring_physician_name,
                referring_physician_phone,
                emergency_contact_name,
                emergency_contact_phone,
                emergency_contact_relationship,
                signature_page_1,
                signature_page_1_date,
                ph_briefly_describe_present_symptoms,
                ph_previous_treatment_for_problem,
                ph_current_medicines,
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
                ph_drugs,
                ph_alcohol,
                ph_alcohol_weekly,
                ph_sleep,
                ph_exercise,
                ph_travel,
                ph_pregnant,
                ph_live_births,
                ph_complications,
                ad_people_in_household,
                ph_symptoms,
                ad_dress_yourself,
                ad_get_in_out_bed,
                ad_lift_full_cup_mouth,
                ad_walk_outdoor_flat,
                ad_wash_dry_body,
                ad_pick_clothing_floor,
                ad_turn_faucets_on_off,
                ad_get_in_out_car_bus_train_plane,
                ad_walk_two_miles,
                ad_recreational_activities_sports,
                ad_good_night_sleep,
                ad_deal_anxiety_nervous,
                ad_deal_depression_blue,
                ad_daily_pain_scale,
                ad_how_well_doing_scale,
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
      </Grid>
      <TextField
        label="Email * (A copy of responses to this form will be sent here)"
        isRequired={true}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              last_name,
              first_name,
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
              occupation,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_primary_insured_person_dob,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              primary_care_physician_phone,
              referring_physician_name,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicines,
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
              ph_drugs,
              ph_alcohol,
              ph_alcohol_weekly,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ad_people_in_household,
              ph_symptoms,
              ad_dress_yourself,
              ad_get_in_out_bed,
              ad_lift_full_cup_mouth,
              ad_walk_outdoor_flat,
              ad_wash_dry_body,
              ad_pick_clothing_floor,
              ad_turn_faucets_on_off,
              ad_get_in_out_car_bus_train_plane,
              ad_walk_two_miles,
              ad_recreational_activities_sports,
              ad_good_night_sleep,
              ad_deal_anxiety_nervous,
              ad_deal_depression_blue,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
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
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid9")}
      >
        <TextField
          label="Social security #"
          isRequired={false}
          isReadOnly={false}
          value={social_security}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                date,
                last_name,
                first_name,
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
                occupation,
                full_time,
                preferred_pharmacy,
                insurance_primary_name,
                insurance_primary_id,
                insurance_primary_group,
                insurance_primary_address,
                insurance_primary_phone,
                insurance_primary_insured_person,
                insurance_primary_insured_person_relation,
                insurance_primary_insured_person_dob,
                insurance_secondary,
                insurance_secondary_id,
                insurance_secondary_group,
                insurance_secondary_address,
                insurance_secondary_phone,
                primary_care_physician_name,
                primary_care_physician_phone,
                referring_physician_name,
                referring_physician_phone,
                emergency_contact_name,
                emergency_contact_phone,
                emergency_contact_relationship,
                signature_page_1,
                signature_page_1_date,
                ph_briefly_describe_present_symptoms,
                ph_previous_treatment_for_problem,
                ph_current_medicines,
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
                ph_drugs,
                ph_alcohol,
                ph_alcohol_weekly,
                ph_sleep,
                ph_exercise,
                ph_travel,
                ph_pregnant,
                ph_live_births,
                ph_complications,
                ad_people_in_household,
                ph_symptoms,
                ad_dress_yourself,
                ad_get_in_out_bed,
                ad_lift_full_cup_mouth,
                ad_walk_outdoor_flat,
                ad_wash_dry_body,
                ad_pick_clothing_floor,
                ad_turn_faucets_on_off,
                ad_get_in_out_car_bus_train_plane,
                ad_walk_two_miles,
                ad_recreational_activities_sports,
                ad_good_night_sleep,
                ad_deal_anxiety_nervous,
                ad_deal_depression_blue,
                ad_daily_pain_scale,
                ad_how_well_doing_scale,
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
                last_name,
                first_name,
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
                occupation,
                full_time,
                preferred_pharmacy,
                insurance_primary_name,
                insurance_primary_id,
                insurance_primary_group,
                insurance_primary_address,
                insurance_primary_phone,
                insurance_primary_insured_person,
                insurance_primary_insured_person_relation,
                insurance_primary_insured_person_dob,
                insurance_secondary,
                insurance_secondary_id,
                insurance_secondary_group,
                insurance_secondary_address,
                insurance_secondary_phone,
                primary_care_physician_name,
                primary_care_physician_phone,
                referring_physician_name,
                referring_physician_phone,
                emergency_contact_name,
                emergency_contact_phone,
                emergency_contact_relationship,
                signature_page_1,
                signature_page_1_date,
                ph_briefly_describe_present_symptoms,
                ph_previous_treatment_for_problem,
                ph_current_medicines,
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
                ph_drugs,
                ph_alcohol,
                ph_alcohol_weekly,
                ph_sleep,
                ph_exercise,
                ph_travel,
                ph_pregnant,
                ph_live_births,
                ph_complications,
                ad_people_in_household,
                ph_symptoms,
                ad_dress_yourself,
                ad_get_in_out_bed,
                ad_lift_full_cup_mouth,
                ad_walk_outdoor_flat,
                ad_wash_dry_body,
                ad_pick_clothing_floor,
                ad_turn_faucets_on_off,
                ad_get_in_out_car_bus_train_plane,
                ad_walk_two_miles,
                ad_recreational_activities_sports,
                ad_good_night_sleep,
                ad_deal_anxiety_nervous,
                ad_deal_depression_blue,
                ad_daily_pain_scale,
                ad_how_well_doing_scale,
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
      </Grid>
      <SelectField
        label="Education *"
        placeholder="Please select an option"
        isDisabled={false}
        value={education}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              last_name,
              first_name,
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
              occupation,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_primary_insured_person_dob,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              primary_care_physician_phone,
              referring_physician_name,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicines,
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
              ph_drugs,
              ph_alcohol,
              ph_alcohol_weekly,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ad_people_in_household,
              ph_symptoms,
              ad_dress_yourself,
              ad_get_in_out_bed,
              ad_lift_full_cup_mouth,
              ad_walk_outdoor_flat,
              ad_wash_dry_body,
              ad_pick_clothing_floor,
              ad_turn_faucets_on_off,
              ad_get_in_out_car_bus_train_plane,
              ad_walk_two_miles,
              ad_recreational_activities_sports,
              ad_good_night_sleep,
              ad_deal_anxiety_nervous,
              ad_deal_depression_blue,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
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
      >
        <option
          children="Other"
          value="Other"
          {...getOverrideProps(overrides, "educationoption0")}
        ></option>
        <option
          children="High School"
          value="High School"
          {...getOverrideProps(overrides, "educationoption1")}
        ></option>
        <option
          children="College"
          value="College"
          {...getOverrideProps(overrides, "educationoption2")}
        ></option>
        <option
          children="Grad School"
          value="Grad School"
          {...getOverrideProps(overrides, "educationoption3")}
        ></option>
      </SelectField>
      <SwitchField
        label="Are you a veteran? * "
        defaultChecked={false}
        isDisabled={false}
        isChecked={veteran}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              date,
              last_name,
              first_name,
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
              occupation,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_primary_insured_person_dob,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              primary_care_physician_phone,
              referring_physician_name,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicines,
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
              ph_drugs,
              ph_alcohol,
              ph_alcohol_weekly,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ad_people_in_household,
              ph_symptoms,
              ad_dress_yourself,
              ad_get_in_out_bed,
              ad_lift_full_cup_mouth,
              ad_walk_outdoor_flat,
              ad_wash_dry_body,
              ad_pick_clothing_floor,
              ad_turn_faucets_on_off,
              ad_get_in_out_car_bus_train_plane,
              ad_walk_two_miles,
              ad_recreational_activities_sports,
              ad_good_night_sleep,
              ad_deal_anxiety_nervous,
              ad_deal_depression_blue,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
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
        label="Occupation *"
        isRequired={true}
        isReadOnly={false}
        value={occupation}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              last_name,
              first_name,
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
              occupation: value,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_primary_insured_person_dob,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              primary_care_physician_phone,
              referring_physician_name,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicines,
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
              ph_drugs,
              ph_alcohol,
              ph_alcohol_weekly,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ad_people_in_household,
              ph_symptoms,
              ad_dress_yourself,
              ad_get_in_out_bed,
              ad_lift_full_cup_mouth,
              ad_walk_outdoor_flat,
              ad_wash_dry_body,
              ad_pick_clothing_floor,
              ad_turn_faucets_on_off,
              ad_get_in_out_car_bus_train_plane,
              ad_walk_two_miles,
              ad_recreational_activities_sports,
              ad_good_night_sleep,
              ad_deal_anxiety_nervous,
              ad_deal_depression_blue,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
            };
            const result = onChange(modelFields);
            value = result?.occupation ?? value;
          }
          if (errors.occupation?.hasError) {
            runValidationTasks("occupation", value);
          }
          setOccupation(value);
        }}
        onBlur={() => runValidationTasks("occupation", occupation)}
        errorMessage={errors.occupation?.errorMessage}
        hasError={errors.occupation?.hasError}
        {...getOverrideProps(overrides, "occupation")}
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
              last_name,
              first_name,
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
              occupation,
              full_time: value,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_primary_insured_person_dob,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              primary_care_physician_phone,
              referring_physician_name,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicines,
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
              ph_drugs,
              ph_alcohol,
              ph_alcohol_weekly,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ad_people_in_household,
              ph_symptoms,
              ad_dress_yourself,
              ad_get_in_out_bed,
              ad_lift_full_cup_mouth,
              ad_walk_outdoor_flat,
              ad_wash_dry_body,
              ad_pick_clothing_floor,
              ad_turn_faucets_on_off,
              ad_get_in_out_car_bus_train_plane,
              ad_walk_two_miles,
              ad_recreational_activities_sports,
              ad_good_night_sleep,
              ad_deal_anxiety_nervous,
              ad_deal_depression_blue,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
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
        label="Preferred pharmacy & Address/ Phone #"
        isRequired={false}
        isReadOnly={false}
        value={preferred_pharmacy}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              last_name,
              first_name,
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
              occupation,
              full_time,
              preferred_pharmacy: value,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_primary_insured_person_dob,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              primary_care_physician_phone,
              referring_physician_name,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicines,
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
              ph_drugs,
              ph_alcohol,
              ph_alcohol_weekly,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ad_people_in_household,
              ph_symptoms,
              ad_dress_yourself,
              ad_get_in_out_bed,
              ad_lift_full_cup_mouth,
              ad_walk_outdoor_flat,
              ad_wash_dry_body,
              ad_pick_clothing_floor,
              ad_turn_faucets_on_off,
              ad_get_in_out_car_bus_train_plane,
              ad_walk_two_miles,
              ad_recreational_activities_sports,
              ad_good_night_sleep,
              ad_deal_anxiety_nervous,
              ad_deal_depression_blue,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
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
      <Divider
        orientation="horizontal"
        {...getOverrideProps(overrides, "SectionalElement3")}
      ></Divider>
      <Heading
        level={4}
        children="Insurance Information"
        {...getOverrideProps(overrides, "SectionalElement1")}
      ></Heading>
      <TextField
        label="Name of Primary Insurance *"
        isRequired={true}
        isReadOnly={false}
        value={insurance_primary_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              last_name,
              first_name,
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
              occupation,
              full_time,
              preferred_pharmacy,
              insurance_primary_name: value,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_primary_insured_person_dob,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              primary_care_physician_phone,
              referring_physician_name,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicines,
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
              ph_drugs,
              ph_alcohol,
              ph_alcohol_weekly,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ad_people_in_household,
              ph_symptoms,
              ad_dress_yourself,
              ad_get_in_out_bed,
              ad_lift_full_cup_mouth,
              ad_walk_outdoor_flat,
              ad_wash_dry_body,
              ad_pick_clothing_floor,
              ad_turn_faucets_on_off,
              ad_get_in_out_car_bus_train_plane,
              ad_walk_two_miles,
              ad_recreational_activities_sports,
              ad_good_night_sleep,
              ad_deal_anxiety_nervous,
              ad_deal_depression_blue,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
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
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid18")}
      >
        <TextField
          label="ID # *"
          isRequired={true}
          isReadOnly={false}
          value={insurance_primary_id}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                date,
                last_name,
                first_name,
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
                occupation,
                full_time,
                preferred_pharmacy,
                insurance_primary_name,
                insurance_primary_id: value,
                insurance_primary_group,
                insurance_primary_address,
                insurance_primary_phone,
                insurance_primary_insured_person,
                insurance_primary_insured_person_relation,
                insurance_primary_insured_person_dob,
                insurance_secondary,
                insurance_secondary_id,
                insurance_secondary_group,
                insurance_secondary_address,
                insurance_secondary_phone,
                primary_care_physician_name,
                primary_care_physician_phone,
                referring_physician_name,
                referring_physician_phone,
                emergency_contact_name,
                emergency_contact_phone,
                emergency_contact_relationship,
                signature_page_1,
                signature_page_1_date,
                ph_briefly_describe_present_symptoms,
                ph_previous_treatment_for_problem,
                ph_current_medicines,
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
                ph_drugs,
                ph_alcohol,
                ph_alcohol_weekly,
                ph_sleep,
                ph_exercise,
                ph_travel,
                ph_pregnant,
                ph_live_births,
                ph_complications,
                ad_people_in_household,
                ph_symptoms,
                ad_dress_yourself,
                ad_get_in_out_bed,
                ad_lift_full_cup_mouth,
                ad_walk_outdoor_flat,
                ad_wash_dry_body,
                ad_pick_clothing_floor,
                ad_turn_faucets_on_off,
                ad_get_in_out_car_bus_train_plane,
                ad_walk_two_miles,
                ad_recreational_activities_sports,
                ad_good_night_sleep,
                ad_deal_anxiety_nervous,
                ad_deal_depression_blue,
                ad_daily_pain_scale,
                ad_how_well_doing_scale,
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
          label="Group # *"
          isRequired={true}
          isReadOnly={false}
          value={insurance_primary_group}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                date,
                last_name,
                first_name,
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
                occupation,
                full_time,
                preferred_pharmacy,
                insurance_primary_name,
                insurance_primary_id,
                insurance_primary_group: value,
                insurance_primary_address,
                insurance_primary_phone,
                insurance_primary_insured_person,
                insurance_primary_insured_person_relation,
                insurance_primary_insured_person_dob,
                insurance_secondary,
                insurance_secondary_id,
                insurance_secondary_group,
                insurance_secondary_address,
                insurance_secondary_phone,
                primary_care_physician_name,
                primary_care_physician_phone,
                referring_physician_name,
                referring_physician_phone,
                emergency_contact_name,
                emergency_contact_phone,
                emergency_contact_relationship,
                signature_page_1,
                signature_page_1_date,
                ph_briefly_describe_present_symptoms,
                ph_previous_treatment_for_problem,
                ph_current_medicines,
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
                ph_drugs,
                ph_alcohol,
                ph_alcohol_weekly,
                ph_sleep,
                ph_exercise,
                ph_travel,
                ph_pregnant,
                ph_live_births,
                ph_complications,
                ad_people_in_household,
                ph_symptoms,
                ad_dress_yourself,
                ad_get_in_out_bed,
                ad_lift_full_cup_mouth,
                ad_walk_outdoor_flat,
                ad_wash_dry_body,
                ad_pick_clothing_floor,
                ad_turn_faucets_on_off,
                ad_get_in_out_car_bus_train_plane,
                ad_walk_two_miles,
                ad_recreational_activities_sports,
                ad_good_night_sleep,
                ad_deal_anxiety_nervous,
                ad_deal_depression_blue,
                ad_daily_pain_scale,
                ad_how_well_doing_scale,
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
            runValidationTasks(
              "insurance_primary_group",
              insurance_primary_group
            )
          }
          errorMessage={errors.insurance_primary_group?.errorMessage}
          hasError={errors.insurance_primary_group?.hasError}
          {...getOverrideProps(overrides, "insurance_primary_group")}
        ></TextField>
      </Grid>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid19")}
      >
        <TextField
          label="Insurance Address"
          isRequired={false}
          isReadOnly={false}
          value={insurance_primary_address}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                date,
                last_name,
                first_name,
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
                occupation,
                full_time,
                preferred_pharmacy,
                insurance_primary_name,
                insurance_primary_id,
                insurance_primary_group,
                insurance_primary_address: value,
                insurance_primary_phone,
                insurance_primary_insured_person,
                insurance_primary_insured_person_relation,
                insurance_primary_insured_person_dob,
                insurance_secondary,
                insurance_secondary_id,
                insurance_secondary_group,
                insurance_secondary_address,
                insurance_secondary_phone,
                primary_care_physician_name,
                primary_care_physician_phone,
                referring_physician_name,
                referring_physician_phone,
                emergency_contact_name,
                emergency_contact_phone,
                emergency_contact_relationship,
                signature_page_1,
                signature_page_1_date,
                ph_briefly_describe_present_symptoms,
                ph_previous_treatment_for_problem,
                ph_current_medicines,
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
                ph_drugs,
                ph_alcohol,
                ph_alcohol_weekly,
                ph_sleep,
                ph_exercise,
                ph_travel,
                ph_pregnant,
                ph_live_births,
                ph_complications,
                ad_people_in_household,
                ph_symptoms,
                ad_dress_yourself,
                ad_get_in_out_bed,
                ad_lift_full_cup_mouth,
                ad_walk_outdoor_flat,
                ad_wash_dry_body,
                ad_pick_clothing_floor,
                ad_turn_faucets_on_off,
                ad_get_in_out_car_bus_train_plane,
                ad_walk_two_miles,
                ad_recreational_activities_sports,
                ad_good_night_sleep,
                ad_deal_anxiety_nervous,
                ad_deal_depression_blue,
                ad_daily_pain_scale,
                ad_how_well_doing_scale,
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
          label="Phone #"
          isRequired={false}
          isReadOnly={false}
          type="tel"
          value={insurance_primary_phone}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                date,
                last_name,
                first_name,
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
                occupation,
                full_time,
                preferred_pharmacy,
                insurance_primary_name,
                insurance_primary_id,
                insurance_primary_group,
                insurance_primary_address,
                insurance_primary_phone: value,
                insurance_primary_insured_person,
                insurance_primary_insured_person_relation,
                insurance_primary_insured_person_dob,
                insurance_secondary,
                insurance_secondary_id,
                insurance_secondary_group,
                insurance_secondary_address,
                insurance_secondary_phone,
                primary_care_physician_name,
                primary_care_physician_phone,
                referring_physician_name,
                referring_physician_phone,
                emergency_contact_name,
                emergency_contact_phone,
                emergency_contact_relationship,
                signature_page_1,
                signature_page_1_date,
                ph_briefly_describe_present_symptoms,
                ph_previous_treatment_for_problem,
                ph_current_medicines,
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
                ph_drugs,
                ph_alcohol,
                ph_alcohol_weekly,
                ph_sleep,
                ph_exercise,
                ph_travel,
                ph_pregnant,
                ph_live_births,
                ph_complications,
                ad_people_in_household,
                ph_symptoms,
                ad_dress_yourself,
                ad_get_in_out_bed,
                ad_lift_full_cup_mouth,
                ad_walk_outdoor_flat,
                ad_wash_dry_body,
                ad_pick_clothing_floor,
                ad_turn_faucets_on_off,
                ad_get_in_out_car_bus_train_plane,
                ad_walk_two_miles,
                ad_recreational_activities_sports,
                ad_good_night_sleep,
                ad_deal_anxiety_nervous,
                ad_deal_depression_blue,
                ad_daily_pain_scale,
                ad_how_well_doing_scale,
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
            runValidationTasks(
              "insurance_primary_phone",
              insurance_primary_phone
            )
          }
          errorMessage={errors.insurance_primary_phone?.errorMessage}
          hasError={errors.insurance_primary_phone?.hasError}
          {...getOverrideProps(overrides, "insurance_primary_phone")}
        ></TextField>
      </Grid>
      <TextField
        label="If other than self, Name of Insured Person"
        isRequired={false}
        isReadOnly={false}
        value={insurance_primary_insured_person}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              last_name,
              first_name,
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
              occupation,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person: value,
              insurance_primary_insured_person_relation,
              insurance_primary_insured_person_dob,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              primary_care_physician_phone,
              referring_physician_name,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicines,
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
              ph_drugs,
              ph_alcohol,
              ph_alcohol_weekly,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ad_people_in_household,
              ph_symptoms,
              ad_dress_yourself,
              ad_get_in_out_bed,
              ad_lift_full_cup_mouth,
              ad_walk_outdoor_flat,
              ad_wash_dry_body,
              ad_pick_clothing_floor,
              ad_turn_faucets_on_off,
              ad_get_in_out_car_bus_train_plane,
              ad_walk_two_miles,
              ad_recreational_activities_sports,
              ad_good_night_sleep,
              ad_deal_anxiety_nervous,
              ad_deal_depression_blue,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
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
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid21")}
      >
        <TextField
          label="Relation to Insured Person"
          isRequired={false}
          isReadOnly={false}
          value={insurance_primary_insured_person_relation}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                date,
                last_name,
                first_name,
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
                occupation,
                full_time,
                preferred_pharmacy,
                insurance_primary_name,
                insurance_primary_id,
                insurance_primary_group,
                insurance_primary_address,
                insurance_primary_phone,
                insurance_primary_insured_person,
                insurance_primary_insured_person_relation: value,
                insurance_primary_insured_person_dob,
                insurance_secondary,
                insurance_secondary_id,
                insurance_secondary_group,
                insurance_secondary_address,
                insurance_secondary_phone,
                primary_care_physician_name,
                primary_care_physician_phone,
                referring_physician_name,
                referring_physician_phone,
                emergency_contact_name,
                emergency_contact_phone,
                emergency_contact_relationship,
                signature_page_1,
                signature_page_1_date,
                ph_briefly_describe_present_symptoms,
                ph_previous_treatment_for_problem,
                ph_current_medicines,
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
                ph_drugs,
                ph_alcohol,
                ph_alcohol_weekly,
                ph_sleep,
                ph_exercise,
                ph_travel,
                ph_pregnant,
                ph_live_births,
                ph_complications,
                ad_people_in_household,
                ph_symptoms,
                ad_dress_yourself,
                ad_get_in_out_bed,
                ad_lift_full_cup_mouth,
                ad_walk_outdoor_flat,
                ad_wash_dry_body,
                ad_pick_clothing_floor,
                ad_turn_faucets_on_off,
                ad_get_in_out_car_bus_train_plane,
                ad_walk_two_miles,
                ad_recreational_activities_sports,
                ad_good_night_sleep,
                ad_deal_anxiety_nervous,
                ad_deal_depression_blue,
                ad_daily_pain_scale,
                ad_how_well_doing_scale,
              };
              const result = onChange(modelFields);
              value =
                result?.insurance_primary_insured_person_relation ?? value;
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
          label="Birthdate of Insured Person"
          isRequired={false}
          isReadOnly={false}
          type="date"
          value={insurance_primary_insured_person_dob}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                date,
                last_name,
                first_name,
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
                occupation,
                full_time,
                preferred_pharmacy,
                insurance_primary_name,
                insurance_primary_id,
                insurance_primary_group,
                insurance_primary_address,
                insurance_primary_phone,
                insurance_primary_insured_person,
                insurance_primary_insured_person_relation,
                insurance_primary_insured_person_dob: value,
                insurance_secondary,
                insurance_secondary_id,
                insurance_secondary_group,
                insurance_secondary_address,
                insurance_secondary_phone,
                primary_care_physician_name,
                primary_care_physician_phone,
                referring_physician_name,
                referring_physician_phone,
                emergency_contact_name,
                emergency_contact_phone,
                emergency_contact_relationship,
                signature_page_1,
                signature_page_1_date,
                ph_briefly_describe_present_symptoms,
                ph_previous_treatment_for_problem,
                ph_current_medicines,
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
                ph_drugs,
                ph_alcohol,
                ph_alcohol_weekly,
                ph_sleep,
                ph_exercise,
                ph_travel,
                ph_pregnant,
                ph_live_births,
                ph_complications,
                ad_people_in_household,
                ph_symptoms,
                ad_dress_yourself,
                ad_get_in_out_bed,
                ad_lift_full_cup_mouth,
                ad_walk_outdoor_flat,
                ad_wash_dry_body,
                ad_pick_clothing_floor,
                ad_turn_faucets_on_off,
                ad_get_in_out_car_bus_train_plane,
                ad_walk_two_miles,
                ad_recreational_activities_sports,
                ad_good_night_sleep,
                ad_deal_anxiety_nervous,
                ad_deal_depression_blue,
                ad_daily_pain_scale,
                ad_how_well_doing_scale,
              };
              const result = onChange(modelFields);
              value = result?.insurance_primary_insured_person_dob ?? value;
            }
            if (errors.insurance_primary_insured_person_dob?.hasError) {
              runValidationTasks("insurance_primary_insured_person_dob", value);
            }
            setInsurance_primary_insured_person_dob(value);
          }}
          onBlur={() =>
            runValidationTasks(
              "insurance_primary_insured_person_dob",
              insurance_primary_insured_person_dob
            )
          }
          errorMessage={
            errors.insurance_primary_insured_person_dob?.errorMessage
          }
          hasError={errors.insurance_primary_insured_person_dob?.hasError}
          {...getOverrideProps(
            overrides,
            "insurance_primary_insured_person_dob"
          )}
        ></TextField>
      </Grid>
      <TextField
        label="Name of Secondary Insurance"
        isRequired={false}
        isReadOnly={false}
        value={insurance_secondary}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              last_name,
              first_name,
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
              occupation,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_primary_insured_person_dob,
              insurance_secondary: value,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              primary_care_physician_phone,
              referring_physician_name,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicines,
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
              ph_drugs,
              ph_alcohol,
              ph_alcohol_weekly,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ad_people_in_household,
              ph_symptoms,
              ad_dress_yourself,
              ad_get_in_out_bed,
              ad_lift_full_cup_mouth,
              ad_walk_outdoor_flat,
              ad_wash_dry_body,
              ad_pick_clothing_floor,
              ad_turn_faucets_on_off,
              ad_get_in_out_car_bus_train_plane,
              ad_walk_two_miles,
              ad_recreational_activities_sports,
              ad_good_night_sleep,
              ad_deal_anxiety_nervous,
              ad_deal_depression_blue,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
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
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid23")}
      >
        <TextField
          label="ID #"
          isRequired={false}
          isReadOnly={false}
          value={insurance_secondary_id}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                date,
                last_name,
                first_name,
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
                occupation,
                full_time,
                preferred_pharmacy,
                insurance_primary_name,
                insurance_primary_id,
                insurance_primary_group,
                insurance_primary_address,
                insurance_primary_phone,
                insurance_primary_insured_person,
                insurance_primary_insured_person_relation,
                insurance_primary_insured_person_dob,
                insurance_secondary,
                insurance_secondary_id: value,
                insurance_secondary_group,
                insurance_secondary_address,
                insurance_secondary_phone,
                primary_care_physician_name,
                primary_care_physician_phone,
                referring_physician_name,
                referring_physician_phone,
                emergency_contact_name,
                emergency_contact_phone,
                emergency_contact_relationship,
                signature_page_1,
                signature_page_1_date,
                ph_briefly_describe_present_symptoms,
                ph_previous_treatment_for_problem,
                ph_current_medicines,
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
                ph_drugs,
                ph_alcohol,
                ph_alcohol_weekly,
                ph_sleep,
                ph_exercise,
                ph_travel,
                ph_pregnant,
                ph_live_births,
                ph_complications,
                ad_people_in_household,
                ph_symptoms,
                ad_dress_yourself,
                ad_get_in_out_bed,
                ad_lift_full_cup_mouth,
                ad_walk_outdoor_flat,
                ad_wash_dry_body,
                ad_pick_clothing_floor,
                ad_turn_faucets_on_off,
                ad_get_in_out_car_bus_train_plane,
                ad_walk_two_miles,
                ad_recreational_activities_sports,
                ad_good_night_sleep,
                ad_deal_anxiety_nervous,
                ad_deal_depression_blue,
                ad_daily_pain_scale,
                ad_how_well_doing_scale,
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
          label="Group #"
          isRequired={false}
          isReadOnly={false}
          value={insurance_secondary_group}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                date,
                last_name,
                first_name,
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
                occupation,
                full_time,
                preferred_pharmacy,
                insurance_primary_name,
                insurance_primary_id,
                insurance_primary_group,
                insurance_primary_address,
                insurance_primary_phone,
                insurance_primary_insured_person,
                insurance_primary_insured_person_relation,
                insurance_primary_insured_person_dob,
                insurance_secondary,
                insurance_secondary_id,
                insurance_secondary_group: value,
                insurance_secondary_address,
                insurance_secondary_phone,
                primary_care_physician_name,
                primary_care_physician_phone,
                referring_physician_name,
                referring_physician_phone,
                emergency_contact_name,
                emergency_contact_phone,
                emergency_contact_relationship,
                signature_page_1,
                signature_page_1_date,
                ph_briefly_describe_present_symptoms,
                ph_previous_treatment_for_problem,
                ph_current_medicines,
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
                ph_drugs,
                ph_alcohol,
                ph_alcohol_weekly,
                ph_sleep,
                ph_exercise,
                ph_travel,
                ph_pregnant,
                ph_live_births,
                ph_complications,
                ad_people_in_household,
                ph_symptoms,
                ad_dress_yourself,
                ad_get_in_out_bed,
                ad_lift_full_cup_mouth,
                ad_walk_outdoor_flat,
                ad_wash_dry_body,
                ad_pick_clothing_floor,
                ad_turn_faucets_on_off,
                ad_get_in_out_car_bus_train_plane,
                ad_walk_two_miles,
                ad_recreational_activities_sports,
                ad_good_night_sleep,
                ad_deal_anxiety_nervous,
                ad_deal_depression_blue,
                ad_daily_pain_scale,
                ad_how_well_doing_scale,
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
      </Grid>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid24")}
      >
        <TextField
          label="Insurance Address"
          isRequired={false}
          isReadOnly={false}
          value={insurance_secondary_address}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                date,
                last_name,
                first_name,
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
                occupation,
                full_time,
                preferred_pharmacy,
                insurance_primary_name,
                insurance_primary_id,
                insurance_primary_group,
                insurance_primary_address,
                insurance_primary_phone,
                insurance_primary_insured_person,
                insurance_primary_insured_person_relation,
                insurance_primary_insured_person_dob,
                insurance_secondary,
                insurance_secondary_id,
                insurance_secondary_group,
                insurance_secondary_address: value,
                insurance_secondary_phone,
                primary_care_physician_name,
                primary_care_physician_phone,
                referring_physician_name,
                referring_physician_phone,
                emergency_contact_name,
                emergency_contact_phone,
                emergency_contact_relationship,
                signature_page_1,
                signature_page_1_date,
                ph_briefly_describe_present_symptoms,
                ph_previous_treatment_for_problem,
                ph_current_medicines,
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
                ph_drugs,
                ph_alcohol,
                ph_alcohol_weekly,
                ph_sleep,
                ph_exercise,
                ph_travel,
                ph_pregnant,
                ph_live_births,
                ph_complications,
                ad_people_in_household,
                ph_symptoms,
                ad_dress_yourself,
                ad_get_in_out_bed,
                ad_lift_full_cup_mouth,
                ad_walk_outdoor_flat,
                ad_wash_dry_body,
                ad_pick_clothing_floor,
                ad_turn_faucets_on_off,
                ad_get_in_out_car_bus_train_plane,
                ad_walk_two_miles,
                ad_recreational_activities_sports,
                ad_good_night_sleep,
                ad_deal_anxiety_nervous,
                ad_deal_depression_blue,
                ad_daily_pain_scale,
                ad_how_well_doing_scale,
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
          label="Phone #"
          isRequired={false}
          isReadOnly={false}
          type="tel"
          value={insurance_secondary_phone}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                date,
                last_name,
                first_name,
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
                occupation,
                full_time,
                preferred_pharmacy,
                insurance_primary_name,
                insurance_primary_id,
                insurance_primary_group,
                insurance_primary_address,
                insurance_primary_phone,
                insurance_primary_insured_person,
                insurance_primary_insured_person_relation,
                insurance_primary_insured_person_dob,
                insurance_secondary,
                insurance_secondary_id,
                insurance_secondary_group,
                insurance_secondary_address,
                insurance_secondary_phone: value,
                primary_care_physician_name,
                primary_care_physician_phone,
                referring_physician_name,
                referring_physician_phone,
                emergency_contact_name,
                emergency_contact_phone,
                emergency_contact_relationship,
                signature_page_1,
                signature_page_1_date,
                ph_briefly_describe_present_symptoms,
                ph_previous_treatment_for_problem,
                ph_current_medicines,
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
                ph_drugs,
                ph_alcohol,
                ph_alcohol_weekly,
                ph_sleep,
                ph_exercise,
                ph_travel,
                ph_pregnant,
                ph_live_births,
                ph_complications,
                ad_people_in_household,
                ph_symptoms,
                ad_dress_yourself,
                ad_get_in_out_bed,
                ad_lift_full_cup_mouth,
                ad_walk_outdoor_flat,
                ad_wash_dry_body,
                ad_pick_clothing_floor,
                ad_turn_faucets_on_off,
                ad_get_in_out_car_bus_train_plane,
                ad_walk_two_miles,
                ad_recreational_activities_sports,
                ad_good_night_sleep,
                ad_deal_anxiety_nervous,
                ad_deal_depression_blue,
                ad_daily_pain_scale,
                ad_how_well_doing_scale,
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
      </Grid>
      <Divider
        orientation="horizontal"
        {...getOverrideProps(overrides, "SectionalElement4")}
      ></Divider>
      <Heading
        level={4}
        children="Doctor's Information"
        {...getOverrideProps(overrides, "SectionalElement6")}
      ></Heading>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid27")}
      >
        <TextField
          label="Name of Primary Care Physician"
          isRequired={false}
          isReadOnly={false}
          value={primary_care_physician_name}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                date,
                last_name,
                first_name,
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
                occupation,
                full_time,
                preferred_pharmacy,
                insurance_primary_name,
                insurance_primary_id,
                insurance_primary_group,
                insurance_primary_address,
                insurance_primary_phone,
                insurance_primary_insured_person,
                insurance_primary_insured_person_relation,
                insurance_primary_insured_person_dob,
                insurance_secondary,
                insurance_secondary_id,
                insurance_secondary_group,
                insurance_secondary_address,
                insurance_secondary_phone,
                primary_care_physician_name: value,
                primary_care_physician_phone,
                referring_physician_name,
                referring_physician_phone,
                emergency_contact_name,
                emergency_contact_phone,
                emergency_contact_relationship,
                signature_page_1,
                signature_page_1_date,
                ph_briefly_describe_present_symptoms,
                ph_previous_treatment_for_problem,
                ph_current_medicines,
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
                ph_drugs,
                ph_alcohol,
                ph_alcohol_weekly,
                ph_sleep,
                ph_exercise,
                ph_travel,
                ph_pregnant,
                ph_live_births,
                ph_complications,
                ad_people_in_household,
                ph_symptoms,
                ad_dress_yourself,
                ad_get_in_out_bed,
                ad_lift_full_cup_mouth,
                ad_walk_outdoor_flat,
                ad_wash_dry_body,
                ad_pick_clothing_floor,
                ad_turn_faucets_on_off,
                ad_get_in_out_car_bus_train_plane,
                ad_walk_two_miles,
                ad_recreational_activities_sports,
                ad_good_night_sleep,
                ad_deal_anxiety_nervous,
                ad_deal_depression_blue,
                ad_daily_pain_scale,
                ad_how_well_doing_scale,
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
          label="Phone #"
          isRequired={false}
          isReadOnly={false}
          type="tel"
          value={primary_care_physician_phone}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                date,
                last_name,
                first_name,
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
                occupation,
                full_time,
                preferred_pharmacy,
                insurance_primary_name,
                insurance_primary_id,
                insurance_primary_group,
                insurance_primary_address,
                insurance_primary_phone,
                insurance_primary_insured_person,
                insurance_primary_insured_person_relation,
                insurance_primary_insured_person_dob,
                insurance_secondary,
                insurance_secondary_id,
                insurance_secondary_group,
                insurance_secondary_address,
                insurance_secondary_phone,
                primary_care_physician_name,
                primary_care_physician_phone: value,
                referring_physician_name,
                referring_physician_phone,
                emergency_contact_name,
                emergency_contact_phone,
                emergency_contact_relationship,
                signature_page_1,
                signature_page_1_date,
                ph_briefly_describe_present_symptoms,
                ph_previous_treatment_for_problem,
                ph_current_medicines,
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
                ph_drugs,
                ph_alcohol,
                ph_alcohol_weekly,
                ph_sleep,
                ph_exercise,
                ph_travel,
                ph_pregnant,
                ph_live_births,
                ph_complications,
                ad_people_in_household,
                ph_symptoms,
                ad_dress_yourself,
                ad_get_in_out_bed,
                ad_lift_full_cup_mouth,
                ad_walk_outdoor_flat,
                ad_wash_dry_body,
                ad_pick_clothing_floor,
                ad_turn_faucets_on_off,
                ad_get_in_out_car_bus_train_plane,
                ad_walk_two_miles,
                ad_recreational_activities_sports,
                ad_good_night_sleep,
                ad_deal_anxiety_nervous,
                ad_deal_depression_blue,
                ad_daily_pain_scale,
                ad_how_well_doing_scale,
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
      </Grid>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid28")}
      >
        <TextField
          label="Name of Referring Physician *"
          isRequired={true}
          isReadOnly={false}
          value={referring_physician_name}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                date,
                last_name,
                first_name,
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
                occupation,
                full_time,
                preferred_pharmacy,
                insurance_primary_name,
                insurance_primary_id,
                insurance_primary_group,
                insurance_primary_address,
                insurance_primary_phone,
                insurance_primary_insured_person,
                insurance_primary_insured_person_relation,
                insurance_primary_insured_person_dob,
                insurance_secondary,
                insurance_secondary_id,
                insurance_secondary_group,
                insurance_secondary_address,
                insurance_secondary_phone,
                primary_care_physician_name,
                primary_care_physician_phone,
                referring_physician_name: value,
                referring_physician_phone,
                emergency_contact_name,
                emergency_contact_phone,
                emergency_contact_relationship,
                signature_page_1,
                signature_page_1_date,
                ph_briefly_describe_present_symptoms,
                ph_previous_treatment_for_problem,
                ph_current_medicines,
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
                ph_drugs,
                ph_alcohol,
                ph_alcohol_weekly,
                ph_sleep,
                ph_exercise,
                ph_travel,
                ph_pregnant,
                ph_live_births,
                ph_complications,
                ad_people_in_household,
                ph_symptoms,
                ad_dress_yourself,
                ad_get_in_out_bed,
                ad_lift_full_cup_mouth,
                ad_walk_outdoor_flat,
                ad_wash_dry_body,
                ad_pick_clothing_floor,
                ad_turn_faucets_on_off,
                ad_get_in_out_car_bus_train_plane,
                ad_walk_two_miles,
                ad_recreational_activities_sports,
                ad_good_night_sleep,
                ad_deal_anxiety_nervous,
                ad_deal_depression_blue,
                ad_daily_pain_scale,
                ad_how_well_doing_scale,
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
          label="Phone #"
          isRequired={false}
          isReadOnly={false}
          type="tel"
          value={referring_physician_phone}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                date,
                last_name,
                first_name,
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
                occupation,
                full_time,
                preferred_pharmacy,
                insurance_primary_name,
                insurance_primary_id,
                insurance_primary_group,
                insurance_primary_address,
                insurance_primary_phone,
                insurance_primary_insured_person,
                insurance_primary_insured_person_relation,
                insurance_primary_insured_person_dob,
                insurance_secondary,
                insurance_secondary_id,
                insurance_secondary_group,
                insurance_secondary_address,
                insurance_secondary_phone,
                primary_care_physician_name,
                primary_care_physician_phone,
                referring_physician_name,
                referring_physician_phone: value,
                emergency_contact_name,
                emergency_contact_phone,
                emergency_contact_relationship,
                signature_page_1,
                signature_page_1_date,
                ph_briefly_describe_present_symptoms,
                ph_previous_treatment_for_problem,
                ph_current_medicines,
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
                ph_drugs,
                ph_alcohol,
                ph_alcohol_weekly,
                ph_sleep,
                ph_exercise,
                ph_travel,
                ph_pregnant,
                ph_live_births,
                ph_complications,
                ad_people_in_household,
                ph_symptoms,
                ad_dress_yourself,
                ad_get_in_out_bed,
                ad_lift_full_cup_mouth,
                ad_walk_outdoor_flat,
                ad_wash_dry_body,
                ad_pick_clothing_floor,
                ad_turn_faucets_on_off,
                ad_get_in_out_car_bus_train_plane,
                ad_walk_two_miles,
                ad_recreational_activities_sports,
                ad_good_night_sleep,
                ad_deal_anxiety_nervous,
                ad_deal_depression_blue,
                ad_daily_pain_scale,
                ad_how_well_doing_scale,
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
      </Grid>
      <Divider
        orientation="horizontal"
        {...getOverrideProps(overrides, "SectionalElement8")}
      ></Divider>
      <Heading
        level={4}
        children="Emergency Contact Information"
        {...getOverrideProps(overrides, "SectionalElement9")}
      ></Heading>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid31")}
      >
        <TextField
          label="Name *"
          isRequired={true}
          isReadOnly={false}
          value={emergency_contact_name}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                date,
                last_name,
                first_name,
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
                occupation,
                full_time,
                preferred_pharmacy,
                insurance_primary_name,
                insurance_primary_id,
                insurance_primary_group,
                insurance_primary_address,
                insurance_primary_phone,
                insurance_primary_insured_person,
                insurance_primary_insured_person_relation,
                insurance_primary_insured_person_dob,
                insurance_secondary,
                insurance_secondary_id,
                insurance_secondary_group,
                insurance_secondary_address,
                insurance_secondary_phone,
                primary_care_physician_name,
                primary_care_physician_phone,
                referring_physician_name,
                referring_physician_phone,
                emergency_contact_name: value,
                emergency_contact_phone,
                emergency_contact_relationship,
                signature_page_1,
                signature_page_1_date,
                ph_briefly_describe_present_symptoms,
                ph_previous_treatment_for_problem,
                ph_current_medicines,
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
                ph_drugs,
                ph_alcohol,
                ph_alcohol_weekly,
                ph_sleep,
                ph_exercise,
                ph_travel,
                ph_pregnant,
                ph_live_births,
                ph_complications,
                ad_people_in_household,
                ph_symptoms,
                ad_dress_yourself,
                ad_get_in_out_bed,
                ad_lift_full_cup_mouth,
                ad_walk_outdoor_flat,
                ad_wash_dry_body,
                ad_pick_clothing_floor,
                ad_turn_faucets_on_off,
                ad_get_in_out_car_bus_train_plane,
                ad_walk_two_miles,
                ad_recreational_activities_sports,
                ad_good_night_sleep,
                ad_deal_anxiety_nervous,
                ad_deal_depression_blue,
                ad_daily_pain_scale,
                ad_how_well_doing_scale,
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
          label="Phone # *"
          isRequired={true}
          isReadOnly={false}
          type="tel"
          value={emergency_contact_phone}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                date,
                last_name,
                first_name,
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
                occupation,
                full_time,
                preferred_pharmacy,
                insurance_primary_name,
                insurance_primary_id,
                insurance_primary_group,
                insurance_primary_address,
                insurance_primary_phone,
                insurance_primary_insured_person,
                insurance_primary_insured_person_relation,
                insurance_primary_insured_person_dob,
                insurance_secondary,
                insurance_secondary_id,
                insurance_secondary_group,
                insurance_secondary_address,
                insurance_secondary_phone,
                primary_care_physician_name,
                primary_care_physician_phone,
                referring_physician_name,
                referring_physician_phone,
                emergency_contact_name,
                emergency_contact_phone: value,
                emergency_contact_relationship,
                signature_page_1,
                signature_page_1_date,
                ph_briefly_describe_present_symptoms,
                ph_previous_treatment_for_problem,
                ph_current_medicines,
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
                ph_drugs,
                ph_alcohol,
                ph_alcohol_weekly,
                ph_sleep,
                ph_exercise,
                ph_travel,
                ph_pregnant,
                ph_live_births,
                ph_complications,
                ad_people_in_household,
                ph_symptoms,
                ad_dress_yourself,
                ad_get_in_out_bed,
                ad_lift_full_cup_mouth,
                ad_walk_outdoor_flat,
                ad_wash_dry_body,
                ad_pick_clothing_floor,
                ad_turn_faucets_on_off,
                ad_get_in_out_car_bus_train_plane,
                ad_walk_two_miles,
                ad_recreational_activities_sports,
                ad_good_night_sleep,
                ad_deal_anxiety_nervous,
                ad_deal_depression_blue,
                ad_daily_pain_scale,
                ad_how_well_doing_scale,
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
            runValidationTasks(
              "emergency_contact_phone",
              emergency_contact_phone
            )
          }
          errorMessage={errors.emergency_contact_phone?.errorMessage}
          hasError={errors.emergency_contact_phone?.hasError}
          {...getOverrideProps(overrides, "emergency_contact_phone")}
        ></TextField>
      </Grid>
      <TextField
        label="Relationship *"
        isRequired={true}
        isReadOnly={false}
        value={emergency_contact_relationship}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              last_name,
              first_name,
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
              occupation,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_primary_insured_person_dob,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              primary_care_physician_phone,
              referring_physician_name,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship: value,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicines,
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
              ph_drugs,
              ph_alcohol,
              ph_alcohol_weekly,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ad_people_in_household,
              ph_symptoms,
              ad_dress_yourself,
              ad_get_in_out_bed,
              ad_lift_full_cup_mouth,
              ad_walk_outdoor_flat,
              ad_wash_dry_body,
              ad_pick_clothing_floor,
              ad_turn_faucets_on_off,
              ad_get_in_out_car_bus_train_plane,
              ad_walk_two_miles,
              ad_recreational_activities_sports,
              ad_good_night_sleep,
              ad_deal_anxiety_nervous,
              ad_deal_depression_blue,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
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
      <Divider
        orientation="horizontal"
        {...getOverrideProps(overrides, "SectionalElement10")}
      ></Divider>
      <Heading
        children="PLEASE READ AND TYPE NAME BELOW TO SIGN:"
        {...getOverrideProps(overrides, "SectionalElement12")}
      ></Heading>
      <Text
        children="I hereby give authorization for payment of insurance benefits to be made directly to my physician for services rendered. I understand that I am financially responsible for all charges whether or not they are covered by insurance. I hereby authorize release of all information necessary to secure the payment of benefit. I further agree that a photocopy of this agreement shall be as valid as the original."
        {...getOverrideProps(overrides, "SectionalElement13")}
      ></Text>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid36")}
      >
        <TextField
          label="Signature *"
          isRequired={true}
          isReadOnly={false}
          value={signature_page_1}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                date,
                last_name,
                first_name,
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
                occupation,
                full_time,
                preferred_pharmacy,
                insurance_primary_name,
                insurance_primary_id,
                insurance_primary_group,
                insurance_primary_address,
                insurance_primary_phone,
                insurance_primary_insured_person,
                insurance_primary_insured_person_relation,
                insurance_primary_insured_person_dob,
                insurance_secondary,
                insurance_secondary_id,
                insurance_secondary_group,
                insurance_secondary_address,
                insurance_secondary_phone,
                primary_care_physician_name,
                primary_care_physician_phone,
                referring_physician_name,
                referring_physician_phone,
                emergency_contact_name,
                emergency_contact_phone,
                emergency_contact_relationship,
                signature_page_1: value,
                signature_page_1_date,
                ph_briefly_describe_present_symptoms,
                ph_previous_treatment_for_problem,
                ph_current_medicines,
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
                ph_drugs,
                ph_alcohol,
                ph_alcohol_weekly,
                ph_sleep,
                ph_exercise,
                ph_travel,
                ph_pregnant,
                ph_live_births,
                ph_complications,
                ad_people_in_household,
                ph_symptoms,
                ad_dress_yourself,
                ad_get_in_out_bed,
                ad_lift_full_cup_mouth,
                ad_walk_outdoor_flat,
                ad_wash_dry_body,
                ad_pick_clothing_floor,
                ad_turn_faucets_on_off,
                ad_get_in_out_car_bus_train_plane,
                ad_walk_two_miles,
                ad_recreational_activities_sports,
                ad_good_night_sleep,
                ad_deal_anxiety_nervous,
                ad_deal_depression_blue,
                ad_daily_pain_scale,
                ad_how_well_doing_scale,
              };
              const result = onChange(modelFields);
              value = result?.signature_page_1 ?? value;
            }
            if (errors.signature_page_1?.hasError) {
              runValidationTasks("signature_page_1", value);
            }
            setSignature_page_1(value);
          }}
          onBlur={() =>
            runValidationTasks("signature_page_1", signature_page_1)
          }
          errorMessage={errors.signature_page_1?.errorMessage}
          hasError={errors.signature_page_1?.hasError}
          {...getOverrideProps(overrides, "signature_page_1")}
        ></TextField>
        <TextField
          label="Date *"
          isRequired={true}
          isReadOnly={false}
          type="date"
          value={signature_page_1_date}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                date,
                last_name,
                first_name,
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
                occupation,
                full_time,
                preferred_pharmacy,
                insurance_primary_name,
                insurance_primary_id,
                insurance_primary_group,
                insurance_primary_address,
                insurance_primary_phone,
                insurance_primary_insured_person,
                insurance_primary_insured_person_relation,
                insurance_primary_insured_person_dob,
                insurance_secondary,
                insurance_secondary_id,
                insurance_secondary_group,
                insurance_secondary_address,
                insurance_secondary_phone,
                primary_care_physician_name,
                primary_care_physician_phone,
                referring_physician_name,
                referring_physician_phone,
                emergency_contact_name,
                emergency_contact_phone,
                emergency_contact_relationship,
                signature_page_1,
                signature_page_1_date: value,
                ph_briefly_describe_present_symptoms,
                ph_previous_treatment_for_problem,
                ph_current_medicines,
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
                ph_drugs,
                ph_alcohol,
                ph_alcohol_weekly,
                ph_sleep,
                ph_exercise,
                ph_travel,
                ph_pregnant,
                ph_live_births,
                ph_complications,
                ad_people_in_household,
                ph_symptoms,
                ad_dress_yourself,
                ad_get_in_out_bed,
                ad_lift_full_cup_mouth,
                ad_walk_outdoor_flat,
                ad_wash_dry_body,
                ad_pick_clothing_floor,
                ad_turn_faucets_on_off,
                ad_get_in_out_car_bus_train_plane,
                ad_walk_two_miles,
                ad_recreational_activities_sports,
                ad_good_night_sleep,
                ad_deal_anxiety_nervous,
                ad_deal_depression_blue,
                ad_daily_pain_scale,
                ad_how_well_doing_scale,
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
      </Grid>
      <Divider
        orientation="horizontal"
        {...getOverrideProps(overrides, "SectionalElement15")}
      ></Divider>
      <Divider
        orientation="horizontal"
        {...getOverrideProps(overrides, "SectionalElement14")}
      ></Divider>
      <Divider
        orientation="horizontal"
        {...getOverrideProps(overrides, "SectionalElement21")}
      ></Divider>
      <Heading
        level={4}
        children="PATIENT HISTORY"
        {...getOverrideProps(overrides, "SectionalElement90")}
      ></Heading>
      <TextAreaField
        label="Briefly describe your presenting symptoms *"
        isRequired={true}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              last_name,
              first_name,
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
              occupation,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_primary_insured_person_dob,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              primary_care_physician_phone,
              referring_physician_name,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms: value,
              ph_previous_treatment_for_problem,
              ph_current_medicines,
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
              ph_drugs,
              ph_alcohol,
              ph_alcohol_weekly,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ad_people_in_household,
              ph_symptoms,
              ad_dress_yourself,
              ad_get_in_out_bed,
              ad_lift_full_cup_mouth,
              ad_walk_outdoor_flat,
              ad_wash_dry_body,
              ad_pick_clothing_floor,
              ad_turn_faucets_on_off,
              ad_get_in_out_car_bus_train_plane,
              ad_walk_two_miles,
              ad_recreational_activities_sports,
              ad_good_night_sleep,
              ad_deal_anxiety_nervous,
              ad_deal_depression_blue,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
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
      ></TextAreaField>
      <TextAreaField
        label="Previous treatment for this problem (i.e., Physical therapy, Medication, Surgery, Other)"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              last_name,
              first_name,
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
              occupation,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_primary_insured_person_dob,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              primary_care_physician_phone,
              referring_physician_name,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem: value,
              ph_current_medicines,
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
              ph_drugs,
              ph_alcohol,
              ph_alcohol_weekly,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ad_people_in_household,
              ph_symptoms,
              ad_dress_yourself,
              ad_get_in_out_bed,
              ad_lift_full_cup_mouth,
              ad_walk_outdoor_flat,
              ad_wash_dry_body,
              ad_pick_clothing_floor,
              ad_turn_faucets_on_off,
              ad_get_in_out_car_bus_train_plane,
              ad_walk_two_miles,
              ad_recreational_activities_sports,
              ad_good_night_sleep,
              ad_deal_anxiety_nervous,
              ad_deal_depression_blue,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
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
      ></TextAreaField>
      <TextAreaField
        label="Current Medications: (Name and Dose) *"
        isRequired={true}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              last_name,
              first_name,
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
              occupation,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_primary_insured_person_dob,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              primary_care_physician_phone,
              referring_physician_name,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicines: value,
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
              ph_drugs,
              ph_alcohol,
              ph_alcohol_weekly,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ad_people_in_household,
              ph_symptoms,
              ad_dress_yourself,
              ad_get_in_out_bed,
              ad_lift_full_cup_mouth,
              ad_walk_outdoor_flat,
              ad_wash_dry_body,
              ad_pick_clothing_floor,
              ad_turn_faucets_on_off,
              ad_get_in_out_car_bus_train_plane,
              ad_walk_two_miles,
              ad_recreational_activities_sports,
              ad_good_night_sleep,
              ad_deal_anxiety_nervous,
              ad_deal_depression_blue,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
            };
            const result = onChange(modelFields);
            value = result?.ph_current_medicines ?? value;
          }
          if (errors.ph_current_medicines?.hasError) {
            runValidationTasks("ph_current_medicines", value);
          }
          setPh_current_medicines(value);
        }}
        onBlur={() =>
          runValidationTasks("ph_current_medicines", ph_current_medicines)
        }
        errorMessage={errors.ph_current_medicines?.errorMessage}
        hasError={errors.ph_current_medicines?.hasError}
        {...getOverrideProps(overrides, "ph_current_medicines")}
      ></TextAreaField>
      <SwitchField
        label="ALLERGY to any medication? *"
        defaultChecked={false}
        isDisabled={false}
        isChecked={ph_allergy_to_med}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              date,
              last_name,
              first_name,
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
              occupation,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_primary_insured_person_dob,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              primary_care_physician_phone,
              referring_physician_name,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicines,
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
              ph_drugs,
              ph_alcohol,
              ph_alcohol_weekly,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ad_people_in_household,
              ph_symptoms,
              ad_dress_yourself,
              ad_get_in_out_bed,
              ad_lift_full_cup_mouth,
              ad_walk_outdoor_flat,
              ad_wash_dry_body,
              ad_pick_clothing_floor,
              ad_turn_faucets_on_off,
              ad_get_in_out_car_bus_train_plane,
              ad_walk_two_miles,
              ad_recreational_activities_sports,
              ad_good_night_sleep,
              ad_deal_anxiety_nervous,
              ad_deal_depression_blue,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
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
        label="If yes, please list:"
        isRequired={false}
        isReadOnly={false}
        value={ph_allergy_to_med_list}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              last_name,
              first_name,
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
              occupation,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_primary_insured_person_dob,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              primary_care_physician_phone,
              referring_physician_name,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicines,
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
              ph_drugs,
              ph_alcohol,
              ph_alcohol_weekly,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ad_people_in_household,
              ph_symptoms,
              ad_dress_yourself,
              ad_get_in_out_bed,
              ad_lift_full_cup_mouth,
              ad_walk_outdoor_flat,
              ad_wash_dry_body,
              ad_pick_clothing_floor,
              ad_turn_faucets_on_off,
              ad_get_in_out_car_bus_train_plane,
              ad_walk_two_miles,
              ad_recreational_activities_sports,
              ad_good_night_sleep,
              ad_deal_anxiety_nervous,
              ad_deal_depression_blue,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
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
      <Divider
        orientation="horizontal"
        {...getOverrideProps(overrides, "SectionalElement11")}
      ></Divider>
      <Heading
        children="Rheumatology / Arthritis History:"
        {...getOverrideProps(overrides, "SectionalElement16")}
      ></Heading>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid48")}
      >
        <TextField
          label="Osteoarthritis"
          isRequired={false}
          isReadOnly={false}
          placeholder="Self / Family Member (State Relationship)"
          value={ph_rh_history_osteoarthritis}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                date,
                last_name,
                first_name,
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
                occupation,
                full_time,
                preferred_pharmacy,
                insurance_primary_name,
                insurance_primary_id,
                insurance_primary_group,
                insurance_primary_address,
                insurance_primary_phone,
                insurance_primary_insured_person,
                insurance_primary_insured_person_relation,
                insurance_primary_insured_person_dob,
                insurance_secondary,
                insurance_secondary_id,
                insurance_secondary_group,
                insurance_secondary_address,
                insurance_secondary_phone,
                primary_care_physician_name,
                primary_care_physician_phone,
                referring_physician_name,
                referring_physician_phone,
                emergency_contact_name,
                emergency_contact_phone,
                emergency_contact_relationship,
                signature_page_1,
                signature_page_1_date,
                ph_briefly_describe_present_symptoms,
                ph_previous_treatment_for_problem,
                ph_current_medicines,
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
                ph_drugs,
                ph_alcohol,
                ph_alcohol_weekly,
                ph_sleep,
                ph_exercise,
                ph_travel,
                ph_pregnant,
                ph_live_births,
                ph_complications,
                ad_people_in_household,
                ph_symptoms,
                ad_dress_yourself,
                ad_get_in_out_bed,
                ad_lift_full_cup_mouth,
                ad_walk_outdoor_flat,
                ad_wash_dry_body,
                ad_pick_clothing_floor,
                ad_turn_faucets_on_off,
                ad_get_in_out_car_bus_train_plane,
                ad_walk_two_miles,
                ad_recreational_activities_sports,
                ad_good_night_sleep,
                ad_deal_anxiety_nervous,
                ad_deal_depression_blue,
                ad_daily_pain_scale,
                ad_how_well_doing_scale,
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
          label="Gout"
          isRequired={false}
          isReadOnly={false}
          placeholder="Self / Family Member (State Relationship)"
          value={ph_rh_history_gout}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                date,
                last_name,
                first_name,
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
                occupation,
                full_time,
                preferred_pharmacy,
                insurance_primary_name,
                insurance_primary_id,
                insurance_primary_group,
                insurance_primary_address,
                insurance_primary_phone,
                insurance_primary_insured_person,
                insurance_primary_insured_person_relation,
                insurance_primary_insured_person_dob,
                insurance_secondary,
                insurance_secondary_id,
                insurance_secondary_group,
                insurance_secondary_address,
                insurance_secondary_phone,
                primary_care_physician_name,
                primary_care_physician_phone,
                referring_physician_name,
                referring_physician_phone,
                emergency_contact_name,
                emergency_contact_phone,
                emergency_contact_relationship,
                signature_page_1,
                signature_page_1_date,
                ph_briefly_describe_present_symptoms,
                ph_previous_treatment_for_problem,
                ph_current_medicines,
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
                ph_drugs,
                ph_alcohol,
                ph_alcohol_weekly,
                ph_sleep,
                ph_exercise,
                ph_travel,
                ph_pregnant,
                ph_live_births,
                ph_complications,
                ad_people_in_household,
                ph_symptoms,
                ad_dress_yourself,
                ad_get_in_out_bed,
                ad_lift_full_cup_mouth,
                ad_walk_outdoor_flat,
                ad_wash_dry_body,
                ad_pick_clothing_floor,
                ad_turn_faucets_on_off,
                ad_get_in_out_car_bus_train_plane,
                ad_walk_two_miles,
                ad_recreational_activities_sports,
                ad_good_night_sleep,
                ad_deal_anxiety_nervous,
                ad_deal_depression_blue,
                ad_daily_pain_scale,
                ad_how_well_doing_scale,
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
      </Grid>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid49")}
      >
        <TextField
          label="Juvenile Arthritis"
          isRequired={false}
          isReadOnly={false}
          placeholder="Self / Family Member (State Relationship)"
          value={ph_rh_history_juvenile_arthritis}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                date,
                last_name,
                first_name,
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
                occupation,
                full_time,
                preferred_pharmacy,
                insurance_primary_name,
                insurance_primary_id,
                insurance_primary_group,
                insurance_primary_address,
                insurance_primary_phone,
                insurance_primary_insured_person,
                insurance_primary_insured_person_relation,
                insurance_primary_insured_person_dob,
                insurance_secondary,
                insurance_secondary_id,
                insurance_secondary_group,
                insurance_secondary_address,
                insurance_secondary_phone,
                primary_care_physician_name,
                primary_care_physician_phone,
                referring_physician_name,
                referring_physician_phone,
                emergency_contact_name,
                emergency_contact_phone,
                emergency_contact_relationship,
                signature_page_1,
                signature_page_1_date,
                ph_briefly_describe_present_symptoms,
                ph_previous_treatment_for_problem,
                ph_current_medicines,
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
                ph_drugs,
                ph_alcohol,
                ph_alcohol_weekly,
                ph_sleep,
                ph_exercise,
                ph_travel,
                ph_pregnant,
                ph_live_births,
                ph_complications,
                ad_people_in_household,
                ph_symptoms,
                ad_dress_yourself,
                ad_get_in_out_bed,
                ad_lift_full_cup_mouth,
                ad_walk_outdoor_flat,
                ad_wash_dry_body,
                ad_pick_clothing_floor,
                ad_turn_faucets_on_off,
                ad_get_in_out_car_bus_train_plane,
                ad_walk_two_miles,
                ad_recreational_activities_sports,
                ad_good_night_sleep,
                ad_deal_anxiety_nervous,
                ad_deal_depression_blue,
                ad_daily_pain_scale,
                ad_how_well_doing_scale,
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
          label="Vasculitis (Type)"
          isRequired={false}
          isReadOnly={false}
          placeholder="Self / Family Member (State Relationship)"
          value={ph_rh_history_vasculitis}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                date,
                last_name,
                first_name,
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
                occupation,
                full_time,
                preferred_pharmacy,
                insurance_primary_name,
                insurance_primary_id,
                insurance_primary_group,
                insurance_primary_address,
                insurance_primary_phone,
                insurance_primary_insured_person,
                insurance_primary_insured_person_relation,
                insurance_primary_insured_person_dob,
                insurance_secondary,
                insurance_secondary_id,
                insurance_secondary_group,
                insurance_secondary_address,
                insurance_secondary_phone,
                primary_care_physician_name,
                primary_care_physician_phone,
                referring_physician_name,
                referring_physician_phone,
                emergency_contact_name,
                emergency_contact_phone,
                emergency_contact_relationship,
                signature_page_1,
                signature_page_1_date,
                ph_briefly_describe_present_symptoms,
                ph_previous_treatment_for_problem,
                ph_current_medicines,
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
                ph_drugs,
                ph_alcohol,
                ph_alcohol_weekly,
                ph_sleep,
                ph_exercise,
                ph_travel,
                ph_pregnant,
                ph_live_births,
                ph_complications,
                ad_people_in_household,
                ph_symptoms,
                ad_dress_yourself,
                ad_get_in_out_bed,
                ad_lift_full_cup_mouth,
                ad_walk_outdoor_flat,
                ad_wash_dry_body,
                ad_pick_clothing_floor,
                ad_turn_faucets_on_off,
                ad_get_in_out_car_bus_train_plane,
                ad_walk_two_miles,
                ad_recreational_activities_sports,
                ad_good_night_sleep,
                ad_deal_anxiety_nervous,
                ad_deal_depression_blue,
                ad_daily_pain_scale,
                ad_how_well_doing_scale,
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
      </Grid>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid50")}
      >
        <TextField
          label="Lupus / SLE"
          isRequired={false}
          isReadOnly={false}
          placeholder="Self / Family Member (State Relationship)"
          value={ph_rh_history_lupus}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                date,
                last_name,
                first_name,
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
                occupation,
                full_time,
                preferred_pharmacy,
                insurance_primary_name,
                insurance_primary_id,
                insurance_primary_group,
                insurance_primary_address,
                insurance_primary_phone,
                insurance_primary_insured_person,
                insurance_primary_insured_person_relation,
                insurance_primary_insured_person_dob,
                insurance_secondary,
                insurance_secondary_id,
                insurance_secondary_group,
                insurance_secondary_address,
                insurance_secondary_phone,
                primary_care_physician_name,
                primary_care_physician_phone,
                referring_physician_name,
                referring_physician_phone,
                emergency_contact_name,
                emergency_contact_phone,
                emergency_contact_relationship,
                signature_page_1,
                signature_page_1_date,
                ph_briefly_describe_present_symptoms,
                ph_previous_treatment_for_problem,
                ph_current_medicines,
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
                ph_drugs,
                ph_alcohol,
                ph_alcohol_weekly,
                ph_sleep,
                ph_exercise,
                ph_travel,
                ph_pregnant,
                ph_live_births,
                ph_complications,
                ad_people_in_household,
                ph_symptoms,
                ad_dress_yourself,
                ad_get_in_out_bed,
                ad_lift_full_cup_mouth,
                ad_walk_outdoor_flat,
                ad_wash_dry_body,
                ad_pick_clothing_floor,
                ad_turn_faucets_on_off,
                ad_get_in_out_car_bus_train_plane,
                ad_walk_two_miles,
                ad_recreational_activities_sports,
                ad_good_night_sleep,
                ad_deal_anxiety_nervous,
                ad_deal_depression_blue,
                ad_daily_pain_scale,
                ad_how_well_doing_scale,
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
          label="Rheumatoid Arthritis"
          isRequired={false}
          isReadOnly={false}
          placeholder="Self / Family Member (State Relationship)"
          value={ph_rh_history_rheumatoid}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                date,
                last_name,
                first_name,
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
                occupation,
                full_time,
                preferred_pharmacy,
                insurance_primary_name,
                insurance_primary_id,
                insurance_primary_group,
                insurance_primary_address,
                insurance_primary_phone,
                insurance_primary_insured_person,
                insurance_primary_insured_person_relation,
                insurance_primary_insured_person_dob,
                insurance_secondary,
                insurance_secondary_id,
                insurance_secondary_group,
                insurance_secondary_address,
                insurance_secondary_phone,
                primary_care_physician_name,
                primary_care_physician_phone,
                referring_physician_name,
                referring_physician_phone,
                emergency_contact_name,
                emergency_contact_phone,
                emergency_contact_relationship,
                signature_page_1,
                signature_page_1_date,
                ph_briefly_describe_present_symptoms,
                ph_previous_treatment_for_problem,
                ph_current_medicines,
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
                ph_drugs,
                ph_alcohol,
                ph_alcohol_weekly,
                ph_sleep,
                ph_exercise,
                ph_travel,
                ph_pregnant,
                ph_live_births,
                ph_complications,
                ad_people_in_household,
                ph_symptoms,
                ad_dress_yourself,
                ad_get_in_out_bed,
                ad_lift_full_cup_mouth,
                ad_walk_outdoor_flat,
                ad_wash_dry_body,
                ad_pick_clothing_floor,
                ad_turn_faucets_on_off,
                ad_get_in_out_car_bus_train_plane,
                ad_walk_two_miles,
                ad_recreational_activities_sports,
                ad_good_night_sleep,
                ad_deal_anxiety_nervous,
                ad_deal_depression_blue,
                ad_daily_pain_scale,
                ad_how_well_doing_scale,
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
      </Grid>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid51")}
      >
        <TextField
          label="Spondyloarthropathy (i.e., A.S., Psoriatic Arthritis, etc.)"
          isRequired={false}
          isReadOnly={false}
          placeholder="Self / Family Member (State Relationship)"
          value={ph_rh_history_spondyloarthropathy}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                date,
                last_name,
                first_name,
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
                occupation,
                full_time,
                preferred_pharmacy,
                insurance_primary_name,
                insurance_primary_id,
                insurance_primary_group,
                insurance_primary_address,
                insurance_primary_phone,
                insurance_primary_insured_person,
                insurance_primary_insured_person_relation,
                insurance_primary_insured_person_dob,
                insurance_secondary,
                insurance_secondary_id,
                insurance_secondary_group,
                insurance_secondary_address,
                insurance_secondary_phone,
                primary_care_physician_name,
                primary_care_physician_phone,
                referring_physician_name,
                referring_physician_phone,
                emergency_contact_name,
                emergency_contact_phone,
                emergency_contact_relationship,
                signature_page_1,
                signature_page_1_date,
                ph_briefly_describe_present_symptoms,
                ph_previous_treatment_for_problem,
                ph_current_medicines,
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
                ph_drugs,
                ph_alcohol,
                ph_alcohol_weekly,
                ph_sleep,
                ph_exercise,
                ph_travel,
                ph_pregnant,
                ph_live_births,
                ph_complications,
                ad_people_in_household,
                ph_symptoms,
                ad_dress_yourself,
                ad_get_in_out_bed,
                ad_lift_full_cup_mouth,
                ad_walk_outdoor_flat,
                ad_wash_dry_body,
                ad_pick_clothing_floor,
                ad_turn_faucets_on_off,
                ad_get_in_out_car_bus_train_plane,
                ad_walk_two_miles,
                ad_recreational_activities_sports,
                ad_good_night_sleep,
                ad_deal_anxiety_nervous,
                ad_deal_depression_blue,
                ad_daily_pain_scale,
                ad_how_well_doing_scale,
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
          label="Osteoporosis"
          isRequired={false}
          isReadOnly={false}
          placeholder="Self / Family Member (State Relationship)"
          value={ph_rh_history_osteoporosis}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                date,
                last_name,
                first_name,
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
                occupation,
                full_time,
                preferred_pharmacy,
                insurance_primary_name,
                insurance_primary_id,
                insurance_primary_group,
                insurance_primary_address,
                insurance_primary_phone,
                insurance_primary_insured_person,
                insurance_primary_insured_person_relation,
                insurance_primary_insured_person_dob,
                insurance_secondary,
                insurance_secondary_id,
                insurance_secondary_group,
                insurance_secondary_address,
                insurance_secondary_phone,
                primary_care_physician_name,
                primary_care_physician_phone,
                referring_physician_name,
                referring_physician_phone,
                emergency_contact_name,
                emergency_contact_phone,
                emergency_contact_relationship,
                signature_page_1,
                signature_page_1_date,
                ph_briefly_describe_present_symptoms,
                ph_previous_treatment_for_problem,
                ph_current_medicines,
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
                ph_drugs,
                ph_alcohol,
                ph_alcohol_weekly,
                ph_sleep,
                ph_exercise,
                ph_travel,
                ph_pregnant,
                ph_live_births,
                ph_complications,
                ad_people_in_household,
                ph_symptoms,
                ad_dress_yourself,
                ad_get_in_out_bed,
                ad_lift_full_cup_mouth,
                ad_walk_outdoor_flat,
                ad_wash_dry_body,
                ad_pick_clothing_floor,
                ad_turn_faucets_on_off,
                ad_get_in_out_car_bus_train_plane,
                ad_walk_two_miles,
                ad_recreational_activities_sports,
                ad_good_night_sleep,
                ad_deal_anxiety_nervous,
                ad_deal_depression_blue,
                ad_daily_pain_scale,
                ad_how_well_doing_scale,
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
      </Grid>
      <TextAreaField
        label="Past Medical History"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              last_name,
              first_name,
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
              occupation,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_primary_insured_person_dob,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              primary_care_physician_phone,
              referring_physician_name,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicines,
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
              ph_drugs,
              ph_alcohol,
              ph_alcohol_weekly,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ad_people_in_household,
              ph_symptoms,
              ad_dress_yourself,
              ad_get_in_out_bed,
              ad_lift_full_cup_mouth,
              ad_walk_outdoor_flat,
              ad_wash_dry_body,
              ad_pick_clothing_floor,
              ad_turn_faucets_on_off,
              ad_get_in_out_car_bus_train_plane,
              ad_walk_two_miles,
              ad_recreational_activities_sports,
              ad_good_night_sleep,
              ad_deal_anxiety_nervous,
              ad_deal_depression_blue,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
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
      ></TextAreaField>
      <TextAreaField
        label="Past Surgical History"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              last_name,
              first_name,
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
              occupation,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_primary_insured_person_dob,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              primary_care_physician_phone,
              referring_physician_name,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicines,
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
              ph_drugs,
              ph_alcohol,
              ph_alcohol_weekly,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ad_people_in_household,
              ph_symptoms,
              ad_dress_yourself,
              ad_get_in_out_bed,
              ad_lift_full_cup_mouth,
              ad_walk_outdoor_flat,
              ad_wash_dry_body,
              ad_pick_clothing_floor,
              ad_turn_faucets_on_off,
              ad_get_in_out_car_bus_train_plane,
              ad_walk_two_miles,
              ad_recreational_activities_sports,
              ad_good_night_sleep,
              ad_deal_anxiety_nervous,
              ad_deal_depression_blue,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
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
      ></TextAreaField>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid54")}
      >
        <SelectField
          label="Do you smoke? *"
          placeholder="Please select an option"
          isDisabled={false}
          value={ph_smoke}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                date,
                last_name,
                first_name,
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
                occupation,
                full_time,
                preferred_pharmacy,
                insurance_primary_name,
                insurance_primary_id,
                insurance_primary_group,
                insurance_primary_address,
                insurance_primary_phone,
                insurance_primary_insured_person,
                insurance_primary_insured_person_relation,
                insurance_primary_insured_person_dob,
                insurance_secondary,
                insurance_secondary_id,
                insurance_secondary_group,
                insurance_secondary_address,
                insurance_secondary_phone,
                primary_care_physician_name,
                primary_care_physician_phone,
                referring_physician_name,
                referring_physician_phone,
                emergency_contact_name,
                emergency_contact_phone,
                emergency_contact_relationship,
                signature_page_1,
                signature_page_1_date,
                ph_briefly_describe_present_symptoms,
                ph_previous_treatment_for_problem,
                ph_current_medicines,
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
                ph_drugs,
                ph_alcohol,
                ph_alcohol_weekly,
                ph_sleep,
                ph_exercise,
                ph_travel,
                ph_pregnant,
                ph_live_births,
                ph_complications,
                ad_people_in_household,
                ph_symptoms,
                ad_dress_yourself,
                ad_get_in_out_bed,
                ad_lift_full_cup_mouth,
                ad_walk_outdoor_flat,
                ad_wash_dry_body,
                ad_pick_clothing_floor,
                ad_turn_faucets_on_off,
                ad_get_in_out_car_bus_train_plane,
                ad_walk_two_miles,
                ad_recreational_activities_sports,
                ad_good_night_sleep,
                ad_deal_anxiety_nervous,
                ad_deal_depression_blue,
                ad_daily_pain_scale,
                ad_how_well_doing_scale,
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
        >
          <option
            children="Yes"
            value="Yes"
            {...getOverrideProps(overrides, "ph_smokeoption0")}
          ></option>
          <option
            children="No"
            value="No"
            {...getOverrideProps(overrides, "ph_smokeoption1")}
          ></option>
          <option
            children="Past"
            value="Past"
            {...getOverrideProps(overrides, "ph_smokeoption2")}
          ></option>
        </SelectField>
        <SelectField
          label="Do you use drugs (not prescribed)? *"
          placeholder="Please select an option"
          isDisabled={false}
          value={ph_drugs}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                date,
                last_name,
                first_name,
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
                occupation,
                full_time,
                preferred_pharmacy,
                insurance_primary_name,
                insurance_primary_id,
                insurance_primary_group,
                insurance_primary_address,
                insurance_primary_phone,
                insurance_primary_insured_person,
                insurance_primary_insured_person_relation,
                insurance_primary_insured_person_dob,
                insurance_secondary,
                insurance_secondary_id,
                insurance_secondary_group,
                insurance_secondary_address,
                insurance_secondary_phone,
                primary_care_physician_name,
                primary_care_physician_phone,
                referring_physician_name,
                referring_physician_phone,
                emergency_contact_name,
                emergency_contact_phone,
                emergency_contact_relationship,
                signature_page_1,
                signature_page_1_date,
                ph_briefly_describe_present_symptoms,
                ph_previous_treatment_for_problem,
                ph_current_medicines,
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
                ph_drugs: value,
                ph_alcohol,
                ph_alcohol_weekly,
                ph_sleep,
                ph_exercise,
                ph_travel,
                ph_pregnant,
                ph_live_births,
                ph_complications,
                ad_people_in_household,
                ph_symptoms,
                ad_dress_yourself,
                ad_get_in_out_bed,
                ad_lift_full_cup_mouth,
                ad_walk_outdoor_flat,
                ad_wash_dry_body,
                ad_pick_clothing_floor,
                ad_turn_faucets_on_off,
                ad_get_in_out_car_bus_train_plane,
                ad_walk_two_miles,
                ad_recreational_activities_sports,
                ad_good_night_sleep,
                ad_deal_anxiety_nervous,
                ad_deal_depression_blue,
                ad_daily_pain_scale,
                ad_how_well_doing_scale,
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
        >
          <option
            children="Yes"
            value="Yes"
            {...getOverrideProps(overrides, "ph_drugsoption0")}
          ></option>
          <option
            children="No"
            value="No"
            {...getOverrideProps(overrides, "ph_drugsoption1")}
          ></option>
          <option
            children="Past"
            value="Past"
            {...getOverrideProps(overrides, "ph_drugsoption2")}
          ></option>
        </SelectField>
      </Grid>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid55")}
      >
        <SelectField
          label="Do you drink alcohol? *"
          placeholder="Please select an option"
          isDisabled={false}
          value={ph_alcohol}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                date,
                last_name,
                first_name,
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
                occupation,
                full_time,
                preferred_pharmacy,
                insurance_primary_name,
                insurance_primary_id,
                insurance_primary_group,
                insurance_primary_address,
                insurance_primary_phone,
                insurance_primary_insured_person,
                insurance_primary_insured_person_relation,
                insurance_primary_insured_person_dob,
                insurance_secondary,
                insurance_secondary_id,
                insurance_secondary_group,
                insurance_secondary_address,
                insurance_secondary_phone,
                primary_care_physician_name,
                primary_care_physician_phone,
                referring_physician_name,
                referring_physician_phone,
                emergency_contact_name,
                emergency_contact_phone,
                emergency_contact_relationship,
                signature_page_1,
                signature_page_1_date,
                ph_briefly_describe_present_symptoms,
                ph_previous_treatment_for_problem,
                ph_current_medicines,
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
                ph_drugs,
                ph_alcohol: value,
                ph_alcohol_weekly,
                ph_sleep,
                ph_exercise,
                ph_travel,
                ph_pregnant,
                ph_live_births,
                ph_complications,
                ad_people_in_household,
                ph_symptoms,
                ad_dress_yourself,
                ad_get_in_out_bed,
                ad_lift_full_cup_mouth,
                ad_walk_outdoor_flat,
                ad_wash_dry_body,
                ad_pick_clothing_floor,
                ad_turn_faucets_on_off,
                ad_get_in_out_car_bus_train_plane,
                ad_walk_two_miles,
                ad_recreational_activities_sports,
                ad_good_night_sleep,
                ad_deal_anxiety_nervous,
                ad_deal_depression_blue,
                ad_daily_pain_scale,
                ad_how_well_doing_scale,
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
        >
          <option
            children="Yes"
            value="Yes"
            {...getOverrideProps(overrides, "ph_alcoholoption0")}
          ></option>
          <option
            children="No"
            value="No"
            {...getOverrideProps(overrides, "ph_alcoholoption1")}
          ></option>
          <option
            children="Past"
            value="Past"
            {...getOverrideProps(overrides, "ph_alcoholoption2")}
          ></option>
        </SelectField>
        <TextField
          label="How much weekly?"
          isRequired={false}
          isReadOnly={false}
          value={ph_alcohol_weekly}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                date,
                last_name,
                first_name,
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
                occupation,
                full_time,
                preferred_pharmacy,
                insurance_primary_name,
                insurance_primary_id,
                insurance_primary_group,
                insurance_primary_address,
                insurance_primary_phone,
                insurance_primary_insured_person,
                insurance_primary_insured_person_relation,
                insurance_primary_insured_person_dob,
                insurance_secondary,
                insurance_secondary_id,
                insurance_secondary_group,
                insurance_secondary_address,
                insurance_secondary_phone,
                primary_care_physician_name,
                primary_care_physician_phone,
                referring_physician_name,
                referring_physician_phone,
                emergency_contact_name,
                emergency_contact_phone,
                emergency_contact_relationship,
                signature_page_1,
                signature_page_1_date,
                ph_briefly_describe_present_symptoms,
                ph_previous_treatment_for_problem,
                ph_current_medicines,
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
                ph_drugs,
                ph_alcohol,
                ph_alcohol_weekly: value,
                ph_sleep,
                ph_exercise,
                ph_travel,
                ph_pregnant,
                ph_live_births,
                ph_complications,
                ad_people_in_household,
                ph_symptoms,
                ad_dress_yourself,
                ad_get_in_out_bed,
                ad_lift_full_cup_mouth,
                ad_walk_outdoor_flat,
                ad_wash_dry_body,
                ad_pick_clothing_floor,
                ad_turn_faucets_on_off,
                ad_get_in_out_car_bus_train_plane,
                ad_walk_two_miles,
                ad_recreational_activities_sports,
                ad_good_night_sleep,
                ad_deal_anxiety_nervous,
                ad_deal_depression_blue,
                ad_daily_pain_scale,
                ad_how_well_doing_scale,
              };
              const result = onChange(modelFields);
              value = result?.ph_alcohol_weekly ?? value;
            }
            if (errors.ph_alcohol_weekly?.hasError) {
              runValidationTasks("ph_alcohol_weekly", value);
            }
            setPh_alcohol_weekly(value);
          }}
          onBlur={() =>
            runValidationTasks("ph_alcohol_weekly", ph_alcohol_weekly)
          }
          errorMessage={errors.ph_alcohol_weekly?.errorMessage}
          hasError={errors.ph_alcohol_weekly?.hasError}
          {...getOverrideProps(overrides, "ph_alcohol_weekly")}
        ></TextField>
      </Grid>
      <TextField
        label="How much sleep do you get a day?"
        isRequired={false}
        isReadOnly={false}
        value={ph_sleep}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              last_name,
              first_name,
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
              occupation,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_primary_insured_person_dob,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              primary_care_physician_phone,
              referring_physician_name,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicines,
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
              ph_drugs,
              ph_alcohol,
              ph_alcohol_weekly,
              ph_sleep: value,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ad_people_in_household,
              ph_symptoms,
              ad_dress_yourself,
              ad_get_in_out_bed,
              ad_lift_full_cup_mouth,
              ad_walk_outdoor_flat,
              ad_wash_dry_body,
              ad_pick_clothing_floor,
              ad_turn_faucets_on_off,
              ad_get_in_out_car_bus_train_plane,
              ad_walk_two_miles,
              ad_recreational_activities_sports,
              ad_good_night_sleep,
              ad_deal_anxiety_nervous,
              ad_deal_depression_blue,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
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
        label="Do you exercise regularly (type, frequency)?"
        isRequired={false}
        isReadOnly={false}
        value={ph_exercise}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              last_name,
              first_name,
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
              occupation,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_primary_insured_person_dob,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              primary_care_physician_phone,
              referring_physician_name,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicines,
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
              ph_drugs,
              ph_alcohol,
              ph_alcohol_weekly,
              ph_sleep,
              ph_exercise: value,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ad_people_in_household,
              ph_symptoms,
              ad_dress_yourself,
              ad_get_in_out_bed,
              ad_lift_full_cup_mouth,
              ad_walk_outdoor_flat,
              ad_wash_dry_body,
              ad_pick_clothing_floor,
              ad_turn_faucets_on_off,
              ad_get_in_out_car_bus_train_plane,
              ad_walk_two_miles,
              ad_recreational_activities_sports,
              ad_good_night_sleep,
              ad_deal_anxiety_nervous,
              ad_deal_depression_blue,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
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
        label="Have you traveled in the past year (where)?"
        isRequired={false}
        isReadOnly={false}
        value={ph_travel}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              last_name,
              first_name,
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
              occupation,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_primary_insured_person_dob,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              primary_care_physician_phone,
              referring_physician_name,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicines,
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
              ph_drugs,
              ph_alcohol,
              ph_alcohol_weekly,
              ph_sleep,
              ph_exercise,
              ph_travel: value,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ad_people_in_household,
              ph_symptoms,
              ad_dress_yourself,
              ad_get_in_out_bed,
              ad_lift_full_cup_mouth,
              ad_walk_outdoor_flat,
              ad_wash_dry_body,
              ad_pick_clothing_floor,
              ad_turn_faucets_on_off,
              ad_get_in_out_car_bus_train_plane,
              ad_walk_two_miles,
              ad_recreational_activities_sports,
              ad_good_night_sleep,
              ad_deal_anxiety_nervous,
              ad_deal_depression_blue,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
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
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid59")}
      >
        <SelectField
          label="Have you ever been pregnant?"
          placeholder="Please select an option"
          isDisabled={false}
          value={ph_pregnant}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                date,
                last_name,
                first_name,
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
                occupation,
                full_time,
                preferred_pharmacy,
                insurance_primary_name,
                insurance_primary_id,
                insurance_primary_group,
                insurance_primary_address,
                insurance_primary_phone,
                insurance_primary_insured_person,
                insurance_primary_insured_person_relation,
                insurance_primary_insured_person_dob,
                insurance_secondary,
                insurance_secondary_id,
                insurance_secondary_group,
                insurance_secondary_address,
                insurance_secondary_phone,
                primary_care_physician_name,
                primary_care_physician_phone,
                referring_physician_name,
                referring_physician_phone,
                emergency_contact_name,
                emergency_contact_phone,
                emergency_contact_relationship,
                signature_page_1,
                signature_page_1_date,
                ph_briefly_describe_present_symptoms,
                ph_previous_treatment_for_problem,
                ph_current_medicines,
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
                ph_drugs,
                ph_alcohol,
                ph_alcohol_weekly,
                ph_sleep,
                ph_exercise,
                ph_travel,
                ph_pregnant: value,
                ph_live_births,
                ph_complications,
                ad_people_in_household,
                ph_symptoms,
                ad_dress_yourself,
                ad_get_in_out_bed,
                ad_lift_full_cup_mouth,
                ad_walk_outdoor_flat,
                ad_wash_dry_body,
                ad_pick_clothing_floor,
                ad_turn_faucets_on_off,
                ad_get_in_out_car_bus_train_plane,
                ad_walk_two_miles,
                ad_recreational_activities_sports,
                ad_good_night_sleep,
                ad_deal_anxiety_nervous,
                ad_deal_depression_blue,
                ad_daily_pain_scale,
                ad_how_well_doing_scale,
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
        >
          <option
            children="Yes"
            value="Yes"
            {...getOverrideProps(overrides, "ph_pregnantoption0")}
          ></option>
          <option
            children="No"
            value="No"
            {...getOverrideProps(overrides, "ph_pregnantoption1")}
          ></option>
        </SelectField>
        <TextField
          label="How many live births have you had?"
          isRequired={false}
          isReadOnly={false}
          value={ph_live_births}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                date,
                last_name,
                first_name,
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
                occupation,
                full_time,
                preferred_pharmacy,
                insurance_primary_name,
                insurance_primary_id,
                insurance_primary_group,
                insurance_primary_address,
                insurance_primary_phone,
                insurance_primary_insured_person,
                insurance_primary_insured_person_relation,
                insurance_primary_insured_person_dob,
                insurance_secondary,
                insurance_secondary_id,
                insurance_secondary_group,
                insurance_secondary_address,
                insurance_secondary_phone,
                primary_care_physician_name,
                primary_care_physician_phone,
                referring_physician_name,
                referring_physician_phone,
                emergency_contact_name,
                emergency_contact_phone,
                emergency_contact_relationship,
                signature_page_1,
                signature_page_1_date,
                ph_briefly_describe_present_symptoms,
                ph_previous_treatment_for_problem,
                ph_current_medicines,
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
                ph_drugs,
                ph_alcohol,
                ph_alcohol_weekly,
                ph_sleep,
                ph_exercise,
                ph_travel,
                ph_pregnant,
                ph_live_births: value,
                ph_complications,
                ad_people_in_household,
                ph_symptoms,
                ad_dress_yourself,
                ad_get_in_out_bed,
                ad_lift_full_cup_mouth,
                ad_walk_outdoor_flat,
                ad_wash_dry_body,
                ad_pick_clothing_floor,
                ad_turn_faucets_on_off,
                ad_get_in_out_car_bus_train_plane,
                ad_walk_two_miles,
                ad_recreational_activities_sports,
                ad_good_night_sleep,
                ad_deal_anxiety_nervous,
                ad_deal_depression_blue,
                ad_daily_pain_scale,
                ad_how_well_doing_scale,
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
      </Grid>
      <TextField
        label="Complications?"
        isRequired={false}
        isReadOnly={false}
        value={ph_complications}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              last_name,
              first_name,
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
              occupation,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_primary_insured_person_dob,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              primary_care_physician_phone,
              referring_physician_name,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicines,
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
              ph_drugs,
              ph_alcohol,
              ph_alcohol_weekly,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications: value,
              ad_people_in_household,
              ph_symptoms,
              ad_dress_yourself,
              ad_get_in_out_bed,
              ad_lift_full_cup_mouth,
              ad_walk_outdoor_flat,
              ad_wash_dry_body,
              ad_pick_clothing_floor,
              ad_turn_faucets_on_off,
              ad_get_in_out_car_bus_train_plane,
              ad_walk_two_miles,
              ad_recreational_activities_sports,
              ad_good_night_sleep,
              ad_deal_anxiety_nervous,
              ad_deal_depression_blue,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
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
        label="How many people in household? (List age & relationship):"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              last_name,
              first_name,
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
              occupation,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_primary_insured_person_dob,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              primary_care_physician_phone,
              referring_physician_name,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicines,
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
              ph_drugs,
              ph_alcohol,
              ph_alcohol_weekly,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ad_people_in_household: value,
              ph_symptoms,
              ad_dress_yourself,
              ad_get_in_out_bed,
              ad_lift_full_cup_mouth,
              ad_walk_outdoor_flat,
              ad_wash_dry_body,
              ad_pick_clothing_floor,
              ad_turn_faucets_on_off,
              ad_get_in_out_car_bus_train_plane,
              ad_walk_two_miles,
              ad_recreational_activities_sports,
              ad_good_night_sleep,
              ad_deal_anxiety_nervous,
              ad_deal_depression_blue,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
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
      ></TextAreaField>
      <Heading
        children='Please write if you are currently or recently experiencing any of these symptoms (Write "No Symptoms" if not experiencing any of them): *'
        {...getOverrideProps(overrides, "SectionalElement5")}
      ></Heading>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              date,
              last_name,
              first_name,
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
              occupation,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_primary_insured_person_dob,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              primary_care_physician_phone,
              referring_physician_name,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicines,
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
              ph_drugs,
              ph_alcohol,
              ph_alcohol_weekly,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ad_people_in_household,
              ph_symptoms: values,
              ad_dress_yourself,
              ad_get_in_out_bed,
              ad_lift_full_cup_mouth,
              ad_walk_outdoor_flat,
              ad_wash_dry_body,
              ad_pick_clothing_floor,
              ad_turn_faucets_on_off,
              ad_get_in_out_car_bus_train_plane,
              ad_walk_two_miles,
              ad_recreational_activities_sports,
              ad_good_night_sleep,
              ad_deal_anxiety_nervous,
              ad_deal_depression_blue,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
            };
            const result = onChange(modelFields);
            values = result?.ph_symptoms ?? values;
          }
          setPh_symptoms(values);
          setCurrentPh_symptomsValue(undefined);
        }}
        currentFieldValue={currentPh_symptomsValue}
        label={
          "Fatigue, Weight Loss, Weight Gain, Fever, Night Sweats, Dry Eye, Eye Pain, Loss of Vision, Tinnitus, Hearing Loss, Nosebleed, Sneezing, Dry Mouth, Canker Sores, Cold Sores, Loss of Smell or Taste, Difficulty Swallowing, Sore Throat, Bleeding Gums, Hoarse Voice, Chest Pain, Shortness of Breath, High Blood Pressure, Low Blood Pressure, Heart Murmurs, Cough, Nausea, Vomiting, Diarrhea, Abdominal Pain, Constipation, Blood in Stool, Heartburn, Difficulty Urinating, Urine Infection, Vaginal Ulcers, STDs, Nighttime Urination, Incontinence, Stiffness, Joint Pain, Joint Swelling, Muscle Pain, Weakness, Numbness/Tingling, Rash, Psoriasis, Bruising, Skin Nodule, Skin Ulcer, Color changes in Hands/Feet when Cold, Headaches, Dizziness, Loss of Consciousness, Falling, Memory Loss, Anxiety, Depression, Anger, PTSD, Difficulty Falling Asleep, Difficulty Staying Asleep, Swollen Glands, Tender Glands, Anemia, Transfusions, Cancer"
        }
        items={ph_symptoms}
        hasError={errors?.ph_symptoms?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("ph_symptoms", currentPh_symptomsValue)
        }
        errorMessage={errors?.ph_symptoms?.errorMessage}
        setFieldValue={setCurrentPh_symptomsValue}
        inputFieldRef={ph_symptomsRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Fatigue, Weight Loss, Weight Gain, Fever, Night Sweats, Dry Eye, Eye Pain, Loss of Vision, Tinnitus, Hearing Loss, Nosebleed, Sneezing, Dry Mouth, Canker Sores, Cold Sores, Loss of Smell or Taste, Difficulty Swallowing, Sore Throat, Bleeding Gums, Hoarse Voice, Chest Pain, Shortness of Breath, High Blood Pressure, Low Blood Pressure, Heart Murmurs, Cough, Nausea, Vomiting, Diarrhea, Abdominal Pain, Constipation, Blood in Stool, Heartburn, Difficulty Urinating, Urine Infection, Vaginal Ulcers, STDs, Nighttime Urination, Incontinence, Stiffness, Joint Pain, Joint Swelling, Muscle Pain, Weakness, Numbness/Tingling, Rash, Psoriasis, Bruising, Skin Nodule, Skin Ulcer, Color changes in Hands/Feet when Cold, Headaches, Dizziness, Loss of Consciousness, Falling, Memory Loss, Anxiety, Depression, Anger, PTSD, Difficulty Falling Asleep, Difficulty Staying Asleep, Swollen Glands, Tender Glands, Anemia, Transfusions, Cancer"
          isRequired={true}
          isReadOnly={false}
          value={currentPh_symptomsValue}
          options={[
            {
              id: "No Symptoms",
              label: "No Symptoms",
            },
            {
              id: "Fatigue",
              label: "Fatigue",
            },
            {
              id: "Weight Loss",
              label: "Weight Loss",
            },
            {
              id: "Weight Gain",
              label: "Weight Gain",
            },
            {
              id: "Fever",
              label: "Fever",
            },
            {
              id: "Night Sweats",
              label: "Night Sweats",
            },
            {
              id: "Dry Eye",
              label: "Dry Eye",
            },
            {
              id: "Eye Pain",
              label: "Eye Pain",
            },
            {
              id: "Loss of Vision",
              label: "Loss of Vision",
            },
            {
              id: "Tinnitus",
              label: "Tinnitus",
            },
            {
              id: "Hearing Loss",
              label: "Hearing Loss",
            },
            {
              id: "Nosebleed",
              label: "Nosebleed",
            },
            {
              id: "Sneezing",
              label: "Sneezing",
            },
            {
              id: "Dry Mouth",
              label: "Dry Mouth",
            },
            {
              id: "Canker Sores",
              label: "Canker Sores",
            },
            {
              id: "Cold Sores",
              label: "Cold Sores",
            },
            {
              id: "Loss of Smell or Taste",
              label: "Loss of Smell or Taste",
            },
            {
              id: "Difficulty Swallowing",
              label: "Difficulty Swallowing",
            },
            {
              id: "Sore Throat",
              label: "Sore Throat",
            },
            {
              id: "Bleeding Gums",
              label: "Bleeding Gums",
            },
            {
              id: "Hoarse Voice",
              label: "Hoarse Voice",
            },
            {
              id: "Chest Pain",
              label: "Chest Pain",
            },
            {
              id: "Shortness of Breath",
              label: "Shortness of Breath",
            },
            {
              id: "High Blood Pressure",
              label: "High Blood Pressure",
            },
            {
              id: "Low Blood Pressure",
              label: "Low Blood Pressure",
            },
            {
              id: "Heart Murmurs",
              label: "Heart Murmurs",
            },
            {
              id: "Cough, Nausea",
              label: "Cough, Nausea",
            },
            {
              id: "Vomiting",
              label: "Vomiting",
            },
            {
              id: "Diarrhea",
              label: "Diarrhea",
            },
            {
              id: "Abdominal Pain",
              label: "Abdominal Pain",
            },
            {
              id: "Constipation",
              label: "Constipation",
            },
            {
              id: "Blood in Stool",
              label: "Blood in Stool",
            },
            {
              id: "Heartburn",
              label: "Heartburn",
            },
            {
              id: "Difficulty Urinating",
              label: "Difficulty Urinating",
            },
            {
              id: "Urine Infection",
              label: "Urine Infection",
            },
            {
              id: "Vaginal Ulcers",
              label: "Vaginal Ulcers",
            },
            {
              id: "STDs",
              label: "STDs",
            },
            {
              id: "Nighttime Urination",
              label: "Nighttime Urination",
            },
            {
              id: "Incontinence",
              label: "Incontinence",
            },
            {
              id: "Stiffness",
              label: "Stiffness",
            },
            {
              id: "Joint Pain",
              label: "Joint Pain",
            },
            {
              id: "Joint Swelling",
              label: "Joint Swelling",
            },
            {
              id: "Muscle Pain",
              label: "Muscle Pain",
            },
            {
              id: "Weakness",
              label: "Weakness",
            },
            {
              id: "Numbness/Tingling",
              label: "Numbness/Tingling",
            },
            {
              id: "Rash",
              label: "Rash",
            },
            {
              id: "Psoriasis",
              label: "Psoriasis",
            },
            {
              id: "Bruising",
              label: "Bruising",
            },
            {
              id: "Skin Nodule",
              label: "Skin Nodule",
            },
            {
              id: "Skin Ulcer",
              label: "Skin Ulcer",
            },
            {
              id: "Color changes in Hands/Feet when Cold",
              label: "Color changes in Hands/Feet when Cold",
            },
            {
              id: "Headaches",
              label: "Headaches",
            },
            {
              id: "Dizziness",
              label: "Dizziness",
            },
            {
              id: "Loss of Consciousness",
              label: "Loss of Consciousness",
            },
            {
              id: "Falling",
              label: "Falling",
            },
            {
              id: "Memory Loss",
              label: "Memory Loss",
            },
            {
              id: "Anxiety",
              label: "Anxiety",
            },
            {
              id: "Depression",
              label: "Depression",
            },
            {
              id: "Anger",
              label: "Anger",
            },
            {
              id: "PTSD",
              label: "PTSD",
            },
            {
              id: "Difficulty Falling Asleep",
              label: "Difficulty Falling Asleep",
            },
            {
              id: "Difficulty Staying Asleep",
              label: "Difficulty Staying Asleep",
            },
            {
              id: "Swollen Glands",
              label: "Swollen Glands",
            },
            {
              id: "Tender Glands",
              label: "Tender Glands",
            },
            {
              id: "Anemia",
              label: "Anemia",
            },
            {
              id: "Transfusions",
              label: "Transfusions",
            },
            {
              id: "Cancer",
              label: "Cancer",
            },
          ]}
          onSelect={({ id, label }) => {
            setCurrentPh_symptomsValue(id);
            runValidationTasks("ph_symptoms", id);
          }}
          onClear={() => {
            setCurrentPh_symptomsDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.ph_symptoms?.hasError) {
              runValidationTasks("ph_symptoms", value);
            }
            setCurrentPh_symptomsValue(value);
          }}
          onBlur={() =>
            runValidationTasks("ph_symptoms", currentPh_symptomsValue)
          }
          errorMessage={errors.ph_symptoms?.errorMessage}
          hasError={errors.ph_symptoms?.hasError}
          ref={ph_symptomsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "ph_symptoms")}
        ></Autocomplete>
      </ArrayField>
      <Divider
        orientation="horizontal"
        {...getOverrideProps(overrides, "SectionalElement20")}
      ></Divider>
      <Divider
        orientation="horizontal"
        {...getOverrideProps(overrides, "SectionalElement19")}
      ></Divider>
      <Divider
        orientation="horizontal"
        {...getOverrideProps(overrides, "SectionalElement18")}
      ></Divider>
      <Heading
        level={4}
        children="RAPID3 Survey"
        {...getOverrideProps(overrides, "SectionalElement900")}
      ></Heading>
      <Heading
        children="1. Please check the ONE best answer for your abilities at this time:"
        {...getOverrideProps(overrides, "SectionalElement120")}
      ></Heading>
      <Text
        children="OVER THE LAST WEEK, were you able to:"
        {...getOverrideProps(overrides, "SectionalElement2")}
      ></Text>
      <SelectField
        label="Dress yourself, including tying shoelaces and doing buttons? *"
        placeholder="Please select an option"
        isDisabled={false}
        value={ad_dress_yourself}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              last_name,
              first_name,
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
              occupation,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_primary_insured_person_dob,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              primary_care_physician_phone,
              referring_physician_name,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicines,
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
              ph_drugs,
              ph_alcohol,
              ph_alcohol_weekly,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ad_people_in_household,
              ph_symptoms,
              ad_dress_yourself: value,
              ad_get_in_out_bed,
              ad_lift_full_cup_mouth,
              ad_walk_outdoor_flat,
              ad_wash_dry_body,
              ad_pick_clothing_floor,
              ad_turn_faucets_on_off,
              ad_get_in_out_car_bus_train_plane,
              ad_walk_two_miles,
              ad_recreational_activities_sports,
              ad_good_night_sleep,
              ad_deal_anxiety_nervous,
              ad_deal_depression_blue,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
            };
            const result = onChange(modelFields);
            value = result?.ad_dress_yourself ?? value;
          }
          if (errors.ad_dress_yourself?.hasError) {
            runValidationTasks("ad_dress_yourself", value);
          }
          setAd_dress_yourself(value);
        }}
        onBlur={() =>
          runValidationTasks("ad_dress_yourself", ad_dress_yourself)
        }
        errorMessage={errors.ad_dress_yourself?.errorMessage}
        hasError={errors.ad_dress_yourself?.hasError}
        {...getOverrideProps(overrides, "ad_dress_yourself")}
      >
        <option
          children="0: Without ANY Difficulty"
          value="0: Without ANY Difficulty"
          {...getOverrideProps(overrides, "ad_dress_yourselfoption0")}
        ></option>
        <option
          children="1: With SOME Difficulty"
          value="1: With SOME Difficulty"
          {...getOverrideProps(overrides, "ad_dress_yourselfoption1")}
        ></option>
        <option
          children="2: With MUCH Difficulty"
          value="2: With MUCH Difficulty"
          {...getOverrideProps(overrides, "ad_dress_yourselfoption2")}
        ></option>
        <option
          children="3: UNABLE to do"
          value="3: UNABLE to do"
          {...getOverrideProps(overrides, "ad_dress_yourselfoption3")}
        ></option>
      </SelectField>
      <SelectField
        label="Get in and out of bed? *"
        placeholder="Please select an option"
        isDisabled={false}
        value={ad_get_in_out_bed}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              last_name,
              first_name,
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
              occupation,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_primary_insured_person_dob,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              primary_care_physician_phone,
              referring_physician_name,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicines,
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
              ph_drugs,
              ph_alcohol,
              ph_alcohol_weekly,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ad_people_in_household,
              ph_symptoms,
              ad_dress_yourself,
              ad_get_in_out_bed: value,
              ad_lift_full_cup_mouth,
              ad_walk_outdoor_flat,
              ad_wash_dry_body,
              ad_pick_clothing_floor,
              ad_turn_faucets_on_off,
              ad_get_in_out_car_bus_train_plane,
              ad_walk_two_miles,
              ad_recreational_activities_sports,
              ad_good_night_sleep,
              ad_deal_anxiety_nervous,
              ad_deal_depression_blue,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
            };
            const result = onChange(modelFields);
            value = result?.ad_get_in_out_bed ?? value;
          }
          if (errors.ad_get_in_out_bed?.hasError) {
            runValidationTasks("ad_get_in_out_bed", value);
          }
          setAd_get_in_out_bed(value);
        }}
        onBlur={() =>
          runValidationTasks("ad_get_in_out_bed", ad_get_in_out_bed)
        }
        errorMessage={errors.ad_get_in_out_bed?.errorMessage}
        hasError={errors.ad_get_in_out_bed?.hasError}
        {...getOverrideProps(overrides, "ad_get_in_out_bed")}
      >
        <option
          children="0: Without ANY Difficulty"
          value="0: Without ANY Difficulty"
          {...getOverrideProps(overrides, "ad_get_in_out_bedoption0")}
        ></option>
        <option
          children="1: With SOME Difficulty"
          value="1: With SOME Difficulty"
          {...getOverrideProps(overrides, "ad_get_in_out_bedoption1")}
        ></option>
        <option
          children="2: With MUCH Difficulty"
          value="2: With MUCH Difficulty"
          {...getOverrideProps(overrides, "ad_get_in_out_bedoption2")}
        ></option>
        <option
          children="3: UNABLE to do"
          value="3: UNABLE to do"
          {...getOverrideProps(overrides, "ad_get_in_out_bedoption3")}
        ></option>
      </SelectField>
      <SelectField
        label="Lift a full cup or glass to your mouth? *"
        placeholder="Please select an option"
        isDisabled={false}
        value={ad_lift_full_cup_mouth}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              last_name,
              first_name,
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
              occupation,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_primary_insured_person_dob,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              primary_care_physician_phone,
              referring_physician_name,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicines,
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
              ph_drugs,
              ph_alcohol,
              ph_alcohol_weekly,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ad_people_in_household,
              ph_symptoms,
              ad_dress_yourself,
              ad_get_in_out_bed,
              ad_lift_full_cup_mouth: value,
              ad_walk_outdoor_flat,
              ad_wash_dry_body,
              ad_pick_clothing_floor,
              ad_turn_faucets_on_off,
              ad_get_in_out_car_bus_train_plane,
              ad_walk_two_miles,
              ad_recreational_activities_sports,
              ad_good_night_sleep,
              ad_deal_anxiety_nervous,
              ad_deal_depression_blue,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
            };
            const result = onChange(modelFields);
            value = result?.ad_lift_full_cup_mouth ?? value;
          }
          if (errors.ad_lift_full_cup_mouth?.hasError) {
            runValidationTasks("ad_lift_full_cup_mouth", value);
          }
          setAd_lift_full_cup_mouth(value);
        }}
        onBlur={() =>
          runValidationTasks("ad_lift_full_cup_mouth", ad_lift_full_cup_mouth)
        }
        errorMessage={errors.ad_lift_full_cup_mouth?.errorMessage}
        hasError={errors.ad_lift_full_cup_mouth?.hasError}
        {...getOverrideProps(overrides, "ad_lift_full_cup_mouth")}
      >
        <option
          children="0: Without ANY Difficulty"
          value="0: Without ANY Difficulty"
          {...getOverrideProps(overrides, "ad_lift_full_cup_mouthoption0")}
        ></option>
        <option
          children="1: With SOME Difficulty"
          value="1: With SOME Difficulty"
          {...getOverrideProps(overrides, "ad_lift_full_cup_mouthoption1")}
        ></option>
        <option
          children="2: With MUCH Difficulty"
          value="2: With MUCH Difficulty"
          {...getOverrideProps(overrides, "ad_lift_full_cup_mouthoption2")}
        ></option>
        <option
          children="3: UNABLE to do"
          value="3: UNABLE to do"
          {...getOverrideProps(overrides, "ad_lift_full_cup_mouthoption3")}
        ></option>
      </SelectField>
      <SelectField
        label="Walk outdoors on flat ground? *"
        placeholder="Please select an option"
        isDisabled={false}
        value={ad_walk_outdoor_flat}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              last_name,
              first_name,
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
              occupation,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_primary_insured_person_dob,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              primary_care_physician_phone,
              referring_physician_name,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicines,
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
              ph_drugs,
              ph_alcohol,
              ph_alcohol_weekly,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ad_people_in_household,
              ph_symptoms,
              ad_dress_yourself,
              ad_get_in_out_bed,
              ad_lift_full_cup_mouth,
              ad_walk_outdoor_flat: value,
              ad_wash_dry_body,
              ad_pick_clothing_floor,
              ad_turn_faucets_on_off,
              ad_get_in_out_car_bus_train_plane,
              ad_walk_two_miles,
              ad_recreational_activities_sports,
              ad_good_night_sleep,
              ad_deal_anxiety_nervous,
              ad_deal_depression_blue,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
            };
            const result = onChange(modelFields);
            value = result?.ad_walk_outdoor_flat ?? value;
          }
          if (errors.ad_walk_outdoor_flat?.hasError) {
            runValidationTasks("ad_walk_outdoor_flat", value);
          }
          setAd_walk_outdoor_flat(value);
        }}
        onBlur={() =>
          runValidationTasks("ad_walk_outdoor_flat", ad_walk_outdoor_flat)
        }
        errorMessage={errors.ad_walk_outdoor_flat?.errorMessage}
        hasError={errors.ad_walk_outdoor_flat?.hasError}
        {...getOverrideProps(overrides, "ad_walk_outdoor_flat")}
      >
        <option
          children="0: Without ANY Difficulty"
          value="0: Without ANY Difficulty"
          {...getOverrideProps(overrides, "ad_walk_outdoor_flatoption0")}
        ></option>
        <option
          children="1: With SOME Difficulty"
          value="1: With SOME Difficulty"
          {...getOverrideProps(overrides, "ad_walk_outdoor_flatoption1")}
        ></option>
        <option
          children="2: With MUCH Difficulty"
          value="2: With MUCH Difficulty"
          {...getOverrideProps(overrides, "ad_walk_outdoor_flatoption2")}
        ></option>
        <option
          children="3: UNABLE to do"
          value="3: UNABLE to do"
          {...getOverrideProps(overrides, "ad_walk_outdoor_flatoption3")}
        ></option>
      </SelectField>
      <SelectField
        label="Wash and dry your entire body? *"
        placeholder="Please select an option"
        isDisabled={false}
        value={ad_wash_dry_body}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              last_name,
              first_name,
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
              occupation,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_primary_insured_person_dob,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              primary_care_physician_phone,
              referring_physician_name,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicines,
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
              ph_drugs,
              ph_alcohol,
              ph_alcohol_weekly,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ad_people_in_household,
              ph_symptoms,
              ad_dress_yourself,
              ad_get_in_out_bed,
              ad_lift_full_cup_mouth,
              ad_walk_outdoor_flat,
              ad_wash_dry_body: value,
              ad_pick_clothing_floor,
              ad_turn_faucets_on_off,
              ad_get_in_out_car_bus_train_plane,
              ad_walk_two_miles,
              ad_recreational_activities_sports,
              ad_good_night_sleep,
              ad_deal_anxiety_nervous,
              ad_deal_depression_blue,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
            };
            const result = onChange(modelFields);
            value = result?.ad_wash_dry_body ?? value;
          }
          if (errors.ad_wash_dry_body?.hasError) {
            runValidationTasks("ad_wash_dry_body", value);
          }
          setAd_wash_dry_body(value);
        }}
        onBlur={() => runValidationTasks("ad_wash_dry_body", ad_wash_dry_body)}
        errorMessage={errors.ad_wash_dry_body?.errorMessage}
        hasError={errors.ad_wash_dry_body?.hasError}
        {...getOverrideProps(overrides, "ad_wash_dry_body")}
      >
        <option
          children="0: Without ANY Difficulty"
          value="0: Without ANY Difficulty"
          {...getOverrideProps(overrides, "ad_wash_dry_bodyoption0")}
        ></option>
        <option
          children="1: With SOME Difficulty"
          value="1: With SOME Difficulty"
          {...getOverrideProps(overrides, "ad_wash_dry_bodyoption1")}
        ></option>
        <option
          children="2: With MUCH Difficulty"
          value="2: With MUCH Difficulty"
          {...getOverrideProps(overrides, "ad_wash_dry_bodyoption2")}
        ></option>
        <option
          children="3: UNABLE to do"
          value="3: UNABLE to do"
          {...getOverrideProps(overrides, "ad_wash_dry_bodyoption3")}
        ></option>
      </SelectField>
      <SelectField
        label="Bend down to pick up clothing from the floor? *"
        placeholder="Please select an option"
        isDisabled={false}
        value={ad_pick_clothing_floor}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              last_name,
              first_name,
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
              occupation,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_primary_insured_person_dob,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              primary_care_physician_phone,
              referring_physician_name,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicines,
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
              ph_drugs,
              ph_alcohol,
              ph_alcohol_weekly,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ad_people_in_household,
              ph_symptoms,
              ad_dress_yourself,
              ad_get_in_out_bed,
              ad_lift_full_cup_mouth,
              ad_walk_outdoor_flat,
              ad_wash_dry_body,
              ad_pick_clothing_floor: value,
              ad_turn_faucets_on_off,
              ad_get_in_out_car_bus_train_plane,
              ad_walk_two_miles,
              ad_recreational_activities_sports,
              ad_good_night_sleep,
              ad_deal_anxiety_nervous,
              ad_deal_depression_blue,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
            };
            const result = onChange(modelFields);
            value = result?.ad_pick_clothing_floor ?? value;
          }
          if (errors.ad_pick_clothing_floor?.hasError) {
            runValidationTasks("ad_pick_clothing_floor", value);
          }
          setAd_pick_clothing_floor(value);
        }}
        onBlur={() =>
          runValidationTasks("ad_pick_clothing_floor", ad_pick_clothing_floor)
        }
        errorMessage={errors.ad_pick_clothing_floor?.errorMessage}
        hasError={errors.ad_pick_clothing_floor?.hasError}
        {...getOverrideProps(overrides, "ad_pick_clothing_floor")}
      >
        <option
          children="0: Without ANY Difficulty"
          value="0: Without ANY Difficulty"
          {...getOverrideProps(overrides, "ad_pick_clothing_flooroption0")}
        ></option>
        <option
          children="1: With SOME Difficulty"
          value="1: With SOME Difficulty"
          {...getOverrideProps(overrides, "ad_pick_clothing_flooroption1")}
        ></option>
        <option
          children="2: With MUCH Difficulty"
          value="2: With MUCH Difficulty"
          {...getOverrideProps(overrides, "ad_pick_clothing_flooroption2")}
        ></option>
        <option
          children="3: UNABLE to do"
          value="3: UNABLE to do"
          {...getOverrideProps(overrides, "ad_pick_clothing_flooroption3")}
        ></option>
      </SelectField>
      <SelectField
        label="Turn regular faucets on and off? *"
        placeholder="Please select an option"
        isDisabled={false}
        value={ad_turn_faucets_on_off}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              last_name,
              first_name,
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
              occupation,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_primary_insured_person_dob,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              primary_care_physician_phone,
              referring_physician_name,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicines,
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
              ph_drugs,
              ph_alcohol,
              ph_alcohol_weekly,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ad_people_in_household,
              ph_symptoms,
              ad_dress_yourself,
              ad_get_in_out_bed,
              ad_lift_full_cup_mouth,
              ad_walk_outdoor_flat,
              ad_wash_dry_body,
              ad_pick_clothing_floor,
              ad_turn_faucets_on_off: value,
              ad_get_in_out_car_bus_train_plane,
              ad_walk_two_miles,
              ad_recreational_activities_sports,
              ad_good_night_sleep,
              ad_deal_anxiety_nervous,
              ad_deal_depression_blue,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
            };
            const result = onChange(modelFields);
            value = result?.ad_turn_faucets_on_off ?? value;
          }
          if (errors.ad_turn_faucets_on_off?.hasError) {
            runValidationTasks("ad_turn_faucets_on_off", value);
          }
          setAd_turn_faucets_on_off(value);
        }}
        onBlur={() =>
          runValidationTasks("ad_turn_faucets_on_off", ad_turn_faucets_on_off)
        }
        errorMessage={errors.ad_turn_faucets_on_off?.errorMessage}
        hasError={errors.ad_turn_faucets_on_off?.hasError}
        {...getOverrideProps(overrides, "ad_turn_faucets_on_off")}
      >
        <option
          children="0: Without ANY Difficulty"
          value="0: Without ANY Difficulty"
          {...getOverrideProps(overrides, "ad_turn_faucets_on_offoption0")}
        ></option>
        <option
          children="1: With SOME Difficulty"
          value="1: With SOME Difficulty"
          {...getOverrideProps(overrides, "ad_turn_faucets_on_offoption1")}
        ></option>
        <option
          children="2: With MUCH Difficulty"
          value="2: With MUCH Difficulty"
          {...getOverrideProps(overrides, "ad_turn_faucets_on_offoption2")}
        ></option>
        <option
          children="3: UNABLE to do"
          value="3: UNABLE to do"
          {...getOverrideProps(overrides, "ad_turn_faucets_on_offoption3")}
        ></option>
      </SelectField>
      <SelectField
        label="Get in and out of a car, bus, train, or airplane? *"
        placeholder="Please select an option"
        isDisabled={false}
        value={ad_get_in_out_car_bus_train_plane}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              last_name,
              first_name,
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
              occupation,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_primary_insured_person_dob,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              primary_care_physician_phone,
              referring_physician_name,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicines,
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
              ph_drugs,
              ph_alcohol,
              ph_alcohol_weekly,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ad_people_in_household,
              ph_symptoms,
              ad_dress_yourself,
              ad_get_in_out_bed,
              ad_lift_full_cup_mouth,
              ad_walk_outdoor_flat,
              ad_wash_dry_body,
              ad_pick_clothing_floor,
              ad_turn_faucets_on_off,
              ad_get_in_out_car_bus_train_plane: value,
              ad_walk_two_miles,
              ad_recreational_activities_sports,
              ad_good_night_sleep,
              ad_deal_anxiety_nervous,
              ad_deal_depression_blue,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
            };
            const result = onChange(modelFields);
            value = result?.ad_get_in_out_car_bus_train_plane ?? value;
          }
          if (errors.ad_get_in_out_car_bus_train_plane?.hasError) {
            runValidationTasks("ad_get_in_out_car_bus_train_plane", value);
          }
          setAd_get_in_out_car_bus_train_plane(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "ad_get_in_out_car_bus_train_plane",
            ad_get_in_out_car_bus_train_plane
          )
        }
        errorMessage={errors.ad_get_in_out_car_bus_train_plane?.errorMessage}
        hasError={errors.ad_get_in_out_car_bus_train_plane?.hasError}
        {...getOverrideProps(overrides, "ad_get_in_out_car_bus_train_plane")}
      >
        <option
          children="0: Without ANY Difficulty"
          value="0: Without ANY Difficulty"
          {...getOverrideProps(
            overrides,
            "ad_get_in_out_car_bus_train_planeoption0"
          )}
        ></option>
        <option
          children="1: With SOME Difficulty"
          value="1: With SOME Difficulty"
          {...getOverrideProps(
            overrides,
            "ad_get_in_out_car_bus_train_planeoption1"
          )}
        ></option>
        <option
          children="2: With MUCH Difficulty"
          value="2: With MUCH Difficulty"
          {...getOverrideProps(
            overrides,
            "ad_get_in_out_car_bus_train_planeoption2"
          )}
        ></option>
        <option
          children="3: UNABLE to do"
          value="3: UNABLE to do"
          {...getOverrideProps(
            overrides,
            "ad_get_in_out_car_bus_train_planeoption3"
          )}
        ></option>
      </SelectField>
      <SelectField
        label="Walk two miles or three kilometers, if you wish? *"
        placeholder="Please select an option"
        isDisabled={false}
        value={ad_walk_two_miles}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              last_name,
              first_name,
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
              occupation,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_primary_insured_person_dob,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              primary_care_physician_phone,
              referring_physician_name,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicines,
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
              ph_drugs,
              ph_alcohol,
              ph_alcohol_weekly,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ad_people_in_household,
              ph_symptoms,
              ad_dress_yourself,
              ad_get_in_out_bed,
              ad_lift_full_cup_mouth,
              ad_walk_outdoor_flat,
              ad_wash_dry_body,
              ad_pick_clothing_floor,
              ad_turn_faucets_on_off,
              ad_get_in_out_car_bus_train_plane,
              ad_walk_two_miles: value,
              ad_recreational_activities_sports,
              ad_good_night_sleep,
              ad_deal_anxiety_nervous,
              ad_deal_depression_blue,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
            };
            const result = onChange(modelFields);
            value = result?.ad_walk_two_miles ?? value;
          }
          if (errors.ad_walk_two_miles?.hasError) {
            runValidationTasks("ad_walk_two_miles", value);
          }
          setAd_walk_two_miles(value);
        }}
        onBlur={() =>
          runValidationTasks("ad_walk_two_miles", ad_walk_two_miles)
        }
        errorMessage={errors.ad_walk_two_miles?.errorMessage}
        hasError={errors.ad_walk_two_miles?.hasError}
        {...getOverrideProps(overrides, "ad_walk_two_miles")}
      >
        <option
          children="0: Without ANY Difficulty"
          value="0: Without ANY Difficulty"
          {...getOverrideProps(overrides, "ad_walk_two_milesoption0")}
        ></option>
        <option
          children="1: With SOME Difficulty"
          value="1: With SOME Difficulty"
          {...getOverrideProps(overrides, "ad_walk_two_milesoption1")}
        ></option>
        <option
          children="2: With MUCH Difficulty"
          value="2: With MUCH Difficulty"
          {...getOverrideProps(overrides, "ad_walk_two_milesoption2")}
        ></option>
        <option
          children="3: UNABLE to do"
          value="3: UNABLE to do"
          {...getOverrideProps(overrides, "ad_walk_two_milesoption3")}
        ></option>
      </SelectField>
      <SelectField
        label="Participate in recreational activities and sports as you would like, if you wish? *"
        placeholder="Please select an option"
        isDisabled={false}
        value={ad_recreational_activities_sports}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              last_name,
              first_name,
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
              occupation,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_primary_insured_person_dob,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              primary_care_physician_phone,
              referring_physician_name,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicines,
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
              ph_drugs,
              ph_alcohol,
              ph_alcohol_weekly,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ad_people_in_household,
              ph_symptoms,
              ad_dress_yourself,
              ad_get_in_out_bed,
              ad_lift_full_cup_mouth,
              ad_walk_outdoor_flat,
              ad_wash_dry_body,
              ad_pick_clothing_floor,
              ad_turn_faucets_on_off,
              ad_get_in_out_car_bus_train_plane,
              ad_walk_two_miles,
              ad_recreational_activities_sports: value,
              ad_good_night_sleep,
              ad_deal_anxiety_nervous,
              ad_deal_depression_blue,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
            };
            const result = onChange(modelFields);
            value = result?.ad_recreational_activities_sports ?? value;
          }
          if (errors.ad_recreational_activities_sports?.hasError) {
            runValidationTasks("ad_recreational_activities_sports", value);
          }
          setAd_recreational_activities_sports(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "ad_recreational_activities_sports",
            ad_recreational_activities_sports
          )
        }
        errorMessage={errors.ad_recreational_activities_sports?.errorMessage}
        hasError={errors.ad_recreational_activities_sports?.hasError}
        {...getOverrideProps(overrides, "ad_recreational_activities_sports")}
      >
        <option
          children="0: Without ANY Difficulty"
          value="0: Without ANY Difficulty"
          {...getOverrideProps(
            overrides,
            "ad_recreational_activities_sportsoption0"
          )}
        ></option>
        <option
          children="1: With SOME Difficulty"
          value="1: With SOME Difficulty"
          {...getOverrideProps(
            overrides,
            "ad_recreational_activities_sportsoption1"
          )}
        ></option>
        <option
          children="2: With MUCH Difficulty"
          value="2: With MUCH Difficulty"
          {...getOverrideProps(
            overrides,
            "ad_recreational_activities_sportsoption2"
          )}
        ></option>
        <option
          children="3: UNABLE to do"
          value="3: UNABLE to do"
          {...getOverrideProps(
            overrides,
            "ad_recreational_activities_sportsoption3"
          )}
        ></option>
      </SelectField>
      <SelectField
        label="Get a good night's sleep? *"
        placeholder="Please select an option"
        isDisabled={false}
        value={ad_good_night_sleep}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              last_name,
              first_name,
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
              occupation,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_primary_insured_person_dob,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              primary_care_physician_phone,
              referring_physician_name,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicines,
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
              ph_drugs,
              ph_alcohol,
              ph_alcohol_weekly,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ad_people_in_household,
              ph_symptoms,
              ad_dress_yourself,
              ad_get_in_out_bed,
              ad_lift_full_cup_mouth,
              ad_walk_outdoor_flat,
              ad_wash_dry_body,
              ad_pick_clothing_floor,
              ad_turn_faucets_on_off,
              ad_get_in_out_car_bus_train_plane,
              ad_walk_two_miles,
              ad_recreational_activities_sports,
              ad_good_night_sleep: value,
              ad_deal_anxiety_nervous,
              ad_deal_depression_blue,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
            };
            const result = onChange(modelFields);
            value = result?.ad_good_night_sleep ?? value;
          }
          if (errors.ad_good_night_sleep?.hasError) {
            runValidationTasks("ad_good_night_sleep", value);
          }
          setAd_good_night_sleep(value);
        }}
        onBlur={() =>
          runValidationTasks("ad_good_night_sleep", ad_good_night_sleep)
        }
        errorMessage={errors.ad_good_night_sleep?.errorMessage}
        hasError={errors.ad_good_night_sleep?.hasError}
        {...getOverrideProps(overrides, "ad_good_night_sleep")}
      >
        <option
          children="0: Without ANY Difficulty"
          value="0: Without ANY Difficulty"
          {...getOverrideProps(overrides, "ad_good_night_sleepoption0")}
        ></option>
        <option
          children="1: With SOME Difficulty"
          value="1: With SOME Difficulty"
          {...getOverrideProps(overrides, "ad_good_night_sleepoption1")}
        ></option>
        <option
          children="2: With MUCH Difficulty"
          value="2: With MUCH Difficulty"
          {...getOverrideProps(overrides, "ad_good_night_sleepoption2")}
        ></option>
        <option
          children="3: UNABLE to do"
          value="3: UNABLE to do"
          {...getOverrideProps(overrides, "ad_good_night_sleepoption3")}
        ></option>
      </SelectField>
      <SelectField
        label="Deal with feelings of anxiety or being nervous? *"
        placeholder="Please select an option"
        isDisabled={false}
        value={ad_deal_anxiety_nervous}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              last_name,
              first_name,
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
              occupation,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_primary_insured_person_dob,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              primary_care_physician_phone,
              referring_physician_name,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicines,
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
              ph_drugs,
              ph_alcohol,
              ph_alcohol_weekly,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ad_people_in_household,
              ph_symptoms,
              ad_dress_yourself,
              ad_get_in_out_bed,
              ad_lift_full_cup_mouth,
              ad_walk_outdoor_flat,
              ad_wash_dry_body,
              ad_pick_clothing_floor,
              ad_turn_faucets_on_off,
              ad_get_in_out_car_bus_train_plane,
              ad_walk_two_miles,
              ad_recreational_activities_sports,
              ad_good_night_sleep,
              ad_deal_anxiety_nervous: value,
              ad_deal_depression_blue,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
            };
            const result = onChange(modelFields);
            value = result?.ad_deal_anxiety_nervous ?? value;
          }
          if (errors.ad_deal_anxiety_nervous?.hasError) {
            runValidationTasks("ad_deal_anxiety_nervous", value);
          }
          setAd_deal_anxiety_nervous(value);
        }}
        onBlur={() =>
          runValidationTasks("ad_deal_anxiety_nervous", ad_deal_anxiety_nervous)
        }
        errorMessage={errors.ad_deal_anxiety_nervous?.errorMessage}
        hasError={errors.ad_deal_anxiety_nervous?.hasError}
        {...getOverrideProps(overrides, "ad_deal_anxiety_nervous")}
      >
        <option
          children="0: Without ANY Difficulty"
          value="0: Without ANY Difficulty"
          {...getOverrideProps(overrides, "ad_deal_anxiety_nervousoption0")}
        ></option>
        <option
          children="1: With SOME Difficulty"
          value="1: With SOME Difficulty"
          {...getOverrideProps(overrides, "ad_deal_anxiety_nervousoption1")}
        ></option>
        <option
          children="2: With MUCH Difficulty"
          value="2: With MUCH Difficulty"
          {...getOverrideProps(overrides, "ad_deal_anxiety_nervousoption2")}
        ></option>
        <option
          children="3: UNABLE to do"
          value="3: UNABLE to do"
          {...getOverrideProps(overrides, "ad_deal_anxiety_nervousoption3")}
        ></option>
      </SelectField>
      <SelectField
        label="Deal with feelings of depression or feeling blue? *"
        placeholder="Please select an option"
        isDisabled={false}
        value={ad_deal_depression_blue}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              date,
              last_name,
              first_name,
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
              occupation,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_primary_insured_person_dob,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              primary_care_physician_phone,
              referring_physician_name,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicines,
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
              ph_drugs,
              ph_alcohol,
              ph_alcohol_weekly,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ad_people_in_household,
              ph_symptoms,
              ad_dress_yourself,
              ad_get_in_out_bed,
              ad_lift_full_cup_mouth,
              ad_walk_outdoor_flat,
              ad_wash_dry_body,
              ad_pick_clothing_floor,
              ad_turn_faucets_on_off,
              ad_get_in_out_car_bus_train_plane,
              ad_walk_two_miles,
              ad_recreational_activities_sports,
              ad_good_night_sleep,
              ad_deal_anxiety_nervous,
              ad_deal_depression_blue: value,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
            };
            const result = onChange(modelFields);
            value = result?.ad_deal_depression_blue ?? value;
          }
          if (errors.ad_deal_depression_blue?.hasError) {
            runValidationTasks("ad_deal_depression_blue", value);
          }
          setAd_deal_depression_blue(value);
        }}
        onBlur={() =>
          runValidationTasks("ad_deal_depression_blue", ad_deal_depression_blue)
        }
        errorMessage={errors.ad_deal_depression_blue?.errorMessage}
        hasError={errors.ad_deal_depression_blue?.hasError}
        {...getOverrideProps(overrides, "ad_deal_depression_blue")}
      >
        <option
          children="0: Without ANY Difficulty"
          value="0: Without ANY Difficulty"
          {...getOverrideProps(overrides, "ad_deal_depression_blueoption0")}
        ></option>
        <option
          children="1: With SOME Difficulty"
          value="1: With SOME Difficulty"
          {...getOverrideProps(overrides, "ad_deal_depression_blueoption1")}
        ></option>
        <option
          children="2: With MUCH Difficulty"
          value="2: With MUCH Difficulty"
          {...getOverrideProps(overrides, "ad_deal_depression_blueoption2")}
        ></option>
        <option
          children="3: UNABLE to do"
          value="3: UNABLE to do"
          {...getOverrideProps(overrides, "ad_deal_depression_blueoption3")}
        ></option>
      </SelectField>
      <Heading
        children="2. How much pain have you had because of your condition OVER THE PAST WEEK? Please indicate below how severe your pain has been: *"
        {...getOverrideProps(overrides, "SectionalElement7")}
      ></Heading>
      <SliderField
        label="(0 = NO PAIN, 10 = PAIN AS BAD AS IT COULD BE)"
        isDisabled={false}
        isRequired={true}
        value={ad_daily_pain_scale}
        onChange={(e) => {
          let value = e;
          if (onChange) {
            const modelFields = {
              date,
              last_name,
              first_name,
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
              occupation,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_primary_insured_person_dob,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              primary_care_physician_phone,
              referring_physician_name,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicines,
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
              ph_drugs,
              ph_alcohol,
              ph_alcohol_weekly,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ad_people_in_household,
              ph_symptoms,
              ad_dress_yourself,
              ad_get_in_out_bed,
              ad_lift_full_cup_mouth,
              ad_walk_outdoor_flat,
              ad_wash_dry_body,
              ad_pick_clothing_floor,
              ad_turn_faucets_on_off,
              ad_get_in_out_car_bus_train_plane,
              ad_walk_two_miles,
              ad_recreational_activities_sports,
              ad_good_night_sleep,
              ad_deal_anxiety_nervous,
              ad_deal_depression_blue,
              ad_daily_pain_scale: value,
              ad_how_well_doing_scale,
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
      ></SliderField>
      <Heading
        children="3. Considering all the ways in which illness and health conditions may affect you at this time, please indicate below how you are doing: *"
        {...getOverrideProps(overrides, "SectionalElement17")}
      ></Heading>
      <SliderField
        label="(0 = NO PAIN, 10 = PAIN AS BAD AS IT COULD BE)"
        isDisabled={false}
        isRequired={true}
        value={ad_how_well_doing_scale}
        onChange={(e) => {
          let value = e;
          if (onChange) {
            const modelFields = {
              date,
              last_name,
              first_name,
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
              occupation,
              full_time,
              preferred_pharmacy,
              insurance_primary_name,
              insurance_primary_id,
              insurance_primary_group,
              insurance_primary_address,
              insurance_primary_phone,
              insurance_primary_insured_person,
              insurance_primary_insured_person_relation,
              insurance_primary_insured_person_dob,
              insurance_secondary,
              insurance_secondary_id,
              insurance_secondary_group,
              insurance_secondary_address,
              insurance_secondary_phone,
              primary_care_physician_name,
              primary_care_physician_phone,
              referring_physician_name,
              referring_physician_phone,
              emergency_contact_name,
              emergency_contact_phone,
              emergency_contact_relationship,
              signature_page_1,
              signature_page_1_date,
              ph_briefly_describe_present_symptoms,
              ph_previous_treatment_for_problem,
              ph_current_medicines,
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
              ph_drugs,
              ph_alcohol,
              ph_alcohol_weekly,
              ph_sleep,
              ph_exercise,
              ph_travel,
              ph_pregnant,
              ph_live_births,
              ph_complications,
              ad_people_in_household,
              ph_symptoms,
              ad_dress_yourself,
              ad_get_in_out_bed,
              ad_lift_full_cup_mouth,
              ad_walk_outdoor_flat,
              ad_wash_dry_body,
              ad_pick_clothing_floor,
              ad_turn_faucets_on_off,
              ad_get_in_out_car_bus_train_plane,
              ad_walk_two_miles,
              ad_recreational_activities_sports,
              ad_good_night_sleep,
              ad_deal_anxiety_nervous,
              ad_deal_depression_blue,
              ad_daily_pain_scale,
              ad_how_well_doing_scale: value,
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
      ></SliderField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap={tokens.space.medium.value}
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
