"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useRef, ReactNode } from 'react';
import { motion } from 'framer-motion';

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
        <a href="https://wa.me/55119XXXXXXXX?text=Olá! Vi a página de consultoria e gostaria de mais informações." target="_blank" rel="noopener noreferrer" className="fixed bottom-5 right-5 z-50 flex items-center justify-center gap-3 bg-green-500 text-white font-bold py-3 px-4 rounded-full shadow-lg transition-transform duration-300 ease-out hover:scale-105 md:hidden">
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

// --- PÁGINA DE CONSULTORIA ---

export default function ConsultoriaPage() {
  return (
    <div className="text-white">
      <BackgroundAndEffects />
      <BackToHomeButton />
      <FloatingWhatsAppButton />

      <main className="relative z-0">
        
        {/* SEÇÃO 1: VÍDEO DE APRESENTAÇÃO PESSOAL */}
        <section className="bg-black py-20 px-4 flex flex-col items-center justify-center text-center">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto"
            >
                <h1 className="text-3xl md:text-5xl font-extrabold mb-4">O Acompanhamento Que Você Precisa Para Resultados Definitivos</h1>
                <p className="text-lg md:text-xl text-gray-300 mb-8">Assista ao vídeo abaixo e entenda como minha consultoria online vai te levar para o próximo nível.</p>
                <div className="aspect-w-16 aspect-h-9 w-full rounded-lg overflow-hidden shadow-2xl shadow-green-500/20 border-2 border-green-500">
                    <iframe
                        src="https://www.youtube.com/embed/SEU_VIDEO_ID" // <-- SUBSTITUA "SEU_VIDEO_ID"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                    ></iframe>
                </div>
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-8 bg-green-500 text-black font-bold py-3 px-10 rounded-lg text-xl hover:bg-green-600 transition-colors">
                    QUERO SER SEU ALUNO(A)
                </motion.button>
            </motion.div>
        </section>

        {/* SEÇÃO 2: PARA QUEM É A CONSULTORIA? */}
        <motion.section {...fadeInUp} className="py-20 px-4 bg-gray-950/50 backdrop-blur-sm">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-12">Essa consultoria foi desenhada para você que...</h2>
                <div className="grid md:grid-cols-2 gap-10">
                    <div className="text-left space-y-4">
                        <p className="flex items-start gap-3"><span className="text-2xl text-red-500">❌</span><span>Está cansado(a) de treinar sem ver evolução e se sente estagnado(a).</span></p>
                        <p className="flex items-start gap-3"><span className="text-2xl text-red-500">❌</span><span>Não tem certeza se seu treino ou dieta estão corretos para seus objetivos.</span></p>
                        <p className="flex items-start gap-3"><span className="text-2xl text-red-500">❌</span><span>Sente falta de motivação e de alguém para cobrar e dar direcionamento.</span></p>
                        <p className="flex items-start gap-3"><span className="text-2xl text-red-500">❌</span><span>Já tentou de tudo um pouco, mas nunca alcançou o corpo que deseja.</span></p>
                    </div>
                    <div className="text-left space-y-4">
                        <p className="flex items-start gap-3"><span className="text-2xl text-green-500">✅</span><span>Busca um plano 100% individualizado, feito do zero para sua realidade.</span></p>
                        <p className="flex items-start gap-3"><span className="text-2xl text-green-500">✅</span><span>Quer a segurança e a confiança de ter uma especialista ao seu lado.</span></p>
                        <p className="flex items-start gap-3"><span className="text-2xl text-green-500">✅</span><span>Está comprometido(a) a seguir o plano para ter uma transformação real.</span></p>
                        <p className="flex items-start gap-3"><span className="text-2xl text-green-500">✅</span><span>Valoriza um acompanhamento próximo para ajustes e otimização constante.</span></p>
                    </div>
                </div>
            </div>
        </motion.section>

        {/* SEÇÃO 3: A METODOLOGIA - O QUE ESTÁ INCLUSO? */}
        <motion.section {...fadeInUp} className="py-20 px-4 bg-black">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">A Metodologia Completa Para Sua Evolução</h2>
                <p className="text-gray-400 mb-12 max-w-3xl mx-auto">Você não recebe apenas um treino. Você recebe um sistema completo de acompanhamento.</p>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-green-500 transition-colors"><h3 className="text-xl font-bold mb-2">Treino 100% Individualizado</h3><p className="text-gray-400">Seu plano de treino é criado do zero, com base na sua avaliação, objetivos e equipamentos disponíveis.</p></div>
                    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-green-500 transition-colors"><h3 className="text-xl font-bold mb-2">Planejamento Alimentar</h3><p className="text-gray-400">Orientações e estratégias nutricionais alinhadas ao seu treino para acelerar seus resultados (não substitui nutricionista).</p></div>
                    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-green-500 transition-colors"><h3 className="text-xl font-bold mb-2">Suporte Contínuo</h3><p className="text-gray-400">Canal direto via WhatsApp para tirar dúvidas, enviar vídeos e receber feedbacks da Jeniffer.</p></div>
                    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-green-500 transition-colors"><h3 className="text-xl font-bold mb-2">Ajustes e Análises</h3><p className="text-gray-400">Análise periódica do seu progresso com ajustes na planilha para garantir evolução constante e quebrar platôs.</p></div>
                </div>
            </div>
        </motion.section>

        {/* SEÇÃO 4: PROVA SOCIAL (DEPOIMENTOS E RESULTADOS) */}
        <motion.section {...fadeInUp} className="py-20 px-4 bg-gray-950/50 backdrop-blur-sm">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-12">Resultados Reais de Alunos Dedicados</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <div className="bg-gray-800 rounded-lg p-3"><div className="bg-gray-700 aspect-square rounded-md flex items-center justify-center text-gray-500">Foto 1</div><p className="mt-2 text-sm font-bold">Maria C. (-8kg)</p></div>
                    <div className="bg-gray-800 rounded-lg p-3"><div className="bg-gray-700 aspect-square rounded-md flex items-center justify-center text-gray-500">Foto 2</div><p className="mt-2 text-sm font-bold">Pedro H. (+5kg)</p></div>
                    <div className="bg-gray-800 rounded-lg p-3"><div className="bg-gray-700 aspect-square rounded-md flex items-center justify-center text-gray-500">Foto 3</div><p className="mt-2 text-sm font-bold">Ana L. (Definição)</p></div>
                    <div className="bg-gray-800 rounded-lg p-3"><div className="bg-gray-700 aspect-square rounded-md flex items-center justify-center text-gray-500">Foto 4</div><p className="mt-2 text-sm font-bold">Lucas M. (-12kg)</p></div>
                </div>
                <div className="mt-16 grid md:grid-cols-2 gap-8 text-left">
                    {/* CORREÇÃO DO ERRO DE DEPLOY APLICADA AQUI */}
                    <div className="bg-gray-800 p-6 rounded-lg"><blockquote>&ldquo;O suporte da Jeni é surreal. Ela realmente se importa e ajusta tudo que for preciso. Melhor investimento que já fiz!&rdquo;</blockquote><cite className="mt-4 block font-bold not-italic">- Fernanda</cite></div>
                    <div className="bg-gray-800 p-6 rounded-lg"><blockquote>&ldquo;Eu estava totalmente perdido. Com a consultoria, em 3 meses tive mais resultado do que em 3 anos tentando sozinho. Incrível.&rdquo;</blockquote><cite className="mt-4 block font-bold not-italic">- Ricardo</cite></div>
                </div>
            </div>
        </motion.section>

        {/* SEÇÃO 5: SOBRE A JENIFFER + FAQ */}
        <motion.section {...fadeInUp} className="py-20 px-4 bg-black">
            <div className="max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-10 mb-20 text-center md:text-left">
                    <div className="flex-shrink-0">
                        <div className="w-48 h-48 md:w-64 md:h-64 bg-gray-700 rounded-full mx-auto flex items-center justify-center text-gray-500">Foto Profissional</div>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Sua mentora nessa jornada</h2>
                        <p className="text-gray-300">Meu nome é Jeniffer Zamoner e minha paixão é transformar vidas através do treinamento de força. Mais do que passar treinos, meu objetivo é ensinar você a treinar de forma inteligente e sustentável, construindo não apenas um corpo mais forte, mas também uma mente mais confiante. Vamos juntos?</p>
                    </div>
                </div>
                <h2 className="text-3xl font-bold text-center mb-8">Perguntas Frequentes</h2>
                <div className="space-y-4">
                    <div className="bg-gray-800 p-4 rounded-lg"><details><summary className="font-bold cursor-pointer">Sou totalmente iniciante, a consultoria serve para mim?</summary><p className="mt-2 text-gray-400">Com certeza! É o melhor cenário para começar do jeito certo, criando uma base sólida e evitando os erros mais comuns.</p></details></div>
                    <div className="bg-gray-800 p-4 rounded-lg"><details><summary className="font-bold cursor-pointer">Como funciona o pagamento?</summary><p className="mt-2 text-gray-400">O pagamento é feito via [Plataforma de Pagamento], podendo ser por Pix, boleto ou cartão de crédito em até 12x.</p></details></div>
                    <div className="bg-gray-800 p-4 rounded-lg"><details><summary className="font-bold cursor-pointer">Qual a duração do acompanhamento?</summary><p className="mt-2 text-gray-400">Oferecemos planos Trimestrais e Semestrais. A consistência é a chave para resultados sólidos e duradouros.</p></details></div>
                </div>
            </div>
        </motion.section>
        
        {/* SEÇÃO 6: OFERTA FINAL E CHAMADA PARA AÇÃO */}
        <motion.section {...fadeInUp} className="relative py-20 px-4 overflow-hidden">
             <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-50"><div className="w-[50rem] h-[50rem] bg-green-500/15 rounded-full blur-3xl" /></div>
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Pronto(a) Para Iniciar Sua Transformação?</h2>
                <p className="text-gray-400 mb-8">As vagas são limitadas para garantir a qualidade do meu acompanhamento. Garanta a sua.</p>
                <div className="grid md:grid-cols-2 gap-8">
                    <motion.div whileHover={{y: -5}} className="bg-gray-800 p-8 rounded-lg border-2 border-gray-700 transition-transform">
                        <h3 className="text-2xl font-bold mb-2">Plano Trimestral</h3>
                        <p className="text-4xl font-bold my-4">3x de R$ 300</p>
                        <p className="text-gray-400">ou R$ 850 à vista</p>
                        <button className="mt-6 w-full bg-gray-600 text-white font-bold py-3 rounded-lg hover:bg-gray-700 transition-colors">QUERO ESTE PLANO</button>
                    </motion.div>
                    <motion.div whileHover={{y: -5}} className="bg-green-900/50 p-8 rounded-lg border-2 border-green-500 relative transition-transform">
                        <span className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-green-500 text-black text-sm font-bold px-3 py-1 rounded-full">MAIS VANTAJOSO</span>
                        <h3 className="text-2xl font-bold mb-2">Plano Semestral</h3>
                        <p className="text-4xl font-bold my-4">6x de R$ 250</p>
                        <p className="text-gray-300">ou R$ 1400 à vista</p>
                        <button className="mt-6 w-full bg-green-500 text-black font-bold py-3 rounded-lg hover:bg-green-600 transition-colors">GARANTIR MINHA VAGA</button>
                    </motion.div>
                </div>
                <div className="mt-12">
                    <p className="text-sm text-gray-500">Garantia de satisfação de 7 dias. Seu resultado é meu compromisso.</p>
                </div>
            </div>
        </motion.section>
      </main>
    </div>
  );
}
