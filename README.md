# Tech Challenge | Pós-Tech FullStack Development - FIAP

Este é o projeto desenvolvido durante a fase III do curso de pós-graduação em FullStack Development da FIAP - turma I/2024.

Membros do grupo 37:

- Felipe Dias Amorim Pessoa - RM355212 - felipediasamorimpessoa@gmail.com
- Sérgio Percevallis Neto - RM354791 - sergioneto261001@gmail.com
- Thiago Scheffer Fialho - RM353477 - thiago.sch.fialho@gmail.com
- Leonardo Felipe Boatti - leonardoboatti@hotmail.com

[Visualizar Documentação Técnica](#documentação-técnica-do-projeto) <br>
[Visualizar Escopo/Requisitos](#o-problema) <br>
[Visualizar Projeto back-end](https://github.com/XFelipeX/fiap-tech-challenge-2fase)

## O problema

Após o sucesso do desenvolvimento da aplicação de blogging dinâmico
utilizando a plataforma OutSystems e a implementação do back-end em Node.js,
chegou a hora de criarmos uma interface gráfica robusta, intuitiva e eficiente para
esta aplicação. Este desafio focará em desenvolver o front-end, proporcionando
uma experiência de usuário excelente tanto para professores(as) quanto para
estudantes.
Objetivo
Desenvolver uma interface gráfica para a aplicação de blogging utilizando
React. A aplicação deve ser responsiva, acessível e fácil de usar, permitindo aos
docentes e alunos(as) interagir com os diversos endpoints REST já
implementados no back-end.
Requisitos funcionais

---

### A interface gráfica deve incluir as seguintes páginas e funcionalidades

#### Requisitos funcionais

1. Página principal (Lista de posts)
   o Exibir uma lista de todos os posts disponíveis.
   o Cada item da lista deve mostrar o título, autor e uma breve
   descrição do post.
   o Incluir um campo de busca para filtrar posts por palavras-chave.
2. Página de leitura de post
   o Exibir o conteúdo completo de um post selecionado.
   o Permitir comentários nos posts (opcional).
3. Página de criação de postagens
   o Formulário para que docentes possam criar postagens.
   o Campos para título, conteúdo e autor.
   o Botão para enviar o post ao servidor.
4. Página de edição de postagens
   o Formulário para que os(as) professores(as) possam editar
   postagens existentes.
   o Carregar os dados atuais do post para edição.
   o Botão para salvar as alterações.
5. Página administrativa
   o Exibir uma lista de todas as postagens, com opções para editar e
   excluir cada post.
   o Botões para editar e excluir postagens específicas.
6. Autenticação e autorização
   o Implementar login para professores.
   o Garantir que apenas usuários autenticados possam acessar as
   páginas de criação, edição e administração de postagens.
   Requisitos técnicos

#### Requisitos técnicos

1. Desenvolvimento em React
   o Utilizar React para desenvolver a interface gráfica.
   o Utilização de hooks e componentes funcionais.
2. Estilização e responsividade
   o Utilizar Styled Components ou outro método de estilização.
   o Garantir que a aplicação seja responsiva, funcionando bem em
   dispositivos móveis e desktops.
3. Integração com Back-End
   o Realizar chamadas aos endpoints REST para obter, criar, editar e
   excluir posts.
   o Gerenciar o estado da aplicação com ferramentas como Context
   API ou Redux (opcional).
4. Documentação
   o Documentação técnica detalhada do front-end no README do
   repositório, incluindo setup inicial, arquitetura da aplicação e guia
   de uso.


## Documentação Técnica do Projeto - FIAP Tech Challenge 3ª Fase

### Introdução

Este documento oferece uma visão detalhada do projeto da 3ª fase do FIAP Tech Challenge. A aplicação foi desenvolvida utilizando React com TypeScript e gerenciada através do Vite como bundler e servidor de desenvolvimento. O projeto é uma interface web para consumir e gerenciar posts, com rotas de autenticação e administração. Aqui, descrevemos como instalar, configurar e executar a aplicação, além de dar uma visão geral da arquitetura e stack utilizada.

### Setup Inicial

**Pré-requisitos:**

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em seu ambiente:

- Node.js v20+
- npm v10+
- Backend implementado na 2ª fase do Tech Challenge, Link para o repositorio: https://github.com/XFelipeX/fiap-tech-challenge-2fase

**Instalação:**

1. Clone o repositório do projeto: 
```
git clone https://github.com/XFelipeX/fiap-tech-challenge-3fase.git
```

3. Navegue até a pasta do projeto: 
```
cd fiap-tech-challenge-3fase
```

4. Instale as dependências do projeto:
```
npm install
```

**Configuração:**

Crie um arquivo .env na raiz do projeto com as seguintes variáveis:

- NODE_LOCAL_PORT=<sua_porta>
- NODE_DOCKER_PORT=<porta_do_docker>
- BACKEND_URL=<url_do_backend>
- VITE_BACKEND_URL=<url_do_backend>

**Execução:**

Para executar a aplicação em ambiente de desenvolvimento, utilize o seguinte comando:
```
npm run dev
```

Isso iniciará o servidor de desenvolvimento do Vite e a aplicação estará disponível localmente em http://localhost:5173.

Para construir o projeto para produção, execute:
```
npm run build
```

## Arquitetura da Aplicação

A estrutura do projeto segue os princípios do React para a construção de uma SPA (Single Page Application) com suporte ao roteamento via react-router-dom. Abaixo está a descrição das principais partes do projeto:

### Estrutura de Pastas

- **src/**: Contém todo o código fonte da aplicação.
- **assets/**: Arquivos estáticos (imagens, ícones, etc.).
- **components/**: Componentes reutilizáveis da interface.
- **context/**: Gerenciamento de contexto global da aplicação.
- **pages/**: Páginas principais da aplicação, como:
  - **Login**: Página de login do usuário.
  - **PostDetail**: Exibe um post específico para leitura.
  - **PostsForm**: Formulário para criar ou editar posts.
  - **PostsList**: Lista todos os posts.
  - **PostsListAdmin**: Interface de administração para gerenciar posts.
  - **SignUp**: Página de cadastro de novos usuários.
- **routes/**: Configura as rotas da aplicação. O arquivo Routes.jsx define os caminhos e seus componentes correspondentes.
- **services/**: Serviços para chamadas HTTP utilizando Axios.
- **styles/**: Arquivo de estilo da aplicação que define as cores e fontes globais da aplicação.

## Rotas
As rotas são definidas no arquivo **Routes.jsx** utilizando o **react-router-dom**:

- **/**: Página principal exibindo a lista de posts.
- **/posts**: Página com todos os posts.
- **/posts/:id**: Exibe um post específico para leitura.
- **/postsAdmin**: Página de administração para gerenciar os posts.
- **/postsForm**: Formulário de criação e edição de posts.
- **/login**: Página de login.
- **/signUp**: Página de cadastro de novos usuários.

## Estilização
O projeto utiliza styled-components para gerenciar o CSS-in-JS, proporcionando componentes estilizados que são reutilizados por toda a aplicação.

## Stack utilizada
- **React v18.3.1**
- **TypeScript**
- **Vite**
- **Axios**
- **Yup e Formik**
- **Styled-components**
- **ESLint**
- **Docker**

