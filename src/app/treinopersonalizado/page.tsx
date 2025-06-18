"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { motion } from 'framer-motion';

// --- COMPONENTES GLOBAIS ADICIONADOS PARA CONSISTÊNCIA ---

function BackgroundAndEffects() {
  return (
    <div className="fixed inset-0 -z-20 h-full w-full bg-black">
      <div className="absolute left-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true"><div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#34d399] to-[#10b981] opacity-30" /></div>
      <div className="absolute bottom-[-20rem] right-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true"><div className="relative left-[calc(50%+10rem)] aspect-[1155/678] w-[36.125rem] translate-x-1/3 rotate-[30deg] bg-gradient-to-tr from-[#f59e0b] to-[#d97706] opacity-15" /></div>
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
        <a href="https://wa.me/55119XXXXXXXX?text=Olá! Vi a página da planilha de treino e gostaria de mais informações." target="_blank" rel="noopener noreferrer" className="fixed bottom-5 right-5 z-50 flex items-center justify-center gap-3 bg-green-500 text-white font-bold py-3 px-4 rounded-full shadow-lg transition-transform duration-300 ease-out hover:scale-105 md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99 0-3.903-.52-5.586-1.456l-6.167 1.679zm6.247-6.407c.333.52 1.023.895 1.742 1.066s1.233.226 2.373.081c1.14-.145 2.373-.781 3.319-1.661 1.903-1.75 3.429-4.246 3.51-7.032.098-3.388-2.115-6.42-4.963-7.375-2.849-.955-6.039.293-7.376 3.149-1.336 2.857-.315 6.275 2.408 7.612.217.106.406.227.581.352l-1.63 5.925z"/></svg>
            <span className="text-sm">Conversar Agora</span>
        </a>
    );
}

// --- ÍCONES SVG PARA USAR NAS LISTAS ---
const CheckIcon = () => <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const ZapIcon = () => <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;

// --- ANIMAÇÃO PADRÃO PARA AS SEÇÕES ---
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
};

// --- PÁGINA DE TREINO PERSONALIZADO ---

