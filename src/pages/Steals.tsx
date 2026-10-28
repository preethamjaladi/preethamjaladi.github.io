import { ArrowLeft } from 'lucide-react'

export default function Steals() {
  return (
    <main id="main-content" className="mx-auto max-w-2xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
        THE OPEN TOOLBOX
      </p>
      <h1 className="mt-5 text-5xl font-semibold tracking-tight text-white sm:text-6xl">
        Steals.
      </h1>
      <p className="mt-5 text-lg leading-7 text-slate-300 sm:text-xl">
        Good ideas are meant to be stolen.
      </p>

      <section aria-labelledby="coming-soon-heading" className="mt-12">
        <h2 id="coming-soon-heading" className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Stealable ideas dropping soon.
        </h2>
        <p className="mt-5 text-base leading-7 text-slate-300">
          A growing collection of prompts, agent skills, workflows, templates, and developer resources.
          Everything here will be free to explore, copy, remix, and build upon.
        </p>
        <p className="mt-5 text-sm leading-6 text-slate-400">
          Nothing to steal just yet. Check back soon.
        </p>
      </section>

      <aside aria-labelledby="disclaimer-heading" className="mt-10 border-t border-slate-800 pt-6 text-sm leading-6 text-slate-400">
        <h2 id="disclaimer-heading" className="font-medium text-slate-300">Use at your own risk.</h2>
        <p className="mt-2">
          Resources will be shared as-is, without warranties or guarantees. Review, test, and adapt
          anything you use. You are responsible for how you use it.
        </p>
      </aside>

      <a
        href="/"
        className="mt-8 inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-medium text-slate-100 transition hover:border-slate-500 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
      >
        <ArrowLeft size={16} aria-hidden="true" />
        Back to Home
      </a>
    </main>
  )
}
