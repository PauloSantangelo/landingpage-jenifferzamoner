"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useRef, ReactNode, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// --- DEFINIÇÕES DE TIPO ---
type Transformation = {
  id: number;
  name: string;
  images: string[];
  result: string;
  feedback: string;
};

type Testimonial = {
  author: string;
  type: string;
  text: string;
};

// --- DADOS DA PÁGINA ---
const transformations: Transformation[] = [
  {
    id: 1,
    name: 'Rebeca Marino',
    images: [
      '/images/transformations/rebeca1.webp',
      '/images/transformations/rebeca2.webp',
      '/images/transformations/rebeca3.webp',
      '/images/transformations/rebeca4.webp'
    ],
    result: '4 meses de evolução',
    feedback: 'Resultados de 4 meses com foco total nos treinos e na planilha. -9,5kg de gordura, +1,7kg de massa magra e postura transformada!'
  },
  {
    id: 2,
    name: 'Mirela Diniz',
    images: [
      '/images/transformations/mirela1.webp',
      '/images/transformations/mirela2.webp',
      '/images/transformations/mirela3.webp'
    ],
    result: 'Inspiração real',
    feedback: '-7% de gordura, +2kg de massa magra, -16,5cm de abdômen. Disciplina e constância fazem a diferença.'
  },
  {
    id: 3,
    name: 'Aline Bassetto',
    images: ['/images/transformations/aline.webp'],
    result: 'Resultados expressivos',
    feedback: '-7kg de gordura, +4kg de massa magra, -14cm de abdômen. Direcionamento é tudo.'
  },
  {
    id: 4,
    name: 'Iane D’azeredo',
    images: [
      '/images/transformations/Iane1.webp',
      '/images/transformations/Iane2.webp'
    ],
    result: 'Transformação intensa',
    feedback: '-17% de gordura, -13kg de gordura, +5,3kg de massa magra, -19cm de abdômen.'
  },
  {
    id: 5,
    name: 'Yohan',
    images: [
      '/images/transformations/Yohan1.webp',
      '/images/transformations/Yohan2.webp',
      '/images/transformations/Yohan3.webp',
      '/images/transformations/Yohan4.webp'
    ],
    result: 'Hipertrofia e definição',
    feedback: '-10kg de gordura, +8kg de massa magra. Trabalho de hipertrofia executado com excelência.'
  },
  {
    id: 6,
    name: 'Edneia Ribeiro',
    images: [
      '/images/transformations/edneia1.webp',
      '/images/transformations/edneia2.webp'
    ],
    result: 'Superação',
    feedback: '-5% gordura, +4% massa magra e o melhor: sem dores na lombar.'
  },
  {
    id: 7,
    name: 'Tatiane Soares',
    images: [
      '/images/transformations/tatiane1.webp',
      '/images/transformations/tatiane2.webp'
    ],
    result: 'Projeto em andamento',
    feedback: '-10,3% gordura, -12cm abdômen, -8cm tórax, +5kg de massa muscular. Um excelente resultado!'
  },
  {
    id: 8,
    name: 'Camila (Pós-gestação)',
    images: [
      '/images/transformations/camila1.webp',
      '/images/transformations/camila2.webp'
    ],
    result: 'Pós-gestação e foco',
    feedback: '-6kg de gordura, +3kg de massa magra, -9cm de abdômen, mais definição e menos flacidez.'
  }
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
      <div className="absolute left-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#34d399] to-[#10b981] opacity-30" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }} />
      </div>
      <div className="absolute bottom-[-20rem] right-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
        <div className="relative left-[calc(50%+10rem)] aspect-[1155/678] w-[36.125rem] translate-x-1/3 rotate-[30deg] bg-gradient-to-tr from-[#f59e0b] to-[#d97706] opacity-15" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }} />
      </div>
    </div>
  );
}

