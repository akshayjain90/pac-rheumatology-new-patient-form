/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { DividerProps, GridProps, HeadingProps, SwitchFieldProps, TextFieldProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type PrivacyNoticeCreateFormInputValues = {
    authorized_1?: string;
    relationship_1?: string;
    authorized_2?: string;
    relationship_2?: string;
    authorized_3?: string;
    relationship_3?: string;
    decline?: boolean;
    signature?: string;
    date?: string;
    first_name?: string;
    last_name?: string;
    open_payment_signature?: string;
    open_payment_date?: string;
    date_of_birth?: string;
    email?: string;
};
export declare type PrivacyNoticeCreateFormValidationValues = {
    authorized_1?: ValidationFunction<string>;
    relationship_1?: ValidationFunction<string>;
    authorized_2?: ValidationFunction<string>;
    relationship_2?: ValidationFunction<string>;
    authorized_3?: ValidationFunction<string>;
    relationship_3?: ValidationFunction<string>;
    decline?: ValidationFunction<boolean>;
    signature?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
    first_name?: ValidationFunction<string>;
    last_name?: ValidationFunction<string>;
    open_payment_signature?: ValidationFunction<string>;
    open_payment_date?: ValidationFunction<string>;
    date_of_birth?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PrivacyNoticeCreateFormOverridesProps = {
    PrivacyNoticeCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    RowGrid0?: PrimitiveOverrideProps<GridProps>;
    authorized_1?: PrimitiveOverrideProps<TextFieldProps>;
    relationship_1?: PrimitiveOverrideProps<TextFieldProps>;
    RowGrid1?: PrimitiveOverrideProps<GridProps>;
    authorized_2?: PrimitiveOverrideProps<TextFieldProps>;
    relationship_2?: PrimitiveOverrideProps<TextFieldProps>;
    RowGrid2?: PrimitiveOverrideProps<GridProps>;
    authorized_3?: PrimitiveOverrideProps<TextFieldProps>;
    relationship_3?: PrimitiveOverrideProps<TextFieldProps>;
    decline?: PrimitiveOverrideProps<SwitchFieldProps>;
    RowGrid4?: PrimitiveOverrideProps<GridProps>;
    signature?: PrimitiveOverrideProps<TextFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    SectionalElement0?: PrimitiveOverrideProps<DividerProps>;
    SectionalElement00?: PrimitiveOverrideProps<DividerProps>;
    SectionalElement000?: PrimitiveOverrideProps<DividerProps>;
    SectionalElement0000?: PrimitiveOverrideProps<DividerProps>;
    RowGrid9?: PrimitiveOverrideProps<GridProps>;
    first_name?: PrimitiveOverrideProps<TextFieldProps>;
    last_name?: PrimitiveOverrideProps<TextFieldProps>;
    SectionalElement1?: PrimitiveOverrideProps<HeadingProps>;
    SectionalElement2?: PrimitiveOverrideProps<TextProps>;
    RowGrid12?: PrimitiveOverrideProps<GridProps>;
    open_payment_signature?: PrimitiveOverrideProps<TextFieldProps>;
    open_payment_date?: PrimitiveOverrideProps<TextFieldProps>;
    date_of_birth?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PrivacyNoticeCreateFormProps = React.PropsWithChildren<{
    overrides?: PrivacyNoticeCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PrivacyNoticeCreateFormInputValues) => PrivacyNoticeCreateFormInputValues;
    onSuccess?: (fields: PrivacyNoticeCreateFormInputValues) => void;
    onError?: (fields: PrivacyNoticeCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PrivacyNoticeCreateFormInputValues) => PrivacyNoticeCreateFormInputValues;
    onValidate?: PrivacyNoticeCreateFormValidationValues;
} & React.CSSProperties>;
export default function PrivacyNoticeCreateForm(props: PrivacyNoticeCreateFormProps): React.ReactElement;
