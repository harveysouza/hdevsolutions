import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import SEO from '../components/SEO';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  tags: string[];
  url: string;
}

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: "Refrilar",
      category: "ecommerce",
      image: "/cases/refrilar.png",
      description: "E-commerce robusto de climatização, com catálogo amplo, banners promocionais, busca eficiente e integração com meios de pagamento. Foco em experiência de compra, confiança e suporte ao cliente.",
      tags: ["Shopify", "UX/UI", "Pagamentos"],
      url: "https://refrilaar.com.br"
    },
    {
      id: 2,
      title: "Maze Imports",
      category: "ecommerce",
      image: "/cases/maze-imports.png",
      description: "Loja virtual de streetwear e sneakers, com navegação dinâmica, banners de coleções, filtros avançados e checkout seguro. Destaque para promoções e experiência visual marcante.",
      tags: ["Shopify", "Moda", "Coleções"],
      url: "https://mazeimports.com.br"
    },
    {
      id: 3,
      title: "Cabelô",
      category: "ecommerce",
      image: "/cases/cabelo.png",
      description: "E-commerce especializado em cabelos e acessórios, com layout acolhedor, banners personalizados, categorias bem definidas e integração com WhatsApp. Foco em confiança e atendimento próximo.",
      tags: ["Shopify", "Beleza", "Atendimento"],
      url: "https://www.ecomercecabelo.com.br/"
    },
    {
      id: 4,
      title: "Mundo dos Incensos",
      category: "ecommerce",
      image: "/cases/incensos.png",
      description: "Loja online de incensos e aromatizadores, com destaque para lançamentos, promoções e navegação intuitiva. Visual leve, integração Mercado Pago e informações claras sobre produtos.",
      tags: ["Shopify", "Aromas", "Mercado Pago"],
      url: "https://mundodosincensos.com.br"
    },
    {
      id: 5,
      title: "Dona's Boutique",
      category: "ecommerce",
      image: "/cases/donas-boutique.png",
      description: "E-commerce de moda feminina desenvolvido em WordPress com Elementor Pro e WooCommerce. Layout elegante, banners de destaque, categorias organizadas, integração com meios de pagamento e foco em experiência mobile. Ideal para lojas que buscam autonomia e facilidade de gestão.",
      tags: ["WordPress", "Elementor Pro", "WooCommerce"],
      url: "https://boutiquedonas.com.br/"
    },
    {
      id: 6,
      title: "DiFER Contabilidade Consultiva",
      category: "web",
      image: "/cases/difer.png",
      description: "Website institucional para escritório de contabilidade consultiva. Design moderno, foco em diferenciais, apresentação de planos e soluções, integração com WhatsApp e formulários. Desenvolvido em WordPress com Elementor Pro.",
      tags: ["WordPress", "Elementor Pro"],
      url: "https://difercontabilidade.com.br/"
    },
    {
      id: 7,
      title: "DigiMais Marketing Digital",
      category: "web",
      image: "/cases/digimais.png",
      description: "Site institucional para agência de marketing digital. Estrutura focada em conversão, apresentação de serviços, cases de sucesso e blog integrado. Desenvolvido em WordPress com Elementor Pro.",
      tags: ["WordPress", "Elementor Pro"],
      url: "https://digimaismkt.com.br/"
    },
    {
      id: 8,
      title: "Evvo Medical",
      category: "web",
      image: "/cases/evvo-medical.png",
      description: "Website institucional para empresa de gestão médica e financeira. Apresentação de soluções, diferenciais, depoimentos e área do cliente. Desenvolvido em WordPress com Elementor Pro.",
      tags: ["WordPress", "Elementor Pro"],
      url: "https://evvomedical.com.br/"
    },
    {
      id: 9,
      title: "Barão do Agro",
      category: "web",
      image: "/cases/baraodoagro.png",
      description: "Site institucional para fornecedora de laranjas premium. Foco em apresentação de produto, diferenciais, serviços e contato. Desenvolvido em WordPress com Elementor Pro.",
      tags: ["WordPress", "Elementor Pro"],
      url: "https://baraodoagro.com.br/"
    },
    {
      id: 10,
      title: "Central Grupo",
      category: "web",
      image: "/cases/centralgrupo.png",
      description: "Website institucional para grupo empresarial do setor de construção. Apresentação de empresas, produtos, diferenciais e depoimentos. Desenvolvido em WordPress com Elementor Pro.",
      tags: ["WordPress", "Elementor Pro"],
      url: "https://grupocenttral.com.br"
    },
    {
      id: 11,
      title: "Central Portas",
      category: "web",
      image: "/cases/centralportas.png",
      description: "Site institucional para fabricante de portas. Catálogo de produtos, especificações técnicas e instruções de montagem. Desenvolvido em WordPress com Elementor Pro.",
      tags: ["WordPress", "Elementor Pro"],
      url: "https://grupocenttral.com.br/central-portas/"
    },
    {
      id: 12,
      title: "Central Vidros",
      category: "web",
      image: "/cases/centralvidros.png",
      description: "Website institucional para empresa de vidros temperados. Catálogo de produtos, diferenciais e contato rápido. Desenvolvido em WordPress com Elementor Pro.",
      tags: ["WordPress", "Elementor Pro"],
      url: "https://grupocenttral.com.br/central-vidros/"
    },
    {
      id: 13,
      title: "Central Aluminio",
      category: "web",
      image: "/cases/centraljanelas.png",
      description: "Site institucional para fabricante de janelas e esquadrias. Catálogo completo, especificações e contato. Desenvolvido em WordPress com Elementor Pro.",
      tags: ["WordPress", "Elementor Pro"],
      url: "https://grupocenttral.com.br/central-aluminio/"
    },
    {
      id: 14,
      title: "Evvo Contabilidade",
      category: "web",
      image: "/cases/evvocontabilidade.png",
      description: "Website institucional para escritório de contabilidade. Apresentação de serviços, diferenciais, depoimentos de clientes e área do cliente. Desenvolvido em WordPress com Elementor Pro.",
      tags: ["WordPress", "Elementor Pro"],
      url: "https://evvocontabilidade.com.br/"
    },
    {
      id: 15,
      title: "Uzêda & Associados",
      category: "web",
      image: "/cases/uzeda.png",
      description: "Site institucional para consultoria empresarial. Foco em apresentação de soluções, diferenciais, equipe, atuação internacional e contato. Desenvolvido em WordPress com Elementor Pro.",
      tags: ["WordPress", "Elementor Pro"],
      url: "https://uzedaassociates.com/"
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const openProject = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="pt-20">
      <SEO
        title="Portfólio de Sites, Lojas Virtuais e Sistemas | HDEV Solutions"
        description="Veja cases reais de websites, e-commerces e sistemas desenvolvidos pela HDEV Solutions. Resultados, performance e design para empresas de diversos segmentos."
        canonical="https://hdevsolutions.com.br/portfolio"
        image="/og-image.png"
      />
      {/* Portfolio Hero */}
      <section className="section bg-gray-950">
        <div className="container">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading 
              title="Nosso Portfólio"
              subtitle="Conheça alguns dos projetos que desenvolvemos para nossos clientes."
              centered
              light
            />
          </motion.div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="section">
        <div className="container">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center mb-12 gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-md transition-all duration-300 ${
                filter === 'all' 
                  ? 'bg-neon-green text-black' 
                  : 'bg-gray-900 text-white hover:bg-gray-800'
              }`}
            >
              Todos
            </button>
            <button
              onClick={() => setFilter('web')}
              className={`px-4 py-2 rounded-md transition-all duration-300 ${
                filter === 'web' 
                  ? 'bg-neon-green text-black' 
                  : 'bg-gray-900 text-white hover:bg-gray-800'
              }`}
            >
              Websites
            </button>
            <button
              onClick={() => setFilter('landing')}
              className={`px-4 py-2 rounded-md transition-all duration-300 ${
                filter === 'landing' 
                  ? 'bg-neon-green text-black' 
                  : 'bg-gray-900 text-white hover:bg-gray-800'
              }`}
            >
              Landing Pages
            </button>
            <button
              onClick={() => setFilter('ecommerce')}
              className={`px-4 py-2 rounded-md transition-all duration-300 ${
                filter === 'ecommerce' 
                  ? 'bg-neon-green text-black' 
                  : 'bg-gray-900 text-white hover:bg-gray-800'
              }`}
            >
              E-commerce
            </button>
          </div>
          
          {/* Projects Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layoutId={`project-${project.id}`}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -10 }}
              >
                <div 
                  className="relative overflow-hidden rounded-lg cursor-pointer bg-gray-900 border border-gray-800 group-hover:border-neon-green transition-all duration-300"
                  onClick={() => openProject(project)}
                >
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-neon-green">{project.category === 'web' ? 'Website' : project.category === 'landing' ? 'Landing Page' : 'E-commerce'}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.slice(0, 2).map((tag, index) => (
                        <span key={index} className="text-xs py-1 px-2 bg-gray-800/80 rounded-full text-gray-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Project Detail Modal */}
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
              <motion.div
                layoutId={`project-${selectedProject.id}`}
                className="bg-gray-900 rounded-lg w-full max-w-4xl relative overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <button
                  onClick={closeProject}
                  className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-neon-green hover:text-black transition-colors duration-300"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
                
                <div className="h-64 sm:h-80">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                      <p className="text-neon-green">
                        {selectedProject.category === 'web' ? 'Website' : 
                         selectedProject.category === 'landing' ? 'Landing Page' : 'E-commerce'}
                      </p>
                    </div>
                    <a 
                      href={selectedProject.url} 
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="inline-flex items-center text-neon-green hover:underline"
                    >
                      <span className="mr-1">Ver site</span>
                      <ExternalLink size={16} />
                    </a>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{selectedProject.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tags.map((tag, index) => (
                      <span key={index} className="text-sm py-1 px-3 bg-gray-800 rounded-full text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="border-t border-gray-800 pt-6 flex justify-between">
                    <button 
                      onClick={closeProject}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Fechar
                    </button>
                    <a 
                      href="/contact" 
                      className="text-neon-green hover:underline transition-colors"
                    >
                      Quero um projeto similar
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-gray-950">
        <div className="container">
          <SectionHeading 
            title="Depoimentos"
            subtitle="O que nossos clientes dizem sobre nossos projetos e serviços."
            centered
            light
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Testimonial 1 */}
            <motion.div 
              className="bg-gray-900 p-6 rounded-lg border border-gray-800"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-gray-300 mb-6 italic">
                "A HDEV Solutions transformou completamente nossa presença online. O site é rápido, moderno e trouxe resultados imediatos para nosso negócio."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Client" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">Carlos Mendes</h4>
                  <p className="text-sm text-gray-400">CEO, TechSolutions</p>
                </div>
              </div>
            </motion.div>
            
            {/* Testimonial 2 */}
            <motion.div 
              className="bg-gray-900 p-6 rounded-lg border border-gray-800"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="text-gray-300 mb-6 italic">
                "Nossa taxa de conversão aumentou 150% após o lançamento da landing page desenvolvida pela equipe da HDEV. Profissionalismo e resultados impressionantes."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Client" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">Ana Ferreira</h4>
                  <p className="text-sm text-gray-400">Marketing Manager, Innovate</p>
                </div>
              </div>
            </motion.div>
            
            {/* Testimonial 3 */}
            <motion.div 
              className="bg-gray-900 p-6 rounded-lg border border-gray-800"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-gray-300 mb-6 italic">
                "A automação implementada pela HDEV economizou horas de trabalho manual por semana. O investimento se pagou em menos de dois meses. Altamente recomendado!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Client" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">Roberto Silva</h4>
                  <p className="text-sm text-gray-400">Operations Director, LogisticPro</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;