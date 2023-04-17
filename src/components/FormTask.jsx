import { useState } from "react";

const FormTask = ({ saveList, getId }) => {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const resetFormBox = () => {
    document.getElementById("NameTask").value = "";
    document.getElementById("ContentTask").value = "";
  }

  const handleClick = (e) => {
    e.preventDefault();
    const id = parseInt(getId()) + 1;
    const task = {
      id: "task-" + id,
      name: name ? name : "No name",
      content: content ? content : "No content",
    };
    saveList(task);
    resetFormBox()
  };
  return (
    <form className="form-task" onSubmit={handleClick}>
      <input
        type="text"
        name="NameTask"
        id="NameTask"
        placeholder="Task name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        name="ContentTask"
        id="ContentTask"
        placeholder="Task content"
        onChange={(e) => setContent(e.target.value)}
      />
      <button className="save-task">Save</button>
    </form>
  );
};

export default FormTask;