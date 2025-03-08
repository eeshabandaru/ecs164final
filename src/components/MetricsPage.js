import React from 'react';
import styled from 'styled-components';
import { FaChartLine } from 'react-icons/fa';
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
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  padding: 15px;
  margin-bottom: 40px;
`;

const HeaderText = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-left: 10px;
`;

const MetricsContainer = styled.div`
  width: 100%;
  max-width: 800px;
`;

const MetricBar = styled.div`
  width: 100%;
  background-color: rgba(94, 200, 255, 0.2);
  border-radius: 15px;
  padding: 25px 30px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: rgba(94, 200, 255, 0.3);
    transform: translateX(5px);
  }
`;

const MetricText = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: #333;
`;

const MetricValue = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #333;
  opacity: 0; /* For demonstration only - these would show real values */
`;

// MetricsPage component - implements flexibility and efficiency of use (Nielsen's 7th heuristic)
// and aesthetic and minimalist design (Nielsen's 8th heuristic)
function MetricsPage({ navigateTo }) {
  const metrics = [
    { id: 1, name: 'Time Studied', value: '4h 30m' },
    { id: 2, name: 'Interactions Blocked', value: '47' },
    { id: 3, name: 'Average Time Saved', value: '2h 15m' },
    { id: 4, name: 'Points Earned', value: '350' }
  ];
  
  const handleMetricClick = (metric) => {
    // In a real app, this would show detailed information
    // For this demo, navigate to statistics page on any metric click
    navigateTo('statistics');
  };

  return (
    <PageContainer>
      <BackButton onClick={navigateTo} />
      
      <HeaderBar>
        <FaChartLine size={24} color="#0047FF" />
        <HeaderText>METRIC</HeaderText>
      </HeaderBar>
      
      <MetricsContainer>
        {metrics.map(metric => (
          <MetricBar 
            key={metric.id}
            onClick={() => handleMetricClick(metric)}
            role="button"
            aria-label={`View details for ${metric.name}`}
            tabIndex={0}
          >
            <MetricText>{metric.name}</MetricText>
            {/* Placeholder for metric values */}
            <MetricValue>{metric.value}</MetricValue>
          </MetricBar>
        ))}
      </MetricsContainer>
    </PageContainer>
  );
}

export default MetricsPage;