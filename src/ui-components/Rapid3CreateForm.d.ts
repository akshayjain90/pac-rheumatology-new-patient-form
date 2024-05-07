/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, HeadingProps, SelectFieldProps, SliderFieldProps, TextFieldProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type Rapid3CreateFormInputValues = {
    first_name?: string;
    last_name?: string;
    date_of_birth?: string;
    ad_dress_yourself?: string;
    ad_get_in_out_bed?: string;
    ad_lift_full_cup_mouth?: string;
    ad_walk_outdoor_flat?: string;
    ad_wash_dry_body?: string;
    ad_pick_clothing_floor?: string;
    ad_turn_faucets_on_off?: string;
    ad_get_in_out_car_bus_train_plane?: string;
    ad_walk_two_miles?: string;
    ad_recreational_activities_sports?: string;
    ad_good_night_sleep?: string;
    ad_deal_anxiety_nervous?: string;
    ad_deal_depression_blue?: string;
    ad_daily_pain_scale?: number;
    ad_how_well_doing_scale?: number;
};
export declare type Rapid3CreateFormValidationValues = {
    first_name?: ValidationFunction<string>;
    last_name?: ValidationFunction<string>;
    date_of_birth?: ValidationFunction<string>;
    ad_dress_yourself?: ValidationFunction<string>;
    ad_get_in_out_bed?: ValidationFunction<string>;
    ad_lift_full_cup_mouth?: ValidationFunction<string>;
    ad_walk_outdoor_flat?: ValidationFunction<string>;
    ad_wash_dry_body?: ValidationFunction<string>;
    ad_pick_clothing_floor?: ValidationFunction<string>;
    ad_turn_faucets_on_off?: ValidationFunction<string>;
    ad_get_in_out_car_bus_train_plane?: ValidationFunction<string>;
    ad_walk_two_miles?: ValidationFunction<string>;
    ad_recreational_activities_sports?: ValidationFunction<string>;
    ad_good_night_sleep?: ValidationFunction<string>;
    ad_deal_anxiety_nervous?: ValidationFunction<string>;
    ad_deal_depression_blue?: ValidationFunction<string>;
    ad_daily_pain_scale?: ValidationFunction<number>;
    ad_how_well_doing_scale?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Rapid3CreateFormOverridesProps = {
    Rapid3CreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    RowGrid0?: PrimitiveOverrideProps<GridProps>;
    first_name?: PrimitiveOverrideProps<TextFieldProps>;
    last_name?: PrimitiveOverrideProps<TextFieldProps>;
    date_of_birth?: PrimitiveOverrideProps<TextFieldProps>;
    SectionalElement0?: PrimitiveOverrideProps<HeadingProps>;
    SectionalElement1?: PrimitiveOverrideProps<HeadingProps>;
    SectionalElement2?: PrimitiveOverrideProps<TextProps>;
    ad_dress_yourself?: PrimitiveOverrideProps<SelectFieldProps>;
    ad_get_in_out_bed?: PrimitiveOverrideProps<SelectFieldProps>;
    ad_lift_full_cup_mouth?: PrimitiveOverrideProps<SelectFieldProps>;
    ad_walk_outdoor_flat?: PrimitiveOverrideProps<SelectFieldProps>;
    ad_wash_dry_body?: PrimitiveOverrideProps<SelectFieldProps>;
    ad_pick_clothing_floor?: PrimitiveOverrideProps<SelectFieldProps>;
    ad_turn_faucets_on_off?: PrimitiveOverrideProps<SelectFieldProps>;
    ad_get_in_out_car_bus_train_plane?: PrimitiveOverrideProps<SelectFieldProps>;
    ad_walk_two_miles?: PrimitiveOverrideProps<SelectFieldProps>;
    ad_recreational_activities_sports?: PrimitiveOverrideProps<SelectFieldProps>;
    ad_good_night_sleep?: PrimitiveOverrideProps<SelectFieldProps>;
    ad_deal_anxiety_nervous?: PrimitiveOverrideProps<SelectFieldProps>;
    ad_deal_depression_blue?: PrimitiveOverrideProps<SelectFieldProps>;
    SectionalElement3?: PrimitiveOverrideProps<HeadingProps>;
    ad_daily_pain_scale?: PrimitiveOverrideProps<SliderFieldProps>;
    SectionalElement4?: PrimitiveOverrideProps<HeadingProps>;
    ad_how_well_doing_scale?: PrimitiveOverrideProps<SliderFieldProps>;
} & EscapeHatchProps;
export declare type Rapid3CreateFormProps = React.PropsWithChildren<{
    overrides?: Rapid3CreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: Rapid3CreateFormInputValues) => Rapid3CreateFormInputValues;
    onSuccess?: (fields: Rapid3CreateFormInputValues) => void;
    onError?: (fields: Rapid3CreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: Rapid3CreateFormInputValues) => Rapid3CreateFormInputValues;
    onValidate?: Rapid3CreateFormValidationValues;
} & React.CSSProperties>;
export default function Rapid3CreateForm(props: Rapid3CreateFormProps): React.ReactElement;
