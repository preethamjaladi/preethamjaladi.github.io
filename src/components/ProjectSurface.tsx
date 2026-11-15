import type { ReactNode } from 'react'
import { updatePointerHighlight } from '../utils/pointerHighlight'

export default function ProjectSurface({ summary, children, note }: { summary: ReactNode; children: ReactNode; note?: string }) {
  return (
    <div className="project-tile-frame min-w-0">
    <details
      onPointerMove={updatePointerHighlight}
      className="project-tile project-surface pointer-surface rounded-3xl border border-slate-800 bg-slate-900 shadow-lg shadow-slate-950/20"
    >
      <summary className="project-tile-trigger cursor-pointer rounded-3xl p-6 sm:p-8">
        {summary}
      </summary>
      <div className="border-t border-slate-800 p-6 sm:p-8">{children}</div>
    </details>
    {note && <p className="mt-3 px-2 text-xs leading-5 text-slate-400">{note}</p>}
    </div>
  )
}
