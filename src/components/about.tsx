'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Users, Award, Clock } from 'lucide-react'

const stats = [
  { icon: Users, value: '50+', label: 'Clientes Satisfeitos' },
  { icon: Award, value: '150+', label: 'Projetos Concluídos' },
  { icon: Clock, value: '5+', label: 'Anos de Experiência' },
  { icon: CheckCircle, value: '99%', label: 'Taxa de Sucesso' }
]

const features = [
  'Metodologia ágil e transparente',
  'Tecnologias modernas e confiáveis',
  'Foco na experiência do usuário',
  'Otimização para conversão',
  'Suporte contínuo pós-lançamento',
  'Treinamento da equipe'
]

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Quem Somos
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Somos uma equipe de especialistas apaixonados por e-commerce, dedicados a
              transformar ideias em lojas online de sucesso. Com anos de experiência em
              Shopify e WooCommerce, oferecemos soluções sob medida que impulsionam o
              crescimento do seu negócio.
            </p>
            
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Background Card */}
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-background/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-border/50">
                      <stat.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                      <div className="text-3xl font-bold text-foreground mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-xl"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
