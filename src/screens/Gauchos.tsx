import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, Linking, Alert } from 'react-native';
import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const Gauchos = () => {
  const handleArticlePress = async () => {
    const url = 'https://www.nytimes.com/1991/04/29/sports/basketball-big-step-in-basketball-toward-a-bigger-dream.html';
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert('Error', 'Cannot open this link');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to open the article');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://pbs.twimg.com/profile_images/1326848471119310849/xKCbUNzh_400x400.jpg' }}
          style={styles.profileImage}
          resizeMode="cover"
        />
      </View>
      <View style={styles.header}>
        <Text style={styles.title}>Gauchos NY Basketball Team</Text>
        <Badge variant="destructive" style={styles.badge}>Under Investigation</Badge>
      </View>

      <View style={styles.section}>
        <Card style={styles.card}>
          <CardHeader>
            <Text style={styles.cardTitle}>Youth Basketball Program</Text>
          </CardHeader>
          <CardContent>
            <Text style={styles.infoText}>• The Gauchos have changed the face of youth basketball in New York</Text>
            <Text style={styles.infoText}>• Some 2,000 boys tried out, "dribbled and passed and shot their wads for a piece of the action"</Text>
            <Text style={styles.infoText}>• Boys ages 4 to 19, almost all from minority communities of the Bronx and Manhattan</Text>
            <Text style={styles.infoText}>• Hard little bodies whizzed in liquid motion toward the baskets</Text>
          </CardContent>
        </Card>

        <Card style={styles.card}>
          <CardHeader>
            <Text style={styles.cardTitle}>Organization Details</Text>
          </CardHeader>
          <CardContent>
            <Text style={styles.infoText}>• Teamwork Foundation</Text>
            <Text style={styles.infoText}>• Lou d'Almeida and related individuals</Text>
            <Text style={styles.infoText}>• New York basketball team</Text>
            <Text style={styles.infoText}>• Founded by Lou d'Almeida, a real-estate investor from Argentina</Text>
          </CardContent>
        </Card>

        <Card style={styles.card}>
          <CardHeader>
            <Text style={styles.cardTitle}>Program Impact</Text>
          </CardHeader>
          <CardContent>
            <Text style={styles.infoText}>• Provides basketball opportunities for youth in New York</Text>
            <Text style={styles.infoText}>• Offers trips to basketball camps and national tournaments</Text>
            <Text style={styles.infoText}>• Locations in Orlando, FL, Chicago, and Las Vegas, NV</Text>
            <Text style={styles.infoText}>• Young players can be seen by the right people at showcase events</Text>
          </CardContent>
        </Card>

        <Card style={styles.card}>
          <CardHeader>
            <Text style={styles.cardTitle}>Related Article</Text>
          </CardHeader>
          <CardContent>
            <TouchableOpacity onPress={handleArticlePress} style={styles.linkContainer}>
              <Text style={styles.linkText}>
                📰 Read: "Big Step in Basketball Toward a Bigger Dream" - New York Times (1991)
              </Text>
              <Text style={styles.linkSubtext}>Tap to open the original article about the Gauchos basketball program</Text>
            </TouchableOpacity>
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
  linkContainer: {
    padding: 12,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  linkText: {
    fontSize: 16,
    color: '#007AFF',
    fontWeight: '600',
    marginBottom: 4,
  },
  linkSubtext: {
    fontSize: 12,
    color: '#666',
    fontStyle: 'italic',
  },
});

export default Gauchos; 