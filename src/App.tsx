import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import FormularioCategoria from "./components/categorias/FormCategoria";
import DeletarCategoria from "./components/categorias/DeletarCategoria";
import ListarCategorias from "./components/categorias/ListarCategorias";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categorias" element={<ListarCategorias />} />
            <Route
              path="/cadastroCategoria"
              element={<FormularioCategoria />}
            />
            <Route
              path="/editarCategoria/:id"
              element={<FormularioCategoria />}
            />
            <Route
              path="/deletarCategoria/:id"
              element={<DeletarCategoria />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
