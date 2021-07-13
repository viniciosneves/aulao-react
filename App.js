import React from 'react';
import Frases from './src/views/Frases';
import Formulario from './src/views/Formulario';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TelaBase from './src/components/TelaBase';

const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <TelaBase>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Frases" component={Frases} />
          <Tab.Screen name="Formulario" component={Formulario} />
        </Tab.Navigator>
      </NavigationContainer>
    </TelaBase>
  );
}
