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

### A interface gráfica deve incluir as seguintes páginas e funcionalidades

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
7. Desenvolvimento em React
   o Utilizar React para desenvolver a interface gráfica.
   o Utilização de hooks e componentes funcionais.
8. Estilização e responsividade
   o Utilizar Styled Components ou outro método de estilização.
   o Garantir que a aplicação seja responsiva, funcionando bem em
   dispositivos móveis e desktops.
9. Integração com Back-End
   o Realizar chamadas aos endpoints REST para obter, criar, editar e
   excluir posts.
   o Gerenciar o estado da aplicação com ferramentas como Context
   API ou Redux (opcional).
10. Documentação
    o Documentação técnica detalhada do front-end no README do
    repositório, incluindo setup inicial, arquitetura da aplicação e guia
    de uso.
