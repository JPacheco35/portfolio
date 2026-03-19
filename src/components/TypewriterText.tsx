 import { useEffect, useMemo, useState } from 'react'
import { cn } from '@/lib/utils'
import styles from './TypewriterText.module.css'

interface TypewriterTextProps {
  words: string[]
  className?: string
  cursorClassName?: string
  typingSpeedMs?: number
  deletingSpeedMs?: number
  pauseDurationMs?: number
  pauseDurationByWord?: number[]
  minWidthCh?: number
  ariaLabelPrefix?: string
}

export function TypewriterText({
  words,
  className,
  cursorClassName,
  typingSpeedMs = 95,
  deletingSpeedMs = 45,
  pauseDurationMs = 600,
  pauseDurationByWord,
  minWidthCh,
  ariaLabelPrefix = 'Current text',
}: TypewriterTextProps) {
  const normalizedWords = useMemo(() => words.filter((word) => word.trim().length > 0), [words])
  const [activeWordIndex, setActiveWordIndex] = useState(0)
  const [typedText, setTypedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    const syncMotionPreference = () => {
      setPrefersReducedMotion(mediaQuery.matches)
    }

    syncMotionPreference()
    mediaQuery.addEventListener('change', syncMotionPreference)

    return () => {
      mediaQuery.removeEventListener('change', syncMotionPreference)
    }
  }, [])

  useEffect(() => {
    if (prefersReducedMotion) {
      return
    }

    const currentWord = normalizedWords[activeWordIndex]
    if (!currentWord) return

    const pauseForWord = pauseDurationByWord?.[activeWordIndex] ?? pauseDurationMs
    const isAtFullText = !isDeleting && typedText === currentWord
    const speed = isAtFullText ? pauseForWord : isDeleting ? deletingSpeedMs : typingSpeedMs

    const timeoutId = window.setTimeout(() => {
      if (isAtFullText) {
        // Only delete and cycle if we have multiple words
        if (normalizedWords.length > 1) {
          setIsDeleting(true)
        }
        return
      }

      if (!isDeleting) {
        setTypedText(currentWord.slice(0, typedText.length + 1))
        return
      }

      const nextText = currentWord.slice(0, Math.max(typedText.length - 1, 0))
      setTypedText(nextText)

      if (nextText.length === 0) {
        setIsDeleting(false)
        setActiveWordIndex((prev) => (prev + 1) % normalizedWords.length)
      }
    }, speed)

    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [
    activeWordIndex,
    deletingSpeedMs,
    isDeleting,
    normalizedWords,
    pauseDurationByWord,
    pauseDurationMs,
    prefersReducedMotion,
    typedText,
    typingSpeedMs,
  ])

  if (normalizedWords.length === 0) {
    return null
  }

  const currentWord = normalizedWords[activeWordIndex] ?? normalizedWords[0]
  const displayText = prefersReducedMotion ? normalizedWords[0] : typedText

  return (
    <span aria-label={`${ariaLabelPrefix}: ${currentWord}`}>
      <span
        className={cn(styles.typewriterText, className)}
        style={minWidthCh ? { minWidth: `${minWidthCh}ch` } : undefined}
      >
        {displayText}
      </span>
      <span className={cn(styles.typewriterCursor, cursorClassName)} aria-hidden>
        |
      </span>
    </span>
  )
}

