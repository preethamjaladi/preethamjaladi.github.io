import { useState } from 'react'
import {
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  Download,
  ExternalLink,
  Mail,
  MapPin,
  Menu,
  Moon,
  Sun,
  X,
} from 'lucide-react'
import { portfolio } from './content'
import Steals from './pages/Steals'

const trackAnalytics = (label: string) => {
  if (typeof window === 'undefined') {
    return
  }

  const dataLayer = (
    window as Window & { dataLayer?: Array<Record<string, unknown>> }
  ).dataLayer

  if (dataLayer) {
    dataLayer.push({ event: 'portfolio_click', label })
  }
}

function App() {
  const isStealsPage = /^\/steals\/?$/.test(window.location.pathname)
  const homeLink = (href: string) => isStealsPage && href.startsWith('#') ? `/${href}` : href
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [theme, setTheme] = useState<'dark' | 'light'>(() =>
    document.documentElement.dataset.theme === 'light' ? 'light' : 'dark',
  )

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
    document.documentElement.dataset.theme = nextTheme
    document.documentElement.style.colorScheme = nextTheme
    document.querySelector<HTMLMetaElement>('meta[name="theme-color"]')?.setAttribute(
      'content',
      nextTheme === 'light' ? '#F8F5EF' : '#020617',
    )

    try {
      window.localStorage.setItem('portfolio-theme', nextTheme)
    } catch (error) {
      console.error('Unable to save the theme preference.', error)
    }
  }

  const themeToggle = (
    <button
      type="button"
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-slate-200 transition hover:border-slate-500 hover:bg-slate-900 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
      aria-pressed={theme === 'light'}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
      onClick={toggleTheme}
    >
      {theme === 'dark' ? <Sun size={17} aria-hidden="true" /> : <Moon size={17} aria-hidden="true" />}
    </button>
  )

  return (
    <div className="site-shell min-h-screen bg-slate-950 text-slate-100 antialiased">
      <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href={homeLink('#home')} className="flex items-center gap-3 text-sm font-medium text-slate-100">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-sm font-semibold text-white">
              PJ
            </span>
            <span>{portfolio.name}</span>
          </a>

          <div className="flex items-center gap-2 md:hidden">
            {themeToggle}
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md border border-slate-700 p-2 text-slate-200"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav"
              onClick={() => setMobileMenuOpen((value) => !value)}
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

          <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
            {portfolio.nav.map((item) => (
              <a
                key={item.href}
                href={homeLink(item.href)}
                aria-current={isStealsPage && item.href === '/steals' ? 'page' : undefined}
                className="text-sm text-slate-300 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                {item.label}
              </a>
            ))}
            <a
              href={portfolio.resumeUrl}
              download
              className="rounded-full border border-slate-700 px-3 py-2 text-sm font-medium text-slate-100 transition hover:border-slate-500 hover:bg-slate-900"
              onClick={() => trackAnalytics('resume_download')}
            >
              Resume
            </a>
            {themeToggle}
          </nav>
        </div>

        {mobileMenuOpen && (
          <nav id="mobile-nav" className="border-t border-slate-800 bg-slate-950 px-4 py-3 md:hidden" aria-label="Mobile navigation">
            <div className="flex flex-col gap-3">
              {portfolio.nav.map((item) => (
                <a
                  key={item.href}
                  href={homeLink(item.href)}
                  aria-current={isStealsPage && item.href === '/steals' ? 'page' : undefined}
                  className="rounded-md px-2 py-2 text-sm text-slate-200 hover:bg-slate-900 hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href={portfolio.resumeUrl}
                download
                className="rounded-md border border-slate-700 px-2 py-2 text-sm font-medium text-slate-100"
                onClick={() => {
                  trackAnalytics('resume_download')
                  setMobileMenuOpen(false)
                }}
              >
                Download Resume
              </a>
            </div>
          </nav>
        )}
      </header>

      {isStealsPage ? <Steals /> : <main>
        <section id="home" className="mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-24 lg:pt-24">
          <div className="flex flex-col items-center text-center">
            <div className="w-full">
              <p className="inline-flex whitespace-nowrap rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.1em] text-slate-300 sm:text-xs sm:tracking-[0.15em]">
                {portfolio.role}
              </p>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                {portfolio.name}
              </h1>
              <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-300">
                {portfolio.valueProp}
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                >
                  View Projects
                  <ArrowRight size={16} />
                </a>
                <a
                  href={portfolio.resumeUrl}
                  download
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-medium text-slate-100 transition hover:border-slate-500 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                  onClick={() => trackAnalytics('resume_download')}
                >
                  Download Resume
                  <Download size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">Featured projects</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Work that demonstrates technical depth.
              </h2>
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {portfolio.projects.map((project, index) => (
              <article key={project.name} className="group flex h-full flex-col rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-lg shadow-slate-950/20 transition hover:-translate-y-1 hover:border-slate-600">
                <div className="mb-5 flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Featured Project {String(index + 1).padStart(2, '0')}</p>
                    {project.category && <p className="mt-2 text-xs text-slate-400">{project.category}</p>}
                    <h3 className="mt-2 text-2xl font-semibold text-white">{project.name}</h3>
                  </div>
                  {project.repo && !project.repo.includes('your-username') && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-950 text-slate-200 transition hover:border-slate-500 hover:text-white"
                    aria-label={`View ${project.name} repository`}
                    onClick={() => trackAnalytics(`project_repo_${project.name}`)}
                  >
                    <Code2 size={18} />
                  </a>
                  )}
                </div>

                <p className="text-sm font-medium text-slate-200">Problem</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{project.problem}</p>

                <div className="mt-6">
                  <p className="text-sm font-medium text-slate-200">Solution</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{project.description}</p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-full border border-slate-700 bg-slate-950 px-2.5 py-1 text-[11px] uppercase tracking-[0.12em] text-slate-200">
                      {item}
                    </span>
                  ))}
                </div>

                {project.plannedStack && (
                  <p className="mt-3 text-xs leading-5 text-slate-400">
                    Planned platform additions: {project.plannedStack.join(', ')}.
                  </p>
                )}

                {project.highlights ? (
                  <div className="mt-6 border-t border-slate-800 pt-5">
                    <p className="text-sm font-medium text-slate-200">Technical highlights</p>
                    <ul className="mt-2 list-disc space-y-2 pl-4 text-sm leading-6 text-slate-300">
                      {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                    </ul>
                  </div>
                ) : (
                  <>
                <div className="mt-6 border-t border-slate-800 pt-5">
                  <p className="text-sm font-medium text-slate-200">Engineering contribution</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{project.contribution}</p>
                </div>

                <div className="mt-5">
                  <p className="text-sm font-medium text-slate-200">Technical accomplishment</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{project.achievement}</p>
                </div>

                  </>
                )}

                <div className="mt-6 flex flex-wrap gap-3 pt-2">
                  {project.repo && !project.repo.includes('your-username') && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-slate-200"
                    onClick={() => trackAnalytics(`project_repo_${project.name}`)}
                  >
                    GitHub Repository
                    <ExternalLink size={14} />
                  </a>
                  )}
                  {project.demo && !project.demo.includes('example.com') && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white"
                      onClick={() => trackAnalytics(`project_demo_${project.name}`)}
                    >
                      Demo
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="border-y border-slate-800 bg-slate-900/40">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">Experience</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Experience built around software engineering and practical problem solving.
            </h2>

            <div className="mt-10 space-y-6">
              {portfolio.experience.map((role) => (
                <article key={`${role.company}-${role.period}`} className="rounded-3xl border border-slate-800 bg-slate-950 p-6 sm:p-8">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-xl font-semibold text-white">{role.title}</p>
                      <p className="mt-1 text-base text-slate-300">{role.company}</p>
                    </div>
                    <span className="text-sm text-slate-400">{role.period}</span>
                  </div>

                  <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-300">
                    {role.description.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-100" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {role.stack.map((item) => (
                      <span key={item} className="rounded-full border border-slate-700 bg-slate-900 px-2.5 py-1 text-[11px] uppercase tracking-[0.12em] text-slate-200">
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">Skills</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {portfolio.skills.map((group) => (
              <div key={group.title} className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
                <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="rounded-full border border-slate-700 bg-slate-950 px-2.5 py-1.5 text-sm text-slate-200">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="education" className="border-y border-slate-800 bg-slate-900/40">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">Education</p>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {portfolio.education.map((item) => (
                <article key={item.school} className="rounded-3xl border border-slate-800 bg-slate-950 p-6">
                  <p className="text-lg font-semibold text-white">{item.school}</p>
                  <p className="mt-2 text-base text-slate-300">{item.degree}</p>
                  <p className="mt-4 text-sm text-slate-400">{item.period}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 sm:p-10">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">Contact</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Reach out for engineering, product, or AI collaboration.
            </h2>

            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              <a
                href={`mailto:${portfolio.profileLinks.email}`}
                className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-950 p-4 text-slate-200 transition hover:border-slate-600 hover:text-white"
                onClick={() => trackAnalytics('contact_email')}
              >
                <Mail size={18} className="text-slate-300" />
                <span className="text-sm">{portfolio.profileLinks.email}</span>
              </a>

              <a
                href={portfolio.profileLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-950 p-4 text-slate-200 transition hover:border-slate-600 hover:text-white"
                onClick={() => trackAnalytics('contact_linkedin')}
              >
                <BriefcaseBusiness size={18} className="text-slate-300" />
                <span className="text-sm">LinkedIn</span>
              </a>

              <a
                href={portfolio.profileLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-950 p-4 text-slate-200 transition hover:border-slate-600 hover:text-white"
                onClick={() => trackAnalytics('contact_github')}
              >
                <Code2 size={18} className="text-slate-300" />
                <span className="text-sm">GitHub</span>
              </a>

              <div className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-950 p-4 text-slate-200">
                <MapPin size={18} className="text-slate-300" />
                <span className="text-sm">{portfolio.profileLinks.location}</span>
              </div>
            </div>
          </div>
        </section>
      </main>}

      <footer className="border-t border-slate-800 bg-slate-950">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-sm text-slate-400 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© {portfolio.name}. </p>
          <div className="flex items-center gap-4">
            <a href={homeLink('#home')} className="hover:text-white">
              {isStealsPage ? 'Back to Home' : 'Back to top'}
            </a>
            <a href={portfolio.resumeUrl} download className="hover:text-white" onClick={() => trackAnalytics('resume_download_footer')}>
              Resume
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
