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
import { getPrivacyNotice } from "../graphql/queries";
import { updatePrivacyNotice } from "../graphql/mutations";
const client = generateClient();
export default function PrivacyNoticeUpdateForm(props) {
  const {
    id: idProp,
    privacyNotice: privacyNoticeModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    full_name: "",
    authorized_1: "",
    relationship_1: "",
    authorized_2: "",
    relationship_2: "",
    authorized_3: "",
    relationship_3: "",
    decline: false,
    date: "",
    open_payment_signature: "",
    open_payment_date: "",
    signature: "",
    first_name: "",
    last_name: "",
  };
  const [full_name, setFull_name] = React.useState(initialValues.full_name);
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
  const [date, setDate] = React.useState(initialValues.date);
  const [open_payment_signature, setOpen_payment_signature] = React.useState(
    initialValues.open_payment_signature
  );
  const [open_payment_date, setOpen_payment_date] = React.useState(
    initialValues.open_payment_date
  );
  const [signature, setSignature] = React.useState(initialValues.signature);
  const [first_name, setFirst_name] = React.useState(initialValues.first_name);
  const [last_name, setLast_name] = React.useState(initialValues.last_name);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = privacyNoticeRecord
      ? { ...initialValues, ...privacyNoticeRecord }
      : initialValues;
    setFull_name(cleanValues.full_name);
    setAuthorized_1(cleanValues.authorized_1);
    setRelationship_1(cleanValues.relationship_1);
    setAuthorized_2(cleanValues.authorized_2);
    setRelationship_2(cleanValues.relationship_2);
    setAuthorized_3(cleanValues.authorized_3);
    setRelationship_3(cleanValues.relationship_3);
    setDecline(cleanValues.decline);
    setDate(cleanValues.date);
    setOpen_payment_signature(cleanValues.open_payment_signature);
    setOpen_payment_date(cleanValues.open_payment_date);
    setSignature(cleanValues.signature);
    setFirst_name(cleanValues.first_name);
    setLast_name(cleanValues.last_name);
    setErrors({});
  };
  const [privacyNoticeRecord, setPrivacyNoticeRecord] = React.useState(
    privacyNoticeModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getPrivacyNotice.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getPrivacyNotice
        : privacyNoticeModelProp;
      setPrivacyNoticeRecord(record);
    };
    queryData();
  }, [idProp, privacyNoticeModelProp]);
  React.useEffect(resetStateValues, [privacyNoticeRecord]);
  const validations = {
    full_name: [],
    authorized_1: [],
    relationship_1: [],
    authorized_2: [],
    relationship_2: [],
    authorized_3: [],
    relationship_3: [],
    decline: [],
    date: [{ type: "Required" }],
    open_payment_signature: [{ type: "Required" }],
    open_payment_date: [{ type: "Required" }],
    signature: [{ type: "Required" }],
    first_name: [],
    last_name: [],
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
          full_name: full_name ?? null,
          authorized_1: authorized_1 ?? null,
          relationship_1: relationship_1 ?? null,
          authorized_2: authorized_2 ?? null,
          relationship_2: relationship_2 ?? null,
          authorized_3: authorized_3 ?? null,
          relationship_3: relationship_3 ?? null,
          decline: decline ?? null,
          date,
          open_payment_signature,
          open_payment_date,
          signature,
          first_name: first_name ?? null,
          last_name: last_name ?? null,
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
            query: updatePrivacyNotice.replaceAll("__typename", ""),
            variables: {
              input: {
                id: privacyNoticeRecord.id,
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
      {...getOverrideProps(overrides, "PrivacyNoticeUpdateForm")}
      {...rest}
    >
      <TextField
        label="Full name"
        isRequired={false}
        isReadOnly={false}
        value={full_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              full_name: value,
              authorized_1,
              relationship_1,
              authorized_2,
              relationship_2,
              authorized_3,
              relationship_3,
              decline,
              date,
              open_payment_signature,
              open_payment_date,
              signature,
              first_name,
              last_name,
            };
            const result = onChange(modelFields);
            value = result?.full_name ?? value;
          }
          if (errors.full_name?.hasError) {
            runValidationTasks("full_name", value);
          }
          setFull_name(value);
        }}
        onBlur={() => runValidationTasks("full_name", full_name)}
        errorMessage={errors.full_name?.errorMessage}
        hasError={errors.full_name?.hasError}
        {...getOverrideProps(overrides, "full_name")}
      ></TextField>
      <TextField
        label="Authorized 1"
        isRequired={false}
        isReadOnly={false}
        value={authorized_1}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              full_name,
              authorized_1: value,
              relationship_1,
              authorized_2,
              relationship_2,
              authorized_3,
              relationship_3,
              decline,
              date,
              open_payment_signature,
              open_payment_date,
              signature,
              first_name,
              last_name,
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
        label="Relationship 1"
        isRequired={false}
        isReadOnly={false}
        value={relationship_1}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              full_name,
              authorized_1,
              relationship_1: value,
              authorized_2,
              relationship_2,
              authorized_3,
              relationship_3,
              decline,
              date,
              open_payment_signature,
              open_payment_date,
              signature,
              first_name,
              last_name,
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
      <TextField
        label="Authorized 2"
        isRequired={false}
        isReadOnly={false}
        value={authorized_2}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              full_name,
              authorized_1,
              relationship_1,
              authorized_2: value,
              relationship_2,
              authorized_3,
              relationship_3,
              decline,
              date,
              open_payment_signature,
              open_payment_date,
              signature,
              first_name,
              last_name,
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
        label="Relationship 2"
        isRequired={false}
        isReadOnly={false}
        value={relationship_2}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              full_name,
              authorized_1,
              relationship_1,
              authorized_2,
              relationship_2: value,
              authorized_3,
              relationship_3,
              decline,
              date,
              open_payment_signature,
              open_payment_date,
              signature,
              first_name,
              last_name,
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
      <TextField
        label="Authorized 3"
        isRequired={false}
        isReadOnly={false}
        value={authorized_3}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              full_name,
              authorized_1,
              relationship_1,
              authorized_2,
              relationship_2,
              authorized_3: value,
              relationship_3,
              decline,
              date,
              open_payment_signature,
              open_payment_date,
              signature,
              first_name,
              last_name,
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
        label="Relationship 3"
        isRequired={false}
        isReadOnly={false}
        value={relationship_3}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              full_name,
              authorized_1,
              relationship_1,
              authorized_2,
              relationship_2,
              authorized_3,
              relationship_3: value,
              decline,
              date,
              open_payment_signature,
              open_payment_date,
              signature,
              first_name,
              last_name,
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
      <SwitchField
        label="Decline"
        defaultChecked={false}
        isDisabled={false}
        isChecked={decline}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              full_name,
              authorized_1,
              relationship_1,
              authorized_2,
              relationship_2,
              authorized_3,
              relationship_3,
              decline: value,
              date,
              open_payment_signature,
              open_payment_date,
              signature,
              first_name,
              last_name,
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
      <TextField
        label="Date"
        isRequired={true}
        isReadOnly={false}
        type="date"
        value={date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              full_name,
              authorized_1,
              relationship_1,
              authorized_2,
              relationship_2,
              authorized_3,
              relationship_3,
              decline,
              date: value,
              open_payment_signature,
              open_payment_date,
              signature,
              first_name,
              last_name,
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
        label="Open payment signature"
        isRequired={true}
        isReadOnly={false}
        value={open_payment_signature}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              full_name,
              authorized_1,
              relationship_1,
              authorized_2,
              relationship_2,
              authorized_3,
              relationship_3,
              decline,
              date,
              open_payment_signature: value,
              open_payment_date,
              signature,
              first_name,
              last_name,
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
        label="Open payment date"
        isRequired={true}
        isReadOnly={false}
        type="date"
        value={open_payment_date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              full_name,
              authorized_1,
              relationship_1,
              authorized_2,
              relationship_2,
              authorized_3,
              relationship_3,
              decline,
              date,
              open_payment_signature,
              open_payment_date: value,
              signature,
              first_name,
              last_name,
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
      <TextField
        label="Signature"
        isRequired={true}
        isReadOnly={false}
        value={signature}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              full_name,
              authorized_1,
              relationship_1,
              authorized_2,
              relationship_2,
              authorized_3,
              relationship_3,
              decline,
              date,
              open_payment_signature,
              open_payment_date,
              signature: value,
              first_name,
              last_name,
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
        label="First name"
        isRequired={false}
        isReadOnly={false}
        value={first_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              full_name,
              authorized_1,
              relationship_1,
              authorized_2,
              relationship_2,
              authorized_3,
              relationship_3,
              decline,
              date,
              open_payment_signature,
              open_payment_date,
              signature,
              first_name: value,
              last_name,
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
              full_name,
              authorized_1,
              relationship_1,
              authorized_2,
              relationship_2,
              authorized_3,
              relationship_3,
              decline,
              date,
              open_payment_signature,
              open_payment_date,
              signature,
              first_name,
              last_name: value,
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
          isDisabled={!(idProp || privacyNoticeModelProp)}
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
              !(idProp || privacyNoticeModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
