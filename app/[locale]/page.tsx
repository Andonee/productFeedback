import HeaderCard from '../components/HeaderCard/HeaderCard'
import RoadmapCard from '../components/RoadmapCard'
import SuggestionList from '../components/SuggestionList'
import TagsCard from '../components/TagsCard'
import Topbar from '../components/Topbar'

export default function Home() {
  return (
    <main className='flex w-full flex-col md:h-full md:gap-4 xl:flex-row xl:gap-8'>
      <div className='flex w-full justify-between gap-4 xl:w-64 xl:flex-col xl:justify-normal xl:gap-4'>
        <div className='hidden w-full md:block'>
          <HeaderCard />
        </div>
        <div className='hidden w-full md:block'>
          <TagsCard />
        </div>
        <div className='hidden w-full md:block'>
          <RoadmapCard />
        </div>
      </div>
      <div className='flex flex-1 flex-col gap-4'>
        <Topbar />
        <div className='h-full px-4 md:px-0'>
          <SuggestionList />
        </div>
      </div>
    </main>
  )
}
