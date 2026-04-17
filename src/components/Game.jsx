import { useState, useEffect } from 'react'
import Cell from './Cell'
import { getBotMove } from '../logic/minimax'
import '../styles/Game.css'

const WINNING_LINES = [
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6]
]

function calculateWinner(board) {
  for (const [a,b,c] of WINNING_LINES) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { winner: board[a], line: [a,b,c] }
    }
  }
  return null
}

export default function Game({ config, onBack }) {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [isXTurn, setIsXTurn] = useState(true)
  const [status, setStatus] = useState(null)
  const [winningLine, setWinningLine] = useState([])
  const [scores, setScores] = useState({ X: 0, O: 0, draws: 0 })
  const [botThinking, setBotThinking] = useState(false)

  const isBot = config.mode === 'bot'
  const isDraw = !status && board.every(Boolean)

  useEffect(() => {
    if (!isBot) return
    if (isXTurn) return
    if (status) return

    setBotThinking(true)
    const timeout = setTimeout(() => {
      const move = getBotMove([...board], config.difficulty)
      if (move !== null && move !== undefined) {
        makeMove(move, 'O')
      }
      setBotThinking(false)
    }, 400)

    return () => clearTimeout(timeout)
  }, [isXTurn, board, status])

  function makeMove(index, player) {
    const newBoard = [...board]
    newBoard[index] = player
    setBoard(newBoard)

    const result = calculateWinner(newBoard)
    if (result) {
      setStatus(result.winner)
      setWinningLine(result.line)
      setScores(prev => ({
        ...prev,
        [result.winner]: prev[result.winner] + 1
      }))
    } else if (newBoard.every(Boolean)) {
      setScores(prev => ({ ...prev, draws: prev.draws + 1 }))
    } else {
      setIsXTurn(player === 'O')
    }
  }

  function handleCellClick(index) {
    if (board[index] || status || isDraw) return
    if (isBot && !isXTurn) return
    makeMove(index, isXTurn ? 'X' : 'O')
  }

  function resetGame() {
    setBoard(Array(9).fill(null))
    setIsXTurn(true)
    setStatus(null)
    setWinningLine([])
    setBotThinking(false)
  }

  function getStatusText() {
    if (status) {
      if (isBot) return status === 'X' ? 'You win!' : 'Bot wins!'
      return `Player ${status} wins!`
    }
    if (isDraw) return 'Draw!'
    if (isBot) return isXTurn ? 'Your turn' : 'Bot is thinking...'
    return `Player ${isXTurn ? 'X' : 'O'} turn`
  }

  const difficultyLabel = isBot
    ? config.difficulty.charAt(0).toUpperCase() + config.difficulty.slice(1)
    : null

  return (
    <div className="game-container">

      <div className="game-header">
        <button className="game-back-btn" onClick={onBack}>
          ← Menu
        </button>
        <div className="game-mode-label">
          {isBot ? `VS Bot — ${difficultyLabel}` : 'VS Player'}
        </div>
      </div>

      <div className="scoreboard">
        <div className="score-item">
          <span className="score-label x-label">
            {isBot ? 'You (X)' : 'Player X'}
          </span>
          <span className="score-value">{scores.X}</span>
        </div>
        <div className="score-item draws">
          <span className="score-label">Draws</span>
          <span className="score-value">{scores.draws}</span>
        </div>
        <div className="score-item">
          <span className="score-label o-label">
            {isBot ? 'Bot (O)' : 'Player O'}
          </span>
          <span className="score-value">{scores.O}</span>
        </div>
      </div>

      <div className={`status-text ${status || isDraw ? 'finished' : ''}`}>
        {getStatusText()}
      </div>

      <div className="board">
        {board.map((cell, i) => (
          <Cell
            key={i}
            value={cell}
            onClick={() => handleCellClick(i)}
            isWinning={winningLine.includes(i)}
            disabled={
              !!board[i] ||
              !!status ||
              isDraw ||
              botThinking ||
              (isBot && !isXTurn)
            }
          />
        ))}
      </div>

      {(status || isDraw) && (
        <button className="game-btn play-again" onClick={resetGame}>
          Play Again
        </button>
      )}

    </div>
  )
}