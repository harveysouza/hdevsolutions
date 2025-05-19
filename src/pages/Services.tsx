import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Monitor, ShoppingBag, Smartphone, Zap } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import SEO from '../components/SEO';

const plans = [
  {
    name: 'Site Institucional',
    price: 'R$ 1.500,00',
    description: 'Ideal para empresas que buscam presença digital profissional, autoridade e facilidade de gestão.',
    features: [
      'Até 5 páginas personalizadas',
      'Design exclusivo com Elementor Pro',
      'Responsivo para todos os dispositivos',
      'Otimização SEO básica',
      'Integração com WhatsApp e redes sociais',
      'Treinamento para gestão de conteúdo',
      '3 meses de suporte',
    ],
    icon: <Monitor className="text-neon-green" size={40} />,
  },
  {
    name: 'Landing Page',
    price: 'R$ 1.250,00',
    description: 'Página única e estratégica para campanhas, lançamentos ou captação de leads, com foco total em conversão.',
    features: [
      'Design otimizado para conversão',
      'Copywriting persuasivo',
      'Formulários e automações',
      'A/B testing para otimização',
      'Integração com ferramentas de marketing',
      'Carregamento ultra-rápido',
      '3 meses de suporte',
    ],
    icon: <Smartphone className="text-neon-blue" size={40} />,
  },
  {
    name: 'One Page',
    price: 'R$ 1.000,00',
    description: 'Site moderno de página única, com seções dinâmicas e navegação fluida, perfeito para apresentar seu negócio de forma objetiva.',
    features: [
      'Design moderno com Elementor Pro',
      'Seções dinâmicas e interativas',
      'Otimização para dispositivos móveis',
      'Integração com redes sociais',
      'SEO básico otimizado',
      'Manutenção simplificada',
      '3 meses de suporte',
    ],
    icon: <Zap className="text-neon-green" size={40} />,
  },
  {
    name: 'Loja Virtual',
    price: 'R$ 2.500,00',
    description: 'E-commerce completo com WooCommerce, pronto para vender online com segurança, performance e gestão simplificada.',
    features: [
      'WooCommerce + Elementor Pro',
      'Design personalizado para e-commerce',
      'Integração com meios de pagamento',
      'Gestão de produtos e pedidos',
      'Relatórios de vendas avançados',
      'SEO otimizado para produtos',
      'Treinamento completo de gestão',
      '3 meses de suporte',
    ],
    icon: <ShoppingBag className="text-neon-purple" size={40} />,
  },
];

const benefits = [
  '100% desenvolvido em WordPress, a plataforma mais utilizada do mundo',
  'Design visual e edição fácil com Elementor Pro',
  'Para lojas virtuais, utilizamos WooCommerce, referência em e-commerce WordPress',
  'Sites rápidos, seguros e otimizados para o Google',
  'Totalmente responsivo: perfeito em qualquer dispositivo',
  'Treinamento e suporte humanizado após a entrega',
];

const Services: React.FC = () => {
  return (
    <div className="pt-20">
      <SEO
        title="Criação de Sites WordPress Profissionais | HDEV Solutions"
        description="Sites institucionais, landing pages e lojas virtuais em WordPress com Elementor Pro e WooCommerce. Design moderno, SEO, performance e suporte especializado."
        canonical="https://hdevsolutions.com.br/services"
        image="/og-image.png"
      />
      {/* Hero Section */}
      <section className="section bg-gradient-to-b from-gray-950 to-black text-center">
        <div className="container">
          <SectionHeading
            title="Nossos Serviços em WordPress"
            subtitle="Soluções digitais sob medida para sua empresa, com tecnologia, performance e design de alto padrão."
            centered
            light
          />
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mt-4">
            Todos os nossos serviços são desenvolvidos com <span className="text-neon-green font-semibold">WordPress</span> e <span className="text-neon-green font-semibold">Elementor Pro</span>. Para lojas virtuais, utilizamos também <span className="text-neon-green font-semibold">WooCommerce</span>, garantindo flexibilidade, facilidade de gestão e resultados reais para o seu negócio.
          </p>
        </div>
      </section>

      {/* Planos Section */}
      <section className="section">
        <div className="container">
          <SectionHeading
            title="Planos e Soluções"
            subtitle="Escolha o plano ideal para o seu objetivo. Todos incluem tecnologia de ponta, suporte e treinamento."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 items-end">
            {plans.map((plan, idx) => (
              <motion.div
                key={plan.name}
                className="card card-hover relative overflow-hidden text-center bg-gray-950 border border-gray-900 rounded-xl p-8 shadow-lg hover:border-neon-green transition-all flex flex-col h-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="flex justify-center mb-4">{plan.icon}</div>
                <h3 className="text-2xl font-bold mb-2 text-neon-green">{plan.name}</h3>
                <div className="flex flex-col items-center text-center">
                  <p className="text-gray-400 mb-2 min-h-[48px]">{plan.description}</p>
                  <p className="text-3xl font-bold text-neon-green mb-4">{plan.price}</p>
                  {/* Formas de Pagamento - SVGs inline */}
                  <div className="flex items-center justify-center gap-4 mb-2">
                    {/* Pix SVG oficial */}
                    <svg width="36" height="36" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="12" fill="#00E676"/><path d="M24 14L34 24L24 34L14 24L24 14Z" fill="white"/></svg>
                    {/* Boleto SVG simplificado */}
                    <svg width="36" height="36" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="12" fill="#1976D2"/><rect x="14" y="20" width="20" height="12" rx="2" fill="white"/><rect x="18" y="24" width="12" height="2" rx="1" fill="#1976D2"/></svg>
                    {/* Cartão de Crédito SVG */}
                    <svg width="36" height="36" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="12" fill="#FFC107"/><rect x="14" y="18" width="20" height="12" rx="2" fill="white"/><rect x="18" y="22" width="12" height="2" rx="1" fill="#FFC107"/><rect x="18" y="26" width="8" height="2" rx="1" fill="#FFC107"/></svg>
                  </div>
                  <p className="text-gray-400 text-xs mb-4">Parcelamos em até <span className="text-neon-green font-semibold">3x sem juros</span> ou até <span className="text-neon-green font-semibold">12x com juros</span> no cartão de crédito.</p>
                </div>
                <ul className="space-y-3 mb-8 text-left flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <CheckCircle className="text-neon-green mr-2 flex-shrink-0" size={20} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex justify-center w-full">
                  <motion.a
                    href={`/contact?subject=${encodeURIComponent(plan.name)}`}
                    className="btn btn-primary w-full max-w-xs"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Solicitar orçamento
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios Section */}
      <section className="section bg-gray-950">
        <div className="container">
          <SectionHeading
            title="Por que escolher nossos serviços?"
            subtitle="Tecnologia, transparência e suporte para o seu sucesso digital."
            centered
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex items-start bg-gray-900 rounded-lg p-6 shadow-md">
                <CheckCircle className="text-neon-green mt-1 flex-shrink-0" size={24} />
                <span className="ml-4 text-gray-300 text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-gray-900 to-black text-center">
        <div className="container">
          <SectionHeading
            title="Fale com um especialista"
            subtitle="Não encontrou o que procura? Desenvolvemos soluções personalizadas para qualquer necessidade digital."
            centered
            light
          />
          <motion.a
            href="/contact"
            className="btn btn-primary mt-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Solicitar orçamento personalizado
          </motion.a>
        </div>
      </section>
    </div>
  );
};

export default Services;