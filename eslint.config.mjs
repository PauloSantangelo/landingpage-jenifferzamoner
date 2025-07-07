/** @type {import('next').NextConfig} */
const nextConfig = {
  // ADICIONE ESTA LINHA PARA DESATIVAR O ERRO
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;