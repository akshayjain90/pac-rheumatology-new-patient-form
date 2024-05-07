/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, DividerProps, GridProps, HeadingProps, SelectFieldProps, SliderFieldProps, SwitchFieldProps, TextAreaFieldProps, TextFieldProps, TextProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type NewPatientCreateFormInputValues = {
    date?: string;
    last_name?: string;
    first_name?: string;
    date_of_birth?: string;
    gender?: string;
    marital_status?: string;
    ethnicity?: string;
    race?: string;
    race_other?: string;
    city?: string;
    social_security?: string;
    employer?: string;
    education?: string;
    primary_language?: string;
    full_time?: boolean;
    preferred_pharmacy?: string;
    insurance_primary_name?: string;
    insurance_primary_id?: string;
    insurance_primary_group?: string;
    insurance_primary_address?: string;
    insurance_primary_phone?: string;
    insurance_primary_insured_person?: string;
    insurance_primary_insured_person_relation?: string;
    insurance_primary_insured_person_dob?: string;
    insurance_secondary?: string;
    insurance_secondary_id?: string;
    insurance_secondary_group?: string;
    insurance_secondary_address?: string;
    insurance_secondary_phone?: string;
    primary_care_physician_name?: string;
    primary_care_physician_phone?: string;
    referring_physician_name?: string;
    referring_physician_phone?: string;
    emergency_contact_name?: string;
    emergency_contact_phone?: string;
    emergency_contact_relationship?: string;
    signature_page_1?: string;
    signature_page_1_date?: string;
    ph_briefly_describe_present_symptoms?: string;
    ph_previous_treatment_for_problem?: string;
    ph_allergy_to_med?: boolean;
    ph_allergy_to_med_list?: string;
    ph_rh_history_osteoarthritis?: string;
    ph_rh_history_gout?: string;
    ph_rh_history_juvenile_arthritis?: string;
    ph_rh_history_vasculitis?: string;
    ph_rh_history_lupus?: string;
    ph_rh_history_rheumatoid?: string;
    ph_rh_history_spondyloarthropathy?: string;
    ph_rh_history_osteoporosis?: string;
    ph_past_medical_history?: string;
    ph_past_surgery_history?: string;
    ph_smoke?: string;
    ph_drugs?: string;
    ph_alcohol?: string;
    ph_alcohol_weekly?: string;
    ph_sleep?: string;
    ph_exercise?: string;
    ph_travel?: string;
    ph_pregnant?: string;
    ph_live_births?: string;
    ph_complications?: string;
    ad_people_in_household?: string;
    ph_symptoms?: string;
    ad_dress_yourself?: string;
    ad_get_in_out_bed?: string;
    ad_lift_full_cup_mouth?: string;
    ad_walk_outdoor_flat?: string;
    ad_wash_dry_body?: string;
    ad_pick_clothing_floor?: string;
    ad_turn_faucets_on_off?: string;
    address?: string;
    veteran?: string;
    occupation?: string;
    ad_recreational_activities_sports?: string;
    ad_good_night_sleep?: string;
    ad_deal_anxiety_nervous?: string;
    ad_deal_depression_blue?: string;
    ad_daily_pain_scale?: number;
    ad_how_well_doing_scale?: number;
    ph_current_medicines?: string;
    ad_get_in_out_car_bus_train_plane?: string;
    ad_walk_two_miles?: string;
    state?: string;
    zip?: string;
    home_phone?: string;
    work_phone?: string;
    mobile_phone?: string;
    email?: string;
};
export declare type NewPatientCreateFormValidationValues = {
    date?: ValidationFunction<string>;
    last_name?: ValidationFunction<string>;
    first_name?: ValidationFunction<string>;
    date_of_birth?: ValidationFunction<string>;
    gender?: ValidationFunction<string>;
    marital_status?: ValidationFunction<string>;
    ethnicity?: ValidationFunction<string>;
    race?: ValidationFunction<string>;
    race_other?: ValidationFunction<string>;
    city?: ValidationFunction<string>;
    social_security?: ValidationFunction<string>;
    employer?: ValidationFunction<string>;
    education?: ValidationFunction<string>;
    primary_language?: ValidationFunction<string>;
    full_time?: ValidationFunction<boolean>;
    preferred_pharmacy?: ValidationFunction<string>;
    insurance_primary_name?: ValidationFunction<string>;
    insurance_primary_id?: ValidationFunction<string>;
    insurance_primary_group?: ValidationFunction<string>;
    insurance_primary_address?: ValidationFunction<string>;
    insurance_primary_phone?: ValidationFunction<string>;
    insurance_primary_insured_person?: ValidationFunction<string>;
    insurance_primary_insured_person_relation?: ValidationFunction<string>;
    insurance_primary_insured_person_dob?: ValidationFunction<string>;
    insurance_secondary?: ValidationFunction<string>;
    insurance_secondary_id?: ValidationFunction<string>;
    insurance_secondary_group?: ValidationFunction<string>;
    insurance_secondary_address?: ValidationFunction<string>;
    insurance_secondary_phone?: ValidationFunction<string>;
    primary_care_physician_name?: ValidationFunction<string>;
    primary_care_physician_phone?: ValidationFunction<string>;
    referring_physician_name?: ValidationFunction<string>;
    referring_physician_phone?: ValidationFunction<string>;
    emergency_contact_name?: ValidationFunction<string>;
    emergency_contact_phone?: ValidationFunction<string>;
    emergency_contact_relationship?: ValidationFunction<string>;
    signature_page_1?: ValidationFunction<string>;
    signature_page_1_date?: ValidationFunction<string>;
    ph_briefly_describe_present_symptoms?: ValidationFunction<string>;
    ph_previous_treatment_for_problem?: ValidationFunction<string>;
    ph_allergy_to_med?: ValidationFunction<boolean>;
    ph_allergy_to_med_list?: ValidationFunction<string>;
    ph_rh_history_osteoarthritis?: ValidationFunction<string>;
    ph_rh_history_gout?: ValidationFunction<string>;
    ph_rh_history_juvenile_arthritis?: ValidationFunction<string>;
    ph_rh_history_vasculitis?: ValidationFunction<string>;
    ph_rh_history_lupus?: ValidationFunction<string>;
    ph_rh_history_rheumatoid?: ValidationFunction<string>;
    ph_rh_history_spondyloarthropathy?: ValidationFunction<string>;
    ph_rh_history_osteoporosis?: ValidationFunction<string>;
    ph_past_medical_history?: ValidationFunction<string>;
    ph_past_surgery_history?: ValidationFunction<string>;
    ph_smoke?: ValidationFunction<string>;
    ph_drugs?: ValidationFunction<string>;
    ph_alcohol?: ValidationFunction<string>;
    ph_alcohol_weekly?: ValidationFunction<string>;
    ph_sleep?: ValidationFunction<string>;
    ph_exercise?: ValidationFunction<string>;
    ph_travel?: ValidationFunction<string>;
    ph_pregnant?: ValidationFunction<string>;
    ph_live_births?: ValidationFunction<string>;
    ph_complications?: ValidationFunction<string>;
    ad_people_in_household?: ValidationFunction<string>;
    ph_symptoms?: ValidationFunction<string>;
    ad_dress_yourself?: ValidationFunction<string>;
    ad_get_in_out_bed?: ValidationFunction<string>;
    ad_lift_full_cup_mouth?: ValidationFunction<string>;
    ad_walk_outdoor_flat?: ValidationFunction<string>;
    ad_wash_dry_body?: ValidationFunction<string>;
    ad_pick_clothing_floor?: ValidationFunction<string>;
    ad_turn_faucets_on_off?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    veteran?: ValidationFunction<string>;
    occupation?: ValidationFunction<string>;
    ad_recreational_activities_sports?: ValidationFunction<string>;
    ad_good_night_sleep?: ValidationFunction<string>;
    ad_deal_anxiety_nervous?: ValidationFunction<string>;
    ad_deal_depression_blue?: ValidationFunction<string>;
    ad_daily_pain_scale?: ValidationFunction<number>;
    ad_how_well_doing_scale?: ValidationFunction<number>;
    ph_current_medicines?: ValidationFunction<string>;
    ad_get_in_out_car_bus_train_plane?: ValidationFunction<string>;
    ad_walk_two_miles?: ValidationFunction<string>;
    state?: ValidationFunction<string>;
    zip?: ValidationFunction<string>;
    home_phone?: ValidationFunction<string>;
    work_phone?: ValidationFunction<string>;
    mobile_phone?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NewPatientCreateFormOverridesProps = {
    NewPatientCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    SectionalElement0?: PrimitiveOverrideProps<HeadingProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    RowGrid2?: PrimitiveOverrideProps<GridProps>;
    last_name?: PrimitiveOverrideProps<TextFieldProps>;
    first_name?: PrimitiveOverrideProps<TextFieldProps>;
    date_of_birth?: PrimitiveOverrideProps<TextFieldProps>;
    RowGrid3?: PrimitiveOverrideProps<GridProps>;
    gender?: PrimitiveOverrideProps<TextFieldProps>;
    marital_status?: PrimitiveOverrideProps<SelectFieldProps>;
    RowGrid4?: PrimitiveOverrideProps<GridProps>;
    ethnicity?: PrimitiveOverrideProps<TextFieldProps>;
    race?: PrimitiveOverrideProps<SelectFieldProps>;
    race_other?: PrimitiveOverrideProps<TextFieldProps>;
    city?: PrimitiveOverrideProps<TextFieldProps>;
    RowGrid7?: PrimitiveOverrideProps<GridProps>;
    social_security?: PrimitiveOverrideProps<TextFieldProps>;
    employer?: PrimitiveOverrideProps<TextFieldProps>;
    education?: PrimitiveOverrideProps<SelectFieldProps>;
    primary_language?: PrimitiveOverrideProps<TextFieldProps>;
    full_time?: PrimitiveOverrideProps<SwitchFieldProps>;
    preferred_pharmacy?: PrimitiveOverrideProps<TextFieldProps>;
    SectionalElement3?: PrimitiveOverrideProps<DividerProps>;
    SectionalElement1?: PrimitiveOverrideProps<HeadingProps>;
    insurance_primary_name?: PrimitiveOverrideProps<TextFieldProps>;
    RowGrid15?: PrimitiveOverrideProps<GridProps>;
    insurance_primary_id?: PrimitiveOverrideProps<TextFieldProps>;
    insurance_primary_group?: PrimitiveOverrideProps<TextFieldProps>;
    RowGrid16?: PrimitiveOverrideProps<GridProps>;
    insurance_primary_address?: PrimitiveOverrideProps<TextFieldProps>;
    insurance_primary_phone?: PrimitiveOverrideProps<TextFieldProps>;
    insurance_primary_insured_person?: PrimitiveOverrideProps<TextFieldProps>;
    RowGrid18?: PrimitiveOverrideProps<GridProps>;
    insurance_primary_insured_person_relation?: PrimitiveOverrideProps<TextFieldProps>;
    insurance_primary_insured_person_dob?: PrimitiveOverrideProps<TextFieldProps>;
    insurance_secondary?: PrimitiveOverrideProps<TextFieldProps>;
    RowGrid20?: PrimitiveOverrideProps<GridProps>;
    insurance_secondary_id?: PrimitiveOverrideProps<TextFieldProps>;
    insurance_secondary_group?: PrimitiveOverrideProps<TextFieldProps>;
    RowGrid21?: PrimitiveOverrideProps<GridProps>;
    insurance_secondary_address?: PrimitiveOverrideProps<TextFieldProps>;
    insurance_secondary_phone?: PrimitiveOverrideProps<TextFieldProps>;
    SectionalElement4?: PrimitiveOverrideProps<DividerProps>;
    SectionalElement6?: PrimitiveOverrideProps<HeadingProps>;
    RowGrid24?: PrimitiveOverrideProps<GridProps>;
    primary_care_physician_name?: PrimitiveOverrideProps<TextFieldProps>;
    primary_care_physician_phone?: PrimitiveOverrideProps<TextFieldProps>;
    RowGrid25?: PrimitiveOverrideProps<GridProps>;
    referring_physician_name?: PrimitiveOverrideProps<TextFieldProps>;
    referring_physician_phone?: PrimitiveOverrideProps<TextFieldProps>;
    SectionalElement8?: PrimitiveOverrideProps<DividerProps>;
    SectionalElement9?: PrimitiveOverrideProps<HeadingProps>;
    RowGrid28?: PrimitiveOverrideProps<GridProps>;
    emergency_contact_name?: PrimitiveOverrideProps<TextFieldProps>;
    emergency_contact_phone?: PrimitiveOverrideProps<TextFieldProps>;
    emergency_contact_relationship?: PrimitiveOverrideProps<TextFieldProps>;
    SectionalElement10?: PrimitiveOverrideProps<DividerProps>;
    SectionalElement12?: PrimitiveOverrideProps<HeadingProps>;
    SectionalElement13?: PrimitiveOverrideProps<TextProps>;
    RowGrid33?: PrimitiveOverrideProps<GridProps>;
    signature_page_1?: PrimitiveOverrideProps<TextFieldProps>;
    signature_page_1_date?: PrimitiveOverrideProps<TextFieldProps>;
    SectionalElement15?: PrimitiveOverrideProps<DividerProps>;
    SectionalElement14?: PrimitiveOverrideProps<DividerProps>;
    SectionalElement21?: PrimitiveOverrideProps<DividerProps>;
    SectionalElement90?: PrimitiveOverrideProps<HeadingProps>;
    ph_briefly_describe_present_symptoms?: PrimitiveOverrideProps<TextAreaFieldProps>;
    ph_previous_treatment_for_problem?: PrimitiveOverrideProps<TextAreaFieldProps>;
    ph_allergy_to_med?: PrimitiveOverrideProps<SwitchFieldProps>;
    ph_allergy_to_med_list?: PrimitiveOverrideProps<TextFieldProps>;
    SectionalElement11?: PrimitiveOverrideProps<DividerProps>;
    SectionalElement16?: PrimitiveOverrideProps<HeadingProps>;
    RowGrid44?: PrimitiveOverrideProps<GridProps>;
    ph_rh_history_osteoarthritis?: PrimitiveOverrideProps<TextFieldProps>;
    ph_rh_history_gout?: PrimitiveOverrideProps<TextFieldProps>;
    RowGrid45?: PrimitiveOverrideProps<GridProps>;
    ph_rh_history_juvenile_arthritis?: PrimitiveOverrideProps<TextFieldProps>;
    ph_rh_history_vasculitis?: PrimitiveOverrideProps<TextFieldProps>;
    RowGrid46?: PrimitiveOverrideProps<GridProps>;
    ph_rh_history_lupus?: PrimitiveOverrideProps<TextFieldProps>;
    ph_rh_history_rheumatoid?: PrimitiveOverrideProps<TextFieldProps>;
    RowGrid47?: PrimitiveOverrideProps<GridProps>;
    ph_rh_history_spondyloarthropathy?: PrimitiveOverrideProps<TextFieldProps>;
    ph_rh_history_osteoporosis?: PrimitiveOverrideProps<TextFieldProps>;
    ph_past_medical_history?: PrimitiveOverrideProps<TextAreaFieldProps>;
    ph_past_surgery_history?: PrimitiveOverrideProps<TextAreaFieldProps>;
    RowGrid50?: PrimitiveOverrideProps<GridProps>;
    ph_smoke?: PrimitiveOverrideProps<SelectFieldProps>;
    ph_drugs?: PrimitiveOverrideProps<SelectFieldProps>;
    RowGrid51?: PrimitiveOverrideProps<GridProps>;
    ph_alcohol?: PrimitiveOverrideProps<SelectFieldProps>;
    ph_alcohol_weekly?: PrimitiveOverrideProps<TextFieldProps>;
    ph_sleep?: PrimitiveOverrideProps<TextFieldProps>;
    ph_exercise?: PrimitiveOverrideProps<TextFieldProps>;
    ph_travel?: PrimitiveOverrideProps<TextFieldProps>;
    RowGrid55?: PrimitiveOverrideProps<GridProps>;
    ph_pregnant?: PrimitiveOverrideProps<SelectFieldProps>;
    ph_live_births?: PrimitiveOverrideProps<TextFieldProps>;
    ph_complications?: PrimitiveOverrideProps<TextFieldProps>;
    ad_people_in_household?: PrimitiveOverrideProps<TextAreaFieldProps>;
    SectionalElement5?: PrimitiveOverrideProps<HeadingProps>;
    ph_symptoms?: PrimitiveOverrideProps<AutocompleteProps>;
    SectionalElement20?: PrimitiveOverrideProps<DividerProps>;
    SectionalElement19?: PrimitiveOverrideProps<DividerProps>;
    SectionalElement18?: PrimitiveOverrideProps<DividerProps>;
    SectionalElement900?: PrimitiveOverrideProps<HeadingProps>;
    SectionalElement120?: PrimitiveOverrideProps<HeadingProps>;
    SectionalElement2?: PrimitiveOverrideProps<TextProps>;
    ad_dress_yourself?: PrimitiveOverrideProps<SelectFieldProps>;
    ad_get_in_out_bed?: PrimitiveOverrideProps<SelectFieldProps>;
    ad_lift_full_cup_mouth?: PrimitiveOverrideProps<SelectFieldProps>;
    ad_walk_outdoor_flat?: PrimitiveOverrideProps<SelectFieldProps>;
    ad_wash_dry_body?: PrimitiveOverrideProps<SelectFieldProps>;
    ad_pick_clothing_floor?: PrimitiveOverrideProps<SelectFieldProps>;
    ad_turn_faucets_on_off?: PrimitiveOverrideProps<SelectFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    veteran?: PrimitiveOverrideProps<SwitchFieldProps>;
    occupation?: PrimitiveOverrideProps<TextFieldProps>;
    ad_recreational_activities_sports?: PrimitiveOverrideProps<SelectFieldProps>;
    ad_good_night_sleep?: PrimitiveOverrideProps<SelectFieldProps>;
    ad_deal_anxiety_nervous?: PrimitiveOverrideProps<SelectFieldProps>;
    ad_deal_depression_blue?: PrimitiveOverrideProps<SelectFieldProps>;
    SectionalElement7?: PrimitiveOverrideProps<HeadingProps>;
    ad_daily_pain_scale?: PrimitiveOverrideProps<SliderFieldProps>;
    SectionalElement17?: PrimitiveOverrideProps<HeadingProps>;
    ad_how_well_doing_scale?: PrimitiveOverrideProps<SliderFieldProps>;
    ph_current_medicines?: PrimitiveOverrideProps<TextAreaFieldProps>;
    ad_get_in_out_car_bus_train_plane?: PrimitiveOverrideProps<SelectFieldProps>;
    ad_walk_two_miles?: PrimitiveOverrideProps<SelectFieldProps>;
    RowGrid87?: PrimitiveOverrideProps<GridProps>;
    state?: PrimitiveOverrideProps<TextFieldProps>;
    zip?: PrimitiveOverrideProps<TextFieldProps>;
    RowGrid88?: PrimitiveOverrideProps<GridProps>;
    home_phone?: PrimitiveOverrideProps<TextFieldProps>;
    work_phone?: PrimitiveOverrideProps<TextFieldProps>;
    mobile_phone?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NewPatientCreateFormProps = React.PropsWithChildren<{
    overrides?: NewPatientCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: NewPatientCreateFormInputValues) => NewPatientCreateFormInputValues;
    onSuccess?: (fields: NewPatientCreateFormInputValues) => void;
    onError?: (fields: NewPatientCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: NewPatientCreateFormInputValues) => NewPatientCreateFormInputValues;
    onValidate?: NewPatientCreateFormValidationValues;
} & React.CSSProperties>;
export default function NewPatientCreateForm(props: NewPatientCreateFormProps): React.ReactElement;
