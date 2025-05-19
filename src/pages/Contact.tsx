import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, MessageSquare, Phone, MapPin } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import SEO from '../components/SEO';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Envia os dados para o webhook do Make
    try {
      await fetch('https://hook.us2.make.com/hkh84px577hcym47zid00qprx9wq37hk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
    } catch (error) {
      // Você pode tratar erros aqui, se quiser
      console.error('Erro ao enviar para o webhook:', error);
    }

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  const contactInfo = [
    {
      icon: <MessageSquare className="text-neon-green" size={24} />,
      title: 'Email',
      info: 'solutionshdev@gmail.com'
    },
    {
      icon: <Phone className="text-neon-blue" size={24} />,
      title: 'Telefone',
      info: '+55 (16) 99722-3968'
    },
    {
      icon: <MapPin className="text-neon-purple" size={24} />,
      title: 'Endereço',
      info: 'Ribeirão Preto, SP - Brasil'
    }
  ];

  const planOptions = [
    {
      label: 'Websites WordPress',
      options: [
        'Site Institucional',
        'Landing Page',
        'One Page',
        'Loja Virtual',
      ]
    },
    {
      label: 'Lojas Shopify',
      options: [
        'Loja Shopify Start',
        'Loja Shopify Pro',
        'Loja Shopify Performance',
      ]
    },
    {
      label: 'Websites Modernos / Sistemas',
      options: [
        'Start (Site Institucional Moderno)',
        'Conversão (Landing Page)',
        'Gestão (Painel/Admin Dashboard)',
        'MVP (Sistema Sob Medida)',
      ]
    },
    {
      label: 'Outro',
      options: [
        'Outro',
      ]
    }
  ];

  // Seleção automática do plano via query string
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const subject = params.get('subject');
    if (subject) {
      setFormData(prev => ({ ...prev, subject }));
    }
  }, []);

  return (
    <div className="pt-20">
      <SEO
        title="Fale com a HDEV Solutions | Orçamento e Contato"
        description="Entre em contato com a HDEV Solutions para solicitar orçamento, tirar dúvidas ou agendar uma consultoria. Atendimento rápido e especializado."
        canonical="https://hdev.solutions/contact"
        image="/og-image.png"
      />
      {/* Contact Hero */}
      <section className="section bg-gray-950">
        <div className="container">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading 
              title="Entre em Contato"
              subtitle="Estamos prontos para transformar suas ideias em soluções digitais de sucesso."
              centered
              light
            />
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="heading-md mb-6">Vamos conversar</h3>
              <p className="text-gray-300 mb-8">
                Estamos ansiosos para discutir seu projeto e encontrar a melhor solução para suas necessidades. Seja um website, landing page, e-commerce ou automação, estamos aqui para ajudar.
              </p>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-gray-900 p-3 rounded-lg mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-gray-400">{item.info}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12">
                <h4 className="text-xl font-semibold mb-4">Siga-nos nas redes sociais</h4>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="bg-gray-900 p-3 rounded-lg text-white hover:text-neon-green transition-colors"
                    aria-label="Facebook"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="bg-gray-900 p-3 rounded-lg text-white hover:text-neon-green transition-colors"
                    aria-label="Twitter"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="bg-gray-900 p-3 rounded-lg text-white hover:text-neon-green transition-colors"
                    aria-label="Instagram"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="bg-gray-900 p-3 rounded-lg text-white hover:text-neon-green transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
            
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-gray-900 rounded-lg p-6 md:p-8 border border-gray-800">
                <h3 className="heading-md mb-6">Envie sua mensagem</h3>
                
                {isSubmitted ? (
                  <motion.div 
                    className="bg-green-900/20 border border-green-500 text-green-500 p-4 rounded-lg"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="font-medium">Mensagem enviada com sucesso!</p>
                    <p className="text-sm mt-1">Entraremos em contato em breve.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                          Nome completo
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="input-field"
                          placeholder="Seu nome"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                          E-mail
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="input-field"
                          placeholder="seu@email.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                          Assunto
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          className="input-field"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        >
                          <option value="" disabled>Selecione o assunto</option>
                          {planOptions.map((group) => (
                            <optgroup key={group.label} label={group.label}>
                              {group.options.map(opt => (
                                <option key={opt} value={opt}>{opt}</option>
                              ))}
                            </optgroup>
                          ))}
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                          Mensagem
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          className="input-field resize-none"
                          placeholder="Descreva o que você precisa..."
                          value={formData.message}
                          onChange={handleChange}
                          required
                        ></textarea>
                      </div>
                      
                      <motion.button
                        type="submit"
                        className="btn btn-primary w-full flex items-center justify-center"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center">
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Enviando...
                          </span>
                        ) : (
                          <span className="flex items-center">
                            <Send className="mr-2" size={18} />
                            Enviar mensagem
                          </span>
                        )}
                      </motion.button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;