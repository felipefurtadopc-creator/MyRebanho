interface Secao {
  titulo: string;
  texto: string;
}

interface LegalPageProps {
  titulo: string;
  atualizacao: string;
  introducao: string;
  secoes: Secao[];
}

export default function LegalPage({
  titulo,
  atualizacao,
  introducao,
  secoes,
}: LegalPageProps) {
  return (
    <div className="min-h-screen bg-charcoal">
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ouro/20 to-transparent" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-ouro/5 blur-3xl pointer-events-none" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Cabeçalho */}
          <div className="mb-12">
            <h1 className="font-bebas text-5xl md:text-7xl text-branco tracking-wider leading-none mb-4">
              {titulo}
            </h1>
            <p className="text-ouro/70 text-sm">{atualizacao}</p>
          </div>

          <p className="text-branco/60 text-base leading-relaxed mb-12">
            {introducao}
          </p>

          {/* Seções */}
          <div className="space-y-10">
            {secoes.map((secao) => (
              <div key={secao.titulo}>
                <h2 className="font-bebas text-2xl md:text-3xl text-ouro tracking-wider mb-3">
                  {secao.titulo}
                </h2>
                <p className="text-branco/60 text-sm md:text-base leading-relaxed">
                  {secao.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
