export function getBotMove(board, difficulty) {
  if (difficulty === 'easy') return getEasyMove(board)
  if (difficulty === 'normal') return getNormalMove(board)
  if (difficulty === 'impossible') return getImpossibleMove(board)
}

function getEmptyCells(board) {
  return board.reduce((acc, cell, i) => {
    if (!cell) acc.push(i)
    return acc
  }, [])
}

function checkWinner(board) {
  const lines = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ]
  for (const [a,b,c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a]
    }
  }
  return null
}

function getEasyMove(board) {
  const empty = getEmptyCells(board)
  return empty[Math.floor(Math.random() * empty.length)]
}

function getNormalMove(board) {
  if (Math.random() < 0.5) return getImpossibleMove(board)
  return getEasyMove(board)
}

function getImpossibleMove(board) {
  let bestScore = -Infinity
  let bestMove = null

  getEmptyCells(board).forEach((i) => {
    board[i] = 'O'
    const score = minimax(board, false)
    board[i] = null
    if (score > bestScore) {
      bestScore = score
      bestMove = i
    }
  })

  return bestMove
}

function minimax(board, isMaximizing) {
  const winner = checkWinner(board)
  if (winner === 'O') return 10
  if (winner === 'X') return -10
  if (getEmptyCells(board).length === 0) return 0

  if (isMaximizing) {
    let best = -Infinity
    getEmptyCells(board).forEach((i) => {
      board[i] = 'O'
      best = Math.max(best, minimax(board, false))
      board[i] = null
    })
    return best
  } else {
    let best = Infinity
    getEmptyCells(board).forEach((i) => {
      board[i] = 'X'
      best = Math.min(best, minimax(board, true))
      board[i] = null
    })
    return best
  }
}