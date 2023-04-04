import React, { useRef, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from "react-native";

import { HomeHeader } from "./components/header";
import { Input } from "./components/Input";
import { CustomDropDown } from "./components/Dropdown";
import { CustomButton, InputButton } from "./components/button";
import { Formik } from "formik";
import * as yup from "yup";
import { accountNoRegExp, numberDecimalRegExp } from "./utils/regExp";
import { colors } from "./theme/colors";
import { isPlateFormIOS } from "./utils/helpers";
import { SuccessModal } from "./components/modals";

export const Form = () => {
  const [bankVisible, setBankVisible] = useState(false);

  const [bankSelected, setBankSelected]: any = useState({});

  const [successModalVisible, setSuccessModalVisible] = useState(false);

  const [loading, setLoading] = useState(false);

  const forRef: any = useRef();

  const bankName: any = [
    { id: 1, name: "Bank A" },
    { id: 2, name: "Bank B" },
    { id: 3, name: "Bank C" },
    { id: 4, name: "Bank D" },
  ];

  /** Form initial values */
  const initialValues = {
    bankName: "",
    accountNo: "",
    amount: "",
  };

  /** Form Validation */
  const validationSchema = yup.object().shape({
    bankName: yup
      .string()
      .nullable()
      .trim()
      .required("Please select bank name"),
    accountNo: yup
      .string()
      .nullable()
      .trim()
      .required("Please enter account no.")
      .matches(accountNoRegExp, "Please enter valid account no"),

    amount: yup
      .string()
      .nullable()
      .trim()
      .required("Please enter amount")
      .matches(
        numberDecimalRegExp,
        "Please enter numeric value or decimal value."
      )

      .test(
        "amount",
        "Amount should be between 100 to 10000000",
        (value: any) => {
          if (!value) {
            return true;
          }
          return Number(value) >= 100 && Number(value) <= 10000000;
        }
      ),
  });

  /**  handle Entry  */
  const onSubmit = async (values: any) => {
    console.log(values);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccessModalVisible(true);
    }, 3000);
  };

  const onContinue = async () => {
    setBankSelected({});
    forRef.current.resetForm();
    setSuccessModalVisible(false);
  };

  return (
    <SafeAreaView style={{ backgroundColor: colors.lightBlue, flex: 1 }}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        innerRef={forRef}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          setFieldValue,
        }) => (
          <KeyboardAvoidingView
            {...Platform.select({
              ios: {
                behavior: "padding",
              },
            })}
            keyboardVerticalOffset={isPlateFormIOS() ? 100 : 0}
          >
            <ScrollView
              contentInsetAdjustmentBehavior="automatic"
              style={{
                backgroundColor: colors.lightBlue,
                paddingHorizontal: 20,
              }}
            >
              <StatusBar
                barStyle={"dark-content"}
                backgroundColor={colors.primary}
              />
              <HomeHeader />

              <InputButton
                label={"Select Bank"}
                required={true}
                onPress={() => {
                  setBankVisible(true);
                }}
                placeholder={"Select Bank"}
                value={bankSelected?.name}
                error={errors.bankName}
                touched={touched.bankName}
              />
              <Input
                label={"Enter Account No."}
                required={true}
                placeholder={"Enter Account No."}
                keyboardType={"number-pad"}
                value={values.accountNo}
                onChangeText={handleChange("accountNo")}
                onBlur={handleBlur("accountNo")}
                error={errors.accountNo}
                touched={touched.accountNo}
              />
              <Input
                label={"Enter Amount"}
                required={true}
                placeholder={"Enter Amount"}
                keyboardType={"decimal-pad"}
                value={values.amount}
                onChangeText={handleChange("amount")}
                onBlur={handleBlur("amount")}
                error={errors.amount}
                touched={touched.amount}
              />

              <CustomButton
                title={"Submit"}
                onPress={() => handleSubmit()}
                loading={loading}
              />
              <CustomDropDown
                isVisible={bankVisible}
                setIsVisible={setBankVisible}
                data={bankName}
                selected={bankSelected}
                label={"name"}
                value={"id"}
                onPress={(item: any) => {
                  setFieldValue("bankName", item.id);
                  setBankSelected(item);
                  setBankVisible(false);
                }}
              />

              <SuccessModal
                isVisible={successModalVisible}
                setIsVisible={setSuccessModalVisible}
                onPress={onContinue}
              />
            </ScrollView>
          </KeyboardAvoidingView>
        )}
      </Formik>
    </SafeAreaView>
  );
};
