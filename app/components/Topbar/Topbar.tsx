import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { colors } from '@/components/ui/colors'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { bulbIcon } from '@/public/assets/icons'
import { PlusIcon } from 'lucide-react'

const Topbar = () => {
  return (
    <Card className='flex h-[50%] w-full rounded-none bg-ravenNight p-6 px-2 py-6 md:rounded-xl md:p-6'>
      <CardContent className='flex w-full items-center justify-between'>
        <div className='flex items-center justify-between gap-4'>
          <div className='hidden md:block'>{bulbIcon({})}</div>
          <div className='hidden font-bold text-cottonBall md:block'>
            6 Suggestions
          </div>
          <div>
            <Select>
              <SelectTrigger
                className='w-[180px] text-cottonBall'
                label='Sort by:'
                placeholder='Sort by:'
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem
                  value='apple'
                  className='text-oceanNight hover:!text-promiscuousPink [&_svg]:text-promiscuousPink'
                >
                  Apple
                </SelectItem>
                <SelectSeparator />

                <SelectItem
                  value='orange'
                  className='text-oceanNight hover:!text-promiscuousPink [&_svg]:text-promiscuousPink'
                >
                  Orange
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <Button className='bg-promiscuousPink text-cottonBall hover:bg-promiscuousPink/90'>
          <PlusIcon color={colors.cottonBall} /> Add Feedback
        </Button>
      </CardContent>
    </Card>
  )
}

export default Topbar
