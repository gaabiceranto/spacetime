import { FastifyInstance } from 'fastify'

export async function memoriesRoutes(app: FastifyInstance) {
  app.get('/memories', async () => {

    const memories = await prisma.memories.findMany({
        orderBy:{
            createdAt:'asc',
        },
    })

    return memories.map((memory)=>{
        return{
            id:memory.id,
            coverUrl:memory.coverUrl,
            excerpt:memory.content.substring(0,115).concat('...')
        }
    })
  })

  app.get('/memories/:id', async () => {
    const users = await prisma.user.findMany()
    return users
  })

  app.post('/memories', async () => {
    const users = await prisma.user.findMany()
    return users
  })

  app.put('/memories/:id', async () => {
    const users = await prisma.user.findMany()
    return users
  })

  app.delete('/memories/:id', async () => {
    const users = await prisma.user.findMany()
    return users
  })

}
