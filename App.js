import React from 'react';
import { StatusBar, SafeAreaView, View } from 'react-native';
import { useFonts, Montserrat_700Bold, Montserrat_400Regular } from '@expo-google-fonts/montserrat';

import Cesta from './src/telas/Cesta';
import mock from './src/mocks/cesta';

export default function App() {
//Checa se as fontes já foram carregadas antes de exibir no App

//carregamento da font montserrat
const [fonteCarregada] = useFonts({
  "MontSerratRegular":Montserrat_400Regular,
  "MontSerratBold": Montserrat_700Bold,
});

//"Se a fonte não estiver carregada, a View deve ser retornada"
if (!fonteCarregada){
  return <View/>;
}

  return (
    <SafeAreaView>
      <Cesta {...mock}/>
      <StatusBar/>
    </SafeAreaView>
  );
}
