"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useRef, ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// --- DEFINIÇÕES DE TIPO ---
type Transformation = { id: number; name: string; image: string; result: string; feedback: string; };
type Testimonial = { author: string; type: string; text: string; };


// --- DADOS DA PÁGINA ---
const transformations: Transformation[] = [
    { id: 1, name: 'Ana Clara', image: '/images/transformations/resultado1.webp', result: 'Resultado Incrível', feedback: 'O método e o acompanhamento da Jeniffer foram um divisor de águas na minha jornada. Recomendo de olhos fechados!' },
    { id: 2, name: 'Bruno Gomes', image: '/images/transformations/resultado2.webp', result: 'Impressionante', feedback: 'Finalmente entendi como treinar de verdade. O suporte fez toda a diferença para mim.' },
    { id: 3, name: 'Camila Dias', image: '/images/transformations/resultado3.webp', result: 'Transformação Total', feedback: 'Em poucos meses, meu corpo mudou mais do que em anos treinando sozinha. Sou muito grata!' },
    { id: 4, name: 'Diego Martins', image: '/images/transformations/resultado4.webp', result: 'Foco e Disciplina', feedback: 'O método e o acompanhamento da Jeniffer foram um divisor de águas na minha jornada. Recomendo de olhos fechados!' },
    { id: 5, name: 'Elaine Costa', image: '/images/transformations/resultado5.webp', result: 'Mais Força e Definição', feedback: 'Finalmente entendi como treinar de verdade. O suporte fez toda a diferença para mim.' },
    { id: 6, name: 'Felipe Barros', image: '/images/transformations/resultado6.webp', result: 'Superou Expectativas', feedback: 'Em poucos meses, meu corpo mudou mais do que em anos treinando sozinho. Sou muito grato!' },
    { id: 7, name: 'Gabriela Lima', image: '/images/transformations/resultado7.webp', result: 'Energia Renovada', feedback: 'O método e o acompanhamento da Jeniffer foram um divisor de águas na minha jornada. Recomendo de olhos fechados!' },
    { id: 8, name: 'Heitor Alves', image: '/images/transformations/resultado8.webp', result: 'Resultados Sólidos', feedback: 'Finalmente entendi como treinar de verdade. O suporte fez toda a diferença para mim.' },
    { id: 9, name: 'Isabela Rocha', image: '/images/transformations/resultado9.webp', result: 'Inacreditável', feedback: 'Em poucos meses, meu corpo mudou mais do que em anos treinando sozinha. Sou muito grata!' },
    { id: 10, name: 'Joana Pires', image: '/images/transformations/resultado10.webp', result: 'Autoestima Elevada', feedback: 'O método e o acompanhamento da Jeniffer foram um divisor de águas na minha jornada. Recomendo de olhos fechados!' },
    { id: 11, name: 'Lucas Ferraz', image: '/images/transformations/resultado11.webp', result: 'Melhor Forma da Vida', feedback: 'Finalmente entendi como treinar de verdade. O suporte fez toda a diferença para mim.' },
    { id: 12, name: 'Mariana Nunes', image: '/images/transformations/resultado12.webp', result: 'Definição e Volume', feedback: 'Em poucos meses, meu corpo mudou mais do que em anos treinando sozinha. Sou muito grata!' },
];

const testimonials: Testimonial[] = [
    { author: "Yohan D'Azeredo", type: "Recuperação Física", text: "Após o meu acidente, quando quase perdi o tornozelo, enfrentei muitas limitações e desânimo. Já são três anos de parceria, e foi imprescindível para minha recuperação, não apenas física, mas também emocional. Sua dedicação, profissionalismo e motivação foram fundamentais. Sinto que Deus foi generoso ao colocar você em minha vida. Obrigado por tudo!" },
    { author: "Franceli de Almeida", type: "Acompanhamento Presencial", text: "Um personal é a pessoa que te espera, que te ajuda a adaptar-se aos seus limites e, respeitando-os, a se superar. Alguém que convive com você em dias bons e ruins, sempre com motivação. Ela está sempre me esperando, acreditando em mim, muitas vezes quando eu já não acredito mais. Não abro mão desse suporte jamais. Quem expandiu a mente nunca mais retorna ao que era antes." },
    { author: "Giovanna Bengozi", type: "Acompanhamento Presencial", text: "Sou aluna da Jeniffer há 3 anos, e sou muito grata por todo esse tempo! Só ela para me colocar no eixo rsrs. Brincadeiras a parte, a Jeniffer é uma profissional extremamente dedicada, competente e que se importa com a evolução de seus alunos. Ter uma profissional como ela é fundamental, maravilhoso e nos da vontade de ir além!" },
    { author: "Ana Claudia", type: "Consultoria Online", text: "Diferenciado desde a avaliação física, que foi a mais completa que já realizei! Isso já demonstra o cuidado com cada detalhe. O treino é personalizado, pensado para o meu objetivo, e acompanhado a cada semana. A cada mês os treinos vão sendo adaptados para avançar no projeto, e a evolução é motivadora demais! Super indico!" }
];


