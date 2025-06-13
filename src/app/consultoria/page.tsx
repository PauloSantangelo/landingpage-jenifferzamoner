// app/consultoria/page.tsx

// (Opcional, mas recomendado) Importar ícones
// import { ShieldCheck, Target, Barbell, MessageSquare, BrainCircuit } from 'lucide-react';

export default function ConsultoriaPage() {
  return (
    <main className="bg-gray-900 text-white">
      {/* =======================================================================
        SEÇÃO 1: VÍDEO DE APRESENTAÇÃO PESSOAL
        =======================================================================
        Objetivo: Criar uma conexão instantânea com um vídeo da Jeniffer.
      */}
      <section className="bg-black py-20 px-4 flex flex-col items-center justify-center text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
            O Acompanhamento Que Você Precisa Para Resultados Definitivos
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Assista ao vídeo abaixo e entenda como minha consultoria online vai te levar para o próximo nível.
          </p>

          {/* Player do YouTube Embutido e Responsivo */}
          <div className="aspect-w-16 aspect-h-9 w-full rounded-lg overflow-hidden shadow-2xl shadow-green-500/20 border-2 border-green-500">
            <iframe
              src="https://www.youtube.com/embed/SEU_VIDEO_ID" // <-- SUBSTITUA "SEU_VIDEO_ID" PELO ID DO VÍDEO
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
           <button className="mt-8 bg-green-500 text-black font-bold py-3 px-10 rounded-lg text-xl hover:bg-green-600 transition-colors">
            QUERO SER SEU ALUNO(A)
          </button>
        </div>
      </section>

      {/* =======================================================================
        SEÇÃO 2: PARA QUEM É A CONSULTORIA?
        =======================================================================
        Objetivo: Filtrar o público e fazer o visitante ideal sentir "isso é para mim!".
      */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Essa consultoria foi desenhada para você que...</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {/* Problemas que a consultoria resolve */}
            <div className="text-left space-y-4">
                <p className="flex items-start gap-3"><span className="text-2xl text-red-500">❌</span><span>Está cansado(a) de treinar sem ver evolução e se sente estagnado(a).</span></p>
                <p className="flex items-start gap-3"><span className="text-2xl text-red-500">❌</span><span>Não tem certeza se seu treino ou dieta estão corretos para seus objetivos.</span></p>
                <p className="flex items-start gap-3"><span className="text-2xl text-red-500">❌</span><span>Sente falta de motivação e de alguém para cobrar e dar direcionamento.</span></p>
                <p className="flex items-start gap-3"><span className="text-2xl text-red-500">❌</span><span>Já tentou de tudo um pouco, mas nunca alcançou o corpo que deseja.</span></p>
            </div>
             {/* O que a pessoa busca */}
            <div className="text-left space-y-4">
              <p className="flex items-start gap-3"><span className="text-2xl text-green-500">✅</span><span>Busca um plano 100% individualizado, feito do zero para sua realidade.</span></p>
              <p className="flex items-start gap-3"><span className="text-2xl text-green-500">✅</span><span>Quer a segurança e a confiança de ter uma especialista ao seu lado.</span></p>
              <p className="flex items-start gap-3"><span className="text-2xl text-green-500">✅</span><span>Está comprometido(a) a seguir o plano para ter uma transformação real.</span></p>
              <p className="flex items-start gap-3"><span className="text-2xl text-green-500">✅</span><span>Valoriza um acompanhamento próximo para ajustes e otimização constante.</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* =======================================================================
        SEÇÃO 3: A METODOLOGIA - O QUE ESTÁ INCLUSO?
        =======================================================================
        Objetivo: Detalhar o serviço para mostrar o alto valor agregado.
      */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">A Metodologia Completa Para Sua Evolução</h2>
          <p className="text-gray-400 mb-12 max-w-3xl mx-auto">Você não recebe apenas um treino. Você recebe um sistema completo de acompanhamento.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              {/* <Barbell className="w-12 h-12 text-green-500 mx-auto mb-4" /> */}
              <h3 className="text-xl font-bold mb-2">Treino 100% Individualizado</h3>
              <p className="text-gray-400">Seu plano de treino é criado do zero, com base na sua avaliação, objetivos e equipamentos disponíveis.</p>
            </div>
            {/* Card 2 */}
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              {/* <BrainCircuit className="w-12 h-12 text-green-500 mx-auto mb-4" /> */}
              <h3 className="text-xl font-bold mb-2">Planejamento Alimentar</h3>
              <p className="text-gray-400">Orientações e estratégias nutricionais alinhadas ao seu treino para acelerar seus resultados (não substitui nutricionista).</p>
            </div>
            {/* Card 3 */}
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              {/* <MessageSquare className="w-12 h-12 text-green-500 mx-auto mb-4" /> */}
              <h3 className="text-xl font-bold mb-2">Suporte Contínuo</h3>
              <p className="text-gray-400">Canal direto via WhatsApp para tirar dúvidas, enviar vídeos e receber feedbacks da Jeniffer.</p>
            </div>
            {/* Card 4 */}
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              {/* <Target className="w-12 h-12 text-green-500 mx-auto mb-4" /> */}
              <h3 className="text-xl font-bold mb-2">Ajustes e Análises</h3>
              <p className="text-gray-400">Análise periódica do seu progresso com ajustes na planilha para garantir evolução constante e quebrar platôs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* =======================================================================
        SEÇÃO 4: PROVA SOCIAL (DEPOIMENTOS E RESULTADOS)
        =======================================================================
        Objetivo: Gerar confiança inabalável com provas reais.
      */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Resultados Reais de Alunos Dedicados</h2>
          {/* Galeria de Antes e Depois */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
             {/* Imagem de Aluno 1 */}
             <div className="bg-gray-800 rounded-lg p-3"><div className="bg-gray-700 aspect-square rounded-md flex items-center justify-center">Foto Antes/Depois</div><p className="mt-2 text-sm font-bold">Maria C. (-8kg)</p></div>
             {/* Imagem de Aluno 2 */}
             <div className="bg-gray-800 rounded-lg p-3"><div className="bg-gray-700 aspect-square rounded-md flex items-center justify-center">Foto Antes/Depois</div><p className="mt-2 text-sm font-bold">Pedro H. (+5kg massa)</p></div>
             {/* Imagem de Aluno 3 */}
             <div className="bg-gray-800 rounded-lg p-3"><div className="bg-gray-700 aspect-square rounded-md flex items-center justify-center">Foto Antes/Depois</div><p className="mt-2 text-sm font-bold">Ana L. (Definição)</p></div>
             {/* Imagem de Aluno 4 */}
             <div className="bg-gray-800 rounded-lg p-3"><div className="bg-gray-700 aspect-square rounded-md flex items-center justify-center">Foto Antes/Depois</div><p className="mt-2 text-sm font-bold">Lucas M. (-12kg)</p></div>
          </div>
          {/* Depoimentos em texto (prints do WhatsApp são ótimos aqui) */}
          <div className="mt-16 grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-gray-800 p-6 rounded-lg"><blockquote>"O suporte da Jeni é surreal. Ela realmente se importa e ajusta tudo que for preciso. Melhor investimento que já fiz!"</blockquote><cite className="mt-4 block font-bold not-italic">- Fernanda</cite></div>
            <div className="bg-gray-800 p-6 rounded-lg"><blockquote>"Eu estava totalmente perdido. Com a consultoria, em 3 meses tive mais resultado do que em 3 anos tentando sozinho. Incrível."</blockquote><cite className="mt-4 block font-bold not-italic">- Ricardo</cite></div>
          </div>
        </div>
      </section>

      {/* =======================================================================
        SEÇÃO 5: SOBRE A JENIFFER + FAQ
        =======================================================================
        Objetivo: Consolidar autoridade e quebrar as últimas objeções.
      */}
       <section className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto">
          {/* Sobre a Jeniffer */}
          <div className="flex flex-col md:flex-row items-center gap-10 mb-20 text-center md:text-left">
            <div className="flex-shrink-0">
              {/* <Image src="/jeniffer-profissional.jpg" alt="Jeniffer Zamoner" width={250} height={250} className="rounded-full" /> */}
              <div className="w-48 h-48 md:w-64 md:h-64 bg-gray-700 rounded-full mx-auto flex items-center justify-center">Foto Profissional</div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Sua mentora nessa jornada</h2>
              <p className="text-gray-300">Meu nome é Jeniffer Zamoner e minha paixão é transformar vidas através do treinamento de força. Mais do que passar treinos, meu objetivo é ensinar você a treinar de forma inteligente e sustentável, construindo não apenas um corpo mais forte, mas também uma mente mais confiante. Vamos juntos?
              </p>
            </div>
          </div>
          {/* FAQ */}
          <h2 className="text-3xl font-bold text-center mb-8">Perguntas Frequentes</h2>
          <div className="space-y-4">
             {/* Usar um componente de Accordion/Disclosure do Headless UI ou similar aqui é o ideal */}
             <div className="bg-gray-800 p-4 rounded-lg"><details><summary className="font-bold cursor-pointer">Sou totalmente iniciante, a consultoria serve para mim?</summary><p className="mt-2 text-gray-400">Com certeza! É o melhor cenário para começar do jeito certo, criando uma base sólida e evitando os erros mais comuns.</p></details></div>
             <div className="bg-gray-800 p-4 rounded-lg"><details><summary className="font-bold cursor-pointer">Como funciona o pagamento?</summary><p className="mt-2 text-gray-400">O pagamento é feito via [Plataforma de Pagamento], podendo ser por Pix, boleto ou cartão de crédito em até 12x.</p></details></div>
             <div className="bg-gray-800 p-4 rounded-lg"><details><summary className="font-bold cursor-pointer">Qual a duração do acompanhamento?</summary><p className="mt-2 text-gray-400">Oferecemos planos Trimestrais e Semestrais. A consistência é a chave para resultados sólidos e duradouros.</p></details></div>
          </div>
        </div>
       </section>
      
      {/* =======================================================================
        SEÇÃO 6: OFERTA FINAL E CHAMADA PARA AÇÃO
        =======================================================================
        Objetivo: Apresentar o preço e os planos de forma clara e convencer o usuário a agir.
      */}
       <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Pronto(a) Para Iniciar Sua Transformação?</h2>
          <p className="text-gray-400 mb-8">As vagas são limitadas para garantir a qualidade do meu acompanhamento. Garanta a sua.</p>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Plano Trimestral */}
            <div className="bg-gray-800 p-8 rounded-lg border-2 border-gray-700">
              <h3 className="text-2xl font-bold mb-2">Plano Trimestral</h3>
              <p className="text-4xl font-bold my-4">3x de R$ 300</p>
              <p className="text-gray-400">ou R$ 850 à vista</p>
              <button className="mt-6 w-full bg-gray-600 text-white font-bold py-3 rounded-lg hover:bg-gray-700 transition-colors">QUERO ESTE PLANO</button>
            </div>
            {/* Plano Semestral */}
            <div className="bg-green-900/50 p-8 rounded-lg border-2 border-green-500 relative">
              <span className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-green-500 text-black text-sm font-bold px-3 py-1 rounded-full">MAIS VANTAJOSO</span>
              <h3 className="text-2xl font-bold mb-2">Plano Semestral</h3>
              <p className="text-4xl font-bold my-4">6x de R$ 250</p>
              <p className="text-gray-300">ou R$ 1400 à vista</p>
              <button className="mt-6 w-full bg-green-500 text-black font-bold py-3 rounded-lg hover:bg-green-600 transition-colors">GARANTIR MINHA VAGA</button>
            </div>
          </div>
          <div className="mt-12">
            {/* <ShieldCheck className="w-12 h-12 text-gray-500 mx-auto mb-2" /> */}
            <p className="text-sm text-gray-500">Garantia de satisfação de 7 dias. Seu resultado é meu compromisso.</p>
          </div>
        </div>
       </section>
    </main>
  );
}