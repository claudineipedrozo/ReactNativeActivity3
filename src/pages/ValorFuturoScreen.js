import React, { useState } from "react"
import { View, Text, StyleSheet } from "react-native"

import MyInput from "../components/MyInput"
import MyButton from "../components/MyButton"

export default function ValorFuturoScreen () {
  const [capital, setCapital] = useState("");
  const [taxaJuros, setTaxaJuros] = useState("")
  const [tempo, setTempo] = useState("")
  const [valorFuturo, setValorFuturo] = useState("")

  function calcularAplicacao() {
    let capitalEmReais = parseFloat(capital) / 100
    let taxaJurosEmPorcentagem = parseFloat(taxaJuros) / 100
    let tempoEmAnos = parseFloat(tempo)
    let valorFuturoEmReais = capitalEmReais * (1 + taxaJurosEmPorcentagem) ** tempoEmAnos
    setValorFuturo(valorFuturoEmReais.toFixed(2))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora Financeira</Text>

      <Text style={styles.text}>Esta calculadora realiza a operação de cálculo do valor da de uma aplicação futura dependendo do valor e número 
      de meses informado pelo usuário.</Text>


      <MyInput 
        myPlaceholder="Capital (R$)" 
        value={capital} 
        onChangeText={setCapital} 
      />

      <MyInput 
        myPlaceholder="Taxa de Juros (%)" 
        value={taxaJuros} 
        onChangeText={setTaxaJuros} 
      />

      <MyInput 
        myPlaceholder="Tempo (Anos)" 
        value={tempo} 
        onChangeText={setTempo} 
      />

      <MyButton title="Calcular" onPress={() => calcularAplicacao()} />

      <Text style={styles.result}>Resultado: {valorFuturo}</Text>
      
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
    fontSize: 24,
    fontWeight: "bold",
  },
  text: {
    paddingStart: 10,
  },
  result: {
    marginTop: 18,
    fontSize: 20
  }
})