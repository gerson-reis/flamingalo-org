# Flamingalo - Burn Portugal 🦩🔥

Site oficial do Flamingalo, evento inspirado no Burning Man realizado em Portugal.

## 🚀 Tecnologias

- **Astro 5** - Framework web moderno e performático
- **React 19** - Biblioteca para construção de interfaces
- **TypeScript** - Tipagem estática para JavaScript
- **Tailwind CSS 4** - Framework CSS utility-first
- **HeroUI** - Biblioteca de componentes React

## 📁 Estrutura do Projeto

```
flamingalo/
├── src/
│   ├── components/          # Componentes React reutilizáveis
│   │   ├── Header.tsx       # Cabeçalho com logo
│   │   ├── Hero.tsx         # Banner animado principal
│   │   ├── InfoCard.tsx     # Card de informação individual
│   │   ├── InfoSection.tsx  # Seção com cards informativos
│   │   ├── SurvivalGuide.tsx # Seção do guia de sobrevivência
│   │   ├── SocialCard.tsx   # Card de rede social
│   │   ├── GetInvolved.tsx  # Seção "Participe"
│   │   ├── Footer.tsx       # Rodapé
│   │   └── index.ts         # Exportações centralizadas
│   ├── layouts/
│   │   └── Layout.astro     # Layout base da aplicação
│   ├── pages/
│   │   └── index.astro      # Página inicial
│   └── styles/
│       └── global.css       # Estilos globais e animações
├── public/                  # Arquivos estáticos
│   ├── favicon.svg
│   ├── flamingalo-logo-text-2025-v1.png
│   ├── mundo-bizarro-type-pink.png
│   └── mundo-bizarro-pano-v2.jpg
├── astro.config.mjs         # Configuração do Astro
├── tailwind.config.ts       # Configuração do Tailwind
└── package.json

```

## 🎨 Componentes

### Header
Cabeçalho fixo com logo do Flamingalo, com efeito de fundo branco.

### Hero
Banner principal com:
- Animação de scroll infinito no fundo
- Logo "Mundo Bizarro" com blend mode especial
- Informações de data e local
- Botão CTA com animações de skew

### InfoSection
Grade responsiva com 4 cards informativos, cada um com emoji e texto.

### SurvivalGuide
Seção para download do guia de sobrevivência com ícone de download.

### GetInvolved
Grade de 6 cards sociais com links para:
- Telegram (principal e newsletter)
- Instagram
- Facebook
- Newsletter por email
- Informações sobre participação na organização

### Footer
Rodapé simples com descrição do evento.

## 🎯 Características

### Componentização
- Componentes React isolados e reutilizáveis
- Props tipadas com TypeScript
- Separação clara de responsabilidades

### Performance
- Uso de Astro para SSG (Static Site Generation)
- Carregamento seletivo de componentes React com `client:load`
- Otimização de imagens

### Acessibilidade
- Skip link para navegação por teclado
- Alt text em imagens
- HTML semântico
- Estrutura hierárquica de headings

### Responsividade
- Design mobile-first
- Grid system responsivo
- Breakpoints para tablet e desktop
- Imagens adaptativas

### Animações
- Banner com scroll infinito (keyframes CSS)
- Botões com animações de skew
- Hover effects suaves
- Transform 3D para melhor performance

## 🛠️ Comandos

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview
```

## 🌐 Deploy

O projeto está configurado para deploy estático. Pode ser hospedado em:
- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

## 📝 Melhores Práticas Implementadas

### Estrutura
- ✅ Componentes pequenos e focados em uma responsabilidade
- ✅ Separação de layout, páginas e componentes
- ✅ Arquivo de exportação centralizado (`index.ts`)

### TypeScript
- ✅ Interfaces para todas as props
- ✅ Tipagem estrita habilitada
- ✅ Props com valores padrão

### CSS
- ✅ Estilos globais centralizados
- ✅ CSS custom properties para animações
- ✅ Mobile-first approach
- ✅ BEM-like naming convention

### Performance
- ✅ Lazy loading de componentes React
- ✅ Preload de fontes
- ✅ Otimização de assets
- ✅ Transform 3D para animações suaves

### Acessibilidade
- ✅ Skip navigation link
- ✅ Semantic HTML
- ✅ ARIA labels onde necessário
- ✅ Contraste de cores adequado

## 🎨 Paleta de Cores

- **Rosa Principal**: `#e74c76`
- **Amarelo Destaque**: `yellow`
- **Fundo Claro**: `#f8f8f8`
- **Texto Escuro**: `#333`
- **Footer**: `#2c2c2c`

## 📱 Breakpoints

- **Mobile**: até 600px
- **Tablet**: 768px
- **Desktop**: 1024px+

## 🔗 Links Externos

- [Formulário de Inscrição](https://docs.google.com/forms/d/e/1FAIpQLScs8aI-l4wNJsx-DzniUFuuZE5TOFTVsRtmzK8fiW-8_zx-qw/viewform?usp=header)
- [Guia de Sobrevivência](https://drive.google.com/file/d/1vd2aHBn61nMJj_PD7GqsoHOPr73e7DNK/view?usp=sharing)
- [Telegram Flamingalo 2025](https://t.me/+8rF8c-tPM9c5MGU0)
- [Instagram](https://www.instagram.com/flamingalo.pt/)
- [Facebook](https://www.facebook.com/groups/flamingalo/)
- [Telegram Newsletter](https://t.me/flamingalo_news)
- [Email Newsletter](https://subscribepage.io/Flamingalo)

## 📄 Licença

© Flamingalo - Todos os direitos reservados
