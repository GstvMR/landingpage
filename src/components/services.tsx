'use client'

import { motion } from 'framer-motion'
import { 
  ShoppingBag, 
  Smartphone, 
  TrendingUp, 
  Palette, 
  Settings, 
  Headphones 
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const services = [
  {
    icon: ShoppingBag,
    title: 'Desenvolvimento Shopify',
    description: 'Lojas completas e customizadas na plataforma líder mundial em e-commerce.',
    features: ['Temas personalizados', 'Apps integrados', 'Performance otimizada']
  },
  {
    icon: Settings,
    title: 'Desenvolvimento WooCommerce',
    description: 'Soluções WordPress robustas com total flexibilidade e controle.',
    features: ['Plugins customizados', 'Integrações ERP', 'Escalabilidade']
  },
  {
    icon: Smartphone,
    title: 'Design Responsivo',
    description: 'Experiências perfeitas em todos os dispositivos e tamanhos de tela.',
    features: ['Mobile-first', 'Performance mobile', 'UX otimizada']
  },
  {
    icon: TrendingUp,
    title: 'Otimização de Conversão',
    description: 'Estratégias comprovadas para aumentar suas vendas online.',
    features: ['A/B Testing', 'Analytics avançado', 'Funil de vendas']
  },
  {
    icon: Palette,
    title: 'Design UX/UI',
    description: 'Interfaces intuitivas que encantam e convertem visitantes.',
    features: ['Design system', 'Prototipagem', 'Testes de usabilidade']
  },
  {
    icon: Headphones,
    title: 'Suporte Contínuo',
    description: 'Manutenção, atualizações e suporte técnico especializado.',
    features: ['Suporte 24/7', 'Backups automáticos', 'Monitoramento']
  }
]

export function Services() {
  return (
    <section id="services" className="py-24 bg-muted/50">
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
            Nossos Serviços
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Oferecemos soluções completas para seu e-commerce, desde o desenvolvimento
            até a otimização contínua para máxima performance.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-border/50">
                <CardHeader>
                  <div className="bg-primary/10 text-primary p-3 rounded-lg w-fit mb-4">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
