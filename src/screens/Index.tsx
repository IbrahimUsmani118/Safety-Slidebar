import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Slider from '@react-native-community/slider';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';

// Define your stack parameter list
type RootStackParamList = {
  Home: undefined;
  JeffreyEpstein: undefined;
  GhislaineMaxwell: undefined;
  EdgarBronfman: undefined;
  EdgarBronfmanJr: undefined;
  MychalHarrison: undefined;
  JohnTisch: undefined;
  JessicaTisch: undefined;
  JamesHunt: undefined;
  EdPetersen: undefined;
  LeslieWexner: undefined;
  JamieDimon: undefined;
  MaryJoWhite: undefined;
  MichaelCLuethke: undefined;
  SarahDamiani: undefined;
  GaryGensler: undefined;
  NormanOstrove: undefined;
  ChristianCurry: undefined;
  Gauchos: undefined;
  SafetyInfo: undefined;
  RiversideHawks: undefined;
  TomKane: undefined;
  NotFound: undefined;
};

// Type your navigation prop
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

// Define a type for your navigation items
type NavItem = {
  name: string;
  color: string;
  gradient: readonly [string, string]; // Fixed as tuple with exactly 2 colors
  icon: string;
  value: number; // For slider positioning
  cities: string[]; // Associated cities
};

