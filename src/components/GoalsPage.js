import React, { useState } from 'react';
import styled from 'styled-components';
import { FaUserAlt, FaBullseye } from 'react-icons/fa';
import BackButton from './BackButton';

const GoalsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100vh;
  padding: 40px 20px;
  position: relative;
`;

const HeaderBar = styled.div`
  width: 100%;
  max-width: 800px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 50px;
  padding: 12px 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  color: #333;
  
  svg {
    margin-right: 15px;
  }
`;

const ContentBox = styled.div`
  width: 100%;
  max-width: 800px;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
`;

const InputSection = styled.div`
  margin-top: 30px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 15px;
  position: relative;
`;

const InputField = styled.input`
  width: 100%;
  padding: 15px 20px;
  border-radius: 10px;
  border: 1px solid #ddd;
  font-size: 16px;
  background: rgba(255, 255, 255, 0.8);
  
  &::placeholder {
    color: #999;
  }
  
  &:focus {
    border-color: #0047FF;
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 71, 255, 0.2);
  }
`;

const GoButton = styled.button`
  position: absolute;
  right: 30px;
  bottom: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: white;
  border: 2px solid #0047FF;
  color: #0047FF;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  
  &:hover {
    background: #0047FF;
    color: white;
  }
`;

const TargetIcon = styled.div`
  position: absolute;
  right: 30px;
  top: 30px;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 40px;
    height: 40px;
    color: #333;
  }
`;

// Debug navigation buttons
const DebugNav = styled.div`
  position: fixed;
  bottom: 20px;
  left: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: rgba(0,0,0,0.7);
  padding: 10px;
  border-radius: 8px;
  z-index: 1000;
`;

const DebugButton = styled.button`
  padding: 5px 10px;
  background: #555;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
  
  &:hover {
    background: #777;
  }
`;

// GoalsPage component - implements flexibility and efficiency of use (Nielsen's 7th heuristic)
function GoalsPage({ navigateTo }) {
  const [inputValue, setInputValue] = useState('');
  console.log("GoalsPage rendered with navigateTo function:", navigateTo);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    // IMPORTANT CHANGE: Navigate directly to 'locked' (not 'lockin')
    console.log("Submit button clicked, navigating to locked mode");
    navigateTo('locked');
  };

  // Providing feedback on action (Nielsen's 1st heuristic - visibility of system status)
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      console.log("Enter key pressed, navigating to locked mode");
      handleSubmit();
    }
  };

  return (
    <GoalsContainer>
      <BackButton onClick={() => {
        console.log("Back button clicked, navigating to home");
        navigateTo('home');
      }} />
      
      <HeaderBar>
        <Logo>
          <FaUserAlt />
          FOCUSFLOW
        </Logo>
      </HeaderBar>
      
      <ContentBox>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Goals:</h2>
        
        <InputSection>
          <InputField 
            type="text" 
            placeholder="type something here" 
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            aria-label="Enter your goal"
          />
          
          <TargetIcon>
            <FaBullseye />
          </TargetIcon>
          
          <GoButton 
            onClick={handleSubmit}
            aria-label="Submit goal"
          >
            GO
          </GoButton>
        </InputSection>
      </ContentBox>
      
      {/* Debug navigation panel */}
      <DebugNav>
        <div style={{color: 'white', marginBottom: '5px'}}>Debug Navigation:</div>
        <DebugButton onClick={() => navigateTo('home')}>Home</DebugButton>
        <DebugButton onClick={() => navigateTo('goals')}>Goals</DebugButton>
        <DebugButton onClick={() => navigateTo('locked')}>Locked Mode</DebugButton>
        <DebugButton onClick={() => navigateTo('rewards')}>Rewards</DebugButton>
        <DebugButton onClick={() => navigateTo('metrics')}>Metrics</DebugButton>
        <DebugButton onClick={() => navigateTo('statistics')}>Statistics</DebugButton>
      </DebugNav>
    </GoalsContainer>
  );
}

export default GoalsPage;