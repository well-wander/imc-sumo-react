# Calculadora de IMC · Torneio de Sumô — Exercício de React

Exercício do módulo **Introdução ao React** do curso de Engenheiro Front-End da [EBAC](https://ebaconline.com.br).

Uma calculadora de IMC (Índice de Massa Corporal) com o tema de um **campeonato de sumô**: antes de subir no dohyō (o ringue), todo lutador passa pela pesagem oficial.

## O que foi feito

- Projeto criado com **React + Vite**.
- **Formulário** com os campos **altura** (cm) e **peso** (kg).
- O **IMC é calculado na hora**, a cada número digitado, e aparece com a **classificação**.
- A **tabela de classificação da OMS** destaca a linha da faixa em que o IMC se encaixa.
- Fundo ilustrado com lutadores de sumô em colunas fixas (sem sobreposição), cada um com o nome do movimento em japonês.
- Fonte **Noto Sans JP** e *easter eggs* em japonês pela página. Passe o mouse para ver a tradução:

| Japonês | Leitura | Significado |
|---|---|---|
| 大相撲 | ōzumō | o grande torneio de sumô |
| はっけよい、のこった！ | hakkeyoi, nokotta! | o grito do juiz durante a luta |
| 分類表 | bunruihyō | tabela de classificação |
| ごっつぁんです | gottsan desu | o "muito obrigado" dos lutadores |
| 四股 · 塩 · 仕切り · 突っ張り | shiko · shio · shikiri · tsuppari | movimentos e rituais do sumô (no fundo) |
| おにぎり | onigiri | o bolinho de arroz do lanche |

## Como o código está organizado

```
src/
  utils/imc.js                       cálculo e classificação (funções puras, sem React)
  components/Formulario.jsx          campos de altura e peso
  components/Resultado.jsx           IMC e classificação
  components/TabelaClassificacao.jsx tabela com a linha atual destacada
  components/FundoLutadores.jsx      ilustrações de lutadores espalhadas pelo fundo
  App.jsx                            guarda o estado e junta os componentes
```

Conceitos do módulo usados:

- **`useState`** no `App`, com o estado descendo por **props** para os componentes filhos;
- **funções como props** (`onAlturaChange`, `onPesoChange`) para o formulário avisar o pai;
- **props desestruturadas** nos componentes;
- **`map()` com `key`** para montar a tabela;
- **renderização condicional** (mensagem enquanto os campos estão vazios);
- **fragmento** (`<>...</>`) no `App`, para não criar uma `div` extra;
- **CSS Modules** para os estilos de cada componente não vazarem para os outros.

## Tabela de classificação (OMS)

| IMC | Classificação |
|---|---|
| Menor que 18,5 | Abaixo do peso |
| 18,5 a 24,9 | Peso normal |
| 25 a 29,9 | Sobrepeso |
| 30 a 34,9 | Obesidade grau I |
| 35 a 39,9 | Obesidade grau II |
| 40 ou mais | Obesidade grau III |

## Como rodar

```bash
npm install
npm run dev
```

Depois, abra o endereço que aparecer no terminal (normalmente `http://localhost:5173`).
