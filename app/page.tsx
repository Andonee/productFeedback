import HeaderCard from './components/HeaderCard/HeaderCard'
import RoadmapCard from './components/RoadmapCard'
import TagsCard from './components/TagsCard'

export default function Home() {
  return (
    <div className='w-[255px]'>
      <HeaderCard />
      <TagsCard />
      <RoadmapCard />
    </div>
  )
}
