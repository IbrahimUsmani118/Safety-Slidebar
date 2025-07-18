import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Index from './src/screens/Index';
import JeffreyEpstein from './src/screens/JeffreyEpstein';
import GhislaineMaxwell from './src/screens/GhislaineMaxwell';
import EdgarBronfman from './src/screens/EdgarBronfman';
import EdgarBronfmanJr from './src/screens/EdgarBronfmanJr';
import MychalHarrison from './src/screens/MychalHarrison';
import JohnTisch from './src/screens/JohnTisch';
import JessicaTisch from './src/screens/JessicaTisch';

import JamesHunt from './src/screens/JamesHunt';
import EdPetersen from './src/screens/EdPetersen';
import LeslieWexner from './src/screens/LeslieWexner';
import JamieDimon from './src/screens/JamieDimon';

import MaryJoWhite from './src/screens/MaryJoWhite';

import MichaelCLuethke from './src/screens/MichaelCLuethke';
import SarahDamiani from './src/screens/SarahDamiani';
import GaryGensler from './src/screens/GaryGensler';
import NormanOstrove from './src/screens/NormanOstrove';
import ChristianCurry from './src/screens/ChristianCurry';
import Gauchos from './src/screens/Gauchos';
import SafetyInfo from './src/screens/SafetyInfo';
import KendrickLamar from './src/screens/KendrickLamar';
import TomKane from './src/screens/TomKane';
import NotFound from './src/screens/NotFound';

const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Index} />
          <Stack.Screen name="JeffreyEpstein" component={JeffreyEpstein} />
          <Stack.Screen name="GhislaineMaxwell" component={GhislaineMaxwell} />
          <Stack.Screen name="EdgarBronfman" component={EdgarBronfman} />
          <Stack.Screen name="EdgarBronfmanJr" component={EdgarBronfmanJr} />
          <Stack.Screen name="MychalHarrison" component={MychalHarrison} />
          <Stack.Screen name="JohnTisch" component={JohnTisch} />
          <Stack.Screen name="JessicaTisch" component={JessicaTisch} />

          <Stack.Screen name="JamesHunt" component={JamesHunt} />
          <Stack.Screen name="EdPetersen" component={EdPetersen} />
          <Stack.Screen name="LeslieWexner" component={LeslieWexner} />
          <Stack.Screen name="JamieDimon" component={JamieDimon} />

          <Stack.Screen name="MaryJoWhite" component={MaryJoWhite} />

          <Stack.Screen name="MichaelCLuethke" component={MichaelCLuethke} />
          <Stack.Screen name="SarahDamiani" component={SarahDamiani} />
          <Stack.Screen name="GaryGensler" component={GaryGensler} />
          <Stack.Screen name="NormanOstrove" component={NormanOstrove} />
          <Stack.Screen name="ChristianCurry" component={ChristianCurry} />
          <Stack.Screen name="Gauchos" component={Gauchos} />
          <Stack.Screen name="SafetyInfo" component={SafetyInfo} />
          <Stack.Screen name="KendrickLamar" component={KendrickLamar} />
          <Stack.Screen name="TomKane" component={TomKane} />
          <Stack.Screen name="NotFound" component={NotFound} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
