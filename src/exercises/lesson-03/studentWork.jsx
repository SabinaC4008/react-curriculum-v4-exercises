//Lesson-03 Component Lifecycle, Hooks, State, and Props
//Exercise: React Bug Hunt – Fix the broken components in this folder
//Impport components here
import BugEffectLoop from './BugEffectLoop';
import BugMutatedState from './BugMutatedState';
import BugProps from './BugProps';

export default function StudentWork() {
  return (
    <div>
      {/* add components here */}
      <h1>Bug Effect Component</h1>
      <BugEffectLoop />

      <h1>Bug Mutated State</h1>
      <BugMutatedState />

      <h1>Bug Props</h1>
      <BugProps />
    </div>
  );
}
