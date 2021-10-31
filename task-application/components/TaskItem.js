import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TaskItem = ({task}) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTextTitle}>{task.title}</Text>
      <Text style={styles.itemTextTitle}>{task.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#333333',
    padding: 20,
    marginVertical: 8,
    borderRadius: 5,
  },
  itemTextTitle:{
    color: '#fff',
  }
});

export default TaskItem;
