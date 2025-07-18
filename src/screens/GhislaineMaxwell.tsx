import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const GhislaineMaxwell = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://s.abcnews.com/images/US/Ghislaine-Maxwell-gty-ps-220725_1658759723191_hpMain_16x9_1600.jpg' }}
          style={styles.profileImage}
          resizeMode="cover"
        />
      </View>
      <View style={styles.header}>
        <Text style={styles.title}>Ghislaine Noelle Marion Maxwell</Text>
        <Badge variant="secondary" style={styles.badge}>Epstein Network</Badge>
      </View>

      <View style={styles.section}>
        <Card style={styles.card}>
          <CardHeader>
            <Text style={styles.cardTitle}>Personal Information</Text>
          </CardHeader>
          <CardContent>
            <Text style={styles.infoText}>• Full name: Ghislaine Noelle Marion Maxwell</Text>
            <Text style={styles.infoText}>• Born in Maisons-Laffitte, Île-de-France, France (near Paris)</Text>
            <Text style={styles.infoText}>• Raised in Oxford, England (Headington Hill Hall)</Text>
            <Text style={styles.infoText}>• Lived as a socialite in New York City</Text>
          </CardContent>
        </Card>

        <Card style={styles.card}>
          <CardHeader>
            <Text style={styles.cardTitle}>Known Locations</Text>
          </CardHeader>
          <CardContent>
            <Text style={styles.locationText}>📍 Maisons-Laffitte, France (Birthplace)</Text>
            <Text style={styles.locationText}>📍 Oxford, England (Childhood home)</Text>
            <Text style={styles.locationText}>📍 New York City (Madison Avenue apartment)</Text>
            <Text style={styles.locationText}>📍 Palm Beach, Florida (During Epstein investigation)</Text>
          </CardContent>
        </Card>

        <Card style={styles.card}>
          <CardHeader>
            <Text style={styles.cardTitle}>Criminal History</Text>
          </CardHeader>
          <CardContent>
            <Text style={styles.infoText}>• In December 2021, convicted by a U.S. federal jury on five counts of sex trafficking and conspiracy</Text>
            <Text style={styles.infoText}>• Convicted for recruiting and grooming underage girls for Epstein</Text>
            <Text style={styles.infoText}>• Sentenced to 20 years in prison</Text>
            <Text style={styles.infoText}>• Her appeal is now before the Supreme Court, with the DOJ urging against overturning her conviction</Text>
          </CardContent>
        </Card>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  imageContainer: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: '#e0e0e0',
  },
  header: {
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a1a1a',
    flex: 1,
  },
  badge: {
    marginLeft: 12,
  },
  section: {
    padding: 20,
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
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 8,
  },
  locationText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 8,
  },
});

export default GhislaineMaxwell; 