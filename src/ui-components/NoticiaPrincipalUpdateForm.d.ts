/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { NoticiaPrincipal } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type NoticiaPrincipalUpdateFormInputValues = {
    title?: string;
    subtitle?: string;
    publishedDate?: string;
    source?: string;
    timestamp?: string;
    externalUrl?: string;
    portada?: string;
};
export declare type NoticiaPrincipalUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    subtitle?: ValidationFunction<string>;
    publishedDate?: ValidationFunction<string>;
    source?: ValidationFunction<string>;
    timestamp?: ValidationFunction<string>;
    externalUrl?: ValidationFunction<string>;
    portada?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NoticiaPrincipalUpdateFormOverridesProps = {
    NoticiaPrincipalUpdateFormGrid?: FormProps<GridProps>;
    title?: FormProps<TextFieldProps>;
    subtitle?: FormProps<TextFieldProps>;
    publishedDate?: FormProps<TextFieldProps>;
    source?: FormProps<TextFieldProps>;
    timestamp?: FormProps<TextFieldProps>;
    externalUrl?: FormProps<TextFieldProps>;
    portada?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NoticiaPrincipalUpdateFormProps = React.PropsWithChildren<{
    overrides?: NoticiaPrincipalUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    noticiaPrincipal?: NoticiaPrincipal;
    onSubmit?: (fields: NoticiaPrincipalUpdateFormInputValues) => NoticiaPrincipalUpdateFormInputValues;
    onSuccess?: (fields: NoticiaPrincipalUpdateFormInputValues) => void;
    onError?: (fields: NoticiaPrincipalUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: NoticiaPrincipalUpdateFormInputValues) => NoticiaPrincipalUpdateFormInputValues;
    onValidate?: NoticiaPrincipalUpdateFormValidationValues;
} & React.CSSProperties>;
export default function NoticiaPrincipalUpdateForm(props: NoticiaPrincipalUpdateFormProps): React.ReactElement;
