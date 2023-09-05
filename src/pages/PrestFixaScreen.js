import React, { useState } from "react"
import { View, Text, StyleSheet } from "react-native"

import MyInput from "../components/MyInput"
import MyButton from "../components/MyButton"

export default function PrestFixaScreen () {
  const [valorFinanciado, setvalorFinanciado] = useState("");
  const [taxaJuros, setTaxaJuros] = useState("")
  const [tempo, setTempo] = useState("")
  const [valorParcela, setValorParcela] = useState("")

  function calcularAplicacao() {
    let valorFinanciadoEmReais = parseFloat(valorFinanciado)
    let taxaJurosEmPorcentagem = parseFloat(taxaJuros) / 100
    let tempoEmMeses = parseFloat(tempo) * 12
    let valorParcelaEmReais = (1 - (1 + taxaJurosEmPorcentagem) ** - tempoEmMeses) / taxaJurosEmPorcentagem * valorFinanciadoEmReais
    setValorParcela(valorParcelaEmReais.toFixed(2))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora Financeira</Text>

      <Text style={styles.text}>Esta calculadora realiza a operação de cálculo do valor da prestação dependendo do valor e número 
      de meses informado pelo usuário.</Text>

      <MyInput 
        myPlaceholder="Valor Financiado (R$)" 
        value={valorFinanciado} 
        onChangeText={setvalorFinanciado} 
      />

      <MyInput 
        myPlaceholder="Taxa de Juros (%)" 
        value={taxaJuros} 
        onChangeText={setTaxaJuros} 
      />

      <MyInput 
        myPlaceholder="Tempo (Meses)" 
        value={tempo} 
        onChangeText={setTempo} 
      />

      <MyButton title="Calcular" onPress={() => calcularAplicacao()} />

      <Text style={styles.result}>Resultado: {valorParcela}</Text>
      
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