'use client'
import { Badge } from '@/components/ui/badge'

type TagTypeProps = {
  label: string
  value: string
  interactive: boolean
  active?: boolean
}

const Tag = ({ interactive, label, value, active }: TagTypeProps) => {
  const onTagClick = () => {
    console.log('clicked', value)
  }
  return (
    <Badge
      onClick={interactive ? onTagClick : undefined}
      variant='tag'
      className={`${active ? 'bg-bluetiful text-snowy hover:bg-bluetiful/90' : undefined}`}
    >
      {label}
    </Badge>
  )
}

export default Tag
