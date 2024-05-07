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
  SwitchField,
  Text,
  TextAreaField,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createPatientHistory } from "../graphql/mutations";
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
export default function PatientHistoryCreateForm(props) {
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
    first_name: "",
    last_name: "",
    date_of_birth: "",
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
  };
  const [first_name, setFirst_name] = React.useState(initialValues.first_name);
  const [last_name, setLast_name] = React.useState(initialValues.last_name);
  const [date_of_birth, setDate_of_birth] = React.useState(
    initialValues.date_of_birth
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
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setFirst_name(initialValues.first_name);
    setLast_name(initialValues.last_name);
    setDate_of_birth(initialValues.date_of_birth);
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
    setErrors({});
  };
  const [currentPh_symptomsValue, setCurrentPh_symptomsValue] =
    React.useState(undefined);
  const ph_symptomsRef = React.createRef();
  const validations = {
    first_name: [{ type: "Required" }],
    last_name: [{ type: "Required" }],
    date_of_birth: [{ type: "Required" }],
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
          first_name,
          last_name,
          date_of_birth,
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
            query: createPatientHistory.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "PatientHistoryCreateForm")}
      {...rest}
    >
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(3, auto)"
        {...getOverrideProps(overrides, "RowGrid0")}
      >
        <TextField
          label="First name"
          isRequired={true}
          isReadOnly={false}
          value={first_name}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                first_name: value,
                last_name,
                date_of_birth,
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
          isRequired={true}
          isReadOnly={false}
          value={last_name}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                first_name,
                last_name: value,
                date_of_birth,
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
          isRequired={true}
          isReadOnly={false}
          type="date"
          value={date_of_birth}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                first_name,
                last_name,
                date_of_birth: value,
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
      <Heading
        level={4}
        children="PATIENT HISTORY"
        {...getOverrideProps(overrides, "SectionalElement0")}
      ></Heading>
      <TextAreaField
        label="Briefly describe your presenting symptoms *"
        isRequired={true}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              first_name,
              last_name,
              date_of_birth,
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
              first_name,
              last_name,
              date_of_birth,
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
      <TextField
        label="Current Medications: (Name and Dose) *"
        isRequired={true}
        isReadOnly={false}
        value={ph_current_medicines}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              first_name,
              last_name,
              date_of_birth,
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
      ></TextField>
      <SwitchField
        label="ALLERGY to any medication? *"
        defaultChecked={false}
        isDisabled={false}
        isChecked={ph_allergy_to_med}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              first_name,
              last_name,
              date_of_birth,
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
              first_name,
              last_name,
              date_of_birth,
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
        {...getOverrideProps(overrides, "RowGrid9")}
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
                first_name,
                last_name,
                date_of_birth,
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
                first_name,
                last_name,
                date_of_birth,
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
        {...getOverrideProps(overrides, "RowGrid10")}
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
                first_name,
                last_name,
                date_of_birth,
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
                first_name,
                last_name,
                date_of_birth,
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
        {...getOverrideProps(overrides, "RowGrid11")}
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
                first_name,
                last_name,
                date_of_birth,
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
                first_name,
                last_name,
                date_of_birth,
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
        {...getOverrideProps(overrides, "RowGrid12")}
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
                first_name,
                last_name,
                date_of_birth,
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
                first_name,
                last_name,
                date_of_birth,
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
              first_name,
              last_name,
              date_of_birth,
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
              first_name,
              last_name,
              date_of_birth,
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
        {...getOverrideProps(overrides, "RowGrid15")}
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
                first_name,
                last_name,
                date_of_birth,
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
                first_name,
                last_name,
                date_of_birth,
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
        {...getOverrideProps(overrides, "RowGrid16")}
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
                first_name,
                last_name,
                date_of_birth,
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
                first_name,
                last_name,
                date_of_birth,
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
              first_name,
              last_name,
              date_of_birth,
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
              first_name,
              last_name,
              date_of_birth,
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
              first_name,
              last_name,
              date_of_birth,
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
        {...getOverrideProps(overrides, "RowGrid20")}
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
                first_name,
                last_name,
                date_of_birth,
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
                first_name,
                last_name,
                date_of_birth,
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
              first_name,
              last_name,
              date_of_birth,
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
              first_name,
              last_name,
              date_of_birth,
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
        {...getOverrideProps(overrides, "SectionalElement3")}
      ></Heading>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              first_name,
              last_name,
              date_of_birth,
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
