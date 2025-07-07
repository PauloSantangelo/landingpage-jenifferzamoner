"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// --- COMPONENTES ---
function BackgroundAndEffects() {
  return (
    <div className="fixed inset-0 -z-20 h-full w-full bg-black">
      <div className="absolute left-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#34d399] to-[#10b981] opacity-30" />
      </div>
      <div className="absolute bottom-[-20rem] right-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
        <div className="relative left-[calc(50%+10rem)] aspect-[1155/678] w-[36.125rem] translate-x-1/3 rotate-[30deg] bg-gradient-to-tr from-[#f59e0b] to-[#d97706] opacity-15" />
      </div>
    </div>
  );
}

function LogoBackground() {
  return (
    <div 
      className="fixed inset-0 -z-30 w-full h-full"
      style={{
        backgroundImage: "url('/logo.png')",
        backgroundRepeat: 'repeat',
        backgroundSize: '300px',
        opacity: 0.02,
      }}
    ></div>
  );
}

function BackToHomeButton() {
  return (
    <motion.div className="fixed top-4 left-4 z-[9998]" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, ease: "easeOut" }}>
      <Link href="/">
        <motion.button className="bg-gray-900/80 backdrop-blur-sm text-white p-3 rounded-full hover:bg-gray-800 transition-all shadow-lg border border-gray-700/50 hover:border-green-500/50" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
        </motion.button>
      </Link>
    </motion.div>
  );
}

function FloatingWhatsAppButton() {
  return (
    <a href="https://wa.me/55119XXXXXXXX?text=Olá! Gostaria de saber mais sobre o Desafio 21D." target="_blank" rel="noopener noreferrer" className="fixed bottom-5 right-5 z-50 flex items-center justify-center gap-3 bg-green-500 text-white font-bold py-3 px-4 rounded-full shadow-lg transition-transform duration-300 ease-out hover:scale-105 md:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99 0-3.903-.52-5.586-1.456l-6.167 1.679zm6.247-6.407c.333.52 1.023.895 1.742 1.066s1.233.226 2.373.081c1.14-.145 2.373-.781 3.319-1.661 1.903-1.75 3.429-4.246 3.51-7.032.098-3.388-2.115-6.42-4.963-7.375-2.849-.955-6.039.293-7.376 3.149-1.336 2.857-.315 6.275 2.408 7.612.217.106.406.227.581.352l-1.63 5.925z"/></svg>
      <span className="text-sm">Conversar Agora</span>
    </a>
  );
}

const CheckIcon = () => <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const ZapIcon = () => <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
};

const transformationImages = Array.from({ length: 14 }, (_, i) => `/images/transformations/resultado${i + 1}.webp`);

