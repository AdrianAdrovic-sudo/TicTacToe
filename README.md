# TicTacToe

A desktop Tic Tac Toe game built with Electron and React.

## Features

- **Player vs Player** — two players on the same machine
- **Player vs Bot** — three difficulty levels
  - Easy — random moves
  - Normal — mixed strategy
  - Impossible — unbeatable Minimax algorithm
- **Themes** — four color themes (Dark, Light, Forest, Ocean)
- **Scoreboard** — tracks wins and draws across rounds
- **Installable** — packaged as a Windows executable

## Tech Stack

- [Electron](https://www.electronjs.org/) — desktop shell
- [React](https://react.dev/) — UI framework
- [Vite](https://vitejs.dev/) — build tool

## Getting Started

### Prerequisites

- Node.js v18 or higher
- npm

### Install and run

```bash
git clone https://github.com/AdrianAdrovic-sudo/TicTacToe.git
cd TicTacToe
npm install
npm run start
```

### Build installer

```bash
npm run package
```

The installer will be output to the `release` folder.

## AI — Minimax Algorithm

The Impossible difficulty uses the Minimax algorithm, a decision tree search that evaluates every possible game state and always plays the optimal move. It cannot be beaten, only drawn.

## License

MIT
