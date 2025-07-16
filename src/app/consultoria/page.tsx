// app/consultoria/page.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion'; // Mantenha Variants para tipagem de outras animações, se necessário
import { JSX } from 'react/jsx-runtime';

// --- INTERFACES PARA TIPAGEM DOS DADOS ---

interface Resultado {
  src: string;
  caption: string;
  alt: string;
}

interface Mentor {
  imageSrc: string;
  name: string;
  bio: string;
}

interface Mentores {
    jeniffer: Mentor;
    thiago: Mentor;
}

// --- COMPONENTES GLOBAIS PARA CONSISTÊNCIA (SEM TIPAGEM EXPLÍCITA JSX.Element para evitar erros) ---

function BackgroundAndEffects() {
  return (
    <div className="fixed inset-0 -z-10 h-full w-full bg-black">
      <div className="absolute left-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#34d399] to-[#10b981] opacity-30" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }} />
      </div>
      <div className="absolute bottom-[-20rem] right-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
        <div className="relative left-[calc(50%+10rem)] aspect-[1155/678] w-[36.125rem] translate-x-1/3 rotate-[30deg] bg-gradient-to-tr from-[#f59e0b] to-[#d97706] opacity-15" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }} />
      </div>
    </div>
  );
}

function BackToHomeButton() {
  return (
    <motion.div className="fixed top-4 left-4 z-[9998]" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, ease: "easeOut" }}>
      <Link href="/">
        <motion.button className="bg-gray-900/80 backdrop-blur-sm text-white p-3 rounded-full hover:bg-gray-800 transition-all shadow-lg border border-gray-700/50 hover:border-green-500/50" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg>
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

// CORREÇÃO AQUI: Removendo a tipagem 'Variants' do objeto fadeInUp.
// Ele é uma coleção de props para motion.section, não um tipo Variants.
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
};

