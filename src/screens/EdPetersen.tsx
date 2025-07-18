import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const EdPetersen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://i0.wp.com/jerriwilliams.com/wp-content/uploads/2018/03/FullSizeRender.jpg?ssl=1' }}
          style={styles.profileImage}
          resizeMode="cover"
        />
      </View>
      <View style={styles.header}>
        <Text style={styles.title}>Ed Petersen</Text>
        <Badge variant="secondary" style={styles.badge}>FBI Agent</Badge>
      </View>

      <View style={styles.section}>
        <Card style={styles.card}>
          <CardHeader>
            <Text style={styles.cardTitle}>Professional Information</Text>
          </CardHeader>
          <CardContent>
            <Text style={styles.infoText}>• Retired FBI Special Agent</Text>
            <Text style={styles.infoText}>• Best-known for supervising the 1975 kidnapping investigation of Exxon executive Sidney Reso</Text>
            <Text style={styles.infoText}>• Hosted true-crime podcast recounting major FBI cases</Text>
            <Text style={styles.infoText}>• Specialized in organized-crime and trafficking investigations</Text>
          </CardContent>
        </Card>

        <Card style={styles.card}>
          <CardHeader>
            <Text style={styles.cardTitle}>Career Highlights</Text>
          </CardHeader>
          <CardContent>
            <Text style={styles.locationText}>📍 FBI Field Offices (Various locations)</Text>
            <Text style={styles.locationText}>📍 Exxon kidnapping investigation (1975)</Text>
            <Text style={styles.locationText}>📍 Organized-crime investigations</Text>
            <Text style={styles.locationText}>📍 Human trafficking case reviews</Text>
          </CardContent>
        </Card>

        <Card style={styles.card}>
          <CardHeader>
            <Text style={styles.cardTitle}>Career Summary</Text>
          </CardHeader>
          <CardContent>
            <Text style={styles.infoText}>• Distinguished FBI career spanning decades with no public record of any criminal charges</Text>
            <Text style={styles.infoText}>• Led high-profile kidnapping and organized-crime investigations</Text>
            <Text style={styles.infoText}>• Contributed to anti-trafficking efforts through case analysis</Text>
            <Text style={styles.infoText}>• Specialized in complex criminal investigations and law enforcement training</Text>
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

export default EdPetersen; 