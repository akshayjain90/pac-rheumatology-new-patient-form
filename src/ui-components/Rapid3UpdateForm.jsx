/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getRapid3 } from "../graphql/queries";
import { updateRapid3 } from "../graphql/mutations";
const client = generateClient();
export default function Rapid3UpdateForm(props) {
  const {
    id: idProp,
    rapid3: rapid3ModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    first_name: "",
    last_name: "",
    date_of_birth: "",
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
    ad_daily_pain_scale: "",
    ad_how_well_doing_scale: "",
  };
  const [first_name, setFirst_name] = React.useState(initialValues.first_name);
  const [last_name, setLast_name] = React.useState(initialValues.last_name);
  const [date_of_birth, setDate_of_birth] = React.useState(
    initialValues.date_of_birth
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
    const cleanValues = rapid3Record
      ? { ...initialValues, ...rapid3Record }
      : initialValues;
    setFirst_name(cleanValues.first_name);
    setLast_name(cleanValues.last_name);
    setDate_of_birth(cleanValues.date_of_birth);
    setAd_dress_yourself(cleanValues.ad_dress_yourself);
    setAd_get_in_out_bed(cleanValues.ad_get_in_out_bed);
    setAd_lift_full_cup_mouth(cleanValues.ad_lift_full_cup_mouth);
    setAd_walk_outdoor_flat(cleanValues.ad_walk_outdoor_flat);
    setAd_wash_dry_body(cleanValues.ad_wash_dry_body);
    setAd_pick_clothing_floor(cleanValues.ad_pick_clothing_floor);
    setAd_turn_faucets_on_off(cleanValues.ad_turn_faucets_on_off);
    setAd_get_in_out_car_bus_train_plane(
      cleanValues.ad_get_in_out_car_bus_train_plane
    );
    setAd_walk_two_miles(cleanValues.ad_walk_two_miles);
    setAd_recreational_activities_sports(
      cleanValues.ad_recreational_activities_sports
    );
    setAd_good_night_sleep(cleanValues.ad_good_night_sleep);
    setAd_deal_anxiety_nervous(cleanValues.ad_deal_anxiety_nervous);
    setAd_deal_depression_blue(cleanValues.ad_deal_depression_blue);
    setAd_daily_pain_scale(cleanValues.ad_daily_pain_scale);
    setAd_how_well_doing_scale(cleanValues.ad_how_well_doing_scale);
    setErrors({});
  };
  const [rapid3Record, setRapid3Record] = React.useState(rapid3ModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getRapid3.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getRapid3
        : rapid3ModelProp;
      setRapid3Record(record);
    };
    queryData();
  }, [idProp, rapid3ModelProp]);
  React.useEffect(resetStateValues, [rapid3Record]);
  const validations = {
    first_name: [{ type: "Required" }],
    last_name: [{ type: "Required" }],
    date_of_birth: [{ type: "Required" }],
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
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          first_name,
          last_name,
          date_of_birth,
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
          ad_daily_pain_scale: ad_daily_pain_scale ?? null,
          ad_how_well_doing_scale: ad_how_well_doing_scale ?? null,
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
            query: updateRapid3.replaceAll("__typename", ""),
            variables: {
              input: {
                id: rapid3Record.id,
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
      {...getOverrideProps(overrides, "Rapid3UpdateForm")}
      {...rest}
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
      <TextField
        label="Ad dress yourself"
        isRequired={true}
        isReadOnly={false}
        value={ad_dress_yourself}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              first_name,
              last_name,
              date_of_birth,
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
      ></TextField>
      <TextField
        label="Ad get in out bed"
        isRequired={true}
        isReadOnly={false}
        value={ad_get_in_out_bed}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              first_name,
              last_name,
              date_of_birth,
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
      ></TextField>
      <TextField
        label="Ad lift full cup mouth"
        isRequired={true}
        isReadOnly={false}
        value={ad_lift_full_cup_mouth}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              first_name,
              last_name,
              date_of_birth,
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
      ></TextField>
      <TextField
        label="Ad walk outdoor flat"
        isRequired={true}
        isReadOnly={false}
        value={ad_walk_outdoor_flat}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              first_name,
              last_name,
              date_of_birth,
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
      ></TextField>
      <TextField
        label="Ad wash dry body"
        isRequired={true}
        isReadOnly={false}
        value={ad_wash_dry_body}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              first_name,
              last_name,
              date_of_birth,
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
      ></TextField>
      <TextField
        label="Ad pick clothing floor"
        isRequired={true}
        isReadOnly={false}
        value={ad_pick_clothing_floor}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              first_name,
              last_name,
              date_of_birth,
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
      ></TextField>
      <TextField
        label="Ad turn faucets on off"
        isRequired={true}
        isReadOnly={false}
        value={ad_turn_faucets_on_off}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              first_name,
              last_name,
              date_of_birth,
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
      ></TextField>
      <TextField
        label="Ad get in out car bus train plane"
        isRequired={true}
        isReadOnly={false}
        value={ad_get_in_out_car_bus_train_plane}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              first_name,
              last_name,
              date_of_birth,
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
      ></TextField>
      <TextField
        label="Ad walk two miles"
        isRequired={true}
        isReadOnly={false}
        value={ad_walk_two_miles}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              first_name,
              last_name,
              date_of_birth,
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
      ></TextField>
      <TextField
        label="Ad recreational activities sports"
        isRequired={true}
        isReadOnly={false}
        value={ad_recreational_activities_sports}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              first_name,
              last_name,
              date_of_birth,
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
      ></TextField>
      <TextField
        label="Ad good night sleep"
        isRequired={true}
        isReadOnly={false}
        value={ad_good_night_sleep}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              first_name,
              last_name,
              date_of_birth,
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
      ></TextField>
      <TextField
        label="Ad deal anxiety nervous"
        isRequired={true}
        isReadOnly={false}
        value={ad_deal_anxiety_nervous}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              first_name,
              last_name,
              date_of_birth,
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
      ></TextField>
      <TextField
        label="Ad deal depression blue"
        isRequired={true}
        isReadOnly={false}
        value={ad_deal_depression_blue}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              first_name,
              last_name,
              date_of_birth,
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
      ></TextField>
      <TextField
        label="Ad daily pain scale"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={ad_daily_pain_scale}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              first_name,
              last_name,
              date_of_birth,
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
      ></TextField>
      <TextField
        label="Ad how well doing scale"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={ad_how_well_doing_scale}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              first_name,
              last_name,
              date_of_birth,
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
          isDisabled={!(idProp || rapid3ModelProp)}
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
              !(idProp || rapid3ModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
