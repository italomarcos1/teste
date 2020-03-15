![EloGroup](../EloGroup.png)

---
Especificação do Front-end
---

Construí uma **SPA** (Single-Page Application) em **React**, consumindo a API do Back-end. Contém a página principal do formulário, uma página de redirecionamento (exibida após o usuário preencher o formulário), com a opção de atualizar os dados já preenchidos.

Tomei a liberdade de criar uma página de **Administrador**, com email e senha de acesso para efetuar **Login** e ter acesso ao **Dashboard**, onde todas as respostas do formulário são listadas. 

---
Estrutura de Pastas
---
```
src
├── components
|	├── Header
|	|   ├── index.js
|       |   └── styles.js
|       |
|       ├── Input
|       |   ├── index.js
|       |   └── styles.js
|       |
|       ├── InputMask
|	|    ├── index.js
|       |    └── styles.js
|       |
|       └── Select
|	     ├── index.js
|    	     └── styles.js
|   
├── config
|   └── ReactotronConfig.js
|
├── pages
|   ├── Admin
|   |	├── Dashboard
|   |	|	├── index.js
|   | 	|	└── styles.js
|   | 	|
|   |	└── Login
|   |		├── index.js
|   | 		└── styles.js
|   |
|   ├── AfterForm
|   |	├── index.js
|   | 	└── styles.js
|   |
|   ├── Form
|   |	├── index.js
|   | 	└── styles.js
|   |
|  └── UpdateForm
|   	├── index.js
|    	└── styles.js
|
├── services
|    ├── api.js
|    └── history.js
|
├── store
|   ├── modules
|   |   ├── auth
|   |   |    ├── actions.js
|   |   |    ├── reducer.js
|   |   |    └── sagas.js
|   |   ├── rootReducer.js
|   |   └── rootSaga.js
|   ├── createStore.js
|   ├── index.js
|   └── persistReducers.js
|
├── styles
|	└── global.js
|      
├── App.js
├── index.js
├── routes.js
├── .eslintrc.js
└── .prettierrc.js

		
```
`src` - pasta principal do repositório.

`components` - cada sub-pasta representa os componentes que foram reutilizados em várias partes da aplicação, assim reduz o código duplicado, compartilha o mesmo estilo entre as páginas e torna o desenvolvimento mais produtivo. Cada sub-pasta contém o arquivo **index.js** que define o componente em si, e um **styles.js** que contém a estilização e os componentes internos da página.

`components/Header` - o cabeçalho da aplicação, aparece na página principal do Administrador. 

