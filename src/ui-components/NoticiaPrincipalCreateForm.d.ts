/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type NoticiaPrincipalCreateFormInputValues = {
    title?: string;
    subtitle?: string;
    publishedDate?: string;
    source?: string;
    timestamp?: string;
    externalUrl?: string;
    portada?: string;
};
export declare type NoticiaPrincipalCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    subtitle?: ValidationFunction<string>;
    publishedDate?: ValidationFunction<string>;
    source?: ValidationFunction<string>;
    timestamp?: ValidationFunction<string>;
    externalUrl?: ValidationFunction<string>;
    portada?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NoticiaPrincipalCreateFormOverridesProps = {
    NoticiaPrincipalCreateFormGrid?: FormProps<GridProps>;
    title?: FormProps<TextFieldProps>;
    subtitle?: FormProps<TextFieldProps>;
    publishedDate?: FormProps<TextFieldProps>;
    source?: FormProps<TextFieldProps>;
    timestamp?: FormProps<TextFieldProps>;
    externalUrl?: FormProps<TextFieldProps>;
    portada?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NoticiaPrincipalCreateFormProps = React.PropsWithChildren<{
    overrides?: NoticiaPrincipalCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: NoticiaPrincipalCreateFormInputValues) => NoticiaPrincipalCreateFormInputValues;
    onSuccess?: (fields: NoticiaPrincipalCreateFormInputValues) => void;
    onError?: (fields: NoticiaPrincipalCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: NoticiaPrincipalCreateFormInputValues) => NoticiaPrincipalCreateFormInputValues;
    onValidate?: NoticiaPrincipalCreateFormValidationValues;
} & React.CSSProperties>;
export default function NoticiaPrincipalCreateForm(props: NoticiaPrincipalCreateFormProps): React.ReactElement;
