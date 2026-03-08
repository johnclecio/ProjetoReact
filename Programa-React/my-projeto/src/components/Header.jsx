import { useState } from "react";

function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-white">

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/40 z-50 lg:hidden">
          <div className="w-72 bg-white h-full shadow-xl p-6">

            <button
              onClick={() => setMenuOpen(false)}
              className="mb-6 text-gray-500 hover:text-gray-800"
            >
              ✕ Fechar
            </button>

            <nav className="flex flex-col space-y-6">
              <a href="#sobre" className="hover:text-indigo-600">Sobre</a>
              <a href="#projetos" className="hover:text-indigo-600">Projetos</a>
              <a href="#contato" className="hover:text-indigo-600">Contato</a>
            </nav>

          </div>
        </div>
      )}

      {/* Header */}
      <header className="shadow-sm">
        <nav className="mx-auto max-w-7xl px-6">
          <div className="flex h-16 items-center justify-between">

            {/* Botão mobile */}
            <button
              onClick={() => setMenuOpen(true)}
              className="lg:hidden text-gray-600 text-2xl"
            >
              ☰
            </button>

            {/* Logo */}
            <h1 className="text-xl font-bold text-gray-800">
              JOHN LIMA
            </h1>

            {/* Menu Desktop */}
            <div className="hidden lg:flex gap-8 text-gray-700 font-medium">
              <a href="#sobre" className="hover:text-indigo-600">Sobre</a>
              <a href="#projetos" className="hover:text-indigo-600">Projeto</a>
              <a href="#contato" className="hover:text-indigo-600">Contato</a>
            </div>

          </div>
        </nav>
      </header>

    </div>
  );
}

export default Header;