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

const AuthScreen = ({ navigation }) => {
  return (
    <LinearGradient
    colors={['#D4B5FF', '#9B59B6', '#D4B5FF']} 
    locations={[0, 0.5, 1]} 
      start={{ x: 0.5, y: 0 }} 
      end={{ x: 0.5, y: 1 }} 
      style={styles.container}
    >
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to Civic Hub</Text>
        <Text style={styles.subtitle}>
          Sign in or create an account to get started.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={styles.buttonText}>Create an Account</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.outlineButton}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.outlineButtonText}>Log In</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    color: '#fff',
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  button: {
    width: width * 0.8,
    padding: 15,
    backgroundColor: '#fff', 
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#9B59B6', 
  },
  outlineButton: {
    width: width * 0.8,
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    alignItems: 'center',
  },
  outlineButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff', 
  },
});

export default AuthScreen;
