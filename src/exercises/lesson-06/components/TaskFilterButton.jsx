function TaskFilterButton({ onClick, text }) {
  return (
    <>
      <button onClick={onClick}>{text}</button>
    </>
  );
}
export default TaskFilterButton;
