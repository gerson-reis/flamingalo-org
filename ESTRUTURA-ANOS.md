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
│   ├── 2027/              # Componentes específicos de 2027 (clone de 2026) ⭐ edição atual
│   │   └── ...            # mesmos arquivos de 2026
│   └── index.ts           # Exportações centralizadas
├── constants/
│   ├── 2025/
│   │   └── social-links.ts  # Constantes específicas de 2025
│   ├── 2026/
│   │   └── social-links.ts  # Constantes específicas de 2026
│   └── 2027/
│       └── social-links.ts  # Constantes específicas de 2027
├── pages/
│   ├── 2025/
│   │   └── index.astro    # Página /2025
│   ├── 2026/
│   │   └── index.astro    # Página /2026
│   ├── 2027/
│   │   └── index.astro    # Página /2027
│   ├── pt/                # Versões em português de todas as páginas (/pt/...)
│   ├── index.astro        # Página inicial (usa componentes 2027)
│   ├── blog.astro
│   └── collaboration-guide.astro
```

## 🔗 URLs Disponíveis

- **/** - Página inicial (atualmente mostra 2027) ⭐
- **/2025** - Site do Flamingalo 2025
- **/2026** - Site do Flamingalo 2026
- **/2027** - Site do Flamingalo 2027
- **/blog** - Blog (compartilhado)
- **/collaboration-guide** - Guia de colaboração (compartilhado)

Cada URL tem uma versão em português em `/pt/` (ex.: `/pt/2027`).

## 🎯 Como Funciona

### Isolamento por Ano

Cada ano tem seus próprios:
1. **Componentes** - Pasta `src/components/XXXX/`
2. **Constantes** - Pasta `src/constants/XXXX/`
3. **Página** - `src/pages/XXXX/index.astro`

### Navegação entre Anos

O menu em cada versão inclui links para todos os anos:
- Flamingalo 2027
- Flamingalo 2026
- Flamingalo 2025
- Blog Posts
- Collaboration Guide

Os rótulos do menu nomeiam a edição para onde apontam: o link `/2026` diz sempre "Flamingalo 2026". Não os altere quando a edição atual mudar.

## 📝 Como Editar Cada Ano

### Para editar o site de 2025:
1. Componentes: `src/components/2025/`
2. Constantes: `src/constants/2025/social-links.ts`
3. Página principal: `src/pages/2025/index.astro`

### Para editar o site de 2026:
1. Componentes: `src/components/2026/`
2. Constantes: `src/constants/2026/social-links.ts`
3. Página principal: `src/pages/2026/index.astro`

### Para editar o site de 2027 (edição atual, também servida em `/`):
1. Componentes: `src/components/2027/`
2. Constantes: `src/constants/2027/social-links.ts`
3. Página principal: `src/pages/2027/index.astro` (e `src/pages/index.astro` para `/`)

> **Datas do evento:** ficam em `components/{ano}/Hero.tsx` (data do banner) e `components/{ano}/InfoSection.tsx` (primeiro cartão). O `EVENT_INFO` em `constants/2025` e `constants/2026` não é usado por nenhum componente.
>
> **Guia de Sobrevivência 2027:** por enquanto o botão abre o guia de 2026, com uma nota "em breve" (`survivalGuide.comingSoon2027`). Quando o guia de 2027 existir, atualize `guideUrl` em `components/2027/SurvivalGuide.tsx` e remova a nota.
>
> **Visual de 2027:** enquanto não houver arte do tema 2027, o hero usa fundo rosa e um título em texto (`.hero.hero-2027` e `.hero h1.hero-title-2027` em `global.css`, `<h1 className="hero-title-2027">` em `components/2027/Hero.tsx`). Quando a arte chegar, é aí que se troca.

## 🔧 Estrutura de Imports

### Página 2025
```typescript
import { Header, Hero, InfoSection, ... } from '../../components/2025';
```

### Página 2026
```typescript
import { Header, Hero, InfoSection, ... } from '../../components/2026';
```

### Página 2027 (e página inicial)
```typescript
import { Header, Hero, InfoSection, ... } from '../../components/2027';
```

### Componentes GetInvolved
```typescript
// 2025
import { SOCIAL_LINKS } from '../../constants/2025/social-links';

// 2026
import { SOCIAL_LINKS } from '../../constants/2026/social-links';

// 2027
import { SOCIAL_LINKS } from '../../constants/2027/social-links';
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
├── index.html              # Página inicial (2027) ⭐
├── 2025/
│   └── index.html         # Flamingalo 2025
├── 2026/
│   └── index.html         # Flamingalo 2026
├── 2027/
│   └── index.html         # Flamingalo 2027
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

### Para adicionar Flamingalo 2028:

> ⚠️ Sempre crie o ano novo **antes** de mexer na página inicial. Nunca edite os componentes do ano anterior para atualizar `/`: isso muda também a página de arquivo `/AAAA` desse ano (foi o que aconteceu com `/2026` em setembro de 2026).

1. Criar diretórios:
```bash
mkdir -p src/components/2028 src/constants/2028 src/pages/2028 src/pages/pt/2028
```

2. Copiar de 2027:
```bash
cp src/components/2027/* src/components/2028/
cp src/constants/2027/social-links.ts src/constants/2028/
```

3. Em `components/2028/GetInvolved.tsx`, apontar para as constantes e o texto do novo ano:
```typescript
import { SOCIAL_LINKS } from '../../constants/2028/social-links';
// ...
{t('getInvolved.paragraph2.2028')}
```

4. Criar `src/pages/2028/index.astro` e `src/pages/pt/2028/index.astro`: copiar de 2027, trocar o import para `components/2028` e o título para "Flamingalo 2028 - Burn Portugal".

5. Apontar a página inicial para o novo ano: em `src/pages/index.astro`, `src/pages/pt/index.astro` e nas páginas de blog e collaboration-guide (EN e PT), trocar `components/2027` por `components/2028`.

6. Atualizar **todos** os menus (`components/*/Menu.tsx`) para incluir o link para 2028.

7. Em `src/i18n/index.ts` (blocos `en` e `pt`), adicionar `nav.2028` e `getInvolved.paragraph2.2028`.

8. Adicionar `export * as Components2028 from './2028';` em `src/components/index.ts`.

9. Atualizar datas, textos, imagens e o botão/nota do Guia de Sobrevivência em `components/2028/` e `constants/2028/`, e confirmar que `/2027` continua mostrando as datas de 2027

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
✅ Edição 2027 criada (componentes, constantes, páginas /2027 e /pt/2027)
✅ Página inicial, blog e collaboration guide usando 2027
✅ /2026 restaurado com o conteúdo original de 2026

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
- A página inicial (/) atualmente mostra **2027** (edição mais recente)
- Para mudar qual ano aparece na página inicial, edite o import em `src/pages/index.astro`
- Assets (imagens, etc.) podem ser compartilhados ou específicos por ano

## 🔗 Links Úteis

- [Documentação Astro](https://docs.astro.build)
- [README Principal](./README.md)
- [Arquitetura](./ARCHITECTURE.md)
- [Quickstart](./QUICKSTART.md)

