'use client'

import { usePrefersColorScheme } from '@/utils/hooks';

export default function DarkThemeManager({
  children,
}: {
  children: React.ReactNode
}) {
  const prefersColorsScheme = usePrefersColorScheme();
  console.log('dpb prefersColorsScheme', prefersColorsScheme);

  if ((prefersColorsScheme === 'dark' && !document.body.classList.contains('dark')) ||
    (prefersColorsScheme === 'light' && document.body.classList.contains('dark'))) {
    document.body.classList.toggle("dark");
  }

  return children
}
