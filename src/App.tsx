import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';

import Routes from './Routes';

import { useState } from 'react';
import { Text } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './Store';

export default function App() {

  const [appIsReady, setAppIsReady] = useState(true);

  if(!appIsReady){
    return (
      <Text>Carregando</Text>

    )
  }else{
    return (
      <>
        <StatusBar translucent backgroundColor='transparent' />
        <NavigationContainer>
          <Provider store={store} >
            <Routes />
          </Provider>
        </NavigationContainer> 
      </>
    )

  }

}


