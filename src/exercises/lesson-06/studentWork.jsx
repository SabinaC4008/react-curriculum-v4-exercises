import { useEffect, useState } from 'react';
import UserProfile from './components/UserProfile';
import TaskItem from './components/TaskItem';
import TaskFilterButton from './components/TaskFilterButton';
import { filtering } from './utils/filteringHelper';
import { customHook } from './hooks/customHook';

export default function StudentWork() {
  const { tasks, filter, loading, changeFilter } = customHook();

  //  #1: Data fetching + state + UI logic all mixed together

  if (loading) {
    return <p>Loading tasks...</p>;
  }

  return (
    <div>
      {/* #3: Hardcoded UI, not reusable */}
      <UserProfile user={'StudentInput'} />

      {/* #4: Repeated button JSX */}
      <div>
        <TaskFilterButton onClick={() => changeFilter('all')} text="All" />
        <TaskFilterButton
          onClick={() => changeFilter('completed')}
          text="Completed"
        />
        <TaskFilterButton
          onClick={() => changeFilter('pending')}
          text="Pending"
        />
        <p>Current filter: {filter}</p>
      </div>

      {/* #5: Inline list rendering */}
      <ul>
        {filtering(tasks, filter).map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}
