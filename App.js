import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from "./src/pages/HomeScreen"
import DepRegScreen from "./src/pages/DepRegScreen"
import PrestFixaScreen from "./src/pages/PrestFixaScreen"
import ValorFuturo from "./src/pages/ValorFuturoScreen"

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Bem Vindo'}} />
        <Stack.Screen name="DepRegScreen" component={DepRegScreen} options={{title: 'Depósitos Regulares'}} />
        <Stack.Screen name="PrestFixaScreen" component={PrestFixaScreen} options={{title: 'Prestação Fixa'}} />
        <Stack.Screen name="ValorFuturoScreen" component={ValorFuturo} options={{title: 'Valores Futuros'}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}