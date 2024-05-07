/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Rapid3 } from "../API.ts";
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
export declare type Rapid3UpdateFormInputValues = {
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
export declare type Rapid3UpdateFormValidationValues = {
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
export declare type Rapid3UpdateFormOverridesProps = {
    Rapid3UpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    first_name?: PrimitiveOverrideProps<TextFieldProps>;
    last_name?: PrimitiveOverrideProps<TextFieldProps>;
    date_of_birth?: PrimitiveOverrideProps<TextFieldProps>;
    ad_dress_yourself?: PrimitiveOverrideProps<TextFieldProps>;
    ad_get_in_out_bed?: PrimitiveOverrideProps<TextFieldProps>;
    ad_lift_full_cup_mouth?: PrimitiveOverrideProps<TextFieldProps>;
    ad_walk_outdoor_flat?: PrimitiveOverrideProps<TextFieldProps>;
    ad_wash_dry_body?: PrimitiveOverrideProps<TextFieldProps>;
    ad_pick_clothing_floor?: PrimitiveOverrideProps<TextFieldProps>;
    ad_turn_faucets_on_off?: PrimitiveOverrideProps<TextFieldProps>;
    ad_get_in_out_car_bus_train_plane?: PrimitiveOverrideProps<TextFieldProps>;
    ad_walk_two_miles?: PrimitiveOverrideProps<TextFieldProps>;
    ad_recreational_activities_sports?: PrimitiveOverrideProps<TextFieldProps>;
    ad_good_night_sleep?: PrimitiveOverrideProps<TextFieldProps>;
    ad_deal_anxiety_nervous?: PrimitiveOverrideProps<TextFieldProps>;
    ad_deal_depression_blue?: PrimitiveOverrideProps<TextFieldProps>;
    ad_daily_pain_scale?: PrimitiveOverrideProps<TextFieldProps>;
    ad_how_well_doing_scale?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type Rapid3UpdateFormProps = React.PropsWithChildren<{
    overrides?: Rapid3UpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    rapid3?: Rapid3;
    onSubmit?: (fields: Rapid3UpdateFormInputValues) => Rapid3UpdateFormInputValues;
    onSuccess?: (fields: Rapid3UpdateFormInputValues) => void;
    onError?: (fields: Rapid3UpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: Rapid3UpdateFormInputValues) => Rapid3UpdateFormInputValues;
    onValidate?: Rapid3UpdateFormValidationValues;
} & React.CSSProperties>;
export default function Rapid3UpdateForm(props: Rapid3UpdateFormProps): React.ReactElement;
