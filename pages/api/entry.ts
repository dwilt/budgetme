import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0'
import { NextApiRequest, NextApiResponse } from 'next'

export default withApiAuthRequired(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const { accessToken } = await getAccessToken(req, res)

    const url = `${process.env.NEXT_PUBLIC_API_HOST}${
      req.url?.split('/api')[1]
    }`

    switch (req.method) {
      case 'GET':
        fetch(url, {
          headers: {
            ['Content-Type']: 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
        })
          .then(async (res) => {
            const json = await res.json()
            if (!res.ok) {
              throw new Error(json.message)
            }

            return json
          })
          .then((entries) => {
            res.json(entries)
          })
          .catch((err) => {
            console.log('err :>> ', err)
          })

      default:
        break
    }
  }
)
