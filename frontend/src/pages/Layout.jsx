import { Outlet } from 'react-router';

// Moldura comum a todas as telas: a barra do topo e, embaixo, o conteúdo da página atual.
function Layout() {
    return (
        <div className="min-h-screen">
            <header className="sticky top-0 z-10 flex items-center gap-2 h-16 px-4 bg-white border-b border-slate-200">
                <img src="/logo.svg" alt="" className="w-8 h-8" />
                <span className="font-titulo font-bold text-xl text-petroleo">
                    Rach<span className="text-laranja">ô</span>
                </span>
            </header>

            {/* Aqui entra a página da rota atual (ex.: Buscar) */}
            <main className="max-w-5xl mx-auto p-4">
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;
