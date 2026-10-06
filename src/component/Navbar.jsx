export default function Navbar(){
  return(
    <nav className="navbar">
      <div className="logo">
      <h2>task Manager</h2>
      </div>
      <div className="nav-links">
        <a href="#">Home</a>
         <a href="#">Task</a>
          <a href="#">About</a>
          <button>Add Task</button>
      </div>
    </nav>
  )
}