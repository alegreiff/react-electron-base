import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <nav>
        <ul style={{ display: "flex", listStyle: "none", padding: 0 }}>
          <li style={{ marginRight: "1rem" }}>
            <Link to="/">Inicio</Link>
          </li>
          <li style={{ marginRight: "1rem" }}>
            <Link to="/about">Acerca de</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