const Home: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

  const [selectedCity, setSelectedCity] = useState('All Cities');
  const [sliderValue, setSliderValue] = useState(0);

  const cities = ['All Cities', 'New York', 'Miami', 'Los Angeles', 'Dallas', 'London', 'Paris', 'Oxford', 'Cambridge', 'Boston', 'Philadelphia'];

  // Navigation items with icons, gradients, values for slider, and associated cities
  const navigationItems: NavItem[] = [

    { 
      name: 'Christian Curry', 
      color: 'brown', 
      gradient: ['#8D6E63', '#A1887F'] as const,
      icon: 'user', 
      value: 0,
      cities: ['New York']
    },
    { 
      name: 'Edgar Bronfman', 
      color: 'teal', 
      gradient: ['#667eea', '#764ba2'] as const,
      icon: 'user', 
      value: 8,
      cities: ['New York', 'Boston', 'Philadelphia']
    },
    { 
      name: 'Edgar Bronfman Jr.', 
      color: 'cyan', 
      gradient: ['#00BCD4', '#4DD0E1'] as const,
      icon: 'user', 
      value: 16,
      cities: ['New York', 'Business', 'Global']
    },
    { 
      name: 'Mychal Harrison', 
      color: 'blue', 
      gradient: ['#2196F3', '#64B5F6'] as const,
      icon: 'user', 
      value: 24,
      cities: ['North Carolina', 'Duke University']
    },
    { 
      name: 'Ed Petersen', 
      color: 'lime', 
      gradient: ['#A8EDEA', '#FED6E3'] as const,
      icon: 'user', 
      value: 32,
      cities: ['Various FBI locations']
    },
    { 
      name: 'Gary Gensler', 
      color: 'navy', 
      gradient: ['#1A237E', '#3949AB'] as const,
      icon: 'user', 
      value: 40,
      cities: ['Washington DC']
    },
    { 
      name: 'Ghislaine Maxwell Facilitator Pedophile', 
      color: 'purple', 
      gradient: ['#A18CD1', '#FBC2EB'] as const,
      icon: 'user', 
      value: 48,
      cities: ['New York', 'London', 'Oxford', 'Paris', 'Palm Beach']
    },
    { 
      name: 'JPMorgan Facilitator Pedophile', 
      color: 'blue', 
      gradient: ['#2196F3', '#64B5F6'] as const,
      icon: 'user', 
      value: 48,
      cities: ['New York', 'Global']
    },
    { 
      name: 'Jeffrey Epstein Facilitator Pedophile', 
      color: 'red', 
      gradient: ['#FF6B6B', '#FF8E8E'] as const,
      icon: 'user', 
      value: 56,
      cities: ['New York', 'Miami', 'Palm Beach', 'London', 'Paris']
    },
    { 
      name: 'James Hunt', 
      color: 'yellow', 
      gradient: ['#F6D365', '#FDA085'] as const,
      icon: 'user', 
      value: 64,
      cities: ['New York', 'Multi-state']
    },
    { 
      name: 'John Tisch', 
      color: 'pink', 
      gradient: ['#FF9A9E', '#FECFEF'] as const,
      icon: 'user', 
      value: 72,
      cities: ['New York', 'Boston', 'Philadelphia']
    },
    { 
      name: 'Jessica Tisch', 
      color: 'blue', 
      gradient: ['#2196F3', '#64B5F6'] as const,
      icon: 'user', 
      value: 80,
      cities: ['New York', 'Law Enforcement']
    },

    { 
      name: 'Leslie Wexner', 
      color: 'orange', 
      gradient: ['#FF8A65', '#FFCC02'] as const,
      icon: 'user', 
      value: 88,
      cities: ['New York', 'Ohio', 'Global']
    },
    { 
      name: 'Mary Jo White', 
      color: 'indigo', 
      gradient: ['#3F51B5', '#7986CB'] as const,
      icon: 'user', 
      value: 96,
      cities: ['New York', 'Washington DC']
    },
    { 
      name: 'Michael C. Luethke', 
      color: 'emerald', 
      gradient: ['#10B981', '#34D399'] as const,
      icon: 'user', 
      value: 104,
      cities: ['Technology Sector', 'Global']
    },

    { 
      name: 'Norman Ostrove', 
      color: 'slate', 
      gradient: ['#64748B', '#94A3B8'] as const,
      icon: 'user', 
      value: 112,
      cities: ['Washington DC']
    },
    { 
      name: 'Sarah Damiani', 
      color: 'rose', 
      gradient: ['#E11D48', '#FB7185'] as const,
      icon: 'user', 
      value: 120,
      cities: ['Washington DC']
    },
    { 
      name: 'Gauchos', 
      color: 'orange', 
      gradient: ['#FF8A65', '#FFCC02'] as const,
      icon: 'alert-triangle', 
      value: 128,
      cities: ['New York']
    },
    { 
      name: 'Safety Info', 
      color: 'red', 
      gradient: ['#FF6B6B', '#FFE66D'] as const,
      icon: 'shield', 
      value: 136,
      cities: ['All Cities'] // Show in all cities
    },
    { 
      name: 'Riverside Hawks', 
      color: 'red', 
      gradient: ['#FF6B6B', '#FF8E8E'] as const,
      icon: 'alert-triangle', 
      value: 144,
      cities: ['New York']
    },
    { 
      name: 'Tom Kane', 
      color: 'orange', 
      gradient: ['#F97316', '#FB923C'] as const,
      icon: 'user', 
      value: 152,
      cities: ['Jupiter', 'Florida', 'Ireland']
    },
  ];

  // Find closest navigation item based on slider value
  const getClosestItem = (value: number) => {
    return navigationItems.reduce((prev, current) => {
      return (Math.abs(current.value - value) < Math.abs(prev.value - value))
        ? current
        : prev;
    });
  };

  // Function to get first letter for slider labels
  const getInitials = (name: string) => {
    switch (name) {
      case 'Christian Curry': return 'C';
      case 'Edgar Bronfman': return 'E';
      case 'Edgar Bronfman Jr.': return 'E';
      case 'Mychal Harrison': return 'M';
      case 'Ed Petersen': return 'E';
      case 'Gary Gensler': return 'G';
      case 'Ghislaine Maxwell Facilitator Pedophile': return 'G';
      case 'JPMorgan Facilitator Pedophile': return 'J';
      case 'Jeffrey Epstein Facilitator Pedophile': return 'J';
      case 'James Hunt': return 'J';
      case 'John Tisch': return 'J';
      case 'Jessica Tisch': return 'J';
      case 'Leslie Wexner': return 'L';
      case 'Mary Jo White': return 'M';
      case 'Michael C. Luethke': return 'M';
      case 'Norman Ostrove': return 'N';
      case 'Sarah Damiani': return 'S';
      case 'Tom Kane': return 'T';
      case 'Gauchos': return 'G';
      case 'Safety Info': return 'S';
      case 'Riverside Hawks': return 'R';
      default: return name.charAt(0);
    }
  };

  // Get current highlighted item based on slider position
  const highlightedItem = useMemo(() => {
    return getClosestItem(sliderValue);
  }, [sliderValue]);

  // Filtered items based on selected city and highlighted item
  const filteredItems = useMemo(() => {
    // Filter items based on selected city
    const cityFilteredItems = navigationItems.filter(item => 
      selectedCity === 'All Cities' || item.cities.includes(selectedCity)
    );
    
    // Get the letter of the highlighted item
    const highlightedLetter = getInitials(highlightedItem.name);
    
    // Group items by letter and prioritize the highlighted letter
    const itemsByLetter = cityFilteredItems.reduce((acc, item) => {
      const letter = getInitials(item.name);
      if (!acc[letter]) {
        acc[letter] = [];
      }
      acc[letter].push(item);
      return acc;
    }, {} as { [key: string]: typeof navigationItems });
    
    // Sort letters: highlighted letter first, then alphabetically
    const sortedLetters = Object.keys(itemsByLetter).sort((a, b) => {
      if (a === highlightedLetter) return -1;
      if (b === highlightedLetter) return 1;
      return a.localeCompare(b);
    });
    
    // Flatten the items in the sorted order
    const result: typeof navigationItems = [];
    sortedLetters.forEach(letter => {
      result.push(...itemsByLetter[letter]);
    });
    
    return result;
  }, [highlightedItem.name, selectedCity]);

  // Handlers for city changes
  const handleCityChange = (city: string) => {
    setSelectedCity(city);
  };

  // Handle slider value change
  const handleSliderChange = (value: number) => {
    setSliderValue(value);
  };

  // Handle slider value when released
  const handleSliderComplete = (value: number) => {
    // Find the closest navigation item
    const closest = getClosestItem(value);
    setSliderValue(closest.value);
  };

  // Handle navigation to screens
  const navigateToScreen = (screenName: string) => {
    // Map display names to actual screen component names
    const screenMapping: { [key: string]: string } = {
      'Christian Curry': 'ChristianCurry',
      'Edgar Bronfman': 'EdgarBronfman',
      'Edgar Bronfman Jr.': 'EdgarBronfmanJr',
      'Mychal Harrison': 'MychalHarrison',
      'Ed Petersen': 'EdPetersen',
      'Gary Gensler': 'GaryGensler',
      'Ghislaine Maxwell Facilitator Pedophile': 'GhislaineMaxwell',
      'JPMorgan Facilitator Pedophile': 'JamieDimon',
      'Jeffrey Epstein Facilitator Pedophile': 'JeffreyEpstein',
      'James Hunt': 'JamesHunt',
      'John Tisch': 'JohnTisch',
      'Jessica Tisch': 'JessicaTisch',
      'Leslie Wexner': 'LeslieWexner',
      'Mary Jo White': 'MaryJoWhite',
      'Michael C. Luethke': 'MichaelCLuethke',
      'Norman Ostrove': 'NormanOstrove',
      'Sarah Damiani': 'SarahDamiani',
      'Tom Kane': 'TomKane',
      'Gauchos': 'Gauchos',
      'Safety Info': 'SafetyInfo',
      'Riverside Hawks': 'RiversideHawks'
    };

    const actualScreenName = screenMapping[screenName] || screenName;
    try {
      navigation.navigate(actualScreenName as any);
    } catch (error) {
      console.error(`Navigation error to ${actualScreenName}:`, error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Header with app title and city selector */}
      <LinearGradient
        colors={['#ffffff', '#f7f7f7'] as const}
        style={styles.headerContainer}
      >
        <Text style={styles.appTitle}>Safety Network</Text>
        <View style={styles.citySelector}>
          <Text style={styles.cityLabel}>Location: {selectedCity}</Text>
        </View>
        <View style={styles.citySliderContainer}>
          <Slider
            style={styles.citySlider}
            minimumValue={0}
            maximumValue={cities.length - 1}
            step={1}
            value={cities.indexOf(selectedCity)}
            onValueChange={(value) => {
              const cityIndex = Math.round(value);
              handleCityChange(cities[cityIndex]);
            }}
            minimumTrackTintColor="#2196F3"
            maximumTrackTintColor="#CCCCCC"
            thumbTintColor="#2196F3"
          />
        </View>
      </LinearGradient>

      {/* Navigation slider */}
      <View style={styles.sliderContainer}>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={152}
          step={1}
          value={sliderValue}
          onValueChange={handleSliderChange}
          onSlidingComplete={handleSliderComplete}
          minimumTrackTintColor="#2196F3"
          maximumTrackTintColor="#CCCCCC"
          thumbTintColor="#2196F3"
        />
        <View style={styles.sliderLabels}>
          {Array.from(new Set(navigationItems.map(item => getInitials(item.name)))).map((letter) => {
            const itemsWithLetter = navigationItems.filter(item => getInitials(item.name) === letter);
            const firstItem = itemsWithLetter[0];
            return (
              <TouchableOpacity
                key={letter}
                onPress={() => {
                  setSliderValue(firstItem.value);
                  handleSliderComplete(firstItem.value);
                }}
              >
                <Text
                  style={[
                    styles.sliderLabel,
                    itemsWithLetter.some(item => highlightedItem.name === item.name) && styles.sliderLabelActive
                  ]}
                >
                  {letter}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      {/* Navigation cards */}
      <FlatList
        data={filteredItems}
        keyExtractor={(item) => item.name}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={[
              styles.card,
              index === 0 && styles.highlightedCard
            ]}
            onPress={() => navigateToScreen(item.name)}
          >
            <LinearGradient
              colors={item.gradient}
              style={styles.iconContainer}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <Feather name={item.icon as any} size={20} color="white" />
            </LinearGradient>
            <View style={styles.cardTextContainer}>
              <Text style={styles.cardTitle}>
                {item.name}
              </Text>
            </View>
            <View style={styles.arrowContainer}>
              <Feather name="chevron-right" size={24} color="#CCCCCC" />
            </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: '#FF3B30',
    marginTop: 12,
    textAlign: 'center',
  },
  headerContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eeeeee',
  },
  appTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#333',
    textAlign: 'center',
    marginBottom: 8,
  },
  citySelector: {
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f0f0f0',
    paddingVertical: 8,
    borderRadius: 8,
    marginTop: 8,
  },
  cityLabel: {
    fontSize: 16,
    color: '#333',
    fontWeight: '600',
  },
  citySlider: {
    width: '100%',
    height: 30,
  },
  citySliderContainer: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    marginTop: 8,
  },
  sliderContainer: {
    marginVertical: 20,
    paddingHorizontal: 16,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  sliderLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: 8,
  },
  sliderLabel: {
    fontSize: 14,
    color: '#666',
  },
  sliderLabelActive: {
    color: '#2196F3',
    fontWeight: '600',
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 12,
    padding: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  highlightedCard: {
    borderWidth: 2,
    borderColor: '#2196F3',
    marginBottom: 16,
    marginHorizontal: 4,
  },
  iconContainer: {
    width: 46,
    height: 46,
    borderRadius: 23,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  cardTextContainer: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  arrowContainer: {
    paddingLeft: 8,
  },
});

export default Home;