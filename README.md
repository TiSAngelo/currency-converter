# 💻 Current Currency APP -  Aplicação FrontEnd

### IMPORTANTE
Para rodar o projeto localmente é necessário estar utilizando o NODEJS na sua versão 12.14.0.
*Recomenda-se que seja instalado o NVM (Node Version Manager) em sua máquina para conseguir alterar as versões facilmente.* [NVM](https://github.com/nvm-sh/nvm)

O Projeto foi gerado com Angular CLI (https://github.com/angular/angular-cli) em sua versão 12.2.6

### SOBRE O PROJETO

O Projeto CurrentCurrencyApp consiste em uma aplicação frontend desenvolvida em angular 12, sem o uso de libs de componentes e todo o conteúdo básico apresentado em tela é consumido por meio de requisições à API de Cotações (https://docs.awesomeapi.com.br/api-de-moedas)


Para iniciar o desenvolvimento é necessário o Nodejs, Npm, Angular-CLI e uma IDE (recomendo o VSCode).


## Estrutura

A árvore abaixo representa os diretórios propóstos para compor a aplicação Angular.

```
.
└── src
    ├── app
    │   ├── components
    │   ├── data
    │   ├── pages
    │   ├── assets
    │   └── environments
    └── styles
```

### `Components`

O diretório `components` é um container de componentes que serão declarados no AppModule. O diretório contém os componentes quem fazem parte da estrutura do Projeto a nível de página, como o header e o card de apresentação das cotações.

### `Data`

O diretório `data` contém os modelos de entidade e serviços que conectam com a API.

### `Pages`

O diretório `pages` contém o Dashboard para os cards.

### `Assets`

O diretório `assets` contém os ativos visuais utilizados no projeto, como logotipo e loader.

### `Environments`

O diretório `environments` contém os arquivos de configuração de variáveis de ambiente da aplicação.

___
## PARA RODAR O PROJETO LOCALMENTE DIGITE O COMANDO:

```
npm start
```

Após, navegue para `http://localhost:4200/`, a aplicação irá recarregar automaticamente se você alterar qualquer arquivo.


___
## PARA GERAR O BUILD DIGITE O COMANDO:

```
npm run build
```

## PARA EXECUTAR TESTES UNITÁRIOS VIA [Karma](https://karma-runner.github.io) DIGITE O COMANDO:

```
npm test
```

___
## 🔧 Características :
- Angular 12+ & Typescript
- CSS
 

