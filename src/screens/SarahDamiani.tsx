import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SarahDamiani = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <Text style={styles.title}>Sarah Damiani</Text>
          
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: 'https://media.licdn.com/dms/image/v2/C5603AQGPz7-wdKqY0g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1517407385358?e=1755734400&v=beta&t=bcNIFszIehNpM-yYN_OGva4Ytga6g6-l9khAGQTSIIA' }}
              style={styles.profileImage}
              resizeMode="cover"
            />
          </View>
          
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Description</Text>
            <Text style={styles.text}>
              SEC Facilitator
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 250,
    height: 250,
    borderRadius: 125,
    borderWidth: 3,
    borderColor: '#2196F3',
  },
  section: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 10,
  },
  text: {
    fontSize: 24,
    lineHeight: 32,
    color: '#555',
    fontWeight: 'bold',
  },
});

export default SarahDamiani; 