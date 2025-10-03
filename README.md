# Guia de Desenvolvimento com Next.js

Resumo sobre os conceitos aprendidos e desenvolvidos durante o curso de next.js da origamid

-----

## Next.js vs. React

O Next.js é um **framework** construído sobre o React que otimiza o desenvolvimento de aplicações web, especialmente para produção.

### React

  * Executa principalmente no **navegador (client-side)**.
  * Páginas são populadas via JavaScript no navegador, o que pode impactar negativamente o **SEO** e o tempo de carregamento inicial.
  * Depende de bibliotecas externas para funcionalidades como roteamento (`react-router-dom`).
  * Pode ser hospedado em qualquer servidor web.

### Next.js

  * Executa tanto no **navegador (client-side)** quanto no **servidor (server-side)**.
  * Serve páginas já renderizadas no servidor (**SSR** - Server-Side Rendering), o que melhora o **SEO** e a performance inicial.
  * É uma solução completa, com funcionalidades de roteamento, otimização de imagem, API routes e mais, tudo integrado.
  * É um framework e, portanto, impõe mais regras e convenções.
  * Requer um ambiente de execução Node.js para o deploy.

-----

## Roteamento com o App Router

O Next.js 13+ utiliza o **App Router**, um sistema de roteamento baseado no sistema de arquivos.

  * Cada arquivo `page.tsx` dentro da pasta `app` corresponde a uma rota. Por exemplo, `app/page.tsx` é a rota principal (`/`) e `app/sobre/page.tsx` é a rota `/sobre`.
  * **Rotas Dinâmicas**: Para criar rotas dinâmicas, como `/posts/1`, crie uma pasta com o nome entre colchetes, como `app/posts/[id]/page.tsx`. O valor do ID pode ser acessado na propriedade `params` do componente.
  * **Rotas Catch-all**: Use `[...slug]` para capturar segmentos de uma rota. Por exemplo, `app/posts/[...slug]/page.tsx` pode corresponder a `/posts/primeiro-post/comentarios`. Os segmentos são passados como um array na propriedade `params`.

### Componente `Link`

O componente `next/link` permite a navegação entre páginas sem um recarregamento total (navegação client-side). Por padrão, ele faz **prefetch** no server side(pré-carregamento) de páginas estáticas em segundo plano, melhorando a velocidade de navegação. Esse comportamento de prefetch só pode ser observado em um ambiente de produção. Ele substitui a tag <a> do HTML.

-----

## Estrutura e Componentes

### `layout.tsx`

O arquivo `layout.tsx` define um layout compartilhado para as rotas. Ele é importado automaticamente pelo Next.js e é ideal para elementos repetidos, como barras de navegação ou rodapés. O arquivo `app/layout.tsx` na raiz é obrigatório para definir as tags `<html>` e `<body>`.

### `metadata`

Você pode adicionar meta tags (`<head>`) a uma página exportando a variável `metadata` em um arquivo `page.tsx` ou `layout.tsx`.

### Server Components vs. Client Components

O Next.js introduz dois tipos de componentes para otimizar a renderização.

  * **Server Components**:

      * São o padrão e executam no servidor.
      * Possuem acesso a APIs do servidor, como `fs` e `path`.
      * Podem ser definidos como funções assíncronas para buscar dados diretamente no servidor.
      * Não podem usar `useState`, `useEffect` ou APIs do navegador (`window`, `document`).

  * **Client Components**:
      * Não podem ser componentes assincronos
      * Executam no cliente e são "hidratados" no navegador.
      * Possuem acesso a APIs do navegador e a hooks do React como `useState` e `useEffect`.
      * Para criar um Client Component, adicione a diretiva `'use client'` na primeira linha do arquivo.

   * **Nested Components**:
    * Server components podem conter Client components e Server components, mas client components não pode conter server
    * Evite definir páginas como client components, mantenha como server para poder receber as duas dinâmicas.

-----

## Pré-Renderização

Quando o client component é feito, ele ja pré-renderiza todo o estilo e html no servidor, portanto se desabilitar o js por exemplo, todo o conteúdo
vai estar renderizado na tela, apenas não vai estar executando o js.  

## Renderização

O Next.js decide automaticamente o tipo de renderização com base na configuração e uso de dados.

  * **Static Site Generation (SSG)**:

      * A página é pré-renderizada para um arquivo HTML no momento do `npm run build`.
      * Símbolo no build: `(Static)`.

  * **Server-Side Rendering (SSR)**:

      * A página é renderizada no servidor a cada requisição.
      * Ideal para páginas com conteúdo que muda frequentemente.
      * Símbolo no build: `ƒ (Dynamic)`.

  * **Incremental Static Regeneration (ISR)**:

      * Permite a atualização de páginas estáticas sem a necessidade de um novo `build`. O Next.js revalida e re-renderiza a página em um intervalo de tempo definido.

  * **Client-Side Rendering (CSR)**:

      * Ocorre quando o conteúdo é renderizado no navegador do usuário. Embora garanta dados atualizados, pode afetar o SEO e o desempenho inicial.
      * Geralmente é usado dentro de Client Components, onde os dados são buscados após a hidratação.

-----

## Gerenciamento de Dados

### Server Fetching

Em Server Components, você pode buscar dados diretamente, usando `async/await` com a função `fetch`. Por padrão, o Next.js armazena em cache as requisições `fetch` para evitar buscas repetidas.

### Route Handlers (`route.ts`)

Você pode criar suas próprias APIs JSON no Next.js. Basta criar um arquivo `route.ts` dentro de uma pasta de rota. Os métodos HTTP (`GET`, `POST`, etc.) são definidos como funções exportadas. Uma rota não pode ter um arquivo `page.tsx` e `route.ts` ao mesmo tempo.

### Server Actions

Server Actions são funções assíncronas que executam no servidor, mas podem ser chamadas do cliente, por exemplo, a partir de um formulário. Elas são uma forma segura de lidar com dados sensíveis, pois o código não é exposto ao navegador.

  * Adicione `'use server'` no topo da função ou do arquivo.
  * São ativadas por requisições `POST` automáticas.
  * Podem retornar JSX.
  * Não precisam de um endpoint de API, o Next.js cria um automaticamente.

### Gerenciamento de Cookies

O Next.js oferece a função `cookies()` para gerenciar cookies HTTP.

  * `cookies().getAll()`: Obtém todos os cookies.
  * `cookies().has('nome')`: Verifica se um cookie existe.
  * `cookies().set('nome', 'valor')`: Cria ou atualiza um cookie.
  * `cookies().delete('nome')`: Deleta um cookie.

### `dynamic`

Use a função `next/dynamic` para carregar componentes dinamicamente, o que pode ser útil para desabilitar o SSR para um componente específico.

```tsx
import dynamic from 'next/dynamic';

const DynamicComponent = dynamic(() => import('../components/Hello'), {
  ssr: false,
});

export default function Page() {
  return <DynamicComponent />;
}
```

-----

## Ambientes de Desenvolvimento e Produção

  * **Desenvolvimento**: `npm run dev` - Habilita recursos como hot-reloading e exibe erros de forma detalhada.
  * **Produção**:
      * `npm run build`: Cria a versão otimizada da aplicação. Ele verifica erros e pré-renderiza páginas estáticas (SSG).
      * `npm run start`: Inicia o servidor de produção para servir a aplicação otimizada.