import type { PointerEvent } from 'react'

export function updatePointerHighlight(event: PointerEvent<HTMLElement>) {
  if (event.pointerType !== 'mouse' || !window.matchMedia('(prefers-reduced-motion: no-preference)').matches) return

  const card = event.currentTarget
  const bounds = card.getBoundingClientRect()
  card.style.setProperty('--pointer-x', `${event.clientX - bounds.left}px`)
  card.style.setProperty('--pointer-y', `${event.clientY - bounds.top}px`)
}
