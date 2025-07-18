import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const JamesStaley = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://home.barclays/content/dam/home-barclays/archive-barclays/collections/chairs-and-chief-executives/cd62286a0544e3c4be540b701d79e86d-3_1.large.medium_quality.jpg' }}
          style={styles.profileImage}
          resizeMode="cover"
        />
      </View>
      <View style={styles.header}>
        <Text style={styles.title}>James Edward "Jes" Staley</Text>
        <Badge variant="secondary" style={styles.badge}>Epstein Network</Badge>
      </View>

      <View style={styles.section}>
        <Card style={styles.card}>
          <CardHeader>
            <Text style={styles.cardTitle}>Personal Information</Text>
          </CardHeader>
          <CardContent>
            <Text style={styles.infoText}>• Full name: James Edward Staley</Text>
            <Text style={styles.infoText}>• Born in Boston, Massachusetts</Text>
            <Text style={styles.infoText}>• Family later settled near Philadelphia, Pennsylvania</Text>
            <Text style={styles.infoText}>• Former CEO of Barclays Bank</Text>
          </CardContent>
        </Card>

        <Card style={styles.card}>
          <CardHeader>
            <Text style={styles.cardTitle}>Known Locations</Text>
          </CardHeader>
          <CardContent>
            <Text style={styles.locationText}>📍 Boston, Massachusetts (Birthplace)</Text>
            <Text style={styles.locationText}>📍 Philadelphia, Pennsylvania (Family settlement)</Text>
            <Text style={styles.locationText}>📍 New York City (34 years at J.P. Morgan)</Text>
            <Text style={styles.locationText}>📍 London, England (Barclays CEO 2015)</Text>
            <Text style={styles.locationText}>📍 Southampton, Long Island (Residence)</Text>
          </CardContent>
        </Card>

        <Card style={styles.card}>
          <CardHeader>
            <Text style={styles.cardTitle}>Criminal History</Text>
          </CardHeader>
          <CardContent>
            <Text style={styles.infoText}>• British banker and former Barclays CEO</Text>
            <Text style={styles.infoText}>• No criminal charges or convictions on record</Text>
            <Text style={styles.infoText}>• Long-time associate of Epstein</Text>
            <Text style={styles.infoText}>• Resigned from Barclays in 2021</Text>
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

export default JamesStaley; 