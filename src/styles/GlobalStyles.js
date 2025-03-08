import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', 'Roboto', sans-serif;
  }

  body {
    background: linear-gradient(to right, #36d1dc, #5b86e5);
    color: #333;
    min-height: 100vh;
    width: 100%;
  }

  button {
    cursor: pointer;
    border: none;
    border-radius: 8px;
    padding: 10px 15px;
    font-weight: 600;
    transition: all 0.2s ease-in-out;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }
  }

  input, textarea {
    padding: 12px;
    border-radius: 8px;
    border: 1px solid #ddd;
    font-size: 16px;
    width: 100%;
    
    &:focus {
      outline: none;
      border-color: #5b86e5;
      box-shadow: 0 0 0 2px rgba(91, 134, 229, 0.2);
    }
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }

  .page-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 20px;
  }

  .card {
    background: rgba(255, 255, 255, 0.85);
    border-radius: 16px;
    padding: 25px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 800px;
    backdrop-filter: blur(5px);
  }

  .gradient-text {
    background: linear-gradient(45deg, #0033ff, #00ccff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold;
  }

  .flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .flex-between {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .flex-column {
    display: flex;
    flex-direction: column;
  }

  .mt-20 {
    margin-top: 20px;
  }

  .mb-20 {
    margin-bottom: 20px;
  }
`;

export default GlobalStyles;