/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Noticia } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function NoticiaCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    title: undefined,
    subtitle: undefined,
    publishedDate: undefined,
    timestamp: undefined,
    time12h: undefined,
    type: undefined,
    externalUrl: undefined,
    optionalImage: undefined,
  };
  const [title, setTitle] = React.useState(initialValues.title);
  const [subtitle, setSubtitle] = React.useState(initialValues.subtitle);
  const [publishedDate, setPublishedDate] = React.useState(
    initialValues.publishedDate
  );
  const [timestamp, setTimestamp] = React.useState(initialValues.timestamp);
  const [time12h, setTime12h] = React.useState(initialValues.time12h);
  const [type, setType] = React.useState(initialValues.type);
  const [externalUrl, setExternalUrl] = React.useState(
    initialValues.externalUrl
  );
  const [optionalImage, setOptionalImage] = React.useState(
    initialValues.optionalImage
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setTitle(initialValues.title);
    setSubtitle(initialValues.subtitle);
    setPublishedDate(initialValues.publishedDate);
    setTimestamp(initialValues.timestamp);
    setTime12h(initialValues.time12h);
    setType(initialValues.type);
    setExternalUrl(initialValues.externalUrl);
    setOptionalImage(initialValues.optionalImage);
    setErrors({});
  };
  const validations = {
    title: [{ type: "Required" }],
    subtitle: [{ type: "Required" }],
    publishedDate: [{ type: "Required" }],
    timestamp: [{ type: "Required" }],
    time12h: [{ type: "Required" }],
    type: [{ type: "Required" }],
    externalUrl: [],
    optionalImage: [],
  };
  const runValidationTasks = async (fieldName, value) => {
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          title,
          subtitle,
          publishedDate,
          timestamp,
          time12h,
          type,
          externalUrl,
          optionalImage,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          await DataStore.save(new Noticia(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "NoticiaCreateForm")}
    >
      <TextField
        label="Title"
        isRequired={true}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title: value,
              subtitle,
              publishedDate,
              timestamp,
              time12h,
              type,
              externalUrl,
              optionalImage,
            };
            const result = onChange(modelFields);
            value = result?.title ?? value;
          }
          if (errors.title?.hasError) {
            runValidationTasks("title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("title", title)}
        errorMessage={errors.title?.errorMessage}
        hasError={errors.title?.hasError}
        {...getOverrideProps(overrides, "title")}
      ></TextField>
      <TextField
        label="Subtitle"
        isRequired={true}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              subtitle: value,
              publishedDate,
              timestamp,
              time12h,
              type,
              externalUrl,
              optionalImage,
            };
            const result = onChange(modelFields);
            value = result?.subtitle ?? value;
          }
          if (errors.subtitle?.hasError) {
            runValidationTasks("subtitle", value);
          }
          setSubtitle(value);
        }}
        onBlur={() => runValidationTasks("subtitle", subtitle)}
        errorMessage={errors.subtitle?.errorMessage}
        hasError={errors.subtitle?.hasError}
        {...getOverrideProps(overrides, "subtitle")}
      ></TextField>
      <TextField
        label="Published date"
        isRequired={true}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              subtitle,
              publishedDate: value,
              timestamp,
              time12h,
              type,
              externalUrl,
              optionalImage,
            };
            const result = onChange(modelFields);
            value = result?.publishedDate ?? value;
          }
          if (errors.publishedDate?.hasError) {
            runValidationTasks("publishedDate", value);
          }
          setPublishedDate(value);
        }}
        onBlur={() => runValidationTasks("publishedDate", publishedDate)}
        errorMessage={errors.publishedDate?.errorMessage}
        hasError={errors.publishedDate?.hasError}
        {...getOverrideProps(overrides, "publishedDate")}
      ></TextField>
      <TextField
        label="Timestamp"
        isRequired={true}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              subtitle,
              publishedDate,
              timestamp: value,
              time12h,
              type,
              externalUrl,
              optionalImage,
            };
            const result = onChange(modelFields);
            value = result?.timestamp ?? value;
          }
          if (errors.timestamp?.hasError) {
            runValidationTasks("timestamp", value);
          }
          setTimestamp(value);
        }}
        onBlur={() => runValidationTasks("timestamp", timestamp)}
        errorMessage={errors.timestamp?.errorMessage}
        hasError={errors.timestamp?.hasError}
        {...getOverrideProps(overrides, "timestamp")}
      ></TextField>
      <TextField
        label="Time12h"
        isRequired={true}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              subtitle,
              publishedDate,
              timestamp,
              time12h: value,
              type,
              externalUrl,
              optionalImage,
            };
            const result = onChange(modelFields);
            value = result?.time12h ?? value;
          }
          if (errors.time12h?.hasError) {
            runValidationTasks("time12h", value);
          }
          setTime12h(value);
        }}
        onBlur={() => runValidationTasks("time12h", time12h)}
        errorMessage={errors.time12h?.errorMessage}
        hasError={errors.time12h?.hasError}
        {...getOverrideProps(overrides, "time12h")}
      ></TextField>
      <TextField
        label="Type"
        isRequired={true}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              subtitle,
              publishedDate,
              timestamp,
              time12h,
              type: value,
              externalUrl,
              optionalImage,
            };
            const result = onChange(modelFields);
            value = result?.type ?? value;
          }
          if (errors.type?.hasError) {
            runValidationTasks("type", value);
          }
          setType(value);
        }}
        onBlur={() => runValidationTasks("type", type)}
        errorMessage={errors.type?.errorMessage}
        hasError={errors.type?.hasError}
        {...getOverrideProps(overrides, "type")}
      ></TextField>
      <TextField
        label="External url"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              subtitle,
              publishedDate,
              timestamp,
              time12h,
              type,
              externalUrl: value,
              optionalImage,
            };
            const result = onChange(modelFields);
            value = result?.externalUrl ?? value;
          }
          if (errors.externalUrl?.hasError) {
            runValidationTasks("externalUrl", value);
          }
          setExternalUrl(value);
        }}
        onBlur={() => runValidationTasks("externalUrl", externalUrl)}
        errorMessage={errors.externalUrl?.errorMessage}
        hasError={errors.externalUrl?.hasError}
        {...getOverrideProps(overrides, "externalUrl")}
      ></TextField>
      <TextField
        label="Optional image"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              subtitle,
              publishedDate,
              timestamp,
              time12h,
              type,
              externalUrl,
              optionalImage: value,
            };
            const result = onChange(modelFields);
            value = result?.optionalImage ?? value;
          }
          if (errors.optionalImage?.hasError) {
            runValidationTasks("optionalImage", value);
          }
          setOptionalImage(value);
        }}
        onBlur={() => runValidationTasks("optionalImage", optionalImage)}
        errorMessage={errors.optionalImage?.errorMessage}
        hasError={errors.optionalImage?.hasError}
        {...getOverrideProps(overrides, "optionalImage")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
