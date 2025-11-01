import React from 'react';

type TopNavTabsProps = {
  activeTab: string;
  onTabChange: (tabName: string) => void;
};

const tabs = ['Atlas', 'Practice', 'Curriculum'];

const containerStyle: React.CSSProperties = {
  display: 'flex',
  gap: '0.75rem',
  alignItems: 'center',
};

const baseButtonStyle: React.CSSProperties = {
  flex: 1,
  padding: '0.75rem 1rem',
  borderRadius: '0.75rem',
  border: 'none',
  backgroundColor: 'transparent',
  color: '#1f2a37',
  fontSize: '1rem',
  fontWeight: 600,
  cursor: 'pointer',
  transition: 'background-color 0.2s ease, color 0.2s ease',
};

const activeButtonStyle: React.CSSProperties = {
  backgroundColor: '#5AA5A5',
  color: '#0f172a',
};

const inactiveButtonStyle: React.CSSProperties = {
  backgroundColor: '#e2e8f0',
  color: '#475569',
};

const TopNavTabs: React.FC<TopNavTabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <nav style={containerStyle} aria-label="Top navigation tabs">
      {tabs.map((tab) => {
        const isActive = activeTab === tab;
        const buttonStyle = {
          ...baseButtonStyle,
          ...(isActive ? activeButtonStyle : inactiveButtonStyle),
        };

        return (
          <button
            key={tab}
            type="button"
            style={buttonStyle}
            aria-current={isActive ? 'page' : undefined}
            onClick={() => onTabChange(tab)}
          >
            {tab}
          </button>
        );
      })}
    </nav>
  );
};

export default TopNavTabs;
