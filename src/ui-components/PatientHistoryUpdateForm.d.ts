/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { PatientHistory } from "../API.ts";
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
export declare type PatientHistoryUpdateFormInputValues = {
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
};
export declare type PatientHistoryUpdateFormValidationValues = {
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
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PatientHistoryUpdateFormOverridesProps = {
    PatientHistoryUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    first_name?: PrimitiveOverrideProps<TextFieldProps>;
    last_name?: PrimitiveOverrideProps<TextFieldProps>;
    date_of_birth?: PrimitiveOverrideProps<TextFieldProps>;
    ph_briefly_describe_present_symptoms?: PrimitiveOverrideProps<TextFieldProps>;
    ph_previous_treatment_for_problem?: PrimitiveOverrideProps<TextFieldProps>;
    ph_current_medicines?: PrimitiveOverrideProps<TextFieldProps>;
    ph_allergy_to_med?: PrimitiveOverrideProps<SwitchFieldProps>;
    ph_allergy_to_med_list?: PrimitiveOverrideProps<TextFieldProps>;
    ph_rh_history_osteoarthritis?: PrimitiveOverrideProps<TextFieldProps>;
    ph_rh_history_gout?: PrimitiveOverrideProps<TextFieldProps>;
    ph_rh_history_juvenile_arthritis?: PrimitiveOverrideProps<TextFieldProps>;
    ph_rh_history_vasculitis?: PrimitiveOverrideProps<TextFieldProps>;
    ph_rh_history_lupus?: PrimitiveOverrideProps<TextFieldProps>;
    ph_rh_history_rheumatoid?: PrimitiveOverrideProps<TextFieldProps>;
    ph_rh_history_spondyloarthropathy?: PrimitiveOverrideProps<TextFieldProps>;
    ph_rh_history_osteoporosis?: PrimitiveOverrideProps<TextFieldProps>;
    ph_past_medical_history?: PrimitiveOverrideProps<TextFieldProps>;
    ph_past_surgery_history?: PrimitiveOverrideProps<TextFieldProps>;
    ph_smoke?: PrimitiveOverrideProps<TextFieldProps>;
    ph_drugs?: PrimitiveOverrideProps<TextFieldProps>;
    ph_alcohol?: PrimitiveOverrideProps<TextFieldProps>;
    ph_alcohol_weekly?: PrimitiveOverrideProps<TextFieldProps>;
    ph_sleep?: PrimitiveOverrideProps<TextFieldProps>;
    ph_exercise?: PrimitiveOverrideProps<TextFieldProps>;
    ph_travel?: PrimitiveOverrideProps<TextFieldProps>;
    ph_pregnant?: PrimitiveOverrideProps<TextFieldProps>;
    ph_live_births?: PrimitiveOverrideProps<TextFieldProps>;
    ph_complications?: PrimitiveOverrideProps<TextFieldProps>;
    ad_people_in_household?: PrimitiveOverrideProps<TextFieldProps>;
    ph_symptoms?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PatientHistoryUpdateFormProps = React.PropsWithChildren<{
    overrides?: PatientHistoryUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    patientHistory?: PatientHistory;
    onSubmit?: (fields: PatientHistoryUpdateFormInputValues) => PatientHistoryUpdateFormInputValues;
    onSuccess?: (fields: PatientHistoryUpdateFormInputValues) => void;
    onError?: (fields: PatientHistoryUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PatientHistoryUpdateFormInputValues) => PatientHistoryUpdateFormInputValues;
    onValidate?: PatientHistoryUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PatientHistoryUpdateForm(props: PatientHistoryUpdateFormProps): React.ReactElement;
