const getPost = async request => {
  const post = await FILES.get(request.params.id)
  if(post === null) {
    return new Response(`Post with key: ${request.params.id} does not exist`, {status: 404})
  }
  const headers = { 
    'Access-Control-Allow-Origin': '*',
    'Content-type': 'application/json' 
  }

  return new Response(post, { headers })
} 


export default getPost