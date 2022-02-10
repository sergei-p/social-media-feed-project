import { Router } from 'itty-router'

import getPosts from './handlers/getPosts'
import getPost from './handlers/getPost'
import postPost from './handlers/postPost'
import deletePost from './handlers/deletePost'


const router = Router()

router
  .get('/api/posts', getPosts)
  .get('/api/posts/:id', getPost)
  .post('/api/posts', postPost)
  .delete('/api/posts/:id', deletePost)
  .get('*', () => new Response("Not found", { status: 404 }))

export const handleRequest = request => router.handle(request)