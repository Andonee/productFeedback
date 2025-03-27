'use client'
import { newVerification } from '@/app/actions/new-verification'
import { useSearchParams } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'
import { BeatLoader } from 'react-spinners'
import FormError from '../shared/FormError/FormError'
import FormSuccess from '../shared/FormSuccess/FormError'
import CardWrapper from './CardWrapper'

const NewVerificationForm = () => {
  const [error, setError] = useState<string | undefined>()
  const [success, setSuccess] = useState<string | undefined>()

  const searchParams = useSearchParams()

  const token = searchParams.get('token')

  const onSubmit = useCallback(() => {
    if (success || error) return

    if (!token) {
      setError('Missing token!')
      return
    }

    newVerification(token)
      .then(data => {
        setSuccess(data.success)
        setError(data.error)
      })
      .catch(() => {
        setError('Something went wrong!')
      })
  }, [token, success, error])

  useEffect(() => {
    onSubmit()
  }, [onSubmit])

  return (
    <CardWrapper
      headerLabel='Confirming your verification'
      backButtonHref='/auth/login'
      backButtonLabel='Back to login'
    >
      {!error && !success && (
        <div className='flex w-full items-center justify-center'>
          <BeatLoader />
        </div>
      )}
      <FormError message={error} />
      <FormSuccess message={success} />
    </CardWrapper>
  )
}

export default NewVerificationForm
