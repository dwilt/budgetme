import { User } from './types'

export const getCurrentUser = (): Promise<User> => {
  return fetch(`${process.env.NEXT_PUBLIC_API_HOST}/user/current`, {
    credentials: 'include',
  }).then(async (res) => {
    const json = await res.json()
    if (!res.ok) {
      throw new Error(json.message)
    }

    return json
  })
}
