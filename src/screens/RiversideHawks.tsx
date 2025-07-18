import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const RiversideHawks: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* Header */}
      <LinearGradient
        colors={['#FF6B6B', '#FF8E8E']}
        style={styles.header}
      >
        <Text style={styles.headerTitle}>Riverside Hawks</Text>
        <Text style={styles.headerSubtitle}>Pedophile Organization</Text>
      </LinearGradient>

      {/* Content */}
      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Overview</Text>
          <Text style={styles.description}>
            Riverside Hawks is identified as a pedophile organization involved in the facilitation and coordination of illegal activities targeting minors. The organization operates under the guise of legitimate activities while serving as a network for predators.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Key Information</Text>
          <Text style={styles.description}>
            • Organization Type: Pedophile Network{'\n'}
            • Primary Function: Facilitation of illegal activities{'\n'}
            • Target Demographics: Minors and vulnerable individuals{'\n'}
            • Operating Methods: Covert operations under legitimate fronts{'\n'}
            • Network Connections: Links to other predatory organizations
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Warning</Text>
          <Text style={styles.warningText}>
            This organization poses a significant threat to public safety, particularly to minors and vulnerable populations. Any suspected involvement should be reported immediately to law enforcement authorities.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Safety Information</Text>
          <Text style={styles.description}>
            If you have information about this organization or suspect illegal activities, contact your local law enforcement immediately. Do not attempt to confront or investigate these activities on your own.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    padding: 20,
    paddingTop: 40,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 18,
    color: 'white',
    opacity: 0.9,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  section: {
    marginBottom: 30,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
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
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666',
  },
  warningText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#d32f2f',
    fontWeight: '500',
  },
});

export default RiversideHawks; 