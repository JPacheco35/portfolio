// Animated typewriter effect that cycles through multiple words with typing and deleting animations

import { useEffect, useMemo, useState } from 'react'
import { cn } from '@/lib/utils'
import styles from './TypewriterText.module.css'

interface TypewriterTextProps {
  // array of words to cycle through with typing effect
  words: string[]
  // custom CSS classes to apply to the typed text span
  className?: string
  // custom CSS classes to apply to the cursor span
  cursorClassName?: string
  // speed of typing in milliseconds (default: 95ms per character)
  typingSpeedMs?: number
  // speed of deleting in milliseconds (default: 45ms per character)
  deletingSpeedMs?: number
  // default pause duration between typing and deleting (default: 600ms)
  pauseDurationMs?: number
  // array of pause durations per word (overrides pauseDurationMs for specific words)
  pauseDurationByWord?: number[]
  // minimum width of text container in characters (prevents layout shift)
  minWidthCh?: number
  // prefix text for accessibility/aria-label
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
  // filter out empty words and memoize the list to avoid unnecessary re-renders
  const normalizedWords = useMemo(() => words.filter((word) => word.trim().length > 0), [words])
  
  // track which word in the array we're currently typing
  const [activeWordIndex, setActiveWordIndex] = useState(0)
  
  // track the current typed text (progressively builds/deletes characters)
  const [typedText, setTypedText] = useState('')
  
  // track if we're in "deleting" mode or "typing" mode
  const [isDeleting, setIsDeleting] = useState(false)
  
  // respect user's motion preferences for accessibility
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  // sync with system motion preferences and listen for changes
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

  // main typewriter animation loop: type characters, pause, delete, then cycle to next word
  useEffect(() => {
    // if user prefers reduced motion, skip animation entirely
    if (prefersReducedMotion) {
      return
    }

    const currentWord = normalizedWords[activeWordIndex]
    if (!currentWord) return

    // determine pause duration for this specific word (or use default)
    const pauseForWord = pauseDurationByWord?.[activeWordIndex] ?? pauseDurationMs
    
    // check if we've finished typing the current word
    const isAtFullText = !isDeleting && typedText === currentWord
    
    // determine animation speed: pause after full word, delete speed, or typing speed
    const speed = isAtFullText ? pauseForWord : isDeleting ? deletingSpeedMs : typingSpeedMs

    const timeoutId = window.setTimeout(() => {
      if (isAtFullText) {
        // only start deleting if we have multiple words (single word stays visible)
        if (normalizedWords.length > 1) {
          setIsDeleting(true)
        }
        return
      }

      // add next character while typing
      if (!isDeleting) {
        setTypedText(currentWord.slice(0, typedText.length + 1))
        return
      }

      // remove last character while deleting
      const nextText = currentWord.slice(0, Math.max(typedText.length - 1, 0))
      setTypedText(nextText)

      // once fully deleted, move to next word and start typing again
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

  // exit early if no valid words provided
  if (normalizedWords.length === 0) {
    return null
  }

  // determine what text to display (respects reduced motion preference)
  const currentWord = normalizedWords[activeWordIndex] ?? normalizedWords[0]
  const displayText = prefersReducedMotion ? normalizedWords[0] : typedText

  return (
    <span aria-label={`${ariaLabelPrefix}: ${currentWord}`}>
      {/* typed text with optional minimum width to prevent layout shift */}
      <span
        className={cn(styles.typewriterText, className)}
        style={minWidthCh ? { minWidth: `${minWidthCh}ch` } : undefined}
      >
        {displayText}
      </span>
      {/* animated cursor (hidden from screen readers) */}
      <span className={cn(styles.typewriterCursor, cursorClassName)} aria-hidden>
        |
      </span>
    </span>
  )
}

