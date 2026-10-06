import{useState} from "react";


export default function () {
  const [tasks,setTasks] =useState( [
  {
    id: 1,
    title: "Complete React revision",
    status: "Completed"
  },
  {
    id: 2,
    title: "Build Task Manager UI",
    status: "Pending"
  },
  {
    id: 3,
    title: "Learn React Router",
    status: "In Progress"
  }
]);

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <p>welcome back! here is your overview</p>

      <div className="task-summary">
        <div className="summary-card">
          <h3>total task</h3>
          <p>12</p>
        </div>

        <div className="summary-card">
          <h3>pending</h3>
          <p>5</p>
        </div>

        <div className="summary-card">
          <h3>completed</h3>
          <p>7</p>
        </div>

        <div className="summary-card">
          <h3>in progress</h3>
          <p>15</p>
        </div>

<div className="task-list">
<button onClick={() => setTasks([])}>
  Clear All Tasks
</button>   
  <h2>Tasks</h2>

  {tasks.map((task) => (
    <div className="task-item" key={task.id}>
      <h3>{task.title}</h3>
      <p>{task.status}</p>
    </div>
  ))}
</div>
      </div>
      
    </div>
  );
}
