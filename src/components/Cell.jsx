import XIcon from '../assets/icons/XIcon'
import OIcon from '../assets/icons/OIcon'
import '../styles/Cell.css'

export default function Cell({ value, onClick, isWinning, disabled }) {
  return (
    <button
      className={`cell ${isWinning ? 'winning' : ''} ${disabled ? 'disabled' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {value === 'X' && <XIcon size={52} />}
      {value === 'O' && <OIcon size={52} />}
    </button>
  )
}