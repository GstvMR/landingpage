'use client'

import { motion } from 'framer-motion'
import { ExternalLink, ShoppingBag, TrendingUp } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const projects = [
  {
    title: 'Loja de Moda Feminina',
    platform: 'Shopify',
    description: 'E-commerce completo com catálogo de produtos, carrinho personalizado e integração com pagamentos.',
    results: '+150% conversão',
    image: '/api/placeholder/400/300',
    technologies: ['Shopify', 'Liquid', 'JavaScript', 'CSS']
  },
  {
    title: 'Marketplace B2B',
    platform: 'WooCommerce',
    description: 'Plataforma robusta para vendas corporativas com sistema de cotações e aprovações.',
    results: '+200% vendas',
    image: '/api/placeholder/400/300',
    technologies: ['WordPress', 'WooCommerce', 'PHP', 'React']
  },
  {
    title: 'Loja de Eletrônicos',
    platform: 'Shopify Plus',
    description: 'Loja escalável com milhares de produtos, comparador de preços e reviews.',
    results: '+80% tráfego',
    image: '/api/placeholder/400/300',
    technologies: ['Shopify Plus', 'React', 'GraphQL', 'Node.js']
  },
  {
    title: 'E-commerce de Cosméticos',
    platform: 'WooCommerce',
    description: 'Loja moderna com quiz de produtos, assinatura recorrente e programa de fidelidade.',
    results: '+120% retenção',
    image: '/api/placeholder/400/300',
    technologies: ['WordPress', 'WooCommerce', 'Vue.js', 'PHP']
  }
]

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Nosso Portfólio
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Conheça alguns dos projetos que desenvolvemos e os resultados
            extraordinários que alcançamos para nossos clientes.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-border/50 group">
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ShoppingBag className="h-16 w-16 text-primary/40" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <div className="bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-foreground">
                      {project.platform}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-green-500/90 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      {project.results}
                    </div>
                  </div>
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <Button variant="secondary" size="sm">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Ver Detalhes
                    </Button>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground mb-6">
            Quer ver seu projeto aqui também?
          </p>
          <Button size="lg" asChild>
            <a href="#contact">Solicitar Orçamento</a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
