const getPosts = async () => {
  
  const dbObj = await FILES.list()
  if(dbObj === null) {
    return new Response('KV namespace not found', {status: 404})
  }
  
  const postKeys = []
  for(const key in dbObj.keys) {
    postKeys.push(dbObj.keys[key].name)
  }

  const postsList = []
  let post
  for(let i = 0; i < postKeys.length; i++){
    post = await FILES.get(postKeys[i])
    if(post === null) {
      return new Response(`Value ${postKeys} not found`, {status: 404})
    }
    postsList.push(post)
  }

  const body = JSON.stringify(await postsList)

  const headers = { 
    'Access-Control-Allow-Origin': '*',
    'Content-type': 'application/json' 
  }
  return new Response(body, { headers })
}
export default getPosts