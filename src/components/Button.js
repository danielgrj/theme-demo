import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';

const colorPalette = theme('mode', {
  bTheme: `
    background-color: #333;
    color: #fff;
  `,
  nTheme: `
    background-color: #fff;
    color: #333;
  `
});

const StyledButton = styled.button`
  border-radius: 10px;
  padding: 5px 10px;
  ${colorPalette}
  margin: 15px;
`;

const Button = () => <StyledButton>Do something</StyledButton>;

export default Button;
