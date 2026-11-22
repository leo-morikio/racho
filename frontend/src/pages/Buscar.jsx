import { useEffect, useState } from 'react';
import CardCarona from '../components/CardCarona';

// Endereço do back-end (precisa estar rodando: cd backend && npm start)
const API = 'http://localhost:3000';

function Buscar() {
    // Estado: os dados que a tela mostra. Quando mudam, o React redesenha a tela.
    const [caronas, setCaronas] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(false);

    // Roda uma vez, quando a tela abre ([] = sem dependências)
    useEffect(() => {
        async function buscarCaronas() {
            try {
                const response = await fetch(API + '/carona');   // GET /carona
                setCaronas(await response.json());              // guarda a lista no estado
            } catch (e) {
                console.log(e);
                setErro(true);                                   // back-end desligado ou inacessível
            } finally {
                setCarregando(false);
            }
        }
        buscarCaronas();
    }, []);

    return (
        <section className="flex flex-col gap-4">
            <h1 className="font-titulo font-bold text-2xl text-petroleo">Pra onde você vai?</h1>

            {carregando && <p className="text-texto-fraco">Carregando caronas...</p>}

            {erro && (
                <p className="text-laranja-escuro">
                    Não foi possível carregar as caronas. O back-end está rodando?
                </p>
            )}

            {!carregando && !erro && (
                <>
                    <p className="text-texto-fraco">{caronas.length} caronas encontradas</p>

                    {/* Grade responsiva: 1 coluna no celular, 2 a partir de 640px, 3 a partir de 1280px */}
                    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                        {caronas.map(c => <CardCarona key={c.id} carona={c} />)}
                    </div>
                </>
            )}
        </section>
    );
}

export default Buscar;
