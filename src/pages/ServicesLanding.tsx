import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Shield, 
  Search, 
  Scale, 
  Smartphone, 
  Workflow,
  CheckCircle,
  MessageCircle,
  Video,
  Clock,
  Users
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import SEO from '../components/SEO';

const ServicesLanding: React.FC = () => {
  const packages = [
    {
      name: 'Start',
      subtitle: 'Site Institucional Moderno',
      price: 'R$ 3.500',
      features: [
        'Até 5 páginas',
        'Design responsivo',
        'SEO técnico',
        'Integração com formulários',
        'Hospedagem não-inclusa',
        'Suporte por 3 meses'
      ]
    },
    {
      name: 'Conversão',
      subtitle: 'Landing Page',
      price: 'R$ 1.800',
      features: [
        'Página focada em conversão',
        'Integração com marketing e CRM',
        'Scripts de análise (Pixel, GA)',
        'A/B Testing',
        'Otimização contínua',
        'Relatórios de performance'
      ]
    },
    {
      name: 'Gestão',
      subtitle: 'Painel/Admin Dashboard',
      price: 'R$ 10.000',
      features: [
        'CRUD completo',
        'Integração com banco de dados',
        'Autenticação de usuários',
        'Painéis personalizados',
        'APIs RESTful',
        'Documentação técnica'
      ]
    },
    {
      name: 'MVP',
      subtitle: 'Sistema Sob Medida',
      price: 'R$ 25.000+',
      features: [
        'Front + Backend (Next + Node)',
        'Área de usuários e APIs',
        'Totalmente escalável',
        'Arquitetura moderna',
        'CI/CD e DevOps',
        'Suporte premium'
      ]
    }
  ];

  const benefits = [
    {
      icon: <Zap className="text-neon-green" size={32} />,
      title: 'Carregamento ultrarrápido',
      description: 'Sites otimizados com as melhores práticas de performance'
    },
    {
      icon: <Shield className="text-neon-blue" size={32} />,
      title: 'Código moderno e seguro',
      description: 'Desenvolvimento com as tecnologias mais atuais do mercado'
    },
    {
      icon: <Search className="text-neon-purple" size={32} />,
      title: 'SEO técnico',
      description: 'Otimização completa para melhor ranqueamento no Google'
    },
    {
      icon: <Scale className="text-neon-green" size={32} />,
      title: 'Escalável para o futuro',
      description: 'Estrutura preparada para crescer com seu negócio'
    },
    {
      icon: <Smartphone className="text-neon-blue" size={32} />,
      title: 'Design responsivo',
      description: 'Experiência perfeita em todos os dispositivos'
    },
    {
      icon: <Workflow className="text-neon-purple" size={32} />,
      title: 'Integrações avançadas',
      description: 'Conexão com n8n, WhatsApp, CRMs e outras ferramentas'
    }
  ];

  const guarantees = [
    {
      icon: <CheckCircle size={24} />,
      title: '3 meses de suporte',
      description: 'Acompanhamento dedicado após a entrega'
    },
    {
      icon: <Video size={24} />,
      title: 'Treinamento em vídeo',
      description: 'Capacitação completa para sua equipe'
    },
    {
      icon: <Clock size={24} />,
      title: 'Prazos realistas',
      description: 'Entregas pontuais e transparentes'
    },
    {
      icon: <MessageCircle size={24} />,
      title: 'Atendimento humanizado',
      description: 'Suporte consultivo via WhatsApp'
    }
  ];

  const testimonials = [
    {
      quote: "A HDEV transformou completamente nossa presença digital. O site é rápido, moderno e já está gerando resultados!",
      author: "Carlos Silva",
      role: "CEO, TechCorp",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
    },
    {
      quote: "Profissionalismo e qualidade técnica impressionantes. O painel administrativo facilitou muito nossa gestão.",
      author: "Ana Martins",
      role: "Diretora, InnovateX",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
    },
    {
      quote: "O melhor investimento que fizemos! Nossa taxa de conversão aumentou mais de 150% com a nova landing page.",
      author: "Pedro Santos",
      role: "Marketing, FutureBank",
      image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg"
    }
  ];

  return (
    <div className="pt-20">
      <SEO
        title="Desenvolvimento de Sistemas, Landing Pages e Painéis Modernos | HDEV Solutions"
        description="Sistemas sob medida, landing pages de alta conversão, painéis administrativos e integrações avançadas. Performance, segurança e tecnologia de ponta para seu negócio."
        canonical="https://hdevsolutions.com.br/servicos"
        image="/og-image.png"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Desenvolvimento de Sistemas e Landing Pages",
          "provider": {
            "@type": "Organization",
            "name": "HDEV Solutions",
            "url": "https://hdevsolutions.com.br/"
          },
          "areaServed": "Brasil",
          "description": "Sistemas sob medida, landing pages de alta conversão, painéis administrativos e integrações avançadas. Performance, segurança e tecnologia de ponta para seu negócio."
        }}
      />
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center bg-gradient-to-b from-gray-950 to-black overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,_#00FF9F_25%,_transparent_25%,_transparent_50%,_#00FF9F_50%,_#00FF9F_75%,_transparent_75%,_transparent)] bg-[length:4px_4px] animate-pulse"></div>
        </div>
        
        <div className="container relative">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="heading-xl mb-6 text-center">
              Sites modernos que geram{' '}
              <span className="text-neon-green">autoridade, performance e resultado</span>
            </h1>
            <p className="subheading mb-8 text-center mx-auto">
              Transformamos sua ideia em uma solução digital com tecnologias de ponta como React e Next.js.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.a 
                href="#packages" 
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Quero meu site agora
              </motion.a>
              <motion.a 
                href="#packages" 
                className="btn btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver planos e pacotes
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section bg-gray-950">
        <div className="container">
          <SectionHeading 
            title="Benefícios Reais"
            subtitle="Tecnologia de ponta e resultados comprovados para seu negócio"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="card card-hover text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="section">
        <div className="container">
          <SectionHeading 
            title="Nossos Pacotes"
            subtitle="Escolha o plano ideal para transformar sua presença digital"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 items-end">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                className="card card-hover relative overflow-hidden text-center flex flex-col h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {index === 2 && (
                  <div className="absolute -right-8 top-4 rotate-45 bg-neon-green text-black px-8 py-1 text-sm font-semibold">
                    Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="flex flex-col items-center text-center">
                  <p className="text-gray-400 mb-2 min-h-[48px]">{pkg.subtitle}</p>
                  <p className="text-3xl font-bold text-neon-green mb-4">{pkg.price}</p>
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
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <CheckCircle className="text-neon-green mr-2 flex-shrink-0" size={20} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex justify-center w-full">
                  <motion.a 
                    href={`/contact?subject=${encodeURIComponent(pkg.name + ' (' + pkg.subtitle + ')')}`}
                    className="btn btn-primary w-full max-w-xs"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Solicitar Orçamento Agora
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-gray-950">
        <div className="container">
          <SectionHeading 
            title="O que dizem nossos clientes"
            subtitle="Histórias reais de transformação digital"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="card card-hover text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className="w-16 h-16 rounded-full object-cover mx-auto"
                  />
                </div>
                <p className="text-gray-300 italic mb-4">"{testimonial.quote}"</p>
                <div className="text-center">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section className="section">
        <div className="container">
          <SectionHeading 
            title="Nossas Garantias"
            subtitle="Compromisso com sua satisfação e sucesso"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {guarantees.map((guarantee, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-gray-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-neon-green">
                  {guarantee.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{guarantee.title}</h3>
                <p className="text-gray-400">{guarantee.description}</p>
              </motion.div>
            ))}
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
            <h2 className="heading-lg mb-6 text-center">
              Pronto para levar sua presença digital a outro nível?
            </h2>
            <p className="subheading mb-8 text-center mx-auto">
              Agende uma consultoria gratuita e descubra como podemos transformar sua presença digital.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.a 
                href="/contact" 
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Solicitar Orçamento Agora
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

export default ServicesLanding;