import Image from 'next/image'
import Link from 'next/link'
import { useUser } from '@auth0/nextjs-auth0'

export const Header = () => {
  const { user } = useUser()

  return (
    <header>
      {!!user?.name && !!user?.picture && (
        <Link href="/api/auth/logout">
          <a>
            <Image alt={user.name} src={user.picture} width={40} height={40} />
          </a>
        </Link>
      )}
    </header>
  )
}
