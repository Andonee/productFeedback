'use client'

import { UserRole } from '@/app/types/enums'
import { useCurrentRole } from '@/hooks/useCurrentRole'
import { useTranslations } from 'next-intl'
import FormError from '../shared/FormError/FormError'

interface RoleGateProps {
  children: React.ReactNode
  allowedRole: UserRole
}

export const RoleGate = ({ children, allowedRole }: RoleGateProps) => {
  const role = useCurrentRole()
  const t = useTranslations('Authentication')

  if (role !== allowedRole) {
    return <FormError message={t('noPermission')} />
  }

  return <>{children}</>
}
