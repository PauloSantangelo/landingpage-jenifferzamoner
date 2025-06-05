'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function HeroSection() {
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
              left-[35%] -translate-x-1/2 z-20
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

      {/* VERSÃO MOBILE - visível apenas em telas pequenas */}
      <section
        className="sm:hidden relative w-full min-h-screen bg-black text-white flex flex-col items-center overflow-hidden"
        style={{
          backgroundImage: "url('/background-superior.png')",
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
              <p className="text-sm leading-relaxed text-gray-100">
                Escolha abaixo o que mais faz sentido para você hoje!
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  )
}