import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full bg-indigo-900 text-white flex justify-center py-4">
      <div className="container flex justify-between text-lg">
        <Link to="/home" className="text-2xl font-bold uppercase">
          Farmácia
        </Link>
        <Link to="/categorias" className="hover:underline">
          Categorias
        </Link>
        <Link to="/cadastroCategoria" className="hover:underline">
          Cadastrar categoria
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
