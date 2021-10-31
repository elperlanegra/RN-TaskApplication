import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import TaskForm from './screens/TaskFormScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({navigation}) => ({
            headerStyle: { backgroundColor: '#222f3e' },
            headerTitleStyle: { color: '#fff' },
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate("TaskForm")}>
                <Text style={{ color: '#fff', marginRight: 15 }}>Add Task</Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen name="TaskForm" component={TaskForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
