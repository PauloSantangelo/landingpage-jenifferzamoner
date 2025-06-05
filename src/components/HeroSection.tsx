'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function HeroSection() {
  const buttons = [
    {
      id: 1,
      title: "💪 Treino Personalizado",
      description: "Plano de treino adaptado para seus objetivos",
      color: "from-green-500 to-green-600",
      borderColor: "border-green-400",
      shadowColor: "shadow-green-500/30"
    },
    {
      id: 2,
      title: "🏋️ Consultoria Completa",
      description: "Acompanhamento profissional online",
      color: "from-blue-500 to-blue-600",
      borderColor: "border-blue-400",
      shadowColor: "shadow-blue-500/30"
    },
    {
      id: 3,
      title: "⭐ Transformações",
      description: "Veja os resultados reais dos alunos",
      color: "from-purple-500 to-purple-600",
      borderColor: "border-purple-400",
      shadowColor: "shadow-purple-500/30"
    },
    {
      id: 4,
      title: "🎯 Personal Presencial",
      description: "Treinamento individual em Botucatu",
      color: "from-orange-500 to-orange-600",
      borderColor: "border-orange-400",
      shadowColor: "shadow-orange-500/30"
    }
  ]

  return (
    <>
      {/* VERSÃO DESKTOP - hidden em telas pequenas */}
      <section
        className="hidden sm:flex relative w-full min-h-screen bg-black text-white flex-col items-center overflow-hidden"
        style={{
          backgroundImage: "url('/background-superior.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* LOGO CENTRALIZADO */}
        <div className="pt-6 lg:pt-8 z-30">
          <Image
            src="/logo.png"
            alt="Jeniffer Zamoner Logo"
            width={200}
            height={80}
            className="w-[100px] md:w-[120px] lg:w-[140px] mx-auto h-auto"
          />
        </div>

        {/* IMAGEM DA JENIFFER */}
        <div className="relative z-10 mt-4 md:mt-6 flex justify-center w-full">
          <Image
            src="/jeniffer-image.png"
            alt="Jeniffer Zamoner"
            width={600}
            height={900}
            className="w-[280px] md:w-[360px] lg:w-[380px] xl:w-[420px] h-auto object-contain"
            priority
          />

          {/* CARD DESKTOP */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="
              absolute bottom-[-80px] md:bottom-[-100px] lg:bottom-[-120px] 
              left-[35%] z-20
              w-[100%] max-w-[480px]
            "
          >
            <div className="
              relative bg-black/90 backdrop-blur-sm text-white text-center
              px-6 py-4 lg:px-8 lg:py-5 rounded-2xl
              border-2 border-green-400 shadow-2xl shadow-green-500/20
            ">
              <div className="
                absolute inset-0 rounded-2xl
                bg-gradient-to-r from-transparent via-green-400/10 to-transparent
              "></div>
              
              <div className="relative z-10">
                <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 text-green-400">
                  Seus resultados a um clique!
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-gray-100">
                  Escolha abaixo o que mais faz sentido para você hoje!
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SEÇÃO DE BOTÕES DESKTOP - Segunda página */}
      <section 
        className="hidden sm:block relative w-full bg-black text-white py-16 lg:py-20 -mt-1"
        style={{
          backgroundImage: "url('/background-inferior.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-green-400">
              Como posso te ajudar?
            </h2>
            <p className="text-lg text-gray-300">
              Escolha a opção que melhor se adequa aos seus objetivos
            </p>
          </div>

          {/* BOTÕES DESKTOP EM GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {buttons.map((button) => (
              <motion.button
                key={button.id}
                whileHover={{ scale: 1.03, y: -4 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className={`
                  relative overflow-hidden group
                  bg-black/80 backdrop-blur-sm text-white
                  px-6 py-6 lg:px-8 lg:py-8 rounded-2xl
                  border-2 ${button.borderColor} ${button.shadowColor} shadow-xl
                  hover:shadow-2xl hover:bg-black/90 transition-all duration-300
                `}
              >
                <div className={`
                  absolute inset-0 rounded-2xl opacity-10 group-hover:opacity-20 transition-opacity
                  bg-gradient-to-br ${button.color}
                `}></div>
                
                <div className="relative z-10 text-center">
                  <h3 className="text-xl lg:text-2xl font-bold mb-3">
                    {button.title}
                  </h3>
                  <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
                    {button.description}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* VERSÃO MOBILE - visível apenas em telas pequenas */}
      <section
        className="sm:hidden relative w-full min-h-screen bg-black text-white flex flex-col items-center overflow-hidden pb-8"
        style={{
          backgroundImage: "url('/background-mobile.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* LOGO MOBILE */}
        <div className="pt-4 z-30">
          <Image
            src="/logo.png"
            alt="Jeniffer Zamoner Logo"
            width={200}
            height={80}
            className="w-[80px] mx-auto h-auto"
          />
        </div>

        {/* IMAGEM DA JENIFFER MOBILE */}
        <div className="relative z-10 mt-2 flex justify-center w-full px-4">
          <Image
            src="/jeniffer-image.png"
            alt="Jeniffer Zamoner"
            width={600}
            height={900}
            className="w-[250px] h-auto object-contain"
            priority
          />
        </div>

        {/* CARD MOBILE - FORA DA IMAGEM */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="relative z-20 w-[90%] max-w-[350px] mx-auto mt-[-10px]"
        >
          <div className="
            relative bg-black/90 backdrop-blur-sm text-white text-center
            px-4 py-3 rounded-2xl
            border-2 border-green-400 shadow-2xl shadow-green-500/20
          ">
            <div className="
              absolute inset-0 rounded-2xl
              bg-gradient-to-r from-transparent via-green-400/10 to-transparent
            "></div>
            
            <div className="relative z-10">
              <h2 className="text-base font-bold mb-2 text-green-400">
                Seus resultados a um clique!
              </h2>
              <p className="text-sm leading-relaxed text-gray-100 mb-4">
                Escolha abaixo o que mais faz sentido para você hoje!
              </p>

              {/* BOTÕES MOBILE */}
              <div className="space-y-3">
                {buttons.map((button) => (
                  <motion.button
                    key={button.id}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className={`
                      relative overflow-hidden w-full
                      bg-black/80 backdrop-blur-sm text-white
                      px-4 py-3 rounded-xl
                      border-2 ${button.borderColor} ${button.shadowColor} shadow-lg
                      hover:shadow-xl hover:bg-black/90 transition-all duration-300
                    `}
                  >
                    <div className={`
                      absolute inset-0 rounded-xl opacity-15
                      bg-gradient-to-br ${button.color}
                    `}></div>
                    
                    <div className="relative z-10 text-left">
                      <h3 className="text-sm font-bold mb-1">
                        {button.title}
                      </h3>
                      <p className="text-xs text-gray-300 leading-tight">
                        {button.description}
                      </p>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  )
}