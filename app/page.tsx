import HeaderCard from './components/HeaderCard/HeaderCard'
import RoadmapCard from './components/RoadmapCard'
import TagsCard from './components/TagsCard'

export default function Home() {
  return (
    <>
      <div className='col-span-12 md:col-span-4 xl:col-span-3'>
        <HeaderCard />
      </div>
      <div className='md:col-start-5 md:col-end-9 xl:col-start-1 xl:col-end-4'>
        <TagsCard />
      </div>
      <div className='md:col-start-9 md:col-end-13 xl:col-start-1 xl:col-end-4'>
        <RoadmapCard />
      </div>
    </>
  )
}
