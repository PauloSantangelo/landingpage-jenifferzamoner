// app/transformacoes/page.tsx

import Image from 'next/image';
import Link from 'next/link';

// ESTRUTURA DE DADOS DE EXEMPLO:
// Você vai preencher isso com os dados reais dos seus alunos.
const transformations = [
  {
    name: 'Juliana F.',
    beforeImage: '/images/transformations/juliana-antes.jpg',
    afterImage: '/images/transformations/juliana-depois.jpg',
    result: '-15kg e muito mais disposição',
    feedback: 'Eu nunca imaginei que conseguiria! A Jeni me deu o caminho e a confiança que faltavam. Hoje, sou outra pessoa, por dentro e por fora.',
  },
  {
    name: 'Ricardo M.',
    beforeImage: '/images/transformations/ricardo-antes.jpg',
    afterImage: '/images/transformations/ricardo-depois.jpg',
    result: '+7kg de massa muscular',
    feedback: 'O método é incrível. Treinos inteligentes, sem invenção. Foi o único jeito que consegui ganhar volume de verdade e com qualidade.',
  },
  {
    name: 'Carla B.',
    beforeImage: '/images/transformations/carla-antes.jpg',
    afterImage: '/images/transformations/carla-depois.jpg',
    result: 'Definição corporal e -10% de gordura',
    feedback: 'Eu treinava, mas não via meu corpo definir. Com o ajuste certo no treino e na dieta, tudo mudou em 4 meses. Surreal!',
  },
  // ... adicione quantas transformações quiser aqui
];

export default function TransformacoesPage() {
  return (
    <main className="bg-black text-white">
      {/* =======================================================================
        SEÇÃO 1: O IMPACTO INICIAL
        =======================================================================
        Objetivo: Uma declaração poderosa e direta. Sem rodeios.
      */}
      <section className="py-20 md:py-28 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <span className="text-green-400 font-semibold">NOSSA MAIOR CONQUISTA</span>
          <h1 className="text-4xl md:text-6xl font-extrabold mt-2 bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-400">
            Resultados Falam Mais Alto Que Palavras
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Estas são as histórias reais de pessoas dedicadas que confiaram no método e transformaram não apenas seus corpos, mas suas vidas. Inspire-se.
          </p>
        </div>
      </section>

      {/* =======================================================================
        SEÇÃO 2: A GALERIA DE TRANSFORMAÇÕES (A PAREDE DE PROVAS)
        =======================================================================
        Objetivo: Overwhelm de prova social. Um layout dinâmico para muitas imagens.
      */}
      <section className="px-4 pb-20">
        {/* Layout de Alvenaria (Masonry Grid) para um visual dinâmico */}
        <div className="max-w-7xl mx-auto columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {transformations.map((trans, index) => (
            <div key={index} className="break-inside-avoid bg-gray-900 border border-gray-800 rounded-xl overflow-hidden shadow-lg hover:border-green-500 transition-all duration-300 hover:scale-[1.02]">
              <div className="grid grid-cols-2">
                <Image src={trans.beforeImage} alt={`Antes - ${trans.name}`} width={400} height={500} className="w-full h-full object-cover"/>
                <Image src={trans.afterImage} alt={`Depois - ${trans.name}`} width={400} height={500} className="w-full h-full object-cover"/>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-green-400">{trans.name}</h3>
                <p className="text-amber-400 font-semibold mb-3">{trans.result}</p>
                <blockquote className="text-gray-300 italic border-l-4 border-gray-700 pl-4">
                  "{trans.feedback}"
                </blockquote>
              </div>
            </div>
          ))}
           {/* Adicione mais cards estáticos ou dinâmicos aqui se precisar */}
           {/* Exemplo de card extra para preencher */}
           <div className="break-inside-avoid bg-gray-900 border border-gray-800 rounded-xl overflow-hidden shadow-lg hover:border-green-500 transition-all duration-300 hover:scale-[1.02]">
              <div className="grid grid-cols-2">
                <div className="bg-gray-800 aspect-[4/5] flex items-center justify-center">ANTES</div>
                <div className="bg-gray-700 aspect-[4/5] flex items-center justify-center">DEPOIS</div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-green-400">Seu Nome Aqui</h3>
                <p className="text-amber-400 font-semibold mb-3">Seu Resultado Incrível</p>
                <blockquote className="text-gray-300 italic border-l-4 border-gray-700 pl-4">
                  "Você pode ser o próximo caso de sucesso a inspirar outras pessoas."
                </blockquote>
              </div>
            </div>
        </div>
      </section>
      
       {/* =======================================================================
        SEÇÃO 3: FEEDBACKS REAIS E DIRETOS
        =======================================================================
        Objetivo: Aumentar a autenticidade com provas que não parecem marketing.
      */}
      <section className="py-20 bg-black">
        <div className="max-w-5xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">A Opinião de Quem Viveu a Experiência</h2>
          <p className="text-gray-400 mb-12">Mensagens que recebemos e nos motivam todos os dias.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Aqui você colocaria imagens de prints do WhatsApp ou Instagram */}
            <div className="bg-gray-800 rounded-lg p-2"><div className="bg-gray-700 aspect-[9/16] rounded-md flex items-center justify-center text-gray-500">Print do Feedback 1</div></div>
            <div className="bg-gray-800 rounded-lg p-2"><div className="bg-gray-700 aspect-[9/16] rounded-md flex items-center justify-center text-gray-500">Print do Feedback 2</div></div>
            <div className="bg-gray-800 rounded-lg p-2"><div className="bg-gray-700 aspect-[9/16] rounded-md flex items-center justify-center text-gray-500">Print do Feedback 3</div></div>
          </div>
        </div>
      </section>

      {/* =======================================================================
        SEÇÃO 4: A CHAMADA PARA SUA TRANSFORMAÇÃO
        =======================================================================
        Objetivo: Converter a inspiração em ação.
      */}
      <section className="py-20 md:py-28 px-4">
         <div className="max-w-3xl mx-auto text-center bg-gray-900 p-10 md:p-16 rounded-2xl border border-gray-800 shadow-2xl shadow-green-500/10">
            <h2 className="text-4xl md:text-5xl font-bold text-white">Sua Transformação Começa Agora.</h2>
            <p className="mt-4 text-lg text-gray-300">
              Você viu o que é possível. O mesmo método e a mesma dedicação estão disponíveis para você.
              Escolha o caminho que faz mais sentido para o seu momento.
            </p>
             <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/consultoria" className="w-full sm:w-auto">
                    <button className="w-full bg-green-500 text-black font-bold py-3 px-8 rounded-lg hover:bg-green-600 transition-all">
                      Quero Consultoria Online
                    </button>
                </Link>
                <Link href="/treinopersonalizado" className="w-full sm:w-auto">
                    <button className="w-full bg-transparent border-2 border-amber-400 text-amber-400 font-bold py-3 px-8 rounded-lg hover:bg-amber-400 hover:text-black transition-all">
                      Quero a Planilha de Treino
                    </button>
                </Link>
             </div>
           </div>
      </section>
    </main>
  );
}