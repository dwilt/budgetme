import '../src/styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '../src/utils/query'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { UserProfile, UserProvider } from '@auth0/nextjs-auth0'

function MyApp({ Component, pageProps }: AppProps<{ user?: UserProfile }>) {
  return (
    <UserProvider user={pageProps.user}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </LocalizationProvider>
    </UserProvider>
  )
}

export default MyApp
