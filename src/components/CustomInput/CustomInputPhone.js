import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Controller } from "react-hook-form";

const CustomInputPhone = ({
  fieldTitle,
  placeholder,
  control,
  rules,
  submitEdit,
}) => {
  return (
    <Controller
      name={fieldTitle}
      control={control}
      rules={rules}
      render={({
        field: { value, onChange, onBlur,ref },
        fieldState: { isDirty,error },

      }) => {
        return (
          <View style={styles.mainContainer}>
            {isDirty && <Text style={styles.labelStyle}>{placeholder}</Text>}
            <View
              style={
                {
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "75%",
                  paddingBottom:2,
                  borderBottomWidth: StyleSheet.hairlineWidth,

                  borderBottomColor: "#1BD741",
                }
              }
            >
              <View style={styles.phoneCodeStyle}>
                <Text
                  style={{ fontSize: 15, fontWeight: "700", color: "#075E55" }}
                >
                  + 91{" "}
                </Text>
                <Ionicons
                  name="caret-down-sharp"
                  size={15}
                  color="#075E55"
                  style={{ alignSelf: "center" }}
                />
              </View>
              <View style={styles.inputContainerStyle}>
                <TextInput
                  style={styles.inputStyle}
                  ref={ref}
                  onSubmitEditing={submitEdit}
                  placeholder={placeholder}
                  textContentType={"telephoneNumber"}
                  placeholderTextColor={"#075E55"}
                  value={value.phone}
                  keyboardType="numbers-and-punctuation"
                  onChangeText={onChange}
                  onBlur={onBlur}
                  maxLength={10}
                />
              </View>
            </View>
            {error&&<Text style={styles.error}>{error.message}</Text>}
          </View>
        );
      }}
    ></Controller>
  );
};

export default CustomInputPhone;

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    alignItems: "center",
    
  },
  inputStyle: {
    color: "#075E55",
    fontWeight: "700",
    fontSize: 15,
    width: "100%",
    flexGrow: 1,
  },
  inputContainerStyle: {
    width: "80%",
    alignItems: "center",
    marginVertical: 5,
  },
  error:{
    width:"75%",
    fontSize:10,
    color:"red",
    paddingTop:5
  },
  labelStyle: {
    color: "#075E55",
    width: "75%",
    fontWeight: "700",
  },
  phoneCodeStyle: {
    color: "#075E55",
    fontWeight: "700",
    alignItems: "center",
    width: "20%",
    fontSize: 15,
    flexDirection: "row",
  },
});
