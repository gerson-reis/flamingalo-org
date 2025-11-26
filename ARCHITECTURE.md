# Arquitetura do Projeto Flamingalo

## 📐 Visão Geral

Este projeto utiliza uma arquitetura moderna baseada em Astro + React, com foco em performance, manutenibilidade e boas práticas de desenvolvimento.

## 🏗️ Estrutura de Diretórios

```
src/
├── components/       # Componentes React reutilizáveis
├── constants/        # Constantes e configurações
├── layouts/          # Layouts Astro
├── pages/           # Páginas da aplicação
├── styles/          # Estilos globais
└── types/           # Tipos TypeScript compartilhados
```

## 🔄 Fluxo de Dados

### Componentes Apresentacionais (Presentational Components)

Todos os componentes foram criados seguindo o padrão de componentes apresentacionais:

- **Header**: Componente puro que recebe props de logo
- **Hero**: Recebe informações do evento via props
- **InfoCard**: Componente genérico para cards informativos
- **SocialCard**: Card reutilizável para links sociais
- **Footer**: Componente simples de rodapé

### Separação de Responsabilidades

```
┌─────────────────┐
│  index.astro    │ ← Página (orchestration)
└────────┬────────┘
         │
         ├─→ Header (presentation)
         ├─→ Hero (presentation)
         ├─→ InfoSection (presentation)
         ├─→ SurvivalGuide (presentation)
         ├─→ GetInvolved (presentation)
         └─→ Footer (presentation)
```

## 🎨 Estratégia de Estilização

### Abordagem Híbrida

O projeto usa uma combinação de:

1. **Tailwind CSS**: Para utilitários rápidos
2. **CSS Custom**: Para animações complexas e estilos específicos
3. **CSS Modules**: Não usado, mas pode ser adicionado

### Hierarquia de Estilos

```
global.css
├── Reset & Base styles
├── Layout (Header, Footer)
├── Components (Hero, Cards, Buttons)
├── Animations (@keyframes)
└── Media Queries
```

## 🔧 Padrões de Código

### TypeScript

#### Tipagem de Props

```typescript
// ✅ Correto - Interface exportável
export interface ComponentProps {
  title: string;
  optional?: boolean;
}

// ✅ Correto - Valores padrão
const Component: React.FC<Props> = ({
  title = "Default"
}) => { ... }
```

#### Tipos Compartilhados

Todos os tipos são definidos em `src/types/index.ts` e importados onde necessário.

### React

#### Componentes Funcionais

```typescript
// ✅ Padrão usado no projeto
export const Component: React.FC<Props> = ({ prop }) => {
  return <div>{prop}</div>;
};
```

#### Client Directives (Astro)

```astro
<!-- Componente será hidratado no client -->
<Component client:load />

<!-- Alternativas:
  client:idle    - Hidrata quando idle
  client:visible - Hidrata quando visível
  client:media   - Hidrata baseado em media query
-->
```

## 📦 Gerenciamento de Estado

### Estado Local

Componentes usam estado local do React quando necessário:

```typescript
const [isOpen, setIsOpen] = useState(false);
```

### Estado Global

Atualmente não implementado, mas pode ser adicionado com:
- React Context API
- Zustand
- Jotai

## 🎯 Performance

### Otimizações Implementadas

1. **Static Site Generation (SSG)**
   - Páginas pré-renderizadas em build time
   - HTML estático servido ao usuário

2. **Partial Hydration**
   - Apenas componentes necessários são hidratados
   - Usa `client:load` seletivamente

3. **CSS Animations**
   - Usa `transform` e `opacity` para 60fps
   - `backface-visibility: hidden` para melhor performance

4. **Image Optimization**
   - Imagens otimizadas no build
   - Lazy loading para imagens below the fold

### Métricas Alvo

- **FCP (First Contentful Paint)**: < 1.8s
- **LCP (Largest Contentful Paint)**: < 2.5s
- **CLS (Cumulative Layout Shift)**: < 0.1
- **TTI (Time to Interactive)**: < 3.8s

## 🔐 Segurança

### Boas Práticas Implementadas

1. **Links Externos**
   ```tsx
   <a 
     href={url}
     target="_blank"
     rel="noopener noreferrer"  // Previne tabnapping
   >
   ```

