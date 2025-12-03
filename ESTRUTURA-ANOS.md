# Estrutura Multi-Anos - Flamingalo

## 📋 Resumo das Mudanças

Este projeto foi reestruturado para suportar múltiplas edições do Flamingalo (2025, 2026, etc.) como "sites" separados dentro do mesmo repositório.

## 🏗️ Nova Estrutura de Diretórios

```
src/
├── components/
│   ├── 2025/              # Componentes específicos de 2025
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── InfoCard.tsx
│   │   ├── InfoSection.tsx
│   │   ├── SurvivalGuide.tsx
│   │   ├── SocialCard.tsx
│   │   ├── GetInvolved.tsx
│   │   ├── Footer.tsx
│   │   ├── Menu.tsx
│   │   └── index.ts
│   ├── 2026/              # Componentes específicos de 2026 (clone de 2025)
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── InfoCard.tsx
│   │   ├── InfoSection.tsx
│   │   ├── SurvivalGuide.tsx
│   │   ├── SocialCard.tsx
│   │   ├── GetInvolved.tsx
│   │   ├── Footer.tsx
│   │   ├── Menu.tsx
│   │   └── index.ts
│   └── index.ts           # Exportações centralizadas
├── constants/
│   ├── 2025/
│   │   └── social-links.ts  # Constantes específicas de 2025
│   └── 2026/
│       └── social-links.ts  # Constantes específicas de 2026
├── pages/
│   ├── 2025/
│   │   └── index.astro    # Página /2025
│   ├── 2026/
│   │   └── index.astro    # Página /2026
│   ├── index.astro        # Página inicial (usa componentes 2025)
│   ├── blog.astro
│   └── collaboration-guide.astro
```

## 🔗 URLs Disponíveis

- **/** - Página inicial (atualmente mostra 2026) ⭐
- **/2025** - Site do Flamingalo 2025
- **/2026** - Site do Flamingalo 2026
- **/blog** - Blog (compartilhado)
- **/collaboration-guide** - Guia de colaboração (compartilhado)

## 🎯 Como Funciona

### Isolamento por Ano

Cada ano tem seus próprios:
1. **Componentes** - Pasta `src/components/XXXX/`
2. **Constantes** - Pasta `src/constants/XXXX/`
3. **Página** - `src/pages/XXXX/index.astro`

### Navegação entre Anos

O menu em cada versão inclui links para ambos os anos:
- Flamingalo 2025
- Flamingalo 2026
- Blog Posts
- Collaboration Guide

## 📝 Como Editar Cada Ano

### Para editar o site de 2025:
1. Componentes: `src/components/2025/`
2. Constantes: `src/constants/2025/social-links.ts`
3. Página principal: `src/pages/2025/index.astro`

### Para editar o site de 2026:
1. Componentes: `src/components/2026/`
2. Constantes: `src/constants/2026/social-links.ts`
3. Página principal: `src/pages/2026/index.astro`

## 🔧 Estrutura de Imports

### Página 2025
```typescript
import { Header, Hero, InfoSection, ... } from '../../components/2025';
```

### Página 2026
```typescript
import { Header, Hero, InfoSection, ... } from '../../components/2026';
```

### Componentes GetInvolved
```typescript
// 2025
import { SOCIAL_LINKS } from '../../constants/2025/social-links';

// 2026
import { SOCIAL_LINKS } from '../../constants/2026/social-links';
```

## ✨ Vantagens desta Estrutura

1. **Isolamento Completo** - Cada ano é independente
2. **Facilidade de Manutenção** - Mudanças em um ano não afetam o outro
3. **Histórico Preservado** - Sites antigos permanecem acessíveis
4. **Escalável** - Fácil adicionar 2027, 2028, etc.
5. **Compartilhamento** - Páginas comuns (blog, guides) são compartilhadas
6. **Build Único** - Tudo é gerado em um único build

## 🚀 Comandos

```bash
# Desenvolvimento
npm run dev

# Build (gera todas as páginas)
npm run build

# Preview do build
npm run preview
```

## 📦 Build Output

O build gera:
```
dist/
├── index.html              # Página inicial (2026) ⭐
├── 2025/
│   └── index.html         # Flamingalo 2025
├── 2026/
│   └── index.html         # Flamingalo 2026
├── blog/
│   └── index.html
├── collaboration-guide/
│   └── index.html
└── _astro/                # Assets otimizados
    ├── 2025.CWdCqQLJ.js
    ├── 2026.CWdCqQLJ.js
    └── ...
```

## 🔮 Próximos Passos

### Para adicionar Flamingalo 2027:

1. Criar diretórios:
```bash
mkdir -p src/components/2027 src/constants/2027
```

2. Copiar de 2026:
```bash
cp -r src/components/2026/* src/components/2027/
cp -r src/constants/2026/* src/constants/2027/
```

3. Atualizar imports em `GetInvolved.tsx`:
```typescript
import { SOCIAL_LINKS } from '../../constants/2027/social-links';
```

4. Criar página:
```bash
mkdir -p src/pages/2027
```

5. Criar `src/pages/2027/index.astro`:
```astro
---
import Layout from '../../layouts/Layout.astro';
import { Header, Hero, InfoSection, SurvivalGuide, GetInvolved, Footer, Menu } from '../../components/2027';
---

<Layout title="Flamingalo 2027 - Burn Portugal">
  <!-- conteúdo -->
</Layout>
```

6. Atualizar menus para incluir o link para 2027

## 📊 Status Atual

✅ Estrutura de diretórios criada
✅ Componentes 2025 movidos
✅ Componentes 2026 clonados
✅ Páginas /2025 e /2026 criadas
✅ Página inicial atualizada
✅ Menus atualizados com links entre anos
✅ Blog e Collaboration Guide atualizados
✅ Build testado e funcionando
✅ Dev server testado e funcionando

## 🎨 Personalizações Futuras

Para diferenciar visualmente cada ano, você pode:

1. **Criar estilos específicos por ano**:
   - `src/styles/2025.css`
   - `src/styles/2026.css`

2. **Adicionar classes CSS por ano**:
```astro
<Layout title="..." yearClass="year-2025">
```

3. **Usar variáveis CSS diferentes**:
```css
/* 2025 */
:root {
  --primary-color: #e74c76;
}

/* 2026 */
:root {
  --primary-color: #76e74c; /* verde para 2026 */
}
```

4. **Diferentes backgrounds**:
   - `public/2025-background.jpg`
   - `public/2026-background.jpg`

## 📝 Notas Importantes

- Cada ano é **completamente independente**
- Mudanças em constantes de um ano **não afetam** outros anos
- O menu permite navegação fácil entre todos os anos
- A página inicial (/) atualmente mostra **2026** (edição mais recente)
- Para mudar qual ano aparece na página inicial, edite o import em `src/pages/index.astro`
- Assets (imagens, etc.) podem ser compartilhados ou específicos por ano

## 🔗 Links Úteis

- [Documentação Astro](https://docs.astro.build)
- [README Principal](./README.md)
- [Arquitetura](./ARCHITECTURE.md)
- [Quickstart](./QUICKSTART.md)

