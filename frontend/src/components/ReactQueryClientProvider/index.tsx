'use client'

import { useState } from 'react'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

type ReactQueryClientProviderProps = {
  children: React.ReactNode,
}

export const ReactQueryClientProvider = (props: ReactQueryClientProviderProps) => {
  const { children } = props
  
  const [queryClient] = useState(
    () => new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: 60 * 1000,
        },
      },
    })
  )

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}