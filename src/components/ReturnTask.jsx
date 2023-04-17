// Articulo que retorna las tareas
const ReturnTask = ({ list, dropList }) => {
  const handleClick = (i) => {
    dropList(i);
  };

  return (
    <article className="container-grid">
      {list.map((item, i) => {
        return (
          <section className="task-container" key={i} id={item.id}>
            <h3>{item.name}</h3>
            <p>{item.content}</p>
            <button className="clear-task" onClick={() => handleClick(i)}>Delete</button>
          </section>
        );
      })}
    </article>
  );
};

export default ReturnTask;
