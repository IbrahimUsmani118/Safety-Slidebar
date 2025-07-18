import React, { useState, useMemo } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import traffickersData from '../data/people.json';
import Slider from '@react-native-community/slider';

const SafetyInfo = () => {
  const [sliderValue, setSliderValue] = useState(0);
  const [selectedCity, setSelectedCity] = useState('All Cities');

  const cities = ['All Cities', 'New York', 'Miami', 'Los Angeles', 'Dallas', 'London', 'Paris', 'Oxford', 'Cambridge', 'Boston', 'Philadelphia', 'Southampton', 'Manhattan', 'Brooklyn', 'Palm Beach', 'Fort Worth', 'Pasadena', 'Westwood', 'Santa Monica', 'East Hampton', 'Westchester County', 'Montrèal', 'Neuilly-sur-Seine', 'Maisons-Laffitte', 'Buckingham Palace', 'Windsor Great Park', 'Berkshire'];

  const handleSliderChange = (value: number) => {
    setSliderValue(value);
  };

  const handleSliderComplete = (value: number) => {
    // Snap to nearest section (0 = Epstein Network, 100 = Law Enforcement)
    const snappedValue = value < 50 ? 0 : 100;
    setSliderValue(snappedValue);
  };



  // Filter Epstein network by city
  const filteredEpsteinNetwork = useMemo(() => {
    if (selectedCity === 'All Cities') {
      return traffickersData.epsteinNetwork;
    }
    
    return traffickersData.epsteinNetwork.filter(person => {
      const cities = person.cities.join(' ').toLowerCase();
      const city = selectedCity.toLowerCase();
      return cities.includes(city);
    });
  }, [selectedCity]);

  // Filter law enforcement by city
  const filteredLawEnforcement = useMemo(() => {
    if (selectedCity === 'All Cities') {
      return traffickersData.lawEnforcement;
    }
    
    return traffickersData.lawEnforcement.filter(person => {
      const cities = person.cities.join(' ').toLowerCase();
      const city = selectedCity.toLowerCase();
      return cities.includes(city);
    });
  }, [selectedCity]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Safety Information</Text>
        <Text style={styles.subtitle}>Important information about known traffickers and their networks</Text>
      </View>

      {/* Slider at the top */}
      <View style={styles.sliderContainer}>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={100}
          step={1}
          value={sliderValue}
          onValueChange={handleSliderChange}
          onSlidingComplete={handleSliderComplete}
          minimumTrackTintColor="#FF6B6B"
          maximumTrackTintColor="#CCCCCC"
          thumbTintColor="#FF6B6B"
        />
        <View style={styles.sliderLabels}>
          <Text style={[styles.sliderLabel, sliderValue < 50 && styles.sliderLabelActive]}>
            Epstein Network
          </Text>
          <Text style={[styles.sliderLabel, sliderValue >= 50 && styles.sliderLabelActive]}>
            Law Enforcement
          </Text>
        </View>
      </View>

      {/* City Filter */}
      <View style={styles.cityFilterContainer}>
        <Text style={styles.cityFilterTitle}>Filter by City:</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cityFilterScroll}>
          {cities.map((city) => (
            <TouchableOpacity
              key={city}
              style={[
                styles.cityFilterButton,
                selectedCity === city && styles.cityFilterButtonActive
              ]}
              onPress={() => setSelectedCity(city)}
            >
              <Text style={[
                styles.cityFilterButtonText,
                selectedCity === city && styles.cityFilterButtonTextActive
              ]}>
                {city}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Show content based on slider position */}
      {sliderValue < 50 ? (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Epstein Network</Text>
          {filteredEpsteinNetwork.length > 0 ? (
            filteredEpsteinNetwork.map((person: any, index: number) => (
              <Card key={index} style={styles.card}>
                <CardHeader>
                  <View style={styles.cardHeader}>
                    <Text style={styles.cardTitle}>{person.name}</Text>
                    <Badge variant="secondary">{person.category}</Badge>
                  </View>
                </CardHeader>
                <CardContent>
                  <Text style={styles.fullName}>Full name: {person.fullName}</Text>
                  <Text style={styles.citiesTitle}>Cities/regions:</Text>
                  {person.cities.map((city: string, cityIndex: number) => (
                    <Text key={cityIndex} style={styles.city}>• {city}</Text>
                  ))}
                  <Text style={styles.criminalHistoryTitle}>Background:</Text>
                  <Text style={styles.criminalHistory}>{person.criminalHistory}</Text>
                </CardContent>
              </Card>
            ))
          ) : (
            <Text style={styles.noResultsText}>No Epstein network members found for {selectedCity}</Text>
          )}
        </View>
      ) : (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Law Enforcement</Text>
          {filteredLawEnforcement.length > 0 ? (
            filteredLawEnforcement.map((person: any, index: number) => (
              <Card key={index} style={styles.card}>
                <CardHeader>
                  <View style={styles.cardHeader}>
                    <Text style={styles.cardTitle}>{person.name}</Text>
                    <Badge variant="default">{person.category}</Badge>
                  </View>
                </CardHeader>
                <CardContent>
                  <Text style={styles.fullName}>Full name: {person.fullName}</Text>
                  <Text style={styles.citiesTitle}>Known locations/roles:</Text>
                  {person.cities.map((city: string, cityIndex: number) => (
                    <Text key={cityIndex} style={styles.city}>• {city}</Text>
                  ))}
                  <Text style={styles.criminalHistoryTitle}>Career Summary:</Text>
                  <Text style={styles.criminalHistory}>{person.criminalHistory}</Text>
                </CardContent>
              </Card>
            ))
          ) : (
            <Text style={styles.noResultsText}>No law enforcement found for {selectedCity}</Text>
          )}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    lineHeight: 22,
  },
  sliderContainer: {
    marginVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    paddingVertical: 16,
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
    color: '#FF6B6B',
    fontWeight: '600',
  },
  cityFilterContainer: {
    backgroundColor: '#fff',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  cityFilterTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 12,
  },
  cityFilterScroll: {
    flexGrow: 0,
  },
  cityFilterButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  cityFilterButtonActive: {
    backgroundColor: '#FF6B6B',
    borderColor: '#FF6B6B',
  },
  cityFilterButtonText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  cityFilterButtonTextActive: {
    color: '#fff',
    fontWeight: '600',
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 16,
  },
  card: {
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1a1a',
    flex: 1,
    marginRight: 12,
  },
  description: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  fullName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1a1a1a',
    marginBottom: 8,
  },
  citiesTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  city: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginLeft: 8,
    marginBottom: 2,
  },
  noResultsText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    fontStyle: 'italic',
    marginTop: 20,
  },
  criminalHistoryTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1a1a1a',
    marginTop: 12,
    marginBottom: 4,
  },
  criminalHistory: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});

export default SafetyInfo; 