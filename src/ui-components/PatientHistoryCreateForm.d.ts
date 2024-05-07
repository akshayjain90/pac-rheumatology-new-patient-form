/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, DividerProps, GridProps, HeadingProps, SelectFieldProps, SwitchFieldProps, TextAreaFieldProps, TextFieldProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type PatientHistoryCreateFormInputValues = {
    first_name?: string;
    last_name?: string;
    date_of_birth?: string;
    ph_briefly_describe_present_symptoms?: string;
    ph_previous_treatment_for_problem?: string;
    ph_current_medicines?: string;
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
    ph_symptoms?: string[];
    email?: string;
};
export declare type PatientHistoryCreateFormValidationValues = {
    first_name?: ValidationFunction<string>;
    last_name?: ValidationFunction<string>;
    date_of_birth?: ValidationFunction<string>;
    ph_briefly_describe_present_symptoms?: ValidationFunction<string>;
    ph_previous_treatment_for_problem?: ValidationFunction<string>;
    ph_current_medicines?: ValidationFunction<string>;
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
    email?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PatientHistoryCreateFormOverridesProps = {
    PatientHistoryCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    RowGrid0?: PrimitiveOverrideProps<GridProps>;
    first_name?: PrimitiveOverrideProps<TextFieldProps>;
    last_name?: PrimitiveOverrideProps<TextFieldProps>;
    date_of_birth?: PrimitiveOverrideProps<TextFieldProps>;
    SectionalElement0?: PrimitiveOverrideProps<HeadingProps>;
    ph_briefly_describe_present_symptoms?: PrimitiveOverrideProps<TextAreaFieldProps>;
    ph_previous_treatment_for_problem?: PrimitiveOverrideProps<TextAreaFieldProps>;
    ph_current_medicines?: PrimitiveOverrideProps<TextFieldProps>;
    ph_allergy_to_med?: PrimitiveOverrideProps<SwitchFieldProps>;
    ph_allergy_to_med_list?: PrimitiveOverrideProps<TextFieldProps>;
    SectionalElement1?: PrimitiveOverrideProps<DividerProps>;
    SectionalElement2?: PrimitiveOverrideProps<TextProps>;
    RowGrid9?: PrimitiveOverrideProps<GridProps>;
    ph_rh_history_osteoarthritis?: PrimitiveOverrideProps<TextFieldProps>;
    ph_rh_history_gout?: PrimitiveOverrideProps<TextFieldProps>;
    RowGrid10?: PrimitiveOverrideProps<GridProps>;
    ph_rh_history_juvenile_arthritis?: PrimitiveOverrideProps<TextFieldProps>;
    ph_rh_history_vasculitis?: PrimitiveOverrideProps<TextFieldProps>;
    RowGrid11?: PrimitiveOverrideProps<GridProps>;
    ph_rh_history_lupus?: PrimitiveOverrideProps<TextFieldProps>;
    ph_rh_history_rheumatoid?: PrimitiveOverrideProps<TextFieldProps>;
    RowGrid12?: PrimitiveOverrideProps<GridProps>;
    ph_rh_history_spondyloarthropathy?: PrimitiveOverrideProps<TextFieldProps>;
    ph_rh_history_osteoporosis?: PrimitiveOverrideProps<TextFieldProps>;
    ph_past_medical_history?: PrimitiveOverrideProps<TextAreaFieldProps>;
    ph_past_surgery_history?: PrimitiveOverrideProps<TextAreaFieldProps>;
    RowGrid15?: PrimitiveOverrideProps<GridProps>;
    ph_smoke?: PrimitiveOverrideProps<SelectFieldProps>;
    ph_drugs?: PrimitiveOverrideProps<SelectFieldProps>;
    RowGrid16?: PrimitiveOverrideProps<GridProps>;
    ph_alcohol?: PrimitiveOverrideProps<SelectFieldProps>;
    ph_alcohol_weekly?: PrimitiveOverrideProps<TextFieldProps>;
    ph_sleep?: PrimitiveOverrideProps<TextFieldProps>;
    ph_exercise?: PrimitiveOverrideProps<TextFieldProps>;
    ph_travel?: PrimitiveOverrideProps<TextFieldProps>;
    RowGrid20?: PrimitiveOverrideProps<GridProps>;
    ph_pregnant?: PrimitiveOverrideProps<SelectFieldProps>;
    ph_live_births?: PrimitiveOverrideProps<TextFieldProps>;
    ph_complications?: PrimitiveOverrideProps<TextFieldProps>;
    ad_people_in_household?: PrimitiveOverrideProps<TextAreaFieldProps>;
    SectionalElement3?: PrimitiveOverrideProps<HeadingProps>;
    ph_symptoms?: PrimitiveOverrideProps<AutocompleteProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PatientHistoryCreateFormProps = React.PropsWithChildren<{
    overrides?: PatientHistoryCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PatientHistoryCreateFormInputValues) => PatientHistoryCreateFormInputValues;
    onSuccess?: (fields: PatientHistoryCreateFormInputValues) => void;
    onError?: (fields: PatientHistoryCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PatientHistoryCreateFormInputValues) => PatientHistoryCreateFormInputValues;
    onValidate?: PatientHistoryCreateFormValidationValues;
} & React.CSSProperties>;
export default function PatientHistoryCreateForm(props: PatientHistoryCreateFormProps): React.ReactElement;
