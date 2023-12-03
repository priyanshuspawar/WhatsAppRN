import { TextInput, StyleSheet, Text, View, Pressable } from "react-native";
import React, { forwardRef, useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const CustomInput = forwardRef(
  ({ fieldTitle, secureEntryEnable, setValue, value, refAction,contentType }, ref) => {
    //   const secureEntry=Boolean(secureEntry)
    const [isFieldFocused, setIsFieldFocused] = useState(false);
    const [isShowingSecureText, setIstShowingSecureText] = useState(false);
    const isTextAdded = value != "" && value != undefined;

    return (
      <View style={[styles.inputContainerStyle]}>
        {(isFieldFocused || value != "") && (
          <Text style={styles.labelStyle}>{fieldTitle}</Text>
        )}
        <View
          style={{ flexDirection: "row", width: "100%", marginVertical: 10 }}
        >
          <TextInput
            style={styles.inputStyle}
            keyboardType={"default"}
            returnKeyLabel="next"
            autoCapitalize={"none"}
            textContentType={"oneTimeCode"}
            ref={ref}
            placeholder={isFieldFocused ? "" : fieldTitle}
            placeholderTextColor={"#075E55"}
            value={value}
            onChangeText={setValue}
            onSubmitEditing={() => {
              refAction();
            }}
            secureTextEntry={secureEntryEnable && !isShowingSecureText}
            onFocus={() => {
              setIsFieldFocused(true);
            }}
            onBlur={() => setIsFieldFocused(false)}
          />
          {(isTextAdded || isFieldFocused) && secureEntryEnable ? (
            <View>
              <Pressable
                onPress={() => {
                  setIstShowingSecureText(!isShowingSecureText);
                }}
              >
                {!isShowingSecureText ? (
                  <Ionicons name="eye-outline" size={24} color="black" />
                ) : (
                  <Ionicons name="eye-off-outline" size={24} color="black" />
                )}
              </Pressable>
            </View>
          ) : (
            <></>
          )}
        </View>
      </View>
    );
  }
);

export default CustomInput;

const styles = StyleSheet.create({
  inputStyle: {
    color: "#075E55",
    fontWeight: "700",
    fontSize: 15,
    flexGrow: 1,
  },
  inputContainerStyle: {
    width: "75%",
    alignItems: "center",
    marginVertical: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#1BD741",
  },
  labelStyle: {
    color: "#075E55",
    width: "100%",
    fontWeight: "700",
  },
});
