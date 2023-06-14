/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Noticia } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type NoticiaUpdateFormInputValues = {
    title?: string;
    subtitle?: string;
    publishedDate?: string;
    timestamp?: string;
    time12h?: string;
    type?: string;
    externalUrl?: string;
    optionalImage?: string;
};
export declare type NoticiaUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    subtitle?: ValidationFunction<string>;
    publishedDate?: ValidationFunction<string>;
    timestamp?: ValidationFunction<string>;
    time12h?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
    externalUrl?: ValidationFunction<string>;
    optionalImage?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NoticiaUpdateFormOverridesProps = {
    NoticiaUpdateFormGrid?: FormProps<GridProps>;
    title?: FormProps<TextFieldProps>;
    subtitle?: FormProps<TextFieldProps>;
    publishedDate?: FormProps<TextFieldProps>;
    timestamp?: FormProps<TextFieldProps>;
    time12h?: FormProps<TextFieldProps>;
    type?: FormProps<TextFieldProps>;
    externalUrl?: FormProps<TextFieldProps>;
    optionalImage?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NoticiaUpdateFormProps = React.PropsWithChildren<{
    overrides?: NoticiaUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    noticia?: Noticia;
    onSubmit?: (fields: NoticiaUpdateFormInputValues) => NoticiaUpdateFormInputValues;
    onSuccess?: (fields: NoticiaUpdateFormInputValues) => void;
    onError?: (fields: NoticiaUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: NoticiaUpdateFormInputValues) => NoticiaUpdateFormInputValues;
    onValidate?: NoticiaUpdateFormValidationValues;
} & React.CSSProperties>;
export default function NoticiaUpdateForm(props: NoticiaUpdateFormProps): React.ReactElement;
