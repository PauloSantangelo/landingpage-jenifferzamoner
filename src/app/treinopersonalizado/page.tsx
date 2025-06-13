// app/treinopersonalizado/page.tsx

// (Opcional, mas recomendado) Importar ícones para usar nos botões e listas
// import { CheckCircle, Zap } from 'lucide-react';

export default function TreinoPersonalizadoPage() {
  return (
    <main className="bg-black text-white">
      {/* =======================================================================
        SEÇÃO 1: VÍDEO DE IMPACTO E CHAMADA PRINCIPAL (ATENÇÃO)
        =======================================================================
        Objetivo: Capturar a atenção do visitante nos primeiros 3 segundos.
      */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Vídeo de Fundo */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
        >
          {/* Coloque o caminho para o seu vídeo aqui (deve estar na pasta /public) */}
          <source src="/videos/gym-video.mp4" type="video/mp4" />
          Seu navegador não suporta a tag de vídeo.
        </video>

        {/* Overlay escuro para legibilidade do texto */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10"></div>

        {/* Conteúdo de Texto */}
        <div className="relative z-20 text-center p-4">
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase mb-4">
            Destrave seu Potencial Máximo
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Receba a planilha de treinos inteligente da Jeniffer Zamoner e transforme seu corpo com um método que funciona de verdade.
          </p>
          <button className="bg-green-500 text-black font-bold py-3 px-8 rounded-lg text-lg hover:bg-green-600 transition-colors">
            QUERO MINHA PLANILHA AGORA
          </button>
        </div>
      </section>

      {/* =======================================================================
        SEÇÃO 2: PROBLEMA E SOLUÇÃO (INTERESSE)
        =======================================================================
        Objetivo: Conectar-se com a dor do cliente e apresentar sua planilha como a solução perfeita.
      */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Cansado(a) de treinos que não funcionam?</h2>
          <p className="text-gray-400 mb-12">
            Se você se sente perdido na academia, sem motivação ou estagnado nos resultados, você não está sozinho. Nós entendemos o seu desafio.
          </p>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            {/* O que você ganha */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-green-400 mb-4">O Fim da Incerteza</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  {/* <CheckCircle className="text-green-500 mr-2" /> */}
                  <span>✅ Planilha de treino completa e organizada.</span>
                </li>
                <li className="flex items-center">
                  {/* <CheckCircle className="text-green-500 mr-2" /> */}
                  <span>✅ Vídeos demonstrativos para cada exercício.</span>
                </li>
                <li className="flex items-center">
                  {/* <CheckCircle className="text-green-500 mr-2" /> */}
                  <span>✅ Divisão inteligente para otimizar seus ganhos.</span>
                </li>
                 <li className="flex items-center">
                  {/* <CheckCircle className="text-green-500 mr-2" /> */}
                  <span>✅ Acesso vitalício para treinar no seu ritmo.</span>
                </li>
              </ul>
            </div>

            {/* Benefícios */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-green-400 mb-4">Resultados Reais</h3>
               <ul className="space-y-3">
                <li className="flex items-center">
                  {/* <Zap className="text-green-500 mr-2" /> */}
                  <span>⚡️ Ganhe massa muscular de forma consistente.</span>
                </li>
                <li className="flex items-center">
                  {/* <Zap className="text-green-500 mr-2" /> */}
                  <span>⚡️ Aumente sua força e performance.</span>
                </li>
                <li className="flex items-center">
                  {/* <Zap className="text-green-500 mr-2" /> */}
                  <span>⚡️ Tenha mais confiança e motivação a cada treino.</span>
                </li>
                <li className="flex items-center">
                  {/* <Zap className="text-green-500 mr-2" /> */}
                  <span>⚡️ Finalmente veja a transformação que você busca.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =======================================================================
        SEÇÃO 3: PROVA SOCIAL E AUTORIDADE (DESEJO)
        =======================================================================
        Objetivo: Gerar confiança e desejo mostrando quem é a Jeniffer e os resultados de outros alunos.
      */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Sobre a Jeniffer */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-20">
            <div className="md:w-1/3">
              {/* <Image src="/jeniffer-bio.jpg" alt="Jeniffer Zamoner" width={300} height={300} className="rounded-full mx-auto" /> */}
              <div className="w-64 h-64 bg-gray-700 rounded-full mx-auto flex items-center justify-center">Foto da Jeni</div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-4">Criado por quem entende do assunto</h2>
              <p className="text-gray-300">
                Jeniffer Zamoner é especialista em treinamento de força e transformação corporal. Com anos de experiência e centenas de alunos satisfeitos, ela desenvolveu este método para entregar a você o caminho mais curto e eficiente para seus resultados.
              </p>
            </div>
          </div>

          {/* Depoimentos */}
          <h2 className="text-3xl font-bold text-center mb-12">Resultados que falam por si</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card de Depoimento 1 */}
            <div className="bg-gray-900 p-6 rounded-lg text-center">
              <div className="w-40 h-40 bg-gray-700 rounded-lg mx-auto mb-4 flex items-center justify-center">Antes & Depois</div>
              <p className="italic mb-4">"Nunca tive resultados tão expressivos! A planilha é fácil de seguir e super completa."</p>
              <h4 className="font-bold">- Maria S.</h4>
            </div>
            {/* Card de Depoimento 2 */}
            <div className="bg-gray-900 p-6 rounded-lg text-center">
              <div className="w-40 h-40 bg-gray-700 rounded-lg mx-auto mb-4 flex items-center justify-center">Antes & Depois</div>
              <p className="italic mb-4">"Finalmente entendi como treinar certo. A Jeni é incrível e o suporte faz toda a diferença."</p>
              <h4 className="font-bold">- João P.</h4>
            </div>
            {/* Card de Depoimento 3 */}
            <div className="bg-gray-900 p-6 rounded-lg text-center">
              <div className="w-40 h-40 bg-gray-700 rounded-lg mx-auto mb-4 flex items-center justify-center">Antes & Depois</div>
              <p className="italic mb-4">"Em 3 meses, meu corpo mudou mais do que em 2 anos treinando sozinha. Recomendo demais!"</p>
              <h4 className="font-bold">- Carla F.</h4>
            </div>
          </div>
        </div>
      </section>

      {/* =======================================================================
        SEÇÃO 4: OFERTA E CHAMADA FINAL (AÇÃO)
        =======================================================================
        Objetivo: Apresentar uma oferta irresistível e facilitar a ação de compra.
      */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-2xl mx-auto text-center bg-gray-800 p-8 md:p-12 rounded-xl border border-green-500 shadow-lg shadow-green-500/20">
          <h2 className="text-3xl font-bold mb-2">Chegou a sua vez de evoluir.</h2>
          <p className="text-green-400 font-semibold mb-6 text-lg">Acesso Imediato e Vitalício</p>
          
          <p className="text-gray-400 line-through">De R$ 197,00</p>
          <p className="text-5xl font-bold my-2">Por apenas R$ 97,00</p>
          <p className="text-gray-400 mb-8">Pagamento único, sem mensalidades.</p>

          <button className="w-full bg-green-500 text-black font-bold py-4 px-8 rounded-lg text-xl hover:bg-green-600 transition-colors animate-pulse">
            COMPRAR AGORA E TRANSFORMAR MEU CORPO
          </button>
          
          <div className="mt-6">
            <p className="text-sm text-gray-500">🔒 Compra segura. Receba seu acesso por e-mail imediatamente após a confirmação do pagamento.</p>
          </div>
        </div>
      </section>
    </main>
  );
}