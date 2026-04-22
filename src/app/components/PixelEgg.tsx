type EggState = 'raw' | 'soft' | 'medium' | 'hard' | 'complete';

interface PixelEggProps {
  state: EggState;
  size?: number;
}

export function PixelEgg({ state, size = 192 }: PixelEggProps) {
  const pixelSize = size / 16;

  if (state === 'raw') {
    return (
      <svg width={size} height={size} viewBox="0 0 16 16" style={{ imageRendering: 'pixelated' }}>
        <rect x="6" y="2" width="4" height="1" fill="#f5e6d3" />
        <rect x="5" y="3" width="6" height="1" fill="#f5e6d3" />
        <rect x="4" y="4" width="8" height="1" fill="#f5e6d3" />
        <rect x="4" y="5" width="8" height="1" fill="#fff9f0" />
        <rect x="3" y="6" width="10" height="1" fill="#fff9f0" />
        <rect x="3" y="7" width="10" height="1" fill="#fffef5" />
        <rect x="3" y="8" width="10" height="1" fill="#fffef5" />
        <rect x="3" y="9" width="10" height="1" fill="#fff9f0" />
        <rect x="4" y="10" width="8" height="1" fill="#fff9f0" />
        <rect x="4" y="11" width="8" height="1" fill="#f5e6d3" />
        <rect x="5" y="12" width="6" height="1" fill="#f5e6d3" />
        <rect x="6" y="13" width="4" height="1" fill="#f5e6d3" />
        <rect x="7" y="14" width="2" height="1" fill="#f5e6d3" />
        <rect x="10" y="6" width="2" height="2" fill="#ffffff" opacity="0.6" />
      </svg>
    );
  }

  if (state === 'soft') {
    return (
      <svg width={size} height={size} viewBox="0 0 16 16" style={{ imageRendering: 'pixelated' }}>
        <rect x="6" y="3" width="4" height="1" fill="#e8d5c4" />
        <rect x="5" y="4" width="6" height="1" fill="#e8d5c4" />
        <rect x="4" y="5" width="8" height="1" fill="#f5e6d3" />
        <rect x="4" y="6" width="8" height="1" fill="#fff9f0" />
        <rect x="3" y="7" width="10" height="1" fill="#fff9f0" />
        <rect x="3" y="8" width="4" height="1" fill="#fff9f0" />
        <rect x="7" y="8" width="6" height="1" fill="#ffdb4d" />
        <rect x="3" y="9" width="4" height="1" fill="#fff9f0" />
        <rect x="7" y="9" width="6" height="1" fill="#ffd700" />
        <rect x="4" y="10" width="4" height="1" fill="#fff9f0" />
        <rect x="8" y="10" width="4" height="1" fill="#ffdb4d" />
        <rect x="4" y="11" width="8" height="1" fill="#f5e6d3" />
        <rect x="5" y="12" width="6" height="1" fill="#e8d5c4" />
        <rect x="6" y="13" width="4" height="1" fill="#e8d5c4" />
      </svg>
    );
  }

  if (state === 'medium') {
    return (
      <svg width={size} height={size} viewBox="0 0 16 16" style={{ imageRendering: 'pixelated' }}>
        <rect x="6" y="3" width="4" height="1" fill="#d4c4b0" />
        <rect x="5" y="4" width="6" height="1" fill="#e8d5c4" />
        <rect x="4" y="5" width="8" height="1" fill="#f5e6d3" />
        <rect x="4" y="6" width="8" height="1" fill="#fff9f0" />
        <rect x="3" y="7" width="10" height="1" fill="#fff9f0" />
        <rect x="3" y="8" width="4" height="1" fill="#fff9f0" />
        <rect x="7" y="8" width="3" height="1" fill="#ffdb4d" />
        <rect x="10" y="8" width="3" height="1" fill="#ffa500" />
        <rect x="3" y="9" width="4" height="1" fill="#fff9f0" />
        <rect x="7" y="9" width="3" height="1" fill="#ffd700" />
        <rect x="10" y="9" width="3" height="1" fill="#ff8c00" />
        <rect x="4" y="10" width="4" height="1" fill="#fff9f0" />
        <rect x="8" y="10" width="4" height="1" fill="#ffdb4d" />
        <rect x="4" y="11" width="8" height="1" fill="#f5e6d3" />
        <rect x="5" y="12" width="6" height="1" fill="#e8d5c4" />
        <rect x="6" y="13" width="4" height="1" fill="#d4c4b0" />
      </svg>
    );
  }

  if (state === 'hard') {
    return (
      <svg width={size} height={size} viewBox="0 0 16 16" style={{ imageRendering: 'pixelated' }}>
        <rect x="6" y="3" width="4" height="1" fill="#b8a896" />
        <rect x="5" y="4" width="6" height="1" fill="#d4c4b0" />
        <rect x="4" y="5" width="8" height="1" fill="#e8d5c4" />
        <rect x="4" y="6" width="8" height="1" fill="#f5e6d3" />
        <rect x="3" y="7" width="10" height="1" fill="#fff9f0" />
        <rect x="3" y="8" width="5" height="1" fill="#fff9f0" />
        <rect x="8" y="8" width="5" height="1" fill="#ffdb99" />
        <rect x="3" y="9" width="5" height="1" fill="#fff9f0" />
        <rect x="8" y="9" width="5" height="1" fill="#ffd180" />
        <rect x="4" y="10" width="4" height="1" fill="#f5e6d3" />
        <rect x="8" y="10" width="4" height="1" fill="#ffdb99" />
        <rect x="4" y="11" width="8" height="1" fill="#e8d5c4" />
        <rect x="5" y="12" width="6" height="1" fill="#d4c4b0" />
        <rect x="6" y="13" width="4" height="1" fill="#b8a896" />
      </svg>
    );
  }

  if (state === 'complete') {
    return (
      <svg width={size} height={size} viewBox="0 0 16 16" style={{ imageRendering: 'pixelated' }}>
        <rect x="3" y="6" width="10" height="1" fill="#ffffff" />
        <rect x="2" y="7" width="12" height="1" fill="#fffef5" />
        <rect x="2" y="8" width="5" height="1" fill="#fffef5" />
        <rect x="7" y="8" width="7" height="1" fill="#ffd700" />
        <rect x="2" y="9" width="5" height="1" fill="#fffef5" />
        <rect x="7" y="9" width="7" height="1" fill="#ffed4e" />
        <rect x="2" y="10" width="5" height="1" fill="#ffffff" />
        <rect x="7" y="10" width="7" height="1" fill="#ffd700" />
        <rect x="3" y="11" width="11" height="1" fill="#ffffff" />
        <rect x="4" y="12" width="9" height="1" fill="#fffef5" />
        <rect x="10" y="8" width="2" height="2" fill="#ff6b35" />
      </svg>
    );
  }

  return null;
}
