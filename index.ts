import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient(
    // { log: ['query', 'info', 'warn', 'error'] }
)

async function main() {
    // let target = Array.from({ length: 25 }, () => Math.floor(Math.random() * (1000000 - 950000) + 950000));
    // console.log("---QUERY START---")

    let counter = 0
    let avg = 0

    while (true) {
        // const postId = Math.floor(Math.random() * (2000000 - 1 + 1) + 1)
        const start = new Date().getTime();
        await prisma.post.findUnique({
            where: {
                id: Math.floor(Math.random() * (2000000 - 1 + 1) + 1)
            },
            include: {
                _count: {
                    select: {
                        likes: true,
                        comments: true,
                        vote: true
                    }
                },
                author: true,
                comments: true
            }
        })
        // console.log("---QUERY END---")
        const elasped = new Date().getTime() - start       
        console.log(`Query time: ${elasped}ms`)
    }
}