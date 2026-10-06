//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  const name = 'Sabina';
  const age = 23;
  const hobbies = ['Reading', 'Dancing', 'DND', 'Fashion'];

  return (
    <div>
      {/* add JSX here */}
      <h1>{name}&#39;s Intro</h1>
      <p>
        Hi, I am {name}. I am {age}. I am a student here at CTD. I have a
        passion for fullstack development, data and systems work. I hope to
        untilize my learning at CTD to launch a career in tech involving
        creating user applications that help them work with work more
        efficiently with data.
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
