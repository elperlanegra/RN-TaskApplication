import React from 'react';
import { Text, FlatList } from 'react-native';

const TaskList = ({ tasks }) => {
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => {
        return <Text>{item.title}</Text>;
      }}
    />
  );
};

export default TaskList;
