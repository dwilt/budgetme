export const getUser = (
  id: string | undefined
): Promise<{
  id: number
  email: string
}> => {
  return fetch(`${process.env.NEXT_PUBLIC_API_HOST}/user/${id}`).then(
    async (res) => {
      const json = await res.json()
      if (!res.ok) {
        throw new Error(json.message)
      }

      return json
    }
  )
}
