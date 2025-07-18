import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const JohnTisch = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://static.clubs.nfl.com/image/private/t_editorial_landscape_12_desktop/giants/pwryw4a4ylsnks1cnssc' }}
          style={styles.profileImage}
          resizeMode="cover"
        />
      </View>
      <View style={styles.header}>
        <Text style={styles.title}>John Tisch</Text>
        <Badge variant="secondary" style={styles.badge}>Civic Leader</Badge>
      </View>

      <View style={styles.section}>
        <Card style={styles.card}>
          <CardHeader>
            <Text style={styles.cardTitle}>Role & Position</Text>
          </CardHeader>
          <CardContent>
            <Text style={styles.infoText}>• Chairman, Loews Hotels (of the Tisch family)</Text>
            <Text style={styles.infoText}>• Co-owner of the New York Giants (NFL)</Text>
            <Text style={styles.infoText}>• Member of the prominent Tisch family</Text>
            <Text style={styles.infoText}>• Based in New York, NY</Text>
          </CardContent>
        </Card>

        <Card style={styles.card}>
          <CardHeader>
            <Text style={styles.cardTitle}>Anti-Trafficking Advocacy</Text>
          </CardHeader>
          <CardContent>
            <Text style={styles.infoText}>• Recognized by UCF Rosen College as an "Anti-human Trafficking Champion"</Text>
            <Text style={styles.infoText}>• University of Central Florida recognition</Text>
            <Text style={styles.infoText}>• Active in philanthropy and anti-trafficking efforts</Text>
            <Text style={styles.infoText}>• Civic leader in the community</Text>
          </CardContent>
        </Card>

        <Card style={styles.card}>
          <CardHeader>
            <Text style={styles.cardTitle}>Legal Status</Text>
          </CardHeader>
          <CardContent>
            <Text style={styles.infoText}>• Not a suspect in any criminal investigations</Text>
            <Text style={styles.infoText}>• No criminal allegations or proceedings</Text>
            <Text style={styles.infoText}>• No human-trafficking connections</Text>
            <Text style={styles.infoText}>• Distinguished civic leader and philanthropist</Text>
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

export default JohnTisch; 