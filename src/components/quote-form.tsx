'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, User, Mail, Phone, Building, Briefcase, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  position: string
  message: string
  projectType: string
  budget: string
}

const projectTypes = [
  { value: 'shopify', label: 'Loja Shopify' },
  { value: 'woocommerce', label: 'Loja WooCommerce' },
  { value: 'migration', label: 'Migração de Plataforma' },
  { value: 'redesign', label: 'Redesign/Otimização' },
  { value: 'maintenance', label: 'Manutenção/Suporte' },
  { value: 'other', label: 'Outro' }
]

const budgetRanges = [
  { value: '5k-15k', label: 'R$ 5.000 - R$ 15.000' },
  { value: '15k-30k', label: 'R$ 15.000 - R$ 30.000' },
  { value: '30k-50k', label: 'R$ 30.000 - R$ 50.000' },
  { value: '50k+', label: 'R$ 50.000+' },
  { value: 'discuss', label: 'Prefiro discutir' }
]

export function QuoteForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    message: '',
    projectType: '',
    budget: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simular envio do formulário
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setSubmitted(true)
    
    // Reset form after success
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        position: '',
        message: '',
        projectType: '',
        budget: ''
      })
    }, 3000)
  }

  const isFormValid = formData.firstName && formData.lastName && formData.email && formData.message

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="border-green-200 bg-green-50 dark:bg-green-950 dark:border-green-800">
          <CardContent className="pt-6 text-center">
            <div className="mb-4">
              <div className="mx-auto w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
                <Send className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-2">
                Orçamento Enviado!
              </h3>
              <p className="text-green-700 dark:text-green-300">
                Recebemos sua solicitação e entraremos em contato em até 24 horas.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    )
  }

  return (
    <Card className="border-border/50">
      <CardHeader>
        <CardTitle className="text-2xl">Solicitar Orçamento</CardTitle>
        <CardDescription>
          Preencha o formulário abaixo e receba uma proposta personalizada para seu projeto
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nome e Sobrenome */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                Nome *
              </Label>
              <Input
                id="firstName"
                type="text"
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                placeholder="Seu nome"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                Sobrenome *
              </Label>
              <Input
                id="lastName"
                type="text"
                value={formData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                placeholder="Seu sobrenome"
                required
              />
            </div>
          </div>

          {/* Email e Telefone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                Email *
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="seu@email.com"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                Telefone
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="(11) 99999-9999"
              />
            </div>
          </div>

          {/* Empresa e Cargo */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="company" className="flex items-center">
                <Building className="h-4 w-4 mr-2" />
                Empresa
              </Label>
              <Input
                id="company"
                type="text"
                value={formData.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
                placeholder="Nome da empresa"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="position" className="flex items-center">
                <Briefcase className="h-4 w-4 mr-2" />
                Cargo
              </Label>
              <Input
                id="position"
                type="text"
                value={formData.position}
                onChange={(e) => handleInputChange('position', e.target.value)}
                placeholder="Seu cargo"
              />
            </div>
          </div>

          {/* Tipo de Projeto e Orçamento */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="projectType">Tipo de Projeto</Label>
              <Select value={formData.projectType} onValueChange={(value) => handleInputChange('projectType', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o tipo de projeto" />
                </SelectTrigger>
                <SelectContent>
                  {projectTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="budget">Orçamento Estimado</Label>
              <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione a faixa de orçamento" />
                </SelectTrigger>
                <SelectContent>
                  {budgetRanges.map((range) => (
                    <SelectItem key={range.value} value={range.value}>
                      {range.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Mensagem */}
          <div className="space-y-2">
            <Label htmlFor="message" className="flex items-center">
              <MessageSquare className="h-4 w-4 mr-2" />
              Mensagem *
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              placeholder="Descreva seu projeto, necessidades específicas, prazos, ou qualquer informação relevante..."
              rows={5}
              required
            />
          </div>

          {/* Submit Button */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={!isFormValid || isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                  Enviando...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  Solicitar Orçamento
                </>
              )}
            </Button>
          </motion.div>

          <p className="text-xs text-muted-foreground text-center">
            * Campos obrigatórios. Seus dados estão seguros e não serão compartilhados.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
