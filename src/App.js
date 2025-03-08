import React, { useState } from 'react';
import styled from 'styled-components';
import HomePage from './components/HomePage';
import GoalsPage from './components/GoalsPage';
import LockedModePage from './components/LockedModePage';
import RewardsPage from './components/RewardsPage';
import MetricsPage from './components/MetricsPage';
import StatisticsPage from './components/StatisticsPage';

const AppContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  
  // Navigation function with debug log
  const navigateTo = (page) => {
    console.log(`Navigating to: ${page}`);
    setCurrentPage(page);
  };
  
  // Page rendering based on current state
  const renderPage = () => {
    console.log(`Current page is: ${currentPage}`); // Debug log
    
    switch(currentPage) {
      case 'home':
        return <HomePage navigateTo={navigateTo} />;
      case 'goals':
        return <GoalsPage navigateTo={navigateTo} />;
      case 'locked':
        return <LockedModePage navigateTo={navigateTo} />;
      case 'rewards':
        return <RewardsPage navigateTo={navigateTo} />;
      case 'metrics':
        return <MetricsPage navigateTo={navigateTo} />;
      case 'statistics':
        return <StatisticsPage navigateTo={navigateTo} />;
      default:
        console.log(`Unknown page: ${currentPage}, defaulting to home`);
        return <HomePage navigateTo={navigateTo} />;
    }
  };
  
  return (
    <AppContainer>
      <div style={{ position: 'fixed', top: 0, left: 0, background: 'rgba(0,0,0,0.7)', color: 'white', padding: '5px', fontSize: '12px' }}>
        Current Page: {currentPage}
      </div>
      {renderPage()}
    </AppContainer>
  );
}

export default App;