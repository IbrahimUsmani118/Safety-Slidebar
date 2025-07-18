import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const EdgarBronfman = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://www.hollywoodreporter.com/wp-content/uploads/2013/12/edgar_m._bronfman_sr_-_p_-_2013.jpg' }}
          style={styles.profileImage}
          resizeMode="cover"
        />
      </View>
      <View style={styles.header}>
        <Text style={styles.title}>Edgar Miles Bronfman Sr.</Text>
      </View>

      <View style={styles.section}>
        <Card style={styles.card}>
          <CardHeader>
            <Text style={styles.cardTitle}>Personal Information</Text>
          </CardHeader>
          <CardContent>
            <Text style={styles.infoText}>• Born 1929 in Montrèal, QC</Text>
            <Text style={styles.infoText}>• Long-time New York, NY resident as Chairman of Seagram</Text>
            <Text style={styles.infoText}>• Later split time between Manhattan and East Hampton</Text>
            <Text style={styles.infoText}>• Business magnate and philanthropist</Text>
          </CardContent>
        </Card>

        <Card style={styles.card}>
          <CardHeader>
            <Text style={styles.cardTitle}>Known Locations</Text>
          </CardHeader>
          <CardContent>
            <Text style={styles.locationText}>📍 Montrèal, QC (Birthplace)</Text>
            <Text style={styles.locationText}>📍 New York, NY (Primary residence)</Text>
            <Text style={styles.locationText}>📍 Manhattan, NY (Business headquarters)</Text>
            <Text style={styles.locationText}>📍 East Hampton, NY (Second home)</Text>
          </CardContent>
        </Card>

        <Card style={styles.card}>
          <CardHeader>
            <Text style={styles.cardTitle}>Background</Text>
          </CardHeader>
          <CardContent>
            <Text style={styles.infoText}>• Former Seagram's CEO and philanthropist</Text>
            <Text style={styles.infoText}>• Chairman of Seagram Company with no criminal charges or convictions on record</Text>
            <Text style={styles.infoText}>• Major figure in beverage industry</Text>
            <Text style={styles.infoText}>• Died in 2013</Text>
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

export default EdgarBronfman; 