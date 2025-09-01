'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ShoppingBag, Mail, Phone, MapPin, Heart } from 'lucide-react'

const footerLinks = {
  services: [
    { label: 'Desenvolvimento Shopify', href: '#services' },
    { label: 'Desenvolvimento WooCommerce', href: '#services' },
    { label: 'Design UX/UI', href: '#services' },
    { label: 'Otimização de Conversão', href: '#services' }
  ],
  company: [
    { label: 'Sobre Nós', href: '#about' },
    { label: 'Nossos Serviços', href: '#services' },
    { label: 'Portfólio', href: '#portfolio' },
    { label: 'Contato', href: '#contact' }
  ],
  contact: [
    { icon: Mail, label: 'contato@ecomdevpro.com', href: 'mailto:contato@ecomdevpro.com' },
    { icon: Phone, label: '+55 (11) 99999-9999', href: 'tel:+5511999999999' },
    { icon: MapPin, label: 'São Paulo, Brasil', href: '#' }
  ]
}

export function Footer() {
  return (
    <footer className="bg-background border-t border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link href="/" className="flex items-center space-x-2 mb-6">
                <div className="bg-primary text-primary-foreground p-2 rounded-lg">
                  <ShoppingBag className="h-6 w-6" />
                </div>
                <span className="text-xl font-bold text-foreground">
                  EcomDev Pro
                </span>
              </Link>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Especialistas em desenvolvimento de e-commerce. Transformamos
                ideias em lojas online de sucesso com Shopify e WooCommerce.
              </p>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-foreground mb-6">Serviços</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-foreground mb-6">Empresa</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-foreground mb-6">Contato</h3>
              <ul className="space-y-3">
                {footerLinks.contact.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="flex items-center text-muted-foreground hover:text-foreground transition-colors group"
                    >
                      <item.icon className="h-4 w-4 mr-3 group-hover:text-primary transition-colors" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Footer */}
        <motion.div
          className="py-6 border-t border-border/40"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
            <div className="flex items-center mb-4 sm:mb-0">
              <span>© 2024 EcomDev Pro. Todos os direitos reservados.</span>
            </div>
            <div className="flex items-center">
              <span>Feito com</span>
              <Heart className="h-4 w-4 mx-1 text-red-500 fill-current" />
              <span>para o seu sucesso</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
