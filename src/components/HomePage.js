import React from 'react';
import styled from 'styled-components';
import { FaAtom } from 'react-icons/fa';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  padding: 20px;
`;

const Logo = styled.div`
  font-size: 28px;
  font-weight: bold;
  color: #0055ff;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 10px;
  }
`;

const HeaderText = styled.h1`
  font-size: 48px;
  font-weight: bold;
  text-align: center;
  color: #0055ff;
  margin-bottom: 40px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftSection = styled.div`
  flex: 1;
  padding: 20px;
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  
  img {
    max-width: 100%;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 768px) {
    margin-top: 30px;
  }
`;

const DownloadButton = styled.button`
  background-color: rgba(70, 200, 255, 0.2);
  color: #0055ff;
  border: 2px solid #0055ff;
  border-radius: 30px;
  padding: 15px 30px;
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #0055ff;
    color: white;
  }
`;

const AppStoreContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 30px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StoreButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0a2463;
  color: white;
  border-radius: 10px;
  padding: 10px 20px;
  font-weight: bold;
  
  img {
    height: 24px;
    margin-right: 10px;
  }
  
  &:hover {
    background-color: #173686;
  }
`;

const StartNowButton = styled.button`
  width: 120px;
  height: 40px;
  background-color: #0055ff;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 14px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #0044cc;
    transform: scale(1.05);
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

// HomePage component - implements match between system and real world (Nielsen's 2nd heuristic)
function HomePage({ navigateTo }) {
  console.log("HomePage rendered with navigateTo:", navigateTo); // Debug log
  
  // One common function for all buttons
  const handleButtonClick = () => {
    console.log("Button clicked, navigating to goals page");
    navigateTo('goals');
  };

  return (
    <HomeContainer>
      <Logo>
        <FaAtom size={24} />
        FOCUSFLOW.AI
      </Logo>
      
      <ContentContainer>
        <LeftSection>
          <HeaderText>"It's time for Lock In O'Clock."</HeaderText>
          <DownloadButton onClick={handleButtonClick}>
            Download the App today!
          </DownloadButton>
          
          <AppStoreContainer>
            <StoreButton onClick={handleButtonClick}>
              Get it on the App Store
            </StoreButton>
            <StoreButton onClick={handleButtonClick}>
              Get it on Google Play
            </StoreButton>
          </AppStoreContainer>
        </LeftSection>
        
        <RightSection>
          {/* Phone mockup with clickable button */}
          <div style={{ 
            width: '300px', 
            height: '600px', 
            backgroundColor: '#f0f0f0', 
            borderRadius: '30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            overflow: 'hidden'
          }}>
            {/* Simulated app screen */}
            <div style={{
              width: '90%',
              height: '95%',
              backgroundColor: 'white',
              borderRadius: '20px',
              display: 'flex',
              flexDirection: 'column',
              padding: '20px',
              position: 'relative'
            }}>
              <div style={{width: '40%', height: '4px', backgroundColor: '#333', borderRadius: '2px', position: 'absolute', top: '10px', left: '30%'}}></div>
              <div style={{marginTop: '30px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <div style={{fontSize: '18px', fontWeight: 'bold', marginBottom: '20px'}}>FocusFlow App</div>
                <div style={{width: '70%', height: '40px', backgroundColor: '#f0f0f0', borderRadius: '8px', marginBottom: '15px'}}></div>
                <div style={{width: '70%', height: '40px', backgroundColor: '#f0f0f0', borderRadius: '8px', marginBottom: '15px'}}></div>
                <div style={{width: '70%', height: '40px', backgroundColor: '#f0f0f0', borderRadius: '8px', marginBottom: '15px'}}></div>
                <div style={{width: '70%', height: '40px', backgroundColor: '#f0f0f0', borderRadius: '8px', marginBottom: '15px'}}></div>
                
                {/* Using the same click handler as other buttons */}
                <StartNowButton onClick={handleButtonClick}>
                  Start Now
                </StartNowButton>
              </div>
            </div>
          </div>
        </RightSection>
      </ContentContainer>
      
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
    </HomeContainer>
  );
}

export default HomePage;