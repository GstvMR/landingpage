# EcomDev Pro - Landing Page

Uma landing page moderna, rápida e responsiva para empresa de desenvolvimento de e-commerce especializada em Shopify e WooCommerce.

## 🚀 Tecnologias

- **Next.js 14** (App Router) - Framework React para produção
- **TypeScript** - Tipagem estática para JavaScript
- **Tailwind CSS** - Framework CSS utilitário
- **shadcn/ui** - Biblioteca de componentes elegantes
- **Framer Motion** - Animações fluidas e interativas
- **Lucide React** - Ícones modernos e consistentes
- **Next Themes** - Sistema de dark/light mode

## ✨ Características

- 🎨 **Design Moderno**: Interface limpa e profissional
- 📱 **Totalmente Responsivo**: Funciona perfeitamente em todos os dispositivos
- 🌙 **Dark Mode**: Detecção automática da preferência do sistema
- ⚡ **Performance Otimizada**: Carregamento rápido e experiência fluida
- 🎭 **Micro-animações**: Interações sutis que melhoram a UX
- 🔧 **Código Limpo**: ESLint + Prettier para qualidade do código
- 🎯 **SEO Friendly**: Otimizado para motores de busca

## 📦 Instalação

1. Clone o repositório:
```bash
git clone <repository-url>
cd landing
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 🛠️ Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera a build de produção
- `npm run start` - Inicia o servidor de produção
- `npm run lint` - Executa o ESLint
- `npm run lint:fix` - Corrige problemas do ESLint automaticamente
- `npm run format` - Formata o código com Prettier
- `npm run format:check` - Verifica a formatação do código
- `npm run type-check` - Verifica os tipos TypeScript

## 📁 Estrutura do Projeto

```
src/
├── app/                # App Router (Next.js 14)
│   ├── globals.css     # Estilos globais
│   ├── layout.tsx      # Layout principal
│   └── page.tsx        # Página inicial
├── components/         # Componentes React
│   ├── ui/            # Componentes base (shadcn/ui)
│   ├── header.tsx     # Cabeçalho
│   ├── hero.tsx       # Seção hero
│   ├── services.tsx   # Seção de serviços
│   ├── about.tsx      # Seção sobre
│   ├── portfolio.tsx  # Seção portfólio
│   ├── contact.tsx    # Seção contato
│   ├── footer.tsx     # Rodapé
│   └── theme-*.tsx    # Componentes de tema
└── lib/               # Utilitários
    └── utils.ts       # Funções auxiliares
```

## 🎨 Seções da Landing Page

1. **Header**: Navegação fixa com dark mode toggle
2. **Hero**: Apresentação principal com call-to-action
3. **Services**: Serviços oferecidos com cards interativos
4. **About**: Sobre a empresa com estatísticas
5. **Portfolio**: Projetos realizados
6. **Contact**: Formulário de orçamento, formas de contato e FAQ
7. **Footer**: Links e informações finais

### 📝 Formulário de Orçamento

O formulário inclui os seguintes campos:
- **Nome** e **Sobrenome** (obrigatórios)
- **Email** (obrigatório)
- **Telefone**
- **Empresa** e **Cargo**
- **Tipo de Projeto** (Shopify, WooCommerce, Migração, etc.)
- **Faixa de Orçamento**
- **Mensagem** (obrigatória)

Funcionalidades:
- ✅ Validação em tempo real
- ✅ Estados de loading e sucesso
- ✅ Design responsivo
- ✅ Feedback visual para o usuário

## 🔧 Personalização

### Cores e Temas
As cores podem ser customizadas no arquivo `src/app/globals.css` nas variáveis CSS:

```css
:root {
  --primary: /* cor primária */;
  --secondary: /* cor secundária */;
  /* ... outras variáveis */
}
```

### Conteúdo
O conteúdo pode ser facilmente modificado nos arquivos de componentes em `src/components/`.

### Animações
As animações Framer Motion podem ser ajustadas nos componentes individuais.

## 🚀 Deploy

### Vercel (Recomendado)
1. Conecte seu repositório ao Vercel
2. Deploy automático com cada push

### Outras Plataformas
```bash
npm run build
npm run start
```

## 📝 Licença

Este projeto é privado e propriedade da EcomDev Pro.

## 📞 Suporte

Para suporte, entre em contato através dos canais disponíveis na seção de contato da landing page.