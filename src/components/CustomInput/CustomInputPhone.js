import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import {Ionicons} from "@expo/vector-icons"
const CustomInputPhone = ({
  fieldTitle,
  secureEntryEnable,
  setValue,
  value,
}) => {
  const [isFieldFocused, setIsFieldFocused] = useState(false);
  const [isShowingSecureText, setIstShowingSecureText] = useState(false);
  const isTextAdded = value != "" && value != undefined;
  return (
    <View style={styles.mainContainer}>
      {(isFieldFocused || value != "") && (
        <Text style={styles.labelStyle}>{fieldTitle}</Text>
      )}
      <View
        style={[{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          width: "75%",
        },
        {
            borderBottomWidth: StyleSheet.hairlineWidth,
        
            borderBottomColor: "#1BD741",
          },
    ]}
      >
        <View style={styles.phoneCodeStyle}>
            <Text style={{fontSize:15,fontWeight:"700",color:"#075E55"}}>+ 91 </Text>
            <Ionicons name="caret-down-sharp" size={15} color="#075E55" style={{alignSelf:"center"}}/>
        </View>
        <View
          style={[
            styles.inputContainerStyle,
   
          ]}
        >
          <TextInput
            style={[styles.inputStyle]}
            placeholder={isFieldFocused ? "" : fieldTitle}
            textContentType={"telephoneNumber"}
            placeholderTextColor={"#075E55"}
            value={value}
            keyboardType="numbers-and-punctuation"
            onChangeText={setValue}
            secureTextEntry={secureEntryEnable && isShowingSecureText}
            onFocus={() => {
              setIsFieldFocused(true);
            }}
            onBlur={() => setIsFieldFocused(false)}
          />
        </View>
      </View>
    </View>
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
    marginVertical: 10,
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
    width:"20%",
    fontSize:15,
    flexDirection:"row"

  },
});
