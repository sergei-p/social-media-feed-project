const deletePost = async request => {
  await FILES.delete(request.params.id)
  return new Response(`Post with key: ${request.params.id} has been deleted`, {status: 200})
}

export default deletePost