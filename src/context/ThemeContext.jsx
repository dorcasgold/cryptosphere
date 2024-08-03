import React, { useState, useEffect, createContext } from 'react'

// Initial Theme Detection:
// Determines the initial theme by checking local storage for a stored preference.
// If no preference is found, it checks the user's system preference for dark mode and defaults to light mode otherwise.
const getInitialTheme = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPrefs = window.localStorage.getItem('color-theme')
    if (typeof storedPrefs === 'string') {
      return storedPrefs
    }

    const userMedia = window.matchMedia('(prefers-color-scheme: dark)')
    if (userMedia.matches) {
      return 'dark'
    }
  }
  return 'light'
}

// Theme Context Creation:
// Creates ThemeContext to provide a theme state throughout the application.
export const ThemeContext = createContext()

// ThemeProvider Component:
// Manages the theme state, initializes with the result of getInitialTheme, updates the theme in local storage,
// and provides the theme context to its children.
export const ThemeProvider = ({ initialTheme, children }) => {
  const [theme, setTheme] = useState(getInitialTheme)

  // rawSetTheme function:
  // Updates the document's root class to reflect the current theme and stores this preference in local storage.
  const rawSetTheme = (theme) => {
    const root = window.document.documentElement
    const isDark = theme === 'dark'

    root.classList.remove(isDark ? 'light' : 'dark')
    root.classList.add(theme)

    localStorage.setItem('color-theme', theme)
  }

  // Sets the document's theme if initialTheme is provided.
  if (initialTheme) {
    rawSetTheme(initialTheme)
  }

  // Ensures the theme is updated whenever the state changes.
  useEffect(() => {
    rawSetTheme(theme)
  }, [theme])

  return (
    // Provides the current theme and the setTheme function to its children components.
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
