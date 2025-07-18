import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const JeffreyEpstein = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSuvJNJszbYqcOSA5r30l-4YbaEE9bqctOJbVaGAq-Ejbk9jq2h_4GLjYsYW2_09y_gJMC0-x1l-ONfrKRzO3v3xQ' }}
          style={styles.profileImage}
          resizeMode="cover"
        />
      </View>
      <View style={styles.header}>
        <Text style={styles.title}>Jeffrey Edward Epstein</Text>
        <Badge variant="destructive" style={styles.badge}>Trafficker</Badge>
      </View>

      <View style={styles.section}>
        <Card style={styles.card}>
          <CardHeader>
            <Text style={styles.cardTitle}>Personal Information</Text>
          </CardHeader>
          <CardContent>
            <Text style={styles.infoText}>• Born: 1953 in Brooklyn, NY</Text>
            <Text style={styles.infoText}>• Based in Manhattan, NY for most of his career</Text>
            <Text style={styles.infoText}>• Maintained residence in Palm Beach, FL</Text>
            <Text style={styles.infoText}>• Had a townhouse in Miami, FL</Text>
          </CardContent>
        </Card>

        <Card style={styles.card}>
          <CardHeader>
            <Text style={styles.cardTitle}>Known Locations</Text>
          </CardHeader>
          <CardContent>
            <Text style={styles.locationText}>📍 Brooklyn, NY (Birthplace)</Text>
            <Text style={styles.locationText}>📍 Manhattan, NY (Primary residence)</Text>
            <Text style={styles.locationText}>📍 Palm Beach, FL (Winter residence)</Text>
            <Text style={styles.locationText}>📍 Miami, FL (Townhouse)</Text>
          </CardContent>
        </Card>

        <Card style={styles.card}>
          <CardHeader>
            <Text style={styles.cardTitle}>Criminal History</Text>
          </CardHeader>
          <CardContent>
            <Text style={styles.infoText}>• Convicted in Florida in 2008 of procuring a child for prostitution and soliciting prostitution</Text>
            <Text style={styles.infoText}>• Served 13 months under a controversial work-release arrangement</Text>
            <Text style={styles.infoText}>• Arrested again in July 2019 on federal sex-trafficking charges involving dozens of underage girls</Text>
            <Text style={styles.infoText}>• Died by suicide in custody before trial</Text>
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

export default JeffreyEpstein; 