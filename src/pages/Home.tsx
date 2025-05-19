import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Monitor, Smartphone, ShoppingBag } from 'lucide-react';
import ParticleBackground from '../components/ParticleBackground';
import SectionHeading from '../components/SectionHeading';
import SEO from '../components/SEO';

const plans = [
  {
    icon: <Monitor className="text-neon-green" size={36} />,
    title: 'Websites WordPress',
    description: 'Sites institucionais, landing pages e lojas virtuais com WordPress, Elementor Pro e WooCommerce. Gestão fácil, design moderno e performance.',
    price: 'A partir de R$ 1.000',
    link: '/services',
    button: 'Ver planos WordPress',
  },
  {
    icon: <Smartphone className="text-neon-blue" size={36} />,
    title: 'Websites Modernos',
    description: 'Projetos sob medida, landing pages de alta conversão, sistemas e painéis administrativos desenvolvidos com tecnologias como React e Next.js. Foco em resultado, integração e automação.',
    price: 'A partir de R$ 1.800',
    link: '/servicos',
    button: 'Ver planos Modernos',
  },
  {
    icon: <ShoppingBag className="text-neon-purple" size={36} />,
    title: 'Lojas Shopify',
    description: 'Sua loja pronta para vender, com design profissional, integração de pagamentos, automação e suporte real. Ideal para escalar vendas.',
    price: 'A partir de R$ 1.500',
    link: '/shopify',
    button: 'Ver planos Shopify',
  },
];

const benefits = [
  'Especialistas em WordPress, Elementor Pro, WooCommerce e Shopify',
  'Design moderno, responsivo e otimizado para conversão',
  'Parcelamento em até 3x sem juros ou 12x com juros',
  'Entrega rápida e suporte humanizado',
  'SEO técnico e integração com marketing',
  'Treinamento e autonomia para o cliente',
];

const Home: React.FC = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <>
      <SEO
        title="HDEV Solutions | Criação de Sites, Lojas Virtuais e Sistemas em WordPress, Shopify e React"
        description="Desenvolvimento de websites, lojas virtuais, landing pages e sistemas sob medida. Especialistas em WordPress, Elementor Pro, WooCommerce, Shopify e React. Performance, design e resultado para seu negócio."
        canonical="https://hdevsolutions.com.br/"
        image="/og-image.png"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "HDEV Solutions",
          "url": "https://hdevsolutions.com.br/",
          "logo": "https://hdevsolutions.com.br/og-image.png",
          "sameAs": [
            "https://www.instagram.com/hdevsolutions/"
          ]
        }}
      />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <ParticleBackground />
        <div className="container">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="heading-xl mb-6">
              Soluções digitais <span className="text-neon-green">profissionais</span> para seu negócio crescer
            </h1>
            <p className="subheading mb-8">
              Websites, lojas virtuais e sistemas modernos com WordPress, Shopify e as melhores tecnologias do mercado. Gestão fácil, design de alto impacto e suporte real.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.a 
                href="#planos" 
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Conheça nossos planos
              </motion.a>
              <motion.a 
                href="/contact" 
                className="btn btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Fale com um especialista
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Planos Resumidos Section */}
      <section id="planos" className="section bg-gray-950">
        <div className="container">
          <SectionHeading 
            title="Nossos Planos"
            subtitle="Escolha a solução ideal para o seu objetivo. Tecnologia, design e resultado em todos os projetos."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 items-end">
            {plans.map((plan, idx) => (
              <motion.div
                key={plan.title}
                className="card card-hover flex flex-col h-full text-left"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="flex items-center mb-4">{plan.icon}<span className="ml-3 text-2xl font-bold text-neon-green">{plan.title}</span></div>
                <p className="text-gray-300 mb-2">{plan.description}</p>
                <p className="text-lg font-semibold text-neon-green mb-6">{plan.price}</p>
                <div className="mt-auto flex justify-center w-full">
                  <a href={plan.link} className="btn btn-primary w-full max-w-xs text-center">
                    {plan.button}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios Section */}
      <section className="section">
        <div className="container">
          <SectionHeading 
            title="Por que escolher a HDEV Solutions?"
            subtitle="Tecnologia, transparência e suporte para o seu sucesso digital."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex items-start bg-gray-900 rounded-lg p-6 shadow-md">
                <ArrowRight className="text-neon-green mt-1 flex-shrink-0" size={24} />
                <span className="ml-4 text-gray-300 text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,_#00FF9F_25%,_transparent_25%,_transparent_50%,_#00FF9F_50%,_#00FF9F_75%,_transparent_75%,_transparent)] bg-[length:6px_6px]" />
        </div>
        <div className="container relative">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="heading-lg mb-6">
              Pronto para transformar sua presença digital?
            </h2>
            <p className="subheading">
              Fale agora com um especialista e descubra como podemos criar o projeto ideal para o seu negócio.
            </p>
            <motion.a 
              href="/contact" 
              className="btn btn-primary mt-8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Solicitar orçamento personalizado
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;