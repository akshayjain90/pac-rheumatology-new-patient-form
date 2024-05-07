/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Autocomplete,
  Button,
  Divider,
  Flex,
  Grid,
  Heading,
  SelectField,
  SliderField,
  SwitchField,
  Text,
  TextAreaField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getNewPatient } from "../graphql/queries";
import { updateNewPatient } from "../graphql/mutations";
const client = generateClient();
export default function Page2PatientHistory(props) {
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
    ad_aids_devices_activities: undefined,
    ad_categories_help: undefined,
    ad_daily_pain_scale: 0,
    ad_how_well_doing_scale: 0,
    occupation: "",
    insurance_primary_insured_person_dob: "",
    race_other: "",
  };
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
  const [occupation, setOccupation] = React.useState(initialValues.occupation);
  const [
    insurance_primary_insured_person_dob,
    setInsurance_primary_insured_person_dob,
  ] = React.useState(initialValues.insurance_primary_insured_person_dob);
  const [race_other, setRace_other] = React.useState(initialValues.race_other);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = newPatientRecord
      ? { ...initialValues, ...newPatientRecord }
      : initialValues;
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
    setPh_drugs(cleanValues.ph_drugs);
    setPh_alcohol(cleanValues.ph_alcohol);
    setPh_alcohol_weekly(cleanValues.ph_alcohol_weekly);
    setPh_sleep(cleanValues.ph_sleep);
    setPh_exercise(cleanValues.ph_exercise);
    setPh_travel(cleanValues.ph_travel);
    setPh_pregnant(cleanValues.ph_pregnant);
    setPh_live_births(cleanValues.ph_live_births);
    setPh_complications(cleanValues.ph_complications);
    setPh_symptoms(cleanValues.ph_symptoms);
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
    setOccupation(cleanValues.occupation);
    setInsurance_primary_insured_person_dob(
      cleanValues.insurance_primary_insured_person_dob
    );
    setRace_other(cleanValues.race_other);
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
    occupation: [{ type: "Required" }],
    insurance_primary_insured_person_dob: [],
    race_other: [],
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
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
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
          ph_drugs: ph_drugs ?? null,
          ph_alcohol: ph_alcohol ?? null,
          ph_alcohol_weekly: ph_alcohol_weekly ?? null,
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
          occupation,
          insurance_primary_insured_person_dob:
            insurance_primary_insured_person_dob ?? null,
          race_other: race_other ?? null,
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
          const modelFieldsToSave = {
            occupation: modelFields.occupation,
            insurance_primary_insured_person_dob:
              modelFields.insurance_primary_insured_person_dob ?? null,
            race_other: modelFields.race_other ?? null,
          };
          await client.graphql({
            query: updateNewPatient.replaceAll("__typename", ""),
            variables: {
              input: {
                id: newPatientRecord.id,
                ...modelFieldsToSave,
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
      {...getOverrideProps(overrides, "Page2PatientHistory")}
      {...rest}
    >
      <TextAreaField
        label="Briefly describe your presenting symptoms:"
        value={ph_briefly_describe_present_symptoms}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
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
              occupation,
              insurance_primary_insured_person_dob,
              race_other,
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
        label="Previous treatment for this problem (i.e., Physical therapy, Medication, Surgery, Other):"
        value={ph_previous_treatment_for_problem}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
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
              occupation,
              insurance_primary_insured_person_dob,
              race_other,
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
      <Text
        children="Current Medications: (Name and Dose)"
        {...getOverrideProps(overrides, "SectionalElement0")}
      ></Text>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(3, auto)"
        {...getOverrideProps(overrides, "RowGrid3")}
      >
        <TextField
          label="1."
          value={ph_current_medicine_1}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
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
                occupation,
                insurance_primary_insured_person_dob,
                race_other,
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
          label="2."
          value={ph_current_medicine_2}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
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
                occupation,
                insurance_primary_insured_person_dob,
                race_other,
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
          label="3."
          value={ph_current_medicine_3}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
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
                occupation,
                insurance_primary_insured_person_dob,
                race_other,
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
      </Grid>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(3, auto)"
        {...getOverrideProps(overrides, "RowGrid4")}
      >
        <TextField
          label="4."
          value={ph_current_medicine_4}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
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
                occupation,
                insurance_primary_insured_person_dob,
                race_other,
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
          label="5."
          value={ph_current_medicine_5}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
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
                occupation,
                insurance_primary_insured_person_dob,
                race_other,
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
          label="6."
          value={ph_current_medicine_6}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
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
                occupation,
                insurance_primary_insured_person_dob,
                race_other,
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
      </Grid>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(3, auto)"
        {...getOverrideProps(overrides, "RowGrid5")}
      >
        <TextField
          label="7."
          value={ph_current_medicine_7}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
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
                occupation,
                insurance_primary_insured_person_dob,
                race_other,
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
          label="8."
          value={ph_current_medicine_8}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
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
                occupation,
                insurance_primary_insured_person_dob,
                race_other,
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
          label="9."
          value={ph_current_medicine_9}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
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
                occupation,
                insurance_primary_insured_person_dob,
                race_other,
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
      </Grid>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(3, auto)"
        {...getOverrideProps(overrides, "RowGrid6")}
      >
        <TextField
          label="10."
          value={ph_current_medicine_10}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
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
                occupation,
                insurance_primary_insured_person_dob,
                race_other,
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
          label="11."
          value={ph_current_medicine_11}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
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
                occupation,
                insurance_primary_insured_person_dob,
                race_other,
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
          label="12."
          value={ph_current_medicine_12}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
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
                occupation,
                insurance_primary_insured_person_dob,
                race_other,
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
      </Grid>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(3, auto)"
        {...getOverrideProps(overrides, "RowGrid7")}
      >
        <TextField
          label="13."
          value={ph_current_medicine_13}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
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
                occupation,
                insurance_primary_insured_person_dob,
                race_other,
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
          label="14."
          value={ph_current_medicine_14}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
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
                occupation,
                insurance_primary_insured_person_dob,
                race_other,
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
          label="15."
          value={ph_current_medicine_15}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
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
                occupation,
                insurance_primary_insured_person_dob,
                race_other,
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
      </Grid>
      <SwitchField
        label="ALLERGY to any medication?"
        defaultChecked={false}
        isChecked={ph_allergy_to_med}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
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
              occupation,
              insurance_primary_insured_person_dob,
              race_other,
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
        value={ph_allergy_to_med_list}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
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
              occupation,
              insurance_primary_insured_person_dob,
              race_other,
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
        {...getOverrideProps(overrides, "SectionalElement1")}
      ></Divider>
      <Text
        children="Rheumatology / Arthritis History:"
        {...getOverrideProps(overrides, "SectionalElement2")}
      ></Text>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid12")}
      >
        <TextField
          label="Osteoarthritis"
          placeholder="Self / Family Member (State Relationship)"
          value={ph_rh_history_osteoarthritis}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
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
                occupation,
                insurance_primary_insured_person_dob,
                race_other,
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
          placeholder="Self / Family Member (State Relationship)"
          value={ph_rh_history_gout}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
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
                occupation,
                insurance_primary_insured_person_dob,
                race_other,
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
        {...getOverrideProps(overrides, "RowGrid13")}
      >
        <TextField
          label="Juvenile Arthritis"
          placeholder="Self / Family Member (State Relationship)"
          value={ph_rh_history_juvenile_arthritis}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
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
                occupation,
                insurance_primary_insured_person_dob,
                race_other,
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
          placeholder="Self / Family Member (State Relationship)"
          value={ph_rh_history_vasculitis}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
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
                occupation,
                insurance_primary_insured_person_dob,
                race_other,
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
        {...getOverrideProps(overrides, "RowGrid14")}
      >
        <TextField
          label="Lupus / SLE"
          placeholder="Self / Family Member (State Relationship)"
          value={ph_rh_history_lupus}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
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
                occupation,
                insurance_primary_insured_person_dob,
                race_other,
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
          placeholder="Self / Family Member (State Relationship)"
          value={ph_rh_history_rheumatoid}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
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
                occupation,
                insurance_primary_insured_person_dob,
                race_other,
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
        {...getOverrideProps(overrides, "RowGrid15")}
      >
        <TextField
          label="Spondyloarthropathy (i.e., A.S., Psoriatic Arthritis, etc.)"
          placeholder="Self / Family Member (State Relationship)"
          value={ph_rh_history_spondyloarthropathy}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
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
                occupation,
                insurance_primary_insured_person_dob,
                race_other,
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
          placeholder="Self / Family Member (State Relationship)"
          value={ph_rh_history_osteoporosis}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
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
                occupation,
                insurance_primary_insured_person_dob,
                race_other,
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
        label="Past Medical History:"
        value={ph_past_medical_history}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
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
              occupation,
              insurance_primary_insured_person_dob,
              race_other,
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
        value={ph_past_surgery_history}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
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
              occupation,
              insurance_primary_insured_person_dob,
              race_other,
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
        {...getOverrideProps(overrides, "RowGrid18")}
      >
        <SelectField
          label="Do you smoke?"
          placeholder="Please select an option"
          value={ph_smoke}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
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
                occupation,
                insurance_primary_insured_person_dob,
                race_other,
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
          value={ph_drugs}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
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
                occupation,
                insurance_primary_insured_person_dob,
                race_other,
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
        {...getOverrideProps(overrides, "RowGrid19")}
      >
        <SelectField
          label="Do you drink alcohol?"
          placeholder="Please select an option"
          value={ph_alcohol}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
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
                occupation,
                insurance_primary_insured_person_dob,
                race_other,
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
          value={ph_alcohol_weekly}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
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
                occupation,
                insurance_primary_insured_person_dob,
                race_other,
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
        value={ph_sleep}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
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
              occupation,
              insurance_primary_insured_person_dob,
              race_other,
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
        value={ph_exercise}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
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
              occupation,
              insurance_primary_insured_person_dob,
              race_other,
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
        value={ph_travel}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
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
              occupation,
              insurance_primary_insured_person_dob,
              race_other,
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
        {...getOverrideProps(overrides, "RowGrid23")}
      >
        <SelectField
          label="Have you ever been pregnant?"
          placeholder="Please select an option"
          value={ph_pregnant}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
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
                occupation,
                insurance_primary_insured_person_dob,
                race_other,
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
          value={ph_live_births}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
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
                occupation,
                insurance_primary_insured_person_dob,
                race_other,
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
        value={ph_complications}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
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
              occupation,
              insurance_primary_insured_person_dob,
              race_other,
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
        value={ph_symptoms}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
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
              occupation,
              insurance_primary_insured_person_dob,
              race_other,
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
        {...getOverrideProps(overrides, "SectionalElement3")}
      ></Divider>
      <Divider
        orientation="horizontal"
        {...getOverrideProps(overrides, "SectionalElement4")}
      ></Divider>
      <Heading
        level={4}
        children="ACTIVITIES OF DAILY LIVING"
        {...getOverrideProps(overrides, "SectionalElement5")}
      ></Heading>
      <TextAreaField
        label="How many people in household? (List age & relationship):"
        value={ad_people_in_household}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
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
              occupation,
              insurance_primary_insured_person_dob,
              race_other,
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
        {...getOverrideProps(overrides, "RowGrid30")}
      >
        <TextField
          label="Who does most of the shopping?"
          value={ad_who_shopping}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
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
                occupation,
                insurance_primary_insured_person_dob,
                race_other,
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
          value={ad_housework}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
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
                occupation,
                insurance_primary_insured_person_dob,
                race_other,
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
        value={ad_hardest_thing}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
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
              occupation,
              insurance_primary_insured_person_dob,
              race_other,
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
      <Text
        children="Please choose the response which best describes your usual abilities OVER THE PAST WEEK:"
        {...getOverrideProps(overrides, "SectionalElement6")}
      ></Text>
      <SelectField
        label="Stand up from a straight chair"
        placeholder="Please select an option"
        value={ad_ability_stand_up_chair}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
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
              occupation,
              insurance_primary_insured_person_dob,
              race_other,
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
        <option
          children="UNABLE to do"
          value="UNABLE to do"
          {...getOverrideProps(overrides, "ad_ability_stand_up_chairoption3")}
        ></option>
      </SelectField>
      <SelectField
        label="Walk outdoors on flat ground"
        placeholder="Please select an option"
        value={ad_ability_walk_outdoors_flat}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
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
              occupation,
              insurance_primary_insured_person_dob,
              race_other,
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
        <option
          children="UNABLE to do"
          value="UNABLE to do"
          {...getOverrideProps(
            overrides,
            "ad_ability_walk_outdoors_flatoption3"
          )}
        ></option>
      </SelectField>
      <SelectField
        label="Get on/off toilet"
        placeholder="Please select an option"
        value={ad_ability_get_on_toilet}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
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
              occupation,
              insurance_primary_insured_person_dob,
              race_other,
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
        value={ad_ability_reach_5_pound}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
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
              occupation,
              insurance_primary_insured_person_dob,
              race_other,
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
        <option
          children="UNABLE to do"
          value="UNABLE to do"
          {...getOverrideProps(overrides, "ad_ability_reach_5_poundoption3")}
        ></option>
      </SelectField>
      <SelectField
        label="Open car doors"
        placeholder="Please select an option"
        value={ad_ability_car_doors}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
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
              occupation,
              insurance_primary_insured_person_dob,
              race_other,
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
        <option
          children="UNABLE to do"
          value="UNABLE to do"
          {...getOverrideProps(overrides, "ad_ability_car_doorsoption3")}
        ></option>
      </SelectField>
      <SelectField
        label="Do outside work (such as yard work)"
        placeholder="Please select an option"
        value={ad_ability_outside_work}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
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
              occupation,
              insurance_primary_insured_person_dob,
              race_other,
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
        value={ad_ability_wait_in_line}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
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
              occupation,
              insurance_primary_insured_person_dob,
              race_other,
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
        <option
          children="UNABLE to do"
          value="UNABLE to do"
          {...getOverrideProps(overrides, "ad_ability_wait_in_lineoption3")}
        ></option>
      </SelectField>
      <SelectField
        label="Lift heavy objects"
        placeholder="Please select an option"
        value={ad_ability_lift_heavy}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
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
              occupation,
              insurance_primary_insured_person_dob,
              race_other,
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
        <option
          children="UNABLE to do"
          value="UNABLE to do"
          {...getOverrideProps(overrides, "ad_ability_lift_heavyoption3")}
        ></option>
      </SelectField>
      <SelectField
        label="Lift more heavier objects"
        placeholder="Please select an option"
        value={ad_ability_lift_heavier}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
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
              occupation,
              insurance_primary_insured_person_dob,
              race_other,
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
        <option
          children="UNABLE to do"
          value="UNABLE to do"
          {...getOverrideProps(overrides, "ad_ability_lift_heavieroption3")}
        ></option>
      </SelectField>
      <SelectField
        label="Go up 2 flights of stairs"
        placeholder="Please select an option"
        value={ad_ability_climb_2_flights}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
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
              occupation,
              insurance_primary_insured_person_dob,
              race_other,
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
      <Autocomplete
        label="Please write down any AIDS OR DEVICES that you usually use for any of these activities: (Cane, Crutches, Wheelchair, Walker)"
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
          setAd_aids_devices_activities(id);
          runValidationTasks("ad_aids_devices_activities", id);
        }}
        onClear={() => {
          setAd_aids_devices_activities("");
        }}
        defaultValue={ad_aids_devices_activities}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
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
              ad_aids_devices_activities: value,
              ad_categories_help,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              occupation,
              insurance_primary_insured_person_dob,
              race_other,
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
        labelHidden={false}
        {...getOverrideProps(overrides, "ad_aids_devices_activities")}
      ></Autocomplete>
      <Autocomplete
        label="Please write down any categories for which you usually need help from another person: (Dressing & Grooming, Eating, Arising, Walking)"
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
          setAd_categories_help(id);
          runValidationTasks("ad_categories_help", id);
        }}
        onClear={() => {
          setAd_categories_help("");
        }}
        defaultValue={ad_categories_help}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
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
              ad_categories_help: value,
              ad_daily_pain_scale,
              ad_how_well_doing_scale,
              occupation,
              insurance_primary_insured_person_dob,
              race_other,
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
        labelHidden={false}
        {...getOverrideProps(overrides, "ad_categories_help")}
      ></Autocomplete>
      <SliderField
        label="On a scale of 0-100, how much pain do you have on a daily basis? (0 = no pain, 100 = severe pain)"
        value={ad_daily_pain_scale}
        onChange={(e) => {
          let value = e;
          if (onChange) {
            const modelFields = {
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
              occupation,
              insurance_primary_insured_person_dob,
              race_other,
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
        value={ad_how_well_doing_scale}
        onChange={(e) => {
          let value = e;
          if (onChange) {
            const modelFields = {
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
              occupation,
              insurance_primary_insured_person_dob,
              race_other,
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
      <TextField
        label="Occupation"
        isRequired={true}
        isReadOnly={false}
        value={occupation}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
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
              occupation: value,
              insurance_primary_insured_person_dob,
              race_other,
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
      <TextField
        label="Insurance primary insured person dob"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={insurance_primary_insured_person_dob}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
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
              occupation,
              insurance_primary_insured_person_dob: value,
              race_other,
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
        errorMessage={errors.insurance_primary_insured_person_dob?.errorMessage}
        hasError={errors.insurance_primary_insured_person_dob?.hasError}
        {...getOverrideProps(overrides, "insurance_primary_insured_person_dob")}
      ></TextField>
      <TextField
        label="Race other"
        isRequired={false}
        isReadOnly={false}
        value={race_other}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
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
              occupation,
              insurance_primary_insured_person_dob,
              race_other: value,
            };
            const result = onChange(modelFields);
            value = result?.race_other ?? value;
          }
          if (errors.race_other?.hasError) {
            runValidationTasks("race_other", value);
          }
          setRace_other(value);
        }}
        onBlur={() => runValidationTasks("race_other", race_other)}
        errorMessage={errors.race_other?.errorMessage}
        hasError={errors.race_other?.hasError}
        {...getOverrideProps(overrides, "race_other")}
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
