/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { PrivacyNotice } from "../API.ts";
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
export declare type PrivacyNoticeUpdateFormInputValues = {
    full_name?: string;
    authorized_1?: string;
    relationship_1?: string;
    authorized_2?: string;
    relationship_2?: string;
    authorized_3?: string;
    relationship_3?: string;
    decline?: boolean;
    date?: string;
    open_payment_signature?: string;
    open_payment_date?: string;
    signature?: string;
    first_name?: string;
    last_name?: string;
    date_of_birth?: string;
};
export declare type PrivacyNoticeUpdateFormValidationValues = {
    full_name?: ValidationFunction<string>;
    authorized_1?: ValidationFunction<string>;
    relationship_1?: ValidationFunction<string>;
    authorized_2?: ValidationFunction<string>;
    relationship_2?: ValidationFunction<string>;
    authorized_3?: ValidationFunction<string>;
    relationship_3?: ValidationFunction<string>;
    decline?: ValidationFunction<boolean>;
    date?: ValidationFunction<string>;
    open_payment_signature?: ValidationFunction<string>;
    open_payment_date?: ValidationFunction<string>;
    signature?: ValidationFunction<string>;
    first_name?: ValidationFunction<string>;
    last_name?: ValidationFunction<string>;
    date_of_birth?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PrivacyNoticeUpdateFormOverridesProps = {
    PrivacyNoticeUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    full_name?: PrimitiveOverrideProps<TextFieldProps>;
    authorized_1?: PrimitiveOverrideProps<TextFieldProps>;
    relationship_1?: PrimitiveOverrideProps<TextFieldProps>;
    authorized_2?: PrimitiveOverrideProps<TextFieldProps>;
    relationship_2?: PrimitiveOverrideProps<TextFieldProps>;
    authorized_3?: PrimitiveOverrideProps<TextFieldProps>;
    relationship_3?: PrimitiveOverrideProps<TextFieldProps>;
    decline?: PrimitiveOverrideProps<SwitchFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    open_payment_signature?: PrimitiveOverrideProps<TextFieldProps>;
    open_payment_date?: PrimitiveOverrideProps<TextFieldProps>;
    signature?: PrimitiveOverrideProps<TextFieldProps>;
    first_name?: PrimitiveOverrideProps<TextFieldProps>;
    last_name?: PrimitiveOverrideProps<TextFieldProps>;
    date_of_birth?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PrivacyNoticeUpdateFormProps = React.PropsWithChildren<{
    overrides?: PrivacyNoticeUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    privacyNotice?: PrivacyNotice;
    onSubmit?: (fields: PrivacyNoticeUpdateFormInputValues) => PrivacyNoticeUpdateFormInputValues;
    onSuccess?: (fields: PrivacyNoticeUpdateFormInputValues) => void;
    onError?: (fields: PrivacyNoticeUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PrivacyNoticeUpdateFormInputValues) => PrivacyNoticeUpdateFormInputValues;
    onValidate?: PrivacyNoticeUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PrivacyNoticeUpdateForm(props: PrivacyNoticeUpdateFormProps): React.ReactElement;
