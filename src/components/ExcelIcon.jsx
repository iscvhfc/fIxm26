export default function ExcelIcon({ className = 'h-8 w-8' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="32" rx="6" fill="#217346" />
      <path
        d="M18 8h7a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-7V8z"
        fill="#fff"
        fillOpacity=".15"
      />
      <line x1="18" y1="8" x2="18" y2="24" stroke="#fff" strokeOpacity=".3" strokeWidth="1" />
      <line x1="18" y1="13" x2="26" y2="13" stroke="#fff" strokeOpacity=".3" strokeWidth="1" />
      <line x1="18" y1="17" x2="26" y2="17" stroke="#fff" strokeOpacity=".3" strokeWidth="1" />
      <line x1="18" y1="21" x2="26" y2="21" stroke="#fff" strokeOpacity=".3" strokeWidth="1" />
      <text x="20" y="12" fill="white" fontSize="4" fontFamily="Arial" fontWeight="bold">xls</text>
      <path
        d="M6 8l10 16M16 8 6 24"
        stroke="#fff"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  )
}
