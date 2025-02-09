import Tag from '@/components/shared/Tag/Tag'
import { Button } from '@/components/ui/button'
import { ChevronUp, MessageCircle } from 'lucide-react'

const Suggestion = () => {
  return (
    <div className='flex w-full items-start gap-4 rounded-md bg-snowy p-4'>
      <div>
        <Button variant='cotton' size='icon'>
          <div className='flex flex-col items-center justify-center px-4 py-6 [&>svg]:text-bluetiful'>
            <ChevronUp />
            <span className='font-bold'>6</span>
          </div>
        </Button>
      </div>
      <div className='flex flex-col gap-2'>
        <div className='font-bold'>Add a datk theme option</div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ab
          corrupti est libero ratione quas explicabo voluptatibus, a obcaecati
          dolorum perspiciatis quia aspernatur atque quasi, facilis dolore.
          Aperiam, exercitationem dolore.
        </div>
        <div>
          <Tag label='UI' value='2' interactive={false} />
        </div>
      </div>
      <div className='flex gap-2'>
        <span className='[&>svg]:fill-oceanNight [&>svg]:text-oceanNight'>
          <MessageCircle />
        </span>
        <span className='font-bold'>6</span>
      </div>
    </div>
  )
}

export default Suggestion
