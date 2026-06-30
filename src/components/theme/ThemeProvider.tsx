'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { useEffect, useState } from 'react';

// next-themes injects an inline <script> tag to avoid theme flash on load.
// React 19 warns about any <script> rendered inside a component, but this
// is a known false positive for next-themes (it works correctly during SSR).
// See: https://github.com/pacocoursey/next-themes/issues/387
// if (typeof window !== 'undefined') {
//   const originalError = console.error;
//   console.error = (...args: unknown[]) => {
//     if (
//       typeof args[0] === 'string' &&
//       args[0].includes('Encountered a script tag while rendering React component')
//     ) {
//       return;
//     }
//     originalError(...args);
//   };
// }

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}