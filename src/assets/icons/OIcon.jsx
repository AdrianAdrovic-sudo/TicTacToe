export default function OIcon({ size = 48 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="24"
        cy="24"
        r="16"
        stroke="var(--o-color)"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  )
}