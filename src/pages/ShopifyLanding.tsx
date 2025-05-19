import React from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Lock, 
  Palette, 
  Target,
  ShoppingBag,
  Zap,
  CheckCircle,
  MessageCircle,
  Users,
  ArrowRight
} from 'lucide-react';
import ParticleBackground from '../components/ParticleBackground';
import SEO from '../components/SEO';

const ShopifyLanding: React.FC = () => {
  const features = [
    {
      icon: <Rocket className="text-neon-green" size={32} />,
      title: 'Performance desde o primeiro clique',
      description: 'Loja com estrutura pensada para escalar, captar leads e converter visitantes.'
    },
    {
      icon: <Lock className="text-neon-blue" size={32} />,
      title: 'Segurança e estabilidade',
      description: 'Com a robustez da Shopify, somada à configuração técnica correta e otimizações.'
    },
    {
      icon: <Palette className="text-neon-purple" size={32} />,
      title: 'Personalização real',
      description: 'Sua loja com identidade visual alinhada ao seu negócio, sem templates genéricos mal adaptados.'
    },
    {
      icon: <Target className="text-neon-green" size={32} />,
      title: 'Estratégia embutida',
      description: 'Cada plano é estruturado com foco em vendas, usabilidade e experiência do cliente (UX).'
    }
  ];

  const plans = [
    {
      name: 'Start',
      subtitle: 'Loja Pronta para Começar',
      price: 'R$ 1.500,00',
      description: 'Para quem está iniciando e quer uma loja profissional e funcional no ar em poucos dias.',
      deliveryTime: '5 a 7 dias úteis',
      features: [
        'Instalação e configuração completa da loja Shopify',
        'Tema gratuito personalizado com sua identidade visual',
        'Cadastro de até 10 produtos com variações',
        'Integração com métodos de pagamento',
        'Configuração de frete com Correios e Melhor Envio',
        'Vinculação de domínio personalizado',
        'Páginas institucionais',
        'Treinamento básico em vídeo'
      ]
    },
    {
      name: 'Pro',
      subtitle: 'Loja Moderna e Otimizada',
      price: 'R$ 2.500,00',
      description: 'Para quem já vende ou quer crescer com uma loja profissional, atrativa e com funcionalidades de conversão.',
      deliveryTime: '7 a 10 dias úteis',
      features: [
        'Tudo do Plano Start +',
        'Tema profissional (pago) com design moderno',
        'Cadastro de até 30 produtos com coleções',
        'Banners promocionais personalizados',
        'Apps de avaliações e recuperação de carrinho',
        'Pop-ups de urgência e conversão',
        'Otimização básica de SEO',
        'Pixel do Facebook + Google Analytics'
      ],
      highlight: true
    },
    {
      name: 'Performance',
      subtitle: 'Loja que Converte e Escala',
      price: 'R$ 4.500,00',
      description: 'Para marcas que desejam um projeto completo, com branding, estratégia, automação e escalabilidade.',
      deliveryTime: '10 a 20 dias úteis',
      features: [
        'Tudo do Plano Pro +',
        'Identidade visual completa',
        'Cadastro de até 100 produtos',
        'Landing page exclusiva para campanhas',
        'Páginas de upsell e cross-sell',
        'Automações de email marketing',
        'Otimização avançada para mobile',
        'Suporte completo por 30 dias'
      ]
    }
  ];

  const faqs = [
    {
      question: 'O plano já inclui domínio e hospedagem?',
      answer: 'A hospedagem é gratuita dentro da plataforma Shopify. O domínio pode ser configurado (caso já tenha) ou orientamos como adquirir.'
    },
    {
      question: 'Terei autonomia para gerenciar minha loja depois?',
      answer: 'Sim! Todos os planos incluem treinamento e documentação em vídeo e/ou PDF para que você possa atualizar produtos, preços e banners com autonomia.'
    },
    {
      question: 'Vocês ajudam com marketing e vendas?',
      answer: 'Sim, oferecemos serviços de tráfego pago, consultoria e automações personalizadas (plano Performance ou adicionais).'
    },
    {
      question: 'Posso parcelar o pagamento do projeto?',
      answer: 'Sim! Facilitamos o pagamento em até 3 vezes sem juros via PIX ou cartão (consultar condições).'
    },
    {
      question: 'Não entendo nada de loja virtual, vou conseguir acompanhar?',
      answer: 'Sim! Nosso processo é simples e guiado. Explicamos passo a passo, com vídeos e suporte durante todo o projeto.'
    }
  ];

  return (
    <div className="pt-20">
      <SEO
        title="Criação de Loja Shopify Profissional | HDEV Solutions"
        description="Desenvolvimento de lojas virtuais Shopify com design profissional, integração de pagamentos, automação e suporte real. Soluções completas para vender mais online."
        canonical="https://hdevsolutions.com.br/shopify"
        image="/og-image.png"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Criação de Loja Shopify",
          "provider": {
            "@type": "Organization",
            "name": "HDEV Solutions",
            "url": "https://hdevsolutions.com.br/"
          },
          "areaServed": "Brasil",
          "description": "Desenvolvimento de lojas virtuais Shopify com design profissional, integração de pagamentos, automação e suporte real. Soluções completas para vender mais online."
        }}
      />
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center bg-gradient-to-b from-gray-950 to-black overflow-hidden">
        <ParticleBackground />
        <div className="container relative">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="heading-xl mb-6">
              Transformamos sua ideia em uma{' '}
              <span className="text-neon-green">loja profissional pronta para vender</span>
            </h1>
            <p className="subheading mb-8 mx-auto">
              Criação de e-commerce na Shopify com planos completos, suporte real e entrega rápida para quem quer vender online com resultado.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.a 
                href="#plans" 
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Quero minha loja Shopify
              </motion.a>
              <motion.a 
                href="#features" 
                className="btn btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Por que nos escolher?
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section bg-gray-950">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="heading-lg mb-6">
              Você merece mais do que uma{' '}
              <span className="text-neon-green">loja genérica</span>
            </h2>
            <p className="text-gray-300">
              Nossa equipe especializada garante que sua loja tenha tudo necessário para se destacar e vender mais.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="card card-hover text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="plans" className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="heading-lg mb-6">
              Escolha o plano ideal para seu{' '}
              <span className="text-neon-green">momento</span>
            </h2>
            <p className="text-gray-300">
              Soluções completas para diferentes estágios do seu negócio digital.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                className={`card relative overflow-hidden ${
                  plan.highlight ? 'border-neon-green shadow-neon-hover' : 'card-hover'
                } flex flex-col h-full`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {plan.highlight && (
                  <div className="absolute -right-8 top-4 rotate-45 bg-neon-green text-black px-8 py-1 text-sm font-semibold">
                    Mais Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex flex-col items-center text-center">
                    <p className="text-gray-400 mb-2">{plan.subtitle}</p>
                    <p className="text-3xl font-bold text-neon-green mb-2">{plan.price}</p>
                    <p className="text-sm text-gray-400 mb-2">Entrega em {plan.deliveryTime}</p>
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
                </div>
                <p className="text-gray-300 mb-6 text-center">
                  {plan.description}
                </p>
                <ul className="space-y-3 mb-8 text-left flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-gray-300">
                      <CheckCircle className="text-neon-green mt-1 mr-2 flex-shrink-0" size={20} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex justify-center w-full">
                  <motion.a 
                    href={`/contact?subject=${encodeURIComponent('Loja Shopify ' + plan.name)}`}
                    className="btn btn-primary w-full max-w-xs text-left"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Solicitar proposta
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gray-950">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-lg text-center mb-12">
              Dúvidas <span className="text-neon-green">Frequentes</span>
            </h2>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="card card-hover"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                  <p className="text-gray-400">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,_#00FF9F_25%,_transparent_25%,_transparent_50%,_#00FF9F_50%,_#00FF9F_75%,_transparent_75%,_transparent)] bg-[length:6px_6px]"></div>
        </div>
        
        <div className="container relative">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-lg mb-6">
              Vamos transformar sua ideia em uma{' '}
              <span className="text-neon-green">loja que vende de verdade?</span>
            </h2>
            <p className="subheading mb-8">
              Escolha o plano ideal para o seu momento e comece hoje com quem entende de negócios digitais.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.a 
                href="/contact" 
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Solicitar proposta personalizada
              </motion.a>
              <motion.button
                onClick={() => window.open('https://wa.me/5500000000000', '_blank')}
                className="btn btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="mr-2" size={18} />
                Falar no WhatsApp
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ShopifyLanding;