export default function ConsultoriaPage(): JSX.Element { // Mantendo a tipagem do componente principal

  const resultados: Resultado[] = [ // Tipagem do array resultados
    {
      src: "/images/transformations/Yohan2.webp",
      caption: "Yohan (Hipertrofia)",
      alt: "Resultado de antes e depois do aluno Yohan D."
    },
    {
      src: "/images/transformations/aline.webp",
      caption: "Aline B. (Constância)",
      alt: "Resultado de antes e depois da aluna Franceli A."
    },
    {
      src: "/images/transformations/mirela2.webp",
      caption: "Mirela D. (Evolução)",
      alt: "Resultado de antes e depois da aluna Giovanna B."
    },
    {
      src: "/images/transformations/Iane1.webp",
      caption: "Iane. (Foco Total)",
      alt: "Resultado de antes e depois da aluna Ana C."
    }
  ];

  const mentores: Mentores = { // Tipagem do objeto mentores
    jeniffer: {
      imageSrc: "/images/jeniffer/jeniffer5.webp",
      name: "Sua mentora nessa jornada",
      bio: "Meu nome é Jeniffer Zamoner e minha paixão é transformar vidas através do treinamento de força. Mais do que passar treinos, meu objetivo é ensinar você a treinar de forma inteligente e sustentável, construindo não apenas um corpo mais forte, mas também uma mente mais confiante. Vamos juntos?"
    },
    thiago: {
      imageSrc: "/images/jeniffer/thiagopagani.webp",
      name: "Seu mentor de corrida",
      bio: "Com treinos de corrida elaborados por Thiago Pagani, especialista em performance, você vai quebrar recordes pessoais. Unimos a força da musculação com a resistência da corrida para um resultado completo."
    }
  }

  return (
    <div className="text-white">
      <BackgroundAndEffects />
      <BackToHomeButton />
      <FloatingWhatsAppButton />

      <main className="relative z-0">
        
        {/* SEÇÃO 1: VÍDEO DE APRESENTAÇÃO INICIAL (CONSULTORIA GERAL) */}
        <section className="bg-black py-20 px-4 flex flex-col items-center justify-center text-center">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto"
            >
                <h1 className="text-3xl md:text-5xl font-extrabold mb-4">O Acompanhamento Que Você Precisa Para Resultados Definitivos</h1>
                <p className="text-lg md:text-xl text-gray-300 mb-8">Assista ao vídeo abaixo e entenda como nossa consultoria online vai te levar para o próximo nível.</p>
                <div className="aspect-video w-full rounded-lg overflow-hidden shadow-2xl shadow-green-500/20 border-4 border-green-500">
                    <iframe
                        src="https://www.youtube.com/embed/Twl6y6wZ_L0" // VÍDEO PRINCIPAL DA CONSULTORIA
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="w-full h-full"
                    ></iframe>
                </div>
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-8 bg-green-500 text-black font-bold py-3 px-10 rounded-lg text-xl hover:bg-green-600 transition-colors">
                    QUERO SER SEU ALUNO(A)
                </motion.button>
            </motion.div>
        </section>

        {/* SEÇÃO 2: PÚBLICO ALVO DA CONSULTORIA (Quem se identifica) */}
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

        {/* SEÇÃO 3: METODOLOGIA COMPLETA */}
        <motion.section {...fadeInUp} className="py-20 px-4 bg-black">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">A Metodologia Completa Para Sua Evolução</h2>
                <p className="text-gray-400 mb-12 max-w-3xl mx-auto">Você não recebe apenas um treino. Você recebe um sistema completo de acompanhamento.</p>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-green-500 transition-colors"><h3 className="text-xl font-bold mb-2">Acesso Exclusivo ao App</h3><p className="text-gray-400">Receba seus treinos com vídeos de orientação e controle sua frequência, tudo em um só lugar.</p></div>
                    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-green-500 transition-colors"><h3 className="text-xl font-bold mb-2">Suporte e Contato Próximo</h3><p className="text-gray-400">Canal direto via WhatsApp para dúvidas e 1 videochamada mensal para alinharmos seus objetivos.</p></div>
                    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-green-500 transition-colors"><h3 className="text-xl font-bold mb-2">Evolução Constante</h3><p className="text-gray-400">Seu treino é atualizado todo mês, com avaliações físicas (virtuais ou presenciais) e análise de progresso por fotos.</p></div>
                    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-green-500 transition-colors"><h3 className="text-xl font-bold mb-2">Dicas de Alimentação</h3><p className="text-gray-400">Orientações e estratégias nutricionais alinhadas ao seu treino para acelerar seus resultados.</p></div>
                </div>
            </div>
        </motion.section>

        {/* SEÇÃO 4: ELEVE SUA CORRIDA A OUTRO NÍVEL (VÍDEO DA JENIFFER + BOTÃO) - RESTAURADA */}
        <motion.section {...fadeInUp} className="py-20 px-4 bg-gray-950/50 backdrop-blur-sm">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg border-4 border-green-500/50">
                    <iframe 
                        src="https://www.youtube.com/embed/1hD6E2i4szk?si=Cg4_W3epoD8_dJMm" // VÍDEO DA JENIFFER SOBRE CORRIDA
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowFullScreen
                        className="w-full h-full"
                    ></iframe>
                </div>
                <div className="text-center md:text-left">
                    <h2 className="text-3xl font-bold mb-4">Eleve Sua Corrida a Outro Nível</h2>
                    <p className="text-gray-300 mb-6">Seja você um iniciante querendo completar os primeiros 5km ou um corredor experiente buscando melhorar seu tempo na maratona, nossa consultoria de corrida é o caminho.</p>
                    <ul className="space-y-3 mb-8 text-left">
                        <li className="flex items-center gap-3"><span className="text-green-500 text-xl">✔</span><span>Treinos individualizados liberados toda semana via app.</span></li>
                        <li className="flex items-center gap-3"><span className="text-green-500 text-xl">✔</span><span>Planilhas baseadas em seus resultados no Teste de Cooper.</span></li>
                        <li className="flex items-center gap-3"><span className="text-green-500 text-xl">✔</span><span>Análise contínua dos seus treinos para ajustes de performance.</span></li>
                        <li className="flex items-center gap-3"><span className="text-green-500 text-xl">✔</span><span>Contato direto via WhatsApp para tirar qualquer dúvida.</span></li>
                    </ul>
                    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-green-500 text-black font-bold py-3 px-8 rounded-lg text-lg hover:bg-green-600 transition-colors">
                        QUERO CORRER MELHOR
                    </motion.button>
                </div>
            </div>
        </motion.section>

        {/* SEÇÃO 5: RESULTADOS REAIS DE ALUNOS (Com o feedback) - ORDEM ORIGINAL */}
        <motion.section {...fadeInUp} className="py-20 px-4 bg-black">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-12">Resultados Reais de Alunos Dedicados</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {resultados.map((resultado: Resultado, index: number) => (
                        <div key={index} className="bg-gray-900/50 p-3 rounded-lg flex flex-col group">
                            <div className="relative aspect-square w-full rounded-md overflow-hidden">
                                <Image
                                    src={resultado.src}
                                    alt={resultado.alt}
                                    fill
                                    sizes="(max-width: 768px) 50vw, 25vw"
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <p className="mt-3 text-sm font-semibold text-gray-200">{resultado.caption}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-16 grid md:grid-cols-2 gap-8 text-left">
                    <div className="bg-gray-800 p-6 rounded-lg"><blockquote>“Após o meu acidente, quando quase perdi o tornozelo, enfrentei muitas limitações e desânimo. Já são três anos de parceria, e foi imprescindível para minha recuperação, não apenas física, mas também emocional. Sua dedicação, profissionalismo e motivação foram fundamentais. Sinto que Deus foi generoso ao colocar você em minha vida. Obrigado por tudo!”</blockquote><cite className="mt-4 block font-bold not-italic">- Yohan D'Azeredo</cite></div>
                    <div className="bg-gray-800 p-6 rounded-lg"><blockquote>“Sou aluna da Jeniffer há 3 anos, e sou muito grata por todo esse tempo! Só ela para me colocar no eixo rsrs. Brincadeiras a parte, a Jeniffer é uma profissional extremamente dedicada, competente e que se importa com a evolução de seus alunos. Ter uma profissional como ela é fundamental, maravilhoso e nos da vontade de ir além!”</blockquote><cite className="mt-4 block font-bold not-italic">- Giovanna Bengozi</cite></div>
                </div>
            </div>
        </motion.section>

        {/* SEÇÃO 6: APRESENTAÇÃO DOS MENTORES, NOVA ABA DE CORRIDA E FAQs */}
        <motion.section {...fadeInUp} className="py-20 px-4 bg-gray-950/50 backdrop-blur-sm">
            <div className="max-w-4xl mx-auto">
                {/* Jeniffer Zamoner */}
                <div className="flex flex-col md:flex-row items-center gap-10 mb-12 text-center md:text-left">
                    <div className="relative flex-shrink-0 w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg">
                        <Image 
                            src={mentores.jeniffer.imageSrc} 
                            alt={mentores.jeniffer.name} 
                            fill 
                            sizes="(max-width: 768px) 192px, 256px"
                            className="object-cover" 
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold mb-4">
                            {mentores.jeniffer.name}
                        </h2>
                        <p className="text-gray-300">
                            {mentores.jeniffer.bio}
                        </p>
                    </div>
                </div>

                {/* Thiago Pagani abaixo da Jeniffer com imagem à direita */}
                <div className="flex flex-col items-center gap-10 text-center md:text-left border-t border-gray-700 pt-12 mt-12 md:flex-row-reverse">
                    <div className="relative flex-shrink-0 w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg">
                        <Image 
                            src={mentores.thiago.imageSrc} 
                            alt={mentores.thiago.name} 
                            fill 
                            sizes="(max-width: 768px) 192px, 256px"
                            className="object-cover" 
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold mb-4">
                            {mentores.thiago.name}
                        </h2>
                        <p className="text-gray-300">
                            {mentores.thiago.bio}
                        </p>
                    </div>
                </div>

                {/* ✅ NOVA ABA AMARELA PARA CORRIDA COM THIAGO PAGANI - INSERIDA AQUI */}
                <motion.div {...fadeInUp} className="mt-12 py-16 px-6 bg-yellow-500/10 border-l-4 border-yellow-400 rounded-lg shadow-lg text-left">
                  <h3 className="text-3xl font-extrabold mb-4 text-yellow-400">
                    Sua Corrida a Outro Nível com o Thiago Pagani
                  </h3>
                  <p className="text-lg md:text-xl text-yellow-100">
                    Thiago Pagani, nosso especialista em performance e apaixonado por corrida, te guiará para ir além dos seus limites. Seja você um iniciante buscando os primeiros quilômetros ou um atleta experiente visando um novo recorde pessoal, nossa consultoria de corrida é feita para você.
                  </p>
                   <ul className="space-y-3 mb-8 mt-6">
                        <li className="flex items-start gap-3"><span className="text-yellow-400 text-xl">🏃</span><span>Treinos de corrida 100% individualizados no app, atualizados semanalmente.</span></li>
                        <li className="flex items-start gap-3"><span className="text-yellow-400 text-xl">📊</span><span>Planilhas baseadas em seus resultados de testes de performance (ex: Teste de Cooper).</span></li>
                        <li className="flex items-start gap-3"><span className="text-yellow-400 text-xl">📈</span><span>Análise contínua do seu desempenho e ajustes para otimização máxima.</span></li>
                        <li className="flex items-start gap-3"><span className="text-yellow-400 text-xl">💬</span><span>Suporte direto e rápido via WhatsApp para todas as suas dúvidas.</span></li>
                        <li className="flex items-start gap-3"><span className="text-yellow-400 text-xl">💪</span><span>Integração da musculação para fortalecer o corpo e prevenir lesões na corrida.</span></li>
                    </ul>
                    <Link href="https://wa.me/55119XXXXXXXX?text=Olá! Gostaria de informações sobre a consultoria de corrida com o Thiago." target="_blank" rel="noopener noreferrer">
                        <motion.button 
                            whileHover={{ scale: 1.05 }} 
                            whileTap={{ scale: 0.95 }}
                            className="bg-yellow-500 text-black font-bold py-3 px-8 rounded-lg text-lg hover:bg-yellow-600 transition-colors shadow-lg shadow-yellow-500/20"
                        >
                            QUERO CORRER MELHOR
                        </motion.button>
                    </Link>
                </motion.div>
                {/* FIM DA NOVA SEÇÃO DE CORRIDA */}

                <h2 className="text-3xl font-bold text-center mt-20 mb-8">Perguntas Frequentes</h2>
                <div className="space-y-4">
                    <div className="bg-gray-800 p-4 rounded-lg"><details><summary className="font-bold cursor-pointer">Sou totalmente iniciante, a consultoria serve para mim?</summary><p className="mt-2 text-gray-400">Com certeza! É o melhor cenário para começar do jeito certo, criando uma base sólida e evitando os erros mais comuns.</p></details></div>
                    <div className="bg-gray-800 p-4 rounded-lg"><details><summary className="font-bold cursor-pointer">Como funciona o pagamento?</summary><p className="mt-2 text-gray-400">O pagamento é feito via Pix, boleto ou cartão de crédito. Entre em contato para conhecer os planos.</p></details></div>
                    <div className="bg-gray-800 p-4 rounded-lg"><details><summary className="font-bold cursor-pointer">Qual a duração do acompanhamento?</summary><p className="mt-2 text-gray-400">Oferecemos planos que se adaptam à sua necessidade. A consistência é a chave para resultados sólidos e duradouros.</p></details></div>
                </div>
            </div>
        </motion.section>
        
        {/* SEÇÃO 7: OFERTA FINAL E CHAMADA PARA AÇÃO - BOTÕES SEPARADOS */}
        <motion.section {...fadeInUp} className="relative py-20 px-4 overflow-hidden bg-black">
            <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-50"><div className="w-[50rem] h-[50rem] bg-green-500/15 rounded-full blur-3xl" /></div>
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Comece Sua Transformação Agora</h2>
                <p className="text-gray-400 mb-8">Vagas limitadas para garantir a máxima qualidade no seu acompanhamento. Fale comigo e vamos montar o plano perfeito para você.</p>
                <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg border-2 border-green-500">
                    <h3 className="text-xl font-bold text-green-400">CONSULTORIA ONLINE</h3>
                    <p className="text-lg text-gray-300 mt-4">Planos a partir de</p>
                    <p className="text-5xl font-bold my-2">R$ 149,90<span className="text-2xl font-normal text-gray-400">/mês</span></p>
                    
                    {/* BOTÕES SEPARADOS */}
                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                        <Link href="https://wa.me/55119XXXXXXXX?text=Olá! Gostaria de informações sobre a consultoria de treino." target="_blank" rel="noopener noreferrer" className="w-full">
                            <motion.button 
                                whileHover={{ scale: 1.05 }} 
                                whileTap={{ scale: 0.95 }}
                                className="w-full bg-green-500 text-black font-bold py-3 rounded-lg text-lg hover:bg-green-600 transition-colors shadow-lg shadow-green-500/20"
                            >
                                QUERO CONSULTORIA DE TREINO
                            </motion.button>
                        </Link>
                        <Link href="https://wa.me/55119XXXXXXXX?text=Olá! Gostaria de informações sobre a consultoria de corrida." target="_blank" rel="noopener noreferrer" className="w-full">
                            <motion.button 
                                whileHover={{ scale: 1.05 }} 
                                whileTap={{ scale: 0.95 }}
                                className="w-full bg-transparent border-2 border-green-500 text-green-400 font-bold py-3 rounded-lg text-lg hover:bg-green-500 hover:text-black transition-colors"
                            >
                                QUERO CONSULTORIA DE CORRIDA
                            </motion.button>
                        </Link>
                    </div>
                </div>
                <div className="mt-8">
                    <p className="text-sm text-gray-500">Garantia de satisfação de 7 dias. Seu resultado é meu compromisso.</p>
                </div>
            </div>
        </motion.section>
      </main>
    </div>
  );
}
