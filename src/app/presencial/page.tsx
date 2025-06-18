"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { motion } from 'framer-motion';

// --- COMPONENTES GLOBAIS ADICIONADOS PARA CONSISTÊNCIA ---

function BackgroundAndEffects() {
  return (
    <div className="fixed inset-0 -z-10 h-full w-full bg-black">
      <div className="absolute left-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true"><div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#34d399] to-[#10b981] opacity-30" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }} /></div>
      <div className="absolute bottom-[-20rem] right-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true"><div className="relative left-[calc(50%+10rem)] aspect-[1155/678] w-[36.125rem] translate-x-1/3 rotate-[30deg] bg-gradient-to-tr from-[#f59e0b] to-[#d97706] opacity-15" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }} /></div>
    </div>
  );
}

function BackToHomeButton() {
    return (
        <motion.div className="fixed top-4 left-4 z-[9998]" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, ease: "easeOut" }} >
            <Link href="/">
                <motion.button className="bg-gray-900/80 backdrop-blur-sm text-white p-3 rounded-full hover:bg-gray-800 transition-all shadow-lg border border-gray-700/50 hover:border-green-500/50" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
                </motion.button>
            </Link>
        </motion.div>
    );
}

function FloatingWhatsAppButton() {
    return (
        <a href="https://wa.me/55119XXXXXXXX?text=Olá! Vi a página de atendimento presencial e gostaria de mais informações." target="_blank" rel="noopener noreferrer" className="fixed bottom-5 right-5 z-50 flex items-center justify-center gap-3 bg-green-500 text-white font-bold py-3 px-4 rounded-full shadow-lg transition-transform duration-300 ease-out hover:scale-105 md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99 0-3.903-.52-5.586-1.456l-6.167 1.679zm6.247-6.407c.333.52 1.023.895 1.742 1.066s1.233.226 2.373.081c1.14-.145 2.373-.781 3.319-1.661 1.903-1.75 3.429-4.246 3.51-7.032.098-3.388-2.115-6.42-4.963-7.375-2.849-.955-6.039.293-7.376 3.149-1.336 2.857-.315 6.275 2.408 7.612.217.106.406.227.581.352l-1.63 5.925z"/></svg>
            <span className="text-sm">Conversar Agora</span>
        </a>
    );
}

// --- ANIMAÇÃO PADRÃO PARA AS SEÇÕES ---
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
};

// --- PÁGINA DE ATENDIMENTO PRESENCIAL ---

