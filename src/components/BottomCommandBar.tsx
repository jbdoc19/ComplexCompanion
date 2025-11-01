import React from 'react';

type BottomCommandBarProps = {
  onCommand: (command: string) => void;
};

const commands = [
  { label: 'Home', command: 'home', icon: '🏠' },
  { label: 'Search', command: 'search', icon: '🔍' },
  { label: 'Checklist', command: 'checklist', icon: '✅' },
  { label: 'Notes', command: 'notes', icon: '📝' },
];

const barStyle: React.CSSProperties = {
  position: 'fixed',
  bottom: 0,
  left: 0,
  width: '100%',
  backgroundColor: '#0f766e',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  padding: '0.5rem 0',
  boxShadow: '0 -2px 6px rgba(15, 118, 110, 0.2)',
  zIndex: 1000,
};

const buttonStyle: React.CSSProperties = {
  background: 'transparent',
  border: 'none',
  color: '#f0fdfa',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.25rem',
  fontSize: '0.75rem',
  fontWeight: 600,
  cursor: 'pointer',
};

const iconStyle: React.CSSProperties = {
  fontSize: '1.5rem',
  lineHeight: 1,
};

const BottomCommandBar: React.FC<BottomCommandBarProps> = ({ onCommand }) => {
  return (
    <nav style={barStyle} aria-label="Bottom command bar">
      {commands.map(({ label, command, icon }) => (
        <button
          key={command}
          type="button"
          style={buttonStyle}
          onClick={() => onCommand(command)}
          aria-label={label}
        >
          <span style={iconStyle} aria-hidden="true">
            {icon}
          </span>
          {label}
        </button>
      ))}
    </nav>
  );
};

export default BottomCommandBar;
