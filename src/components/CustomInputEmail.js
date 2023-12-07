import React, { useEffect, useRef, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const CustomInput = ({ setValue, placeholder, secureTextEntry, control,setFocus }) => {


  // const { control, setFocus, getValues, watch } = useForm({ defaultValues: { "field0": "", "field1": "", "field2": "", "field3": "", "field4": "", "field5": "", } });

  // useEffect(() => {
  //   const subscription = watch((value) =>
  //     setValue(value)
  //   )
  //   return () => subscription.unsubscribe()
  // }, [watch])

  const inputs = [
    { id: 0, title: "field0", value: "" },
    { id: 1, title: "field1", value: "" },
    { id: 2, title: "field2", value: "" },
    { id: 3, title: "field3", value: "" },
    { id: 4, title: "field4", value: "" },
    { id: 5, title: "field5", value: "" },
  ]


  const onPress = (e, fieldTitle, index) => {

    if (e.nativeEvent.key == "Backspace") {
      if (index == 0) { return }
      index = index - 1
      setFocus(inputs[index].title)

    }
    else {
      if (index == 5) {
        // processValue()
        return;
      }
      index = index + 1

      setFocus(inputs[index].title)

    }

  }


  return (
    <View style={styles.container}>

      {inputs.map((item, index) => {
        return (

          <Controller key={index} control={control} name={item.title} render={({ field: { value, onChange, onBlur, ref } }) => {
            return(
            <TextInput
              placeholder='1'
              key={index}
              value={value[item.title]}
              style={styles.input}
              textContentType={"oneTimeCode"}
              keyboardType={"number-pad"}
              ref={ref}
              onChangeText={onChange}
              onBlur={onBlur}
              onKeyPress={(e) => { onPress(e, item.title, index) }}
              maxLength={1}

            />
            )
          }}>

          </Controller>
        )
      })}


    </View>
  );
};

const styles = StyleSheet.create({
  container: {

    width: '100%',

    borderBottomColor: '#075E55',
    borderBottomWidth: StyleSheet.hairlineWidth,

    padding: 10,
    flexDirection: "row",
    marginVertical: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    fontSize: 18,
    fontWeight: "600",
    paddingVertical: 10,
    width: 40,
    textAlign: "center",
    alignItems: "center",
    borderWidth: 1,
    marginHorizontal: 10,
    borderColor: "#D3D3D3",
    borderRadius: 5
  },
});

export default CustomInput;
