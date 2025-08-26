import { NavLink, Outlet, useLocation } from "react-router-dom";
import reactLogo from "./assets/react.svg";

const pageTitles: { [key: string]: string } = {
  "/": "Página de Inicio",
  "/about": "Acerca de",
  "/dashboard": "Dashboard",
};

function App() {
  const location = useLocation();
  const title = pageTitles[location.pathname] || "";

  const linkClasses = ({ isActive }: { isActive: boolean; isPending: boolean }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive
      ? "bg-indigo-600 text-white shadow-md"
      : "text-gray-300 hover:bg-gray-700 hover:text-white"
    }`;

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img className="h-8 w-8" src={reactLogo} alt="React Logo" />
              </div>
              <div className="block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <NavLink to="/" className={linkClasses}>
                    Inicio
                  </NavLink>
                  <NavLink to="/about" className={linkClasses}>
                    Acerca de
                  </NavLink>
                  <NavLink to="/dashboard" className={linkClasses}>
                    Dashboard
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {title && (
        <header className="bg-white shadow-sm">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
            <h1 className="text-xl font-bold tracking-tight text-gray-900">
              {title}
            </h1>
          </div>
        </header>
      )}

      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default App;
