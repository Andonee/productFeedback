const FeaturePage = async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const id = (await params).id

  return (
    <div>
      <div>Title</div>
      <div>Content</div>
    </div>
  )
}

export default FeaturePage
