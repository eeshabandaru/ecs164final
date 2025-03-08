import React from 'react';
import styled from 'styled-components';
import { FaChevronLeft } from 'react-icons/fa';

// Styled component for Back button - consistent with aesthetic design
const StyledBackButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.1);
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 10px 15px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
  
  // Accessibility enhancement for keyboard navigation
  &:focus {
    outline: 2px solid white;
    outline-offset: 2px;
  }
`;

// Back button component - implements error prevention (Nielsen's 5th heuristic)
// and consistent design (Nielsen's 4th heuristic)
const BackButton = ({ onClick, destination = 'home' }) => {
  return (
    <StyledBackButton 
      onClick={() => onClick(destination)}
      aria-label="Go back"
      title="Go back to previous screen"
    >
      <FaChevronLeft style={{ marginRight: '5px' }} />
      BACK
    </StyledBackButton>
  );
};

export default BackButton;