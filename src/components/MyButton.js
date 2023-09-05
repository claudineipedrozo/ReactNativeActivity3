import React from "react"
import { View } from "react-native"
import { TouchableOpacity, TextButton } from "../styled"

export default function MyButton(props) {
  return (
    <View>
      <TouchableOpacity onPress={props.onPress}>
        <TextButton>{props.title}</TextButton>
      </TouchableOpacity>
    </View>
  )
}

