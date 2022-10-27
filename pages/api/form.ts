import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  data: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const body = req.body
  console.log('body: ', body)

  // Both of these are required.
  if (!body.username || !body.password) {
    return res.json({ data: 'username or password missing' })
  }

  // Found the name.
  res.json({ data: `username:${body.username}, password:${body.password}` })
}
