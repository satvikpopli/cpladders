import React from 'react'
import Navbar from '../organisms/Navbar'
import Footer from '../organisms/Footer'

export default function GlobalTemplate( props: { theme: string, themeToggler: () => void, children: React.ReactNode }) {
    return (
        <>
            <Navbar theme={props.theme} themeToggler={props.themeToggler} />
                {props.children}
            <Footer />
        </>
    )
}