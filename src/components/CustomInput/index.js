import { TextInput, StyleSheet, Text, View, Pressable } from "react-native";
import React, { forwardRef, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Controller } from "react-hook-form";

const CustomInput = ({ fieldTitle, control, rules, secureEntryEnable,placeholder,submitEdit,maxlength }) => {

  const [isShowingSecureText, setIstShowingSecureText] =useState(false);

  return (
    <Controller
      control={control}
      name={fieldTitle}
      rules={rules}
      render={({
        field: { value, onChange, onBlur, ref },
        fieldState: { error, isDirty },
      }) => {
        return (
          <View style={styles.mainContainer}>
            <View style={styles.inputContainerStyle}>
              {isDirty && <Text style={styles.labelStyle}>{placeholder}</Text>}
              <View
                style={{
                  flexDirection: "row",
                  width: "100%",  
                }}
              >
                <TextInput
                  style={styles.inputStyle}
                  spellCheck={false}
                  maxLength={maxlength}
                  ref={ref}
                  keyboardType={"default"}
                  returnKeyLabel="next"
                  autoCapitalize={"none"}
                  textContentType={"oneTimeCode"}
                  placeholder={placeholder}
                  placeholderTextColor={"#075E55"}
                  value={value.fieldTitle}
                  onSubmitEditing={()=>{submitEdit()}}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  secureTextEntry={secureEntryEnable && !isShowingSecureText}
                />
                {isDirty && secureEntryEnable ? (
                  <View>
                    <Pressable
                      onPress={() => {
                        setIstShowingSecureText(!isShowingSecureText);
                      }}
                    >
                      {!isShowingSecureText ? (
                        <Ionicons name="eye-outline" size={24} color="black" />
                      ) : (
                        <Ionicons
                          name="eye-off-outline"
                          size={24}
                          color="black"
                        />
                      )}
                    </Pressable>
                  </View>
                ) : (
                  <></>
                )}
              </View>
            </View>
            
            {error&&<Text style={styles.error}>{error.message}</Text>}
          </View>
        );
      }}
    ></Controller>
  );
};
export default CustomInput;

const styles = StyleSheet.create({
  mainContainer:{
    width:"100%",
    alignItems:"center",
    gap:5,

  },
  inputStyle: {
    color: "#075E55",
    fontWeight: "700",
    fontSize: 15,
    flexGrow: 1,
    marginTop:5,

  },
  error:{
    color:"red",
    fontSize:10,
    width:"75%"
  },
  inputContainerStyle: {
    width: "75%",
    alignItems: "center",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#1BD741",
    paddingBottom:5
  },
  labelStyle: {
    color: "#075E55",
    width: "100%",
    fontWeight: "700",
  },
});
