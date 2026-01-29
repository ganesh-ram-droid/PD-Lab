import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ShagunListScreen = () => {
  const shaguns = [
    { id: '1', name: 'Shagun 1', amount: 100 },
    { id: '2', name: 'Shagun 2', amount: 200 },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.name}</Text>
      <Text>{item.amount}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shagun List</Text>
      <FlatList
        data={shaguns}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default ShagunListScreen;
