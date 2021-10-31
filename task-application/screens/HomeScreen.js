import React, { useEffect, useState } from 'react';
import { getTasks } from '../api';

import Layout from '../components/Layout';
import TaskList from '../components/TaskList';

const HomeScreen = () => {
  const [tasks, setTasks] = useState([]);

  const loadTask = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  useEffect(() => {
    loadTask();
  }, []);

  return (
    <Layout>
      <TaskList tasks={tasks} />
    </Layout>
  );
};

export default HomeScreen;
