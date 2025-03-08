import React from 'react';
import styled from 'styled-components';
import { FaStar, FaGift, FaCreditCard, FaGamepad, FaShoppingCart, FaBoxOpen, FaChevronRight } from 'react-icons/fa';
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
  display: flex;
  align-items: center;
  width: 40%;
  max-width: 300px;
  background-color: rgba(94, 200, 255, 0.3);
  border-radius: 20px;
  padding: 12px 20px;
  margin-bottom: 40px;
`;

const HeaderText = styled.h2`
  font-size: 22px;
  font-weight: bold;
  color: #333;
  margin-left: 10px;
`;

const RedeemButton = styled.button`
  background: linear-gradient(135deg, #FFD700, #FFA500);
  color: white;
  border: none;
  border-radius: 30px;
  padding: 15px 40px;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px 0;
  box-shadow: 0 5px 15px rgba(255, 193, 7, 0.3);
  transition: all 0.3s ease;
  
  svg {
    margin-right: 10px;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(255, 193, 7, 0.4);
  }
`;

const PointsDisplay = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: rgba(255, 215, 0, 0.2);
  border-radius: 20px;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  font-weight: bold;
  
  svg {
    color: #FFD700;
    margin-right: 5px;
  }
`;

const RewardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  width: 100%;
  max-width: 800px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const RewardItem = styled.div`
  background-color: rgba(94, 200, 255, 0.2);
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  svg {
    font-size: 40px;
    margin-bottom: 10px;
    color: #333;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const ViewMoreButton = styled.button`
  background-color: transparent;
  border: none;
  color: #0047FF;
  font-size: 16px;
  display: flex;
  align-items: center;
  margin-top: 30px;
  padding: 10px 15px;
  border-radius: 20px;
  transition: all 0.2s ease;
  
  svg {
    margin-left: 5px;
  }
  
  &:hover {
    background-color: rgba(0, 71, 255, 0.1);
  }
`;

// RewardsPage component - implements consistency and standards (Nielsen's 4th heuristic)
// and aesthetic and minimalist design (Nielsen's 8th heuristic)
function RewardsPage({ navigateTo }) {
  const rewards = [
    { id: 1, name: 'Gift Card', icon: <FaCreditCard /> },
    { id: 2, name: 'Game', icon: <FaGamepad /> },
    { id: 3, name: 'Shopping', icon: <FaShoppingCart /> },
    { id: 4, name: 'Toys', icon: <FaBoxOpen /> }
  ];
  
  const handleRedeemClick = () => {
    // In a real app, this would open a modal or navigate to a redemption page
    alert('You can redeem your points for rewards!');
  };
  
  const handleRewardClick = (reward) => {
    alert(`You selected the ${reward.name} reward!`);
  };

  return (
    <PageContainer>
      <BackButton onClick={navigateTo} />
      
      <HeaderBar>
        <FaStar size={20} color="#FFD700" />
        <HeaderText>MY REWARDS</HeaderText>
      </HeaderBar>
      
      <PointsDisplay>
        <FaStar size={16} />
        100/100
      </PointsDisplay>
      
      <RedeemButton onClick={handleRedeemClick}>
        <FaGift />
        Redeem
      </RedeemButton>
      
      <RewardsGrid>
        {rewards.map(reward => (
          <RewardItem 
            key={reward.id}
            onClick={() => handleRewardClick(reward)}
            aria-label={`Select ${reward.name} reward`}
          >
            {reward.icon}
            <span>{reward.name}</span>
          </RewardItem>
        ))}
      </RewardsGrid>
      
      <ViewMoreButton onClick={() => navigateTo('metrics')}>
        View more
        <FaChevronRight />
      </ViewMoreButton>
    </PageContainer>
  );
}

export default RewardsPage;