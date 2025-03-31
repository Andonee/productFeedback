import { createTranslator } from 'next-intl'
import { getLocale } from 'next-intl/server'

export const getServerTranslation = async (namespace: string) => {
  const locale = await getLocale()

  const messages = (await import(`../messages/${locale}.json`)).default

  const t = createTranslator({ locale, namespace, messages })
  return t
}
