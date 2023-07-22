import React from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom";
import LogoLight from '../../assets/logo-light.png';
import LogoDark from  '../../assets/logo-dark.png';

export default function Logo({ theme } : { theme: string }) {
    return (
        <Branding to="/">
            <img src={theme === 'light' ? LogoDark : LogoLight} alt="logo" />
        </Branding>
    )
}

const Branding = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: ${({ theme }) => theme.rgb80};
    text-transform: uppercase;
    user-select: none;
    img {
        width: 200px;
    }
`