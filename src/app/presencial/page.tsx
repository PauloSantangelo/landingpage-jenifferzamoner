"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- COMPONENTES GLOBAIS PARA CONSISTÊNCIA ---

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

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
};

export default function PersonalPresencialPage() {

  const whatsappUrl = "https://wa.me/55119XXXXXXXX?text=Olá! Vi a página de atendimento presencial e gostaria de consultar a disponibilidade de vagas.";

  // --- LÓGICA PARA TRANSIÇÃO DE IMAGEM ---
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
      "/images/jeniffer/jeniffer1.webp", 
      "/images/transformations/resultado1.webp",
      "/images/jeniffer/jeniffer6.webp",
      "/images/transformations/resultado2.webp",
      "/images/jeniffer/jeniffer3.webp",
      "/images/transformations/resultado7.webp",
      "/images/jeniffer/jeniffer8.webp",
      "/images/transformations/resultado11.webp",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3500); // Troca de imagem a cada 3.5 segundos

    return () => clearInterval(intervalId);
  }, [images.length]);

  const imageVariants = {
    enter: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.98 },
  };
  // --- FIM DA LÓGICA ---


  return (
    <div className="text-gray-200">
      <BackgroundAndEffects />
      <BackToHomeButton />
      <FloatingWhatsAppButton />

      <main className="relative z-0">
        
        {/* SEÇÃO 1: HERO COM VÍDEO - ATUALIZADA */}
        <section className="min-h-screen w-full flex items-center justify-center text-center p-4">
          <motion.div 
            className="relative z-20 flex flex-col items-center w-full max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="border border-amber-400 text-amber-400 text-sm font-semibold px-3 py-1 rounded-full mb-4">
              ACOMPANHAMENTO PRESENCIAL EM BOTUCATU
            </span>
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white to-green-300 leading-tight">
              A Experiência de Treino na Prática.
            </h1>
            
            <div className="mt-8 w-full aspect-video bg-black rounded-xl overflow-hidden border-2 border-amber-400/50 shadow-2xl shadow-amber-500/10">
              <iframe 
                src="https://www.youtube.com/embed/Y3EOrkppjuk?si=pcBBBApDmLm0k5O2" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>

            <p className="mt-8 text-lg text-gray-300 max-w-2xl">
              Este é um serviço limitadíssimo para quem não aceita nada menos que resultados extraordinários com supervisão máxima.
            </p>

            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <motion.button 
                  className="mt-6 bg-amber-400 text-black font-bold py-4 px-10 rounded-lg text-lg hover:bg-amber-500 transition-transform"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
              >
                Consultar Disponibilidade de Vaga
              </motion.button>
            </a>
          </motion.div>
        </section>

        {/* SEÇÃO 2: A VANTAGEM INJUSTA */}
        <motion.section {...fadeInUp} className="py-24 bg-black/50 backdrop-blur-sm px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white">A Diferença Entre o Bom e o Extraordinário.</h2>
              <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">O acompanhamento presencial é um ecossistema completo de performance, focado 100% em você.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div whileHover={{y: -5}} className="bg-gray-900/70 p-8 rounded-xl border border-gray-800 hover:border-green-500 transition-colors"><h3 className="text-2xl font-bold text-white mb-3">Foco Total em Você</h3><p className="text-gray-400">Atendimento individual ou em pequenos grupos, onde cada aluno recebe um treino específico e atenção máxima.</p></motion.div>
              <motion.div whileHover={{y: -5}} className="bg-gray-900/70 p-8 rounded-xl border border-gray-800 hover:border-green-500 transition-colors"><h3 className="text-2xl font-bold text-white mb-3">Modelo Híbrido</h3><p className="text-gray-400">Além do treino presencial, você recebe uma consultoria online para os dias em que não treinamos juntos. Seu progresso nunca para.</p></motion.div>
              <motion.div whileHover={{y: -5}} className="bg-gray-900/70 p-8 rounded-xl border border-gray-800 hover:border-green-500 transition-colors"><h3 className="text-2xl font-bold text-white mb-3">Avaliação Periódica</h3><p className="text-gray-400">Avaliação física completa a cada 45 dias para medir seu progresso de forma precisa e ajustar o plano para novos desafios.</p></motion.div>
              <motion.div whileHover={{y: -5}} className="bg-gray-900/70 p-8 rounded-xl border border-gray-800 hover:border-green-500 transition-colors"><h3 className="text-2xl font-bold text-white mb-3">Suporte Completo</h3><p className="text-gray-400">Conte com dicas de alimentação e suporte contínuo para alinhar seu estilo de vida aos seus objetivos e acelerar seus resultados.</p></motion.div>
            </div>
            
            <div className="text-center mt-16">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-green-500 text-black font-bold py-3 px-10 rounded-lg text-lg hover:bg-green-600 transition-transform">QUERO TER ESSA VANTAGEM</motion.button>
              </a>
            </div>
          </div>
        </motion.section>

        {/* SEÇÃO 3: A JORNADA E A IMAGEM EM TRANSIÇÃO */}
        <motion.section {...fadeInUp} className="py-24 px-4" id="jornada">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">Nossa Jornada Rumo ao Topo</h2>
              <div className="space-y-6 border-l-2 border-amber-400 pl-8">
                <motion.div initial={{opacity: 0, x: -20}} whileInView={{opacity: 1, x: 0}} transition={{delay: 0.1}} viewport={{once: true}} className="relative"><div className="absolute -left-[43px] top-1 h-4 w-4 rounded-full bg-amber-400 border-4 border-black"></div><h3 className="text-2xl font-bold text-white">1. Avaliação Detalhada</h3><p className="text-gray-400">Nossa primeira sessão é uma imersão completa nos seus objetivos, histórico e capacidades físicas para traçar o plano perfeito.</p></motion.div>
                <motion.div initial={{opacity: 0, x: -20}} whileInView={{opacity: 1, x: 0}} transition={{delay: 0.3}} viewport={{once: true}} className="relative"><div className="absolute -left-[43px] top-1 h-4 w-4 rounded-full bg-amber-400 border-4 border-black"></div><h3 className="text-2xl font-bold text-white">2. Sessões de Alta Performance</h3><p className="text-gray-400">Cada treino presencial, individual ou em grupo, é uma hora de foco total na sua execução, intensidade e estratégia para o máximo resultado.</p></motion.div>
                <motion.div initial={{opacity: 0, x: -20}} whileInView={{opacity: 1, x: 0}} transition={{delay: 0.5}} viewport={{once: true}} className="relative"><div className="absolute -left-[43px] top-1 h-4 w-4 rounded-full bg-amber-400 border-4 border-black"></div><h3 className="text-2xl font-bold text-white">3. Análise de Progresso</h3><p className="text-gray-400">Com a avaliação física a cada 45 dias, monitoramos sua evolução de perto, comemoramos as vitórias e ajustamos a rota para o próximo nível.</p></motion.div>
              </div>
            </div>
            
            <div className="mt-12 lg:mt-0">
                <h3 className="text-2xl font-bold text-center text-white mb-4">A Parceria que Gera Resultados</h3>
                <div className="relative w-full aspect-square bg-gray-800 rounded-xl overflow-hidden border-2 border-gray-700">
                    <AnimatePresence>
                        <motion.div
                            key={currentImageIndex}
                            className="absolute inset-0 w-full h-full"
                            variants={imageVariants}
                            initial="exit"
                            animate="enter"
                            exit="exit"
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                        >
                            <Image
                                src={images[currentImageIndex]}
                                alt={images[currentImageIndex].includes('jeniffer') ? 'Personal Trainer Jeniffer Zamoner' : 'Resultado de cliente'}
                                layout="fill"
                                className="object-cover"
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
          </div>
          <div className="text-center mt-20">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-transparent border-2 border-green-500 text-green-500 font-bold py-3 px-10 rounded-lg text-lg hover:bg-green-500 hover:text-black transition-all">VIVER ESTA EXPERIÊNCIA</motion.button>
            </a>
          </div>
        </motion.section>
        
        {/* SEÇÃO 4: APLICAÇÃO PARA VAGA */}
        <motion.section {...fadeInUp} className="py-24 bg-black px-4" id="aplicacao">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-gray-900/70 backdrop-blur-sm p-10 md:p-16 rounded-2xl border border-gray-800 shadow-2xl shadow-green-500/10">
              <h2 className="text-4xl md:text-5xl font-bold text-white">Pronto(a) para a Experiência Definitiva?</h2>
              <p className="mt-4 text-lg text-gray-300">Devido à natureza intensiva e individual do meu trabalho, as vagas para o acompanhamento presencial são extremamente limitadas.</p>
              <p className="mt-6 text-amber-400 font-semibold">O próximo passo é uma conversa individual para alinharmos as expectativas e verificarmos a disponibilidade.</p>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-8 bg-amber-400 text-black font-bold py-4 px-12 rounded-lg text-xl hover:bg-amber-500 transition-transform">CONSULTAR VAGAS NO WHATSAPP</motion.button>
              </a>
              <p className="mt-6 text-sm text-gray-500">As vagas são preenchidas por ordem de contato. Fale comigo para garantir a sua.</p>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}