// --- PÁGINA PRINCIPAL ---
export default function TreinoPersonalizadoPage() {
  // CORREÇÃO 1: Adicionar o tipo <HTMLDivElement> e o valor inicial null
  const carousel = useRef<HTMLDivElement>(null);
  const [carouselWidth, setCarouselWidth] = useState(0);

  useEffect(() => {
    // CORREÇÃO 2: Verificar se carousel.current não é nulo antes de usar
    if (carousel.current) {
      setCarouselWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  return (
    <div className="text-white">
      <LogoBackground />
      <BackgroundAndEffects />
      <BackToHomeButton />
      <FloatingWhatsAppButton />

      <main className="relative z-0">
        {/* --- SEÇÃO HERO --- */}
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden p-4">
          <div className="absolute top-0 left-0 w-full h-full bg-black/80 z-10"></div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-20 text-center w-full max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold uppercase mb-4">Desafio 21D: A Queima Acelerada Começa Agora</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">Participe do <span className="font-bold text-green-400">Desafio 21D – Queima Acelerada com Jeniffer</span> e conquiste o corpo que você sempre sonhou com um método focado em emagrecimento rápido e saudável.</p>
            <div className="relative w-full aspect-video max-w-2xl mx-auto mb-8 rounded-lg overflow-hidden shadow-lg border border-gray-700">
              <iframe 
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/iBdG2VOeEaE?si=cJC1GPmCZIRfAVFJ" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
              ></iframe>
            </div>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-green-500 text-black font-bold py-3 px-8 rounded-lg text-lg hover:bg-green-400 transition-colors">QUERO MINHA PLANILHA AGORA</motion.button>
          </motion.div>
        </section>

        {/* --- SEÇÃO DE BENEFÍCIOS --- */}
        <motion.section {...fadeInUp} className="py-20 px-4 bg-gray-950/50 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Frustrado(a) por não conseguir emagrecer?</h2>
            <p className="text-gray-400 mb-12">Se você já tentou de tudo para queimar gordura, mas continua sem ver resultados, você não está sozinho(a). Chega de dietas malucas e treinos genéricos.</p>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <h3 className="text-2xl font-bold text-green-400 mb-4">O Plano Perfeito</h3>
                <ul className="space-y-3">
                  <li className="flex items-center"><CheckIcon /><span>O plano de 21 dias para o seu emagrecimento.</span></li>
                  <li className="flex items-center"><CheckIcon /><span>Vídeos demonstrativos para cada exercício.</span></li>
                  <li className="flex items-center"><CheckIcon /><span>Treinos rápidos e intensos para acelerar seu metabolismo.</span></li>
                  <li className="flex items-center"><CheckIcon /><span>Dicas de alimentação para potencializar a queima.</span></li>
                </ul>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <h3 className="text-2xl font-bold text-green-400 mb-4">Resultados Rápidos</h3>
                <ul className="space-y-3">
                  <li className="flex items-center"><ZapIcon /><span>Queime gordura localizada de forma eficiente.</span></li>
                  <li className="flex items-center"><ZapIcon /><span>Perca peso e medidas em apenas 21 dias.</span></li>
                  <li className="flex items-center"><ZapIcon /><span>Recupere sua autoestima e motivação.</span></li>
                  <li className="flex items-center"><ZapIcon /><span>Conquiste um corpo mais leve, definido e saudável.</span></li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* --- SEÇÃO SOBRE A CRIADORA --- */}
        <motion.section {...fadeInUp} className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8 mb-20 text-center md:text-left">
              <div className="md:w-1/3 flex-shrink-0">
                <Image
                  src="/images/jeniffer/jeniffer1.webp"
                  alt="Foto de Jeniffer Zamoner, especialista em emagrecimento"
                  width={256}
                  height={256}
                  className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover mx-auto border-4 border-green-500 shadow-lg"
                />
              </div>
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold mb-4">Criado por quem entende do assunto</h2>
                <p className="text-gray-300">Jeniffer Zamoner é especialista em emagrecimento e transformação corporal. Com anos de experiência e centenas de alunas satisfeitas, ela desenvolveu o <span className="font-bold text-green-400">Desafio 21D</span> para entregar a você o caminho mais curto e eficiente para a queima de gordura.</p>
              </div>
            </div>
            
            {/* --- SEÇÃO GALERIA DE RESULTADOS --- */}
            <h2 className="text-3xl font-bold text-center mb-12">Resultados que falam por si</h2>
            <motion.div ref={carousel} className="cursor-grab overflow-hidden" whileTap={{ cursor: "grabbing" }}>
              <motion.div
                drag="x"
                dragConstraints={{ right: 0, left: -carouselWidth }}
                className="flex gap-6 py-4"
              >
                {transformationImages.map((imageSrc, index) => (
                  <motion.div key={index} className="flex-shrink-0 w-[70vw] sm:w-[40vw] md:w-[24vw] aspect-[9/16] bg-gray-800/50 rounded-2xl shadow-lg p-2 border-2 border-green-500">
                    <Image
                      src={imageSrc}
                      alt={`Resultado da transformação ${index + 1}`}
                      width={360}
                      height={640}
                      className="w-full h-full object-cover rounded-xl pointer-events-none"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            
          </div>
        </motion.section>

        {/* --- SEÇÃO DE PREÇOS --- */}
        <motion.section {...fadeInUp} className="py-20 px-4 bg-gray-950/50 backdrop-blur-sm">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Escolha o plano ideal para você</h2>
                <p className="text-gray-400 mb-12 max-w-2xl mx-auto">Comece sua jornada de emagrecimento hoje mesmo. Acesso imediato após a compra.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                    <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 flex flex-col">
                        <h3 className="text-2xl font-bold mb-2">Plano Trimestral</h3>
                        <p className="text-4xl font-bold my-4">R$109,90</p>
                        <p className="text-gray-400 mb-6">Pagamento único</p>
                        <ul className="space-y-2 text-left mb-8 flex-grow">
                            <li className="flex items-center"><CheckIcon /><span>3 meses de acesso</span></li>
                            <li className="flex items-center"><CheckIcon /><span>2 treinos</span></li>
                            <li className="flex items-center"><CheckIcon /><span>Dicas de alimentação</span></li>
                        </ul>
                        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full mt-auto bg-green-500 text-black font-bold py-3 px-6 rounded-lg text-lg hover:bg-green-400 transition-colors uppercase">INICIAR DESAFIO</motion.button>
                    </div>
                    <div className="relative bg-gray-800 p-8 rounded-xl border-2 border-green-500 flex flex-col shadow-lg shadow-green-500/20 transform md:scale-105">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <div className="bg-green-500 text-black px-4 py-1 rounded-full text-sm font-bold uppercase">Mais Popular</div>
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Plano Anual</h3>
                        <p className="text-4xl font-bold my-4">R$69,90<span className="text-lg font-normal text-gray-400">/mês</span></p>
                        <p className="text-gray-400 mb-6">Cobrado anualmente</p>
                        <ul className="space-y-2 text-left mb-8 flex-grow">
                            <li className="flex items-center"><CheckIcon /><span>1 ano de acesso completo</span></li>
                            <li className="flex items-center"><CheckIcon /><span><span className='font-bold text-green-400'>BÔNUS:</span> 1 Avaliação On-line</span></li>
                            <li className="flex items-center"><CheckIcon /><span>5 planilhas de treino</span></li>
                            <li className="flex items-center"><CheckIcon /><span>Dicas de alimentação</span></li>
                        </ul>
                        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full mt-auto bg-green-500 text-black font-bold py-3 px-6 rounded-lg text-lg hover:bg-green-400 transition-colors animate-pulse uppercase">INICIAR DESAFIO</motion.button>
                    </div>
                    <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 flex flex-col">
                        <h3 className="text-2xl font-bold mb-2">Plano Semestral</h3>
                        <p className="text-4xl font-bold my-4">R$89,90</p>
                         <p className="text-gray-400 mb-6">Pagamento único</p>
                        <ul className="space-y-2 text-left mb-8 flex-grow">
                            <li className="flex items-center"><CheckIcon /><span>6 meses de acesso</span></li>
                            <li className="flex items-center"><CheckIcon /><span>3 treinos</span></li>
                            <li className="flex items-center"><CheckIcon /><span>Dicas de alimentação</span></li>
                        </ul>
                         <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full mt-auto bg-green-500 text-black font-bold py-3 px-6 rounded-lg text-lg hover:bg-green-400 transition-colors uppercase">INICIAR DESAFIO</motion.button>
                    </div>
                </div>
                 <div className="mt-8">
                    <p className="text-sm text-gray-500">🔒 Compra segura. Receba seu acesso por e-mail imediatamente após a confirmação do pagamento.</p>
                </div>
            </div>
        </motion.section>
      </main>
    </div>
  );
}