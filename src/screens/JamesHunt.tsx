import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const JamesHunt = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyPyC2jOQT1s6vG-8QEcRBQTrrogiPUx-ZtQ&s' }}
          style={styles.profileImage}
          resizeMode="cover"
        />
      </View>
      <View style={styles.header}>
        <Text style={styles.title}>James Hunt</Text>
        <Badge variant="secondary" style={styles.badge}>DEA Agent</Badge>
      </View>

      <View style={styles.section}>
        <Card style={styles.card}>
          <CardHeader>
            <Text style={styles.cardTitle}>Professional Information</Text>
          </CardHeader>
          <CardContent>
            <Text style={styles.infoText}>• Former Special Agent-in-Charge, DEA New York Division</Text>
            <Text style={styles.infoText}>• Oversaw major drug-trafficking investigations</Text>
            <Text style={styles.infoText}>• Participated in multi-state heroin and cocaine cases</Text>
            <Text style={styles.infoText}>• Led task forces targeting narcotics and trafficking operations</Text>
          </CardContent>
        </Card>

        <Card style={styles.card}>
          <CardHeader>
            <Text style={styles.cardTitle}>Career Highlights</Text>
          </CardHeader>
          <CardContent>
            <Text style={styles.locationText}>📍 New York Division (DEA Special Agent-in-Charge)</Text>
            <Text style={styles.locationText}>📍 Multi-state investigations across the United States</Text>
            <Text style={styles.locationText}>📍 International drug trafficking operations</Text>
            <Text style={styles.locationText}>📍 Forced-labor and sex-trafficking ring investigations</Text>
          </CardContent>
        </Card>

        <Card style={styles.card}>
          <CardHeader>
            <Text style={styles.cardTitle}>Career Summary</Text>
          </CardHeader>
          <CardContent>
            <Text style={styles.infoText}>• Distinguished law enforcement career with no public record of any criminal charges</Text>
            <Text style={styles.infoText}>• Led investigations that targeted trafficking as part of broader narcotics operations</Text>
            <Text style={styles.infoText}>• Recognized for anti-trafficking and drug enforcement work</Text>
            <Text style={styles.infoText}>• Specialized in multi-state and international drug trafficking investigations</Text>
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

export default JamesHunt; 