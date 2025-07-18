import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const AlanDershowitz = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Alan_dershowitz_2009_retouched_cropped.jpg/640px-Alan_dershowitz_2009_retouched_cropped.jpg' }}
          style={styles.profileImage}
          resizeMode="cover"
        />
      </View>
      <View style={styles.header}>
        <Text style={styles.title}>Alan Morton Dershowitz</Text>
        <Badge variant="secondary" style={styles.badge}>Epstein Network</Badge>
      </View>

      <View style={styles.section}>
        <Card style={styles.card}>
          <CardHeader>
            <Text style={styles.cardTitle}>Personal Information</Text>
          </CardHeader>
          <CardContent>
            <Text style={styles.infoText}>• Full name: Alan Morton Dershowitz</Text>
            <Text style={styles.infoText}>• Born and raised in Brooklyn (Williamsburg and Borough Park), New York City</Text>
            <Text style={styles.infoText}>• Harvard Law School professor</Text>
            <Text style={styles.infoText}>• High-profile defense attorney</Text>
          </CardContent>
        </Card>

        <Card style={styles.card}>
          <CardHeader>
            <Text style={styles.cardTitle}>Known Locations</Text>
          </CardHeader>
          <CardContent>
            <Text style={styles.locationText}>📍 Brooklyn, NY (Birthplace and childhood)</Text>
            <Text style={styles.locationText}>📍 Cambridge, Massachusetts (Harvard Law School)</Text>
            <Text style={styles.locationText}>📍 Manhattan, NY (Legal practice and media appearances)</Text>
          </CardContent>
        </Card>

        <Card style={styles.card}>
          <CardHeader>
            <Text style={styles.cardTitle}>Criminal History</Text>
          </CardHeader>
          <CardContent>
            <Text style={styles.infoText}>• Never charged or convicted of any crime</Text>
            <Text style={styles.infoText}>• Faced civil allegations – including in unsealed court documents around the Epstein case</Text>
            <Text style={styles.infoText}>• Has vigorously denied all allegations</Text>
            <Text style={styles.infoText}>• No criminal proceedings were ever brought against him</Text>
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

export default AlanDershowitz; 