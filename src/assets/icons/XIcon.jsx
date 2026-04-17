export default function XIcon({ size = 48 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="8" y1="8" x2="40" y2="40"
        stroke="var(--x-color)"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <line
        x1="40" y1="8" x2="8" y2="40"
        stroke="var(--x-color)"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  )
}