import { useEffect, useState } from 'react';

interface Props {
  studioName: string;
  onComplete: () => void;
}

export function RitualOverlay({ studioName, onComplete }: Props) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onComplete();
    }, 1800);
    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!visible) return null;

  return (
    <div className="ritual-overlay" aria-live="polite" role="status">
      <div className="ritual-word">Shape.</div>
      <div className="ritual-word">Position.</div>
      <div className="ritual-word">Advance.</div>
      <div style={{
        marginTop: 'var(--space-2xl)',
        fontSize: 'var(--text-xs)',
        color: 'var(--color-pending)',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
      }}>
        Entering {studioName}
      </div>
    </div>
  );
}
