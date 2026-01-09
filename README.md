# Desafio de Automação de API - DemoQA / BookStore

Este repositório contém a automação de testes para o swegger[Book Store API](https://demoqa.com/swagger/), utilizando **Cypress** com **BDD (Cucumber)

## 🚀 Tecnologias
* Cypress API / JS
* Gherkin (Cucumber)

## 📋 Funcionalidades Testadas
* Geração de Token de acesso.
* Cadastro/Criação de usuário.
* Listagem de livros disponíveis.
* Reserva/Aluguel de livros.

## 🛠️ Pré-requisitos
Antes de começar, você precisará ter instalado em sua máquina:
* **Node.js** (Versão 18 ou superior recomendada)
* **npm** (Geralmente instalado junto com o Node)
* **Git** (Para clonar o repositório)

## 🔧 Instalação e Execução
1. **Clone o repositório:**
   ```bash
   git clone [LINK_DO_SEU_REPO]
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Abrir interface do cypress:**
   ```bash
   npx cypress open
    ```

4. **Rodar em modo headless (Terminal):**
    ```bash
    npx cypress run
    ```

## 📊 Relatórios
O projeto utiliza o Mochawesome Reporter. Para gerar e visualizar os resultados:
 Execute os testes com:
 ```bash
 npm test
```
Os resultados serão gerados na pasta cypress/reports.

* **Nota: Caso o ambiente local não processe a união dos arquivos HTML devido a permissões de sistema, os logs detalhados podem ser conferidos diretamente no terminal durante a execução.**