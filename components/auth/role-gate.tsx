'use client'

import { UserRole } from '@/app/types/enums'
import { useCurrentRole } from '@/hooks/useCurrentRole'
import FormError from '../shared/FormError/FormError'

interface RoleGateProps {
  children: React.ReactNode
  allowedRole: UserRole
}

export const RoleGate = ({ children, allowedRole }: RoleGateProps) => {
  const role = useCurrentRole()

  if (role !== allowedRole) {
    return <FormError message='You do not have permission to see the content' />
  }

  return <>{children}</>
}
