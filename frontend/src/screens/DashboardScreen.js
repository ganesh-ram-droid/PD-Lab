import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppButton from '../components/AppButton';

const DashboardScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <AppButton title="QR Code" onPress={() => navigation.navigate('QR')} />
      <AppButton title="Shagun List" onPress={() => navigation.navigate('ShagunList')} />
      <AppButton title="Reports" onPress={() => navigation.navigate('Report')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default DashboardScreen;
