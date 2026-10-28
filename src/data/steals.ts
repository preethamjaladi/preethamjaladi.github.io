// Add real resources here when ready; the coming-soon page intentionally renders no grid.
export type StealCategory = 'prompts' | 'skills' | 'workflows' | 'templates' | 'resources'

export type StealResource = {
  title: string
  category: StealCategory
  description: string
  url: string
  action: 'copy' | 'download'
  instructions?: string
}

export const steals: StealResource[] = []
