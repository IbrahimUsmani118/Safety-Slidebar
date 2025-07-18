import React, { useState, useMemo } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import traffickersData from '../data/people.json';
import Slider from '@react-native-community/slider';

const SafetyInfo = () => {
  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderChange = (value: number) => {
    setSliderValue(value);
  };

  const handleSliderComplete = (value: number) => {
    // Snap to nearest section (0-16 = Epstein Network, 17-33 = Law Enforcement, 34-50 = Business Leaders, 51-67 = Public Figures, 68-84 = Legal Professionals, 85-100 = Legal Cases)
    let snappedValue;
    if (value < 16) snappedValue = 0;
    else if (value < 33) snappedValue = 17;
    else if (value < 50) snappedValue = 34;
    else if (value < 67) snappedValue = 51;
    else if (value < 84) snappedValue = 68;
    else snappedValue = 85;
    setSliderValue(snappedValue);
  };

  // Get current category based on slider value
  const getCurrentCategory = () => {
    if (sliderValue < 16) return 'epsteinNetwork';
    if (sliderValue < 33) return 'lawEnforcement';
    if (sliderValue < 50) return 'businessLeaders';
    if (sliderValue < 67) return 'publicFigures';
    if (sliderValue < 84) return 'legalProfessionals';
    return 'legalCases';
  };

  // Get category display name
  const getCategoryDisplayName = (category: string) => {
    switch (category) {
      case 'epsteinNetwork': return 'Epstein Network';
      case 'lawEnforcement': return 'Law Enforcement';
      case 'businessLeaders': return 'Business Leaders';
      case 'publicFigures': return 'Public Figures';
      case 'legalProfessionals': return 'Legal Professionals';
      case 'legalCases': return 'Legal Cases';
      default: return category;
    }
  };

  // Get category color
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'epsteinNetwork': return '#FF6B6B';
      case 'lawEnforcement': return '#4CAF50';
      case 'businessLeaders': return '#2196F3';
      case 'publicFigures': return '#9C27B0';
      case 'legalProfessionals': return '#FF9800';
      case 'legalCases': return '#795548';
      default: return '#666';
    }
  };

  const currentCategory = getCurrentCategory();
  const categoryData = traffickersData[currentCategory as keyof typeof traffickersData] || [];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Safety Information</Text>
        <Text style={styles.subtitle}>Important information about known individuals and their backgrounds</Text>
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
          minimumTrackTintColor={getCategoryColor(currentCategory)}
          maximumTrackTintColor="#CCCCCC"
          thumbTintColor={getCategoryColor(currentCategory)}
        />
        <View style={styles.sliderLabels}>
          <Text style={[styles.sliderLabel, sliderValue < 16 && styles.sliderLabelActive, { color: sliderValue < 16 ? getCategoryColor('epsteinNetwork') : '#666' }]}>
            Epstein
          </Text>
          <Text style={[styles.sliderLabel, sliderValue >= 17 && sliderValue < 33 && styles.sliderLabelActive, { color: sliderValue >= 17 && sliderValue < 33 ? getCategoryColor('lawEnforcement') : '#666' }]}>
            Law
          </Text>
          <Text style={[styles.sliderLabel, sliderValue >= 34 && sliderValue < 50 && styles.sliderLabelActive, { color: sliderValue >= 34 && sliderValue < 50 ? getCategoryColor('businessLeaders') : '#666' }]}>
            Business
          </Text>
          <Text style={[styles.sliderLabel, sliderValue >= 51 && sliderValue < 67 && styles.sliderLabelActive, { color: sliderValue >= 51 && sliderValue < 67 ? getCategoryColor('publicFigures') : '#666' }]}>
            Public
          </Text>
          <Text style={[styles.sliderLabel, sliderValue >= 68 && sliderValue < 84 && styles.sliderLabelActive, { color: sliderValue >= 68 && sliderValue < 84 ? getCategoryColor('legalProfessionals') : '#666' }]}>
            Legal
          </Text>
          <Text style={[styles.sliderLabel, sliderValue >= 85 && styles.sliderLabelActive, { color: sliderValue >= 85 ? getCategoryColor('legalCases') : '#666' }]}>
            Cases
          </Text>
        </View>
      </View>

      {/* Show content based on slider position */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: getCategoryColor(currentCategory) }]}>
          {getCategoryDisplayName(currentCategory)}
        </Text>
        {categoryData.length > 0 ? (
          categoryData.map((person: any, index: number) => (
            <Card key={index} style={styles.card}>
              <CardHeader>
                <View style={styles.cardHeader}>
                  <Text style={styles.cardTitle}>{person.name}</Text>
                  <Badge variant="secondary" style={{ backgroundColor: getCategoryColor(currentCategory) }}>
                    {person.category}
                  </Badge>
                </View>
              </CardHeader>
              <CardContent>
                <Text style={styles.fullName}>Full name: {person.fullName}</Text>
                <Text style={styles.criminalHistoryTitle}>Background:</Text>
                <Text style={styles.criminalHistory}>{person.criminalHistory}</Text>
              </CardContent>
            </Card>
          ))
        ) : (
          <Text style={styles.noResultsText}>No {getCategoryDisplayName(currentCategory).toLowerCase()} found</Text>
        )}
      </View>
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
    fontSize: 12,
    fontWeight: '500',
  },
  sliderLabelActive: {
    fontWeight: '600',
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
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
  fullName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1a1a1a',
    marginBottom: 8,
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