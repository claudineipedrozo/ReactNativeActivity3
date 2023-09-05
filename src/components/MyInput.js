import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

export default function MyInput(props) {
  return (
    <View>
      <TextInput
        placeholder={props.myPlaceholder}
        style={styles.input}
        value={props.value}
        onChangeText={props.onChangeText}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    marginTop: 18,
    width: 250,
    paddingVertical: 8,
    paddingHorizontal: 4,
    borderWidth: 1,
    borderColor: "#d6d6d6",
    borderRadius: 4,
    backgroundColor: "#ececec",
    marginBottom: 20,
  },
})