function TransformationCard({ trans }: { trans: Transformation }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Only set up interval if there's more than one image
    if (trans.images && trans.images.length > 1) { // Adicionada verificação para `trans.images` existir
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          (prevIndex + 1) % trans.images.length
        );
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [trans.images]);

  // Determina a URL da imagem a ser exibida. Prioriza a imagem atual do ciclo,
  // se não houver imagens ou o índice for inválido, usa a imagem de fallback.
  const imageUrl = (trans.images && trans.images.length > 0 && trans.images[currentImageIndex])
    ? trans.images[currentImageIndex]
    : '/fallback-image.png'; // Garante que src nunca seja undefined ou null

  return (
    <div ref={ref} className="break-inside-avoid bg-gray-900/50 border-2 border-green-500/40 rounded-xl overflow-hidden shadow-lg hover:border-green-500 transition-all duration-300 hover:scale-[1.02] relative backdrop-blur-sm">
      <motion.div className="relative" style={{ y }}>
        <Image
          src={imageUrl} // Usando a URL da imagem garantida
          alt={`Transformação de ${trans.name} - Imagem ${currentImageIndex + 1}`}
          width={600}
          height={600}
          className="w-full h-auto object-cover"
        />
      </motion.div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-green-400">{trans.name}</h3>
        <p className="text-amber-400 font-semibold mb-3">{trans.result}</p>
        <blockquote className="text-gray-300 italic border-l-4 border-green-700/50 pl-4">&ldquo;{trans.feedback}&rdquo;</blockquote>
      </div>
    </div>
  );
}

interface PersuasiveSectionProps { title: string; children: ReactNode; glowPosition?: 'left' | 'right'; }

function PersuasiveSection({ title, children, glowPosition = 'left' }: PersuasiveSectionProps) {
  return (
    <section className="relative py-20 md:py-24 px-4 overflow-hidden">
      <div className={`absolute top-1/2 ${glowPosition === 'left' ? 'left-0' : 'right-0'} -translate-y-1/2 -z-10`}>
        <div className="w-[40rem] h-[40rem] bg-green-500/10 rounded-full blur-3xl" />
      </div>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">{title}</h2>
        <div className="mt-6 text-lg text-gray-300">{children}</div>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href={`https://pages.mfitpersonal.com.br/index?acao=page&tipo=1&page=103215&isCheckout=false`} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <button className="w-full bg-green-500 text-black font-bold py-3 px-8 rounded-lg hover:bg-green-400 transition-all shadow-lg shadow-green-500/20 hover:shadow-green-400/40">Quero Consultoria Online</button>
          </Link>
          <Link href={`https://wa.me/5514988226651?text=Olá, quero um treino personalizado.`} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <button className="w-full bg-transparent border-2 border-amber-400 text-amber-400 font-bold py-3 px-8 rounded-lg hover:bg-amber-400 hover:text-black transition-all">Quero a Planilha de Treino</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="relative bg-gray-900/50 border border-amber-400/30 p-8 rounded-2xl h-full flex flex-col">
      <svg className="absolute top-6 left-6 h-10 w-10 text-amber-400/20" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true"><path d="M9.352 4C4.456 4 1 7.456 1 12.352 1 17.248 4.456 21 9.352 21 14.248 21 17 17.248 17 12.352 17 7.456 14.248 4 9.352 4zm14 0c-4.896 0-8.352 3.456-8.352 8.352 0 4.896 3.456 8.352 8.352 8.352 4.896 0 8.352-3.456 8.352-8.352C31.352 7.456 28.248 4 23.352 4z" /></svg>
      <blockquote className="relative text-gray-300 flex-grow">
        <p className="z-10">&ldquo;{testimonial.text}&rdquo;</p>
      </blockquote>
      <footer className="mt-6 pt-6 border-t border-gray-800">
        <p className="font-bold text-amber-400">{testimonial.author}</p>
        <p className="text-sm text-gray-500">{testimonial.type}</p>
      </footer>
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
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -10]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);

  return (
    <motion.a
      ref={ref}
      href="https://wa.me/5514988226651?text=Olá! Vim pelos resultados no site e gostaria de mais informações."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-[9999] flex items-center justify-center gap-2 bg-green-500 text-white font-bold py-3 px-4 rounded-full shadow-xl shadow-green-500/30 md:hidden"
      style={{ y, rotate }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1, y: [0, -5, 0] }}
      transition={{ duration: 0.5, ease: "easeOut", y: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99 0-3.903-.52-5.586-1.456l-6.167 1.679zm6.247-6.407c.333.52 1.023.895 1.742 1.066s1.233.226 2.373.081c1.14-.145 2.373-.781 3.319-1.661 1.903-1.75 3.429-4.246 3.51-7.032.098-3.388-2.115-6.42-4.963-7.375-2.849-.955-6.039.293-7.376 3.149-1.336 2.857-.315 6.275 2.408 7.612.217.106.406.227.581.352l-1.63 5.925z"/></svg>
      <span className="text-xs sm:text-sm hidden xs:inline">Conversar</span>
    </motion.a>
  );
}

