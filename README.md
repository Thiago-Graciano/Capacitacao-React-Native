# 📱 Capacitação React Native - Unect Jr.

Este repositório reúne os projetos desenvolvidos durante a Capacitação de React Native da Unect Jr.

O objetivo da capacitação foi praticar conceitos fundamentais do desenvolvimento mobile utilizando React Native, criando diferentes aplicações para consolidar o aprendizado de componentes, navegação, gerenciamento de estado, armazenamento local e integração com APIs.

---

## 🚀 Projetos

Cada branch deste repositório representa uma aplicação diferente desenvolvida ao longo da capacitação.

| Branch | Projeto | Descrição |
|---------|---------|---------|
| `main` | 💰 Controle Financeiro | Aplicativo para gerenciamento de receitas e despesas pessoais. |
| `AppBiscoitoDaSorte` | 🥠 Biscoito da Sorte | Aplicativo que exibe frases aleatórias ao abrir um biscoito virtual. |
| `AppCronometro` | ⏱️ Cronômetro | Aplicativo de cronômetro com controle de tempo em tempo real. |
| `AppInstaSujeito` | 📸 InstaSujeito | Clone simplificado do Instagram para estudo de interfaces e componentes. |
| `AppLoginBancoReact` | 🏦 Login Banco React | Tela de login inspirada em aplicativos bancários. |

---

## 🛠️ Tecnologias Utilizadas

- React Native
- JavaScript
- React Navigation
- AsyncStorage
- Axios
- Expo

---

## 📂 Como Executar o Projeto (App)

Clone o repositório:
```bash
git clone https://github.com/Thiago-Graciano/Capacitacao-React-Native.git
cd Capacitacao-React-Native
```

Instale as dependências:
```bash
npm install
```

Inicie o projeto:
```bash
npm start
```

Para acessar uma aplicação específica, altere para a branch correspondente:
```bash
git checkout AppCronometro
```
ou
```bash
git checkout AppInstaSujeito
```

> ⚠️ A branch `main` (Controle Financeiro) depende do backend rodando — veja a seção **Backend** abaixo antes de testar login, cadastro e despesas.

---

## 🖥️ Backend

O app `main` (Controle Financeiro) consome uma API própria, fornecida pelo curso (desenvolvida por [devfraga](https://github.com/devfraga)), feita em **Node.js + TypeScript + Prisma + SQLite**.

🔗 Repositório do backend: https://github.com/devfraga/backend-financas

### Como rodar o backend localmente
1. Clone o repositório acima
2. Instale as dependências:
```bash
   yarn install
```
3. Rode as migrations do Prisma (cria o banco SQLite local):
```bash
   npx prisma migrate dev
```
4. Inicie o servidor:
```bash
   yarn dev
```
5. Descubra o IP local da sua máquina (`ipconfig` no Windows / `ifconfig` no Mac/Linux) e atualize a `baseURL` em `src/services/api.js` do app com esse IP e a porta `3333`:
```js
   const api = axios.create({
       baseURL: 'http://SEU_IP_LOCAL:3333'
   })
```

---

## 🗄️ Persistência e Vínculo por Usuário

As transações são salvas em SQLite via Prisma, sempre vinculadas ao usuário autenticado:

- No login, o backend gera um token **JWT** contendo o `id` do usuário (`sub`)
- Toda rota protegida passa pelo middleware `isAuthenticated`, que decodifica o token e extrai o `user_id`
- Criação, listagem e saldo de transações sempre filtram por esse `user_id` — nunca por dado enviado pelo cliente — garantindo que cada usuário só acesse os próprios dados

---

## 🎥 Demonstração Funcional
<img src="./assetsToREADME/PresentationGIF.gif" width="384" />
---

## 🎯 Objetivos de Aprendizagem

Durante o desenvolvimento destes projetos foram praticados conceitos como:

- Criação de interfaces mobile
- Componentização
- Navegação entre telas
- Manipulação de estados
- Consumo de APIs
- Armazenamento local
- Boas práticas de desenvolvimento com React Native

---

## 👨‍💻 Autor

Desenvolvido por **Thiago-Graciano** durante a Capacitação de React Native da Unect Jr.
