'use client'

import { motion } from 'framer-motion'
import { Mail, MessageSquare, Phone, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { QuoteForm } from '@/components/quote-form'

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    description: 'Resposta em até 2 horas',
    contact: 'contato@ecomdevpro.com',
    action: 'mailto:contato@ecomdevpro.com'
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp',
    description: 'Chat direto e rápido',
    contact: '+55 (11) 99999-9999',
    action: 'https://wa.me/5511999999999'
  },
  {
    icon: Phone,
    title: 'Telefone',
    description: 'Seg-Sex, 9h às 18h',
    contact: '+55 (11) 3333-3333',
    action: 'tel:+551133333333'
  },
  {
    icon: MapPin,
    title: 'Localização',
    description: 'São Paulo, Brasil',
    contact: 'Atendimento nacional',
    action: '#'
  }
]

const faqs = [
  {
    question: 'Quanto tempo leva para desenvolver uma loja?',
    answer: 'O prazo varia de 2 a 8 semanas, dependendo da complexidade e funcionalidades desejadas.'
  },
  {
    question: 'Vocês oferecem suporte pós-lançamento?',
    answer: 'Sim! Oferecemos planos de suporte contínuo com manutenção, atualizações e melhorias.'
  },
  {
    question: 'Qual plataforma é melhor: Shopify ou WooCommerce?',
    answer: 'Depende das suas necessidades. O Shopify é mais simples, enquanto o WooCommerce oferece mais flexibilidade.'
  }
]

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-muted/50">
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
            Vamos Conversar?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Estamos prontos para transformar sua ideia em uma loja de sucesso.
            Entre em contato e vamos discutir seu projeto.
          </p>
        </motion.div>

        {/* Quote Form Section */}
        <motion.div
          className="max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <QuoteForm />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Outras Formas de Contato
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer border-border/50">
                    <CardHeader className="text-center">
                      <div className="bg-primary/10 text-primary p-3 rounded-lg w-fit mx-auto mb-4">
                        <method.icon className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-lg">{method.title}</CardTitle>
                      <CardDescription>{method.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <Button
                        variant="outline"
                        className="w-full"
                        asChild
                      >
                        <a href={method.action} target={method.action.startsWith('http') ? '_blank' : undefined}>
                          {method.contact}
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* FAQ */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Perguntas Frequentes
            </h3>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-border/50">
                    <CardHeader>
                      <CardTitle className="text-lg text-foreground">
                        {faq.question}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Pronto para começar seu projeto?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Agende uma conversa gratuita e vamos discutir como podemos ajudar
              a transformar sua ideia em uma loja de sucesso.
            </p>
            <Button size="lg" asChild>
              <a href="mailto:contato@ecomdevpro.com">
                Agendar Consulta Gratuita
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
