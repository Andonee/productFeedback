import HeaderCard from './components/HeaderCard/HeaderCard'
import RoadmapCard from './components/RoadmapCard'
import TagsCard from './components/TagsCard'
import Topbar from './components/Topbar'

export default function Home() {
  return (
    <main className='grid grid-cols-12 gap-4'>
      <div className='col-span-12 hidden md:col-span-4 md:block xl:col-span-3'>
        <HeaderCard />
      </div>
      <div className='hidden md:col-start-5 md:col-end-9 md:block xl:col-start-1 xl:col-end-4'>
        <TagsCard />
      </div>
      <div className='hidden md:col-start-9 md:col-end-13 md:block xl:col-start-1 xl:col-end-4'>
        <RoadmapCard />
      </div>
      <div className='col-span-12 col-start-1 col-end-13 md:col-span-12 xl:col-start-4 xl:col-end-13 xl:row-start-1'>
        <Topbar />
      </div>
    </main>
  )
}