export default function TreinoPersonalizadoPage() {
  return (
    <div className="text-white">
      <BackgroundAndEffects />
      <BackToHomeButton />
      <FloatingWhatsAppButton />

      <main className="relative z-0">
        
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
          <video autoPlay loop muted playsInline className="absolute z-0 w-auto min-w-full min-h-full max-w-none"><source src="/videos/gym-video.mp4" type="video/mp4" />Seu navegador não suporta a tag de vídeo.</video>
          <div className="absolute top-0 left-0 w-full h-full bg-black/70 z-10"></div>
          <motion.div initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.8}} className="relative z-20 text-center p-4">
            <h1 className="text-4xl md:text-6xl font-extrabold uppercase mb-4">Destrave seu Potencial Máximo</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">Receba a planilha de treinos inteligente da Jeniffer Zamoner e transforme seu corpo com um método que funciona de verdade.</p>
            <motion.button whileHover={{scale: 1.05}} whileTap={{scale: 0.95}} className="bg-green-500 text-black font-bold py-3 px-8 rounded-lg text-lg hover:bg-green-400 transition-colors">QUERO MINHA PLANILHA AGORA</motion.button>
          </motion.div>
        </section>

        <motion.section {...fadeInUp} className="py-20 px-4 bg-gray-950/50 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Cansado(a) de treinos que não funcionam?</h2>
            <p className="text-gray-400 mb-12">Se você se sente perdido na academia, sem motivação ou estagnado nos resultados, você não está sozinho. Nós entendemos o seu desafio.</p>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <h3 className="text-2xl font-bold text-green-400 mb-4">O Fim da Incerteza</h3>
                <ul className="space-y-3"><li className="flex items-center"><CheckIcon /><span>Planilha de treino completa e organizada.</span></li><li className="flex items-center"><CheckIcon /><span>Vídeos demonstrativos para cada exercício.</span></li><li className="flex items-center"><CheckIcon /><span>Divisão inteligente para otimizar seus ganhos.</span></li><li className="flex items-center"><CheckIcon /><span>Acesso vitalício para treinar no seu ritmo.</span></li></ul>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <h3 className="text-2xl font-bold text-green-400 mb-4">Resultados Reais</h3>
                <ul className="space-y-3"><li className="flex items-center"><ZapIcon /><span>Ganhe massa muscular de forma consistente.</span></li><li className="flex items-center"><ZapIcon /><span>Aumente sua força e performance.</span></li><li className="flex items-center"><ZapIcon /><span>Tenha mais confiança e motivação a cada treino.</span></li><li className="flex items-center"><ZapIcon /><span>Finalmente veja a transformação que você busca.</span></li></ul>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section {...fadeInUp} className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8 mb-20 text-center md:text-left">
              <div className="md:w-1/3 flex-shrink-0"><div className="w-48 h-48 md:w-64 md:h-64 bg-gray-700 rounded-full mx-auto flex items-center justify-center text-gray-500">Foto da Jeni</div></div>
              <div className="md:w-2/3"><h2 className="text-3xl font-bold mb-4">Criado por quem entende do assunto</h2><p className="text-gray-300">Jeniffer Zamoner é especialista em treinamento de força e transformação corporal. Com anos de experiência e centenas de alunos satisfeitos, ela desenvolveu este método para entregar a você o caminho mais curto e eficiente para seus resultados.</p></div>
            </div>
            <h2 className="text-3xl font-bold text-center mb-12">Resultados que falam por si</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-800 p-6 rounded-lg text-center"><div className="w-40 h-40 bg-gray-700 rounded-lg mx-auto mb-4 flex items-center justify-center text-gray-500">Antes & Depois</div>
                {/* CORREÇÃO APLICADA AQUI */}
                <p className="italic mb-4">&ldquo;Nunca tive resultados tão expressivos! A planilha é fácil de seguir e super completa.&rdquo;</p><h4 className="font-bold">- Maria S.</h4></div>
              <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-800 p-6 rounded-lg text-center"><div className="w-40 h-40 bg-gray-700 rounded-lg mx-auto mb-4 flex items-center justify-center text-gray-500">Antes & Depois</div>
                {/* CORREÇÃO APLICADA AQUI */}
                <p className="italic mb-4">&ldquo;Finalmente entendi como treinar certo. A Jeni é incrível e o suporte faz toda a diferença.&rdquo;</p><h4 className="font-bold">- João P.</h4></div>
              <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-800 p-6 rounded-lg text-center"><div className="w-40 h-40 bg-gray-700 rounded-lg mx-auto mb-4 flex items-center justify-center text-gray-500">Antes & Depois</div>
                {/* CORREÇÃO APLICADA AQUI */}
                <p className="italic mb-4">&ldquo;Em 3 meses, meu corpo mudou mais do que em 2 anos treinando sozinha. Recomendo demais!&rdquo;</p><h4 className="font-bold">- Carla F.</h4></div>
            </div>
          </div>
        </motion.section>

        <motion.section {...fadeInUp} className="py-20 px-4 bg-gray-950/50 backdrop-blur-sm">
          <motion.div initial={{opacity: 0, scale: 0.95}} whileInView={{opacity: 1, scale: 1}} viewport={{once: true}} transition={{duration: 0.5}} className="max-w-2xl mx-auto text-center bg-gray-800/50 p-8 md:p-12 rounded-xl border border-green-500 shadow-lg shadow-green-500/20">
            <h2 className="text-3xl font-bold mb-2">Chegou a sua vez de evoluir.</h2>
            <p className="text-green-400 font-semibold mb-6 text-lg">Acesso Imediato e Vitalício</p>
            <p className="text-gray-400 line-through">De R$ 197,00</p>
            <p className="text-5xl font-bold my-2">Por apenas R$ 97,00</p>
            <p className="text-gray-400 mb-8">Pagamento único, sem mensalidades.</p>
            <motion.button whileHover={{scale: 1.05}} whileTap={{scale: 0.95}} className="w-full bg-green-500 text-black font-bold py-4 px-8 rounded-lg text-xl hover:bg-green-400 transition-colors animate-pulse">COMPRAR AGORA E TRANSFORMAR MEU CORPO</motion.button>
            <div className="mt-6"><p className="text-sm text-gray-500">🔒 Compra segura. Receba seu acesso por e-mail imediatamente após a confirmação do pagamento.</p></div>
          </motion.div>
        </motion.section>

      </main>
    </div>
  );
}