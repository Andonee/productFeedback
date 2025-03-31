import { Navbar } from './_components/navbar'

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>
        <div className='flex h-full w-full flex-col items-center justify-center gap-y-10 bg-sky-500'>
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  )
}

export default ProtectedLayout
