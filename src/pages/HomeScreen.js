import React from "react"
import { View, Text, StyleSheet } from "react-native"

import MyButton from "../components/MyButton"

export default function HomeScreen ({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela Principal</Text>

      <MyButton title="Calculadora de Depósitos" onPress={() => navigation.navigate("DepRegScreen")} />
      <MyButton title="Calculadora de Prestação" onPress={() => navigation.navigate("PrestFixaScreen")} />
      <MyButton title="Calculadora de Aplicação" onPress={() => navigation.navigate("ValorFuturoScreen")} />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
  }
})