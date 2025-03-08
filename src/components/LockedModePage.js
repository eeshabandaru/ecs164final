import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaHourglass, FaCloud, FaTrophy } from 'react-icons/fa';
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
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 50px;
  padding: 15px 30px;
  margin-bottom: 50px;
  text-align: center;
`;

const HeaderText = styled.h1`
  font-size: 28px;
  font-weight: bold;
  color: #333;
`;

const ContentBox = styled.div`
  width: 100%;
  max-width: 700px;
  background: rgba(94, 200, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StatsRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 40px;
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TimerDisplay = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-top: 5px;
`;

const ScoreDisplay = styled.div`
  font-size: 36px;
  font-weight: bold;
  color: #0047FF;
`;

const BatteryMeter = styled.div`
  width: 50px;
  height: 20px;
  background-color: #ddd;
  border-radius: 10px;
  margin-top: 5px;
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${props => props.level}%;
    background-color: ${props => 
      props.level > 70 ? '#4CAF50' : 
      props.level > 30 ? '#FFC107' : '#F44336'};
    border-radius: 10px;
  }
`;

const SurrenderButton = styled.button`
  background-color: #333;
  color: white;
  border: none;
  border-radius: 30px;
  padding: 12px 25px;
  font-size: 16px;
  font-weight: bold;
  margin-top: 20px;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #555;
  }
`;

// LockedModePage component - implements visibility of system status (Nielsen's 1st heuristic)
// and error prevention (Nielsen's 5th heuristic)
function LockedModePage({ navigateTo }) {
  const [timer, setTimer] = useState(10); // Initial timer value in minutes
  const batteryLevel = 60;  // Set as constant instead of state
  const score = 50;  // Set as constant instead of state
  
  // Timer effect - simulating a countdown (in a real app, this would be more precise)
  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(prevTimer => {
          // When timer reaches 0, navigate to rewards page automatically
          if (prevTimer <= 1) {
            navigateTo('rewards');
            clearInterval(interval);
            return 0;
          }
          return prevTimer - 1;
        });
      }
    }, 1000);
    
    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, [timer, navigateTo]);
  
  // For demonstration purposes - format timer as MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };
  
  const handleSurrender = () => {
    // Confirmation dialog - implementing error prevention
    if (window.confirm('Are you sure you want to end your focus session? You will lose your progress!')) {
      navigateTo('metrics');
    }
  };

  return (
    <PageContainer>
      <BackButton onClick={navigateTo} destination="goals" />
      
      <HeaderBar>
        <HeaderText>LOCKED MODE</HeaderText>
      </HeaderBar>
      
      <ContentBox>
        <StatsRow>
          <StatItem>
            <FaHourglass size={30} color="#333" />
            <TimerDisplay>{formatTime(timer)}</TimerDisplay>
          </StatItem>
          
          <StatItem>
            <FaCloud size={30} color="#0047FF" />
            <BatteryMeter level={batteryLevel} />
          </StatItem>
          
          <StatItem>
            <FaTrophy size={30} color="#FFD700" />
            <ScoreDisplay>+{score}</ScoreDisplay>
          </StatItem>
        </StatsRow>
        
        <SurrenderButton 
          onClick={handleSurrender}
          aria-label="End focus session"
        >
          SURRENDER!!
        </SurrenderButton>
      </ContentBox>
    </PageContainer>
  );
}

export default LockedModePage;