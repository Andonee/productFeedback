import { Navbar } from './_components/navbar'

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex h-full w-full flex-col items-center justify-center gap-y-10 bg-sky-500'>
      <Navbar />
      {children}
    </div>
  )
}

export default ProtectedLayout
