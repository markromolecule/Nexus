import { useEffect, useState } from 'react'

export default function Layout({ children }) {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY || 0)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const orbOffset = scrollY * 0.15
  const ringOffset = scrollY * -0.08
  const gridX = Math.round(scrollY * -0.1)
  const gridY = Math.round(scrollY * 0.1)

  return (
    <div className="text-white bg-[var(--bg-black)] relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="neon-orb" style={{ transform: `translateY(${orbOffset}px)` }} />
        <div className="glow-ring" style={{ transform: `translateY(${ringOffset}px) rotate(${scrollY * 0.05}deg)` }} />
        <div className="grid-overlay" style={{ backgroundPosition: `${gridX}px ${gridY}px, ${gridX}px ${gridY}px` }} />
        <div className="noise-layer" />
        <div className="sweep" />
      </div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}

