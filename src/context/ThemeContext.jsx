import { createContext, useContext, useState } from 'react'

const ThemeContext = createContext()

export const themes = {
  dark: {
    '--bg-primary': '#1a1a2e',
    '--bg-secondary': '#16213e',
    '--bg-cell': '#0f3460',
    '--accent': '#e94560',
    '--accent-hover': '#c73652',
    '--text-primary': '#eaeaea',
    '--text-secondary': '#a8a8b3',
    '--border-color': '#e94560',
    '--x-color': '#e94560',
    '--o-color': '#4fc3f7',
    '--win-highlight': '#f0c040',
  },
  light: {
    '--bg-primary': '#f0f0f0',
    '--bg-secondary': '#ffffff',
    '--bg-cell': '#dce3f0',
    '--accent': '#c0392b',
    '--accent-hover': '#a93226',
    '--text-primary': '#1a1a2e',
    '--text-secondary': '#555566',
    '--border-color': '#c0392b',
    '--x-color': '#c0392b',
    '--o-color': '#1565c0',
    '--win-highlight': '#e67e22',
  },
  forest: {
    '--bg-primary': '#1b2a1b',
    '--bg-secondary': '#223322',
    '--bg-cell': '#2d4a2d',
    '--accent': '#57cc57',
    '--accent-hover': '#3ea83e',
    '--text-primary': '#e8f5e8',
    '--text-secondary': '#9dbf9d',
    '--border-color': '#57cc57',
    '--x-color': '#57cc57',
    '--o-color': '#f9a825',
    '--win-highlight': '#ffffff',
  },
  ocean: {
    '--bg-primary': '#0a1628',
    '--bg-secondary': '#0d2137',
    '--bg-cell': '#0e3251',
    '--accent': '#00bcd4',
    '--accent-hover': '#0097a7',
    '--text-primary': '#e0f7fa',
    '--text-secondary': '#80cbc4',
    '--border-color': '#00bcd4',
    '--x-color': '#00bcd4',
    '--o-color': '#ff7043',
    '--win-highlight': '#ffd600',
  }
}

export function ThemeProvider({ children }) {
  const [currentTheme, setCurrentTheme] = useState('dark')

  const applyTheme = (themeName) => {
    const theme = themes[themeName]
    if (!theme) return
    Object.entries(theme).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value)
    })
    setCurrentTheme(themeName)
  }

  return (
    <ThemeContext.Provider value={{ currentTheme, applyTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}