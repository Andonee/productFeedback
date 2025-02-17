import Tag from '@/components/shared/Tag/Tag'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ChevronUp, MessageCircle } from 'lucide-react'
import Link from 'next/link'

const title = 'Add a datk theme option'
const content = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ab
            corrupti est libero ratione quas explicabo voluptatibus, a obcaecati
            dolorum perspiciatis quia aspernatur atque quasi, facilis dolore.
            Aperiam, exercitationem dolore.`

const Suggestion = () => {
  return (
    <Card>
      <CardContent className='flex items-start gap-4 rounded-md p-4'>
        <div>
          <Button variant='cotton' size='icon'>
            <div className='flex flex-col items-center justify-center px-4 py-6 [&>svg]:text-bluetiful'>
              <ChevronUp />
              <span className='font-bold'>6</span>
            </div>
          </Button>
        </div>
        <div className='flex flex-col gap-2'>
          <div className='font-bold'>{title}</div>
          <div>{content}</div>
          <div>
            <Tag label='UI' value='2' interactive={false} />
          </div>
        </div>
        <div className='flex gap-2'>
          <span>
            <Link
              href={'/feature/1'}
              className='[&>svg]:fill-oceanNight [&>svg]:text-oceanNight'
            >
              <MessageCircle />
            </Link>
          </span>
          <span className='font-bold'>6</span>
        </div>
      </CardContent>
    </Card>
  )
}

export default Suggestion
