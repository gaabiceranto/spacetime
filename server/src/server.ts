import fastify from 'fastify'
import { prisma } from './lib/prisma'
import { memoriesRoutes } from './routes/memories'

const app = fastify()

app.register(memoriesRoutes)
app.get('/users', async () => {
  const users = await prisma.user.findMany()
  return users
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('👌HTTP server running on http://localhost:3333')
  })
