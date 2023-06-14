/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { User } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function UserCreateForm(props) {
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
    name: undefined,
    phone_number: undefined,
    address: undefined,
    email: undefined,
    isCompletedKYC: false,
    currentStateKYC: undefined,
    externalURLKYC: undefined,
    hasSigned: false,
    dateSigned: undefined,
    isPaymentProcessing: false,
    username: undefined,
    isBanned: undefined,
    isAgent: undefined,
    isSupport: undefined,
  };
  const [name, setName] = React.useState(initialValues.name);
  const [phone_number, setPhone_number] = React.useState(
    initialValues.phone_number
  );
  const [address, setAddress] = React.useState(initialValues.address);
  const [email, setEmail] = React.useState(initialValues.email);
  const [isCompletedKYC, setIsCompletedKYC] = React.useState(
    initialValues.isCompletedKYC
  );
  const [currentStateKYC, setCurrentStateKYC] = React.useState(
    initialValues.currentStateKYC
  );
  const [externalURLKYC, setExternalURLKYC] = React.useState(
    initialValues.externalURLKYC
  );
  const [hasSigned, setHasSigned] = React.useState(initialValues.hasSigned);
  const [dateSigned, setDateSigned] = React.useState(initialValues.dateSigned);
  const [isPaymentProcessing, setIsPaymentProcessing] = React.useState(
    initialValues.isPaymentProcessing
  );
  const [username, setUsername] = React.useState(initialValues.username);
  const [isBanned, setIsBanned] = React.useState(initialValues.isBanned);
  const [isAgent, setIsAgent] = React.useState(initialValues.isAgent);
  const [isSupport, setIsSupport] = React.useState(initialValues.isSupport);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setPhone_number(initialValues.phone_number);
    setAddress(initialValues.address);
    setEmail(initialValues.email);
    setIsCompletedKYC(initialValues.isCompletedKYC);
    setCurrentStateKYC(initialValues.currentStateKYC);
    setExternalURLKYC(initialValues.externalURLKYC);
    setHasSigned(initialValues.hasSigned);
    setDateSigned(initialValues.dateSigned);
    setIsPaymentProcessing(initialValues.isPaymentProcessing);
    setUsername(initialValues.username);
    setIsBanned(initialValues.isBanned);
    setIsAgent(initialValues.isAgent);
    setIsSupport(initialValues.isSupport);
    setErrors({});
  };
  const validations = {
    name: [],
    phone_number: [],
    address: [],
    email: [],
    isCompletedKYC: [],
    currentStateKYC: [],
    externalURLKYC: [],
    hasSigned: [],
    dateSigned: [],
    isPaymentProcessing: [],
    username: [],
    isBanned: [],
    isAgent: [],
    isSupport: [],
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
          name,
          phone_number,
          address,
          email,
          isCompletedKYC,
          currentStateKYC,
          externalURLKYC,
          hasSigned,
          dateSigned,
          isPaymentProcessing,
          username,
          isBanned,
          isAgent,
          isSupport,
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
          await DataStore.save(new User(modelFields));
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
      {...getOverrideProps(overrides, "UserCreateForm")}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              phone_number,
              address,
              email,
              isCompletedKYC,
              currentStateKYC,
              externalURLKYC,
              hasSigned,
              dateSigned,
              isPaymentProcessing,
              username,
              isBanned,
              isAgent,
              isSupport,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Phone number"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              phone_number: value,
              address,
              email,
              isCompletedKYC,
              currentStateKYC,
              externalURLKYC,
              hasSigned,
              dateSigned,
              isPaymentProcessing,
              username,
              isBanned,
              isAgent,
              isSupport,
            };
            const result = onChange(modelFields);
            value = result?.phone_number ?? value;
          }
          if (errors.phone_number?.hasError) {
            runValidationTasks("phone_number", value);
          }
          setPhone_number(value);
        }}
        onBlur={() => runValidationTasks("phone_number", phone_number)}
        errorMessage={errors.phone_number?.errorMessage}
        hasError={errors.phone_number?.hasError}
        {...getOverrideProps(overrides, "phone_number")}
      ></TextField>
      <TextField
        label="Address"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              phone_number,
              address: value,
              email,
              isCompletedKYC,
              currentStateKYC,
              externalURLKYC,
              hasSigned,
              dateSigned,
              isPaymentProcessing,
              username,
              isBanned,
              isAgent,
              isSupport,
            };
            const result = onChange(modelFields);
            value = result?.address ?? value;
          }
          if (errors.address?.hasError) {
            runValidationTasks("address", value);
          }
          setAddress(value);
        }}
        onBlur={() => runValidationTasks("address", address)}
        errorMessage={errors.address?.errorMessage}
        hasError={errors.address?.hasError}
        {...getOverrideProps(overrides, "address")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              phone_number,
              address,
              email: value,
              isCompletedKYC,
              currentStateKYC,
              externalURLKYC,
              hasSigned,
              dateSigned,
              isPaymentProcessing,
              username,
              isBanned,
              isAgent,
              isSupport,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <SwitchField
        label="Is completed kyc"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isCompletedKYC}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              name,
              phone_number,
              address,
              email,
              isCompletedKYC: value,
              currentStateKYC,
              externalURLKYC,
              hasSigned,
              dateSigned,
              isPaymentProcessing,
              username,
              isBanned,
              isAgent,
              isSupport,
            };
            const result = onChange(modelFields);
            value = result?.isCompletedKYC ?? value;
          }
          if (errors.isCompletedKYC?.hasError) {
            runValidationTasks("isCompletedKYC", value);
          }
          setIsCompletedKYC(value);
        }}
        onBlur={() => runValidationTasks("isCompletedKYC", isCompletedKYC)}
        errorMessage={errors.isCompletedKYC?.errorMessage}
        hasError={errors.isCompletedKYC?.hasError}
        {...getOverrideProps(overrides, "isCompletedKYC")}
      ></SwitchField>
      <TextField
        label="Current state kyc"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              phone_number,
              address,
              email,
              isCompletedKYC,
              currentStateKYC: value,
              externalURLKYC,
              hasSigned,
              dateSigned,
              isPaymentProcessing,
              username,
              isBanned,
              isAgent,
              isSupport,
            };
            const result = onChange(modelFields);
            value = result?.currentStateKYC ?? value;
          }
          if (errors.currentStateKYC?.hasError) {
            runValidationTasks("currentStateKYC", value);
          }
          setCurrentStateKYC(value);
        }}
        onBlur={() => runValidationTasks("currentStateKYC", currentStateKYC)}
        errorMessage={errors.currentStateKYC?.errorMessage}
        hasError={errors.currentStateKYC?.hasError}
        {...getOverrideProps(overrides, "currentStateKYC")}
      ></TextField>
      <TextField
        label="External urlkyc"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              phone_number,
              address,
              email,
              isCompletedKYC,
              currentStateKYC,
              externalURLKYC: value,
              hasSigned,
              dateSigned,
              isPaymentProcessing,
              username,
              isBanned,
              isAgent,
              isSupport,
            };
            const result = onChange(modelFields);
            value = result?.externalURLKYC ?? value;
          }
          if (errors.externalURLKYC?.hasError) {
            runValidationTasks("externalURLKYC", value);
          }
          setExternalURLKYC(value);
        }}
        onBlur={() => runValidationTasks("externalURLKYC", externalURLKYC)}
        errorMessage={errors.externalURLKYC?.errorMessage}
        hasError={errors.externalURLKYC?.hasError}
        {...getOverrideProps(overrides, "externalURLKYC")}
      ></TextField>
      <SwitchField
        label="Has signed"
        defaultChecked={false}
        isDisabled={false}
        isChecked={hasSigned}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              name,
              phone_number,
              address,
              email,
              isCompletedKYC,
              currentStateKYC,
              externalURLKYC,
              hasSigned: value,
              dateSigned,
              isPaymentProcessing,
              username,
              isBanned,
              isAgent,
              isSupport,
            };
            const result = onChange(modelFields);
            value = result?.hasSigned ?? value;
          }
          if (errors.hasSigned?.hasError) {
            runValidationTasks("hasSigned", value);
          }
          setHasSigned(value);
        }}
        onBlur={() => runValidationTasks("hasSigned", hasSigned)}
        errorMessage={errors.hasSigned?.errorMessage}
        hasError={errors.hasSigned?.hasError}
        {...getOverrideProps(overrides, "hasSigned")}
      ></SwitchField>
      <TextField
        label="Date signed"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              phone_number,
              address,
              email,
              isCompletedKYC,
              currentStateKYC,
              externalURLKYC,
              hasSigned,
              dateSigned: value,
              isPaymentProcessing,
              username,
              isBanned,
              isAgent,
              isSupport,
            };
            const result = onChange(modelFields);
            value = result?.dateSigned ?? value;
          }
          if (errors.dateSigned?.hasError) {
            runValidationTasks("dateSigned", value);
          }
          setDateSigned(value);
        }}
        onBlur={() => runValidationTasks("dateSigned", dateSigned)}
        errorMessage={errors.dateSigned?.errorMessage}
        hasError={errors.dateSigned?.hasError}
        {...getOverrideProps(overrides, "dateSigned")}
      ></TextField>
      <SwitchField
        label="Is payment processing"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isPaymentProcessing}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              name,
              phone_number,
              address,
              email,
              isCompletedKYC,
              currentStateKYC,
              externalURLKYC,
              hasSigned,
              dateSigned,
              isPaymentProcessing: value,
              username,
              isBanned,
              isAgent,
              isSupport,
            };
            const result = onChange(modelFields);
            value = result?.isPaymentProcessing ?? value;
          }
          if (errors.isPaymentProcessing?.hasError) {
            runValidationTasks("isPaymentProcessing", value);
          }
          setIsPaymentProcessing(value);
        }}
        onBlur={() =>
          runValidationTasks("isPaymentProcessing", isPaymentProcessing)
        }
        errorMessage={errors.isPaymentProcessing?.errorMessage}
        hasError={errors.isPaymentProcessing?.hasError}
        {...getOverrideProps(overrides, "isPaymentProcessing")}
      ></SwitchField>
      <TextField
        label="Username"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              phone_number,
              address,
              email,
              isCompletedKYC,
              currentStateKYC,
              externalURLKYC,
              hasSigned,
              dateSigned,
              isPaymentProcessing,
              username: value,
              isBanned,
              isAgent,
              isSupport,
            };
            const result = onChange(modelFields);
            value = result?.username ?? value;
          }
          if (errors.username?.hasError) {
            runValidationTasks("username", value);
          }
          setUsername(value);
        }}
        onBlur={() => runValidationTasks("username", username)}
        errorMessage={errors.username?.errorMessage}
        hasError={errors.username?.hasError}
        {...getOverrideProps(overrides, "username")}
      ></TextField>
      <TextField
        label="Is banned"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              phone_number,
              address,
              email,
              isCompletedKYC,
              currentStateKYC,
              externalURLKYC,
              hasSigned,
              dateSigned,
              isPaymentProcessing,
              username,
              isBanned: value,
              isAgent,
              isSupport,
            };
            const result = onChange(modelFields);
            value = result?.isBanned ?? value;
          }
          if (errors.isBanned?.hasError) {
            runValidationTasks("isBanned", value);
          }
          setIsBanned(value);
        }}
        onBlur={() => runValidationTasks("isBanned", isBanned)}
        errorMessage={errors.isBanned?.errorMessage}
        hasError={errors.isBanned?.hasError}
        {...getOverrideProps(overrides, "isBanned")}
      ></TextField>
      <TextField
        label="Is agent"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              phone_number,
              address,
              email,
              isCompletedKYC,
              currentStateKYC,
              externalURLKYC,
              hasSigned,
              dateSigned,
              isPaymentProcessing,
              username,
              isBanned,
              isAgent: value,
              isSupport,
            };
            const result = onChange(modelFields);
            value = result?.isAgent ?? value;
          }
          if (errors.isAgent?.hasError) {
            runValidationTasks("isAgent", value);
          }
          setIsAgent(value);
        }}
        onBlur={() => runValidationTasks("isAgent", isAgent)}
        errorMessage={errors.isAgent?.errorMessage}
        hasError={errors.isAgent?.hasError}
        {...getOverrideProps(overrides, "isAgent")}
      ></TextField>
      <TextField
        label="Is support"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              phone_number,
              address,
              email,
              isCompletedKYC,
              currentStateKYC,
              externalURLKYC,
              hasSigned,
              dateSigned,
              isPaymentProcessing,
              username,
              isBanned,
              isAgent,
              isSupport: value,
            };
            const result = onChange(modelFields);
            value = result?.isSupport ?? value;
          }
          if (errors.isSupport?.hasError) {
            runValidationTasks("isSupport", value);
          }
          setIsSupport(value);
        }}
        onBlur={() => runValidationTasks("isSupport", isSupport)}
        errorMessage={errors.isSupport?.errorMessage}
        hasError={errors.isSupport?.hasError}
        {...getOverrideProps(overrides, "isSupport")}
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