2. **XSS Prevention**
   - React escapa strings automaticamente
   - Não usa `dangerouslySetInnerHTML`

3. **Content Security Policy**
   - Pode ser adicionado no `astro.config.mjs`

## ♿ Acessibilidade

### Implementações

1. **Skip Link**
   ```tsx
   <a class="skip-link" href="#content">
     Skip to content
   </a>
   ```

2. **Semantic HTML**
   - `<header>`, `<main>`, `<footer>`, `<section>`
   - Hierarquia correta de headings (h1-h6)

3. **Alt Text**
   - Todas as imagens têm alt descritivo

4. **Keyboard Navigation**
   - Todos os elementos interativos são acessíveis por teclado

### WCAG 2.1 Compliance

Target: **AA Level**

- ✅ Contraste de cores adequado
- ✅ Texto redimensionável
- ✅ Navegação por teclado
- ✅ Skip navigation

## 📱 Responsividade

### Breakpoints

```css
/* Mobile First */
@media screen and (max-width: 600px) { }
@media screen and (max-width: 768px) { }
@media screen and (min-width: 1024px) { }
```

### Grid System

```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}
```

## 🧪 Testing (Recomendado)

### Sugestão de Stack

```typescript
// Unit Tests
import { render, screen } from '@testing-library/react';
import { Hero } from './Hero';

test('renders hero with title', () => {
  render(<Hero title="Test" />);
  expect(screen.getByText('Test')).toBeInTheDocument();
});

// E2E Tests
import { test, expect } from '@playwright/test';

test('homepage loads', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Flamingalo/);
});
```

## 🚀 Deploy

### Build Process

```bash
npm run build
# Gera:
# - dist/ - HTML estático
# - dist/assets/ - CSS, JS, imagens otimizadas
```

### Plataformas Recomendadas

1. **Vercel** (Recomendado)
   - Deploy automático via Git
   - Preview deploys para PRs
   - Edge network global

2. **Netlify**
   - Similar ao Vercel
   - Boas ferramentas de CI/CD

3. **Cloudflare Pages**
   - Grátis e rápido
   - CDN global

## 🔄 CI/CD (Sugestão)

### GitHub Actions

```yaml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
```

## 📊 Monitoramento (Recomendado)

### Ferramentas

- **Google Analytics**: Tráfego e comportamento
- **Sentry**: Error tracking
- **Vercel Analytics**: Web Vitals

## 🔮 Melhorias Futuras

### Curto Prazo

- [ ] Adicionar testes unitários
- [ ] Implementar i18n (português/inglês)
- [ ] Adicionar loading states
- [ ] Implementar error boundaries

### Médio Prazo

- [ ] Sistema de CMS (Strapi/Sanity)
- [ ] Autenticação de usuários
- [ ] Sistema de notificações
- [ ] PWA (Progressive Web App)

### Longo Prazo

- [ ] Sistema de inscrições próprio
- [ ] Painel administrativo
- [ ] Integração com pagamentos
- [ ] App mobile (React Native)

## 📚 Convenções de Código

### Nomenclatura

- **Componentes**: PascalCase (`Hero.tsx`)
- **Arquivos**: kebab-case (`social-links.ts`)
- **CSS Classes**: kebab-case (`.hero-inner`)
- **Constantes**: UPPER_SNAKE_CASE (`SOCIAL_LINKS`)

### Estrutura de Arquivos

```typescript
// 1. Imports externos
import React from 'react';

// 2. Imports internos
import { Component } from '../components';

// 3. Imports de tipos
import type { Props } from '../types';

// 4. Imports de estilos
import './styles.css';

// 5. Componente
export const Component = () => { ... };
```

## 🤝 Contribuindo

### Fluxo de Trabalho

1. Fork do repositório
2. Criar branch feature (`git checkout -b feature/nova-funcionalidade`)
3. Commit das mudanças (`git commit -m 'feat: adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abrir Pull Request

### Conventional Commits

```
feat: nova funcionalidade
fix: correção de bug
docs: atualização de documentação
style: formatação de código
refactor: refatoração
test: adição de testes
chore: tarefas de manutenção
```

## 📖 Recursos

### Documentação

- [Astro Docs](https://docs.astro.build)
- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

### Comunidade

- Discord do Astro
- Stack Overflow
- GitHub Discussions

