// Um card de carona. Recebe a carona por "props" e só mostra os dados.

// Converte "2026-09-25" em "25/09/2026"
function formatarData(data) {
    return data.split('-').reverse().join('/');
}

function CardCarona({ carona }) {
    return (
        <article className="bg-white rounded-2xl border border-slate-200 p-4 flex flex-col gap-3">
            <div className="flex items-start justify-between gap-3">
                <div>
                    <p className="text-sm text-texto-fraco">Motorista</p>
                    <p className="font-semibold">{carona.motorista}</p>
                </div>
                <p className="font-titulo font-bold text-xl text-petroleo">R$ {carona.preco}</p>
            </div>

            <p className="font-titulo font-semibold text-lg">São Carlos → {carona.destino}</p>

            <div className="flex gap-4 text-sm text-texto-fraco">
                <span>{formatarData(carona.data)}</span>
                <span>{carona.vagas} {carona.vagas === 1 ? 'vaga' : 'vagas'}</span>
            </div>
        </article>
    );
}

export default CardCarona;
