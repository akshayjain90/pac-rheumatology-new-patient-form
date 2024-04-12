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
    ph_current_medicine_1: "",
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
    ad_aids_devices_activities: [],
    ad_categories_help: [],
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
  const [ph_current_medicine_1, setPh_current_medicine_1] = React.useState(
    initialValues.ph_current_medicine_1
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
    setOccupatin(initialValues.occupatin);
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
    setPh_current_medicine_1(initialValues.ph_current_medicine_1);
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
    setPh_symptoms(initialValues.ph_symptoms);
    setAd_people_in_household(initialValues.ad_people_in_household);
    setAd_who_shopping(initialValues.ad_who_shopping);
    setAd_housework(initialValues.ad_housework);
    setAd_hardest_thing(initialValues.ad_hardest_thing);
    setAd_ability_stand_up_chair(initialValues.ad_ability_stand_up_chair);
    setAd_ability_walk_outdoors_flat(
      initialValues.ad_ability_walk_outdoors_flat
    );
    setAd_ability_get_on_toilet(initialValues.ad_ability_get_on_toilet);
    setAd_ability_reach_5_pound(initialValues.ad_ability_reach_5_pound);
    setAd_ability_car_doors(initialValues.ad_ability_car_doors);
    setAd_ability_outside_work(initialValues.ad_ability_outside_work);
    setAd_ability_wait_in_line(initialValues.ad_ability_wait_in_line);
    setAd_ability_lift_heavy(initialValues.ad_ability_lift_heavy);
    setAd_ability_lift_heavier(initialValues.ad_ability_lift_heavier);
    setAd_ability_climb_2_flights(initialValues.ad_ability_climb_2_flights);
    setAd_aids_devices_activities(initialValues.ad_aids_devices_activities);
    setCurrentAd_aids_devices_activitiesValue(undefined);
    setAd_categories_help(initialValues.ad_categories_help);
    setCurrentAd_categories_helpValue(undefined);
    setAd_daily_pain_scale(initialValues.ad_daily_pain_scale);
    setAd_how_well_doing_scale(initialValues.ad_how_well_doing_scale);
    setErrors({});
  };
  const [
    currentAd_aids_devices_activitiesValue,
    setCurrentAd_aids_devices_activitiesValue,
  ] = React.useState(undefined);
  const ad_aids_devices_activitiesRef = React.createRef();
  const [currentAd_categories_helpValue, setCurrentAd_categories_helpValue] =
    React.useState(undefined);
  const ad_categories_helpRef = React.createRef();
  const validations = {
    date: [{ type: "Required" }],
    last_name: [],
    first_name: [],
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
    primary_care_physician_phone: [{ type: "Phone" }],
    referring_physician_name: [],
    referring_physician_phone: [{ type: "Phone" }],
    emergency_contact_name: [],
    emergency_contact_phone: [{ type: "Phone" }],
    emergency_contact_relationship: [],
    signature_page_1: [],
    signature_page_1_date: [],
    ph_briefly_describe_present_symptoms: [],
    ph_previous_treatment_for_problem: [],
    ph_current_medicine_1: [],
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
    ph_drugs: [],
    ph_alcohol: [],
    ph_alcohol_weekly: [],
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
          ph_current_medicine_1,
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
              ph_current_medicine_1,
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
          label="Last name"
          isRequired={false}
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
                ph_current_medicine_1,
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
          label="First name"
          isRequired={false}
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
                ph_current_medicine_1,
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
                ph_current_medicine_1,
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
          label="Gender"
          isRequired={false}
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
                ph_current_medicine_1,
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
          label="Marital status"
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
                ph_current_medicine_1,
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
                ph_current_medicine_1,
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
                ph_current_medicine_1,
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
                ph_current_medicine_1,
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
          label="Address"
          isRequired={false}
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
                ph_current_medicine_1,
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
                ph_current_medicine_1,
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
          label="State"
          isRequired={false}
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
                ph_current_medicine_1,
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
                ph_current_medicine_1,
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
                ph_current_medicine_1,
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
                ph_current_medicine_1,
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
                ph_current_medicine_1,
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
        label="Email"
        isRequired={false}
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
              ph_current_medicine_1,
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
                ph_current_medicine_1,
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
                ph_current_medicine_1,
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
        label="Education"
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
              ph_current_medicine_1,
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
          children="High School"
          value="High School"
          {...getOverrideProps(overrides, "educationoption0")}
        ></option>
        <option
          children="College"
          value="College"
          {...getOverrideProps(overrides, "educationoption1")}
        ></option>
        <option
          children="Grad School"
          value="Grad School"
          {...getOverrideProps(overrides, "educationoption2")}
        ></option>
      </SelectField>
      <SwitchField
        label="Are you a veteran?"
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
              ph_current_medicine_1,
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
        label="Occupation"
        isRequired={false}
        isReadOnly={false}
        value={occupatin}
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
              ph_current_medicine_1,
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
              ph_current_medicine_1,
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
              ph_current_medicine_1,
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
        {...getOverrideProps(overrides, "SectionalElement2")}
      ></Divider>
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
        label="Name of Primary Insurance"
        isRequired={false}
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
              ph_current_medicine_1,
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
        {...getOverrideProps(overrides, "RowGrid19")}
      >
        <TextField
          label="ID #"
          isRequired={false}
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
                ph_current_medicine_1,
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
          label="Group #"
          isRequired={false}
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
                ph_current_medicine_1,
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
        {...getOverrideProps(overrides, "RowGrid20")}
      >
        <TextField
          label="Address"
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
                ph_current_medicine_1,
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
                ph_current_medicine_1,
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
        label="If other than self, Nmae of Insured Person"
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
              ph_current_medicine_1,
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
              ph_current_medicine_1,
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
              ph_current_medicine_1,
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
        {...getOverrideProps(overrides, "RowGrid24")}
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
                ph_current_medicine_1,
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
                ph_current_medicine_1,
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
        {...getOverrideProps(overrides, "RowGrid25")}
      >
        <TextField
          label="Address"
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
                ph_current_medicine_1,
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
                ph_current_medicine_1,
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
      <Divider
        orientation="horizontal"
        {...getOverrideProps(overrides, "SectionalElement5")}
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
        {...getOverrideProps(overrides, "RowGrid29")}
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
                ph_current_medicine_1,
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
                ph_current_medicine_1,
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
        {...getOverrideProps(overrides, "RowGrid30")}
      >
        <TextField
          label="Name of Referring Physician"
          isRequired={false}
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
                ph_current_medicine_1,
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
                ph_current_medicine_1,
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
      <Divider
        orientation="horizontal"
        {...getOverrideProps(overrides, "SectionalElement7")}
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
        {...getOverrideProps(overrides, "RowGrid34")}
      >
        <TextField
          label="Name"
          isRequired={false}
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
                ph_current_medicine_1,
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
          label="Phone #"
          isRequired={false}
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
                ph_current_medicine_1,
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
        label="Relationship"
        isRequired={false}
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
              ph_current_medicine_1,
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
      <Divider
        orientation="horizontal"
        {...getOverrideProps(overrides, "SectionalElement11")}
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
        {...getOverrideProps(overrides, "RowGrid40")}
      >
        <TextField
          label="Signature"
          isRequired={false}
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
                ph_current_medicine_1,
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
          label="Date"
          isRequired={false}
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
                ph_current_medicine_1,
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
      <Heading
        level={4}
        children="PATIENT HISTORY"
        {...getOverrideProps(overrides, "SectionalElement90")}
      ></Heading>
      <TextAreaField
        label="Briefly describe your presenting symptoms"
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
              ph_current_medicine_1,
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
              ph_current_medicine_1,
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
        label="Current Medications: (Name and Dose)"
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
              ph_current_medicine_1: value,
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
      ></TextAreaField>
      <SwitchField
        label="ALLERGY to any medication?"
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
              ph_current_medicine_1,
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
              ph_current_medicine_1,
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
        {...getOverrideProps(overrides, "SectionalElement17")}
      ></Divider>
      <Text
        children="Rheumatology / Arthritis History:"
        {...getOverrideProps(overrides, "SectionalElement16")}
      ></Text>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid51")}
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
                ph_current_medicine_1,
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
                ph_current_medicine_1,
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
        {...getOverrideProps(overrides, "RowGrid52")}
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
                ph_current_medicine_1,
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
                ph_current_medicine_1,
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
        {...getOverrideProps(overrides, "RowGrid53")}
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
                ph_current_medicine_1,
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
          label="Rheumatoid Arthiritis"
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
                ph_current_medicine_1,
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
        {...getOverrideProps(overrides, "RowGrid54")}
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
                ph_current_medicine_1,
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
                ph_current_medicine_1,
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
              ph_current_medicine_1,
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
              ph_current_medicine_1,
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
        {...getOverrideProps(overrides, "RowGrid57")}
      >
        <SelectField
          label="Do you smoke?"
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
                ph_current_medicine_1,
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
          label="Do you use drugs (not prescribed)?"
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
                ph_current_medicine_1,
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
        {...getOverrideProps(overrides, "RowGrid58")}
      >
        <SelectField
          label="Do you drink alcohol?"
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
                ph_current_medicine_1,
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
                ph_current_medicine_1,
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
              ph_current_medicine_1,
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
              ph_current_medicine_1,
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
              ph_current_medicine_1,
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
        {...getOverrideProps(overrides, "RowGrid62")}
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
                ph_current_medicine_1,
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
                ph_current_medicine_1,
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
              ph_current_medicine_1,
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
        label="Review of Symptoms (Please write if you are currently or recently experiencing any of these symptoms): Fatigue, Weight Loss, Weight Gain, Fever, Night Sweats, Dry Eye, Eye Pain, Loss of Vision, Tinnitus, Hearing Loss, Nosebleed, Sneezing, Dry Mouth, Canker Sores, Cold Sores, Loss of Smell or Taste, Difficulty Swallowing, Sore Throat, Bleeding Gums, Hoarse Voice, Chest Pain, Shortness of Breath, High Blood Pressure, Low Blood Pressure, Heart Murmurs, Cough, Nausea, Vomiting, Diarrhea, Abdominal Pain, Constipation, Blood in Stool, Heartburn, Difficulty Urine, Urine Infection, Vaginal Ulcers, STDs, Nighttime Urination, Incontinence, Stiffness, Joint Pain, Joint Swelling, Muscle Pain, Weakness, Numbness/Tingling, Rash, Psoriasis, Bruising, Skin Nodule, Skin Ulcer, Color changes in Hands/Feet when Cold, Headaches, Dizziness, Loss of Consciousness, Falling, Memory Loss, Anxiety, Depression, Anger, PTSD, Difficulty Falling Asleep, Difficulty Staying Asleep, Swollen Glands, Tender Glands, Anemia, Transfusions, Cancer"
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
              ph_current_medicine_1,
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
      <Divider
        orientation="horizontal"
        {...getOverrideProps(overrides, "SectionalElement18")}
      ></Divider>
      <Divider
        orientation="horizontal"
        {...getOverrideProps(overrides, "SectionalElement19")}
      ></Divider>
      <Heading
        level={4}
        children="ACTIVITIES OF DAILY LIVING"
        {...getOverrideProps(overrides, "SectionalElement900")}
      ></Heading>
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
              ph_current_medicine_1,
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
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid69")}
      >
        <TextField
          label="Who does most of the shopping?"
          isRequired={false}
          isReadOnly={false}
          value={ad_who_shopping}
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
                ph_current_medicine_1,
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
          label="Most housework/yardwork?"
          isRequired={false}
          isReadOnly={false}
          value={ad_housework}
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
                ph_current_medicine_1,
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
      </Grid>
      <TextField
        label="What is the hardest thing for your to do?"
        isRequired={false}
        isReadOnly={false}
        value={ad_hardest_thing}
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
              ph_current_medicine_1,
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
      <Heading
        children="Please choose the response which best describes your usual abilities OVER THE PAST WEEK:"
        {...getOverrideProps(overrides, "SectionalElement120")}
      ></Heading>
      <SelectField
        label="Stand up from a straight chair"
        placeholder="Please select an option"
        isDisabled={false}
        value={ad_ability_stand_up_chair}
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
              ph_current_medicine_1,
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
      >
        <option
          children="Without ANY Difficulty"
          value="Without ANY Difficulty"
          {...getOverrideProps(overrides, "ad_ability_stand_up_chairoption0")}
        ></option>
        <option
          children="With SOME Difficulty"
          value="With SOME Difficulty"
          {...getOverrideProps(overrides, "ad_ability_stand_up_chairoption1")}
        ></option>
        <option
          children="With MUCH Difficulty"
          value="With MUCH Difficulty"
          {...getOverrideProps(overrides, "ad_ability_stand_up_chairoption2")}
        ></option>
      </SelectField>
      <SelectField
        label="Walk outdoors on flat ground"
        placeholder="Please select an option"
        isDisabled={false}
        value={ad_ability_walk_outdoors_flat}
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
              ph_current_medicine_1,
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
      >
        <option
          children="Without ANY Difficulty"
          value="Without ANY Difficulty"
          {...getOverrideProps(
            overrides,
            "ad_ability_walk_outdoors_flatoption0"
          )}
        ></option>
        <option
          children="With SOME Difficulty"
          value="With SOME Difficulty"
          {...getOverrideProps(
            overrides,
            "ad_ability_walk_outdoors_flatoption1"
          )}
        ></option>
        <option
          children="With MUCH Difficulty"
          value="With MUCH Difficulty"
          {...getOverrideProps(
            overrides,
            "ad_ability_walk_outdoors_flatoption2"
          )}
        ></option>
      </SelectField>
      <SelectField
        label="Get on/off toilet"
        placeholder="Please select an option"
        isDisabled={false}
        value={ad_ability_get_on_toilet}
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
              ph_current_medicine_1,
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
      >
        <option
          children="Without ANY Difficulty"
          value="Without ANY Difficulty"
          {...getOverrideProps(overrides, "ad_ability_get_on_toiletoption0")}
        ></option>
        <option
          children="With SOME Difficulty"
          value="With SOME Difficulty"
          {...getOverrideProps(overrides, "ad_ability_get_on_toiletoption1")}
        ></option>
        <option
          children="With MUCH Difficulty"
          value="With MUCH Difficulty"
          {...getOverrideProps(overrides, "ad_ability_get_on_toiletoption2")}
        ></option>
        <option
          children="UNABLE to do"
          value="UNABLE to do"
          {...getOverrideProps(overrides, "ad_ability_get_on_toiletoption3")}
        ></option>
      </SelectField>
      <SelectField
        label="Reach and get down a 5 pound object (such as a bag of sugar) from just above your head?"
        placeholder="Please select an option"
        isDisabled={false}
        value={ad_ability_reach_5_pound}
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
              ph_current_medicine_1,
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
      >
        <option
          children="Without ANY Difficulty"
          value="Without ANY Difficulty"
          {...getOverrideProps(overrides, "ad_ability_reach_5_poundoption0")}
        ></option>
        <option
          children="With SOME Difficulty"
          value="With SOME Difficulty"
          {...getOverrideProps(overrides, "ad_ability_reach_5_poundoption1")}
        ></option>
        <option
          children="With MUCH Difficulty"
          value="With MUCH Difficulty"
          {...getOverrideProps(overrides, "ad_ability_reach_5_poundoption2")}
        ></option>
      </SelectField>
      <SelectField
        label="Open car doors"
        placeholder="Please select an option"
        isDisabled={false}
        value={ad_ability_car_doors}
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
              ph_current_medicine_1,
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
      >
        <option
          children="Without ANY Difficulty"
          value="Without ANY Difficulty"
          {...getOverrideProps(overrides, "ad_ability_car_doorsoption0")}
        ></option>
        <option
          children="With SOME Difficulty"
          value="With SOME Difficulty"
          {...getOverrideProps(overrides, "ad_ability_car_doorsoption1")}
        ></option>
        <option
          children="With MUCH Difficulty"
          value="With MUCH Difficulty"
          {...getOverrideProps(overrides, "ad_ability_car_doorsoption2")}
        ></option>
      </SelectField>
      <SelectField
        label="Do outside work (such as yard work)"
        placeholder="Please select an option"
        isDisabled={false}
        value={ad_ability_outside_work}
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
              ph_current_medicine_1,
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
      >
        <option
          children="Without ANY Difficulty"
          value="Without ANY Difficulty"
          {...getOverrideProps(overrides, "ad_ability_outside_workoption0")}
        ></option>
        <option
          children="With SOME Difficulty"
          value="With SOME Difficulty"
          {...getOverrideProps(overrides, "ad_ability_outside_workoption1")}
        ></option>
        <option
          children="With MUCH Difficulty"
          value="With MUCH Difficulty"
          {...getOverrideProps(overrides, "ad_ability_outside_workoption2")}
        ></option>
        <option
          children="UNABLE to do"
          value="UNABLE to do"
          {...getOverrideProps(overrides, "ad_ability_outside_workoption3")}
        ></option>
      </SelectField>
      <SelectField
        label="Wait in line for 15 minutes"
        placeholder="Please select an option"
        isDisabled={false}
        value={ad_ability_wait_in_line}
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
              ph_current_medicine_1,
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
      >
        <option
          children="Without ANY Difficulty"
          value="Without ANY Difficulty"
          {...getOverrideProps(overrides, "ad_ability_wait_in_lineoption0")}
        ></option>
        <option
          children="With SOME Difficulty"
          value="With SOME Difficulty"
          {...getOverrideProps(overrides, "ad_ability_wait_in_lineoption1")}
        ></option>
        <option
          children="With MUCH Difficulty"
          value="With MUCH Difficulty"
          {...getOverrideProps(overrides, "ad_ability_wait_in_lineoption2")}
        ></option>
      </SelectField>
      <SelectField
        label="Lift heavy objects"
        placeholder="Please select an option"
        isDisabled={false}
        value={ad_ability_lift_heavy}
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
              ph_current_medicine_1,
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
      >
        <option
          children="Without ANY Difficulty"
          value="Without ANY Difficulty"
          {...getOverrideProps(overrides, "ad_ability_lift_heavyoption0")}
        ></option>
        <option
          children="With SOME Difficulty"
          value="With SOME Difficulty"
          {...getOverrideProps(overrides, "ad_ability_lift_heavyoption1")}
        ></option>
        <option
          children="With MUCH Difficulty"
          value="With MUCH Difficulty"
          {...getOverrideProps(overrides, "ad_ability_lift_heavyoption2")}
        ></option>
      </SelectField>
      <SelectField
        label="Lift more heavier objects"
        placeholder="Please select an option"
        isDisabled={false}
        value={ad_ability_lift_heavier}
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
              ph_current_medicine_1,
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
      >
        <option
          children="Without ANY Difficulty"
          value="Without ANY Difficulty"
          {...getOverrideProps(overrides, "ad_ability_lift_heavieroption0")}
        ></option>
        <option
          children="With SOME Difficulty"
          value="With SOME Difficulty"
          {...getOverrideProps(overrides, "ad_ability_lift_heavieroption1")}
        ></option>
        <option
          children="With MUCH Difficulty"
          value="With MUCH Difficulty"
          {...getOverrideProps(overrides, "ad_ability_lift_heavieroption2")}
        ></option>
      </SelectField>
      <SelectField
        label="Go up 2 flights of stairs"
        placeholder="Please select an option"
        isDisabled={false}
        value={ad_ability_climb_2_flights}
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
              ph_current_medicine_1,
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
      >
        <option
          children="Without ANY Difficulty"
          value="Without ANY Difficulty"
          {...getOverrideProps(overrides, "ad_ability_climb_2_flightsoption0")}
        ></option>
        <option
          children="With SOME Difficulty"
          value="With SOME Difficulty"
          {...getOverrideProps(overrides, "ad_ability_climb_2_flightsoption1")}
        ></option>
        <option
          children="With MUCH Difficulty"
          value="With MUCH Difficulty"
          {...getOverrideProps(overrides, "ad_ability_climb_2_flightsoption2")}
        ></option>
        <option
          children="UNABLE to do"
          value="UNABLE to do"
          {...getOverrideProps(overrides, "ad_ability_climb_2_flightsoption3")}
        ></option>
      </SelectField>
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
              ph_current_medicine_1,
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
              ad_aids_devices_activities: values,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
            };
            const result = onChange(modelFields);
            values = result?.ad_aids_devices_activities ?? values;
          }
          setAd_aids_devices_activities(values);
          setCurrentAd_aids_devices_activitiesValue(undefined);
        }}
        currentFieldValue={currentAd_aids_devices_activitiesValue}
        label={
          "Please write down any AIDS OR DEVICES that you usually use for any of these activities: (Cane, Crutches, Wheelchair, Walker)"
        }
        items={ad_aids_devices_activities}
        hasError={errors?.ad_aids_devices_activities?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "ad_aids_devices_activities",
            currentAd_aids_devices_activitiesValue
          )
        }
        errorMessage={errors?.ad_aids_devices_activities?.errorMessage}
        setFieldValue={setCurrentAd_aids_devices_activitiesValue}
        inputFieldRef={ad_aids_devices_activitiesRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Please write down any AIDS OR DEVICES that you usually use for any of these activities: (Cane, Crutches, Wheelchair, Walker)"
          isRequired={false}
          isReadOnly={false}
          value={currentAd_aids_devices_activitiesValue}
          options={[
            {
              id: "Cane",
              label: "Cane",
            },
            {
              id: "Crutches ",
              label: "Crutches ",
            },
            {
              id: "Wheelchair",
              label: "Wheelchair",
            },
            {
              id: "Walker",
              label: "Walker",
            },
          ]}
          onSelect={({ id, label }) => {
            setCurrentAd_aids_devices_activitiesValue(id);
            runValidationTasks("ad_aids_devices_activities", id);
          }}
          onClear={() => {
            setCurrentAd_aids_devices_activitiesDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.ad_aids_devices_activities?.hasError) {
              runValidationTasks("ad_aids_devices_activities", value);
            }
            setCurrentAd_aids_devices_activitiesValue(value);
          }}
          onBlur={() =>
            runValidationTasks(
              "ad_aids_devices_activities",
              currentAd_aids_devices_activitiesValue
            )
          }
          errorMessage={errors.ad_aids_devices_activities?.errorMessage}
          hasError={errors.ad_aids_devices_activities?.hasError}
          ref={ad_aids_devices_activitiesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "ad_aids_devices_activities")}
        ></Autocomplete>
      </ArrayField>
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
              ph_current_medicine_1,
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
              ad_categories_help: values,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
            };
            const result = onChange(modelFields);
            values = result?.ad_categories_help ?? values;
          }
          setAd_categories_help(values);
          setCurrentAd_categories_helpValue(undefined);
        }}
        currentFieldValue={currentAd_categories_helpValue}
        label={
          "Please write down any categories for which you usually need help from another person: (Dressing & Grooming, Eating, Arising, Walking)"
        }
        items={ad_categories_help}
        hasError={errors?.ad_categories_help?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "ad_categories_help",
            currentAd_categories_helpValue
          )
        }
        errorMessage={errors?.ad_categories_help?.errorMessage}
        setFieldValue={setCurrentAd_categories_helpValue}
        inputFieldRef={ad_categories_helpRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Please write down any categories for which you usually need help from another person: (Dressing & Grooming, Eating, Arising, Walking)"
          isRequired={false}
          isReadOnly={false}
          value={currentAd_categories_helpValue}
          options={[
            {
              id: "Dressing & Grooming ",
              label: "Dressing & Grooming ",
            },
            {
              id: "Eating",
              label: "Eating",
            },
            {
              id: "Arising",
              label: "Arising",
            },
            {
              id: "Walking",
              label: "Walking",
            },
          ]}
          onSelect={({ id, label }) => {
            setCurrentAd_categories_helpValue(id);
            runValidationTasks("ad_categories_help", id);
          }}
          onClear={() => {
            setCurrentAd_categories_helpDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.ad_categories_help?.hasError) {
              runValidationTasks("ad_categories_help", value);
            }
            setCurrentAd_categories_helpValue(value);
          }}
          onBlur={() =>
            runValidationTasks(
              "ad_categories_help",
              currentAd_categories_helpValue
            )
          }
          errorMessage={errors.ad_categories_help?.errorMessage}
          hasError={errors.ad_categories_help?.hasError}
          ref={ad_categories_helpRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "ad_categories_help")}
        ></Autocomplete>
      </ArrayField>
      <SliderField
        label="On a scale of 0-100, how much pain do you have on a daily basis? (0 = no pain, 100 = severe pain)"
        isDisabled={false}
        isRequired={false}
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
              ph_current_medicine_1,
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
      <SliderField
        label="Considering all the ways your arthritis affects you, rate how well you are doing on the following scale (0 = very well; 100 = very poorly)"
        isDisabled={false}
        isRequired={false}
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
              ph_current_medicine_1,
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
