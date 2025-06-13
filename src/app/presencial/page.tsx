// app/presencial/page.tsx

// (Opcional, mas recomendado) Importar ícones para os diferenciais
// import { Gem, Target, Shield, Zap } from 'lucide-react';
import Image from 'next/image';

export default function PersonalPresencialPage() {
  return (
    <main className="bg-[#0a0a0a] text-gray-200">
      {/* =======================================================================
        SEÇÃO 1: O CONVITE EXCLUSIVO
        =======================================================================
      */}
      <section 
        className="relative h-screen w-full flex items-center justify-center text-center p-4"
        style={{
          backgroundImage: `url('/images/personal-hero-background.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent z-10"></div>

        <div className="relative z-20 flex flex-col items-center">
          <span className="border border-amber-400 text-amber-400 text-sm font-semibold px-3 py-1 rounded-full mb-4">
            ACOMPANHAMENTO PRESENCIAL EM BOTUCATU
          </span>
          {/* COR ALTERADA: Adicionado um gradiente sutil com verde no título */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-green-300 leading-tight max-w-4xl">
            A Experiência de Treino Mais Próxima da Perfeição.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl">
            Um serviço limitadíssimo para quem não aceita nada menos que resultados extraordinários com supervisão máxima.
          </p>
          <button className="mt-8 bg-amber-400 text-black font-bold py-4 px-10 rounded-lg text-lg hover:bg-amber-500 transition-transform hover:scale-105">
            Consultar Disponibilidade de Vaga
          </button>
        </div>
      </section>

      {/* =======================================================================
        SEÇÃO 2: A VANTAGEM INJUSTA
        =======================================================================
      */}
      <section className="py-24 bg-black px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white">A Diferença Entre o Bom e o Extraordinário.</h2>
            <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
              O acompanhamento presencial oferece vantagens que nenhum outro método consegue replicar. É a sua garantia de performance e segurança.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* COR ALTERADA: Ícones agora usam o verde da marca */}
            <div className="bg-[#111] p-8 rounded-xl border border-gray-800 hover:border-green-500 transition-colors">
              {/* <Shield className="h-10 w-10 text-green-400 mb-4" /> */}
              <h3 className="text-2xl font-bold text-white mb-3">Técnica Impecável</h3>
              <p className="text-gray-400">Correção em tempo real de cada movimento para maximizar o estímulo muscular e anular o risco de lesões.</p>
            </div>
            <div className="bg-[#111] p-8 rounded-xl border border-gray-800 hover:border-green-500 transition-colors">
              {/* <Zap className="h-10 w-10 text-green-400 mb-4" /> */}
              <h3 className="text-2xl font-bold text-white mb-3">Intensidade Sob Medida</h3>
              <p className="text-gray-400">Eu vou te levar ao seu limite real, sabendo exatamente a hora de avançar e a hora de recuar para uma recuperação ótima.</p>
            </div>
            <div className="bg-[#111] p-8 rounded-xl border border-gray-800 hover:border-green-500 transition-colors">
              {/* <Target className="h-10 w-10 text-green-400 mb-4" /> */}
              <h3 className="text-2xl font-bold text-white mb-3">Resultados Acelerados</h3>
              <p className="text-gray-400">Com todas as variáveis controladas, seu progresso é visivelmente mais rápido e consistente. É o caminho mais curto para o seu objetivo.</p>
            </div>
            <div className="bg-[#111] p-8 rounded-xl border border-gray-800 hover:border-green-500 transition-colors">
              {/* <Gem className="h-10 w-10 text-green-400 mb-4" /> */}
              <h3 className="text-2xl font-bold text-white mb-3">Compromisso Inabalável</h3>
              <p className="text-gray-400">A parceria presencial cria um nível de foco e responsabilidade incomparável. Desistir não será uma opção na sua mente.</p>
            </div>
          </div>
          
          {/* CTA ADICIONADO: Novo botão de chamada para ação */}
          <div className="text-center mt-16">
            <button className="bg-green-500 text-black font-bold py-3 px-10 rounded-lg text-lg hover:bg-green-600 transition-transform hover:scale-105">
              QUERO TER ESSA VANTAGEM
            </button>
          </div>
        </div>
      </section>

      {/* =======================================================================
        SEÇÃO 3: A JORNADA E O SANTUÁRIO
        =======================================================================
      */}
      <section className="py-24 px-4" id="jornada">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-8">Nossa Jornada Rumo ao Topo</h2>
            <div className="space-y-6 border-l-2 border-amber-400 pl-6">
              <div className="relative">
                <div className="absolute -left-[34px] top-1 h-4 w-4 rounded-full bg-amber-400"></div>
                <h3 className="text-2xl font-bold text-white">1. Avaliação Detalhada</h3>
                <p className="text-gray-400">Nossa primeira sessão é uma imersão completa nos seus objetivos, histórico e capacidades físicas para traçar o plano perfeito.</p>
              </div>
              <div className="relative">
                 <div className="absolute -left-[34px] top-1 h-4 w-4 rounded-full bg-amber-400"></div>
                <h3 className="text-2xl font-bold text-white">2. Sessões de Alta Performance</h3>
                <p className="text-gray-400">Cada treino é uma hora de foco total em você. Execução, intensidade e estratégia sendo aplicadas com maestria.</p>
              </div>
              <div className="relative">
                 <div className="absolute -left-[34px] top-1 h-4 w-4 rounded-full bg-amber-400"></div>
                <h3 className="text-2xl font-bold text-white">3. Análise de Progresso</h3>
                <p className="text-gray-400">Monitoramos sua evolução de perto com avaliações periódicas para garantir que estamos sempre no caminho certo, fazendo os ajustes necessários.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 lg:mt-0">
             <h3 className="text-2xl font-bold text-center text-white mb-4">Onde a Transformação Acontece</h3>
            <div className="w-full aspect-video bg-gray-800 rounded-xl overflow-hidden border-2 border-gray-700">
               <Image src="/images/academia-parceira.jpg" alt="Academia onde ocorrem os treinos" width={800} height={450} className="w-full h-full object-cover" />
            </div>
            <p className="mt-4 text-center text-gray-400">Treinos realizados na [Nome da Academia], um ambiente com os melhores equipamentos para sua performance. Endereço: [Endereço da Academia], Botucatu-SP.</p>
          </div>
        </div>
        {/* CTA ADICIONADO: Novo botão de chamada para ação */}
        <div className="text-center mt-20">
          <button className="bg-transparent border-2 border-green-500 text-green-500 font-bold py-3 px-10 rounded-lg text-lg hover:bg-green-500 hover:text-black transition-all">
            VIVER ESTA EXPERIÊNCIA
          </button>
        </div>
      </section>
      
      {/* =======================================================================
        SEÇÃO 4: APLICAÇÃO PARA VAGA
        =======================================================================
      */}
      <section className="py-24 bg-black px-4" id="aplicacao">
        <div className="max-w-3xl mx-auto text-center">
           {/* COR ALTERADA: Adicionada uma sombra verde sutil para conectar com a marca */}
           <div className="bg-[#111] p-10 md:p-16 rounded-2xl border border-gray-800 shadow-2xl shadow-green-500/10">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Pronto(a) para a Experiência Definitiva?</h2>
            <p className="mt-4 text-lg text-gray-300">
              Devido à natureza intensiva e individual do meu trabalho, as vagas para o acompanhamento presencial são extremamente limitadas. 
              Preencha o formulário de aplicação para que eu possa entender seus objetivos.
            </p>
             <p className="mt-6 text-amber-400 font-semibold">
              O próximo passo é uma conversa individual para alinharmos as expectativas e verificarmos a disponibilidade.
            </p>
            <button className="mt-8 bg-amber-400 text-black font-bold py-4 px-12 rounded-lg text-xl hover:bg-amber-500 transition-transform hover:scale-105">
              PREENCHER FORMULÁRIO DE APLICAÇÃO
            </button>
            <p className="mt-6 text-sm text-gray-500">
              As aplicações são analisadas por ordem de chegada. Entraremos em contato em até 48h.
            </p>
           </div>
        </div>
      </section>
    </main>
  );
}