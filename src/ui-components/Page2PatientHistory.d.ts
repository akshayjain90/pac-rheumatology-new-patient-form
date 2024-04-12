/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, DividerProps, GridProps, HeadingProps, SelectFieldProps, SliderFieldProps, SwitchFieldProps, TextAreaFieldProps, TextFieldProps, TextProps } from "@aws-amplify/ui-react";
import { NewPatient } from "../API.ts";
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
export declare type Page2PatientHistoryInputValues = {
    ph_briefly_describe_present_symptoms?: string;
    ph_previous_treatment_for_problem?: string;
    ph_current_medicine_1?: string;
    ph_current_medicine_2?: string;
    ph_current_medicine_3?: string;
    ph_current_medicine_4?: string;
    ph_current_medicine_5?: string;
    ph_current_medicine_6?: string;
    ph_current_medicine_7?: string;
    ph_current_medicine_8?: string;
    ph_current_medicine_9?: string;
    ph_current_medicine_10?: string;
    ph_current_medicine_11?: string;
    ph_current_medicine_12?: string;
    ph_current_medicine_13?: string;
    ph_current_medicine_14?: string;
    ph_current_medicine_15?: string;
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
    ph_symptoms?: string;
    ad_people_in_household?: string;
    ad_who_shopping?: string;
    ad_housework?: string;
    ad_hardest_thing?: string;
    ad_ability_stand_up_chair?: string;
    ad_ability_walk_outdoors_flat?: string;
    ad_ability_get_on_toilet?: string;
    ad_ability_reach_5_pound?: string;
    ad_ability_car_doors?: string;
    ad_ability_outside_work?: string;
    ad_ability_wait_in_line?: string;
    ad_ability_lift_heavy?: string;
    ad_ability_lift_heavier?: string;
    ad_ability_climb_2_flights?: string;
    ad_aids_devices_activities?: string[];
    ad_categories_help?: string[];
    ad_daily_pain_scale?: number;
    ad_how_well_doing_scale?: number;
};
export declare type Page2PatientHistoryValidationValues = {
    ph_briefly_describe_present_symptoms?: ValidationFunction<string>;
    ph_previous_treatment_for_problem?: ValidationFunction<string>;
    ph_current_medicine_1?: ValidationFunction<string>;
    ph_current_medicine_2?: ValidationFunction<string>;
    ph_current_medicine_3?: ValidationFunction<string>;
    ph_current_medicine_4?: ValidationFunction<string>;
    ph_current_medicine_5?: ValidationFunction<string>;
    ph_current_medicine_6?: ValidationFunction<string>;
    ph_current_medicine_7?: ValidationFunction<string>;
    ph_current_medicine_8?: ValidationFunction<string>;
    ph_current_medicine_9?: ValidationFunction<string>;
    ph_current_medicine_10?: ValidationFunction<string>;
    ph_current_medicine_11?: ValidationFunction<string>;
    ph_current_medicine_12?: ValidationFunction<string>;
    ph_current_medicine_13?: ValidationFunction<string>;
    ph_current_medicine_14?: ValidationFunction<string>;
    ph_current_medicine_15?: ValidationFunction<string>;
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
    ph_symptoms?: ValidationFunction<string>;
    ad_people_in_household?: ValidationFunction<string>;
    ad_who_shopping?: ValidationFunction<string>;
    ad_housework?: ValidationFunction<string>;
    ad_hardest_thing?: ValidationFunction<string>;
    ad_ability_stand_up_chair?: ValidationFunction<string>;
    ad_ability_walk_outdoors_flat?: ValidationFunction<string>;
    ad_ability_get_on_toilet?: ValidationFunction<string>;
    ad_ability_reach_5_pound?: ValidationFunction<string>;
    ad_ability_car_doors?: ValidationFunction<string>;
    ad_ability_outside_work?: ValidationFunction<string>;
    ad_ability_wait_in_line?: ValidationFunction<string>;
    ad_ability_lift_heavy?: ValidationFunction<string>;
    ad_ability_lift_heavier?: ValidationFunction<string>;
    ad_ability_climb_2_flights?: ValidationFunction<string>;
    ad_aids_devices_activities?: ValidationFunction<string>;
    ad_categories_help?: ValidationFunction<string>;
    ad_daily_pain_scale?: ValidationFunction<number>;
    ad_how_well_doing_scale?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Page2PatientHistoryOverridesProps = {
    Page2PatientHistoryGrid?: PrimitiveOverrideProps<GridProps>;
    ph_briefly_describe_present_symptoms?: PrimitiveOverrideProps<TextAreaFieldProps>;
    ph_previous_treatment_for_problem?: PrimitiveOverrideProps<TextAreaFieldProps>;
    SectionalElement0?: PrimitiveOverrideProps<TextProps>;
    RowGrid3?: PrimitiveOverrideProps<GridProps>;
    ph_current_medicine_1?: PrimitiveOverrideProps<TextFieldProps>;
    ph_current_medicine_2?: PrimitiveOverrideProps<TextFieldProps>;
    ph_current_medicine_3?: PrimitiveOverrideProps<TextFieldProps>;
    RowGrid4?: PrimitiveOverrideProps<GridProps>;
    ph_current_medicine_4?: PrimitiveOverrideProps<TextFieldProps>;
    ph_current_medicine_5?: PrimitiveOverrideProps<TextFieldProps>;
    ph_current_medicine_6?: PrimitiveOverrideProps<TextFieldProps>;
    RowGrid5?: PrimitiveOverrideProps<GridProps>;
    ph_current_medicine_7?: PrimitiveOverrideProps<TextFieldProps>;
    ph_current_medicine_8?: PrimitiveOverrideProps<TextFieldProps>;
    ph_current_medicine_9?: PrimitiveOverrideProps<TextFieldProps>;
    RowGrid6?: PrimitiveOverrideProps<GridProps>;
    ph_current_medicine_10?: PrimitiveOverrideProps<TextFieldProps>;
    ph_current_medicine_11?: PrimitiveOverrideProps<TextFieldProps>;
    ph_current_medicine_12?: PrimitiveOverrideProps<TextFieldProps>;
    RowGrid7?: PrimitiveOverrideProps<GridProps>;
    ph_current_medicine_13?: PrimitiveOverrideProps<TextFieldProps>;
    ph_current_medicine_14?: PrimitiveOverrideProps<TextFieldProps>;
    ph_current_medicine_15?: PrimitiveOverrideProps<TextFieldProps>;
    ph_allergy_to_med?: PrimitiveOverrideProps<SwitchFieldProps>;
    ph_allergy_to_med_list?: PrimitiveOverrideProps<TextFieldProps>;
    SectionalElement1?: PrimitiveOverrideProps<DividerProps>;
    SectionalElement2?: PrimitiveOverrideProps<TextProps>;
    RowGrid12?: PrimitiveOverrideProps<GridProps>;
    ph_rh_history_osteoarthritis?: PrimitiveOverrideProps<TextFieldProps>;
    ph_rh_history_gout?: PrimitiveOverrideProps<TextFieldProps>;
    RowGrid13?: PrimitiveOverrideProps<GridProps>;
    ph_rh_history_juvenile_arthritis?: PrimitiveOverrideProps<TextFieldProps>;
    ph_rh_history_vasculitis?: PrimitiveOverrideProps<TextFieldProps>;
    RowGrid14?: PrimitiveOverrideProps<GridProps>;
    ph_rh_history_lupus?: PrimitiveOverrideProps<TextFieldProps>;
    ph_rh_history_rheumatoid?: PrimitiveOverrideProps<TextFieldProps>;
    RowGrid15?: PrimitiveOverrideProps<GridProps>;
    ph_rh_history_spondyloarthropathy?: PrimitiveOverrideProps<TextFieldProps>;
    ph_rh_history_osteoporosis?: PrimitiveOverrideProps<TextFieldProps>;
    ph_past_medical_history?: PrimitiveOverrideProps<TextAreaFieldProps>;
    ph_past_surgery_history?: PrimitiveOverrideProps<TextAreaFieldProps>;
    RowGrid18?: PrimitiveOverrideProps<GridProps>;
    ph_smoke?: PrimitiveOverrideProps<SelectFieldProps>;
    ph_drugs?: PrimitiveOverrideProps<SelectFieldProps>;
    RowGrid19?: PrimitiveOverrideProps<GridProps>;
    ph_alcohol?: PrimitiveOverrideProps<SelectFieldProps>;
    ph_alcohol_weekly?: PrimitiveOverrideProps<TextFieldProps>;
    ph_sleep?: PrimitiveOverrideProps<TextFieldProps>;
    ph_exercise?: PrimitiveOverrideProps<TextFieldProps>;
    ph_travel?: PrimitiveOverrideProps<TextFieldProps>;
    RowGrid23?: PrimitiveOverrideProps<GridProps>;
    ph_pregnant?: PrimitiveOverrideProps<SelectFieldProps>;
    ph_live_births?: PrimitiveOverrideProps<TextFieldProps>;
    ph_complications?: PrimitiveOverrideProps<TextFieldProps>;
    ph_symptoms?: PrimitiveOverrideProps<TextAreaFieldProps>;
    SectionalElement3?: PrimitiveOverrideProps<DividerProps>;
    SectionalElement4?: PrimitiveOverrideProps<DividerProps>;
    SectionalElement5?: PrimitiveOverrideProps<HeadingProps>;
    ad_people_in_household?: PrimitiveOverrideProps<TextAreaFieldProps>;
    RowGrid30?: PrimitiveOverrideProps<GridProps>;
    ad_who_shopping?: PrimitiveOverrideProps<TextFieldProps>;
    ad_housework?: PrimitiveOverrideProps<TextFieldProps>;
    ad_hardest_thing?: PrimitiveOverrideProps<TextFieldProps>;
    SectionalElement6?: PrimitiveOverrideProps<TextProps>;
    ad_ability_stand_up_chair?: PrimitiveOverrideProps<SelectFieldProps>;
    ad_ability_walk_outdoors_flat?: PrimitiveOverrideProps<SelectFieldProps>;
    ad_ability_get_on_toilet?: PrimitiveOverrideProps<SelectFieldProps>;
    ad_ability_reach_5_pound?: PrimitiveOverrideProps<SelectFieldProps>;
    ad_ability_car_doors?: PrimitiveOverrideProps<SelectFieldProps>;
    ad_ability_outside_work?: PrimitiveOverrideProps<SelectFieldProps>;
    ad_ability_wait_in_line?: PrimitiveOverrideProps<SelectFieldProps>;
    ad_ability_lift_heavy?: PrimitiveOverrideProps<SelectFieldProps>;
    ad_ability_lift_heavier?: PrimitiveOverrideProps<SelectFieldProps>;
    ad_ability_climb_2_flights?: PrimitiveOverrideProps<SelectFieldProps>;
    ad_aids_devices_activities?: PrimitiveOverrideProps<AutocompleteProps>;
    ad_categories_help?: PrimitiveOverrideProps<AutocompleteProps>;
    ad_daily_pain_scale?: PrimitiveOverrideProps<SliderFieldProps>;
    ad_how_well_doing_scale?: PrimitiveOverrideProps<SliderFieldProps>;
} & EscapeHatchProps;
export declare type Page2PatientHistoryProps = React.PropsWithChildren<{
    overrides?: Page2PatientHistoryOverridesProps | undefined | null;
} & {
    id?: string;
    newPatient?: NewPatient;
    onSubmit?: (fields: Page2PatientHistoryInputValues) => Page2PatientHistoryInputValues;
    onSuccess?: (fields: Page2PatientHistoryInputValues) => void;
    onError?: (fields: Page2PatientHistoryInputValues, errorMessage: string) => void;
    onChange?: (fields: Page2PatientHistoryInputValues) => Page2PatientHistoryInputValues;
    onValidate?: Page2PatientHistoryValidationValues;
} & React.CSSProperties>;
export default function Page2PatientHistory(props: Page2PatientHistoryProps): React.ReactElement;