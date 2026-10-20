export function Logo({ size = 48 }: { size?: number }) {
  return (
    <svg viewBox="0 0 48 48" width={size} height={size} aria-hidden="true">
      <defs>
        <linearGradient id="logo-sun" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FFC15E" />
          <stop offset="1" stopColor="#FF6FA8" />
        </linearGradient>
        <linearGradient id="logo-rim" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#4CD3FF" />
          <stop offset="1" stopColor="#8C6BFF" />
        </linearGradient>
      </defs>

      {/* Orbit ellipse, behind the sun and moon */}
      <ellipse
        cx="24"
        cy="24"
        rx="22"
        ry="9"
        fill="none"
        stroke="url(#logo-rim)"
        strokeOpacity="0.75"
        strokeWidth="1.5"
        transform="rotate(-24 24 24)"
      />

      {/* Sun */}
      <circle cx="19" cy="21" r="13" fill="url(#logo-sun)" />

      {/* Moon with gradient rim */}
      <circle
        cx="28"
        cy="27"
        r="12.5"
        fill="#2B2370"
        stroke="url(#logo-rim)"
        strokeWidth="1.8"
      />
    </svg>
  );
}