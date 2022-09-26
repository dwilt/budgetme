const key = 'access-token'

export const getAccessToken = () => {
  return localStorage.getItem(key)
}

export const setAccessToken = (token: string) => {
  return localStorage.setItem(key, token)
}

export const removeAccessToken = () => {
  return localStorage.removeItem(key)
}
