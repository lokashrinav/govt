import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

const OnboardingScreen = ({ navigation }) => {
  return (
    <LinearGradient
    colors={['#D4B5FF', '#9B59B6', '#D4B5FF']} // Soft purple on both sides, darker purple in the middle
    locations={[0, 0.5, 1]} // Symmetric gradient
    start={{ x: 0.5, y: 0 }} // Vertical gradient starting at the top
    end={{ x: 0.5, y: 1 }} // Ending at the bottom
    style={styles.container}
    >


      <View style={styles.content}>
        <Text style={styles.title}>Welcome to the Civic Hub!</Text>
        <View style={styles.infoBox}>
            <Text style={styles.infoTitle}>Quick and Easy Registration</Text>
            <Text style={styles.infoDescription}>
                Your trusted tool for quick and easy voter registration.
            </Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>Know Your Deadlines</Text>
          <Text style={styles.infoDescription}>
            Stay updated on registration deadlines and upcoming elections.
          </Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>Empowering Your Voice</Text>
          <Text style={styles.infoDescription}>
            Register, vote, and make a difference in your community.
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation?.navigate('Auth')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    marginBottom: 15,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#fff',
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  infoBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    width: width * 0.9,
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  infoDescription: {
    fontSize: 16,
    color: '#fff',
  },
  button: {
    width: width * 0.8,
    padding: 15,
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#9B59B6',
  },
});

export default OnboardingScreen;
