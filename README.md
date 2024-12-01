# Exemplos de Funcionalidades do Next.js v15

Este projeto demonstra o uso dos novos hooks do React 19 em uma aplicação Next.js, bem como as novas funcionalidades introduzidas no Next.js 15. Ele inclui exemplos de diversos hooks e componentes.

## Começando

Primeiro, instale as dependências:

```bash
yarn install
````

Em seguida, execute o servidor de desenvolvimento (turbopack):

```bash
yarn dev
````

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

````
.
├── app/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── form-showcase/
│   │   └── page.tsx
│   ├── search/
│   │   └── page.tsx
│   └── react-19-hooks/
│       ├── page.tsx
│       ├── action-state/
│       │   └── page.tsx
│       ├── use-optimistic/
│       │   └── page.tsx
│       ├── use-hook/
│       │   └── page.tsx
│       └── use-form-status/
│           └── page.tsx
├── public/
│   ├── next.svg
│   └── vercel.svg
├── .eslintrc.json
├── .prettierrc
├── next.config.js
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.ts
└── tsconfig.json
````

## Exemplos

O projeto inclui os seguintes exemplos:

1. **Componente de Formulário do Next.js 15**: Demonstra o novo componente Form introduzido no Next.js 15.
   - URL: `/form-showcase`

2. **Busca com SearchParams Assíncronos**: Mostra como usar searchParams assíncronos no Next.js 15.
   - URL: `/search`

3. **useActionState**: Demonstra a submissão de formulários com ações do lado do servidor e gerenciamento de estado.
   - URL: `/react-19-hooks/action-state`

4. **useOptimistic**: Mostra atualizações otimistas na interface antes da confirmação do servidor.
   - URL: `/react-19-hooks/use-optimistic`

5. **use**: Ilustra a busca de dados com o hook `use`.
   - URL: `/react-19-hooks/use-hook`

6. **useFormStatus**: Exibe o status de submissão do formulário e o estado pendente.
   - URL: `/react-19-hooks/use-form-status`

## Funcionalidades Demonstradas

- Componente de Formulário do Next.js 15
- SearchParams Assíncronos
- Hooks do React 19: useActionState, useOptimistic, use, useFormStatus

## Saiba Mais

Para saber mais sobre Next.js e React, confira os seguintes recursos:

- [Documentação do Next.js](https://nextjs.org/docs) - aprenda sobre as funcionalidades e a API do Next.js.
- [Aprenda Next.js](https://nextjs.org/learn) - um tutorial interativo de Next.js.
- [Documentação do React](https://reactjs.org/) - aprenda sobre as funcionalidades e a API do React.

## Implantar no Vercel

A maneira mais fácil de implantar sua aplicação Next.js é usar a [Plataforma Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) dos criadores do Next.js.

Confira nossa [documentação de implantação do Next.js](https://nextjs.org/docs/deployment) para mais detalhes.
