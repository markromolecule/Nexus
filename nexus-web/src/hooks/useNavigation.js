import { useState, useCallback } from 'react'

export function useNavigation(initial = 'Joseph') {
  const [active, setActive] = useState(initial)

  const navigate = useCallback((key) => {
    setActive(key)
  }, [
    setActive
  ])

  return { 
    active, 
    navigate 
  }
}

export const DEVELOPERS = ['Joseph', 'Jom', 'dev3', 'dev4', 'dev5']

