import { FastifyInstance } from 'fastify'
import axios from 'axios'
import {z} from 'zod'

export async function authRoutes(app: FastifyInstance) {
  app.post(
    '/register', async(request) => {
      const bodySchema = z.object({
        code: z.string(),
      })

      const { code } = bodySchema.parse(request.body)

      const accessTokenResponse = await axios.post(
        'https://github.com/login/oauth/acess_token',
        null,
        {
          params: {
            cliente_id: process.env.GITHUB_CLIENT_ID,
            cliente_secret: process.env.GITHUB_CLIENT_SECRET,
            code,
          },
          headers: {
            Accept: 'application/json',
          },
        },
      )

      const { acess_token } = accessTokenResponse.data

      return {
        acces_token,
      }
    }),
  
}
