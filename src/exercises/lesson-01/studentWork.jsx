//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  const name = 'Sabina';
  const age = 23;
  const hobbies = [
    'Skincare',
    'Dancing',
    'DND',
    'Making bread badly',
    'Improv',
  ];

  return (
    <div>
      {/* add JSX here */}
      <h1>{name}&#39;s Intro</h1>
      <p>
        Hi, I am {name}. I am {age}. I&#39;m a recent CS grad from CSUEB. I
        chose Computer Science because I knew I like methodical data driven
        problem solving, automation, and creating tools for others to use.
        Currently, I am exploring roles in Full-Stack Development, Data
        Analytics and IT. In the future, I hope to find a position that helps me
        utilize my interest in problem solving and tool creation to help create
        tool for companies, particularly within the educational or health
        industries, to maintain their technical infrastructure through web or
        other applications. Outside of my technical interests, I love learning
        about psychology and fashion. Currently I have been getting into sewing
        my own clothing. I also love going on morning runs. You can see more of
        my hobbies in the list below.
      </p>
      <h3>Hobbies:</h3>
      <ul>
        {hobbies.map((element) => (
          <li key={element}> {element} </li>
        ))}
      </ul>
    </div>
  );
}
