import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';

const backgroundColor = theme('mode', {
  bTheme: 'green',
  nTheme: 'yellow'
});

const display = theme('mode', {
  bTheme: 'block',
  nTheme: 'none'
});

const Navbar = styled.nav`
  width: 100vw;
  height: 50px;
  background-color: ${backgroundColor};
  margin-bottom: 15px;
  padding: 0 10px;

  & > ul {
    display: flex;
    justify-content: space-between;
    list-style: none;

    & > li:last-child {
      display: ${display};
    }
  }
`;

const Menu = () => (
  <Navbar>
    <ul>
      <li>Brand name</li>
      <li>Login</li>
    </ul>
  </Navbar>
);

export default Menu;
