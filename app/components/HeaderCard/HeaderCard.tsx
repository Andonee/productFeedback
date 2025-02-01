import { Card, CardContent } from '@/components/ui/card'

const HeaderCard = () => {
  return (
    <Card className='w-full rounded-none bg-gradient-to-bl from-[#E84D70] via-[#A337F6] to-[#28A7ED] md:h-full md:rounded-xl xl:h-[140px]'>
      <CardContent className='flex h-full flex-col justify-end p-0'>
        <div>
          <h2 className='text-snowy'>Frontend Mentor</h2>
          <p className='text-snowy'>Feedback Board</p>
        </div>
      </CardContent>
    </Card>
  )
}

export default HeaderCard
