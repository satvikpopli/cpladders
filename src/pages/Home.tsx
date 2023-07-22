import React from 'react'
import GlobalTemplate from '../components/templates/GlobalTemplate'

export default function Home({ theme, themeToggler }: { theme: string, themeToggler: () => void }) {
  // if (!localStorage.getItem('theme')) localStorage.setItem('theme', 'light');
  return (
    <>
      <GlobalTemplate theme={theme} themeToggler={themeToggler}>
        <h1>Body Elements</h1>
      </GlobalTemplate >
    </>
  )
}