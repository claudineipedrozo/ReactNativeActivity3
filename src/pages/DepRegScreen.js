import React, { useState } from "react"
import { View, Text, StyleSheet } from "react-native"

import MyInput from "../components/MyInput"
import MyButton from "../components/MyButton"

export default function ValorFuturoScreen () {
  const [deposito, setDeposito] = useState("");
  const [taxaJuros, setTaxaJuros] = useState("")
  const [tempo, setTempo] = useState("")
  const [valorFinal, setValorFinal] = useState("")

  function calcularAplicacao() {
    let depositoEmReais = parseFloat(deposito)
    let taxaJurosEmPorcentagem = parseFloat(taxaJuros) / 100
    let valorObtidoFinalEmReais = parseFloat(valorFinal)
    let tempoEmMeses = parseFloat(tempo)
    let tempoObtido = (1 + taxaJurosEmPorcentagem) * ((1 + taxaJurosEmPorcentagem) ** tempoEmMeses - 1)/ taxaJurosEmPorcentagem * depositoEmReais
    setTempo(tempoObtido.toFixed(2)) 
    
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora Financeira</Text>

      <Text style={styles.text}>Esta calculadora realiza a operação de depósitos regulares por mês para obter o número de meses dependendo do valor final
      informado pelo usuário.</Text>

      <MyInput 
        myPlaceholder="Valor de Depósito Regular (R$)" 
        value={deposito} 
        onChangeText={setDeposito} 
      />

      <MyInput 
        myPlaceholder="Taxa de Juros (%)" 
        value={taxaJuros} 
        onChangeText={setTaxaJuros} 
      />

      <MyInput 
        myPlaceholder="Valor Obtido Final" 
        value={valorFinal} 
        onChangeText={setValorFinal} 
      />

      <MyButton title="Calcular" onPress={() => calcularAplicacao()} />

      <Text style={styles.result}>Resultado: {tempo}</Text>
      
      
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
    marginBottom: 10,
  },
  text: {
    paddingStart: 10,
  },
  result: {
    marginTop: 18,
    fontSize: 20
  }
})