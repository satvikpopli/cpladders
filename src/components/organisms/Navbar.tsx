import React from 'react'
import Logo from '../atoms/Logo';
import styled from 'styled-components';
import ToggleSwitch from '../atoms/ToggleSwitch';

export default function Navbar({ theme, themeToggler }: { theme: string, themeToggler: () => void }) {
    return (
        <Nav>
            <Logo theme={theme} />
            <ToggleSwitch theme={theme} themeToggler={themeToggler} />
        </Nav>
    )
}

const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 12.5vh;
    padding: 4rem 2rem;
    background-color: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.dark};
`