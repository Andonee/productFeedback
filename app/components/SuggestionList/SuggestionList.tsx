import Suggestion from './Suggestion'

const SuggestionList = () => {
  return (
    <div className='flex h-full flex-col gap-4'>
      <Suggestion />
      <Suggestion />
      <Suggestion />
      <Suggestion />
      {/* <NoSuggestions /> */}
    </div>
  )
}

export default SuggestionList
