'use client'

import { useLang } from '@/lib/i18n'

export default function FooterSection() {
  const { t } = useLang()
  return (
    <footer className="py-12 px-6 md:px-12 bg-black w-full border-t border-zinc-800 text-center text-sm text-gray-500">
      {t('footer_copy')}
    </footer>
  )
}
