import React from 'react';

const Callout = ({ type = "note", title, children }) => {
    const styles = {
        note: {
            borderColor: '#3b82f6', // Blue
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            icon: '💡'
        },
        warning: {
            borderColor: '#eab308', // Yellow
            backgroundColor: 'rgba(234, 179, 8, 0.1)',
            icon: '⚠️'
        },
        danger: {
            borderColor: '#ef4444', // Red
            backgroundColor: 'rgba(239, 68, 68, 0.1)',
            icon: '🚨'
        }
    };

    const currentStyle = styles[type] || styles.note;

    return (
        <div className="callout">
            <div className="callout-header">
                <span className="icon">{currentStyle.icon}</span>
                <span className="title">{title}</span>
            </div>
            <div className="callout-content">
                {children}
            </div>
            <style jsx>{`
        .callout {
          margin: 1.5rem 0;
          padding: 1rem;
          border-left: 4px solid ${currentStyle.borderColor};
          background-color: ${currentStyle.backgroundColor};
          border-radius: 4px;
        }
        .callout-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
          font-weight: 600;
          color: var(--foreground);
        }
        .callout-content {
          font-size: 1rem;
          opacity: 0.9;
        }
      `}</style>
        </div>
    );
};

export default Callout;