// --- COMPONENTE PRINCIPAL DA PÁGINA ---
export default function TransformacoesPage() {
  // Split the transformations array into two parts
  const firstFour = transformations.slice(0, 4);
  const lastFour = transformations.slice(4, 8); // Assuming you want the next 4

  return (
    <div className="text-white min-h-screen">
      <BackgroundAndEffects />
      <BackToHomeButton />
      <FloatingWhatsAppButton />

      <main className="relative z-0">
        <section className="py-20 md:py-28 text-center px-4">
          <div className="max-w-4xl mx-auto">
            <Image src="/logo.png" alt="Logo Jeniffer Zamoner" width={150} height={60} className="mx-auto mb-8 h-auto"/>
            <span className="text-green-400 font-semibold uppercase tracking-wider text-sm md:text-base">Nossa Maior Conquista</span>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mt-2 bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-400 leading-tight">Resultados Falam Mais Alto Que Palavras</h1>
            <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">Estas são as histórias reais de pessoas dedicadas que confiaram no método e transformaram não apenas seus corpos, mas suas vidas. Inspire-se.</p>
          </div>
        </section>

        {/* First section of transformations (top 4) */}
        <section className="px-4 md:px-6 lg:px-8 pb-10">
          <div className="max-w-7xl mx-auto columns-1 md:columns-2 lg:columns-2 xl:columns-4 gap-6 space-y-6">
            {firstFour.map((trans) => (
              <TransformationCard key={trans.id} trans={trans} />
            ))}
          </div>
        </section>

        {/* CTA Section in the middle */}
        <PersuasiveSection title="Cada Foto, Uma Nova História de Sucesso" glowPosition="left">
          <p>O que você vê não são apenas mudanças estéticas, mas uma prova de que a dedicação, guiada pelo método certo, gera resultados reais e duradouros. A próxima história pode ser a sua.</p>
        </PersuasiveSection>

        {/* Second section of transformations (bottom 4) */}
        <section className="px-4 md:px-6 lg:px-8 py-10">
          <div className="max-w-7xl mx-auto columns-1 md:columns-2 lg:columns-2 xl:columns-4 gap-6 space-y-6">
            {lastFour.map((trans) => (
              <TransformationCard key={trans.id} trans={trans} />
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-black/30 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">A Opinião Detalhada de Quem Vive a Experiência</h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">Palavras que recebemos e que mostram o verdadeiro impacto do nosso trabalho.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="relative py-16 sm:py-20 md:py-28 px-4">
          <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-50">
            <div className="w-[30rem] sm:w-[40rem] md:w-[50rem] h-[30rem] sm:h-[40rem] md:h-[50rem] bg-green-500/15 rounded-full blur-3xl" />
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gray-900/70 backdrop-blur-md p-6 sm:p-8 md:p-16 rounded-2xl border border-gray-800 shadow-2xl shadow-green-500/10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">Sua Transformação Começa Agora.</h2>
              <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto">Você viu o que é possível. O mesmo método e a mesma dedicação estão disponíveis para você. Escolha o caminho que faz mais sentido para o seu momento.</p>
              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md sm:max-w-none mx-auto">
                <Link href={`https://pages.mfitpersonal.com.br/index?acao=page&tipo=1&page=103215&isCheckout=false`} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto min-w-[200px] bg-green-500 text-black font-bold py-3 px-6 sm:px-8 rounded-lg hover:bg-green-600 transition-all text-sm sm:text-base">Quero Consultoria Online</button>
                </Link>
                <Link href={`https://wa.me/5514988226651?text=Olá, quero um treino personalizado.`} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto min-w-[200px] bg-transparent border-2 border-amber-400 text-amber-400 font-bold py-3 px-6 sm:px-8 rounded-lg hover:bg-amber-400 hover:text-black transition-all text-sm sm:text-base">Quero a Planilha de Treino</button>
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}