'use client'
import { UserRole } from '@/app/types/enums'
import { RoleGate } from '@/components/auth/role-gate'
import FormSuccess from '@/components/shared/FormSuccess/FormError'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

const AdminPage = () => {
  const onApiROuteClick = () => {
    fetch('/api/admin').then(response => {
      if (response.ok) {
        console.log('OK')
      } else {
        console.error('FORBIDDEN')
      }
    })
  }
  return (
    <Card className='w-[600px]'>
      <CardHeader>
        <p className='text-center text-2xl font-semibold'>Admin</p>
      </CardHeader>
      <CardContent className='space-y-4'>
        <RoleGate allowedRole={UserRole.ADMIN}>
          <FormSuccess message='You are allowed to see this content' />
        </RoleGate>
        <div className='flex flex-row items-center justify-between rounded-lg border p-3 shadow-md'>
          <p>Admin-only API Route</p>
          <Button onClick={onApiROuteClick}>Click to test</Button>
        </div>
        <div className='flex flex-row items-center justify-between rounded-lg border p-3 shadow-md'>
          <p>Admin-only Server Action</p>
          <Button>Click to test</Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default AdminPage
