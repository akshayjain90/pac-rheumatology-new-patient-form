/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Divider,
  Flex,
  Grid,
  Heading,
  SelectField,
  SwitchField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createNewPatient } from "../graphql/mutations";
const client = generateClient();
export default function PatientCreateCustomForm(props) {
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
    race_other: "",
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
    veteran: "",
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
  const [race_other, setRace_other] = React.useState(initialValues.race_other);
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
    setRace_other(initialValues.race_other);
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
    setErrors({});
  };
  const validations = {
    date: [{ type: "Required" }],
    last_name: [{ type: "Required" }],
    first_name: [{ type: "Required" }],
    date_of_birth: [{ type: "Required" }],
    gender: [{ type: "Required" }],
    marital_status: [{ type: "Required" }],
    ethnicity: [],
    race: [],
    race_other: [],
    primary_language: [],
    address: [{ type: "Required" }],
    city: [{ type: "Required" }],
    state: [{ type: "Required" }],
    zip: [{ type: "Required" }],
    home_phone: [{ type: "Required" }],
    work_phone: [],
    mobile_phone: [],
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
    insurance_primary_group: [],
    insurance_primary_address: [],
    insurance_primary_phone: [],
    insurance_primary_insured_person: [],
    insurance_primary_insured_person_relation: [],
    insurance_primary_insured_person_dob: [],
    insurance_secondary: [],
    insurance_secondary_id: [],
    insurance_secondary_group: [],
    insurance_secondary_address: [],
    insurance_secondary_phone: [],
    primary_care_physician_name: [],
    primary_care_physician_phone: [],
    referring_physician_name: [{ type: "Required" }],
    referring_physician_phone: [],
    emergency_contact_name: [{ type: "Required" }],
    emergency_contact_phone: [{ type: "Required" }],
    emergency_contact_relationship: [{ type: "Required" }],
    signature_page_1: [{ type: "Required" }],
    signature_page_1_date: [{ type: "Required" }],
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
          race_other,
          primary_language,
          address,
          city,
          state,
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
      {...getOverrideProps(overrides, "PatientCreateCustomForm")}
      {...rest}
    >
      <Heading
        level={4}
        children="Personal Information"
        {...getOverrideProps(overrides, "SectionalElement0")}
      ></Heading>
      <TextField
        label="Today's Date *"
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
              race_other,
              primary_language,
              address,
              city,
              state,
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
                race_other,
                primary_language,
                address,
                city,
                state,
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
                race_other,
                primary_language,
                address,
                city,
                state,
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
                race_other,
                primary_language,
                address,
                city,
                state,
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
                race_other,
                primary_language,
                address,
                city,
                state,
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
                race_other,
                primary_language,
                address,
                city,
                state,
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
      <SelectField
        label="Ethnicity *"
        placeholder="Please select an option"
        isDisabled={false}
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
              race_other,
              primary_language,
              address,
              city,
              state,
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
      >
        <option
          children="American Indian or Alaska Native"
          value="American Indian or Alaska Native"
          {...getOverrideProps(overrides, "ethnicityoption0")}
        ></option>
        <option
          children="Asian"
          value="Asian"
          {...getOverrideProps(overrides, "ethnicityoption1")}
        ></option>
        <option
          children="Black or African American"
          value="Black or African American"
          {...getOverrideProps(overrides, "ethnicityoption2")}
        ></option>
        <option
          children="Hispanic"
          value="Hispanic"
          {...getOverrideProps(overrides, "ethnicityoption3")}
        ></option>
        <option
          children="Native Hawaiian or Other Pacific Islander"
          value="Native Hawaiian or Other Pacific Islander"
          {...getOverrideProps(overrides, "ethnicityoption4")}
        ></option>
        <option
          children="White"
          value="White"
          {...getOverrideProps(overrides, "ethnicityoption5")}
        ></option>
        <option
          children="Unkown"
          value="Unkown"
          {...getOverrideProps(overrides, "ethnicityoption6")}
        ></option>
      </SelectField>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid5")}
      >
        <SelectField
          label="Race *"
          placeholder="Please select an option"
          isDisabled={false}
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
                race_other,
                primary_language,
                address,
                city,
                state,
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
        >
          <option
            children="American Indian or Alaska Native"
            value="American Indian or Alaska Native"
            {...getOverrideProps(overrides, "raceoption0")}
          ></option>
          <option
            children="Asian"
            value="Asian"
            {...getOverrideProps(overrides, "raceoption1")}
          ></option>
          <option
            children="Asian Indian"
            value="Asian Indian"
            {...getOverrideProps(overrides, "raceoption2")}
          ></option>
          <option
            children="Black or African American"
            value="Black or African American"
            {...getOverrideProps(overrides, "raceoption3")}
          ></option>
          <option
            children="Chinese"
            value="Chinese"
            {...getOverrideProps(overrides, "raceoption4")}
          ></option>
          <option
            children="Chinese American"
            value="Chinese American"
            {...getOverrideProps(overrides, "raceoption5")}
          ></option>
          <option
            children="Decline to Answer"
            value="Decline to Answer"
            {...getOverrideProps(overrides, "raceoption6")}
          ></option>
          <option
            children="Filipino"
            value="Filipino"
            {...getOverrideProps(overrides, "raceoption7")}
          ></option>
          <option
            children="Filipino American"
            value="Filipino American"
            {...getOverrideProps(overrides, "raceoption8")}
          ></option>
          <option
            children="Guamanian or Chamorro"
            value="Guamanian or Chamorro"
            {...getOverrideProps(overrides, "raceoption9")}
          ></option>
          <option
            children="Hispanic"
            value="Hispanic"
            {...getOverrideProps(overrides, "raceoption10")}
          ></option>
          <option
            children="Japanese"
            value="Japanese"
            {...getOverrideProps(overrides, "raceoption11")}
          ></option>
          <option
            children="Japanese American"
            value="Japanese American"
            {...getOverrideProps(overrides, "raceoption12")}
          ></option>
          <option
            children="Korean"
            value="Korean"
            {...getOverrideProps(overrides, "raceoption13")}
          ></option>
          <option
            children="Native Hawaiian"
            value="Native Hawaiian"
            {...getOverrideProps(overrides, "raceoption14")}
          ></option>
          <option
            children="Other"
            value="Other"
            {...getOverrideProps(overrides, "raceoption15")}
          ></option>
          <option
            children="Other Asian"
            value="Other Asian"
            {...getOverrideProps(overrides, "raceoption16")}
          ></option>
          <option
            children="Other Asian American"
            value="Other Asian American"
            {...getOverrideProps(overrides, "raceoption17")}
          ></option>
          <option
            children="Other Pacific Islander"
            value="Other Pacific Islander"
            {...getOverrideProps(overrides, "raceoption18")}
          ></option>
          <option
            children="Samoan"
            value="Samoan"
            {...getOverrideProps(overrides, "raceoption19")}
          ></option>
          <option
            children="Unknown"
            value="Unknown"
            {...getOverrideProps(overrides, "raceoption20")}
          ></option>
          <option
            children="Vietnamese"
            value="Vietnamese"
            {...getOverrideProps(overrides, "raceoption21")}
          ></option>
          <option
            children="White"
            value="White"
            {...getOverrideProps(overrides, "raceoption22")}
          ></option>
        </SelectField>
        <TextField
          label='If "Other", specify race '
          isRequired={false}
          isReadOnly={false}
          value={race_other}
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
                race_other: value,
                primary_language,
                address,
                city,
                state,
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
      </Grid>
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
              race_other,
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
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid7")}
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
                race_other,
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
                race_other,
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
        {...getOverrideProps(overrides, "RowGrid8")}
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
                race_other,
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
                race_other,
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
        {...getOverrideProps(overrides, "RowGrid9")}
      >
        <TextField
          label="Home phone *"
          isRequired={true}
          isReadOnly={false}
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
                race_other,
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
                race_other,
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
                race_other,
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
              race_other,
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
        {...getOverrideProps(overrides, "RowGrid11")}
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
                race_other,
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
                race_other,
                primary_language,
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
              race_other,
              primary_language,
              address,
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
      <SelectField
        label="Veteran status *"
        placeholder="Please select an option"
        isDisabled={false}
        value={veteran}
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
              race_other,
              primary_language,
              address,
              city,
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
      >
        <option
          children="Declined"
          value="Declined"
          {...getOverrideProps(overrides, "veteranoption0")}
        ></option>
        <option
          children="No, currently serving"
          value="No, currently serving"
          {...getOverrideProps(overrides, "veteranoption1")}
        ></option>
        <option
          children="No, never served"
          value="No, never served"
          {...getOverrideProps(overrides, "veteranoption2")}
        ></option>
        <option
          children="Yes - currently serving/combat veteran"
          value="Yes - currently serving/combat veteran"
          {...getOverrideProps(overrides, "veteranoption3")}
        ></option>
        <option
          children="Yes - separated"
          value="Yes - separated"
          {...getOverrideProps(overrides, "veteranoption4")}
        ></option>
        <option
          children="Yes - separated/combat veteran"
          value="Yes - separated/combat veteran"
          {...getOverrideProps(overrides, "veteranoption5")}
        ></option>
      </SelectField>
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
              race_other,
              primary_language,
              address,
              city,
              state,
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
              race_other,
              primary_language,
              address,
              city,
              state,
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
              race_other,
              primary_language,
              address,
              city,
              state,
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
        {...getOverrideProps(overrides, "SectionalElement4")}
      ></Divider>
      <Heading
        level={4}
        children="Insurance Information"
        {...getOverrideProps(overrides, "SectionalElement2")}
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
              race_other,
              primary_language,
              address,
              city,
              state,
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
        {...getOverrideProps(overrides, "RowGrid20")}
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
                race_other,
                primary_language,
                address,
                city,
                state,
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
                race_other,
                primary_language,
                address,
                city,
                state,
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
        {...getOverrideProps(overrides, "RowGrid21")}
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
                race_other,
                primary_language,
                address,
                city,
                state,
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
                race_other,
                primary_language,
                address,
                city,
                state,
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
              race_other,
              primary_language,
              address,
              city,
              state,
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
        {...getOverrideProps(overrides, "RowGrid23")}
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
                race_other,
                primary_language,
                address,
                city,
                state,
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
                race_other,
                primary_language,
                address,
                city,
                state,
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
              race_other,
              primary_language,
              address,
              city,
              state,
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
        {...getOverrideProps(overrides, "RowGrid25")}
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
                race_other,
                primary_language,
                address,
                city,
                state,
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
                race_other,
                primary_language,
                address,
                city,
                state,
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
        {...getOverrideProps(overrides, "RowGrid26")}
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
                race_other,
                primary_language,
                address,
                city,
                state,
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
                race_other,
                primary_language,
                address,
                city,
                state,
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
                race_other,
                primary_language,
                address,
                city,
                state,
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
                race_other,
                primary_language,
                address,
                city,
                state,
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
                race_other,
                primary_language,
                address,
                city,
                state,
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
                race_other,
                primary_language,
                address,
                city,
                state,
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
        {...getOverrideProps(overrides, "SectionalElement3")}
      ></Divider>
      <Heading
        level={4}
        children="Emergency Contact Information"
        {...getOverrideProps(overrides, "SectionalElement7")}
      ></Heading>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid33")}
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
                race_other,
                primary_language,
                address,
                city,
                state,
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
                race_other,
                primary_language,
                address,
                city,
                state,
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
              race_other,
              primary_language,
              address,
              city,
              state,
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
        {...getOverrideProps(overrides, "SectionalElement1")}
      ></Divider>
      <Heading
        children="PLEASE READ AND TYPE NAME BELOW TO SIGN:"
        {...getOverrideProps(overrides, "SectionalElement8")}
      ></Heading>
      <Text
        children="I hereby give authorization for payment of insurance benefits to be made directly to my physician for services rendered. I understand that I am financially responsible for all charges whether or not they are covered by insurance. I hereby authorize release of all information necessary to secure the payment of benefit. I further agree that a photocopy of this agreement shall be as valid as the original."
        {...getOverrideProps(overrides, "SectionalElement9")}
      ></Text>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid38")}
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
                race_other,
                primary_language,
                address,
                city,
                state,
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
                race_other,
                primary_language,
                address,
                city,
                state,
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
