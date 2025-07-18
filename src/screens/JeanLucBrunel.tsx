import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const JeanLucBrunel = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://c.files.bbci.co.uk/162A7/production/_123319709_073992341.jpg' }}
          style={styles.profileImage}
          resizeMode="cover"
        />
      </View>
      <View style={styles.header}>
        <Text style={styles.title}>Jean-Luc Didier Henri Brunel</Text>
        <Badge variant="secondary" style={styles.badge}>Epstein Network</Badge>
      </View>

      <View style={styles.section}>
        <Card style={styles.card}>
          <CardHeader>
            <Text style={styles.cardTitle}>Personal Information</Text>
          </CardHeader>
          <CardContent>
            <Text style={styles.infoText}>• Full name: Jean-Luc Didier Henri Brunel</Text>
            <Text style={styles.infoText}>• Born in Neuilly-sur-Seine (Paris suburbs), France</Text>
            <Text style={styles.infoText}>• Modeling agency owner</Text>
            <Text style={styles.infoText}>• Fashion industry figure</Text>
          </CardContent>
        </Card>

        <Card style={styles.card}>
          <CardHeader>
            <Text style={styles.cardTitle}>Known Locations</Text>
          </CardHeader>
          <CardContent>
            <Text style={styles.locationText}>📍 Neuilly-sur-Seine, France (Birthplace)</Text>
            <Text style={styles.locationText}>📍 Paris, France (Modeling agencies)</Text>
            <Text style={styles.locationText}>📍 New York City (Mid-2000s relocation)</Text>
            <Text style={styles.locationText}>📍 Miami, FL (Mid-2000s relocation)</Text>
          </CardContent>
        </Card>

        <Card style={styles.card}>
          <CardHeader>
            <Text style={styles.cardTitle}>Criminal History</Text>
          </CardHeader>
          <CardContent>
            <Text style={styles.infoText}>• French modeling agent indicted in December 2020 for rape and sexual assault of minors</Text>
            <Text style={styles.infoText}>• Suspected of supplying underage girls to Epstein</Text>
            <Text style={styles.infoText}>• Committed suicide in a Paris prison cell in February 2022 before trial</Text>
            <Text style={styles.infoText}>• No conviction due to death before trial</Text>
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

export default JeanLucBrunel; 