`components/Input` - componente de input da lib [Unform](https://github.com/rocketseat/unform). Permite estilização e validações.

`components/InputMask` - componente de input especial que permite aplicar máscara no input, usado pra preencher o campo de telefone e não permitir caracteres que não sejam númericos. Usa uma **regex** para validar o telefone informado. Provém da **lib** [React Input Mask](https://github.com/sanniassin/react-input-mask).

`components/Select` - componente que substitui o ComboBox padrão do JavaScript. Permite aplicar validação nos valores, é altamante estilizável e permite listar valores puxados da API. Provém da **lib** [React Select](https://react-select.com/async).

`config` - contém o arquivo de configuração do [Reactotron](https://github.com/infinitered/reactotron), um debugger para React e React Native que utilizo durante o desenvolvimento da aplicação para monitorar os reducers, chamadas à API e fazer log dos erros.

`pages/Admin/Dashboard` - página principal do Administrador, lista todas as respostas do formulário. O cabeçalho de `components/Header` é exibido nesta página.

`pages/Admin/Login` - página de Login do Administrador. Efetua validação usando a lib [Yup](https://github.com/jquense/yup) e utiliza [Redux](https://github.com/reduxjs/redux) para se comunicar a API, compartilhar dados entre os componentes e salvar os dados no LocalStorage do navegador, para o usuário permanecer logado na aplicação.

`pages/Form` - página principal do formulário, que o cliente terá acesso. Utiliza o componente [Form](https://unform.dev/guides/basic-form) da lib [Unform](https://github.com/rocketseat/unform) e os inputs listados acima. Conta com validações também utilizando a lib [Yup](https://github.com/jquense/yup). Usa toasts da lib [React Toastify](https://github.com/fkhadra/react-toastify) para avisar quando o usuário não preenche algum campo corretamente. O usuário é bloqueado de acessar essa página após preencher o formulário, e é redirecionado para a página `AfterForm`.

`pages/AfterForm` - página de redirecionamento acessada após o usuário preencher o formulário. O usuário é impedido de acessar esta página se não preencheu o formulário, e após preencher, não pode preencher novamente o formulário. É possível apenas modificar seus dados, mas não preencher uma nova resposta.

`pages/UpdateForm` - reutiliza o formulário da página `Form` para permitir atualizar os dados do usuário. Apenas modifica os dados preenchidos, não é adicionada uma nova resposta ao banco.

`services/api` - arquivo de conexão à API utilizando a lib [Axios](https://github.com/axios/axios).

`services/history` - arquivo de configuração do `history`, da lib [History](https://github.com/ReactTraining/history), utilizado para redirecionar o usuário entre páginas.

`store` - contém os arquivos de configuração do Redux e conexão com o Reactotron. Cada subpasta da pasta `store/modules` representa um reducer. O arquivo **persistReducers.js** usa a lib [Redux Persist](https://github.com/rt2zz/redux-persist) para salvar os dados no LocalStorage do navegador. Os arquivos **rootReducer** e **rootSaga** guardam os reducers e sagas da aplicação, para serem utilizados no `store/index.js`.

`store/modules/auth` - Representa o **reducer** que guarda os dados de autenticação, os dados de login do Administrador. O arquivo **actions.js** contém as actions do Redux, usada para compartilhar dados entre os componentes. O arquivo **reducer.js**  representa o reducer em si, os dados salvos em um estado global e compartilhado com os componentes da aplicação, e efetua um 'listening' nas actions, para fazer alterações no estado. O arquivo **sagas.js** é responsável pelas chamadas à API e qualquer requisição assíncrona, como o login em si.

`styles` - pasta que guarda o estilo global, no arquivo **global.js** usando a lib [Styled Components](https://github.com/styled-components/vscode-styled-components). Uso para resetar valores de estilização aplicados pelo navegador, definir a fonte usada em toda a aplicação (Roboto), cor de fundo e demais configurações de CSS.

`App,js` - componente principal da aplicação. Reúne o componente de rotas, estilo global e todos os componentes necessários para a aplicação rodar. É o componente renderizado pelo **React**.

`routes,js` - componente que efetua o roteamento das páginas usando a lib [React Router](https://github.com/ReactTraining/react-router). Define o roteamento e a SPA em si.

`index.js` - arquivo que renderiza o componente principal `App`, rodando a aplicação no browser.

`.eslintrc.js & .prettierrc` - configuração do [ESLint](https://github.com/eslint/eslint) e [Prettier](https://github.com/prettier/prettier) para identar e formatar o código, usado durante o desenvolvimento da aplicação.


---
### Libs e Frameworks utilizados:

Outras libs utilizadas no desenvolvimento da aplicação, além das libs já listadas acima.

- [React](https://github.com/facebook/react)
- [React Hooks](https://reactjs.org/docs/hooks-intro.html)
- [Redux](https://github.com/reduxjs/redux) - lib para gerenciamento de estado global entre os componentes. Também conta com Redux Saga para lidar com assincronismo e chamadas à API, e Redux Persist.para persistir os dados do usuário no LocalStorage (para mantê-lo logado na aplicação, etc).
- [Reactotron](https://github.com/infinitered/reactotron) - usado em desenvolvimento para debugar a aplicação, monitorar e gerenciar o estado do Redux, e lidar com os dados recebidos da API.
- [Immer](https://github.com/immerjs/immer) - manipula o estado do Redux, sem quebrar a imutabilidade.
- [History](https://github.com/ReactTraining/history) - usado para redirecionamento de rotas.
- [Styled Components](https://github.com/styled-components/styled-components) - cria componentes estilizados permitindo encadear os estilos (estilizar componentes e estruturas internas do componente), e estilizar baseado em propriedades.
- [Axios](https://github.com/axios/axios) - usado para fazer as requisições a API e consumir os dados do back-end, para exibí-los na aplicação.
- [Unform](https://github.com/rocketseat/unform) - biblioteca de formulários contendo Inputs estilizados, máscaras de Input, e diversos componentes para formulários. Usado nas páginas de Login e no formulário principal.
- [React Radio Buttons](https://www.npmjs.com/package/react-radio-buttons) - além das libs para Input e Select, há essa lib que fornece um componente especial de Radio Button, permitindo aplicar validações quando aliado à lib Unform.
- [Polished](https://github.com/styled-components/polished) - manipulação de cores nos botões e inputs da aplicação. Usado em conjunto com o Styled Components.
- [React Toastify](https://github.com/fkhadra/react-toastify) - **alerts** estilizados nas telas de Login e formulário. Exibidos quando o usuário preenche algum dado incorretamente e após sucesso no envio do formulário.
- [Date-fns](https://github.com/date-fns/date-fns) - utilizado para formatar as datas no front-end.
- [Prop Types](https://github.com/facebook/prop-types) - validação dos dados passados como propriedades nos componentes.
- [Yup](https://github.com/jquense/yup) - usado para validar os dados enviados no formulário.

---
###Plataforma Gupy

Italo Marcos

---
###LinkedIn

[Italo Marcos](https://www.linkedin.com/in/italomarcos1)
