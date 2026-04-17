import '../styles/MainMenu.css'

export default function MainMenu({ onStartGame, onSettings }) {
  const handleVsBot = (difficulty) => {
    onStartGame({ mode: 'bot', difficulty })
  }

  const handleVsPlayer = () => {
    onStartGame({ mode: 'pvp' })
  }

  const handleQuit = () => {
    if (window.electronAPI) {
      window.electronAPI.quitApp()
    }
  }

  return (
    <div className="menu-container">
      <div className="menu-content">

        <div className="menu-title">
          <h1>TIC TAC TOE</h1>
          <p className="menu-subtitle">Choose your battle</p>
        </div>

        <div className="menu-section">
          <h2 className="menu-section-title">VS Player</h2>
          <button className="menu-btn primary" onClick={handleVsPlayer}>
            2 Players 
          </button>
        </div>

        <div className="menu-section">
          <h2 className="menu-section-title">VS Bot</h2>
          <div className="difficulty-buttons">
            <button
              className="menu-btn difficulty easy"
              onClick={() => handleVsBot('easy')}
            >
              Easy
            </button>
            <button
              className="menu-btn difficulty normal"
              onClick={() => handleVsBot('normal')}
            >
              Normal
            </button>
            <button
              className="menu-btn difficulty impossible"
              onClick={() => handleVsBot('impossible')}
            >
              Impossible
            </button>
          </div>
        </div>

        <div className="menu-footer">
          <button className="menu-btn secondary" onClick={onSettings}>
            Settings
          </button>
          <button className="menu-btn danger" onClick={handleQuit}>
            Quit
          </button>
        </div>

      </div>
    </div>
  )
}