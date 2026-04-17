import { useState } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import MainMenu from './components/MainMenu'
import Game from './components/Game'
import Settings from './components/Settings'

export default function App() {
  const [screen, setScreen] = useState('menu')
  const [gameConfig, setGameConfig] = useState(null)

  const startGame = (config) => {
    setGameConfig(config)
    setScreen('game')
  }

  const goToMenu = () => {
    setGameConfig(null)
    setScreen('menu')
  }

  const goToSettings = () => setScreen('settings')

  return (
    <ThemeProvider>
      {screen === 'menu' && (
        <MainMenu onStartGame={startGame} onSettings={goToSettings} />
      )}
      {screen === 'game' && (
        <Game config={gameConfig} onBack={goToMenu} />
      )}
      {screen === 'settings' && (
        <Settings onBack={goToMenu} />
      )}
    </ThemeProvider>
  )
}