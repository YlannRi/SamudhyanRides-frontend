import React, { useState } from 'react';
import './App.css';
import HomePage from './HomePage';
import AccountPage from './AccountPage';
import LoginPage from './LoginPage';
import ActivityPage from './ActivityPage';
import RequestRidePage from './RequestRidePage';
import PostRidePage from './PostRidePage';
import JourneyPage from './JourneyPage';

type Tab = 'home' | 'journey' | 'activity' | 'account' | 'request' | 'post';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
  };

  const renderAuthedContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomePage
                 onRequestRide={() => setActiveTab('request')}
                 onPostRide={() => setActiveTab('post')}
               />;
      case 'request':
        return <RequestRidePage />;
      case 'post':
        return <PostRidePage />; // Render the post page
      case 'account':
        return <AccountPage />;
      case 'journey':
        // placeholder screen for now
        return <JourneyPage />;
      case 'activity':
        return <ActivityPage />;
      default:
        return <HomePage
                 onRequestRide={() => setActiveTab('request')}
                 onPostRide={() => setActiveTab('post')}
               />;
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
              activeTab === 'journey' ? 'nav-item-active' : ''
            }`}
            onClick={() => setActiveTab('journey')}
          >
            <div className="nav-icon">🗺️</div>
            <div className="nav-label">Journey</div>
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