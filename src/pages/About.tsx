import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Award, Clock, Zap } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import SEO from '../components/SEO';

const About: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const values = [
    {
      icon: <CheckCircle className="text-neon-green" size={24} />,
      title: 'Qualidade',
      description: 'Comprometimento com a excelência em cada projeto.'
    },
    {
      icon: <Award className="text-neon-blue" size={24} />,
      title: 'Inovação',
      description: 'Buscamos constantemente as melhores tecnologias e soluções.'
    },
    {
      icon: <Clock className="text-neon-purple" size={24} />,
      title: 'Pontualidade',
      description: 'Respeitamos prazos e entregamos no tempo acordado.'
    },
    {
      icon: <Zap className="text-neon-green" size={24} />,
      title: 'Performance',
      description: 'Foco em resultados mensuráveis para seu negócio.'
    }
  ];

  return (
    <div className="pt-20">
      <SEO
        title="Sobre a HDEV Solutions | Agência de Desenvolvimento Web"
        description="Conheça a equipe, valores e diferenciais da HDEV Solutions. Especialistas em desenvolvimento web, automação e soluções digitais para empresas."
        canonical="https://hdevsolutions.com.br/about"
        image="/og-image.png"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "HDEV Solutions",
          "url": "https://hdevsolutions.com.br/",
          "logo": "https://hdevsolutions.com.br/og-image.png"
        }}
      />
      {/* About Hero */}
      <section className="section bg-gray-950">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <SectionHeading 
                title="Sobre a HDEV Solutions"
                subtitle="Conheça nossa história e o que nos motiva a criar soluções digitais excepcionais."
              />
              <div className="space-y-4 text-gray-300">
                <p>
                  A HDEV Solutions nasceu da paixão por criar experiências digitais que realmente fazem a diferença para empresas de todos os tamanhos.
                </p>
                <p>
                  Nossa equipe de especialistas combina conhecimento técnico avançado com uma compreensão profunda de design e estratégia de negócios para entregar soluções completas que não apenas impressionam visualmente, mas também geram resultados concretos.
                </p>
                <p>
                  Acreditamos que cada cliente merece uma abordagem personalizada. Por isso, trabalhamos em estreita colaboração com nossos parceiros para entender seus objetivos e desenvolver soluções sob medida que impulsionam o crescimento.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden border-2 border-neon-green shadow-glow-green">
                <img 
                  src="https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="HDEV Solutions Team" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-black p-4 rounded-lg border border-gray-800">
                <p className="text-2xl font-bold">
                  <span className="text-neon-green">+100</span>
                </p>
                <p className="text-gray-400">Projetos entregues</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section">
        <div className="container">
          <SectionHeading 
            title="Nossos Valores"
            subtitle="Princípios que guiam nossa forma de trabalhar e entregar valor aos clientes."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="card card-hover"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-gray-950">
        <div className="container">
          <SectionHeading 
            title="Nosso Processo"
            subtitle="Como trabalhamos para transformar suas ideias em soluções digitais eficientes."
            centered
          />
          
          <div className="relative mt-16">
            {/* Process Timeline */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-800 hidden md:block"></div>
            
            {/* Process Steps */}
            <div className="space-y-24">
              {/* Step 1 */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-neon-green w-4 h-4 rounded-full shadow-glow-green z-10"></div>
                <div className="md:grid md:grid-cols-2 gap-8 items-center">
                  <div className="md:text-right md:pr-8">
                    <div className="bg-gray-900 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-2">01. Descoberta</h3>
                      <p className="text-gray-400">
                        Análise detalhada das necessidades, objetivos e público-alvo do seu negócio para criar uma estratégia personalizada.
                      </p>
                    </div>
                  </div>
                  <div className="mt-8 md:mt-0"></div>
                </div>
              </motion.div>
              
              {/* Step 2 */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-neon-blue w-4 h-4 rounded-full shadow-glow-blue z-10"></div>
                <div className="md:grid md:grid-cols-2 gap-8 items-center">
                  <div className="md:text-right md:pr-8 order-1 md:order-2">
                    <div className="bg-gray-900 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-2">02. Planejamento</h3>
                      <p className="text-gray-400">
                        Elaboração de wireframes, protótipos e definição da arquitetura técnica para aprovação antes do desenvolvimento.
                      </p>
                    </div>
                  </div>
                  <div className="mt-8 md:mt-0 order-2 md:order-1"></div>
                </div>
              </motion.div>
              
              {/* Step 3 */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-neon-purple w-4 h-4 rounded-full shadow-glow-purple z-10"></div>
                <div className="md:grid md:grid-cols-2 gap-8 items-center">
                  <div className="md:text-right md:pr-8">
                    <div className="bg-gray-900 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-2">03. Desenvolvimento</h3>
                      <p className="text-gray-400">
                        Criação do seu projeto com as melhores tecnologias, seguindo padrões de qualidade e com foco em performance.
                      </p>
                    </div>
                  </div>
                  <div className="mt-8 md:mt-0"></div>
                </div>
              </motion.div>
              
              {/* Step 4 */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-neon-green w-4 h-4 rounded-full shadow-glow-green z-10"></div>
                <div className="md:grid md:grid-cols-2 gap-8 items-center">
                  <div className="md:text-right md:pr-8 order-1 md:order-2">
                    <div className="bg-gray-900 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-2">04. Lançamento e Suporte</h3>
                      <p className="text-gray-400">
                        Publicação do projeto e acompanhamento contínuo para garantir resultados, com suporte técnico e estratégico.
                      </p>
                    </div>
                  </div>
                  <div className="mt-8 md:mt-0 order-2 md:order-1"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;