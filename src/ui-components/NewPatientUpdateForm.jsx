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
