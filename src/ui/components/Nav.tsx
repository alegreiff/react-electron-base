import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="flex gap-4 p-4 bg-gray-100">
      <Link to="/" className="text-blue-600 hover:underline">Inicio</Link>
      <Link to="/about" className="text-green-600 hover:underline">Acerca</Link>
    </nav>
  );
}