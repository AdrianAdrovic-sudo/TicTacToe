import { useTheme } from '../context/ThemeContext'
import '../styles/Settings.css'

const themeOptions = [
  { key: 'dark', label: 'Dark', preview: '#1a1a2e', accent: '#e94560' },
  { key: 'light', label: 'Light', preview: '#f0f0f0', accent: '#c0392b' },
  { key: 'forest', label: 'Forest', preview: '#1b2a1b', accent: '#57cc57' },
  { key: 'ocean', label: 'Ocean', preview: '#0a1628', accent: '#00bcd4' },
]

export default function Settings({ onBack }) {
  const { currentTheme, applyTheme } = useTheme()

  return (
    <div className="settings-container">
      <div className="settings-content">

        <div className="settings-header">
          <h1>Settings</h1>
          <p className="settings-subtitle">Customize your experience</p>
        </div>

        <div className="settings-section">
          <h2 className="settings-section-title">Theme</h2>
          <div className="theme-grid">
            {themeOptions.map((theme) => (
              <button
                key={theme.key}
                className={`theme-card ${currentTheme === theme.key ? 'active' : ''}`}
                onClick={() => applyTheme(theme.key)}
                style={{ backgroundColor: theme.preview }}
              >
                <div
                  className="theme-accent-bar"
                  style={{ backgroundColor: theme.accent }}
                />
                <span
                  className="theme-label"
                  style={{ color: theme.accent }}
                >
                  {theme.label}
                </span>
                {currentTheme === theme.key && (
                  <div className="theme-check">✓</div>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="settings-footer">
          <button className="settings-btn back" onClick={onBack}>
            Back to Menu
          </button>
        </div>

      </div>
    </div>
  )
}