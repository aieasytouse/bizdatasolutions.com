/**
 * CircuitBackground — animated SVG circuit traces + grid overlay
 * Use as an absolute-positioned child inside a `relative overflow-hidden` section.
 */
export default function CircuitBackground({ density = 'normal', className = '' }) {
  const fineGrid = density === 'fine'

  return (
    <div className={`absolute inset-0 z-0 overflow-hidden ${className}`}>
      {/* Grid pattern */}
      <div className={`absolute inset-0 ${fineGrid ? 'circuit-grid-fine' : 'circuit-grid'}`} />

      {/* Animated SVG circuit traces */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1200 700"
      >
        <defs>
          {/* Gold glow filter */}
          <filter id="gold-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          {/* Green glow filter */}
          <filter id="green-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ── Static background traces (very subtle) ── */}
        <g stroke="#1E4A35" strokeWidth="0.6" fill="none" opacity="0.8">
          <path d="M 0 128 H 192 V 64 H 384 V 192 H 576 V 128 H 768 V 64 H 960" />
          <path d="M 0 320 H 128 V 384 H 320 V 256 H 512 V 320 H 704 V 384 H 960 V 320" />
          <path d="M 0 512 H 256 V 448 H 448 V 512 H 640 V 576 H 832 V 512 H 1200" />
          <path d="M 192 0 V 64 H 256 V 192 H 192 V 384 H 256 V 512 H 192 V 700" />
          <path d="M 512 0 V 192 H 448 V 320 H 512 V 512 H 576 V 700" />
          <path d="M 768 64 V 192 H 832 V 320 H 768 V 448 H 832 V 700" />
          <path d="M 960 0 V 128 H 1024 V 256 H 960 V 512 H 1024 V 700" />
        </g>

        {/* ── Animated gold traces ── */}
        <g fill="none" filter="url(#gold-glow)">
          <path
            d="M 0 128 H 192 V 64 H 384 V 192 H 576 V 128 H 768"
            stroke="#C98A0A"
            strokeWidth="1.2"
            strokeDasharray="80 500"
            className="circuit-trace circuit-trace-1"
          />
          <path
            d="M 512 0 V 192 H 448 V 320 H 512 V 512"
            stroke="#E8A820"
            strokeWidth="1"
            strokeDasharray="60 400"
            className="circuit-trace circuit-trace-2"
          />
          <path
            d="M 0 320 H 128 V 384 H 320 V 256 H 512 V 320 H 704"
            stroke="#C98A0A"
            strokeWidth="1.2"
            strokeDasharray="70 450"
            className="circuit-trace circuit-trace-3"
          />
          <path
            d="M 960 0 V 128 H 1024 V 256 H 960 V 512"
            stroke="#E8A820"
            strokeWidth="1"
            strokeDasharray="50 350"
            className="circuit-trace circuit-trace-4"
          />
        </g>

        {/* ── Static junction nodes (gold) ── */}
        <g fill="#C98A0A" opacity="0.5">
          <circle cx="192" cy="128" r="2.5" />
          <circle cx="192" cy="64"  r="2" />
          <circle cx="384" cy="64"  r="2.5" />
          <circle cx="384" cy="192" r="2" />
          <circle cx="576" cy="128" r="2.5" />
          <circle cx="128" cy="320" r="2" />
          <circle cx="128" cy="384" r="2.5" />
          <circle cx="320" cy="384" r="2" />
          <circle cx="512" cy="192" r="2.5" />
          <circle cx="448" cy="320" r="2" />
          <circle cx="768" cy="64"  r="2.5" />
          <circle cx="832" cy="320" r="2" />
          <circle cx="960" cy="128" r="2.5" />
          <circle cx="1024" cy="256" r="2" />
          <circle cx="256" cy="512" r="2.5" />
          <circle cx="640" cy="512" r="2" />
        </g>

        {/* ── Active glow nodes (cyan-green, sparingly) ── */}
        <g filter="url(#green-glow)">
          <circle cx="384" cy="64"  r="3.5" fill="#00E887" opacity="0.85" className="node-blink" />
          <circle cx="512" cy="320" r="3.5" fill="#00E887" opacity="0.75" style={{ animationDelay: '1.2s' }} className="node-blink" />
          <circle cx="832" cy="192" r="3"   fill="#00E887" opacity="0.7"  style={{ animationDelay: '2.4s' }} className="node-blink" />
        </g>
      </svg>
    </div>
  )
}