// --- COMPONENTES REUTILIZÁVEIS ---

function BackgroundAndEffects() {
  return (
    <div className="fixed inset-0 -z-10 h-full w-full bg-black">
        <div className="absolute left-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true"><div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#34d399] to-[#10b981] opacity-30" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }} /></div>
        <div className="absolute bottom-[-20rem] right-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true"><div className="relative left-[calc(50%+10rem)] aspect-[1155/678] w-[36.125rem] translate-x-1/3 rotate-[30deg] bg-gradient-to-tr from-[#f59e0b] to-[#d97706] opacity-15" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }} /></div>
    </div>
  );
}

function TransformationCard({ trans }: { trans: Transformation }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  return (<div ref={ref} className="break-inside-avoid bg-gray-900/50 border-2 border-green-500/40 rounded-xl overflow-hidden shadow-lg hover:border-green-500 transition-all duration-300 hover:scale-[1.02] relative backdrop-blur-sm"><motion.div className="relative" style={{ y }}><Image src={trans.image} alt={`Transformação de ${trans.name}`} width={600} height={600} className="w-full h-auto object-cover" /></motion.div><div className="p-6"><h3 className="text-2xl font-bold text-green-400">{trans.name}</h3><p className="text-amber-400 font-semibold mb-3">{trans.result}</p><blockquote className="text-gray-300 italic border-l-4 border-green-700/50 pl-4">"{trans.feedback}"</blockquote></div></div>);
}

