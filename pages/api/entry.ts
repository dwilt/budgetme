import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0'
import { NextApiRequest, NextApiResponse } from 'next'

export default withApiAuthRequired(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const { accessToken } = await getAccessToken(req, res)
    const pathname = req.url?.split('/api')[1]
    const url = `${process.env.NEXT_PUBLIC_API_HOST}${pathname}`

    try {
      const data = await fetch(url, {
        headers: {
          ['Content-Type']: 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        method: req.method,
        body:
          Object.keys(req.body).length > 0
            ? JSON.stringify(req.body)
            : undefined,
      }).then(async (apiRes) => {
        const json = await apiRes.json()

        if (!apiRes.ok) {
          const error = json.message || 'An unknown error occurred'

          res.status(apiRes.status).send({
            error,
          })

          throw new Error(error)
        }

        return json
      })

      res.json(data)
    } catch (error) {
      console.log('error :>> ', error)
      // do some error handling
    }
  }
)
