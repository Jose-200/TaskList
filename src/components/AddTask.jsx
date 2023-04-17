import FormTask from "./FormTask";

function AddTask({ saveList, getId }) {
  return (
    <header className="save">
      <span className="logo-task">
        <img height="30px" src="./logo.png" />
        Task List
      </span>
      <FormTask saveList={saveList} getId={getId} />
    </header>
  );
}

export default AddTask;
