const List = ({ tasks, removeTask }) => {
  const styles = {
    list: {
      listStyleType: "none",
      padding: 0,
      marginTop: "20px",
    },
    listItem: {
      padding: "20px",
      background: "#f4f4f4",
      margin: "5px 0",
      borderRadius: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px"
    },
  };

  return (
    <div style={{display: "flex", justifyContent: "center"}}>
      <ul style={styles.list}>
        {tasks.map((task, index) => (
          <div style={{ width: "200px", height: "40px" }}>
            <li key={index} style={styles.listItem}>
              {task}{" "}
              <button
                style={{ borderRadius: "5px"}}
                onClick={() => removeTask(index)}
              >
                Remove
              </button>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default List;
