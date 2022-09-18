export type ApiError = {
  status: number
  statusText: string
  message: string
}

export type ApiErrorEventListener = (error: ApiError) => void

const listeners: ApiErrorEventListener[] = []

export const addErrorEventListener = (listener: ApiErrorEventListener) => {
  listeners.push(listener)

  return () => {
    const index = listeners.indexOf(listener)
    if (index > -1) {
      listeners.splice(index, 1)
    }
  }
}

export const apiFetch = (pathname?: string, init?: RequestInit) => {
  return fetch(`${process.env.NEXT_PUBLIC_API_HOST}${pathname}`, {
    headers: {
      ['Content-Type']: 'application/json',
    },
    ...init,
  }).then(async (res) => {
    const json = await res.json()
    if (!res.ok) {
      listeners.forEach((listener) =>
        listener({
          status: res.status,
          statusText: res.statusText,
          message: json.message || `An unknown error occurred`,
        })
      )

      throw new Error(json.message)
    }

    return json
  })
}
