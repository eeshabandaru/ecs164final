import React from 'react';
import styled from 'styled-components';
import { FaClock, FaPrint, FaShareAlt } from 'react-icons/fa';
import BackButton from './BackButton';

const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  position: relative;
`;

const HeaderBar = styled.div`
  width: 100%;
  max-width: 800px;
  background-color: rgba(0, 70, 120, 0.3);
  border-radius: 15px;
  padding: 20px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  flex: 1;
  text-align: center;
`;

const ActionButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  
  svg {
    font-size: 20px;
    margin-bottom: 5px;
  }
  
  &:hover {
    color: #f0f0f0;
  }
`;

const StatsContainer = styled.div`
  width: 100%;
  max-width: 800px;
`;

const StatBar = styled.div`
  width: 100%;
  background-color: rgba(0, 70, 120, 0.2);
  border-radius: 15px;
  padding: 20px 25px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StatLabel = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: #333;
`;

const StatValue = styled.div`
  display: flex;
  align-items: center;
`;

const NumberValue = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-right: 10px;
`;

const MeterDisplay = styled.div`
  width: 100px;
  height: 20px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${props => props.value || 0}%;
    background: linear-gradient(90deg, #FFD700, #FFA500);
    border-radius: 10px;
  }
`;

const ClockIcon = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 50px;
  height: 50px;
  
  svg {
    width: 100%;
    height: 100%;
    color: #333;
  }
`;

// StatisticsPage component - implements help users recognize, diagnose, and recover from errors
// (Nielsen's 9th heuristic) and match between system and real world (Nielsen's 2nd heuristic)
function StatisticsPage({ navigateTo }) {
  const stats = [
    { id: 1, label: 'Most recent time studied', value: '2h 15m', meter: 65 },
    { id: 2, label: 'Average time studied', value: '1h 45m', meter: 45 },
    { id: 3, label: 'Total time studied', value: '28h 30m', meter: 80 }
  ];
  
  const handlePrintClick = () => {
    // In a real app, this would trigger a print dialog
    alert('Print functionality would be implemented here');
  };
  
  const handleShareClick = () => {
    // Navigate to share page
    navigateTo('share');
  };

  return (
    <PageContainer>
      <BackButton onClick={navigateTo} />
      
      <ClockIcon>
        <FaClock />
      </ClockIcon>
      
      <HeaderBar>
        <ActionButton 
          onClick={handlePrintClick}
          aria-label="Print statistics"
        >
          <FaPrint />
          Print
        </ActionButton>
        
        <HeaderTitle>Study Time Statistics</HeaderTitle>
        
        <ActionButton 
          onClick={handleShareClick}
          aria-label="Share statistics"
        >
          <FaShareAlt />
          Share
        </ActionButton>
      </HeaderBar>
      
      <StatsContainer>
        {stats.map(stat => (
          <StatBar key={stat.id}>
            <StatLabel>{stat.label}</StatLabel>
            <StatValue>
              <NumberValue>{stat.value}</NumberValue>
              <MeterDisplay value={stat.meter} />
            </StatValue>
          </StatBar>
        ))}
      </StatsContainer>
    </PageContainer>
  );
}

export default StatisticsPage;