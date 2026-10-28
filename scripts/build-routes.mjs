import { mkdir, readFile, writeFile } from 'node:fs/promises'

// Emit a real static entry so /steals/ works without a host-specific SPA rewrite.
// Vite's root-relative asset URLs work from both entry points.
const output = new URL('../dist/', import.meta.url)
const home = await readFile(new URL('index.html', output), 'utf8')
const title = 'Steals | Preetham Jaladi'
const description = 'Free prompts, agent skills, workflows, templates, and developer resources. Stealable ideas dropping soon.'
const steals = home
  .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
  .replace(/(<meta\s+name="description"\s+content=")[^"]*("\s*\/?>)/, `$1${description}$2`)
  .replace(/(<meta\s+property="og:title"\s+content=")[^"]*("\s*\/?>)/, `$1${title}$2`)
  .replace(/(<meta\s+property="og:description"\s+content=")[^"]*("\s*\/?>)/, `$1${description}$2`)
  .replace(/(<link\s+rel="canonical"\s+href=")[^"]*("\s*\/?>)/, '$1/steals$2')

await mkdir(new URL('steals/', output), { recursive: true })
await writeFile(new URL('steals/index.html', output), steals)
