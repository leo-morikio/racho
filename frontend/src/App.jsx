import { BrowserRouter, Routes, Route } from 'react-router';
import Layout from './pages/Layout';
import Buscar from './pages/Buscar';

// Rotas do app: qual página aparece em cada endereço.
// O Layout fica em volta de todas as páginas (o <Outlet /> dele é onde a página entra).
// Por enquanto só existe a tela Buscar, em "/".
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Buscar />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