export default function PersonalPresencialPage() {
  return (
    <div className="text-gray-200">
      <BackgroundAndEffects />
      <BackToHomeButton />
      <FloatingWhatsAppButton />

      <main className="relative z-0">
        
        {/* =======================================================================
        SEÇÃO 1: O CONVITE EXCLUSIVO (RE-IMAGINADA)
        ======================================================================= */}
        <section className="h-screen w-full flex items-center justify-center text-center p-4">
          <motion.div 
            className="relative z-20 flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="border border-amber-400 text-amber-400 text-sm font-semibold px-3 py-1 rounded-full mb-4">
              ACOMPANHAMENTO PRESENCIAL EM BOTUCATU
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-green-300 leading-tight max-w-4xl">
              A Experiência de Treino Mais Próxima da Perfeição.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl">
              Um serviço limitadíssimo para quem não aceita nada menos que resultados extraordinários com supervisão máxima.
            </p>
            <motion.button 
                className="mt-8 bg-amber-400 text-black font-bold py-4 px-10 rounded-lg text-lg hover:bg-amber-500 transition-transform"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
              Consultar Disponibilidade de Vaga
            </motion.button>
          </motion.div>
        </section>

        {/* =======================================================================
        SEÇÃO 2: A VANTAGEM INJUSTA
        ======================================================================= */}
        <motion.section {...fadeInUp} className="py-24 bg-black/50 backdrop-blur-sm px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white">A Diferença Entre o Bom e o Extraordinário.</h2>
              <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">O acompanhamento presencial oferece vantagens que nenhum outro método consegue replicar. É a sua garantia de performance e segurança.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div whileHover={{y: -5}} className="bg-gray-900/70 p-8 rounded-xl border border-gray-800 hover:border-green-500 transition-colors"><h3 className="text-2xl font-bold text-white mb-3">Técnica Impecável</h3><p className="text-gray-400">Correção em tempo real de cada movimento para maximizar o estímulo muscular e anular o risco de lesões.</p></motion.div>
              <motion.div whileHover={{y: -5}} className="bg-gray-900/70 p-8 rounded-xl border border-gray-800 hover:border-green-500 transition-colors"><h3 className="text-2xl font-bold text-white mb-3">Intensidade Sob Medida</h3><p className="text-gray-400">Eu vou te levar ao seu limite real, sabendo exatamente a hora de avançar e a hora de recuar para uma recuperação ótima.</p></motion.div>
              <motion.div whileHover={{y: -5}} className="bg-gray-900/70 p-8 rounded-xl border border-gray-800 hover:border-green-500 transition-colors"><h3 className="text-2xl font-bold text-white mb-3">Resultados Acelerados</h3><p className="text-gray-400">Com todas as variáveis controladas, seu progresso é visivelmente mais rápido e consistente. É o caminho mais curto para o seu objetivo.</p></motion.div>
              <motion.div whileHover={{y: -5}} className="bg-gray-900/70 p-8 rounded-xl border border-gray-800 hover:border-green-500 transition-colors"><h3 className="text-2xl font-bold text-white mb-3">Compromisso Inabalável</h3><p className="text-gray-400">A parceria presencial cria um nível de foco e responsabilidade incomparável. Desistir não será uma opção na sua mente.</p></motion.div>
            </div>
            
            <div className="text-center mt-16">
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-green-500 text-black font-bold py-3 px-10 rounded-lg text-lg hover:bg-green-600 transition-transform">QUERO TER ESSA VANTAGEM</motion.button>
            </div>
          </div>
        </motion.section>

        {/* =======================================================================
        SEÇÃO 3: A JORNADA E O SANTUÁRIO
        ======================================================================= */}
        <motion.section {...fadeInUp} className="py-24 px-4" id="jornada">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">Nossa Jornada Rumo ao Topo</h2>
              <div className="space-y-6 border-l-2 border-amber-400 pl-8">
                {/* Etapa 1 */}
                <motion.div initial={{opacity: 0, x: -20}} whileInView={{opacity: 1, x: 0}} transition={{delay: 0.1}} viewport={{once: true}} className="relative"><div className="absolute -left-[43px] top-1 h-4 w-4 rounded-full bg-amber-400 border-4 border-black"></div><h3 className="text-2xl font-bold text-white">1. Avaliação Detalhada</h3><p className="text-gray-400">Nossa primeira sessão é uma imersão completa nos seus objetivos, histórico e capacidades físicas para traçar o plano perfeito.</p></motion.div>
                {/* Etapa 2 */}
                <motion.div initial={{opacity: 0, x: -20}} whileInView={{opacity: 1, x: 0}} transition={{delay: 0.3}} viewport={{once: true}} className="relative"><div className="absolute -left-[43px] top-1 h-4 w-4 rounded-full bg-amber-400 border-4 border-black"></div><h3 className="text-2xl font-bold text-white">2. Sessões de Alta Performance</h3><p className="text-gray-400">Cada treino é uma hora de foco total em você. Execução, intensidade e estratégia sendo aplicadas com maestria.</p></motion.div>
                {/* Etapa 3 */}
                <motion.div initial={{opacity: 0, x: -20}} whileInView={{opacity: 1, x: 0}} transition={{delay: 0.5}} viewport={{once: true}} className="relative"><div className="absolute -left-[43px] top-1 h-4 w-4 rounded-full bg-amber-400 border-4 border-black"></div><h3 className="text-2xl font-bold text-white">3. Análise de Progresso</h3><p className="text-gray-400">Monitoramos sua evolução de perto com avaliações periódicas para garantir que estamos sempre no caminho certo, fazendo os ajustes necessários.</p></motion.div>
              </div>
            </div>
            
            <div className="mt-12 lg:mt-0">
              <h3 className="text-2xl font-bold text-center text-white mb-4">Onde a Transformação Acontece</h3>
              <div className="w-full aspect-video bg-gray-800 rounded-xl overflow-hidden border-2 border-gray-700">
                <Image src="/images/academia-parceira.jpg" alt="Academia onde ocorrem os treinos" width={800} height={450} className="w-full h-full object-cover" />
              </div>
              <p className="mt-4 text-center text-gray-400">[Nome da Academia] - [Endereço da Academia], Botucatu-SP.</p>
            </div>
          </div>
          <div className="text-center mt-20">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-transparent border-2 border-green-500 text-green-500 font-bold py-3 px-10 rounded-lg text-lg hover:bg-green-500 hover:text-black transition-all">VIVER ESTA EXPERIÊNCIA</motion.button>
          </div>
        </motion.section>
        
        {/* =======================================================================
        SEÇÃO 4: APLICAÇÃO PARA VAGA
        ======================================================================= */}
        <motion.section {...fadeInUp} className="py-24 bg-black px-4" id="aplicacao">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-gray-900/70 backdrop-blur-sm p-10 md:p-16 rounded-2xl border border-gray-800 shadow-2xl shadow-green-500/10">
              <h2 className="text-4xl md:text-5xl font-bold text-white">Pronto(a) para a Experiência Definitiva?</h2>
              <p className="mt-4 text-lg text-gray-300">Devido à natureza intensiva e individual do meu trabalho, as vagas para o acompanhamento presencial são extremamente limitadas. Preencha o formulário de aplicação para que eu possa entender seus objetivos.</p>
              <p className="mt-6 text-amber-400 font-semibold">O próximo passo é uma conversa individual para alinharmos as expectativas e verificarmos a disponibilidade.</p>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-8 bg-amber-400 text-black font-bold py-4 px-12 rounded-lg text-xl hover:bg-amber-500 transition-transform">PREENCHER FORMULÁRIO DE APLICAÇÃO</motion.button>
              <p className="mt-6 text-sm text-gray-500">As aplicações são analisadas por ordem de chegada. Entraremos em contato em até 48h.</p>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}