import { useState } from 'react';
import { ArrowRight, CheckCircle, Star } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import SolutionModal from '@/components/SolutionModal';

/**
 * PÁGINA: Home (Página Inicial)
 * 
 * Função: Página principal do site com todas as seções
 * 
 * SEÇÕES:
 * 1. Hero Section - Apresentação principal
 * 2. Sobre o Sistema - Descrição dos serviços
 * 3. Provas Sociais - Depoimentos de clientes
 * 4. Soluções - Cards dos produtos
 * 5. Segmentos - Setores atendidos
 * 6. CTA Final - Chamada para ação
 * 
 * COMO EDITAR:
 * 1. Para alterar textos: procure pela seção desejada
 * 2. Para alterar cores: edite client/src/index.css
 * 3. Para adicionar/remover itens: procure por "ALTERAR AQUI"
 */

// ========================================
// NÚMERO DO WHATSAPP - ALTERAR AQUI
// ========================================
const WHATSAPP_NUMERO = "5575983349174";

interface Solution {
  id: string;
  name: string;
  price: string;
  description: string;
  benefits: string[];
  modules?: string[];
  whatsappLink: string;
}

export default function Home() {
  const [selectedSolution, setSelectedSolution] = useState<Solution | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (solution: Solution) => {
    setSelectedSolution(solution);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSolution(null);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* HEADER - Menu fixo */}
      <Header />

      {/* ========================================
          SEÇÃO 1: HERO SECTION
          Apresentação principal com CTA
          ======================================== */}
      <section id="inicio" className="pt-20 pb-20 bg-gradient-to-br from-white to-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* COLUNA 1: Texto */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Soluções em Software para Transformar seu Negócio
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                A G Conecta Sistemas oferece soluções inovadoras e personalizadas para otimizar seus processos e aumentar a produtividade da sua empresa.
              </p>
              
              {/* LISTA DE BENEFÍCIOS */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-orange-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Soluções personalizadas para seu negócio</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-orange-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Suporte técnico especializado</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-orange-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Tecnologia de ponta e segura</span>
                </div>
              </div>

              {/* BOTÃO CTA */}
              <a
                href={`https://wa.me/${WHATSAPP_NUMERO}?text=Olá%20G%20Conecta!%20Gostaria%20de%20saber%20mais%20sobre%20seus%20serviços.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-orange-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-orange-700 transition-all duration-200 hover:shadow-lg"
              >
                Fale Conosco no WhatsApp
                <ArrowRight size={20} />
              </a>
            </div>

            {/* COLUNA 2: Imagem/Visual */}
            <div className="bg-gradient-to-br from-orange-100 to-blue-100 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">💼</div>
                <p className="text-gray-600 font-medium">Soluções Profissionais</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          SEÇÃO 2: SOBRE O SISTEMA
          Descrição dos serviços
          ======================================== */}
      <section id="sobre" className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Sobre Nossos Sistemas
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Desenvolvemos soluções completas em software, desde sistemas de gestão até aplicativos mobile. Cada solução é pensada para atender as necessidades específicas do seu negócio com tecnologia de ponta e suporte dedicado.
            </p>
          </div>

          {/* CARDS DE CARACTERÍSTICAS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* CARD 1 */}
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Inovação</h3>
              <p className="text-gray-600">
                Tecnologias modernas e atualizadas para manter seu negócio competitivo no mercado.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Segurança</h3>
              <p className="text-gray-600">
                Dados protegidos com as melhores práticas de segurança e criptografia.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">💪</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Suporte</h3>
              <p className="text-gray-600">
                Equipe dedicada pronta para ajudar você em qualquer momento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          SEÇÃO 3: PROVAS SOCIAIS
          Depoimentos de clientes
          ======================================== */}
      <section id="depoimentos" className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              O que Nossos Clientes Dizem
            </h2>
            <p className="text-lg text-gray-600">
              Confira os depoimentos de empresas que confiam em nossas soluções
            </p>
          </div>

          {/* DEPOIMENTOS - ALTERAR AQUI */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* DEPOIMENTO 1 */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-orange-600 text-orange-600" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "O sistema da G Conecta transformou a forma como gerenciamos nossa loja. Excelente atendimento e suporte!"
              </p>
              <p className="font-bold text-gray-900">Rildo</p>
              <p className="text-sm text-gray-600">RayRil Iphone </p>
            </div>

            {/* DEPOIMENTO 2 */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-orange-600 text-orange-600" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "O sistema da G Conecta é muito bom e facilitou muito nossa rotina. Hoje consigo controlar tudo sem complicação."
              </p>
              <p className="font-bold text-gray-900">Ricardo e Carlos</p>
              <p className="text-sm text-gray-600">Supermecado Fam</p>
            </div>

            {/* DEPOIMENTO 3 */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-orange-600 text-orange-600" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "O Suporte técnico da G Conecta é muito bom, resolvem tudo em pouco tempo."
              </p>
              <p className="font-bold text-gray-900">Alex</p>
              <p className="text-sm text-gray-600">Loja Alex Variedades</p>
            </div>
             {/* DEPOIMENTO 4 */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-orange-600 text-orange-600" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "O sistema é rápido, fácil de entender e funciona perfeitamente para meu negócio."
              </p>
              <p className="font-bold text-gray-900">Fabio Lobo</p>
              <p className="text-sm text-gray-600">Farmacia Max Popular</p>
            </div>
             {/* DEPOIMENTO 5 */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-orange-600 text-orange-600" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Criei um Site para com a GConecta, e ficou simplesmente incrivel, meus alunos usam como revisão, eles amaram."
              </p>
              <p className="font-bold text-gray-900">Eduardo Santos</p>
              <p className="text-sm text-gray-600">Professor de Matematica</p>
            </div>
             {/* DEPOIMENTO 6 */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-orange-600 text-orange-600" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Escolher o aplicativo da Gconecta foi a melhor coisa que fiz, agora não tenho mais problemas com agendademtos."
              </p>
              <p className="font-bold text-gray-900">Pedro Soares</p>
              <p className="text-sm text-gray-600">Barbearia Soares</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          SEÇÃO 4: SOLUÇÕES
          Cards dos produtos
          ======================================== */}
      <section id="solucoes" className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Nossas Soluções
            </h2>
            <p className="text-lg text-gray-600">
              Escolha a solução ideal para seu negócio
            </p>
          </div>

          {/* PRODUTOS - ALTERAR AQUI */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* PRODUTO 1: G Pro */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">G Pro</h3>
                <p className="text-orange-100">Sistema completo de gestão</p>
              </div>
              <div className="p-6">
                <p className="text-3xl font-bold text-gray-900 mb-2">
                  A partir de <span className="text-orange-600">R$ 119,99</span>
                </p>
                <p className="text-gray-600 mb-6">
                  Sistema profissional com todos os recursos para gerenciar sua empresa.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle size={16} className="text-orange-600" />
                    Gestão completa
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle size={16} className="text-orange-600" />
                    Relatórios avançados
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle size={16} className="text-orange-600" />
                    Suporte prioritário
                  </li>
                </ul>
                <button
                  onClick={() => openModal({
                    id: 'g-pro',
                    name: 'G Pro',
                    price: 'A partir de R$ 119,99',
                    description: 'Sistema completo de gestão',
                    benefits: ['Gestão completa', 'Relatórios avançados', 'Suporte prioritário'],
                    whatsappLink: `https://wa.me/${WHATSAPP_NUMERO}?text=Olá! Gostaria de saber mais sobre o G Pro`
                  })}
                  className="w-full bg-orange-600 text-white py-2 rounded-lg font-bold hover:bg-orange-700 transition-colors text-center cursor-pointer"
                >
                  Saiba Mais
                </button>
              </div>
            </div>

            {/* PRODUTO 2: G Slim */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">G Slim</h3>
                <p className="text-blue-100">Versão compacta e rápida</p>
              </div>
              <div className="p-6">
                <p className="text-3xl font-bold text-gray-900 mb-2">
                  A partir de <span className="text-orange-600">R$ 69,99</span>
                </p>
                <p className="text-gray-600 mb-6">
                  Solução enxuta e ágil para pequenos negócios.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle size={16} className="text-orange-600" />
                    Fácil de usar
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle size={16} className="text-orange-600" />
                    Implementação rápida
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle size={16} className="text-orange-600" />
                    Custo-benefício
                  </li>
                </ul>
                <button
                  onClick={() => openModal({
                    id: 'g-slim',
                    name: 'G Slim',
                    price: 'A partir de R$ 69,99',
                    description: 'Versão compacta e rápida',
                    benefits: ['Fácil de usar', 'Implementação rápida', 'Custo-benefício'],
                    whatsappLink: `https://wa.me/${WHATSAPP_NUMERO}?text=Olá! Gostaria de saber mais sobre o G Slim`
                  })}
                  className="w-full bg-orange-600 text-white py-2 rounded-lg font-bold hover:bg-orange-700 transition-colors text-center cursor-pointer"
                >
                  Saiba Mais
                </button>
              </div>
            </div>

            {/* PRODUTO 3: G Micro */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-r from-orange-400 to-orange-500 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">G Micro</h3>
                <p className="text-orange-100">Solução básica e acessível</p>
              </div>
              <div className="p-6">
                <p className="text-3xl font-bold text-gray-900 mb-2">
                  A partir de <span className="text-orange-600">R$ 89,99</span>
                </p>
                <p className="text-gray-600 mb-6">
                  Sistema básico para começar com tecnologia.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle size={16} className="text-orange-600" />
                    Funcionalidades essenciais
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle size={16} className="text-orange-600" />
                    Preço acessível
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle size={16} className="text-orange-600" />
                    Upgrade disponível
                  </li>
                </ul>
                <button
                  onClick={() => openModal({
                    id: 'g-micro',
                    name: 'G Micro',
                    price: 'A partir de R$ 89,99',
                    description: 'Solução básica e acessível',
                    benefits: ['Funcionalidades essenciais', 'Preço acessível', 'Upgrade disponível'],
                    whatsappLink: `https://wa.me/${WHATSAPP_NUMERO}?text=Olá! Gostaria de saber mais sobre o G Micro`
                  })}
                  className="w-full bg-orange-600 text-white py-2 rounded-lg font-bold hover:bg-orange-700 transition-colors text-center cursor-pointer"
                >
                  Saiba Mais
                </button>
              </div>
            </div>

            {/* PRODUTO 4: G Web */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">G Web</h3>
                <p className="text-blue-100">Solução web moderna</p>
              </div>
              <div className="p-6">
                <p className="text-3xl font-bold text-gray-900 mb-2">
                  A partir de <span className="text-orange-600">R$ 59,99</span>
                </p>
                <p className="text-gray-600 mb-6">
                  Plataforma web para acessar de qualquer lugar.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle size={16} className="text-orange-600" />
                    Acesso remoto
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle size={16} className="text-orange-600" />
                    Sincronização em tempo real
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle size={16} className="text-orange-600" />
                    Interface intuitiva
                  </li>
                </ul>
                <button
                  onClick={() => openModal({
                    id: 'g-web',
                    name: 'G Web',
                    price: 'A partir de R$ 59,99',
                    description: 'Solução web moderna',
                    benefits: ['Acesso remoto', 'Sincronização em tempo real', 'Interface intuitiva'],
                    whatsappLink: `https://wa.me/${WHATSAPP_NUMERO}?text=Olá! Gostaria de saber mais sobre o G Web`
                  })}
                  className="w-full bg-orange-600 text-white py-2 rounded-lg font-bold hover:bg-orange-700 transition-colors text-center cursor-pointer"
                >
                  Saiba Mais
                </button>
              </div>
            </div>

            {/* PRODUTO 5: G Jatus */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">G Jatus</h3>
                <p className="text-green-100">App iOS e Android</p>
              </div>
              <div className="p-6">
                <p className="text-3xl font-bold text-gray-900 mb-2">
                  <span className="text-orange-600">R$ 59,99</span>
                </p>
                <p className="text-gray-600 mb-6">
                  Aplicativo mobile para agendamentos.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle size={16} className="text-orange-600" />
                    iOS e Android
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle size={16} className="text-orange-600" />
                    Agendamentos automáticos
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle size={16} className="text-orange-600" />
                    Notificações push
                  </li>
                </ul>
                <button
                  onClick={() => openModal({
                    id: 'g-jatus',
                    name: 'G Jatus',
                    price: 'R$ 59,99',
                    description: 'App iOS e Android',
                    benefits: ['iOS e Android', 'Agendamentos automáticos', 'Notificações push'],
                    whatsappLink: `https://wa.me/${WHATSAPP_NUMERO}?text=Olá! Gostaria de saber mais sobre o G Jatus`
                  })}
                  className="w-full bg-orange-600 text-white py-2 rounded-lg font-bold hover:bg-orange-700 transition-colors text-center cursor-pointer"
                >
                  Saiba Mais
                </button>
              </div>
            </div>

            {/* PRODUTO 6: G Exclusive */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">G Exclusive</h3>
                <p className="text-purple-100">Soluções personalizadas</p>
              </div>
              <div className="p-6">
                <p className="text-3xl font-bold text-gray-900 mb-2">
                  A partir de <span className="text-orange-600">R$ 199,99</span>
                </p>
                <p className="text-gray-600 mb-6">
                  Criação de sites e apps exclusivos.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle size={16} className="text-orange-600" />
                    Desenvolvimento customizado
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle size={16} className="text-orange-600" />
                    Design exclusivo
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle size={16} className="text-orange-600" />
                    Suporte dedicado
                  </li>
                </ul>
                <button
                  onClick={() => openModal({
                    id: 'g-exclusive',
                    name: 'G Exclusive',
                    price: 'A partir de R$ 199,99',
                    description: 'Soluções personalizadas',
                    benefits: ['Desenvolvimento customizado', 'Design exclusivo', 'Suporte dedicado'],
                    whatsappLink: `https://wa.me/${WHATSAPP_NUMERO}?text=Olá! Gostaria de saber mais sobre o G Exclusive`
                  })}
                  className="w-full bg-orange-600 text-white py-2 rounded-lg font-bold hover:bg-orange-700 transition-colors text-center cursor-pointer"
                >
                  Saiba Mais
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          SEÇÃO 5: SEGMENTOS
          Setores atendidos
          ======================================== */}
      <section id="segmentos" className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Segmentos Atendidos
            </h2>
            <p className="text-lg text-gray-600">
              Soluções para diversos tipos de negócio
            </p>
          </div>

          {/* SEGMENTOS - ALTERAR AQUI */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🏪</div>
              <h3 className="font-bold text-gray-900 mb-1">Varejo</h3>
              <p className="text-sm text-gray-600">Lojas e comércios</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🏥</div>
              <h3 className="font-bold text-gray-900 mb-1">Saúde</h3>
              <p className="text-sm text-gray-600">Clínicas e consultórios</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🏢</div>
              <h3 className="font-bold text-gray-900 mb-1">Empresas</h3>
              <p className="text-sm text-gray-600">Gestão corporativa</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🎓</div>
              <h3 className="font-bold text-gray-900 mb-1">Educação</h3>
              <p className="text-sm text-gray-600">Escolas e cursos</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🏨</div>
              <h3 className="font-bold text-gray-900 mb-1">Hospedagem</h3>
              <p className="text-sm text-gray-600">Hotéis e pousadas</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🍽️</div>
              <h3 className="font-bold text-gray-900 mb-1">Alimentação</h3>
              <p className="text-sm text-gray-600">Restaurantes e bares</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">💇</div>
              <h3 className="font-bold text-gray-900 mb-1">Beleza</h3>
              <p className="text-sm text-gray-600">Salões e spas</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">🚗</div>
              <h3 className="font-bold text-gray-900 mb-1">Automotivo</h3>
              <p className="text-sm text-gray-600">Oficinas e concessionárias</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          SEÇÃO 6: CTA FINAL
          Chamada para ação
          ======================================== */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para Transformar seu Negócio?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-orange-100">
            Entre em contato conosco agora e descubra como nossas soluções podem ajudar sua empresa a crescer.
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMERO}?text=Olá%20G%20Conecta!%20Gostaria%20de%20saber%20mais%20sobre%20seus%20serviços.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-orange-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all duration-200 hover:shadow-lg"
          >
            Fale Conosco Agora
            <ArrowRight size={20} />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />

      {/* MODAL - Exibido quando isModalOpen é true */}
      {selectedSolution && (
        <SolutionModal
          isOpen={isModalOpen}
          onClose={closeModal}
          solution={selectedSolution}
        />
      )}

      {/* CHATBOT FLUTUANTE */}
      <ChatBot />
    </div>
  );
}