interface PersuasiveSectionProps { title: string; children: ReactNode; glowPosition?: 'left' | 'right'; }
function PersuasiveSection({ title, children, glowPosition = 'left' }: PersuasiveSectionProps) {
    return (<section className="relative py-20 md:py-24 px-4 overflow-hidden"><div className={`absolute top-1/2 ${glowPosition === 'left' ? 'left-0' : 'right-0'} -translate-y-1/2 -z-10`}><div className="w-[40rem] h-[40rem] bg-green-500/10 rounded-full blur-3xl" /></div><div className="max-w-3xl mx-auto text-center"><h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">{title}</h2><div className="mt-6 text-lg text-gray-300">{children}</div><div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"><Link href="/consultoria" className="w-full sm:w-auto"><button className="w-full bg-green-500 text-black font-bold py-3 px-8 rounded-lg hover:bg-green-400 transition-all shadow-lg shadow-green-500/20 hover:shadow-green-400/40">Quero Consultoria Online</button></Link><Link href="/treinopersonalizado" className="w-full sm:w-auto"><button className="w-full bg-transparent border-2 border-amber-400 text-amber-400 font-bold py-3 px-8 rounded-lg hover:bg-amber-400 hover:text-black transition-all">Quero a Planilha de Treino</button></Link></div></div></section>);
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
    return (<div className="relative bg-gray-900/50 border border-amber-400/30 p-8 rounded-2xl h-full flex flex-col"><svg className="absolute top-6 left-6 h-10 w-10 text-amber-400/20" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true"><path d="M9.352 4C4.456 4 1 7.456 1 12.352 1 17.248 4.456 21 9.352 21 14.248 21 17 17.248 17 12.352 17 7.456 14.248 4 9.352 4zm14 0c-4.896 0-8.352 3.456-8.352 8.352 0 4.896 3.456 8.352 8.352 8.352 4.896 0 8.352-3.456 8.352-8.352C31.352 7.456 28.248 4 23.352 4z" /></svg><blockquote className="relative text-gray-300 flex-grow"><p className="z-10">"{testimonial.text}"</p></blockquote><footer className="mt-6 pt-6 border-t border-gray-800"><p className="font-bold text-amber-400">{testimonial.author}</p><p className="text-sm text-gray-500">{testimonial.type}</p></footer></div>);
}

// BOTÃO DE VOLTAR PARA HOME
function BackToHomeButton() {
    return (
        <motion.div
            className="fixed top-4 left-4 z-[9998]"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <Link href="/">
                <motion.button 
                    className="bg-gray-900/80 backdrop-blur-sm text-white p-3 rounded-full hover:bg-gray-800 transition-all shadow-lg border border-gray-700/50 hover:border-green-500/50"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m12 19-7-7 7-7"/>
                        <path d="M19 12H5"/>
                    </svg>
                </motion.button>
            </Link>
        </motion.div>
    );
}
// BOTÃO FLUTUANTE CORRIGIDO PARA MOBILE
function FloatingWhatsAppButton() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll();
    
    // Animação sutil de movimento baseada no scroll
    const y = useTransform(scrollYProgress, [0, 1], [0, -10]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);

    return (
        <motion.a
            ref={ref}
            href="https://wa.me/55119XXXXXXXX?text=Olá! Vi os resultados no site e gostaria de mais informações."
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-4 right-4 z-[9999] flex items-center justify-center gap-2 bg-green-500 text-white font-bold py-3 px-4 rounded-full shadow-xl shadow-green-500/30"
            style={{ y, rotate }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
                opacity: 1, 
                scale: 1,
                y: [0, -5, 0], // Movimento sutil de flutuação
            }}
            transition={{ 
                duration: 0.5, 
                ease: "easeOut",
                y: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99 0-3.903-.52-5.586-1.456l-6.167 1.679zm6.247-6.407c.333.52 1.023.895 1.742 1.066s1.233.226 2.373.081c1.14-.145 2.373-.781 3.319-1.661 1.903-1.75 3.429-4.246 3.51-7.032.098-3.388-2.115-6.42-4.963-7.375-2.849-.955-6.039.293-7.376 3.149-1.336 2.857-.315 6.275 2.408 7.612.217.106.406.227.581.352l-1.63 5.925z"/>
            </svg>
            <span className="text-xs sm:text-sm hidden xs:inline">Conversar</span>
        </motion.a>
    );
}


// --- COMPONENTE PRINCIPAL DA PÁGINA (COM A ESTRUTURA CORRIGIDA) ---
export default function TransformacoesPage() {
  return (
    <div className="text-white min-h-screen">
      <BackgroundAndEffects />
      <BackToHomeButton />
      <FloatingWhatsAppButton />

      <main className="relative z-0">
        {/* --- SEÇÃO 1: HERO INICIAL --- */}
        <section className="py-20 md:py-28 text-center px-4">
          <div className="max-w-4xl mx-auto">
            <Image 
              src="/logo.png" 
              alt="Logo Jeniffer Zamoner" 
              width={150} 
              height={60} 
              className="mx-auto mb-8 h-auto"
            />
            <span className="text-green-400 font-semibold uppercase tracking-wider text-sm md:text-base">
              Nossa Maior Conquista
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mt-2 bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-400 leading-tight">
              Resultados Falam Mais Alto Que Palavras
            </h1>
            <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Estas são as histórias reais de pessoas dedicadas que confiaram no método e transformaram não apenas seus corpos, mas suas vidas. Inspire-se.
            </p>
          </div>
        </section>

        {/* --- BLOCO 1: PRIMEIRAS TRANSFORMAÇÕES --- */}
        <section className="px-4 md:px-6 lg:px-8 pb-10">
          <div className="max-w-7xl mx-auto columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {transformations.slice(0, 6).map((trans) => (
              <TransformationCard key={trans.id} trans={trans} />
            ))}
          </div>
        </section>

        {/* --- BLOCO 2: SEÇÃO PERSUASIVA E CTA --- */}
        <PersuasiveSection title="Cada Foto, Uma Nova História de Sucesso" glowPosition="left">
          <p>O que você vê não são apenas mudanças estéticas, mas uma prova de que a dedicação, guiada pelo método certo, gera resultados reais e duradouros. A próxima história pode ser a sua.</p>
        </PersuasiveSection>

        {/* --- BLOCO 3: MAIS TRANSFORMAÇÕES --- */}
        <section className="px-4 md:px-6 lg:px-8 py-10">
          <div className="max-w-7xl mx-auto columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {transformations.slice(6, 12).map((trans) => (
              <TransformationCard key={trans.id} trans={trans} />
            ))}
          </div>
        </section>

        {/* --- BLOCO 4: SEÇÃO DE DEPOIMENTOS EM TEXTO --- */}
        <section className="py-20 bg-black/30 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                        A Opinião Detalhada de Quem Vive a Experiência
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
                        Palavras que recebemos e que mostram o verdadeiro impacto do nosso trabalho.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} testimonial={testimonial} />
                    ))}
                </div>
            </div>
        </section>

        {/* --- BLOCO 5: CHAMADA PARA AÇÃO FINAL COM EFEITO - CORRIGIDA PARA MOBILE --- */}
        <section className="relative py-16 sm:py-20 md:py-28 px-4">
          <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-50">
            <div className="w-[30rem] sm:w-[40rem] md:w-[50rem] h-[30rem] sm:h-[40rem] md:h-[50rem] bg-green-500/15 rounded-full blur-3xl" />
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gray-900/70 backdrop-blur-md p-6 sm:p-8 md:p-16 rounded-2xl border border-gray-800 shadow-2xl shadow-green-500/10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Sua Transformação Começa Agora.
              </h2>
              <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
                Você viu o que é possível. O mesmo método e a mesma dedicação estão disponíveis para você. Escolha o caminho que faz mais sentido para o seu momento.
              </p>
              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md sm:max-w-none mx-auto">
                  <Link href="/consultoria" className="w-full sm:w-auto">
                      <button className="w-full sm:w-auto min-w-[200px] bg-green-500 text-black font-bold py-3 px-6 sm:px-8 rounded-lg hover:bg-green-600 transition-all text-sm sm:text-base">
                          Quero Consultoria Online
                      </button>
                  </Link>
                  <Link href="/treinopersonalizado" className="w-full sm:w-auto">
                      <button className="w-full sm:w-auto min-w-[200px] bg-transparent border-2 border-amber-400 text-amber-400 font-bold py-3 px-6 sm:px-8 rounded-lg hover:bg-amber-400 hover:text-black transition-all text-sm sm:text-base">
                          Quero a Planilha de Treino
                      </button>
                  </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}