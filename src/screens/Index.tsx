import React, { useState, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '../utils/supabase';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  Image,
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
  "Jeffrey Epstein": undefined;
  "Ghislaine Maxwell": undefined;
  "Edgar Bronfman": undefined;
  "John Tisch": undefined;
  "James Hunt": undefined;
  "Ed Petersen": undefined;
  "Gauchos": undefined;
  "Safety Info": undefined;
  "Not Found": undefined;
};

// Type your navigation prop
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

// Define a type for your navigation items
type NavItem = {
  name: keyof RootStackParamList;
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
      name: 'Ghislaine Maxwell', 
      color: 'purple', 
      gradient: ['#A18CD1', '#FBC2EB'] as const,
      icon: 'user', 
      value: 0,
      cities: ['New York', 'London', 'Oxford', 'Paris', 'Palm Beach']
    },
    { 
      name: 'Jeffrey Epstein', 
      color: 'red', 
      gradient: ['#FF6B6B', '#FF8E8E'] as const,
      icon: 'user', 
      value: 18,
      cities: ['New York', 'Miami', 'Palm Beach', 'London', 'Paris']
    },
    { 
      name: 'Edgar Bronfman', 
      color: 'teal', 
      gradient: ['#667eea', '#764ba2'] as const,
      icon: 'user', 
      value: 36,
      cities: ['New York', 'Boston', 'Philadelphia']
    },
    { 
      name: 'John Tisch', 
      color: 'pink', 
      gradient: ['#FF9A9E', '#FECFEF'] as const,
      icon: 'user', 
      value: 54,
      cities: ['New York', 'Boston', 'Philadelphia']
    },
    { 
      name: 'James Hunt', 
      color: 'yellow', 
      gradient: ['#F6D365', '#FDA085'] as const,
      icon: 'user', 
      value: 72,
      cities: ['New York', 'Multi-state']
    },
    { 
      name: 'Ed Petersen', 
      color: 'lime', 
      gradient: ['#A8EDEA', '#FED6E3'] as const,
      icon: 'user', 
      value: 90,
      cities: ['Various FBI locations']
    },
    { 
      name: 'Gauchos', 
      color: 'orange', 
      gradient: ['#FF8A65', '#FFCC02'] as const,
      icon: 'alert-triangle', 
      value: 108,
      cities: ['New York']
    },
    { 
      name: 'Safety Info', 
      color: 'red', 
      gradient: ['#FF6B6B', '#FFE66D'] as const,
      icon: 'shield', 
      value: 126,
      cities: ['All Cities'] // Show in all cities
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
    
    // Put the highlighted item first if it's in the filtered list, then the rest
    const highlightedInFiltered = cityFilteredItems.find(item => item.name === highlightedItem.name);
    if (highlightedInFiltered) {
      return [
        highlightedInFiltered,
        ...cityFilteredItems.filter(item => item.name !== highlightedItem.name)
      ];
    }
    
    return cityFilteredItems;
  }, [highlightedItem, selectedCity]);

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
          maximumValue={100}
          step={1}
          value={sliderValue}
          onValueChange={handleSliderChange}
          onSlidingComplete={handleSliderComplete}
          minimumTrackTintColor="#2196F3"
          maximumTrackTintColor="#CCCCCC"
          thumbTintColor="#2196F3"
        />
        <View style={styles.sliderLabels}>
          {navigationItems.map((item) => (
            <TouchableOpacity
              key={item.name}
              onPress={() => {
                setSliderValue(item.value);
                handleSliderComplete(item.value);
              }}
            >
              <Text
                style={[
                  styles.sliderLabel,
                  highlightedItem.name === item.name && styles.sliderLabelActive
                ]}
              >
                {item.name === 'Ghislaine Maxwell' ? 'G.M.' :
                 item.name === 'Jeffrey Epstein' ? 'J.E.' :
                 item.name === 'Edgar Bronfman' ? 'E.B.' :
                 item.name === 'John Tisch' ? 'J.T.' :
                 item.name === 'James Hunt' ? 'J.H.' :
                 item.name === 'Ed Petersen' ? 'E.P.' :
                 item.name === 'Gauchos' ? 'G.' :
                 item.name === 'Safety Info' ? 'S.I.' : item.name}
              </Text>
            </TouchableOpacity>
          ))}
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
            onPress={() => navigation.navigate(item.name)}
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