import { useEffect, useState } from 'react'
import Header from './Header'

export default function TopBar({ active, onSelect, theme = 'dark' }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const s = window.scrollY > 24
      setScrolled(s)
      document.body.classList.toggle('theme-alt', s)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isLight = theme === 'light'

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 w-full h-[72px] flex items-center transition ${
      scrolled
        ? (isLight
            ? 'backdrop-blur-md bg-white/80 border-b border-[#E5E7EB] shadow-[0_8px_30px_rgba(2,132,199,0.10)]'
            : 'backdrop-blur-md bg-[#0B1220]/70 border-b border-[#111827]/80 shadow-[0_8px_30px_rgba(0,0,0,0.25)]')
        : 'bg-transparent'
    }`}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Header active={active} onSelect={onSelect} scrolled={scrolled} theme={theme} />
        </div>
      </div>
    </div>
  )
}

