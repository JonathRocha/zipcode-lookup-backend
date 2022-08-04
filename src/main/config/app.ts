import { setupApolloServer } from '@/main/config/apolloServer'

import express from 'express'

const app = express()

void setupApolloServer(app)

export default app
