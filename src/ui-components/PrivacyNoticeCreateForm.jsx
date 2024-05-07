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
  SwitchField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createPrivacyNotice } from "../graphql/mutations";
const client = generateClient();
export default function PrivacyNoticeCreateForm(props) {
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
    authorized_1: "",
    relationship_1: "",
    authorized_2: "",
    relationship_2: "",
    authorized_3: "",
    relationship_3: "",
    decline: false,
    signature: "",
    date: "",
    first_name: "",
    last_name: "",
    open_payment_signature: "",
    open_payment_date: "",
    date_of_birth: "",
  };
  const [authorized_1, setAuthorized_1] = React.useState(
    initialValues.authorized_1
  );
  const [relationship_1, setRelationship_1] = React.useState(
    initialValues.relationship_1
  );
  const [authorized_2, setAuthorized_2] = React.useState(
    initialValues.authorized_2
  );
  const [relationship_2, setRelationship_2] = React.useState(
    initialValues.relationship_2
  );
  const [authorized_3, setAuthorized_3] = React.useState(
    initialValues.authorized_3
  );
  const [relationship_3, setRelationship_3] = React.useState(
    initialValues.relationship_3
  );
  const [decline, setDecline] = React.useState(initialValues.decline);
  const [signature, setSignature] = React.useState(initialValues.signature);
  const [date, setDate] = React.useState(initialValues.date);
  const [first_name, setFirst_name] = React.useState(initialValues.first_name);
  const [last_name, setLast_name] = React.useState(initialValues.last_name);
  const [open_payment_signature, setOpen_payment_signature] = React.useState(
    initialValues.open_payment_signature
  );
  const [open_payment_date, setOpen_payment_date] = React.useState(
    initialValues.open_payment_date
  );
  const [date_of_birth, setDate_of_birth] = React.useState(
    initialValues.date_of_birth
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setAuthorized_1(initialValues.authorized_1);
    setRelationship_1(initialValues.relationship_1);
    setAuthorized_2(initialValues.authorized_2);
    setRelationship_2(initialValues.relationship_2);
    setAuthorized_3(initialValues.authorized_3);
    setRelationship_3(initialValues.relationship_3);
    setDecline(initialValues.decline);
    setSignature(initialValues.signature);
    setDate(initialValues.date);
    setFirst_name(initialValues.first_name);
    setLast_name(initialValues.last_name);
    setOpen_payment_signature(initialValues.open_payment_signature);
    setOpen_payment_date(initialValues.open_payment_date);
    setDate_of_birth(initialValues.date_of_birth);
    setErrors({});
  };
  const validations = {
    authorized_1: [],
    relationship_1: [],
    authorized_2: [],
    relationship_2: [],
    authorized_3: [],
    relationship_3: [],
    decline: [],
    signature: [{ type: "Required" }],
    date: [{ type: "Required" }],
    first_name: [{ type: "Required" }],
    last_name: [{ type: "Required" }],
    open_payment_signature: [{ type: "Required" }],
    open_payment_date: [{ type: "Required" }],
    date_of_birth: [{ type: "Required" }],
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
      padding={tokens.space.medium.value}
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          authorized_1,
          relationship_1,
          authorized_2,
          relationship_2,
          authorized_3,
          relationship_3,
          decline,
          signature,
          date,
          first_name,
          last_name,
          open_payment_signature,
          open_payment_date,
          date_of_birth,
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
            query: createPrivacyNotice.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "PrivacyNoticeCreateForm")}
      {...rest}
    >
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid0")}
      >
        <TextField
          label="Name:"
          isRequired={false}
          isReadOnly={false}
          value={authorized_1}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                authorized_1: value,
                relationship_1,
                authorized_2,
                relationship_2,
                authorized_3,
                relationship_3,
                decline,
                signature,
                date,
                first_name,
                last_name,
                open_payment_signature,
                open_payment_date,
                date_of_birth,
              };
              const result = onChange(modelFields);
              value = result?.authorized_1 ?? value;
            }
            if (errors.authorized_1?.hasError) {
              runValidationTasks("authorized_1", value);
            }
            setAuthorized_1(value);
          }}
          onBlur={() => runValidationTasks("authorized_1", authorized_1)}
          errorMessage={errors.authorized_1?.errorMessage}
          hasError={errors.authorized_1?.hasError}
          {...getOverrideProps(overrides, "authorized_1")}
        ></TextField>
        <TextField
          label="Relationship:"
          isRequired={false}
          isReadOnly={false}
          value={relationship_1}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                authorized_1,
                relationship_1: value,
                authorized_2,
                relationship_2,
                authorized_3,
                relationship_3,
                decline,
                signature,
                date,
                first_name,
                last_name,
                open_payment_signature,
                open_payment_date,
                date_of_birth,
              };
              const result = onChange(modelFields);
              value = result?.relationship_1 ?? value;
            }
            if (errors.relationship_1?.hasError) {
              runValidationTasks("relationship_1", value);
            }
            setRelationship_1(value);
          }}
          onBlur={() => runValidationTasks("relationship_1", relationship_1)}
          errorMessage={errors.relationship_1?.errorMessage}
          hasError={errors.relationship_1?.hasError}
          {...getOverrideProps(overrides, "relationship_1")}
        ></TextField>
      </Grid>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid1")}
      >
        <TextField
          label="Name:"
          isRequired={false}
          isReadOnly={false}
          value={authorized_2}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                authorized_1,
                relationship_1,
                authorized_2: value,
                relationship_2,
                authorized_3,
                relationship_3,
                decline,
                signature,
                date,
                first_name,
                last_name,
                open_payment_signature,
                open_payment_date,
                date_of_birth,
              };
              const result = onChange(modelFields);
              value = result?.authorized_2 ?? value;
            }
            if (errors.authorized_2?.hasError) {
              runValidationTasks("authorized_2", value);
            }
            setAuthorized_2(value);
          }}
          onBlur={() => runValidationTasks("authorized_2", authorized_2)}
          errorMessage={errors.authorized_2?.errorMessage}
          hasError={errors.authorized_2?.hasError}
          {...getOverrideProps(overrides, "authorized_2")}
        ></TextField>
        <TextField
          label="Relationship:"
          isRequired={false}
          isReadOnly={false}
          value={relationship_2}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                authorized_1,
                relationship_1,
                authorized_2,
                relationship_2: value,
                authorized_3,
                relationship_3,
                decline,
                signature,
                date,
                first_name,
                last_name,
                open_payment_signature,
                open_payment_date,
                date_of_birth,
              };
              const result = onChange(modelFields);
              value = result?.relationship_2 ?? value;
            }
            if (errors.relationship_2?.hasError) {
              runValidationTasks("relationship_2", value);
            }
            setRelationship_2(value);
          }}
          onBlur={() => runValidationTasks("relationship_2", relationship_2)}
          errorMessage={errors.relationship_2?.errorMessage}
          hasError={errors.relationship_2?.hasError}
          {...getOverrideProps(overrides, "relationship_2")}
        ></TextField>
      </Grid>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid2")}
      >
        <TextField
          label="Name:"
          isRequired={false}
          isReadOnly={false}
          value={authorized_3}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                authorized_1,
                relationship_1,
                authorized_2,
                relationship_2,
                authorized_3: value,
                relationship_3,
                decline,
                signature,
                date,
                first_name,
                last_name,
                open_payment_signature,
                open_payment_date,
                date_of_birth,
              };
              const result = onChange(modelFields);
              value = result?.authorized_3 ?? value;
            }
            if (errors.authorized_3?.hasError) {
              runValidationTasks("authorized_3", value);
            }
            setAuthorized_3(value);
          }}
          onBlur={() => runValidationTasks("authorized_3", authorized_3)}
          errorMessage={errors.authorized_3?.errorMessage}
          hasError={errors.authorized_3?.hasError}
          {...getOverrideProps(overrides, "authorized_3")}
        ></TextField>
        <TextField
          label="Relationship:"
          isRequired={false}
          isReadOnly={false}
          value={relationship_3}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                authorized_1,
                relationship_1,
                authorized_2,
                relationship_2,
                authorized_3,
                relationship_3: value,
                decline,
                signature,
                date,
                first_name,
                last_name,
                open_payment_signature,
                open_payment_date,
                date_of_birth,
              };
              const result = onChange(modelFields);
              value = result?.relationship_3 ?? value;
            }
            if (errors.relationship_3?.hasError) {
              runValidationTasks("relationship_3", value);
            }
            setRelationship_3(value);
          }}
          onBlur={() => runValidationTasks("relationship_3", relationship_3)}
          errorMessage={errors.relationship_3?.errorMessage}
          hasError={errors.relationship_3?.hasError}
          {...getOverrideProps(overrides, "relationship_3")}
        ></TextField>
      </Grid>
      <SwitchField
        label="I decline to name anyone under the Notice of Privacy Practices. *"
        defaultChecked={false}
        isDisabled={false}
        isChecked={decline}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              authorized_1,
              relationship_1,
              authorized_2,
              relationship_2,
              authorized_3,
              relationship_3,
              decline: value,
              signature,
              date,
              first_name,
              last_name,
              open_payment_signature,
              open_payment_date,
              date_of_birth,
            };
            const result = onChange(modelFields);
            value = result?.decline ?? value;
          }
          if (errors.decline?.hasError) {
            runValidationTasks("decline", value);
          }
          setDecline(value);
        }}
        onBlur={() => runValidationTasks("decline", decline)}
        errorMessage={errors.decline?.errorMessage}
        hasError={errors.decline?.hasError}
        {...getOverrideProps(overrides, "decline")}
      ></SwitchField>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid4")}
      >
        <TextField
          label="Patient's Signature *"
          isRequired={true}
          isReadOnly={false}
          value={signature}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                authorized_1,
                relationship_1,
                authorized_2,
                relationship_2,
                authorized_3,
                relationship_3,
                decline,
                signature: value,
                date,
                first_name,
                last_name,
                open_payment_signature,
                open_payment_date,
                date_of_birth,
              };
              const result = onChange(modelFields);
              value = result?.signature ?? value;
            }
            if (errors.signature?.hasError) {
              runValidationTasks("signature", value);
            }
            setSignature(value);
          }}
          onBlur={() => runValidationTasks("signature", signature)}
          errorMessage={errors.signature?.errorMessage}
          hasError={errors.signature?.hasError}
          {...getOverrideProps(overrides, "signature")}
        ></TextField>
        <TextField
          label="Date *"
          isRequired={true}
          isReadOnly={false}
          type="date"
          value={date}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                authorized_1,
                relationship_1,
                authorized_2,
                relationship_2,
                authorized_3,
                relationship_3,
                decline,
                signature,
                date: value,
                first_name,
                last_name,
                open_payment_signature,
                open_payment_date,
                date_of_birth,
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
      </Grid>
      <Divider
        orientation="horizontal"
        {...getOverrideProps(overrides, "SectionalElement0")}
      ></Divider>
      <Divider
        orientation="horizontal"
        {...getOverrideProps(overrides, "SectionalElement00")}
      ></Divider>
      <Divider
        orientation="horizontal"
        {...getOverrideProps(overrides, "SectionalElement000")}
      ></Divider>
      <Divider
        orientation="horizontal"
        {...getOverrideProps(overrides, "SectionalElement0000")}
      ></Divider>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid9")}
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
                authorized_1,
                relationship_1,
                authorized_2,
                relationship_2,
                authorized_3,
                relationship_3,
                decline,
                signature,
                date,
                first_name: value,
                last_name,
                open_payment_signature,
                open_payment_date,
                date_of_birth,
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
                authorized_1,
                relationship_1,
                authorized_2,
                relationship_2,
                authorized_3,
                relationship_3,
                decline,
                signature,
                date,
                first_name,
                last_name: value,
                open_payment_signature,
                open_payment_date,
                date_of_birth,
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
      </Grid>
      <Heading
        children="RECEIPT OF NOTICE OF THE OPEN PAYMENTS DATABASE"
        {...getOverrideProps(overrides, "SectionalElement1")}
      ></Heading>
      <Text
        children="For informational purposes only, a link to the federal Centers for Medicare and Medicaid Services (CMS) Open Payments web page is provided here. The federal Physician Payments Sunshine Act requires that detailed information about payment and other payments of value worth over ten dollars ($10) from manufacturers of drugs, medical devices, and biologics to physicians and teaching hospitals be made available to the public. The Open Payments database is a federal tool used to search payments made by drug and device companies to physicians and teaching hospitals. It can be found at: https://openpaymentsdata.cms.gov"
        {...getOverrideProps(overrides, "SectionalElement2")}
      ></Text>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid12")}
      >
        <TextField
          label="Patient's Signature *"
          isRequired={true}
          isReadOnly={false}
          value={open_payment_signature}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                authorized_1,
                relationship_1,
                authorized_2,
                relationship_2,
                authorized_3,
                relationship_3,
                decline,
                signature,
                date,
                first_name,
                last_name,
                open_payment_signature: value,
                open_payment_date,
                date_of_birth,
              };
              const result = onChange(modelFields);
              value = result?.open_payment_signature ?? value;
            }
            if (errors.open_payment_signature?.hasError) {
              runValidationTasks("open_payment_signature", value);
            }
            setOpen_payment_signature(value);
          }}
          onBlur={() =>
            runValidationTasks("open_payment_signature", open_payment_signature)
          }
          errorMessage={errors.open_payment_signature?.errorMessage}
          hasError={errors.open_payment_signature?.hasError}
          {...getOverrideProps(overrides, "open_payment_signature")}
        ></TextField>
        <TextField
          label="Date *"
          isRequired={true}
          isReadOnly={false}
          type="date"
          value={open_payment_date}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                authorized_1,
                relationship_1,
                authorized_2,
                relationship_2,
                authorized_3,
                relationship_3,
                decline,
                signature,
                date,
                first_name,
                last_name,
                open_payment_signature,
                open_payment_date: value,
                date_of_birth,
              };
              const result = onChange(modelFields);
              value = result?.open_payment_date ?? value;
            }
            if (errors.open_payment_date?.hasError) {
              runValidationTasks("open_payment_date", value);
            }
            setOpen_payment_date(value);
          }}
          onBlur={() =>
            runValidationTasks("open_payment_date", open_payment_date)
          }
          errorMessage={errors.open_payment_date?.errorMessage}
          hasError={errors.open_payment_date?.hasError}
          {...getOverrideProps(overrides, "open_payment_date")}
        ></TextField>
      </Grid>
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
              authorized_1,
              relationship_1,
              authorized_2,
              relationship_2,
              authorized_3,
              relationship_3,
              decline,
              signature,
              date,
              first_name,
              last_name,
              open_payment_signature,
              open_payment_date,
              date_of_birth: value,
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
          gap="15px"
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
