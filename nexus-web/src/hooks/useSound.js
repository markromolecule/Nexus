import { useMemo } from 'react'

export function useSound() {
  const audio = useMemo(() => {
    const ctx = new (window.AudioContext || window.webkitAudioContext)()
    const playTone = (frequency = 440, durationMs = 120, type = 'sine', gain = 0.06) => {
      const now = ctx.currentTime
      const oscillator = ctx.createOscillator()
      const gainNode = ctx.createGain()
      oscillator.type = type
      oscillator.frequency.setValueAtTime(frequency, now)
      gainNode.gain.setValueAtTime(gain, now)
      oscillator.connect(gainNode)
      gainNode.connect(ctx.destination)
      oscillator.start(now)
      const end = now + durationMs / 1000
      // quick decay to avoid clicks
      gainNode.gain.exponentialRampToValueAtTime(0.0001, end)
      oscillator.stop(end)
    }

    const click = () => {
      // quick two-tone blip
      playTone(660, 70, 'sine', 0.06)
      setTimeout(() => playTone(880, 70, 'sine', 0.05), 60)
    }

    const select = () => {
      playTone(520, 90, 'triangle', 0.05)
    }

    return { click, select }
  }, [])

  return audio
}
