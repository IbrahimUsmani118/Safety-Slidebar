import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Index from './src/screens/Index';
import JeffreyEpstein from './src/screens/JeffreyEpstein';
import GhislaineMaxwell from './src/screens/GhislaineMaxwell';
import EdgarBronfman from './src/screens/EdgarBronfman';
import JohnTisch from './src/screens/JohnTisch';
import JamesHunt from './src/screens/JamesHunt';
import EdPetersen from './src/screens/EdPetersen';
import Gauchos from './src/screens/Gauchos';
import SafetyInfo from './src/screens/SafetyInfo';
import NotFound from './src/screens/NotFound';

const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Index} />
          <Stack.Screen name="Jeffrey Epstein" component={JeffreyEpstein} />
          <Stack.Screen name="Ghislaine Maxwell" component={GhislaineMaxwell} />
          <Stack.Screen name="Edgar Bronfman" component={EdgarBronfman} />
          <Stack.Screen name="John Tisch" component={JohnTisch} />
          <Stack.Screen name="James Hunt" component={JamesHunt} />
          <Stack.Screen name="Ed Petersen" component={EdPetersen} />
          <Stack.Screen name="Gauchos" component={Gauchos} />
          <Stack.Screen name="Safety Info" component={SafetyInfo} />
          <Stack.Screen name="Not Found" component={NotFound} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
