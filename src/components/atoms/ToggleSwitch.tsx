import React from 'react'
import styled from 'styled-components';
import { BsMoonStarsFill, BsFillSunFill } from 'react-icons/bs';

export default function ToggleSwitch({ theme, themeToggler }: { theme: string, themeToggler: () => void }) {
    return (
        <Switch onClick={themeToggler} theme={theme}>
            <ToggleButton theme={theme}>
                {theme === 'light' ? <BsFillSunFill /> : <BsMoonStarsFill />}
            </ToggleButton>
        </Switch>
    )
}

const Switch = styled.div<{ theme: string }>`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 60px;
    height: 30px;
    border: 2px solid ${props => props.theme === 'light' ? '#000000' : '#e3e300'};
    border-radius: 10em;
    background-color: ${props => props.theme === 'light' ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.1)'};
    cursor: pointer;
    transition: all 0.3s ease-in-out;
`

const ToggleButton = styled.div<{ theme: string }>`
    color: black;
    position: relative;
    left: ${props => props.theme === 'light' ? '-2px' : '21.5px'};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;
    border: 2px solid ${props => props.theme === 'light' ? '#000000' : '#000000'};
    height: 36.5px;
    width: 36.5px;
    border-radius: 50%;
    background-color: ${props => props.theme === 'light' ? '#caff9c' : '#e3e300'};
    transition: all 150ms ease-in-out;
`