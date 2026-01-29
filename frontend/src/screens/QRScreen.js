import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const QRScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>QR Code Screen</Text>
      {/* Implement QR code functionality */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
  },
});

export default QRScreen;
