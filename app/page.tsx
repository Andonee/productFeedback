import HeaderCard from './components/HeaderCard/HeaderCard'
import RoadmapCard from './components/RoadmapCard'
import TagsCard from './components/TagsCard'

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
    </main>
  )
}
