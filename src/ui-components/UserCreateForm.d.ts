/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UserCreateFormInputValues = {
    name?: string;
    phone_number?: string;
    address?: string;
    email?: string;
    isCompletedKYC?: boolean;
    currentStateKYC?: string;
    externalURLKYC?: string;
    hasSigned?: boolean;
    dateSigned?: string;
    isPaymentProcessing?: boolean;
    username?: string;
    isBanned?: string;
    isAgent?: string;
    isSupport?: string;
};
export declare type UserCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    phone_number?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    isCompletedKYC?: ValidationFunction<boolean>;
    currentStateKYC?: ValidationFunction<string>;
    externalURLKYC?: ValidationFunction<string>;
    hasSigned?: ValidationFunction<boolean>;
    dateSigned?: ValidationFunction<string>;
    isPaymentProcessing?: ValidationFunction<boolean>;
    username?: ValidationFunction<string>;
    isBanned?: ValidationFunction<string>;
    isAgent?: ValidationFunction<string>;
    isSupport?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserCreateFormOverridesProps = {
    UserCreateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
    phone_number?: FormProps<TextFieldProps>;
    address?: FormProps<TextFieldProps>;
    email?: FormProps<TextFieldProps>;
    isCompletedKYC?: FormProps<SwitchFieldProps>;
    currentStateKYC?: FormProps<TextFieldProps>;
    externalURLKYC?: FormProps<TextFieldProps>;
    hasSigned?: FormProps<SwitchFieldProps>;
    dateSigned?: FormProps<TextFieldProps>;
    isPaymentProcessing?: FormProps<SwitchFieldProps>;
    username?: FormProps<TextFieldProps>;
    isBanned?: FormProps<TextFieldProps>;
    isAgent?: FormProps<TextFieldProps>;
    isSupport?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserCreateFormProps = React.PropsWithChildren<{
    overrides?: UserCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UserCreateFormInputValues) => UserCreateFormInputValues;
    onSuccess?: (fields: UserCreateFormInputValues) => void;
    onError?: (fields: UserCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: UserCreateFormInputValues) => UserCreateFormInputValues;
    onValidate?: UserCreateFormValidationValues;
} & React.CSSProperties>;
export default function UserCreateForm(props: UserCreateFormProps): React.ReactElement;
