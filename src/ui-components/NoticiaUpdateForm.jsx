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
export default function NoticiaUpdateForm(props) {
  const {
    id,
    noticia,
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
    const cleanValues = { ...initialValues, ...noticiaRecord };
    setTitle(cleanValues.title);
    setSubtitle(cleanValues.subtitle);
    setPublishedDate(cleanValues.publishedDate);
    setTimestamp(cleanValues.timestamp);
    setTime12h(cleanValues.time12h);
    setType(cleanValues.type);
    setExternalUrl(cleanValues.externalUrl);
    setOptionalImage(cleanValues.optionalImage);
    setErrors({});
  };
  const [noticiaRecord, setNoticiaRecord] = React.useState(noticia);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id ? await DataStore.query(Noticia, id) : noticia;
      setNoticiaRecord(record);
    };
    queryData();
  }, [id, noticia]);
  React.useEffect(resetStateValues, [noticiaRecord]);
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
          await DataStore.save(
            Noticia.copyOf(noticiaRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "NoticiaUpdateForm")}
    >
      <TextField
        label="Title"
        isRequired={true}
        isReadOnly={false}
        defaultValue={title}
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
        defaultValue={subtitle}
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
        defaultValue={publishedDate}
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
        defaultValue={timestamp}
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
        defaultValue={time12h}
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
        defaultValue={type}
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
        defaultValue={externalUrl}
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
        defaultValue={optionalImage}
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
          children="Reset"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ResetButton")}
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
