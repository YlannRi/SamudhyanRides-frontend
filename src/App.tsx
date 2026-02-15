import React, { useState } from 'react';
import './App.css';
import HomePage from './HomePage';
import AccountPage from './AccountPage';
import LoginPage from './LoginPage';
import ActivityPage from './ActivityPage';

type Tab = 'home' | 'services' | 'activity' | 'account';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
  };

  const renderAuthedContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomePage />;
      case 'account':
        return <AccountPage />;
      case 'services':
        // placeholder screen for now
        return <HomePage />;
      case 'activity':
        return <ActivityPage />;
        return <HomePage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="uber-page">
      <div className="uber-container">
        {isAuthenticated ? (
          renderAuthedContent()
        ) : (
          <LoginPage onAuthSuccess={handleAuthSuccess} />
        )}
      </div>

      {isAuthenticated && (
        <nav className="bottom-nav">
          <button
            className={`nav-item ${
              activeTab === 'home' ? 'nav-item-active' : ''
            }`}
            onClick={() => setActiveTab('home')}
          >
            <div className="nav-icon">🚗</div>
            <div className="nav-label">Home</div>
          </button>

          <button
            className={`nav-item ${
              activeTab === 'services' ? 'nav-item-active' : ''
            }`}
            onClick={() => setActiveTab('services')}
          >
            <div className="nav-icon">🧭</div>
            <div className="nav-label">Services</div>
          </button>

          <button
            className={`nav-item ${
              activeTab === 'activity' ? 'nav-item-active' : ''
            }`}
            onClick={() => setActiveTab('activity')}
          >
            <div className="nav-icon">🕒</div>
            <div className="nav-label">Activity</div>
          </button>

          <button
            className={`nav-item ${
              activeTab === 'account' ? 'nav-item-active' : ''
            }`}
            onClick={() => setActiveTab('account')}
          >
            <div className="nav-icon">👤</div>
            <div className="nav-label">Account</div>
          </button>
        </nav>
      )}
    </div>
  );
};

export default App;
